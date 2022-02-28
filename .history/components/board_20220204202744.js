import styles from '../styles/board.module.css'
import AddNote from './AddNote';
import ShowNotes from './ShowNotes';
import { useEffect, useState } from 'react';
import Nav from './nav';
import { getAuth } from 'firebase/auth';
import SignUp from './signup';
import SideNav from './sideNav';
import SingleNote from './singleNote';
import Scheduler from './scheduler';
import SchedulerCal from './scheduler';



const Board = ({ s_out }) => {

 


  


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
        <SchedulerCal  dateType ={DateTypeV}  />
      )
    }

  }

 
  const [test, setTest] = useState(<ShowNotes  />);
  const [DateTypeV, setDateTypeV]= useState('Month')


  useEffect(()=)
  return (
    <>
      {/* <SignUp /> */}
      

      <div className={styles.board}>
        <SideNav s_out={s_out} toggler={toggle} />
        <div>
        <Nav dateTypeF={setDateTypeV} s_out={s_out} />
            
          {test}</div>
        <div>
          <div className={styles.bluespace}></div>
          <SingleNote />
          </div>
      </div></>
  );
}

export default Board;