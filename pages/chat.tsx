import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useMemo, useRef, useState } from 'react';
import { joinRoom, DataPayload, Room } from 'trystero';

type NameMap = Record<string, DataPayload>;
interface ChatMessage {
  name: string;
  message: string;
  timestamp: number;
}

const CONFIG = { appId: 'oe.dev' } as const;

function getCurrentTimestampMs(): number {
  return Math.floor(Date.now() / 1000);
}

type RoomMessageChatProps = {
  messages: ChatMessage[];
  currentUserName: string;
  onSendMessage: (message: ChatMessage) => void;
};

const MessageChat = ({ messages, currentUserName, onSendMessage }: RoomMessageChatProps) => {
  const [newMessage, setNewMessage] = useState('');

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewMessage(e.target.value);
  };

  const sendMessage = (message: string) => {
    const chatMessage: ChatMessage = {
      name: currentUserName,
      message,
      timestamp: getCurrentTimestampMs(),
    };
    onSendMessage(chatMessage);
  };

  return (
    <div className="room-chat">
      {messages.map((msg, index) => (
        <div
          key={index}
          className={`chat-message ${msg.name === currentUserName ? 'current-user-message' : 'other-user-message'}`}
        >
          <span className="chat-name">{msg.name}</span>
          <span className="chat-text">{msg.message}</span>
          <span className="chat-timestamp">
            {new Date(msg.timestamp * 1000).toLocaleTimeString()}
          </span>
        </div>
      ))}
      <div className="chat-input-container">
        <textarea
          className="chat-input"
          placeholder="Type your message here..."
          value={newMessage}
          onChange={handleMessageChange}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              if (newMessage.trim()) {
                sendMessage(newMessage);
                setNewMessage('');
              }
            }
          }}
        />
        <button
          className="chat-send-button"
          onClick={() => {
            if (newMessage.trim()) {
              sendMessage(newMessage);
              setNewMessage('');
            }
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
};

const Chat = () => {
  const router = useRouter();
  const roomSlug = router.query.room;
  const [userEnteredRoom, setUserEnteredRoom] = useState<string | null>(null);
  const [yourName, setYourName] = useState('');
  const [idsToNames, setIdsToNames] = useState<NameMap>({});
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [selfStream, setSelfStream] = useState<MediaStream | null>(null);

  const room: Room | null = useMemo(
    () => (router.isReady && typeof roomSlug === 'string' ? joinRoom(CONFIG, roomSlug) : null),
    [router.isReady, roomSlug],
  );

  const nameRef = useRef('');
  useEffect(() => {
    nameRef.current = yourName;
  }, [yourName]);

  useEffect(() => {
    if (!room) return;
    const [sendName, getName] = room.makeAction<string>('name',);
    // messages are sent as a stringified JSON object
    const [sendMessage, getMessages] = room.makeAction<string>('message');

    // names
    getName((name, peerId) => setIdsToNames((prev) => ({ ...prev, [peerId]: name })));

    // messages
    getMessages((message, peerId) => {
      const parsedMessage: ChatMessage = JSON.parse(message);
      setMessages((prev) => [...prev, parsedMessage]);
    });

    if (nameRef.current) sendName(nameRef.current);

    // room.onPeerJoin((peerId) => {
    //   console.log(`Peer joined: ${peerId}`);
    // });

    room.onPeerJoin(peerId => {
      // ① send them your name
      if (nameRef.current) sendName(nameRef.current, peerId);

      // ② sync the chat history
      messages.forEach(msg => sendMessage(JSON.stringify(msg), peerId));

      // ③ any extra side-effects (logging, etc.)
      console.log(`Peer joined: ${peerId}`);
    });


    return () => {
      room.leave();
    };
  }, [room]);

  useEffect(() => {
    if (!room || !yourName) return;
    const [sendName] = room.makeAction<string>('name');
    sendName(yourName);
  }, [room, yourName]);


  const handleSendMessageToPeers = (message: ChatMessage) => {
    if (!room) return;
    setMessages((prev) => [...prev, message]);
    const [sendMessage] = room.makeAction<string>('message');
    const messageToSend = JSON.stringify(message);
    sendMessage(messageToSend);
  };

  async function startVoiceStream(room: Room | null) {
    if (!room) return;
    const newSelfStream =  await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: false
    });
    setSelfStream(newSelfStream);
  };

  async function removeVoiceStream(room: Room | null) {
    if (!room || !selfStream) return;
    room.removeStream(selfStream);
    selfStream.getTracks().forEach((track) => track.stop());
    setSelfStream(null);
  }

  
  if (!router.isReady || !room) return (
    <div className="page">
      <Head>
        <title>Chat</title>
        <meta name="og:title" content="Chat" />
        <meta name="og:description" content="Peer-to-peer chat interface with WebRTC" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <h1>Enter a room ID:</h1>
      <input
        type="text"
        placeholder="Room ID"
        value={userEnteredRoom || ''}
        onChange={(e) => setUserEnteredRoom(e.target.value)}
      />
      <button
        onClick={() => {
          if (userEnteredRoom) router.push(`/chat?room=${userEnteredRoom}`);
        }}
      >
        Join Room
      </button>
    </div>
  );

  return (
    <div className="page">
      <Head>
        <title>Chat</title>
        <meta name="og:title" content="Chat" />
        <meta name="og:description" content="Peer-to-peer chat interface with WebRTC" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <h1>Chat Room: {roomSlug}</h1>

      <input
        placeholder="Enter your name"
        value={yourName}
        onChange={(e) => setYourName(e.target.value)}
      />

      <h2>Peers</h2>
      <ul>
        {Object.entries(idsToNames).map(([id, name]) => (
          <li key={id}>
            {id}: {name?.toString() || 'Unknown'}
          </li>
        ))}
      </ul>
      <h2>Messages</h2>
      <MessageChat
        messages={messages}
        currentUserName={yourName}
        onSendMessage={handleSendMessageToPeers}
      />
    </div>
  );
};

export default Chat;
