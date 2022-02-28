import { DatePickerComponent, DateTimePickerComponent } from '@syncfusion/ej2-react-calendars';
import { useRef } from "react";
import {
    getFirestore, collection, getDocs,
    addDoc, serverTimestamp
} from 'firebase/firestore';
import styles from '../styles/AddNote.module.css';
import { db } from '../firebase/clientApp';
import { colRefCommentary } from '../firebase/clientApp';




const AddNote = ( {adm ,createrUserName} ) => {


    const nameRef = useRef();
    const messageRef = useRef();
    const appointmentDate = useRef()
    // const minDate =new Date(new Date().getFullYear(), new Date().getMonth(), 7, 0, 0, 0);
    // const maxDate =new Date(new Date().getFullYear(), new Date().getMonth(), 27,new Date().getHours(),new Date().getMinutes(),new Date().getSeconds());

    const colRef = collection(db, 'plans');
    const colRef2 = collection(db, 'fireScheduler');
    let timeti = ''
    function add(e) {
        e.preventDefault();
        


        if(appointmentDate.current.value){

            addDoc(colRef2, {
                StartTime: appointmentDate.current.value ,
                EndTime: appointmentDate.current.value,
                Subject: nameRef.current.value,
                isAllDay: false,
                Description: messageRef.current.value,
                //ReccurenceRule : e.addedRecords[0].ReccurenceRule
                
            }).then((cred)=>{
                   

                    addDoc(colRef, {
                        name: nameRef.current.value,
                        createdBy: adm,
                        createrName: createrUserName,
                        message: messageRef.current.value,
                        opened: false,
                        timestamp: serverTimestamp(),
                         appointmen: `${appointmentDate.current.value}`,
                        //  appointmen: new Date(appointmentDate.current.value),
                        //  appointmen: appointmentDate.current.value.toLocaleDateString('el-GR'),
                        //commentaryId : cred.id,
                        pinned:false,
                        comment: '',
                        dateId:cred.id
                        
                    }).then(()=>{
                      
                        alert('Επιτυχής εγγραφή')
                    })
                    .catch((err)=>{
                        alert(err)
                    })



            })
        }else{
            addDoc(colRef, {
                name: nameRef.current.value,
                createdBy: adm,
                createrName: createrUserName,
                message: messageRef.current.value,
                opened: false,
                timestamp: serverTimestamp(),
                 appointmen: `${appointmentDate.current.value}`,
                //  appointmen: new Date(appointmentDate.current.value),
                //  appointmen: appointmentDate.current.value.toLocaleDateString('el-GR'),
                //commentaryId : cred.id,
                pinned:false,
                comment: '',
                dateId:''
                
            }).then(()=>{
              
                alert('Επιτυχής εγγραφή')
            })
            .catch((err)=>{
                alert(err)
            })


        }

        


        // addDoc(colRefCommentary,{
        //     commentary: { comment: {
        //         'author': '',
        //         'text': '',
        //         'time': ''
        //     }  }
        // }).then((cred) => {

        //     addDoc(colRef, {
        //         name: nameRef.current.value,
        //         createdBy: adm,
        //         createrName: createrUserName,
        //         message: messageRef.current.value,
        //         opened: false,
        //         timestamp: serverTimestamp(),
        //          appointmen: `${appointmentDate.current.value}`,
        //         //  appointmen: new Date(appointmentDate.current.value),
        //         //  appointmen: appointmentDate.current.value.toLocaleDateString('el-GR'),
        //         commentaryId : cred.id,
        //         pinned:false,
        //         comment: ''
                
        //     }).then(()=>{

        //         alert('done')
        //     })
        //     .catch((err)=>{
        //         alert(err)
        //     })
            
        // })
    }
    return (
        <div className={styles.add} >
            

            {/* <ViewState 
            currentDate='2018-07-17'/> */}
            <form className={styles.form}>
            <h3>Νέα Καταχώρηση</h3>
                <div>
                    <label htmlFor="name">Όνομα Πελάτη</label>
                    <input required className={styles.in, styles.name} ref={nameRef} type="text" name='name'  />
                </div>

                <div>
                    <label htmlFor="message">Μήνυμα</label>
                    <textarea className={styles.in, styles.message} ref={messageRef} type="text" name='message'  />
                </div>
                <div className={styles.dateContainer}>
                    <label htmlFor=""> Ραντεβού: </label>
                    <DateTimePickerComponent step={15}  allowEdit={false} ref={appointmentDate}></DateTimePickerComponent>
                     {/* <DatePickerComponent  allowEdit={false} ref={appointmentDate} />  */}
                </div>
                <button  type='submit' onClick={e => add(e)} >Προσθήκη</button>

            </form>

        </div>
    );
}

export default AddNote;