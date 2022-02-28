

import { useRef } from "react";
import {    EventSettingsModel,ViewsDirective,ViewDirective, Inject 
, Today ,ScheduleComponent, Day , Week ,Month, WorkWeek,HeaderRowDirective,
    HeaderRowsDirective} from "@syncfusion/ej2-react-schedule"
import { DataManager , WebApiAdaptor } from "@syncfusion/ej2-data";
import { useState } from "react";
// import ToolBarComponent from "@syncfusion/ej2-react-navigations"
// import * as dataSource from "../datasource.json"
import {
    getFirestore, collection, getDocs,
    addDoc , query , where , orderBy, serverTimestamp, onSnapshot
} from 'firebase/firestore';
import { db } from "../firebase/clientApp";
import { useEffect } from "react";

const SchedulerCal = ({ dateType }) => {
    const colRef = collection(db, 'fireScheduler');
    const q = query(colRef)

    const [dateTypeView,setDateTypeView] = useState('Month')
    const dateTypeViewer= ( arg )=>{
       // setDateTypeView(arg)
        // console.log(arg + 'yesssss')
    }

    useEffect(()=>{
         
        dateType.current = dateTypeViewer
    })
    
    onSnapshot(q,(snapshot)=>{
        snapshot.docs.forEach((doc)=>{
            console.log(doc.data())
            setlocalData([...localData.datas , {
                
                    StartTime: doc.data().StartTime ,
            EndTime: doc.data().EndTime,
            Subject: doc.data().Subject,
            isAllDay: doc.data().IsAllDay,
            Description: doc.data().Description,
        
                
            }])
        })

    })
    


    const [localData,setlocalData] = useState( {

        dataSource:[
            
            {
            EndTime: new Date(2022,1,11,6,30),
            StartTime: new Date(2022,1,11,4,0)

        },
        
            {
            EndTime: new Date(2022,1,15,6,30),
            StartTime: new Date(2022,1,15,4,0),
            Subject:'mplamplammm'
        }
    
    ]


    })

    // const editoeWIndowTemplate = (e)=>{
    //     // console.log(e)
    //   return(  <>
    //     <p>afa</p>
    //     <p>affafa</p>
        
        
    //     </>)

    // }
    const addAppointment = () =>{
        // console.log(localData.dataSource)
        setlocalData(localData.dataSource[EndTime]= new Date(2022,1,13,6,30))
        setlocalData(localData.dataSource[StartTime]= new Date(2022,1,13,4,30))
    }
    // const nameRef = useRef();
    // const messageRef = useRef();

 


    const updateAppointmentsToFirebase = (e)=>{

        // console.log(e.addedRecords[0])
        addDoc(colRef, {
            StartTime: e.addedRecords[0].StartTime ,
            EndTime: e.addedRecords[0].EndTime,
            Subject: e.addedRecords[0].Subject,
            isAllDay: e.addedRecords[0].IsAllDay,
            Description: e.addedRecords[0].Description,
        }).then(() => {

            alert('done')
        })
    }
    const test = ()=>{
        setDateTypeView('Week')
    }
    
    return ( <>
        {/* <button onClick={()=>{ test() }} >ssfs</button> */}
        <ScheduleComponent   currentView={dateTypeView} popupClose={(e)=>{}}  actionComplete={(e)=>{updateAppointmentsToFirebase(e)}} actionBegin={()=>{}} showHeaderBar={false} height={'70vh'} width={'75vw'} eventSettings={localData} >
                
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