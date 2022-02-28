import {
    getFirestore, collection, getDocs,
    addDoc
} from 'firebase/firestore';
import { useEffect, useState, useRef } from 'react';
import styles from '../styles/ShowNotes.'



const ShowNotes = () => {

    
    const [ ar , setar] = useState([]);
//---------------------------------------------------------Hooks----------------------------------------------
//---------------------------------------------------------Hooks----------------------------------------------

    useEffect(() => {

        const db = getFirestore()

        const colRef = collection(db, 'plans');
        


        getDocs(colRef)
            .then((snapshot) => {


                snapshot.docs.forEach((doc) => {
                    

                    setar( ar => [...ar , {
                        ...doc.data(),
                        name: doc.data().name,
                        message: doc.data().message,
                        id: doc.id,



                    } ])
                    // ar.push({
                    //     ...doc.data(),
                    //     name: doc.data().name,
                    //     message: doc.data().message,



                    // })
                })
                //setNotes(  ar  )
                 console.log(ar)
                
                //$('#allNotes').append( ` <p>dosdos</p> ` )
                // ar.forEach(el => {
                //     allmynotes.current.append(el.name + "     ")
                    
                // })
                

            })
    }, []

    );
    const allmynotes = useRef();
    //const [notes, setNotes] = useState(['23', 'yor']);






    return (
        <>
           <div className='' > { ar.map(note =>( <p key={note.id} > { note.name } </p>  ) ) }</div>
            {/* <div ref={allmynotes} id='allNotes' ></div> */}
            


        </>
    );
}

export default ShowNotes;