import React, { useEffect, useState, Suspense } from 'react';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';
const SyntaxHighlighter = React.lazy(() =>
  import('react-syntax-highlighter').then((module) => ({ default: module.PrismAsyncLight })),
);
import { trackPromise } from 'react-promise-tracker';
import LoadingIndicator from './loadingPromise';
import LoadingPromise from './loadingPromise';

interface ArticleElement {
  type: string;
  content: string;
  alt?: string;
  caption?: string;
  language?: string;
  elements?: string[];
}

function constructArticleBody(bodyElements: ArticleElement[]): JSX.Element[] {
  let body: JSX.Element[] = [];
  for (let i = 0; i < bodyElements.length; i++) {
    let el = bodyElements[i];
    switch (el.type) {
      case 'text':
        body.push(
          <p
            key={i.toString()}
            className="article-para"
            dangerouslySetInnerHTML={{ __html: el.content }}
          >
            {/* {el.content} */}
          </p>,
        );
        continue;
      case 'subtitle':
        body.push(
          <h3 key={i.toString()} className="article-subtitle">
            {el.content}
          </h3>,
        );
        continue;
      case 'mono':
        body.push(
          <p key={i.toString()} className="article-mono">
            {el.content}
          </p>,
        );
        continue;
      case 'quote':
        body.push(
          <p key={i.toString()} className="article-quote">
            {el.content}
          </p>,
        );
        continue;
      case 'code':
        body.push(
          <div key={i.toString()} className="article-code-block">
            <SyntaxHighlighter
              language={el.language}
              style={vscDarkPlus}
              codeTagProps={{ fontSize: 'inherit' }}
            >
              {el.content}
            </SyntaxHighlighter>
          </div>,
        );
        continue;
      case 'math':
        body.push(
          <p key={i.toString()} className="article-math">
            {el.content}
          </p>,
        );
        continue;
      case 'image':
        body.push(
          <div key={i.toString()} className="article-image">
            <img src={el.content} alt={el.alt} loading="lazy"></img>
            {el.caption ? <p>{el.caption}</p> : <></>}
          </div>,
        );
        continue;
      case 'list':
        body.push(
          <div key={i.toString()} className="article-list article-para">
            <ul>
              {el.elements ? (
                el.elements.map((el: string, i: number) => <li key={i.toString()}>{el}</li>)
              ) : (
                <></>
              )}
            </ul>
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
          return res.json();
        })
        .then((res) => {
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
      <Suspense fallback={<LoadingIndicator />}>
        <LoadingPromise />
        <h1>{title}</h1>
        {constructArticleBody(articleData)}
      </Suspense>
    </div>
  );
};

export default Article;
