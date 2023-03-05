import Article from '@/components/article';
import articleData from '@/utils/articleData';
import { GetServerSideProps } from 'next';
import React from 'react';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
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

type ArticleProps = {
  title: string;
  contentURL: string;
};

const ArticlePage = ({ title, contentURL }: ArticleProps) => {
  return <Article title={title} contentURL={contentURL} />;
};

export default ArticlePage;
