import styles from '../styles/singleNote.module.css'
import NoteScheduler from './singleNoteSchedule';
import NoteInfo from './singleNoteInfo';


const SingleNote = () => {



    return ( 
        <>
        <div className={styles.container} >
            <NoteScheduler></NoteScheduler>

        </div>
        </>
     );
}
 
export default SingleNote;