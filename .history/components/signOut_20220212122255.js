

import {
    getAuth,
    signOut

} from 'firebase/auth';


const Sign_Out = ({s_out}) => {


    const auth = getAuth();
    const signingOut = () => {
        signOut(auth)
        .then(
            ()=> {
            
                s_out()}
        
        )
    }
    return ( 
        <button onClick={signingOut} >Έξοδος</button>
     );
}
 
export default Sign_Out;