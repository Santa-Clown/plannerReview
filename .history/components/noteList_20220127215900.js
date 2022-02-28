import styles from '../styles/noteList.module.css'


const NoteList
 = ({id, name , message} ) => {
    return ( 

        <div>
            <span className={styles.col1}></span>
            <span className={styles.col2}>{name} - {message}</span>
            <span></span>
            
        </div>

     );
}
 
export default NoteList
;