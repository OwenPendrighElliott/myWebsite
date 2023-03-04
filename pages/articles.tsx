import Article from '@/components/article';
import React from 'react';

const Articles = () => {
  return (
    <div className="page">
      <Article
        title="Test article"
        contentURL="https://owen-elliott-website-articles.s3.ap-southeast-2.amazonaws.com/test-article.json"
      ></Article>
    </div>
  );
};

export default Articles;
