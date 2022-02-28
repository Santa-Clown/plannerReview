import { useEffect } from "react";

const NoteInfo = ({singleObg}) => {
    useEffect(()=>{
        console.log(singleObg )
    },[singleObg])

    return ( 
    <>
        <div className="rowOne">
        <p>gdg</p>
        </div>
        <div className="rowTwo">

        </div>
        <div className="rowOne">

        </div>
        <p>{singleObg.name}</p>
        <p>{singleObg.message}</p>
        <p>{singleObg.id}</p>
    
    
    </>
     );
}
 
export default NoteInfo;