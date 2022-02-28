import {
    getAuth,
    signOut,
    signInWithEmailAndPassword

} from 'firebase/auth';
import { useState } from 'react'; 

const Sign_Out = ({s_out}) => {



    const signingOut = () => {
        signOut(auth)
        .then(
            ()=> {
            
            changeLogOut()}
        
        )
    }
    return ( 
        <button onClick={signingOut} >sign out</button>
     );
}
 
export default Sign_Out;