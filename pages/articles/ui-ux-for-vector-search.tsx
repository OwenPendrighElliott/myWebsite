import { ArticleBlock, HeroImage } from '@/components/articleElements';
import Head from 'next/head';
import React from 'react';

const HERO_IMAGE = '/article_assets/ui-ux-vectorsearch/hero.webp';

const uiUxVectorSearch = () => {
  return (
    <div>
      <Head>
        <title>UI and UX in Vector Search</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          property="og:description"
          content="Desiging effective interfaces for multimodal vector search applications"
        />
        <meta property="og:title" content="UI and UX in Vector Search" />
        <meta property="og:image" content={HERO_IMAGE} />
        <meta name="author" content="Owen Elliott" />
        <meta name="tags" content="UI/UX, vector search, AI, design" />
        <meta property="og:type" content="article" />
      </Head>
      <HeroImage imageURL={HERO_IMAGE} />
      <div className="article">
        <ArticleBlock>
          {`
# UI Concepts for Vector Search

In this article we explore novel UI/UX concepts for implementing vector search in online image search applications. We also look at backend implementations to support these UI elements and explore techniques such as semantic filtering, weighted query combinations, custom instructions, and search as recommendation. The ability to compose queries as a combination of multiple elements via mathematical operations is a property of vector search that often goes under-utilised, these simple operations can turn vector search systems into semantic filters, recommenders, or even search ensembles. However, in the real world it is unreasonable to expect an end user to be aware of any of these mechanisms, the challenge becomes one of how these can be presented in at intuitive and usable manner by using an API. This article demonstrates some of the many ways this can be achieved by drawing influence from existing UX patterns and repurposing emerging UI patterns from LLM applications.

## Rethinking UI/UX for Vector Search

Different search backends lead to differing search experiences. This often requires unique methods of search interaction, especially for context-aware, semantic search functionality (like similarity search). While vector search, which leverages a vector database and vector embeddings, offers an alternative to the traditional keyword search, merely using it as a direct replacement doesn&#39;t tap into its full potential.

In this article, we&#39;ll embark on a journey to transform a basic search experience, introducing more advanced machine learning features tailored for vector search (in other words, we will build an AI application for search). The open source code used in this article is [part of our getting started tutorial](https://github.com/marqo-ai/getting_started_marqo_cloud/tree/main/e-commerce-demo) on github.

The elements discussed in this article can be used in concert to create unique search journeys through novel yet intuitive patterns (especially when working with unstructured data). In the example below we combine semantic filtering with search negations:

![Example of vector search](/article_assets/ui-ux-vectorsearch/example1.gif)
`}
        </ArticleBlock>
      </div>
    </div>
  );
};

export default uiUxVectorSearch;
