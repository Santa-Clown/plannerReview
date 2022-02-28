import styles from '../styles/noteList.module.css'
import { BsX, BsPencilSquare } from "react-icons/bs";
import { useEffect } from 'react';
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebase/clientApp';
import { updateDoc } from 'firebase/firestore';
import { onSnapshot } from 'firebase/firestore';



const NoteList = ({comment, dateId, id,commentId,pinned, name, message,by, timeS, showSingle,admin, open, appointment , userName , createrName }) => {



    const sendSingle = () => {
        if(!open && by != admin){
            const docRef = doc(db, 'plans', id)

        updateDoc(docRef, {

            opened:true,
        }).then(() => {
            console.log('updated')
        })
        }
        showSingle({ id, name, message, timeS, appointment ,commentId ,pinned ,dateId })
        

    }






    const deleteDocument = () => {

        const docRef = doc(db , "plans" , id)
        let confirmation = confirm('Διαγραφή?')
        if(confirmation){
            deleteDoc(docRef).then(()=>{
                
            })
        }
       

    }


    const openComment = ()=>{



    }



    const prom  =()=> {
        let promt = window.prompt("Σχόλιο:","defaultText");
        const docRef = doc(db, 'plans', id)
        if (promt != null) {
            
            updateDoc(docRef,{
                comment: `${createrName}` + ': ' + promt
            })
          }
    
    
    }






    return (

       <> <a onDoubleClick={() => sendSingle()} href='#' className={styles.colums} style={
            
        pinned ? {  boxShadow: '0px 1px 8px #d3bd11'} : (open? {  boxShadow: '0px 1px 8px rgb(218, 217, 217)'} : { boxShadow: '0px 1px 8px rgb(90,206,159)'})
        // open? {  boxShadow: '0px 1px 8px rgb(218, 217, 217)'} : { boxShadow: '0px 1px 8px rgb(90,206,159)'}
        
        } >
        <span className={styles.col0} style={
            pinned ? {  background: ' #d3bd11'} : (open? {  background: 'rgb(218, 217, 217)'} : { background: 'rgb(90,206,159)'})
            //open ? { background: ' rgb(218, 217, 217)' } : { background: 'rgb(90,206,159)' }
            
            } ></span>
        <span className={styles.col1}>
            <div>
                <h6>Καταχωρήθηκε:</h6>
                <h4> {timeS}</h4>
                <h6>Απο:</h6>
                <h4>{createrName}</h4>
            </div>
            <div>
               
            </div>


        </span>
        <div className={styles.sepLine} ></div>
        <span className={styles.col2}>

            <div>
                <h6>Όνομα Πελάτη:</h6>
                <h4>{name}</h4>
                <p> {    Date.parse(appointment) ?  new Date(Date.parse(appointment)).toLocaleDateString("el-GR")  :null} {    Date.parse(appointment) ?  new Date(Date.parse(appointment)).toLocaleTimeString("el-GR", {hour: '2-digit', minute:'2-digit'})  : null}</p>
                <p> </p>
            </div>


        </span>
        <div className={styles.sepLine} ></div>
        <span style={{ overflow:'hidden', display:'flex' , alignItems:'center'   }} className={styles.col3}>
            {/* <button >Σχόλια</button> */}
            {/* <textarea style={{border:'hidden'}}  name="comment" id="comment" cols="41" rows="10"></textarea> */}
            {/* {appointment.toUTCString()} */}
       
            <button style={{height:'90%' , width:'100%', border:'none'}} onClick={()=>{ prom()}}>
                   <p  style={{height:'100%' , width:'100%', padding:'0  5%' , overflowWrap:'break-word' ,  }}> {comment}</p>
                </button>
        </span>
        <div className={styles.sepLine} ></div>
        <span className={styles.col4}>
            {/* <button> <BsPencilSquare /> </button> */}
            <button onClick={()=>deleteDocument()} ><BsX /></button>
        </span>

    </a>
    
    </>

    );
}

export default NoteList;