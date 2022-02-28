import { useEffect } from "react";
import styles from '../styles/singleNoteInfo'
const NoteInfo = ({singleObg}) => {
    useEffect(()=>{
        console.log(singleObg )
    },[singleObg])

    return ( 
    <>
        <div className="rowOne">
        <p>gdg</p>
        </div>
        <div className="rowTwo">

        </div>
        <div className="rowThree">
        <p>{singleObg.name}</p>
        <p>{singleObg.message}</p>
        <p>{singleObg.id}</p>
        </div>
        
    
    
    </>
     );
}
 
export default NoteInfo;