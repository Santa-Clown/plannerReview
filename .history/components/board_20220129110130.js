import styles from '../styles/board.module.css'
import AddNote from './AddNote';
import ShowNotes from './ShowNotes';
import { useState } from 'react';
import Nav from './nav';


const Board = () => {

    const [test, setTest] = useState(false);
    const toggle = () => {
      setTest(
        test ? false : true
      )
    }



    return ( 
       <></>
     );
}
 
export default Board;