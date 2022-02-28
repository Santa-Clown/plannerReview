import styles from '../styles/singleNote.module.css'
import NoteScheduler from './singleNoteSchedule';
import NoteInfo from './singleNoteInfo';
import { useState, useEffect } from 'react';


const SingleNote = ({ ChildFunction, ShowSingleObj , setDatetoInfo ,ShowSingleOnMobile }) => {

    const [singleNoteObj, setsingleNoteObj] = useState(ShowSingleObj)
    const [animation,setAnimation] = useState(0)
    const [showSingleOnMobile,setshowSingleOnMobile] = useState(false)
    const [singleDateInfo,setSingleDateInfo] = useState([{},{ StartTime : new Date()}])

    // useEffect(() => {
    //     setsingleNoteObj(ShowSingleObj)
    //     //  console.log(ShowSingleObj)
    // }, [ShowSingleObj])




    useEffect(() => {
        ChildFunction.current = viewer
        setDatetoInfo.current = setInfo
       
    })

   

    const setInfo =  (arg)=>{
        //console.log(arg)
        setSingleDateInfo(arg)
    }

    const [placer, setPlacer] = useState('show')

    const viewer = (view) => {

        if (view == 'show') {
            setPlacer(
                'show'
            )
        } else if (view == 'calendar') {
             setPlacer('calendar')
        }
    }




    return (
        <>
            <div style={{display:ShowSingleOnMobile ? 'flex' : 'none' }} animation={animation} className={styles.container} >
                
                { placer == 'show' ?  <NoteInfo singleObg={ShowSingleObj} /> : null }
                { placer == 'calendar' ? <NoteScheduler SetDatetoInfo={singleDateInfo} ></NoteScheduler> : null }
                {/* <NoteInfo singleObg={ShowSingleObj} /> */}

            </div>
        </>
    );
}

export default SingleNote;