import styles from '../styles/board.module.css'
const NoteList
 = ({id, name , message} ) => {
    return ( 

        <div>
            <span></span>
            <span>{name} - {message}</span>
            <span></span>
            
        </div>

     );
}
 
export default NoteList
;