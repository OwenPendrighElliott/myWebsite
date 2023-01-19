const directoryStructure = new Map();

directoryStructure.set('', ['Pages', 'Projects', 'About']);
directoryStructure.set('Pages', ['thisWebsite.page']);
directoryStructure.set('Projects', [
  'Training a Neural Network with a Genetic Algorithm.page',
  'Drawing Distributions.page',
]);
directoryStructure.set('About', ['music.page', 'resume.page']);

export default directoryStructure;
