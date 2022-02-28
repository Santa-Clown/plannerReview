import { useEffect, useState } from "react";
import styles from '../styles/singleNoteInfo.module.css'
import { db } from "../firebase/clientApp";
import { updateDoc, doc } from "firebase/firestore";
const NoteInfo = ({ singleObg }) => {
    useEffect(() => {

    }, [singleObg])


    const [editMode, setEditMode] = useState(false)
    const [editableName, setEditName] = useState('')
    const [editableMessage, setEditMessage] = useState('')




    const editing = () => {
        setEditMode(true)

        if (editableName == '') {
            setEditName(singleObg.name)
        }
        if (editableMessage == '') {
            setEditMessage(singleObg.message)
        }

    }

    const refresh = ()



    const updateDocument = () => {


        const docRef = doc(db, 'plans', singleObg.id)
        updateDoc(docRef, {

            name: editableName,
            message: editableMessage
        }).then(() => {
            console.log('updated')
            setEditMode(false)
        })
    }



    return (
        <>
            <div className={styles.parContainer}>
                <div className={styles.container}>
                    <div className={styles.rowOne}>
                        <p>{singleObg.timestamp}</p>
                    </div>
                    <div className={styles.rowTwo}>
                        <h3>Σημείωση</h3>
                    </div>
                </div>
                <div className={styles.rowThree}>
                    <div>
                        <h3>Όνομα</h3>

                        {editMode ? <textarea className={styles.nameArea} onChange={(e) => { setEditName(e.target.value) }} type="text" value={editableName} /> : <p className={styles.name}>{singleObg.name}</p>}

                    </div>
                    <div>
                        <h3>Ραντεβού</h3>
                        {/* <p>{singleObg.appointment}</p> */}
                    </div>
                    <div>
                        <h3>Μήνυμα</h3>

                        {editMode ? <textarea className={styles.messageArea} type="text" onChange={(e) => { setEditMessage(e.target.value) }} value={editableMessage} /> : <p className={styles.message}>{singleObg.message}</p>}

                    </div>
                    <p></p>


                </div>
            </div>
            <div className={styles.buttons}>
                {!editMode ? <button onClick={() => { editing() }} >επεξεργασία</button> : ''}
                {editMode ? <button onClick={() => { setEditMode(false) }}>Ακύρωση</button> : ''}
                {editMode ? <button onClick={() => { updateDocument() }} >Ενημέρωση</button> : null}
            </div>




        </>
    );
}

export default NoteInfo;