import React, { useEffect, useState, useRef } from 'react';
import { DownCircleOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';

const HomePage = () => {
  const [blurbHeight, setBlurbHeight] = useState(window.innerHeight);

  // A hook to get a ref and an inView boolean for each paragraph
  const [ref1, inView1] = useInView({ threshold: 0.9 });
  const [ref5, inView5] = useInView({ threshold: 0.9 });
  const [ref6, inView6] = useInView({ threshold: 0.9 });
  const [ref7, inView7] = useInView({ threshold: 0.9 });
  const [ref8, inView8] = useInView({ threshold: 0.9 });

  const pageEndRef = useRef<null | HTMLDivElement>(null);

  function calculateBlurbSize() {
    var element = document.getElementById('home-page-blurb');
    if (!element) return;
    var top = element.getBoundingClientRect().top + window.scrollY;
    let windowHeight = window.innerHeight;
    setBlurbHeight(windowHeight - top);
  }

  useEffect(() => {
    calculateBlurbSize();
    window.addEventListener('resize', calculateBlurbSize);
  }, []);

  const scrollToBottom = () => {
    if (!pageEndRef.current) return;
    pageEndRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="home-page">
      <h1>owenelliott.dev</h1>
      <div id={'home-page-blurb'} className="hello-world" style={{ height: `${blurbHeight}px` }}>
        <p className={'home-paragraph'}>
          I am a solution architect and software engineer with a passion for solving complex
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
        <p ref={ref1} className={'home-paragraph'}>
          Thank you for visiting my website and feel free to contact me if you have any questions or
          feedback.
        </p>
        <div className={`home-nav-down bounce ${inView1 ? 'appear' : ''}`}>
          <DownCircleOutlined onClick={() => scrollToBottom()} style={{ fontSize: '32px' }} />
        </div>
      </div>
      <div className="home-screen-links">
        <div className="home-screen-link-container">
          <Link style={{ textDecoration: 'none', color: 'white' }} href={'/about'}>
            <div ref={ref5} className={`link-square ${inView5 ? 'appear' : ''}`}>
              <h2>About</h2>
            </div>
          </Link>
          <Link style={{ textDecoration: 'none', color: 'white' }} href={'/articles'}>
            <div ref={ref6} className={`link-square ${inView6 ? 'appear' : ''}`}>
              <h2>Articles</h2>
            </div>
          </Link>

          <Link style={{ textDecoration: 'none', color: 'white' }} href={'/music'}>
            <div ref={ref7} className={`link-square ${inView7 ? 'appear' : ''}`}>
              <h2>Music</h2>
            </div>
          </Link>

          <Link style={{ textDecoration: 'none', color: 'white' }} href={'/links'}>
            <div ref={ref8} className={`link-square ${inView8 ? 'appear' : ''}`}>
              <h2>Links</h2>
            </div>
          </Link>
        </div>
        <div ref={pageEndRef} />
      </div>
    </div>
  );
};

export default HomePage;
