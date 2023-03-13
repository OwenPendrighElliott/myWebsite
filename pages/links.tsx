import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { lnkMap } from '../commandLogic/mockFileSystem';

const LinksToOtherSites = () => {
  return (
    <div className="page">
      <h1 className="links-title">Links</h1>
      <div className="links">
        <a target="_blank" rel="noreferrer" href={'https://github.com/OwenPendrighElliott/'}>
          <div className="link">
            <Image
              width={100}
              height={100}
              src={'/../public/GitHubProfilePic.jpeg'}
              alt="GitHub profile picture for Owen Pendrigh Elliott"
            />
            <div>
              <h2>GitHub</h2>
              <p>
                Visit my GitHub to see some of the code for my personal projects, open source
                contributions and the code for this website!
              </p>
            </div>
          </div>
        </a>
        <hr></hr>
        <a target="_blank" rel="noreferrer" href={'https://www.linkedin.com/in/owen-elliott-345254166/'}>
          <div className="link">
            <Image
              width={100}
              height={100}
              src={'/../public/LinkedInProfilePic.jpeg'}
              alt="LinkedIn profile picture for Owen Pendrigh Elliott"
            />
            <div>
              <h2>LinkedIn</h2>
              <p>
                Connect with me on LinkedIn to see updates or to chat about anything software,
                systems and AI.
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default LinksToOtherSites;
