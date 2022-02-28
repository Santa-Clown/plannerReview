import { colRefCommentary } from "../firebase/clientApp";
import { doc ,getDoc } from "firebase/firestore";
import { useState } from "react";
import { db } from "../firebase/clientApp";








const NoteComment = ( {noteId} ) => {

    const [commentArea, setCommentArea] = useState()
    const singleDocument = doc(colRefCommentary, 'commentary' , noteId )
    const docRefComment = doc(db,  'commentary' , noteId)
    getDoc(docRefComment).then((cred)=>{
        setCommentArea( 
        <div>
            {cred.data().map( ()=>{

            } )
}

        </div> )
    })

    return ( <div>

fbfnnfg






    </div> );
}
 
export default NoteComment;