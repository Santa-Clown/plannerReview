

import { useRef } from "react";
import {    EventSettingsModel,ViewsDirective,ViewDirective, Inject 
, Today ,ScheduleComponent, Day , Week ,Month, WorkWeek,HeaderRowDirective,
    HeaderRowsDirective} from "@syncfusion/ej2-react-schedule";
import { DataManager , WebApiAdaptor } from "@syncfusion/ej2-data";
import { useState } from "react";
// import ToolBarComponent from "@syncfusion/ej2-react-navigations"
// import * as dataSource from "../datasource.json"
import {
    getFirestore, collection, getDocs, doc, updateDoc,
    addDoc , query , where , orderBy, serverTimestamp, onSnapshot , deleteDoc
} from 'firebase/firestore';
import { db } from "../firebase/clientApp";
import { useEffect } from "react";
import { data } from "jquery";
import { L10n , setCulture , loadCldr , Ajax  } from '@syncfusion/ej2-base';


const SchedulerCal = ({ dateType ,setDatetoInfo }) => {
    const colRef = collection(db, 'fireScheduler');
    const q = query(colRef)
    let vdata = {}
    const [dateTypeView,setDateTypeView] = useState('Month')
    const dateTypeViewer= ( arg )=>{
        setDateTypeView(arg)
        // console.log(arg + 'yesssss')
    }
    
    // loadCldr(
    // require('cldr-data/supplemental/numberingSystems.json'),
    // require('cldr-data/main/fr-CH/ca-gregorian.json'),
    // require('cldr-data/main/fr-CH/numbers.json'),
    // require('cldr-data/main/fr-CH/timeZoneNames.json')
    // );

    // L10n.load(JSON.parse({
    //     "el-GR": {
    //         "schedule": {
    //             "day": "Day",
    //             "week": "Week",
    //             "workWeek": "Work Week",
    //             "month": "Month",
    //             "agenda": "Agenda",
    //             "weekAgenda": "Week Agenda",
    //             "workWeekAgenda": "Work Week Agenda",
    //             "monthAgenda": "Month Agenda",
    //             "today": "Today",
    //             "noEvents": "No events",
    //             "emptyContainer": "There are no events scheduled on this day.",
    //             "allDay": "All day",
    //             "start": "Start",
    //             "end": "End",
    //             "more": "more",
    //             "close": "Close",
    //             "cancel": "Cancel",
    //             "noTitle": "(No Title)",
    //             "delete": "Delete",
    //             "deleteEvent": "Delete Event",
    //             "deleteMultipleEvent": "Delete Multiple Events",
    //             "selectedItems": "Items selected",
    //             "deleteSeries": "Delete Series",
    //             "edit": "Edit",
    //             "editSeries": "Edit Series",
    //             "editEvent": "Edit Event",
    //             "createEvent": "Create",
    //             "subject": "Subject",
    //             "addTitle": "Add title",
    //             "moreDetails": "More Details",
    //             "save": "Save",
    //             "editContent": "Do you want to edit only this event or entire series?",
    //             "deleteRecurrenceContent": "Do you want to delete only this event or entire series?",
    //             "deleteContent": "Are you sure you want to delete this event?",
    //             "deleteMultipleContent": "Are you sure you want to delete the selected events?",
    //             "newEvent": "New Event",
    //             "title": "Title",
    //             "location": "Location",
    //             "description": "Description",
    //             "timezone": "Timezone",
    //             "startTimezone": "Start Timezone",
    //             "endTimezone": "End Timezone",
    //             "repeat": "Repeat",
    //             "saveButton": "Save",
    //             "cancelButton": "Cancel",
    //             "deleteButton": "Delete",
    //             "recurrence": "Recurrence",
    //             "wrongPattern": "The recurrence pattern is not valid.",
    //             "seriesChangeAlert": "The changes made to specific instances of this series will be cancelled and those events will match the series again.",
    //             "createError": "The duration of the event must be shorter than how frequently it occurs. Shorten the duration, or change the recurrence pattern in the recurrence event editor.",
    //             "recurrenceDateValidation": "Some months have fewer than the selected date. For these months, the occurrence will fall on the last date of the month.",
    //             "sameDayAlert": "Two occurrences of the same event cannot occur on the same day.",
    //             "editRecurrence": "Edit Recurrence",
    //             "repeats": "Repeats",
    //             "alert": "Alert",
    //             "startEndError": "The selected end date occurs before the start date.",
    //             "invalidDateError": "The entered date value is invalid.",
    //             "ok": "Ok",
    //             "occurrence": "Occurrence",
    //             "series": "Series",
    //             "previous": "Previous",
    //             "next": "Next",
    //             "timelineDay": "Timeline Day",
    //             "timelineWeek": "Timeline Week",
    //             "timelineWorkWeek": "Timeline Work Week",
    //             "timelineMonth": "Timeline Month",
    //             "expandAllDaySection": "Expand",
    //             "collapseAllDaySection": "Collapse"
    //         },
    //         "recurrenceeditor": {
    //             "none": "None",
    //             "daily": "Daily",
    //             "weekly": "Weekly",
    //             "monthly": "Monthly",
    //             "month": "Month",
    //             "yearly": "Yearly",
    //             "never": "Never",
    //             "until": "Until",
    //             "count": "Count",
    //             "first": "First",
    //             "second": "Second",
    //             "third": "Third",
    //             "fourth": "Fourth",
    //             "last": "Last",
    //             "repeat": "Repeat",
    //             "repeatEvery": "Repeat Every",
    //             "on": "Repeat On",
    //             "end": "End",
    //             "onDay": "Day",
    //             "days": "Day(s)",
    //             "weeks": "Week(s)",
    //             "months": "Month(s)",
    //             "years": "Year(s)",
    //             "every": "every",
    //             "summaryTimes": "time(s)",
    //             "summaryOn": "on",
    //             "summaryUntil": "until",
    //             "summaryRepeat": "Repeats",
    //             "summaryDay": "day(s)",
    //             "summaryWeek": "week(s)",
    //             "summaryMonth": "month(s)",
    //             "summaryYear": "year(s)"
    //         }
    //     }
    //     }));
    //     setCulture('el');
    const [testState,setTest] = useState({

        dataSource:[
            
           
    
    ]

    
    })
    let um = new Date(2022,1,11,8,40)
    //console.log(um + 'ss')
    const ldata = useRef({

        dataSource:[
            
            {
            EndTime: um,
            StartTime: new Date(2022,1,11,4,0)

        },
        
            {
            EndTime: new Date(2022,1,15,6,30),
            StartTime: new Date(2022,1,15,4,0),
            Subject:'mplamplammm'
        }
    
    ]

    
    })
   // console.log(ldata.current )
   // console.log('ldata.current' )
    // const [localData,setlocalData] = useState( {

    //     dataSource:[
            
    //         {
    //         EndTime: new Date(2022,1,11,6,30),
    //         StartTime: new Date(2022,1,11,4,0)

    //     },
        
    //         {
    //         EndTime: new Date(2022,1,15,6,30),
    //         StartTime: new Date(2022,1,15,4,0),
    //         Subject:'mplamplammm'
    //     }
    
    // ]

    
    // })

    //dateType.current = dateTypeViewer
    // useEffect(()=>{
         
      
    // })
    
    // let localData = {

    //     dataSource:[
            
    //         {
    //         EndTime: new Date(2022,1,11,6,30),
    //         StartTime: new Date(2022,1,11,4,0)

    //     },
        
    //         {
    //         EndTime: new Date(2022,1,15,6,30),
    //         StartTime: new Date(2022,1,15,4,0),
    //         Subject:'mplamplammm'
    //     }
    
    // ]

    
    // }
    // useEffect(()=>{
    //     console.log("check")
    // },[localData])



    onSnapshot(q,(snapshot)=>{
        ldata.current.dataSource = []
        snapshot.docs.forEach((doc)=>{
            
            // localData.dataSource.push( {
            //     EndTime: doc.data().EndTime,
            //     StartTime:  doc.data().StartTime,
            //     Subject:doc.data().Subject
    
            // })
            ldata.current.dataSource.push( {
                EndTime: doc.data().EndTime.toDate(),
                StartTime:  doc.data().StartTime.toDate(),
                Subject:doc.data().Subject,
                isAllDay: doc.data().IsAllDay,
                Description: doc.data().Description,
                RecurrenceRule :doc.data().RecurrenceRule,
                id:doc.id
            })
            //console.log(doc.id + ' dsf')
           
            
            
            // setlocalData([...localData.dataSource , {
                
            //         StartTime: doc.data().StartTime ,
            // EndTime: doc.data().EndTime,
            // Subject: doc.data().Subject,
            // isAllDay: doc.data().IsAllDay,
            // Description: doc.data().Description,
        
                
            // }])
        })
     //ldata.current =   { dataSource: ldata.current}
        //setlocalData(localData.dataSource)
        //console.log(ldata.current)
        setTest(ldata.current)
         
    })
    
    // useEffect(()=>{
    //     console.log('ldata.current')
    //     vdata = ldata.current
    //    setTest[ldata.current]
    // })


    // getDocs(q).then((snap)=>{
    //     snap.docs.forEach((doc)=>{
          
    //         localData.dataSource.push( {
    //             EndTime: doc.data().EndTime,
    //             StartTime:  doc.data().StartTime,
    //             Subject:doc.data().Subject
    
    //         })
           
            
            
    //         // setlocalData([...localData.dataSource , {
                
    //         //         StartTime: doc.data().StartTime ,
    //         // EndTime: doc.data().EndTime,
    //         // Subject: doc.data().Subject,
    //         // isAllDay: doc.data().IsAllDay,
    //         // Description: doc.data().Description,
        
                
    //         // }])
    //     })
        
    //     //setlocalData(localData.dataSource)
    // })
    
    //console.log(localData.dataSource)

  
    // const editoeWIndowTemplate = (e)=>{
    //     // console.log(e)
    //   return(  <>
    //     <p>afa</p>
    //     <p>affafa</p>
        
        
    //     </>)

    // }
    // const addAppointment = () =>{
    //     // console.log(localData.dataSource)
    //     setlocalData(localData.dataSource[EndTime]= new Date(2022,1,13,6,30))
    //     setlocalData(localData.dataSource[StartTime]= new Date(2022,1,13,4,30))
    // }
    // const nameRef = useRef();
    // const messageRef = useRef();

 


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
                setTest({})
              
            })

        } else if( e.requestType == 'eventRemoved'){
            
            const docRef = doc(db , "fireScheduler" , e.deletedRecords[0].id)
         
                //console.log(testState.dataSource)
                deleteDoc(docRef).then((cred)=>{
                   // alert('Διαγράφηκε')
                   setTest({})
                    testState.dataSource.forEach((cb , index)=>{
                        
                        // console.log(e.deletedRecords[0].id)
                        // if(cb.id == e.deletedRecords[0].id){
                        //     console.log(cb.id)
                        //     setTest(
                        //     testState.dataSource.splice(index,1))
                        // }
                    })
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
                        Description: e.changedRecords[0].Description ? e.changedRecords[0].Description: '',
                        RecurrenceException : e.addedRecords[0].RecurrenceException,
                        
                        RecurrenceRule : e.changedRecords[0].RecurrenceRule
                    }).then(() => {
                        setTest({})
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
                    setTest({})
                })
            }
            
        }
        
      
    }
    // const test = ()=>{
    //     setDateTypeView('Week')
    // }

    const onEventRendered =(args) => {
        applyCategoryColor(args,dateTypeView);
    }
    const applyCategoryColor =(args, currentView) => {
        //args.element.style.backgroundColor = 'green';
       // console.log(args.element)
        let categoryColor = args.data.CategoryColor;
        if (!args.element || !categoryColor) {
            return;
        }
        if (currentView === 'Month') {
            args.element.firstChild.style.borderLeftColor = 'green';
        }
        else {
            args.element.style.backgroundColor = 'green';
        }
    }

    const onPopupOpen = (args) => {
        
    }
    return ( <>
        {/* <button onClick={()=>{ setTest(  { dataSource: [{
            EndTime: new Date(2022,1,19,6,30),
            StartTime: new Date(2022,1,19,4,0)

        }]}) }} >ssfs</button> */}
 {/* const template(props) {
        return (<div className="tooltip-wrap">
  <div className="content-area"><div className="name">{props.Subject}</div>
  {(props.City !== null && props.City !== undefined) ? <div className="city">{props.City}</div> : ''}
 <div className="time">From :{props.StartTime.toLocaleString()}</div>
 <div className="time">To  :{props.EndTime.toLocaleString()}</div></div></div>);
    } */}

        <ScheduleComponent  cellClick={(e)=>{setDatetoInfo.current([testState,e])}} timeFormat popupOpen={(e)=>{onPopupOpen(e)}} currentView={dateType} popupClose={(e)=>{}} actionComplete={updateAppointmentsToFirebase} enableAdaptiveUI ={true}  actionBegin={()=>{}}  showHeaderBar={true} height={'75vh'} width={'100%'} eventSettings={testState}    >
                
        {/* <HeaderRowsDirective>
          <HeaderRowDirective option="Yearrrr" />
          <HeaderRowDirective option="Month" />
          <HeaderRowDirective option="Week" />
          <HeaderRowDirective option="Date" />
          <HeaderRowDirective option="Hour" />
        </HeaderRowsDirective> */}
            <Inject services={[Day,Week ,Month, WorkWeek ]} />
            {/* <ViewsDirective>
                <ViewDirective option="Day" startHour="06:00" endHour="23:00" displayName="Μέρα"></ViewDirective>
                <ViewDirective option="Week" showWeekend={true} displayName="Εβδομάδα"></ViewDirective>
                <ViewDirective option="Month" showWeekend={false} displayName="Μήνας"></ViewDirective>
                <ViewDirective option="WorkWeek"></ViewDirective>
            </ViewsDirective> */}
            


        </ScheduleComponent>
    
    
    </> );
}
 
