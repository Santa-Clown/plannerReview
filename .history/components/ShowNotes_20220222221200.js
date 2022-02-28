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
import NoteComment from './Comment';



const ShowNotes = ({ ShowSingle , Search , adm , userName , pinned }) => {


    const [ar, setar] = useState([]);
    //---------------------------------------------------------Hooks----------------------------------------------
    //---------------------------------------------------------Hooks----------------------------------------------
    const [searchWord,SetSearchWord]= useState('')
    const [pin,setPin] = useState(false)


    
    const setpinned = (arg)=> {
        setPin(arg)
        
    }
    useEffect(()=>{
        pinned.current = setpinned
        
    },[pinned])

   

    useEffect(() => {
        const unread = 0


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
                if(!doc.data().opened){
                    unread++
                }

                setar(ar => [...ar, {
                    ...doc.data(),
                    id: doc.id,
                    name: doc.data().name,
                    createdBy :doc.data().createdBy,
                    createrName : doc.data().createrName,
                    message: doc.data().message,
                    timeS: doc.data().timestamp.toDate().toLocaleString('el-GR', { timeZone: 'UTC' }),
                    opened: doc.data().opened,
                    appointmen: doc.data().appointmen, //.toDate().toLocaleString('el-GR', { timeZone: 'UTC' }),
                    commentId : doc.data().commentaryId,
                    pinned : doc.data().pinned,
                    dateId:doc.data().dateId,
                    comment:



                }])
                
            })
            // console.log(doc)
            // ShowSingle({ id, name, message, timeS, appointment ,commentId ,pinned })
            
        })


    }, []

    );
    // ar.forEach(item => { console.log(item.appointmen ) })
    useEffect(()=>{
        
        SetSearchWord(Search)
    },[Search])





    return (
        <div className={styles.container}>
            <div className={styles.notes} >
                {/* <div className={styles.colums} >
                    <span className={styles.col1} >#</span>
                    <span className={styles.col2} >Name</span>
                    <span className={styles.col3} >Action</span>
                </div> */}
                {/* <div className={styles.commentArea} >

                    <NoteComment />

                </div> */}
                {ar.filter((val)=>{
                    if(searchWord == ""){
                        return val;
                    } else if(val.name.toLowerCase().includes(searchWord.toLowerCase())){
                        return val
                    }
                }).map(note => (
                    pin ?  
                   (note.pinned == pin ? <NoteList dateId={note.dateId} commentId={ note.commentId} pinned={note.pinned} createrName={note.createrName} userName={userName} admin={ adm} showSingle={ShowSingle} timeS={note.timeS} by={note.createdBy} key={note.id} id={note.id} name={note.name} message={note.message} open={note.opened} appointment={note.appointmen} /> : null) :
                    <NoteList dateId={note.dateId} commentId={ note.commentId} pinned={note.pinned} createrName={note.createrName} userName={userName} admin={ adm} showSingle={ShowSingle} timeS={note.timeS} by={note.createdBy} key={note.id} id={note.id} name={note.name} message={note.message} open={note.opened} appointment={note.appointmen} />
                    
                )) 
                 }
            </div>
            {/* <div ref={allmynotes} id='allNotes' ></div> */}



        </div>
    );
}

export default ShowNotes;