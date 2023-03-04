import Article from '@/components/article';
import React from 'react';

const Articles = () => {
  return (
    <div className="page">
      <Article
        title="Deep Dreams in PyTorch"
        contentURL="https://owen-elliott-website-articles.s3.ap-southeast-2.amazonaws.com/2020-09-16-deep-dreams-in-pytorch.json"
      />
    </div>
  );
};

export default Articles;
