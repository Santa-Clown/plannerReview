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

  const [test, setTest] = useState(<ShowNotes  />);



  const toggle = (info) => {
    if (info == "add") {
      setTest(
        <AddNote />
      )
    }
    if (info == "show") {
      setTest(
        <ShowNotes  />
      )
    }
    if (info == "calendar") {
      setTest(
        <ShowNotes  />
      )
    }

  }



  return (
    <>
      {/* <SignUp /> */}
      

      <div className={styles.board}>
        <SideNav s_out={s_out} toggler={toggle} />
        <div>
        <Nav s_out={s_out} />
            
          {test}</div>
        <div>
          <div className={styles.bluespace}></div>
          <SingleNote />
          </div>
      </div></>
  );
}

export default Board;