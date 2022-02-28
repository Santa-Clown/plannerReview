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
        <div className="rowThree">

        </div>
        
    
    
    </>
     );
}
 
export default NoteInfo;