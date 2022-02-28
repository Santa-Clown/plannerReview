import styles from '../styles/noteList.module.css'
import { BsX, BsPencilSquare } from "react-icons/bs";
import { useEffect } from 'react';
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebase/clientApp';
import { updateDoc } from 'firebase/firestore';
import NoteComment from './Comment';
import use

const NoteList = ({ id,commentId, name, message,by, timeS, showSingle,admin, open, appointment , userName , createrName }) => {


    const [noteComment, setNoteComment] = useState(false)
    const sendSingle = () => {
        if(!open && by != admin){
            const docRef = doc(db, 'plans', id)

        updateDoc(docRef, {

            opened:true,
        }).then(() => {
            console.log('updated')
        })
        }
        showSingle({ id, name, message, timeS, appointment ,commentId })
        

    }




    const deleteDocument = () => {

        const docRef = doc(db , "plans" , id)
        deleteDoc(docRef).then(()=>{
            console.log('deltes')
        })

    }


    const openComment = ()=>{


        setNoteComment(true)
    }










    return (

       <>
        {noteComment ? <NoteComment  noteId={commentId}/>: null}
<a onClick={() => sendSingle()} href='#' className={styles.colums}>
            <span className={styles.col0} style={open ? { background: ' rgb(30, 124, 21)' } : { background: 'rgb(124, 21, 21)' }} ></span>
            <span className={styles.col1}>
                <div>
                    <h6>Καταχωρήθηκε:</h6>
                    <h4> {timeS}</h4>
                    <h6>Απο:</h6>
                    <h4>{createrName}</h4>
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
                <button onClick={ ()=> openComment } >Σχόλια</button>
            </span>
            <div className={styles.sepLine} ></div>
            <span className={styles.col4}>
                {/* <button> <BsPencilSquare /> </button> */}
                <button onClick={()=>deleteDocument()} ><BsX /></button>
            </span>

        </a>
       </>

    );
}

export default NoteList;