import styles from '../styles/singleNote.module.css'
import NoteScheduler from './singleNoteSchedule';
import NoteInfo from './singleNoteInfo';
import { useState, useEffect } from 'react';


const SingleNote = ({ ChildFunction, ShowSingleObj }) => {

    const [singleNoteObj, setsingleNoteObj] = useState(ShowSingleObj)
    const [animation,setAnimation] = useState(0)
 

    // useEffect(() => {
    //     setsingleNoteObj(ShowSingleObj)
    //     //  console.log(ShowSingleObj)
    // }, [ShowSingleObj])




    useEffect(() => {
        ChildFunction.current = viewer
    })

    const [placer, setPlacer] = useState('show')

    const viewer = (view) => {

        if (view == 'show') {
            setPlacer(
                'show'
            )
        } else if (view == 'calendar') {
             setPlacer()
        }
    }




    return (
        <>
            <div animation={animation} className={styles.container} >
                
                { placer == 'show' ?  <NoteInfo singleObg={singleNoteObj} /> : null }
                { placer == 'calendar' ? <NoteScheduler></NoteScheduler> : null }
                {/* <NoteInfo singleObg={ShowSingleObj} /> */}

            </div>
        </>
    );
}

export default SingleNote;