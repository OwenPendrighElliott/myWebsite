import { Space } from 'antd';
const Music = () => {
  return (
    <div className="page">
      <div className="music-page">
        <h1>Music</h1>
        <h2>
          <a href="http://axiomatictheory.band/">Axiomatic Theory</a>
        </h2>
        <p>
          Axiomatic Theory is a three piece instrumental metal band from Canberra, Australia. The
          band is composed of two eight string guitars and drums. Axiomatic Theory released their
          debut album Existential Flux in June of 2020, the ten track album is the culmination of a
          number of years of writing.
        </p>
        <iframe
          style={{ borderRadius: '12px' }}
          src="https://open.spotify.com/embed/artist/6bQbRE4HvhdfPwfNkD1qHR?utm_source=generator&theme=0"
          width="100%"
          height="300px"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
        {/* </Space> */}
      </div>
    </div>
  );
};

export default Music;
