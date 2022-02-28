import { useEffect } from "react";

const NoteInfo = ({singleObg}) => {
    useEffect(()=>{
        console.log(singleObg)
    },[singleObg])

    return ( 
    <>
        <p>sing</p>
    
    
    </>
     );
}
 
export default NoteInfo;