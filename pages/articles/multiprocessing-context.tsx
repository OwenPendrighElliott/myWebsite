import { HeroImage } from '@/components/articleElements';
import Head from 'next/head';
import React from 'react';

const ArticleBlock = React.lazy(() =>
  import('@/components/articleElements').then((module) => ({ default: module.ArticleBlock })),
);
const CodeBlock = React.lazy(() =>
  import('@/components/articleElements').then((module) => ({ default: module.CodeBlock })),
);

const Contemplation = () => {
  return (
    <div>
      <Head>
        <title>A Multiprocessing Context for Python</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:description" content="A context API for multiprocessing" />
        <meta property="og:title" content="A Multiprocessing Context for Python" />
        <meta property="og:image" content="" />
        <meta name="author" content="Owen Elliott" />
        <meta name="tags" content="multiprocessing, python, introspections" />
        <meta property="og:type" content="article" />
      </Head>
    </div>
  );
};

export default Contemplation;
