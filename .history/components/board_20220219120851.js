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
import { query, onSnapshot, docs, where, queryEqual, doc } from 'firebase/firestore';
import { getDoc } from 'firebase/firestore';
import { colRefUser, db } from '../firebase/clientApp';







const Board = ({ admEmail, s_out }) => {

  const [ar, setar] = useState([]);
  const ChildFunc = useRef();
  const pinned = useRef();

  const schedularChildFunc = useRef();
  const [searchWord, setWord] = useState('');
  const [userName, setUserName] = useState('')
  const [showInfo, setShowInfo] = useState(false)
  let userArray = []
  const search = (arg) => {
    setWord(arg)
  }

  const showAll = () => {
    setWord('')
  }
  const togglePin = (arg) => {
    pinned.current(arg)

  }

  const [showSingleObj, setshowSingleObj] = useState({})


  const showSingle = (arg) => {
    setShowInfo(true)
    setshowSingleObj(arg)
  }

  useEffect(() => {

  }, [searchWord])


  const [test, setTest] = useState('show');
  const [DateTypeV, setDateTypeV] = useState('Day')
  const [navType, setNavType] = useState('show')


  //, where('name','==','GEORGIOS MELADZE')

  const q = query(colRefUser, where('email', '==', admEmail));
  onSnapshot(q, (snapshot) => {
    snapshot.docs.forEach((doc) => {
      userArray.push(doc.data().name)



    })
    userArray.forEach(ar => setUserName(ar))
  })


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
      setShowInfo(false)

    }
    

    if (info == "signUp") {

      setTest(
        // <SignUp />
        "signUp"
      )
      setShowInfo(false)

      setNavType('signUp')
      // setTest(
      //   <SchedulerCal dateType={schedularChildFunc} />
      // )
      // ChildFunc.current('calendar')
      setWord('')
    }
    if (info == "calendar") {
      setTest(
        ''
      )
      ChildFunc.current('calendar')

    }
    setShowInfo(false)
    setWord('')
  }

  const myfunc = () => {

    schedularChildFunc.current(DateTypeV)
  }
  console.log('board')

  return (
    <>
      {/* <SignUp /> */}


      <div className={styles.board}>
        <SideNav s_out={s_out} toggler={toggle} />

        <div>
          <Nav showAll={showAll} toggler={toggle} searchWord={searchWord} search={search} navField={navType} dateTypeF={setDateTypeV} s_out={s_out} togglePin={togglePin} />
          {/* <button onClick={() => { myfunc() }}>xgsdgdfgdg</button> */}
          {test == 'add' ? <AddNote adm={admEmail} createrUserName={userName} /> : null}
          {test == 'show' ? <ShowNotes pinned={pinned} userName={userName} adm={admEmail} Search={searchWord} ShowSingle={showSingle} /> : null}
          {test == 'calendar' ? <SchedulerCal dateType={schedularChildFunc} /> : null}
          {test == 'signUp' ? <SignUp /> : null}

          {/* {test} */}
        </div>
        <div className={styles.rightSide} >
          {/* <div className={styles.bluespace}>
            <h3> {userName} <Sign_Out s_out={s_out} />
            </h3>
          </div> */}
          <div className={styles.bluespace}>
            <h3> {userName} <Sign_Out s_out={s_out} />
            </h3>
          </div>
          {/* {test == 'show' ? <div className={styles.bluespace}>
            <h3> {userName} <Sign_Out s_out={s_out} />
            </h3>
          </div> : null} */}
          { window.innerWidth < 1280?( showInfo?  <SingleNote ShowSingleObj={showSingleObj} ChildFunction={ChildFunc} />  : null) : <SingleNote ShowSingleObj={showSingleObj} ChildFunction={ChildFunc} />  }
          {/* {showInfo?  <SingleNote ShowSingleObj={showSingleObj} ChildFunction={ChildFunc} />  : null} */}
          {/* <SingleNote ShowSingleObj={showSingleObj} ChildFunction={ChildFunc} /> */}
          {/* {test == 'show' ? <SingleNote ShowSingleObj={showSingleObj} ChildFunction={ChildFunc} /> : null} */}

        </div>
      </div></>
  );
}

export default Board;