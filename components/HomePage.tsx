import Link from 'next/link';
import React from 'react';

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Owen Elliott</h1>
      <div>Welcome to the user friendly version of my website!</div>
      <h2>Pages</h2>
      <div className="page-squares">
        <Link style={{ textDecoration: 'none', color: 'white' }} href={'/about'}>
          <div className="page-square-child">About</div>
        </Link>
        <Link style={{ textDecoration: 'none', color: 'white' }} href={'/articles'}>
          <div className="page-square-child">Articles</div>
        </Link>

        <Link style={{ textDecoration: 'none', color: 'white' }} href={'/music'}>
          <div className="page-square-child">Music</div>
        </Link>

        <Link style={{ textDecoration: 'none', color: 'white' }} href={'/links'}>
          <div className="page-square-child">Links</div>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
