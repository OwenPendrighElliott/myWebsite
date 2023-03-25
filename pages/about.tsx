import { Space, Avatar } from 'antd';
import Image from 'next/image';

type LogoAndLanguageDisplayProps = {
  languagesAndLogos: string[][];
};

const LogoAndLanguageDisplay = ({ languagesAndLogos }: LogoAndLanguageDisplayProps) => {
  return (
    <div className={'language-display'}>
      <h2>Languages I work with</h2>
      <div className={'languages'}>
        {languagesAndLogos.map((lal: string[], i: number) => {
          return (
            <div key={i.toString()} className={'language-name-pair'}>
              <img src={lal[1]} alt={lal[0] + ' logo'} />
              <div>{lal[0]}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const About = () => {
  const languagesAndLogos = [
    ['Python', '/Python.png'],
    ['C++', '/CPP.png'],
    ['JavaScript', '/JS.png'],
    ['TypeScript', '/TS.png'],
    ['SAS', '/SAS.png'],
  ];

  return (
    <div className="page">
      <div className="about-page">
        <h1 className="about-title">About</h1>
        <p className="about-paragraph">
          Hi I&apos;m Owen! I am passionate about all things software engineering and AI! I have
          experience working in analytics, data engineering and artificial intelligence across
          government, banking and defence. I graduated from ANU with a double degree in IT and Music
          where I focused on classical guitar and data science.
        </p>
        <LogoAndLanguageDisplay languagesAndLogos={languagesAndLogos} />
      </div>
    </div>
  );
};

export default About;
