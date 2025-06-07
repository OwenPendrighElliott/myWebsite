import React from 'react';

export const HomePage = () => {
  return (
    <div className="home-page">
      <h1>owenelliott.dev</h1>
      <div id={'home-page-blurb'} className="hello-world">
        <p className={'home-paragraph'}>
          I am a solutions architect and software engineer with a passion for solving complex
          problems using cutting-edge technologies. I currently work at Marqo, a company that builds
          a tensor search engine that enables fast end to end search of multimodal data at scale.
        </p>
        <p className={'home-paragraph'}>
          On this website, you will find articles I write about various topics related to software
          development, machine learning, and data science. You will also see some of the programming
          projects that I work on in my spare time or as part of my professional portfolio.
        </p>
        <p className={'home-paragraph'}>
          In addition to coding, I also enjoy making music. You can check out my music and my band
          Axiomatic Theory on this site as well!
        </p>
        <p className={'home-paragraph'}>
          Thank you for visiting my website and feel free to contact me if you have any questions or
          feedback.
        </p>
      </div>
    </div>
  );
};
