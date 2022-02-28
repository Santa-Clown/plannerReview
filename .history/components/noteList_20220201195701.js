import styles from '../styles/noteList.module.css'


const NoteList
    = ({ id, name, message }) => {
        return (

            <a href='#' className={styles.colums}>
                <span className={styles.col1}></span>
                <span className={styles.col2}><span>{name}</span> - <span>{message}</span></span>
                <span className={styles.col3}>
                    
                </span>
                <span className={styles.col4}></span>

            </a>

        );
    }

export default NoteList
    ;