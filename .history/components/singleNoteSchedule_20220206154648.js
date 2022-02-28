import {DropDownListComponent} from '@syncfusion/ej2-react-dropdowns' 
 import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars';
 
 const NoteScheduler = (props) => {
    return (
    <tbody>

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
                placeholder="Choose Bitch" data-name='EventType' value={props.EventType || null} >

                </DropDownListComponent>
            </td>
        </tr>
        <tr>
            <td>
                <DateTimePickerComponent id='StartTime' data-name='' ></DateTimePickerComponent>
            </td>
            <td><DateTimePickerComponent id='EndTime'></DateTimePickerComponent></td>
        </tr>






    </tbody>);
}

export default NoteScheduler;