import { signinWithGooglePopup, createUderDocumentFromAuth } from "../../utils/firebase/firebase.utils"; 

const SignIn = () => {
    const logGoogleUser = async ()=>{
        const {user} = await signinWithGooglePopup();
        const userDocRef = await createUderDocumentFromAuth(user)
        
    }
    return(
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>Sign in with Google popup</button>
        </div>
    );
}

export default SignIn;