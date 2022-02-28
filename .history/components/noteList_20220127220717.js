import styles from '../styles/noteList.module.css'


const NoteList
    = ({ id, name, message }) => {
        return (

            <s className={styles.colums}>
                <span className={styles.col1}></span>
                <span className={styles.col2}>{name} - {message}</span>
                <span className={styles.col3}></span>

            </div>

        );
    }

export default NoteList
    ;