import styles from '../styles/noteList.module.css'
import { BsX, BsPencilSquare } from "react-icons/bs";
import { useEffect } from 'react';
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebase/clientApp';
import { updateDoc } from 'firebase/firestore';
import { onSnapshot } from 'firebase/firestore';



const NoteList = ({ dateId, id,commentId,pinned, name, message,by, timeS, showSingle,admin, open, appointment , userName , createrName }) => {



    const sendSingle = () => {
        if(!open && by != admin){
            const docRef = doc(db, 'plans', id)

        updateDoc(docRef, {

            opened:true,
        }).then(() => {
            console.log('updated')
        })
        }
        showSingle({ id, name, message, timeS, appointment ,commentId ,pinned ,dateId })
        

    }






    const deleteDocument = () => {

        const docRef = doc(db , "plans" , id)
        let confirmation = confirm('Διαγραφή?')
        if(confirmation){
            deleteDoc(docRef).then(()=>{
                
            })
        }
       

    }


    const openComment = ()=>{



    }










    return (

       <></>

    );
}

export default NoteList;