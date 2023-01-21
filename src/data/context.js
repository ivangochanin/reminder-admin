import React, { useState, useEffect } from 'react';
import axios from 'axios';


// Call where you need
const ReminderDataContext = React.createContext();

// Wrap whole App - index.js
const ReminderProvider = ({ children }) => {  
    const [someData, setSomeData] = useState()
    const [someOtherData, setSomeOtherData] = useState()

	return <ReminderDataContext.Provider value={{someData, someOtherData }}>{children}</ReminderDataContext.Provider>;
};

export {ReminderProvider, ReminderDataContext}
