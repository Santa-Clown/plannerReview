import {
    getFirestore, collection, getDocs,
    addDoc
} from 'firebase/firestore';
import { useEffect, useState, useRef } from 'react';
import styles from '../styles/ShowNotes.module.css';
import Note from './note';



const ShowNotes = () => {


    const [ar, setar] = useState([]);
    //---------------------------------------------------------Hooks----------------------------------------------
    //---------------------------------------------------------Hooks----------------------------------------------

    useEffect(() => {

        const db = getFirestore()

        const colRef = collection(db, 'plans');



        getDocs(colRef)
            .then((snapshot) => {


                snapshot.docs.forEach((doc) => {


                    setar(ar => [...ar, {
                        ...doc.data(),
                        name: doc.data().name,
                        message: doc.data().message,
                        id: doc.id,



                    }])
                    // ar.push({
                    //     ...doc.data(),
                    //     name: doc.data().name,
                    //     message: doc.data().message,



                    // })
                })
                //setNotes(  ar  )
                

                //$('#allNotes').append( ` <p>dosdos</p> ` )
                // ar.forEach(el => {
                //     allmynotes.current.append(el.name + "     ")

                // })


            })
    }, []

    );
    //const allmynotes = useRef();
    //const [notes, setNotes] = useState(['23', 'yor']);






    return (
        <div className={styles.container}>
            <div className={styles.notes} >
                {ar.map(note => (
                    <Note id= {note.id} name={note.name}  />
                    ))}
            </div>
            {/* <div ref={allmynotes} id='allNotes' ></div> */}



        </div>
    );
}

export default ShowNotes;