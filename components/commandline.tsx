import React, { useState, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectBiscuitCrumbs,
  selectCommands,
  selectPureCommands,
  selectResponses,
  selectUsername,
  setCommands,
  setDirBiscuitCrumbs,
  setPureCommands,
  setResponses,
} from '@/store/commandlineSlice';
import processCommand, { autoCompleteDir } from '@/commandLogic/commandProcessor';

const LoginMessage = dynamic(() => import('./terminalBootup'), { ssr: false });

function interleaveHistory(commands: string[], responses: string[]): JSX.Element[] {
  let interleavedArr: JSX.Element[] = [];
  for (let i = 0; i < commands.length; i++) {
    interleavedArr.push(<span>{commands[i]}</span>);
    interleavedArr.push(<span>{responses[i]}</span>);
  }
  return interleavedArr;
}

const CommandLine = () => {
  const dispatch = useDispatch();

  const username = useSelector(selectUsername);
  const responses = useSelector(selectResponses);
  const commands = useSelector(selectCommands);
  const pureCommands = useSelector(selectPureCommands);
  const dirBiscuitCrumbs = useSelector(selectBiscuitCrumbs);

  const [promptLine, setPromptLine] = useState<string>('guest@oe-dev:~');

  const [commandIndex, setCommandIndex] = useState<number>(commands.length);
  const [currentCommand, setCurrentCommand] = useState<string>('');

  useEffect(() => {
    setPromptLine(`${username}@my-website:~`);
  }, [username]);

  function updateCommands(commands: string[]) {
    dispatch(setCommands(commands));
  }
  function updatePureCommands(commands: string[]) {
    dispatch(setPureCommands(commands));
  }
  function updateResponses(responses: string[]) {
    dispatch(setResponses(responses));
  }
  function updateBiscuitCrumbs(dirBiscuitCrumbs: string[]) {
    dispatch(setDirBiscuitCrumbs(dirBiscuitCrumbs));
  }

  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);
  }, [responses]);

  const onFormSubmit = (e: any) => {
    e.preventDefault();
    let command: string = e.target.value;

    let tmpSentCommands = [...commands];
    tmpSentCommands.push(promptLine + dirBiscuitCrumbs.join('/') + '$ ' + command);
    updateCommands(tmpSentCommands);

    updatePureCommands([...pureCommands, command]);

    let response = processCommand({
      command: command,
      dirBiscuitCrumbs: dirBiscuitCrumbs,
      updateCommands: updateCommands,
      updateResponses: updateResponses,
      updateBiscuitCrumbs: updateBiscuitCrumbs,
      updateCurrent: setCurrentCommand,
    });
    if (response == 'clear') return;

    let tmpResponses = [...responses];
    tmpResponses.push(response);
    updateResponses(tmpResponses);

    setCurrentCommand('');
  };

  function specialKeyActions(e: any) {
    // if up arrow then cycle command up
    if (e.keyCode == 38) {
      if (commandIndex > 0) {
        setCurrentCommand(pureCommands[commandIndex]);
        setCommandIndex(commandIndex - 1);
      }
    }

    // if down arrow then cycle commands down
    if (e.keyCode == 40) {
      if (commandIndex < pureCommands.length) {
        setCurrentCommand(pureCommands[commandIndex]);
        setCommandIndex(commandIndex + 1);
      }
    }

    // if tab then autocomplete
    if (e.keyCode == 9) {
      e.preventDefault();
      let autoCompleteCommand = autoCompleteDir(currentCommand, dirBiscuitCrumbs);
      setCurrentCommand(autoCompleteCommand);
    }

    // if enter key then submit
    if (e.keyCode == 13 && e.shiftKey == false) {
      setCommandIndex(pureCommands.length);
      onFormSubmit(e);
    }
  }
  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"></meta>
      <div className={'terminal'}>
        <div className="multiline">
          <LoginMessage />
        </div>
        {interleaveHistory(commands, responses).map((txt: JSX.Element, i: number) => {
          return (
            <div key={i.toString()} style={{ whiteSpace: 'pre-wrap' }}>
              {txt}
            </div>
          );
        })}

        <div className="terminal-line">
          <label id="prompt" htmlFor={'textarea'}>
            {promptLine + dirBiscuitCrumbs.join('/') + '$ '}
          </label>
          <textarea
            id="textarea"
            value={currentCommand}
            onChange={(e: any) => setCurrentCommand(e.target.value)}
            onKeyDown={specialKeyActions}
            rows={8}
            autoCapitalize="off"
            autoCorrect="off"
          />
        </div>
      </div>
    </>
  );
};

export default CommandLine;
