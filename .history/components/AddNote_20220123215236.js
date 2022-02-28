
import { useRef } from "react";
import {
    getFirestore, collection, getDocs,
    addDoc
} from 'firebase/firestore';
import styles from '../'


const AddNote = () => {


    const nameRef = useRef();
    const messageRef = useRef();
    const db = getFirestore()

    const colRef = collection(db, 'plans');


    function add(e) {
        e.preventDefault();

        addDoc(colRef, {
            name: nameRef.current.value,
            message: messageRef.current.value,

        }).then(() => {

            alert('done')
        })
    }
    return (
        <>

            <p>noter</p>

            <form className='add'>
                <input ref={nameRef} type="text" name='name' placeholder="name" />
                <input ref={messageRef} type="text" name='message' placeholder="message" />
                <button type='submit' onClick={e => add(e)} >submit</button>

            </form>

        </>
    );
}

export default AddNote;