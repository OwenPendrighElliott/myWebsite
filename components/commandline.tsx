import React, { useState, useEffect, useRef } from 'react';
import LoginMessage from './terminalBootup';
import directoryStructure from '@/commandLogic/folderStructure';
import helpStr from '@/commandLogic/help';

let promptLine = 'guest@my-website:~';

function interleaveHistory(commands: string[], responses: string[]): string[] {
  let interleavedArr: string[] = [];
  for (let i = 0; i < commands.length; i++) {
    interleavedArr.push(commands[i], responses[i]);
  }
  return interleavedArr;
}

function CommandLine() {
  const [responses, setResponses] = useState<string[]>([]);
  const [sentCommands, setSentCommands] = useState<string[]>([]);
  const [dirBiscuitCrumbs, setDirBiscuitCrumbs] = useState<string[]>(['']);
  const [selectedPrevCommand, setSelectedPrevCommand] = useState<number>(-1);

  const [currentCommand, setCurrentCommand] = useState<string>('');

  function processCommand(command: string): string {
    if (command == 'clear') {
      setSentCommands([]);
      setResponses([]);
      setCurrentCommand('');
      return '';
    }
    let commandParts = command.split(' ');
    if (commandParts[0] == 'cd') {
      let attemptedDir = commandParts[1];
      if (attemptedDir == '..') {
        let tmpCrumbs = dirBiscuitCrumbs;
        tmpCrumbs.pop();
        setDirBiscuitCrumbs(tmpCrumbs);
        return '';
      }
      if (
        directoryStructure.get(dirBiscuitCrumbs[dirBiscuitCrumbs.length - 1]).includes(attemptedDir)
      ) {
        setDirBiscuitCrumbs([...dirBiscuitCrumbs, attemptedDir]);
        return '';
      }
      return "Error: No directory called '" + attemptedDir + "'";
    }

    if (commandParts[0] == 'ls') {
      return directoryStructure.get(dirBiscuitCrumbs[dirBiscuitCrumbs.length - 1]).join(' ');
    }

    if (command == 'help') {
      return helpStr;
    }

    return 'Executed ' + command;
  }

  const onFormSubmit = (e: any) => {
    console.log(e.target.value);
    e.preventDefault();
    let command: string = e.target.value;

    let tmpSentCommands = [...sentCommands];
    tmpSentCommands.push(promptLine + dirBiscuitCrumbs.join('/') + '$ ' + command);
    setSentCommands(tmpSentCommands);

    let response = processCommand(command);

    let tmpResponses = [...responses];
    tmpResponses.push(response);
    setResponses(tmpResponses);

    setCurrentCommand('');
  };

  function submitOnEnter(e: any) {
    if (e.keyCode == 13 && e.shiftKey == false) {
      onFormSubmit(e);
    }
  }
  return (
    <>
      <div className={'terminal'}>
        <div className="multiline">
          <LoginMessage />
        </div>
        {interleaveHistory(sentCommands, responses).map((txt: string, i: number) => {
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
            onKeyDown={submitOnEnter}
            rows={8}
          />
        </div>
      </div>
    </>
  );
}

export default CommandLine;
