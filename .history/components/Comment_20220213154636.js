import { colRefCommentary } from "../firebase/clientApp";
import { doc ,getDoc } from "firebase/firestore";
import { useState } from "react";








const NoteComment = ( {noteId} ) => {

    const [commentArea, setCommentArea] = useState()
    const singleDocument = doc(colRefCommentary, 'commentary' , noteId )
    getDoc(singleDocument).then((cred)=>{
        setCommentArea(  )
    })

    return ( <div>








    </div> );
}
 
export default NoteComment;