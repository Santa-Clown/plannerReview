import {
    getFirestore, collection, getDocs,
    addDoc , query , where , orderBy, serverTimestamp
} from 'firebase/firestore';
import { useEffect, useState, useRef } from 'react';
import styles from '../styles/ShowNotes.module.css';
import Note from './note';
import NoteList from './noteList';



const ShowNotes = () => {


    const [ar, setar] = useState([]);
    //---------------------------------------------------------Hooks----------------------------------------------
    //---------------------------------------------------------Hooks----------------------------------------------

    useEffect(() => {

        const db = getFirestore()

        const colRef = collection(db, 'plans');



        getDocs(colRef)
            .then((snapshot) => {


                snapshot.docs.forEach((doc) => {


                    setar(ar => [...ar, {
                        ...doc.data(),
                        id: doc.id,
                        name: doc.data().name,
                        message: doc.data().message,
                        timeS: `{doc.data().timestamp.toDate()}` ,
                        



                    }])
                })
            })
    }, []

    );

    return (
        <div className={styles.container}>
            <div className={styles.notes} >
                {/* <div className={styles.colums} >
                    <span className={styles.col1} >#</span>
                    <span className={styles.col2} >Name</span>
                    <span className={styles.col3} >Action</span>
                </div> */}
                {ar.map(note => (
                    <NoteList timeS={note.timeS}  key={note.id} id={note.id} name={note.name} message={note.message } />
       
                    ))}
            </div>
            {/* <div ref={allmynotes} id='allNotes' ></div> */}



        </div>
    );
}

export default ShowNotes;