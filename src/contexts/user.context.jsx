import {createContext, useState, useEffect} from 'react';
import {onAuthStateChangedListener,createUserDocumentFromAuth} from '../utils/firebase/firebase.utils';


// will be used in any component willing to access to the context
export const UserContext = createContext({
    currentUser:null,
    setCurrentUser:()=> null,
});

// will be used as a wrapper of the App component allowing theApp and all neseted components access to its value
export const UserProvider = ({children}) =>{
    const [currentUser, setCurrentUser] = useState(null);
    const value = { currentUser, setCurrentUser};

    useEffect(()=>{
        const unsubscribe = onAuthStateChangedListener((user) => {             //onAuthStateChangedListener gives back an unsubscribe function
            if(user) {
                createUserDocumentFromAuth(user);
            }
            setCurrentUser(user);
        }); 
        return unsubscribe;
    },[]);

    return(
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}