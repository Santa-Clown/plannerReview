
import { doc ,getDoc } from "firebase/firestore";
import { useState } from "react";
import { db } from "../firebase/clientApp";








const NoteComment = ( {noteId} ) => {

    const [commentArea, setCommentArea] = useState()
    
    const docRefComment = doc(db,  'commentary' , noteId)
    getDoc(docRefComment).then((cred)=>{
        setCommentArea( 
        cred.data().map( ()=>{
                console.log
            } )
 )
    })

    return ( <div>

fbfnnfg






    </div> );
}
 
export default NoteComment;