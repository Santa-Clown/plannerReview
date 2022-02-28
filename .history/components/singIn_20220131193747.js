

import {
    getAuth,
    signInWithEmailAndPassword

} from 'firebase/auth';
import { useState } from 'react';


const Sign = ( {changeLogIn  } ) => {


    const auth = getAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signingIn = (e) => {

        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((cred) => {
                console.log('user created:', cred.user)
                changeLogIn();

            })
            .catch((err) => {
                console.log(err)
            })


    }

  
    const onEMail = (e) => {
        setEmail(e.target.value)


    }
    const onPass = (e) => {
        setPassword(e.target.value)
    }



    return (
        <>
            <form action="">
                <input onChange={onEMail} type="email" name="email" />
                <input onChange={onPass} type="password" name="password" />
                <button onClick={signingIn} >sign in</button>
                
            </form>
            



        </>
    );
}

export default Sign;