import { initializeApp } from "firebase/app";
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from "firebase/auth"
import {getFirestore, doc, getDoc, setDoc} from "firebase/firestore";
//web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8Mag3c6hoT-JexLgPeIzSvs5N2aRVUhI",
  authDomain: "style-hub-db.firebaseapp.com",
  projectId: "style-hub-db",
  storageBucket: "style-hub-db.appspot.com",
  messagingSenderId: "792234547587",
  appId: "1:792234547587:web:274f536dc3a3c53b4bbeb6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt:"select_account"
})

export const auth = getAuth();
export const signinWithGooglePopup = ()=> signInWithPopup(auth, provider);

export const db = getFirestore();
export const createUderDocumentFromAuth = async (userAuth) =>{
    const userDocRef = doc(db, 'users', userAuth.uid);
    console.log(userDocRef);
    const userSnapshot =await getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists());
    if(!userSnapshot.exists()){
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        try{
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            });
        } catch(error){
            console.log("error creating the user, " , error.message);
        }
    }
    return userDocRef;  
};