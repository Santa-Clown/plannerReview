import { useEffect, useState } from "react";
import styles from '../styles/singleNoteInfo.module.css'
const NoteInfo = ({ singleObg }) => {
    useEffect(() => {
        console.log(singleObg.appointment)
    }, [singleObg])


    const [editMode,setEditM]
    return (
        <>
            <div className={styles.parContainer}>
                <div className={styles.container}>
                    <div className={styles.rowOne}>
                        <p>gdg</p>
                    </div>
                    <div className={styles.rowTwo}>
                            <h3>Σημείωση</h3>
                    </div>
                </div>
                <div className={styles.rowThree}>
                    <div>
                        <h3>Όνομα</h3>
                        <p className={styles.name}>{singleObg.name}</p>
                    </div>
                    <div>
                        <h3>Ραντεβού</h3>
                        {/* <p>{singleObg.appointment}</p> */}
                    </div>
                    <div>
                        <h3>Μήνυμα</h3>
                        <p className={styles.message} >{singleObg.message}</p>
                    </div>
                    <p></p>
                    

                </div>
            </div>
            <div className={styles.buttons}>
                <button>Koump1</button>
                <button>Koump2</button>
            </div>
           



        </>
    );
}

export default NoteInfo;