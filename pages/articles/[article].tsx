import Article from '@/components/article';
import articleData from '@/utils/articleData';
import { GetServerSideProps, GetStaticPaths } from 'next';
import Head from 'next/head';
import React from 'react';

export const getStaticProps: GetServerSideProps = async (ctx) => {
  const article = ctx.params?.article as string;
  const articleMetadata = articleData.get(article);

  if (!articleMetadata) {
    return {
      notFound: true, //redirects to 404 page
    };
  }
  return {
    props: {
      title: articleMetadata.title,
      contentURL: articleMetadata.contentURL,
    },
  };
};

export const getStaticPaths: GetStaticPaths<{ article: string }> = async () => {
  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: 'blocking', //indicates the type of fallback
  };
};

type ArticleProps = {
  title: string;
  contentURL: string;
};

const ArticlePage = ({ title, contentURL }: ArticleProps) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={title} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Article title={title} contentURL={contentURL} />
    </div>
  );
};

export default ArticlePage;
