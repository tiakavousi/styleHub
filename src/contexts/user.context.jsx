import {createContext, useState} from 'react';

// will be used in any component willing to access to the context
export const UserContext = createContext({
    currentUser:null,
    setCurrentUser:()=> null,
});

// will be used as a wrapper of the App component allowing theApp and all neseted components access to its value
export const UserProvider = ({children}) =>{
    const [currentUser, setCurrentUser] = useState(null);
    const value = { currentUser, setCurrentUser};
    return(
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}