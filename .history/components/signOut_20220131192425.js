import {
    getAuth,
    signOut,
    signInWithEmailAndPassword

} from 'firebase/auth';
import { useState } from 'react'; 

const Sign_Out = () => {



    const signingOut = () => {
        signOut(auth)
        .then(
            ()=> {
            console.log("logged Out")
            console.log("yeaahhhh")
            changeLogOut()}
        
        )
    }
    return ( 
        <button onClick={signingOut} >sign out</button>
     );
}
 
export default Sign_Out;