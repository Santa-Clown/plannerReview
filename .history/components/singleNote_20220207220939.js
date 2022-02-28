import styles from '../styles/singleNote.module.css'
import NoteScheduler from './singleNoteSchedule';
import NoteInfo from './singleNoteInfo';
import { useState , useEffect } from 'react';


const SingleNote = ({ ChildFunction ,ShowSingleObj}) => {
    useEffect(()=>{
        console.log(ShowSingleObj)
    },[ShowSingleObj])
    
    const singlw


     useEffect(()=>{
        ChildFunction.current = viewer
     })

    const [placer, setPlacer] = useState(<NoteInfo></NoteInfo>)

    const viewer = ( view  )=>{
        
        if (view == 'show') {
            setPlacer(<NoteInfo singleObg={"obj"} ></NoteInfo>)
        } else if (view == 'calendar') {
            setPlacer(<NoteScheduler></NoteScheduler>)
        }
    }
     
    


    return (
        <>
            <div className={styles.container} >
            {placer}

            </div>
        </>
    );
}

export default SingleNote;