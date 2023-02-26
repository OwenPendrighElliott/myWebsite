import React, { useState, useEffect, useRef } from 'react';
import LoginMessage from './terminalBootup';
import directoryStructure from '@/commandLogic/folderStructure';
import helpStr from '@/commandLogic/help';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectBiscuitCrumbs,
  selectCommands,
  selectPureCommands,
  selectResponses,
  setCommands,
  setDirBiscuitCrumbs,
  setPureCommands,
  setResponses,
} from '@/store/commandlineSlice';
import processCommand from '@/commandLogic/commandProcessor';

let promptLine = 'guest@my-website:~';

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

  const responses = useSelector(selectResponses);
  const commands = useSelector(selectCommands);
  const pureCommands = useSelector(selectPureCommands);
  const dirBiscuitCrumbs = useSelector(selectBiscuitCrumbs);

  const [commandIndex, setCommandIndex] = useState<number>(commands.length);
  const [currentCommand, setCurrentCommand] = useState<string>('');

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

  const onFormSubmit = (e: any) => {
    console.log(e.target.value);
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

    // if enter key then submit
    if (e.keyCode == 13 && e.shiftKey == false) {
      setCommandIndex(pureCommands.length);
      onFormSubmit(e);
    }
  }
  return (
    <>
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
          />
        </div>
      </div>
    </>
  );
};

export default CommandLine;
