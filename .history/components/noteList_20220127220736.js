import styles from '../styles/noteList.module.css'


const NoteList
    = ({ id, name, message }) => {
        return (

            <a  className={styles.colums}>
                <span className={styles.col1}></span>
                <span className={styles.col2}>{name} - {message}</span>
                <span className={styles.col3}></span>

            </a>

        );
    }

export default NoteList
    ;