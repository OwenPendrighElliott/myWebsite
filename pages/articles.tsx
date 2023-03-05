import Article from '@/components/article';
import React from 'react';

const Articles = () => {
  return (
    <div className="page">
      {/* <Article
        title="Deep Dreams in PyTorch"
        contentURL="https://d3kjqeh110p10g.cloudfront.net/2020-09-16-deep-dreams-in-pytorch/2020-09-16-deep-dreams-in-pytorch.json"
      /> */}
      <Article
        title="ConvNet Autoencoder for Scan Cleaning"
        contentURL="https://d3kjqeh110p10g.cloudfront.net/2021-01-18-ConvNet-Autoencoder-for-Scan-Cleaning/2021-01-18-ConvNet-Autoencoder-for-Scan-Cleaning.json"
      />
    </div>
  );
};

export default Articles;
