import styles from '../styles/noteList.module.css'
import { BsX } from "react-icons/bs";


const NoteList
    = ({ id, name, message , timeS }) => {
        return (

            <a href='#' className={styles.colums}>
                <span className={styles.col0}></span>
                <span className={styles.col1}>
                    <div>{timeS}</div>
                    <div>hr</div>


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
                    <button></button>
                    <button>x</button>
                    </span>

            </a>

        );
    }

export default NoteList;