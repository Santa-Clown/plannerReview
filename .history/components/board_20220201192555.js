import styles from '../styles/board.module.css'
import AddNote from './AddNote';
import ShowNotes from './ShowNotes';
import { useEffect, useState } from 'react';
import Nav from './nav';
import { getAuth } from 'firebase/auth';
import SignUp from './signup';
import SideNav from './sideNav';
import SingleNote from './singleNote';



const Board = ({ s_out }) => {

  const [test, setTest] = useState(false);



  const toggle = (info) => {
    if (info == "add") {
      setTest(
        true
      )
    }
    if (info == "show") {
      setTest(
        false
      )
    }

  }



  return (
    <>
      {/* <SignUp /> */}
      

      <div className={styles.board}>
        <SideNav />
        <div>
        <Nav s_out={s_out} toggler={toggle} />
          {test ? <AddNote /> : <ShowNotes />}</div>
        <SingleNote />
      </div></>
  );
}

export default Board;