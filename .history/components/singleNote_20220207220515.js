import styles from '../styles/singleNote.module.css'
import NoteScheduler from './singleNoteSchedule';
import NoteInfo from './singleNoteInfo';
import { useState , useEffect } from 'react';


const SingleNote = ({ ChildFunction ,ShowSingleObj}) => {
    useEffect(()=.{

    },[ShowSingleObj])
    


     useEffect(()=>{
        ChildFunction.current = viewer
     })

    const [placer, setPlacer] = useState(<NoteInfo></NoteInfo>)

    const viewer = ( view , obj )=>{
        console.log(obj + "blablaBla")
        if (view == 'show') {
            setPlacer(<NoteInfo singleObg={obj} ></NoteInfo>)
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