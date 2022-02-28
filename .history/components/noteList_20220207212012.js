import styles from '../styles/noteList.module.css'
import { BsX ,BsPencilSquare } from "react-icons/bs";
import { useEffect } from 'react';


const NoteList = ({ id, name, message , timeS, showSingle }) => {

        useEffect(

            showSingle.current
        )
        
        const sendSingle = ()=>{
            
        }


        return (

            <a onClick={()=> console.log('osodjfsofibidsbgbvisbvihsbihsbivsbisv')} href='#' className={styles.colums}>
                <span className={styles.col0}></span>
                <span className={styles.col1}>
                    <div>{timeS}</div>
                    <div></div>


                </span>
                <div className={styles.sepLine} ></div>
                <span className={styles.col2}>
                    
                    <div>{name}</div>
                    <div>{message}</div>
                    
                </span>
                <div className={styles.sepLine} ></div>
                <span className={styles.col3}>

                </span>
                <div className={styles.sepLine} ></div>
                <span className={styles.col4}>
                    <button> <BsPencilSquare /> </button>
                    <button><BsX /></button>
                    </span>

            </a>

        );
    }

export default NoteList;