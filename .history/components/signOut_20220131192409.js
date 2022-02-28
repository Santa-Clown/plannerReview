import {
    getAuth,
    signOut,
    signInWithEmailAndPassword

} from 'firebase/auth';
import { useState } from 'react'; 

const Sign_Out = () => {
    return ( 
        <button onClick={signingOut} >sign out</button>
     );
}
 
export default Sign_Out;