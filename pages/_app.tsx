import '@/styles/globals.css';
import '@/styles/page.css';
import '@/styles/articlePage.css';
import '@/styles/linksPage.css';
import '@/styles/aboutPage.css';
import '@/styles/musicPage.css';
import '../components/commandline.css';
import '../components/HomePage.css';
import '../components/article.css';
import '../components/appBar.css';
import type { AppProps } from 'next/app';
import { wrapper } from '../store/store';
import NextNProgress from 'nextjs-progressbar';
import AppBar from '@/components/appBar';
import { useSelector } from 'react-redux';
import { selectIsCLI } from '@/store/homepageSlice';
import { useRouter } from 'next/router';

function App({ Component, pageProps }: AppProps) {
  const isCLI = useSelector(selectIsCLI);
  const router = useRouter();
  return (
    <>
      <NextNProgress />
      <AppBar hidden={isCLI && router.pathname == '/'}></AppBar>
      <Component {...pageProps} />
    </>
  );
}

export default wrapper.withRedux(App);
