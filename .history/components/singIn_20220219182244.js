
import styles from '../styles/signin.module.css'
import {
    getAuth,
    signInWithEmailAndPassword

} from 'firebase/auth';
import { useRef, useState } from 'react';
import { colRefUser } from '../firebase/clientApp';
import { query , onSnapshot } from 'firebase/firestore';
import { where } from 'firebase/firestore';


const Sign = ({ changeLogIn }) => {

    console.log('signInB')
    const auth = getAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const email = useRef()
    const pass = useRef()
    
    const signingIn = (e) => {

        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((cred) => {

                changeLogIn(cred.user.email);
                // const colRef = collection(db, 'plans');



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


    const onEMail = (e) => {
        setEmail(e.target.value)


    }
    const onPass = (e) => {
        setPassword(e.target.value)
    }



    return (
        <div className={styles.container}>
            <h2>Notter</h2>
            <form action="">
                <input onChange={onEMail} placeholder='Email' type="email" name="email" />
                <input onChange={onPass} placeholder='Κωδικός' type="password" name="password" />
                <button onClick={signingIn} >Σύνδεση</button>

            </form>




        </div>
    );
}

export default Sign;