import styles from '../styles/singleNote.module.css'
import NoteScheduler from './singleNoteSchedule';
import NoteInfo from './singleNoteInfo';
import { useState, useEffect } from 'react';


const SingleNote = ({ ChildFunction, ShowSingleObj }) => {

    const [singleNoteObj, setsingleNoteObj] = useState(ShowSingleObj)


    // useEffect(() => {
    //     setsingleNoteObj(ShowSingleObj)
    //     //  console.log(ShowSingleObj)
    // }, [ShowSingleObj])




    // useEffect(() => {
    //     ChildFunction.current = viewer
    // })

    // const [placer, setPlacer] = useState(<NoteInfo singleObg={singleNoteObj} />)

    // const viewer = (view) => {

    //     if (view == 'show') {
    //         setPlacer(
    //             <NoteInfo singleObg={singleNoteObj} />
    //         )
    //     } else if (view == 'calendar') {
    //         // setPlacer(<NoteScheduler></NoteScheduler>)
    //     }
    // }




    return (
        <>
            <div animation={} className={styles.container} >
                {/* {placer} */}
                <NoteInfo singleObg={ShowSingleObj} />

            </div>
        </>
    );
}

export default SingleNote;