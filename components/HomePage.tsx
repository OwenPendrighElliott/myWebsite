import Link from 'next/link';
import React from 'react';

const HomePage = () => {
  return (
    <div className="home-page">
      <h1 className="home-title">Owen Elliott</h1>
      <p className="home-strap-line">Welcome to the Graphical User Interface for my website.</p>

      <div className="page-squares">
        <Link style={{ textDecoration: 'none', color: 'white' }} href={'/about'}>
          <div className="page-square-child">
            <h2>About</h2>
          </div>
        </Link>
        <Link style={{ textDecoration: 'none', color: 'white' }} href={'/articles'}>
          <div className="page-square-child">
            <h2>Articles</h2>
          </div>
        </Link>

        <Link style={{ textDecoration: 'none', color: 'white' }} href={'/music'}>
          <div className="page-square-child">
            <h2>Music</h2>
          </div>
        </Link>

        <Link style={{ textDecoration: 'none', color: 'white' }} href={'/links'}>
          <div className="page-square-child">
            <h2>Links</h2>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
