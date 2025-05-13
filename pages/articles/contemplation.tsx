import { ArticleBlock, CodeBlock, HeroImage } from '@/components/articleElements';
import articleData from '@/utils/articleData';
import { GetServerSideProps, GetStaticPaths } from 'next';
import Head from 'next/head';
import React from 'react';

const Contemplation = () => {
  return (
    <div>
      <Head>
        <title>Contemplation</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:description" content="Introspection utilities in Python" />
        <meta property="og:title" content="Contemplation" />
        <meta property="og:image" content="" />
        <meta name="author" content="Owen Elliott" />
        <meta name="tags" content="contemplation, coding, introspection, python" />
        <meta property="og:type" content="article" />
      </Head>
    </div>
  );
};

export default Contemplation;
