import '@/styles/globals.css';
import '@/styles/page.css';
import '@/styles/articlePage.css';
import '@/styles/linksPage.css';
import '@/styles/aboutPage.css';
import '@/styles/musicPage.css';
import '../components/terminalBootup.css';
import '../components/commandline.css';
import '../components/HomePage.css';
import '../components/article.css';
import '../components/appBar.css';
import '../components/UISwitch.css';
import type { AppProps } from 'next/app';
import { wrapper } from '../store/store';
import NextNProgress from 'nextjs-progressbar';
import AppBar from '@/components/appBar';
import { Provider, useSelector } from 'react-redux';
import { selectIsCLI } from '@/store/homepageSlice';
import { useRouter } from 'next/router';

function App({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;

  const isCLI = useSelector(selectIsCLI);
  const router = useRouter();
  return (
    <Provider store={store}>
      <NextNProgress />
      <AppBar hidden={isCLI && router.pathname == '/'}></AppBar>
      <Component {...pageProps} />
    </Provider>
  );
}

export default wrapper.withRedux(App);
