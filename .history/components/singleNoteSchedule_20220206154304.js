import {DropDownListComponent} from '@syncfusion/ej2-react-dropdowns' 
 import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars';
 
 const NoteScheduler = () => {
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
                <DropDownListComponent id='EventType' dataSource={['New','Requested',]} >

                </DropDownListComponent>
            </td>
        </tr>
        <tr>
            <td></td>
            <td></td>
        </tr>






    </tbody>);
}

export default NoteScheduler;