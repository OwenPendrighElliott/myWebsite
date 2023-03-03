import React from 'react';
import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

interface ArticleElement {
  type: string;
  content: string;
  alt?: string;
  language?: string;
}

function constructArticleBody(bodyElements: ArticleElement[]): JSX.Element[] {
  let body: JSX.Element[] = [];
  for (let i = 0; i < bodyElements.length; i++) {
    let el = bodyElements[i];
    switch (el.type) {
      case 'text':
        body.push(<p className="article-para">{el.content}</p>);
        continue;
      case 'code':
        body.push(
          <SyntaxHighlighter language={el.language} style={a11yDark}>
            {el.content}
          </SyntaxHighlighter>,
        );
        continue;
      case 'math':
        body.push(<p className="article-math">{el.content}</p>);
        continue;
      case 'image':
        body.push(
          <div className="article-image">
            <img src={el.content} alt={el.alt}></img>
            <p>{el.alt}</p>
          </div>,
        );
        continue;
    }
  }
  return body;
}

type ArticleProps = {
  title: string;
  contentURL: string;
};

const Article = ({ title, contentURL }: ArticleProps) => {
  let bodyElements: ArticleElement[] = [
    { type: 'text', content: 'Hello! here is the first paragraph of my article' },
    {
      type: 'image',
      content:
        'https://storage.googleapis.com/download.tensorflow.org/example_images/YellowLabradorLooking_new.jpg',
      alt: 'A photo of a dog.',
    },
    { type: 'text', content: 'Here is another' },
    {
      type: 'code',
      content: `int main() { cout << "Hello, world!" << endl; return 0;}`,
      language: 'cpp',
    },
    { type: 'math', content: `x = 3 * 4` },
  ]; // replace with API call to get content

  const body: JSX.Element[] = constructArticleBody(bodyElements);
  return (
    <div className="article">
      <h1>{title}</h1>
      {body}
    </div>
  );
};

export default Article;
