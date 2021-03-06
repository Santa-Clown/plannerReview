import { useEffect, useState } from "react";
import styles from '../styles/singleNoteInfo.module.css'
import { db } from "../firebase/clientApp";
import { updateDoc, doc } from "firebase/firestore";
import { colRefUser } from "../firebase/clientApp";
import { getDoc } from "firebase/firestore";
import { onSnapshot } from "firebase/firestore";
const NoteInfo = ({ singleObg }) => {
    


    const [editMode, setEditMode] = useState(false)
    const [editableName, setEditName] = useState('')
    const [editableMessage, setEditMessage] = useState('')
    // const [ check, setCheck]= useState(false)
    const[name,SetName]=useState(singleObg.name)
    const[message,setMessage]=useState(singleObg.message)
    const[pinned,setPinned]=useState(singleObg.pinned)

    // const singleDoc = doc(colRefUser,'plans',singleObg.id)
    // const docum = getDoc(singleDoc)
    // onSnapshot(docum,(snapshot)=>{
    //     console.log(snapshot)
    // })
    useEffect(() => {
        SetName(singleObg.name)
        setMessage(singleObg.message)
         setPinned(singleObg.pinned)
    }, [singleObg])




    const editing = () => {
        setEditMode(true)
        console.log('editing')
        if (editableName == '') {
            setEditName(singleObg.name)
        }
        if (editableMessage == '') {
            setEditMessage(singleObg.message)
        }

    }

    // const refresh = () => {

    // }

    // useEffect(()=>{
    //     setCheck(singleObg.pinned)
    //     console.log(check + "   " + singleObg.name)
    // })
    
    if(typeof singleObg.id != 'undefined'){
        const docRef = doc(db,'plans',singleObg.id)
        onSnapshot(docRef, (snap)=>{
            console.log(snap.data().name)
            setPinned(snap.data().pinned)
        })
    
    
    }

    //console.log('singlenoteinfo')
    const updateDocument = () => {


        const docRef = doc(db, 'plans', singleObg.id)
        updateDoc(docRef, {

            name: editableName,
            message: editableMessage
        }).then(() => {
            console.log('updated')
            setEditMode(false)
        })
    }

    const updatePinned = (arg) => {
        
        
        const docRef = doc(db, 'plans', singleObg.id)
        updateDoc(docRef, {

            pinned:arg,
           
        }).then((cred) => {
            
            console.log('updated')

        })

       
    }




    return (
        <>
            <div className={styles.parContainer}>
                <div className={styles.container}>
                    <div className={styles.rowOne}>
                        <p></p>
                    </div>
                    <div className={styles.rowTwo}>
                        <h3>????????????????</h3>
                    </div>
                </div>
                <div className={styles.rowThree}>
                    
                    <div>
                        <h3>??????????</h3>

                        {editMode ? <textarea className={styles.nameArea} onChange={(e) => { setEditName(e.target.value) }} type="text" value={editableName} /> : <p className={styles.name}>{name}</p>}

                    </div>
                    {/* <div>
                        <h3>????????????????</h3>
                        <p>{singleObg.appointment}</p>
                    </div> */}
                    <div>
                        <h3>????????????</h3>

                        {editMode ? <textarea className={styles.messageArea} type="text" onChange={(e) => { setEditMessage(e.target.value) }} value={editableMessage} /> : <p className={styles.message}>{message}</p>}

                    </div>
                    
                    <div style={{ display: "flex"  , alignItems: 'center'
                    
                }} >
                    <h4 style={{margin: 0}}> ????????????????????: </h4>
                    <input type="checkbox"  checked={pinned}  onChange={()=> updatePinned(!pinned)} />
                </div>
                    
                   


                </div>
            </div>
            <div className={styles.buttons}>
                {!editMode ? <button onClick={() => { editing() }} >??????????????????????</button> : ''}
                {editMode ? <button style={{background : '#f30808', color:'black' , }} onClick={() => { setEditMode(false) }}>??????????????</button> : ''}
                {editMode ? <button style={{background : '#50e922', color:'black'}} onClick={() => { updateDocument() }} >??????????????????</button> : null}
            </div>




        </>
    );
}

export default NoteInfo;