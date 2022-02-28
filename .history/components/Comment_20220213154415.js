import { colRefCommentary } from "../firebase/clientApp";
import { doc ,getDoc } from "firebase/firestore";








const NoteComment = ( {noteId} ) => {

    const singleDocument = doc(colRefCommentary, 'commentary' , noteId )
    getDoc(sin)

    return ( <div>








    </div> );
}
 
export default NoteComment;