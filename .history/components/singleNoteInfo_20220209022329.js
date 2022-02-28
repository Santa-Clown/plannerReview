import { useEffect } from "react";

const NoteInfo = ({singleObg}) => {
    useEffect(()=>{
        console.log(singleObg )
    },[singleObg])

    return ( 
    <>
        <div c>
        <p>gdg</p>
        </div>
        <div>

        </div>
        <p>{singleObg.name}</p>
        <p>{singleObg.message}</p>
        <p>{singleObg.id}</p>
    
    
    </>
     );
}
 
export default NoteInfo;