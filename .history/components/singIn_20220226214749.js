
import styles from '../styles/signin.module.css'
import {
    getAuth,
    signInWithEmailAndPassword

} from 'firebase/auth';
import { useRef, useState } from 'react';
import { colRefUser } from '../firebase/clientApp';
import { query, onSnapshot } from 'firebase/firestore';
import { where } from 'firebase/firestore';
//import { getMessaging, } from "firebase/messaging";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { app } from '../firebase/clientApp';


const Sign = ({ changeLogIn }) => {

    const auth = getAuth();
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    const email = useRef()
    const password = useRef()

    const signingIn = (e) => {

        e.preventDefault();
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((cred) => {

                changeLogIn(cred.user.email);
                // const colRef = collection(db, 'plans');
                // const messaging = getMessaging(app)


                // getToken(messaging, {
                //     vapidKey: 'BNbl0twxEoDB8puM_r1JaS9tApd-Vs78lQU_IOEiJd-Wtc4xGn7cOACLLJBwcgtFPntVUEmjm1Ku1uvcfxgB_Yc'
                // }).then((currentToken) => {
                //     if (currentToken) {
                //         // Send the token to your server and update the UI if necessary
                //         console.log(currentToken)
                //         // ...
                //     } else {
                //         // Show permission request UI
                //         console.log('No registration token available. Request permission to generate one.');
                //         // ...
                //     }
                // }).catch((err) => {
                //     console.log('An error occurred while retrieving token. ', err);
                //     // ...
                // });


                // onMessage(messaging, (payload) => {
                //     console.log('Message received. ', payload);
                //     // ...
                // });


                // const q = query(colRefUser);

                // onSnapshot(q, (snapshot) => {
                //     snapshot.docs.forEach((doc) => {


                //         setar(ar => [...ar, {
                //             ...doc.data(),
                //             id: doc.data().id,

                //         }])
                //         console.log(doc.data().id)
                //     })
                // })

            })
            .catch((err) => {

                alert(err)
            })


    }




    // const onEMail = (e) => {
    //     setEmail(e.target.value)


    // }
    // const onPass = (e) => {
    //     setPassword(e.target.value)
    // }



    return (
        <div className={styles.container}>
            <h2>Notter</h2>
            <form action="">
                <input ref={email} placeholder='Email' type="email" name="email" />
                <input ref={password} placeholder='Κωδικός' type="password" name="password" />
                <button onClick={signingIn} >Σύνδεση</button>

            </form>




        </div>
    );
}

export default Sign;