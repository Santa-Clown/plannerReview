import { colRefCommentary } from "../firebase/clientApp";
import { doc ,getDoc } from "firebase/firestore";
import { useState } from "react";








const NoteComment = ( {noteId} ) => {

    const [commentArea, setCommentArea] = useState()
    const singleDocument = doc(colRefCommentary, 'commentary' , noteId )
    const doc
    getDoc(singleDocument).then((cred)=>{
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