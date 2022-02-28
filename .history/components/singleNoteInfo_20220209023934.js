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
                    <h2></h2>
                <p>{singleObg.name}</p>
                </div>
                <p>{singleObg.message}</p>
                <p>{singleObg.id}</p>
            </div>



        </>
    );
}

export default NoteInfo;