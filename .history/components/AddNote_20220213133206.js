import { DatePickerComponent, DateTimePickerComponent } from '@syncfusion/ej2-react-calendars';
import { useRef } from "react";
import {
    getFirestore, collection, getDocs,
    addDoc, serverTimestamp
} from 'firebase/firestore';
import styles from '../styles/AddNote.module.css';
import { db } from '../firebase/clientApp';



const AddNote = ( {adm ,createrUserName} ) => {


    const nameRef = useRef();
    const messageRef = useRef();
    const appointmentDate = useRef()
    

    const colRef = collection(db, 'plans');


    function add(e) {
        e.preventDefault();


        addDoc(colRef, {
            name: nameRef.current.value,
            createdBy: adm,
            createrName: createrUserName,
            message: messageRef.current.value,
            opened: false,
            timestamp: serverTimestamp(),
            appointmen: appointmentDate.current.value,
            commentary:
        }).then(() => {

            alert('done')
        })
    }
    return (
        <div className={styles.add} >
            

            {/* <ViewState 
            currentDate='2018-07-17'/> */}
            <form className={styles.form}>
            <h3>Νέα Καταχώρηση</h3>
                <div>
                    <label htmlFor="name">Όνομα</label>
                    <input required className={styles.in, styles.name} ref={nameRef} type="text" name='name'  />
                </div>

                <div>
                    <label htmlFor="message">Μήνυμα</label>
                    <textarea className={styles.in, styles.message} ref={messageRef} type="text" name='message'  />
                </div>
                <div className={styles.dateContainer}>
                    <label htmlFor=""> Ραντεβού στίς: </label>
                    <DateTimePickerComponent  allowEdit={false} ref={appointmentDate}></DateTimePickerComponent>
                    {/* <DatePickerComponent  allowEdit={false} ref={appointmentDate} /> */}
                </div>
                <button  type='submit' onClick={e => add(e)} >Προσθήκη</button>

            </form>

        </div>
    );
}

export default AddNote;