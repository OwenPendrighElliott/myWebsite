import { Space, Avatar } from 'antd';

type LogoAndLanguageDisplayProps = {
  languagesAndLogos: string[][];
}

const LogoAndLanguageDisplay = ( {languagesAndLogos}: LogoAndLanguageDisplayProps ) =>  {

  return (
    <div className={'language-display'}>
      <h2>Languages I work  with</h2>
      <div className={"languages"}>
      {languagesAndLogos.map((lal: string[]) => {
        return (
          <div className={"language-name-pair"}>
            <img src={lal[1]}/>
            <div>
              {lal[0]}
            </div>
          </div>
        )
      })}
    </div>
    </div>
  )
} 

const About = () => {
  const languagesAndLogos = [
    ['Python', '/Python.png'],
    ['C++', '/CPP.png'],
    ['JavaScript', '/JS.png'],
    ['TypeScript', '/TS.png'],
    ['SAS', '/SAS.png'],
  ]

  return (
    <div className="page">
      {/* <Space direction="vertical" size="middle" style={{ display: 'flex' }}> */}
      <h1>About</h1>
      {/* <Avatar size={64} shape="square" src="https://avatars.githubusercontent.com/u/41710527?v=4" /> */}
      <p>
        Hi I&apos;m Owen! I am passionate about all things software engineering and AI! I have experience
        working in analytics, data engineering and artificial intelligence across government,
        banking and defence. I graduated from ANU with a double degree in IT and Music where I
        focused on classical guitar and data science.
      </p>
      {/* </Space> */}
      <LogoAndLanguageDisplay languagesAndLogos={languagesAndLogos}/>
    </div>
  );
};

export default About;
