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
      displayImageURL: articleMetadata.displayImageURL,
      contentURL: articleMetadata.contentURL,
      description: articleMetadata.summary,
      tags: articleMetadata.tags,
      author: articleMetadata.author,
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
  displayImageURL: string;
  contentURL: string;
  description: string;
  tags: string;
  author: string;
};

const ArticlePage = ({
  title,
  displayImageURL,
  contentURL,
  description,
  tags,
  author,
}: ArticleProps) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:image" content={displayImageURL} />
        <meta name="author" content={author} />
        <meta name="tags" content={tags} />
        <meta property="og:type" content="article" />
      </Head>
      <Article contentURL={contentURL} />
    </div>
  );
};

export default ArticlePage;
