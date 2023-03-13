import articleData, { ArticleMetadata } from '@/utils/articleData';
import Link from 'next/link';
import React from 'react';

type ArticleDisplayProps = {
  title: string;
  displayImageURL: string;
  summary: string;
};

const ArticleDisplay = ({ title, displayImageURL, summary }: ArticleDisplayProps) => {
  return (
    <div className={'article-list-element'}>
      <div>
        <h3>{title}</h3>
        <div className="image-summary-pair">
          <p>
            <img src={displayImageURL} alt={title} />
            {summary}
          </p>
        </div>
      </div>
    </div>
  );
};

const Articles = () => {
  const articleMetadatas: ArticleMetadata[] = Array.from(articleData.values());

  return (
    <div className="page">
      <h1 className="articles-title">Articles</h1>
      <div className="article-list">
        {articleMetadatas.map((metadata: ArticleMetadata, i: number) => (
          <Link
            key={i.toString()}
            style={{ textDecoration: 'none', color: 'white' }}
            href={metadata.route}
          >
            <ArticleDisplay
              title={metadata.title}
              displayImageURL={metadata.displayImageURL}
              summary={metadata.summary}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Articles;
