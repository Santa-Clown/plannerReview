import styles from '../styles/noteList.module.css'
import { BsX, BsPencilSquare } from "react-icons/bs";
import { useEffect } from 'react';
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebase/clientApp';
import { updateDoc } from 'firebase/firestore';
import { onSnapshot } from 'firebase/firestore';



const NoteList = ({ id,commentId,pinned, name, message,by, timeS, showSingle,admin, open, appointment , userName , createrName }) => {



    const sendSingle = () => {
        if(!open && by != admin){
            const docRef = doc(db, 'plans', id)

        updateDoc(docRef, {

            opened:true,
        }).then(() => {
            console.log('updated')
        })
        }
        showSingle({ id, name, message, timeS, appointment ,commentId ,pinned })
        

    }






    const deleteDocument = () => {

        const docRef = doc(db , "plans" , id)
        deleteDoc(docRef).then(()=>{
            console.log('deltes')
        })

    }


    const openComment = ()=>{



    }










    return (

        <a onClick={() => sendSingle()} href='#' className={styles.colums} style={
            
            pinned ? {  boxShadow: '0px 1px 8px #d3bd11'} : (open? {  boxShadow: '0px 1px 8px rgb(218, 217, 217)'} : { boxShadow: '0px 1px 8px rgb(90,206,159)'})
            // open? {  boxShadow: '0px 1px 8px rgb(218, 217, 217)'} : { boxShadow: '0px 1px 8px rgb(90,206,159)'}
            
            } >
            <span className={styles.col0} style={
                pinned ? {  background: ' #d3bd11'} : (open? {  background: 'rgb(218, 217, 217)'} : { background: 'rgb(90,206,159)'})
                //open ? { background: ' rgb(218, 217, 217)' } : { background: 'rgb(90,206,159)' }
                
                } ></span>
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
            <span style={{ overflow:'hidden' , width:'100'  }} className={styles.col3}>
                {/* <button >Σχόλια</button> */}
                <textarea  name="comment" id="comment" cols="30" rows="10"></textarea>
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