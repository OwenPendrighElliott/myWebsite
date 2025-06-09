import { ChatMessage } from '@/pages/chat';

const PREFIX = 'oe.devChatDB';
const NAME_KEY = `${PREFIX}:username`;
const msgKey = (roomId: string) => `${PREFIX}:messages:${roomId}`;
const nameKey = (roomId: string) => `${PREFIX}:name:${roomId}`;

function read<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function write(key: string, value: unknown): void {
  localStorage.setItem(key, JSON.stringify(value));
}

export function getMessagesFromDB(roomId: string): ChatMessage[] {
  return read<ChatMessage[]>(msgKey(roomId), []);
}

export function updateMessagesToDB(roomId: string, updates: ChatMessage | ChatMessage[]): void {
  const existing = getMessagesFromDB(roomId);
  const next = Array.isArray(updates) ? updates : [...existing, updates];
  write(msgKey(roomId), next);
}

export function getNameFromDB(roomId: string): string | null {
  return read<string | null>(nameKey(roomId), null);
}

export function updateNameToDB(roomId: string, name: string): void {
  write(nameKey(roomId), name);
}
