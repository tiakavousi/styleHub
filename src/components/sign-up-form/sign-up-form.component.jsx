import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
    displayName:'',
    email:'',
    password:'',
    confirmPassword:''
}
const SignUpForm = () =>{
    const[formFields,setFormFields] = useState(defaultFormFields);
    const {displayName, email, password, confirmPassword} = formFields;

    const handleChange=(event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value});
    };
    const resetFormFields = ()=>{
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async(event)=> {
        event.preventDefault();
        if(password != confirmPassword){
            alert("Passwords do not match!");
            return;
        }
        try{
            const {user} = await createAuthUserWithEmailAndPassword(
                email, 
                password
            );
            await createUserDocumentFromAuth(user, { displayName });
            resetFormFields();
        }catch(error){
            if(error.code == "auth/email-already-in-use"){
                alert("Can not create user, Email already in use!");
            }else if(error.code == "auth/weak-password"){
                alert("Can not create user, Password should be at least 6 characters!");
            }else{
            console.log("User creation encountered an error ",error);
            }
        }
    }

    return(
        <div>
            <h1> Enter your email and password</h1>
            <form onSubmit={handleSubmit}>
                <label>Display Name</label>
                <input 
                    type="text" 
                    name="displayName"
                    onChange={handleChange}
                    value={displayName}
                    required/>
                <label>Email</label>
                <input 
                    type="email"
                    name="email"
                    onChange={handleChange}
                    value={email} 
                    required/>
                <label>Password</label>
                <input 
                    type="password" 
                    name="password"
                    onChange={handleChange}
                    value={password}
                    required/>
                <label>Confirm Password</label>
                <input 
                    type="password" 
                    name="confirmPassword"
                    onChange={handleChange}
                    value={confirmPassword}
                    required/>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
}
export default SignUpForm;