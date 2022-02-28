
import {
    getAuth,
    createUserWithEmailAndPassword

} from 'firebase/auth';
import { useState } from 'react';
import { db } from '../firebase/clientApp';
import { addDoc } from 'firebase/firestore';
import { collection } from 'firebase/firestore';
import styles from '../styles/signUpp.module.css'
import { colRefUser } from '../firebase/clientApp';


const SignUp = () => {

    const auth = getAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');



   


    function add() {



        addDoc(colRefUser, {
            name: name,
            email: email

        }).then(() => {

            alert('done')
        })
    }

    const signing = (e) => {

        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
        add()
            // .then((cred)=>{


            // })
            // .catch((err) => {
            //     console.log(err)
            // })


    }
    const onEMail = (e) => {
        setEmail(e.target.value)


    }
    const onPass = (e) => {
        setPassword(e.target.value)
    }

    const onName = (e) => {
        setName(e.target.value)
    }


    return (
        <div className={styles.signUpContainer} >
            
            <form action="">
            <h3>Δημιουργία Χρήστη</h3>
                <div>
                    <label htmlFor="name">Όνομα</label>
                    <input onChange={onName} type="text" name="name" />
                </div>
                <div>
                    <label htmlFor="email">email</label>
                    <input onChange={onEMail} type="email" name="email" />
                </div>

                <div>
                    <label htmlFor="password">Κωδικός</label>
                    <input onChange={onPass} type="password" name="password" />
                </div>
                <button className={styles.submitBut} onClick={signing}>Εγγραφή</button>


            </form>




        </div>



    );
}

export default SignUp;