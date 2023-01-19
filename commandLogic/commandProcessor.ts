import React, { useState } from 'react';

const directoryStructure = new Map();
directoryStructure.set('guest', ['Pages', 'Projects', 'About']);
directoryStructure.set('Pages', ['thisWebsite.page']);
directoryStructure.set('Projects', [
  'Training a Neural Network with a Genetic Algorithm.page',
  'Drawing Distributions.page',
]);
directoryStructure.set('About', ['music.page', 'resume.page']);

function executeCommand(command: string) {
  const [dirBiscuitCrumbs, setDirBiscuitCrumbs] = useState<string[]>(['guest']);
  switch (command.split(' ')[0]) {
    case 'ls':
      let subdirs = directoryStructure.get(dirBiscuitCrumbs[dirBiscuitCrumbs.length - 1]);
      return subdirs;
    case 'cd':
      let attemptedDir = command.split(' ')[1];

      // if (attemptedDir == "..") {
      //     setCurrentDir
      // }

      if (attemptedDir in directoryStructure.get(dirBiscuitCrumbs[dirBiscuitCrumbs.length - 1])) {
        setDirBiscuitCrumbs([...dirBiscuitCrumbs]);
        return '';
      }
      return "Error: No directory called '" + attemptedDir + "'";

    default:
      return "Command '" + command + "' not recognised.";
  }
}

export default executeCommand;
