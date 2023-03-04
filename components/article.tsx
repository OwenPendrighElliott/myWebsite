import React, { useEffect, useState } from 'react';
import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { trackPromise } from 'react-promise-tracker';
import LoadingIndicator from './loading';

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
      case 'mono':
        body.push(<p className="article-mono">{el.content}</p>);
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
  const [articleData, setArticleData] = useState<ArticleElement[]>([]);

  const onLoadArticle = () => {
    trackPromise(
      fetch(contentURL, {
        mode: 'cors',
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      })
        .then((res) => {
          console.log(res);
          return res.json();
        })
        .then((res) => {
          console.log(res);
          setArticleData(res);
          return res;
        }),
    );
  };

  useEffect(() => {
    onLoadArticle();
  }, []);

  return (
    <div className="article">
      <LoadingIndicator />
      <h1>{title}</h1>
      {constructArticleBody(articleData)}
    </div>
  );
};

export default Article;
