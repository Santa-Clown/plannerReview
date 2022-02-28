import { useEffect } from "react";

const NoteInfo = ({singleObg}) => {
    useEffect(()=>{
        console.log(singleObg)
    },[singleObg])

    return ( 
    <>
        <p>singl</p>
    
    
    </>
     );
}
 
export default NoteInfo;