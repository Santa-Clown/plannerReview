import { useEffect } from "react";

const NoteInfo = ({singleObg}) => {
    useEffect(()=>{
        console.log(singleObg.name)
    },[singleObg])

    return ( 
    <>
        <p></p>
        <p>singleObg.name</p>
        <p>singleObg.name</p>
        <p>singleObg.name</p>
    
    
    </>
     );
}
 
export default NoteInfo;