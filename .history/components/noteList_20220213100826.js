import styles from '../styles/noteList.module.css'
import { BsX, BsPencilSquare } from "react-icons/bs";
import { useEffect } from 'react';
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebase/clientApp';
import { updateDoc } from 'firebase/firestore';


const NoteList = ({ id, name, message,by, timeS, showSingle,admin, open, appointment , userName }) => {



    const sendSingle = () => {
        if(!open && by != admin){
            const docRef = doc(db, 'plans', id)

        updateDoc(docRef, {

            opened:true,
        }).then(() => {
            console.log('updated')
        })
        }
        showSingle({ id, name, message, timeS, appointment })
        

    }




    const deleteDocument = () => {

        const docRef = doc(db , "plans" , id)
        deleteDoc(docRef).then(()=>{
            console.log('deltes')
        })

    }













    return (

        <a onClick={() => sendSingle()} href='#' className={styles.colums}>
            <span className={styles.col0} style={open ? { background: ' rgb(30, 124, 21)' } : { background: 'rgb(124, 21, 21)' }} ></span>
            <span className={styles.col1}>
                <div>
                    <h6>Δημιουργήθηκε στις:</h6>
                    <h4> {timeS}</h4>
                    <h6>Απο:</h6>
                    <h4>{userName}</h4>
                </div>
                <div>

                </div>


            </span>
            <div className={styles.sepLine} ></div>
            <span className={styles.col2}>

                <div>
                    <h6>Όνομα:</h6>
                    <h4>{name}</h4>
                </div>


            </span>
            <div className={styles.sepLine} ></div>
            <span className={styles.col3}>

            </span>
            <div className={styles.sepLine} ></div>
            <span className={styles.col4}>
                {/* <button> <BsPencilSquare /> </button> */}
                <button onClick={()=>deleteDocument()} ><BsX /></button>
            </span>

        </a>

    );
}

export default NoteList;