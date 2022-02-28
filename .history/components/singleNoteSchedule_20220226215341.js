import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns'
import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars';
import styles from "../styles/SingleNoteScheduler.module.css"
import {    EventSettingsModel,ViewsDirective,ViewDirective, Inject 
    , Today ,ScheduleComponent, Day , Week ,Month, WorkWeek,HeaderRowDirective,Agenda,
        HeaderRowsDirective} from "@syncfusion/ej2-react-schedule";
import { useEffect } from 'react';
import {
    collection, getDocs, doc, updateDoc,
    addDoc, deleteDoc
} from 'firebase/firestore';
import { db } from '../firebase/clientApp';
import { L10n } from '@syncfusion/ej2-base';
const NoteScheduler = (SetDatetoInfo) => {
    
    const colRef = collection(db, 'fireScheduler');
    // useEffect(()=>{
    // },[SetDatetoInfo])
   




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
    L10n.load({
        'en-US': {
            // 'schedule': {
            //     'saveButton': 'Αποθήκευση',
            //     'cancelButton': 'Ακύρωση',
            //     'deleteButton': 'Διαγραφή',
            //     'newEvent': 'Προσθήκη',
            // },
            "schedule": {
                "day": "Μέρα",
                "week": "Εβδομάδα",
                "workWeek": "Εργάσιμη Εβδομάδα",
                "month": "Μήνας",
                "agenda": "Ατζέντα",
                "weekAgenda": "Εβδομαδιαία Ατζέντα",
                "workWeekAgenda": "Ατζέντα Εργάσιμης Εβδομάδας",
                "monthAgenda": "Μηνιαία Ατζέντα",
                "today": "Σήμερα",
                "noEvents": "Χωρίς Events",
                "emptyContainer": "Δεν υπάρχουν καταχωρημένα event για αυτή την μέρα.",
                "allDay": "Όλη μέρα",
                "start": "Αρχή",
                "end": "Τέλος",
                "more": "Περισσότερα",
                "close": "Κλείσιμο",
                "cancel": "Ακύρωση",
                "noTitle": "(Χωρίς Τίτλο)",
                "delete": "Διαγραφή",
                "deleteEvent": "Διαγραφή Συμβάντος",
                "deleteMultipleEvent": "Διαγραφή Πολλαπλών Συμβάντων",
                "selectedItems": "Αντικείμενα επιλέχθηκαν",
                "deleteSeries": "Διαγραφή Σειράς",
                "edit": "Edit",
                "editSeries": "Επεξεργασία Σειράς",
                "editEvent": "Επεξεργασία Συμβάντος",
                "createEvent": "Δημιουργία",
                "subject": "Θέμα",
                "addTitle": "Προσθήκη Τίτλου",
                "moreDetails": "Περισσότερες Λεπτομέρειες",
                "save": "Αποθήκευση",
                "editContent": "Do you want to edit only this event or entire series?",
                "deleteRecurrenceContent": "Do you want to delete only this event or entire series?",
                "deleteContent": "Are you sure you want to delete this event?",
                "deleteMultipleContent": "Are you sure you want to delete the selected events?",
                "newEvent": "Νέο Συμβάν",
                "title": "Τίτλος",
                "location": "Τοποθεσία",
                "description": "Περιγραφή",
                "timezone": "Timezone",
                "startTimezone": "Start Timezone",
                "endTimezone": "End Timezone",
                "repeat": "Επανάληψη",
                "saveButton": "Αποθήκευση",
                "cancelButton": "Ακύρωση",
                "deleteButton": "Διαγραφή",
                "recurrence": "Recurrence",
                "wrongPattern": "The recurrence pattern is not valid.",
                "seriesChangeAlert": "The changes made to specific instances of this series will be cancelled and those events will match the series again.",
                "createError": "The duration of the event must be shorter than how frequently it occurs. Shorten the duration, or change the recurrence pattern in the recurrence event editor.",
                "recurrenceDateValidation": "Some months have fewer than the selected date. For these months, the occurrence will fall on the last date of the month.",
                "sameDayAlert": "Two occurrences of the same event cannot occur on the same day.",
                "editRecurrence": "Edit Recurrence",
                "repeats": "Repeats",
                "alert": "Alert",
                "startEndError": "The selected end date occurs before the start date.",
                "invalidDateError": "The entered date value is invalid.",
                "ok": "Ok",
                "occurrence": "Occurrence",
                "series": "Series",
                "previous": "Προηγούμενο",
                "next": "Επόμενο",
                "timelineDay": "Timeline Day",
                "timelineWeek": "Timeline Week",
                "timelineWorkWeek": "Timeline Work Week",
                "timelineMonth": "Timeline Month",
                "expandAllDaySection": "Expand",
                "collapseAllDaySection": "Collapse"
            },
            "recurrenceeditor": {
                "none": "None",
                "daily": "Daily",
                "weekly": "Weekly",
                "monthly": "Monthly",
                "month": "Month",
                "yearly": "Yearly",
                "never": "Never",
                "until": "Until",
                "count": "Count",
                "first": "First",
                "second": "Second",
                "third": "Third",
                "fourth": "Fourth",
                "last": "Last",
                "repeat": "Repeat",
                "repeatEvery": "Repeat Every",
                "on": "Repeat On",
                "end": "End",
                "onDay": "Day",
                "days": "Day(s)",
                "weeks": "Week(s)",
                "months": "Month(s)",
                "years": "Year(s)",
                "every": "every",
                "summaryTimes": "time(s)",
                "summaryOn": "on",
                "summaryUntil": "until",
                "summaryRepeat": "Repeats",
                "summaryDay": "day(s)",
                "summaryWeek": "week(s)",
                "summaryMonth": "month(s)",
                "summaryYear": "year(s)"
            }
        }
    });
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