const directoryStructure = new Map();

directoryStructure.set('', ['About', 'Articles', 'Music', 'Links']);
directoryStructure.set('About', ['about.page', 'about.txt']);
directoryStructure.set('Articles', [`articles.page`]);
directoryStructure.set('Music', ['music.page']);
directoryStructure.set('Links', ['github.lnk', 'linkedin.lnk']);

export default directoryStructure;

const lnkMap = new Map();
lnkMap.set('github.lnk', 'https://github.com/OwenPendrighElliott/');
lnkMap.set('linkedin.lnk', 'https://www.linkedin.com/in/owen-elliott-345254166/');

export { lnkMap };

const pageMap = new Map();
pageMap.set('about.page', '/about');
pageMap.set('articles.page', '/articles');
pageMap.set('music.page', '/music');
pageMap.set('links.page', '/links');

export { pageMap };
