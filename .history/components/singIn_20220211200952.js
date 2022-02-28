

import {
    getAuth,
    signInWithEmailAndPassword

} from 'firebase/auth';
import { useState } from 'react';
import { colRefUser } from '../firebase/clientApp';
import { query , onSnap } from 'firebase/firestore';


const Sign = ({ changeLogIn }) => {


    const auth = getAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [ar, setar] = useState([]);
    const signingIn = (e) => {

        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((cred) => {

                changeLogIn(cred.user.email);




                const q = query(colRefUser, where('email', '==', cred.user.email));

                onSnapshot(q, (snapshot) => {
                    snapshot.docs.forEach((doc) => {


                        setar(ar => [...ar, {
                            ...doc.data(),
                            id: doc.data().id,

                        }])
                        console.log(doc.data().id)
                    })
                })

            })
            .catch((err) => {

                alert(err)
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