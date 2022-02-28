import {DropDownListComponent} from '@syncfusion/ej2-react-dropdowns' 
 import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars';
 import styles from "../styles/SingleNoteScheduler.module.css"
 const NoteScheduler = (props) => {
    return (
    <tbody className={styles.tbodyClass}>

        <tr>
           <td> New Event</td>
           
            
        </tr>
       <tr>
           <td><input  type="text" /></td>
           <td> <input name='Subject' type="text" /> </td>
       </tr>
        <tr>
            <td className='e-textlabel'>Status</td>
            <td>
                <DropDownListComponent id='EventType' dataSource={['New','Requested','Confirmed']}
                placeholder="Choose Bitch" className='e-field tbodychild' data-name='EventType' value={props.EventType || null} >

                </DropDownListComponent>
            </td>
        </tr>
        <tr>
            <td>
                <DateTimePickerComponent placeholder='Start' className='e-field tbodychild' id='StartTime' data-name='StartTime'
                value={new Date(props.startTime || props.StartTime)} format='dd/MM/yy hh:mm a'
                ></DateTimePickerComponent>
            </td>
            <td><DateTimePickerComponent className='e-field' cleared={} id='EndTime' data-name='EndTime' 
            value={new Date(props.endTime || props.EndTime)} format='dd/MM/yy hh:mm a'
            ></DateTimePickerComponent></td>
        </tr>
        <tr><td>
            <textarea className='e-field' name="Description" id="Description" cols="50" rows="3"></textarea>
            </td></tr>






    </tbody>);
}

export default NoteScheduler;