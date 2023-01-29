import { Space } from 'antd';
import Avatar from 'antd/es/avatar';

const About = () => {
  return (
    <div className="page">
      {/* <Space direction="vertical" size="middle" style={{ display: 'flex' }}> */}
      <h1>About</h1>
      <Avatar size={64} shape="square" src="https://avatars.githubusercontent.com/u/41710527?v=4" />
      <p>
        Hi I'm Owen! I am passionate about all things software engineering and AI! I have experience
        working in analytics, data engineering and artificial intelligence across government,
        banking and defence. I graduated from ANU with a double degree in IT and Music where I
        focused on classical guitar and data science.
      </p>
      {/* </Space> */}
    </div>
  );
};

export default About;
