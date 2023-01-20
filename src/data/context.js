import React, { useState, useEffect } from 'react';
import axios from 'axios';

const rootUrl = 'https://api.github.com';
console.log(rootUrl);

// Call where you need
const GitHubContext = React.createContext();

// Wrap whole App - index.js
const GitHubProvider = ({ children }) => {  
    const [someData, setSomeData] = useState()
    const [someOtherData, setSomeOtherData] = useState()

	return <GitHubContext.Provider value={{someData, someOtherData }}>{children}</GitHubContext.Provider>;
};

export {GitHubProvider, GitHubContext}
