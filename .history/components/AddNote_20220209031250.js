import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars';
import { useRef } from "react";
import {
    getFirestore, collection, getDocs,
    addDoc, serverTimestamp
} from 'firebase/firestore';
import styles from '../styles/AddNote.module.css';



const AddNote = () => {


    const nameRef = useRef();
    const messageRef = useRef();
    const db = getFirestore()

    const colRef = collection(db, 'plans');

    
    function add(e) {
        e.preventDefault();

        
        addDoc(colRef, {
            name: nameRef.current.value,
            createdBy: "none",
            message: messageRef.current.value,
            opened: false,
            timestamp: serverTimestamp()
        }).then(() => {

            alert('done')
        })
    }
    return (
        <div className={styles.add} >
            

            {/* <ViewState 
            currentDate='2018-07-17'/> */}
            <form className={styles.form}>
                <input className={styles.in } className={styles.name} ref={nameRef} type="text" name='name' placeholder="name" />
                <input className={styles.in} className={styles.message} ref={messageRef} type="text" name='message' placeholder="message" />
                
                <button type='submit' onClick={e => add(e)} >submit</button>

            </form>

        </div>
    );
}

export default AddNote;