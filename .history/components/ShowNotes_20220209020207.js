import {
    getFirestore, collection, getDocs, onSnapshot ,
    addDoc , query , where , orderBy, serverTimestamp
} from 'firebase/firestore';
import { useEffect, useState, useRef } from 'react';
import styles from '../styles/ShowNotes.module.css';
import Note from './note';
import NoteList from './noteList';


import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  MonthView,
  Appointments,
} from '@devexpress/dx-react-scheduler-material-ui';
    


const ShowNotes = ({ShowSingle}) => {


    const [ar, setar] = useState([]);
    //---------------------------------------------------------Hooks----------------------------------------------
    //---------------------------------------------------------Hooks----------------------------------------------

    useEffect(() => {

        const db = getFirestore()

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

            onSnapshot(q, (snapshot)=>{
                snapshot.docs.forEach((doc) => {


                    setar(ar => [...ar, {
                        ...doc.data(),
                        id: doc.id,
                        name: doc.data().name,
                        message: doc.data().message,
                        timeS: doc.data().timestamp.toDate().toDateString() ,
                        



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
                    <NoteList showSingle={ShowSingle} timeS={note.timeS}   key={note.id} id={note.id} name={note.name} message={note.message } open={} />
       
                    ))}
            </div>
            {/* <div ref={allmynotes} id='allNotes' ></div> */}



        </div>
    );
}

export default ShowNotes;