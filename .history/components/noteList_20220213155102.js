import styles from '../styles/noteList.module.css'
import { BsX, BsPencilSquare } from "react-icons/bs";
import { useEffect } from 'react';
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebase/clientApp';
import { updateDoc } from 'firebase/firestore';
import NoteComment from './Comment';


const NoteList = ({ id,commentId, name, message,by, timeS, showSingle,admin, open, appointment , userName , createrName }) => {



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



    }










    return (

       <>
       </>

    );
}

export default NoteList;