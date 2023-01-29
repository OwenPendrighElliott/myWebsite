import { baseURL } from '@/utils/apiConfig';
import fetchData from '@/utils/fetchData';
import React, { useState, useEffect, useRef } from 'react';

const loginMessage = (ip: string) => {
  var currentdate = new Date();
  var datetime =
    ('0' + currentdate.getDate()).slice(-2) +
    '/' +
    ('0' + (currentdate.getMonth() + 1)).slice(-2) +
    '/' +
    currentdate.getFullYear() +
    '@' +
    currentdate.getHours() +
    ':' +
    currentdate.getMinutes();
  return `
  login as: guest
  ###################################################################################################
  #                                    Welcome to My Website!                                       #
  #                              Owen's Server release 1.0.0 (beta)                                 #
  #                                                                                                 #
  # You are on the latest stable release                                                            #
  # Run 'help' for tips on getting started                                                          #
  # For any bugs or issues with the release please reach out on GitHub                              #
  # Current login: ${datetime} from ${ip} ${' '.repeat(
    18 - ip.length,
  )}                                        #
  ###################################################################################################
  `;
};

const apiData = fetchData(baseURL + '/api/getClientIpAddress');

const LoginMessage = () => {
  const ipInfo = apiData.read();
  const [hydrated, setHydrated] = React.useState(false);
  React.useEffect(() => {
    setHydrated(true);
  }, []);
  if (!hydrated) {
    // Returns null on first render, so the client and server match
    return null;
  }
  return (
    <div className={'typing-container'}>
      <p className="typed">{loginMessage(ipInfo.ip)}</p>
    </div>
  );
};

export default LoginMessage;
