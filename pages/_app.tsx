import '@/styles/globals.css';
import '@/styles/page.css';
import '@/styles/articlePage.css';
import '../components/commandline.css';
import '../components/HomePage.css';
import '../components/article.css';
import type { AppProps } from 'next/app';
import { wrapper } from '../store/store';
import NextNProgress from 'nextjs-progressbar';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNProgress />
      <Component {...pageProps} />
    </>
  );
}

export default wrapper.withRedux(App);
