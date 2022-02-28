
import {
    getAuth,
    createUserWithEmailAndPassword

  } from 'firebase/auth';
  import { useState } from 'react';


const SignUp = () => {

    const auth = getAuth();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const signing = (e)=>{
        
        e.preventDefault();
        createUserWithEmailAndPassword(auth,email,password)
        .then((cred)=>{
            console.log('user created:',cred.user)

        })
        .catch((err)=>{
            console.log(err)
        })
        

    }
    const onEMail = (e)=>{
        setEmail(e.target.value)
        
        
    }
    const onPass = (e)=>{
        setPassword(e.target.value)
    }


    return (
        <>
            <form action="">

                <input onChange={onEMail}  type="email" name="email" />
                <input onChange={onPass} type="password" name="password" />
                <button onClick={signing }>signup</button>


            </form>




        </>



    );
}

export default SignUp;