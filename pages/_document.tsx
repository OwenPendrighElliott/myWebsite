import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <script
        type="application/javascript"
        src="http://ipinfo.io/?format=jsonp&callback=getIP"
      ></script>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