export default SchedulerCal;


























// import {  ViewState } from '@devexpress/dx-react-scheduler';
// import styles from '../styles/scheduler.module.css';
// import {
//     Scheduler,
//     MonthView,
//     Appointments,
//     Toolbar,
//     ViewSwitcher,
//     WeekView,
//     DayView,
//     DateNavigator,
//     AppointmentTooltip,
//     AppointmentForm,
// } from '@devexpress/dx-react-scheduler-material-ui';
// import { useState , useEffect } from "react";



// const SchedulerCal = ({ dateType }) => {

//     const [appointments, useAppointments] = useState([
//         {
//             title: 'Website Re-Design Plan',
//             startDate: new Date(2018, 6, 23, 9, 30),
//             endDate: new Date(2018, 6, 23, 11, 30),
//         }, {
//             title: 'Book Flights to San Fran for Sales Trip',
//             startDate: new Date(2018, 6, 23, 12, 0),
//             endDate: new Date(2018, 6, 23, 13, 0),
//         }, {
//             title: 'Install New Router in Dev Room',
//             startDate: new Date(2018, 6, 23, 14, 30),
//             endDate: new Date(2018, 6, 23, 15, 30),
//         }, {
//             title: 'Approve Personal Computer Upgrade Plan',
//             startDate: new Date(2018, 6, 24, 10, 0),
//             endDate: new Date(2018, 6, 24, 11, 0),
//         }, {
//             title: 'Final Budget Review',
//             startDate: new Date(2018, 6, 24, 12, 0),
//             endDate: new Date(2018, 6, 24, 13, 35),
//         }, {
//             title: 'New Brochures',
//             startDate: new Date(2018, 6, 24, 14, 30),
//             endDate: new Date(2018, 6, 24, 15, 45),
//         }, {
//             title: 'Install New Database',
//             startDate: new Date(2018, 6, 25, 9, 45),
//             endDate: new Date(2018, 6, 25, 11, 15),
//         }, {
//             title: 'Approve New Online Marketing Strategy',
//             startDate: new Date(2018, 6, 25, 12, 0),
//             endDate: new Date(2018, 6, 25, 14, 0),
//         }, {
//             title: 'Upgrade Personal Computers',
//             startDate: new Date(2018, 6, 25, 15, 15),
//             endDate: new Date(2018, 6, 25, 16, 30),
//         }, {
//             title: 'Customer Workshop',
//             startDate: new Date(2018, 6, 26, 11, 0),
//             endDate: new Date(2018, 6, 26, 12, 0),
//         }, {
//             title: 'Prepare 2015 Marketing Plan',
//             startDate: new Date(2018, 6, 26, 11, 0),
//             endDate: new Date(2018, 6, 26, 13, 30),
//         }, {
//             title: 'Brochure Design Review',
//             startDate: new Date(2018, 6, 26, 14, 0),
//             endDate: new Date(2018, 6, 26, 15, 30),
//         }, {
//             title: 'Create Icons for Website',
//             startDate: new Date(2018, 6, 27, 10, 0),
//             endDate: new Date(2018, 6, 27, 11, 30),
//         }, {
//             title: 'Upgrade Server Hardware',
//             startDate: new Date(2018, 6, 27, 14, 30),
//             endDate: new Date(2018, 6, 27, 16, 0),
//         }, {
//             title: 'Submit New Website Design',
//             startDate: new Date(2018, 6, 27, 16, 30),
//             endDate: new Date(2018, 6, 27, 18, 0),
//         }, {
//             title: 'Launch New Website',
//             startDate: new Date(2018, 6, 26, 12, 20),
//             endDate: new Date(2018, 6, 26, 14, 0),
//         }, {
//             title: 'Website Re-Design Plan',
//             startDate: new Date(2018, 6, 16, 9, 30),
//             endDate: new Date(2018, 6, 16, 15, 30),
//         }, {
//             title: 'Book Flights to San Fran for Sales Trip',
//             startDate: new Date(2018, 6, 16, 12, 0),
//             endDate: new Date(2018, 6, 16, 13, 0),
//         }, {
//             title: 'Install New Database',
//             startDate: new Date(2018, 6, 17, 15, 45),
//             endDate: new Date(2018, 6, 18, 12, 15),
//         }, {
//             title: 'Approve New Online Marketing Strategy',
//             startDate: new Date(2018, 6, 18, 12, 35),
//             endDate: new Date(2018, 6, 18, 14, 15),
//         }, {
//             title: 'Upgrade Personal Computers',
//             startDate: new Date(2018, 6, 19, 15, 15),
//             endDate: new Date(2018, 6, 20, 20, 30),
//         }, {
//             title: 'Prepare 2015 Marketing Plan',
//             startDate: new Date(2018, 6, 20, 20, 0),
//             endDate: new Date(2018, 6, 20, 13, 30),
//         }, {
//             title: 'Brochure Design Review',
//             startDate: new Date(2018, 6, 20, 14, 10),
//             endDate: new Date(2018, 6, 20, 15, 30),
//         }, {
//             title: 'Vacation',
//             startDate: new Date(2018, 5, 22),
//             endDate: new Date(2018, 6, 1),
//         }, {
//             title: 'Vacation',
//             startDate: new Date(2018, 6, 28),
//             endDate: new Date(2018, 7, 7),
//         },
//     ])

//     const [currentDate, setcurrentDate] = useState('2018-07-17')
//     const [ Dtype,setDtype] = useState()
 
//    useEffect(()=>{
//         setDtype(dateType)
//    },[dateType])
    

//     return (

//         <div className={ styles.container}>
            
//             <Scheduler
//                 data={appointments}
//                 locale={'el-GR'}
//                 id={'sxedio'}
//                 leftBoundary = {3000}
                
//             >
//                 {/* <Toolbar /> */}

//                 <ViewState
//                     currentDate={currentDate}
//                     currentViewName={Dtype}
//                     // onCurrentViewNameChange={varia}
//                 />
                

//                 <MonthView />
//                 <DayView
//                     startDayHour={9}
//                     endDayHour={18}
//                 />
//                 <WeekView
//                     startDayHour={10}
//                     endDayHour={19}
//                 />
                
//                 <Appointments  />
//                 <AppointmentTooltip
//                     showCloseButton
//                     showOpenButton
                    
//                 />
//                 {/* <AppointmentForm
//                     readOnly
//                 /> */}
//                 {/* <DateNavigator /> */}
//             </Scheduler>

//         </div>
//     );
// }

// export default SchedulerCal;