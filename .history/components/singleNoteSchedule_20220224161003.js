import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns'
import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars';
import styles from "../styles/SingleNoteScheduler.module.css"
import {    EventSettingsModel,ViewsDirective,ViewDirective, Inject 
    , Today ,ScheduleComponent, Day , Week ,Month, WorkWeek,HeaderRowDirective,Agenda,
        HeaderRowsDirective} from "@syncfusion/ej2-react-schedule";
import { useEffect } from 'react';
import {
    getFirestore, collection, getDocs, doc, updateDoc,
    addDoc , query , where , orderBy, serverTimestamp, onSnapshot , deleteDoc
} from 'firebase/firestore';
import { db } from '../firebase/clientApp';
const NoteScheduler = (SetDatetoInfo) => {
    
    const colRef = collection(db, 'fireScheduler');
    useEffect(()=>{
        console.log(SetDatetoInfo.SetDatetoInfo[1])
    },[SetDatetoInfo])
   




    const updateAppointmentsToFirebase = (e)=>{
        if(e.requestType == 'eventCreated'){

     //
     
     //console.log(e.addedRecords[0])
            addDoc(colRef, {
                StartTime: e.addedRecords[0].StartTime ,
                EndTime: e.addedRecords[0].EndTime,
                Subject: e.addedRecords[0].Subject,
                isAllDay: e.addedRecords[0].IsAllDay,
                Description: e.addedRecords[0].Description ? e.addedRecords[0].Description: '',
                //ReccurenceRule : e.addedRecords[0].ReccurenceRule
                RecurrenceRule : e.addedRecords[0].RecurrenceRule ? e.addedRecords[0].RecurrenceRule : ""
            }).then(() => {
               
              
            })

        } else if( e.requestType == 'eventRemoved'){
            
            const docRef = doc(db , "fireScheduler" , e.deletedRecords[0].id)
         
                //console.log(testState.dataSource)
                deleteDoc(docRef).then((cred)=>{
                   // alert('Διαγράφηκε')
                  
                  
                })
            
        }
        else if( e.requestType == 'eventChanged'){
            


                const docRef = doc(db, 'fireScheduler', e.changedRecords[0].id)
                if( e.changedRecords[0].RecurrenceException){
                    updateDoc(docRef, {
        
                        StartTime: e.changedRecords[0].StartTime ,
                        EndTime: e.changedRecords[0].EndTime,
                        Subject: e.changedRecords[0].Subject,
                        isAllDay: e.changedRecords[0].IsAllDay,
                        Description: e.changedRecords[0].Description,
                        RecurrenceException : e.changedRecords[0].Description ? e.changedRecords[0].Description: '',
                        
                        RecurrenceRule : e.changedRecords[0].RecurrenceRule
                    }).then(() => {
                       
                    })
                }else{


                updateDoc(docRef, {
        
                    StartTime: e.changedRecords[0].StartTime ,
                    EndTime: e.changedRecords[0].EndTime,
                    Subject: e.changedRecords[0].Subject,
                    isAllDay: e.changedRecords[0].IsAllDay,
                    Description: e.changedRecords[0].Description ? e.changedRecords[0].Description: '',
                    //ReccurenceRule : e.addedRecords[0].ReccurenceRule
                    RecurrenceRule : e.changedRecords[0].RecurrenceRule
                }).then(() => {
                    
                })
            }
            
        }
        
      
    }
    const onPopupOpen = (args) => {
        if (args.type === 'Editor') {
            args.duration = 45;
        }
    }
    return (
        // <div className={styles.tbodyClass}>

        //     <div>
        //         <div> New Event</div>


        //     </div>
        //     <div>
        //         <div><input type="text" /></div>
        //         <div> <input name='Subject' type="text" /> </div>
        //     </div>
        //     <div>
        //         <div className='e-textlabel'>Status</div>
        //         <div>
        //             <DropDownListComponent id='EventType' dataSource={['New', 'Requested', 'Confirmed']}
        //                 placeholder="Choose Bitch" className='e-field ' className={styles.tbodychild} data-name='EventType' value={props.EventType || null} >

        //             </DropDownListComponent>
        //         </div>
        //     </div>
        //     <div>
        //         <div style={{ width: '5vw' }}>
        //             <DateTimePickerComponent style={{ width: '5vw' }} placeholder='Start' className='e-field' id='StartTime' data-name='StartTime'
        //                 value={new Date(props.startTime || props.StartTime)} format='dd/MM/yy hh:mm a'
        //             ></DateTimePickerComponent>
        //         </div>

        //     </div>
        //     <div>
        //         <div style={{ width: '5vw' }}><DateTimePickerComponent placeholder='End' style={{ width: '5vw' }} className='e-field' id='EndTime' data-name='EndTime'
        //             value={new Date(props.endTime || props.EndTime)} format='dd/MM/yy hh:mm a'
        //         ></DateTimePickerComponent>
        //         </div>
        //     </div>
        //     <div>
        //         <div>
        //             <textarea className='e-field' name="Description" id="Description" cols="50" rows="3"></textarea>
        //         </div>
        //     </div>


   



        // </div>
       <>
        {/* selectedDate={SetDatetoInfo.SetDatetoInfo[1].event.StartTime} */}
        <ScheduleComponent actionComplete={updateAppointmentsToFirebase} popupOpen={(e)=>{onPopupOpen(e)}} selectedDate={SetDatetoInfo.SetDatetoInfo[1].startTime}   popupClose={(e)=>{}}    actionBegin={()=>{}}  showHeaderBar={false} height={'100%'} width={'100%'} eventSettings={SetDatetoInfo.SetDatetoInfo[0]}    >
                
       {/* <HeaderRowsDirective>
         <HeaderRowDirective option="Yearrrr" />
         <HeaderRowDirective option="Month" />
         <HeaderRowDirective option="Week" />
         <HeaderRowDirective option="Date" />
         <HeaderRowDirective option="Hour" />
       </HeaderRowsDirective> */}
           <Inject services={[Day ]} />
          
           


       </ScheduleComponent></>
        
        
        );
}

export default NoteScheduler;