import '@/styles/globals.css';
import '@/styles/page.css';
import '../components/commandline.css';
import '../components/HomePage.css';
import '../components/article.css';
import type { AppProps } from 'next/app';
import { wrapper } from '../store/store';

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default wrapper.withRedux(App);
