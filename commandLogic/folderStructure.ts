const directoryStructure = new Map();

directoryStructure.set('', ['About', 'Projects', 'Articles', 'Music', 'Links']);
directoryStructure.set('About', ['about.page', 'about.txt']);
directoryStructure.set('Projects', [
  'Training a Neural Network with a Genetic Algorithm.page',
  'Drawing Distributions.page',
]);
directoryStructure.set('Articles', [
  `'Training a Neural Network with a Genetic Algorithm.page'`,
  `'Drawing Distributions.page'`,
]);
directoryStructure.set('Music', ['music.page']);
directoryStructure.set('Links', ['github.lnk', 'linkedin.lnk']);

export default directoryStructure;

const lnkMap = new Map();
lnkMap.set('github.lnk', 'https://github.com/OwenPendrighElliott/');
lnkMap.set('linkedin.lnk', 'https://www.linkedin.com/in/owen-elliott-345254166/');

export { lnkMap };
