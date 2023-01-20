import React, { useState, useEffect } from 'react';
import env from "react-dotenv";
import axios from 'axios';

const rootUrl = 'https://reminder-api-yzxj.onrender.com/api/v1/reminders';
console.log(env.API_URL);

// Call where you need
const GitHubContext = React.createContext();

// Wrap whole App - index.js
const GitHubProvider = ({ children }) => {  
    const [someData, setSomeData] = useState()
    const [someOtherData, setSomeOtherData] = useState()

	return <GitHubContext.Provider value={{someData, someOtherData }}>{children}</GitHubContext.Provider>;
};

export {GitHubProvider, GitHubContext}
