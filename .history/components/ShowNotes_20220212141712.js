import {
    getFirestore, collection, getDocs, onSnapshot,
    addDoc, query, where, orderBy, serverTimestamp
} from 'firebase/firestore';
import { useEffect, useState, useRef } from 'react';
import styles from '../styles/ShowNotes.module.css';
import Note from './note';
import NoteList from './noteList';
import { db } from '../firebase/clientApp';

import { ViewState } from '@devexpress/dx-react-scheduler';
import {
    Scheduler,
    MonthView,
    Appointments,
} from '@devexpress/dx-react-scheduler-material-ui';



const ShowNotes = ({ ShowSingle }) => {


    const [ar, setar] = useState([]);
    //---------------------------------------------------------Hooks----------------------------------------------
    //---------------------------------------------------------Hooks----------------------------------------------

    useEffect(() => {



        const colRef = collection(db, 'plans');

        //, where('name','==','GEORGIOS MELADZE')
        const q = query(colRef, orderBy('timestamp', 'desc'))
        // getDocs(colRef)
        //     .then((snapshot) => {


        //         snapshot.docs.forEach((doc) => {


        //             setar(ar => [...ar, {
        //                 ...doc.data(),
        //                 id: doc.id,
        //                 name: doc.data().name,
        //                 message: doc.data().message,
        //                 timeS: doc.data().timestamp.toDate().toDateString() ,




        //             }])
        //         })
        //     });

        onSnapshot(q, (snapshot) => {
            setar([])
            snapshot.docs.forEach((doc) => {


                setar(ar => [...ar, {
                    ...doc.data(),
                    id: doc.id,
                    name: doc.data().name,
                    message: doc.data().message,
                    timeS: doc.data().timestamp.toDate().toDateString(),
                    opened: doc.data().opened,
                    appointmen: doc.data().appointmen,



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

                {ar.filter().map(note => (
                    <NoteList showSingle={ShowSingle} timeS={note.timeS} key={note.id} id={note.id} name={note.name} message={note.message} open={note.opened} appointment={note.appointmen} />

                ))}
            </div>
            {/* <div ref={allmynotes} id='allNotes' ></div> */}



        </div>
    );
}

export default ShowNotes;