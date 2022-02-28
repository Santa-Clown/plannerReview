import { useEffect, useState, useRef } from "react";
import styles from '../styles/singleNoteInfo.module.css'
import { db } from "../firebase/clientApp";
import { updateDoc, doc ,addDoc } from "firebase/firestore";
import { colRefUser } from "../firebase/clientApp";
import { getDoc } from "firebase/firestore";
import { onSnapshot } from "firebase/firestore";
import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars';
import { collection } from "firebase/firestore";
const NoteInfo = ({ singleObg }) => {



    const [editMode, setEditMode] = useState(false)
    const [editableName, setEditName] = useState('')
    const [editableMessage, setEditMessage] = useState('')
    const [editableAppointment, seteditableAppointment] = useState('')
    // const [ check, setCheck]= useState(false)
    const [name, SetName] = useState(singleObg.name)
    const [message, setMessage] = useState(singleObg.message)
    const [pinned, setPinned] = useState(singleObg.pinned)
    const [appointment, setAppointment] = useState(singleObg.appointment)
    const [dateId, setdateId] = useState(singleObg.dateId)
    const appointmentDate = useRef()

    // const singleDoc = doc(colRefUser,'plans',singleObg.id)
    // const docum = getDoc(singleDoc)
    // onSnapshot(docum,(snapshot)=>{
    //     console.log(snapshot)
    // })
    useEffect(() => {
        SetName(singleObg.name)
        setMessage(singleObg.message)
        setPinned(singleObg.pinned)
        setAppointment(singleObg.appointment)
        setdateId(singleObg.dateId)
    }, [singleObg])



    // useEffect(() => {
    // }, [appointmentDate.current])

    const editing = () => {
        setEditMode(true)
        setEditName(singleObg.name)
        setEditMessage(singleObg.message)
        seteditableAppointment(new Date(Date.parse(appointment)).toLocaleDateString("el-GR"))

    }

    // const refresh = () => {

    // }

    // useEffect(()=>{
    //     setCheck(singleObg.pinned)
    //     console.log(check + "   " + singleObg.name)
    // })

    if (typeof singleObg.id != 'undefined') {
        const docRef = doc(db, 'plans', singleObg.id)
        onSnapshot(docRef, (snap) => {
            //console.log(snap.data().name)
            if (typeof snap.data() != 'undefined') {
                setPinned(snap.data().pinned)
            }

        })


    }

    //console.log('singlenoteinfo')
    const updateDocument = () => {


        const docRef = doc(db, 'plans', singleObg.id)
        updateDoc(docRef, {

            name: editableName,
            message: editableMessage,
            appointmen: `${appointmentDate.current.value ? appointmentDate.current.value : singleObg.appointment}`
        }).then(() => {
            alert("Ενημερώθηκε")


            if (dateId != '') {
               
                const docRefSchedule = doc(db, 'fireScheduler', singleObg.dateId)
                appointmentDate.current.value ? 

                updateDoc(docRefSchedule, {
                    StartTime: appointmentDate.current.value,
                    EndTime: appointmentDate.current.value ,
                    Subject: editableName,
                    isAllDay: false,
                    Description: editableMessage,
                }) :   updateDoc(docRefSchedule, {
                   
                    Subject: editableName,
                    isAllDay: false,
                    Description: editableMessage,
                })

            } else {
                
                
                if (appointmentDate.current.value != null) {
                    const docRefSchedule = collection(db, 'fireScheduler')
                    addDoc(docRefSchedule, {
                        StartTime: appointmentDate.current.value,
                        EndTime: appointmentDate.current.value,
                        Subject: editableName,
                        isAllDay: false,
                        Description: editableMessage,

                    }).then((cred)=>{
                        updateDoc(docRef, {
                            dateId:cred.id
                            
                        })
                    })
                }


            }
            setEditMode(false)
        })
    }

    const updatePinned = (arg) => {


        const docRef = doc(db, 'plans', singleObg.id)
        updateDoc(docRef, {

            pinned: arg,

        })
        .then((cred) => {


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
                        <h3>Σημείωση</h3>
                    </div>
                </div>
                <div className={styles.rowThree}>

                    <div>
                        <h3>Όνομα Πελάτη</h3>

                        {editMode ? <textarea className={styles.nameArea} onChange={(e) => { setEditName(e.target.value) }} type="text" value={editableName} /> : <p className={styles.name}>{name}</p>}

                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }} >
                        <h3>Ραντεβού:</h3>
                        {editMode ? <DateTimePickerComponent step={15} value={editableAppointment} allowEdit={false} ref={appointmentDate} /> : <p>  {Date.parse(appointment) ? new Date(Date.parse(appointment)).toLocaleDateString("el-GR") : 'Κανένα'} {Date.parse(appointment) ? new Date(Date.parse(appointment)).toLocaleTimeString("el-GR", { hour: '2-digit', minute: '2-digit' }) : 'Ραντεβού'}    </p>}
                        {/* <p> {editMode ?   <DateTimePickerComponent  allowEdit={false} ref={appointmentDate}></DateTimePickerComponent> :       Date.parse(appointment) ?  new Date(Date.parse(appointment)).toLocaleDateString("el-GR")  :'Κανένα'} {    Date.parse(appointment) ?  new Date(Date.parse(appointment)).toLocaleTimeString("el-GR" , {hour: '2-digit', minute:'2-digit'})  :'Ραντεβού'}  } </p> */}
                    </div>
                    <div>
                        <h3>Μήνυμα</h3>

                        {editMode ? <textarea className={styles.messageArea} type="text" onChange={(e) => { setEditMessage(e.target.value) }} value={editableMessage} /> : <p className={styles.message}>{message}</p>}

                    </div>

                    <div className={styles.checkbox} style={{
                        display: "flex", alignItems: 'center'

                    }} >
                        <h4 style={{ margin: 0 }}> Save: </h4>
                        <input type="checkbox" checked={pinned} onChange={() => updatePinned(!pinned)} />
                    </div>




                </div>
            </div>
            <div className={styles.buttons}>
                {!editMode ? <button onClick={() => { editing() }} >επεξεργασία</button> : ''}
                {editMode ? <button style={{ background: '#f30808', color: 'black', fontWeight: 'bold' }} onClick={() => { setEditMode(false) }}>Ακύρωση</button> : ''}
                {editMode ? <button style={{ background: '#50e922', color: 'black', fontWeight: 'bold' }} onClick={() => { updateDocument() }} >Ενημέρωση</button> : null}
            </div>




        </>
    );
}

export default NoteInfo;