import { useEffect, useState } from "react";
import styles from '../styles/singleNoteInfo.module.css'
const NoteInfo = ({ singleObg }) => {
    useEffect(() => {
        console.log(singleObg.appointment)
    }, [singleObg])


    const [editMode,setEditMode] = useState(true)
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

                        { editMode? <input className={styles.name} type="text" value={singleObg.name} /> : <p className={styles.name}>{singleObg.name}</p> }
                        
                    </div>
                    <div>
                        <h3>Ραντεβού</h3>
                        {/* <p>{singleObg.appointment}</p> */}
                    </div>
                    <div>
                        <h3>Μήνυμα</h3>

                        { editMode? <input className={styles.message} type="text" value={singleObg.message} /> : <p className={styles.message}>{singleObg.message}</p> }
                        
                    </div>
                    <p></p>
                    

                </div>
            </div>
            <div className={styles.buttons}>
                <button onClick={ ()=> { setEditMode(true)  }  } >επεξεργασία</button>
                <button onClick={ ()=> { setEditMode(false)  }  }>Koump2</button>
            </div>
           



        </>
    );
}

export default NoteInfo;