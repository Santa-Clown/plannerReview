
import { useRef } from "react";
import {
    getFirestore, collection, getDocs,
    addDoc, serverTimestamp
} from 'firebase/firestore';
import styles from '../styles/AddNote.module.css' ;
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  MonthView,
  Appointments,
} from '@devexpress/dx-react-scheduler-material-ui';


const AddNote = () => {


    const nameRef = useRef();
    const messageRef = useRef();
    const db = getFirestore()

    const colRef = collection(db, 'plans');


    function add(e) {
        e.preventDefault();
        const currentDate = '2018-07-17';
        addDoc(colRef, {
            name: nameRef.current.value,
            message: messageRef.current.value,
            opened: false,
            timestamp: serverTimestamp()
        }).then(() => {

            alert('done')
        })
    }
    return (
        <div className= { styles.add} >

            
            <ViewState />
            <form className={styles.form}>
                <input className= { styles.in} ref={nameRef} type="text" name='name' placeholder="name" />
                <input className= { styles.in} ref={messageRef} type="text" name='message' placeholder="message" />
                <button type='submit' onClick={e => add(e)} >submit</button>

            </form>

        </div>
    );
}

export default AddNote;