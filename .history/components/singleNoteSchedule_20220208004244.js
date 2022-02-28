// import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns'
// import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars';
// import styles from "../styles/SingleNoteScheduler.module.css"
// const NoteScheduler = (props) => {
//     return (
//         <div className={styles.tbodyClass}>

//             <div>
//                 <div> New Event</div>


//             </div>
//             <div>
//                 <div><input type="text" /></div>
//                 <div> <input name='Subject' type="text" /> </div>
//             </div>
//             <div>
//                 <div className='e-textlabel'>Status</div>
//                 <div>
//                     <DropDownListComponent id='EventType' dataSource={['New', 'Requested', 'Confirmed']}
//                         placeholder="Choose Bitch" className='e-field ' className={styles.tbodychild} data-name='EventType' value={props.EventType || null} >

//                     </DropDownListComponent>
//                 </div>
//             </div>
//             <div>
//                 <div style={{ width: '5vw' }}>
//                     <DateTimePickerComponent style={{ width: '5vw' }} placeholder='Start' className='e-field' id='StartTime' data-name='StartTime'
//                         value={new Date(props.startTime || props.StartTime)} format='dd/MM/yy hh:mm a'
//                     ></DateTimePickerComponent>
//                 </div>

//             </div>
//             <div>
//                 <div style={{ width: '5vw' }}><DateTimePickerComponent placeholder='End' style={{ width: '5vw' }} className='e-field' id='EndTime' data-name='EndTime'
//                     value={new Date(props.endTime || props.EndTime)} format='dd/MM/yy hh:mm a'
//                 ></DateTimePickerComponent>
//                 </div>
//             </div>
//             <div>
//                 <div>
//                     <textarea className='e-field' name="Description" id="Description" cols="50" rows="3"></textarea>
//                 </div>
//             </div>






//         </div>);
// }

// export default NoteScheduler;