import { useEffect } from "react";

const NoteInfo = ({singleObg}) => {
    useEffect(()=>{
        console.log(singleObg )
    },[singleObg])

    return ( 
    <>
        <p>gdg</p>
        <p>{singleObg.name}</p>
        <p>{singleObg.message}</p>
        <p}</p>
    
    
    </>
     );
}
 
export default NoteInfo;