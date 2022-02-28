import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import firebase from '../firebase/clientApp'
import { useCollection } from "react-firebase-hooks/firestore"
import { useState, useRef } from 'react'
import dynamic from 'next/dynamic';
import 'smart-webcomponents-react/source/styles/smart.default.css';
import AddNote from '../components/AddNote'
import ShowNotes from '../components/ShowNotes'
import Nav from '../components/nav'
import SideNav from '../components/sideNav'
import Board from '../components/board'


export default function Home() {

  const [test, setTest] = useState(false);
  const toggle = () => {
    setTest(
      test ? false : true
    )
  }



  return (
    <>
     
      <div className={styles.mainArea}>
        

        <Board />
      </div>
      
      




    </>
  )
}
