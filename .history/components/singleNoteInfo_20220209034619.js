import { useEffect } from "react";
import styles from '../styles/singleNoteInfo.module.css'
const NoteInfo = ({ singleObg }) => {
    useEffect(() => {
        console.log(singleObg)
    }, [singleObg])

    return (
        <>
            <div className={styles.rowOne}>
                <p>gdg</p>
            </div>
            <div className={styles.rowTwo}>

            </div>
            <div className={styles.rowThree}>
                <div>
                    <h3>Όνομα</h3>
                    <p>{singleObg.name}</p>
                </div>
                <div>
                    <h3>Μήνυμα</h3>
                    <p>{singleObg.message}</p>
                </div>
                <div>
                    <h3>Ραντεβού</h3>
                    <p>{singleObg.appointment['seconds']}</p>
                </div>
                
            </div>



        </>
    );
}

export default NoteInfo;