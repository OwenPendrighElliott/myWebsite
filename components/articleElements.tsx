import React from 'react';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import ReactMarkdown from 'react-markdown';


interface CodeProps {
  language: string;
  children: string;
}

export const CodeBlock = ({ language, children }: CodeProps) => {
  return (
    <div className="article-code-block">
      <SyntaxHighlighter
        language={language}
        style={vscDarkPlus}
        codeTagProps={{
          style: {
            fontSize: typeof window !== 'undefined' && window.innerWidth <= 768 ? '14px' : '16px',
          },
        }}
      >
        {children}
      </SyntaxHighlighter>
    </div>
  );
};

interface TextProps {
  children: string;
}

export const ArticleBlock = ({ children }: TextProps) => {
  return <ReactMarkdown className="article-markdown">{children}</ReactMarkdown>;
};

interface HeroImageProps {
  imageURL: string;
}

export const HeroImage = ({ imageURL }: HeroImageProps) => {
  return <img className="article-image-header" src={imageURL} alt="Article Header Image" />;
};
