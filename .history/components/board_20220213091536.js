import styles from '../styles/board.module.css'
import AddNote from './AddNote';
import ShowNotes from './ShowNotes';
import { useEffect, useState, useRef } from 'react';
import Nav from './nav';
import { getAuth } from 'firebase/auth';
import SignUp from './signup';
import SideNav from './sideNav';
import SingleNote, { viewer } from './singleNote';
import Scheduler from './scheduler';
import SchedulerCal from './scheduler';
import Sign_Out from './signOut';
import { query ,onSnapshot , docs ,where, queryEqual, doc  } from 'firebase/firestore';
import { getDoc } from 'firebase/firestore';
import { colRefUser, db } from '../firebase/clientApp';






const Board = ({ admEmail, s_out }) => {

  const [ar, setar] = useState([]);
  const ChildFunc = useRef();
  const schedularChildFunc = useRef();
  const [searchWord,setWord] = useState('');

  const search = (arg)=>{
    setWord(arg)
  }

  const showAll = ()=>{
    setWord('')
  }


  const [showSingleObj, setshowSingleObj] = useState({})


  const showSingle = (arg) => {

    setshowSingleObj(arg)
  }

  useEffect(()=>{

  },[searchWord])


  const [test, setTest] = useState('show');
  const [DateTypeV, setDateTypeV] = useState('Day')
  const [navType, setNavType] = useState('show')

  useEffect(() => {
    //console.log(DateTypeV)
    //  schedularChildFunc.current(DateTypeV)

  }, [DateTypeV])
 //, where('name','==','GEORGIOS MELADZE')


  const q = query(colRefUser ,where('email','==',admEmail));
 console.log(q.)
  useEffect(()=>{
     onSnapshot(q, (snapshot) => {
      snapshot.docs.forEach((doc) => {


          setar(ar => [...ar, {
              ...doc.data(),
              id: doc.data().email,

          }])
          //console.log(ar)
      })
  })
  },[admEmail])
 


  const toggle = (info) => {
    if (info == "add") {
      setTest(
        // <AddNote adm={admEmail} />
        "add"

      )
      setNavType('add')
      setWord('')

    }
    if (info == "show") {
      setTest(
        // <ShowNotes Search={searchWord} ShowSingle={showSingle} />
        "show"
      )
      // ChildFunc.current('show')
      setNavType('show')

    }

    if (info == "signUp") {

      setTest(
        // <SignUp />
        "signUp"
      )
      // setTest(
      //   <SchedulerCal dateType={schedularChildFunc} />
      // )
      // ChildFunc.current('calendar')
      setWord('')
    }
    if (info == "calendar") {
      // setTest(
      //   <SchedulerCal dateType={schedularChildFunc} />
      // )
      // ChildFunc.current('calendar')

    }

    setWord('')
  }

  const myfunc = () => {

    schedularChildFunc.current(DateTypeV)
  }


  return (
    <>
      {/* <SignUp /> */}


      <div className={styles.board}>
        <SideNav s_out={s_out} toggler={toggle} />

        <div>
          <Nav showAll= {showAll} searchWord={searchWord} search={search} navField={navType} dateTypeF={setDateTypeV} s_out={s_out} />
          {/* <button onClick={() => { myfunc() }}>xgsdgdfgdg</button> */}
          { test == 'add' ?  <AddNote adm={admEmail} /> : null }
          { test == 'show' ? <ShowNotes adm={admEmail} Search={searchWord} ShowSingle={showSingle} /> : null }
          { test == 'signUp' ?  <SignUp /> :null}

          {/* {test} */}
        </div>
        <div>
          <div className={styles.bluespace}>
            <h3> {admEmail} <Sign_Out s_out={s_out} />
            </h3>
          </div>
          <SingleNote ShowSingleObj={showSingleObj} ChildFunction={ChildFunc} />
        </div>
      </div></>
  );
}

export default Board;