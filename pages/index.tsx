import React, { useEffect } from 'react';
import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import { useDispatch, useSelector } from 'react-redux';
import CommandLine from '../components/commandline';
import { Switch } from 'antd';
import HomePage from '@/components/HomePage';
import { selectIsCLI, setIsCLI } from '@/store/homepageSlice';
import UISwitch from '@/components/UISwitch';

export default function Home() {
  const isCLI = useSelector(selectIsCLI);
  const dispatch = useDispatch();

  useEffect(() => {
    const url = new URL(window.location.href);
    let specifiedUI = url.searchParams.get('UI');
    if (!specifiedUI) return;
    if (specifiedUI === 'GUI') dispatch(setIsCLI(false));
  }, []);

  return (
    <>
      <Head>
        <title>Owen Elliott</title>
        <meta name="description" content="Personal website for Owen Elliott" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={'render-controls'}>
          <UISwitch />
          {/* <Switch
              onChange={(v: boolean) => dispatch(setIsCLI(v))}
              checkedChildren="CLI"
              unCheckedChildren="GUI"
              checked={isCLI as boolean}
            /> */}
        </div>
        {isCLI ? <CommandLine /> : <HomePage />}
      </main>
    </>
  );
}
