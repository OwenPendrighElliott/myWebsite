import React, { useState, useEffect, useRef } from 'react';
import LoginMessage from './terminalBootup';

const loginMessage = `
login as: guest
###################################################################################################
#                                         Welcome to Linux.                                       #
#                      Red Hat Enterprise Linux Server release 6.5 (Santiago)                     #
#                                                                                                 #
# You are on the latest stable release                                                            #
# Run 'help' for tips on getting started                                                          #
# It is best to have a warning banner dis Authenticating with public key "imported-openssh-key"   #
# Last login: Tue May 24 12:02:29 2016 from 121.242.106.34                                        #
###################################################################################################
`;

const promptLine = "guest@my-website:-$";

function interleaveHistory(commands: string[], responses: string[]): string[] {
  let interleavedArr: string[] = [];
  for (let i = 0; i < commands.length; i++) {
    interleavedArr.push("guest@my-website:-$ " + commands[i], responses[i]);
  }
  return interleavedArr;
};


function CommandLine() {
  const [responses, setResponses] = useState<string[]>([]);
  const [sentCommands, setSentCommands] = useState<string[]>([]);
  const [selectedPrevCommand, setSelectedPrevCommand] = useState<number>(-1);

  const [currentCommand, setCurrentCommand] = useState<string>('');

  const commandForm = useRef(null);

  function processCommand(command: string): string {
    if (command=="clear") {
      setSentCommands([]);
      setResponses([]);
      setCurrentCommand('');
      return "";
    }


    return "Executed " + command;
  }

  const onFormSubmit = (e: any) => {
    console.log(e.target.value);
    e.preventDefault();
    let command: string = e.target.value;

    let tmpSentCommands = [...sentCommands];
    tmpSentCommands.push(command);
    setSentCommands(tmpSentCommands);

    let response = processCommand(command);
    if (response) {
      let tmpResponses = [...responses];
      tmpResponses.push(response);
      setResponses(tmpResponses);
    }
    setCurrentCommand("");
  }

  useEffect(() => {
    console.log(currentCommand);
  }, [currentCommand])

  function submitOnEnter(e: any) {
    if (e.keyCode == 13 && e.shiftKey == false) {
      onFormSubmit(e);
    }
  }
  return (
    <>
      
      <div className={'terminal'}>
        <div className='multiline'>
        <LoginMessage/>
        </div>
        {interleaveHistory(sentCommands, responses).map(
          (txt: string, i: number) => {
            return <div key={i.toString()}>{txt}</div>
          }
        )}

        <div className='terminal-line'>
          <label id="prompt" htmlFor={"textarea"}>{promptLine}</label>
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
  )
}


export default CommandLine;