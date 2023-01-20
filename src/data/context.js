import React, { useState, useEffect } from 'react';
import env from "react-dotenv";
import axios from 'axios';


// Call where you need
const ReminderDataContext = React.createContext();

// Wrap whole App - index.js
const ReminderProvider = ({ children }) => {  
    const [someData, setSomeData] = useState()
    const [someOtherData, setSomeOtherData] = useState()
    /* console.log(env.API_URL); */

	return <ReminderDataContext.Provider value={{someData, someOtherData }}>{children}</ReminderDataContext.Provider>;
};

export {ReminderProvider, ReminderDataContext}
