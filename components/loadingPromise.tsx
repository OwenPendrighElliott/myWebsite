import { usePromiseTracker } from 'react-promise-tracker';
import React from 'react';
import LoadingIndicator from './loading';

const LoadingPromise = () => {
  const { promiseInProgress } = usePromiseTracker();
  return promiseInProgress ? <LoadingIndicator /> : <></>;
};

export default LoadingPromise;
