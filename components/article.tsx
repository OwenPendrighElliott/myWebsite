import React, { useEffect, useState, Suspense } from 'react';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';
const SyntaxHighlighter = React.lazy(() =>
  import('react-syntax-highlighter').then((module) => ({ default: module.PrismAsyncLight })),
);
import ReactMarkdown from 'react-markdown';
import { trackPromise, usePromiseTracker } from 'react-promise-tracker';
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
    console.log(el);
    switch (el.type) {
      case 'markdown':
        body.push(
          <ReactMarkdown key={i.toString()} className="article-markdown">
            {el.content}
          </ReactMarkdown>,
        );
        continue;
      case 'code':
        body.push(
          <div key={i.toString()} className="article-code-block">
            <SyntaxHighlighter
              language={el.language}
              style={vscDarkPlus}
              codeTagProps={{ style: { fontSize: window.innerWidth <= 768 ? '14px' : '16px' } }}
            >
              {el.content}
            </SyntaxHighlighter>
          </div>,
        );
        continue;
    }
  }
  return body;
}

type ArticleProps = {
  contentURL: string;
  headerImageURL: string;
};

const Article = ({ contentURL, headerImageURL }: ArticleProps) => {
  const [articleData, setArticleData] = useState<ArticleElement[]>([]);

  const { promiseInProgress } = usePromiseTracker();

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

  useEffect(() => {
    console.log(articleData);
  }, [articleData]);

  return (
    <>
      {!promiseInProgress && (
        <img className="article-image-header" src={headerImageURL} alt="Article Header Image" />
      )}
      <div className="article">
        <Suspense fallback={<LoadingIndicator />}>
          <LoadingPromise />
          {constructArticleBody(articleData)}
        </Suspense>
      </div>
    </>
  );
};

export default Article;
