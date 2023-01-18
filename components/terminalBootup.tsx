import React, { useState, useEffect, useRef } from 'react';

const loginMessage = `
login as: guest
###################################################################################################
#                                         Welcome to Linux.                                       #
#                      Red Hat Enterprise Linux Server release 6.5 (Santiago)                     #
#                                                                                                 #
# You are on the latest stable release                                                            #
# Run 'help' for tips on getting started                                                          #
# It is best to have a warning banner dis Authenticating with public key "imported-openssh-key"   #
# Last login: Tue May 24 12:02:29 2016 from 121.242.106.34                                        #
###################################################################################################

Hint: Run 'help' to see available commands

`;

const LoginMessage = () => {
  return (
    <div className={"typing-container"}>
      <p className='typed'>{loginMessage}</p>
    </div>
  );
}

export default LoginMessage;