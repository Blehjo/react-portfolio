import { createContext, useState } from 'react';

export const ApplicationContext = createContext({
    application: null,
    setApplication: () => {},
});

export const ApplicationProvider = ({ children }) => {
    const [application, setApplication] = useState({});
    const value = { application, setApplication };

    return <ApplicationContext.Provider value={value} >{children}</ApplicationContext.Provider>
}