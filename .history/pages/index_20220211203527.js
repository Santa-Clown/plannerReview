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
import Sign from '../components/singIn'
import { useEffect ,useRef } from 'react/cjs/react.development'


export default function Home() {
  // useEffect(()=>{

  // })
  const [logged, setLogged] = useState(false)
  const adML = useState


  const changeLogIn = (arg) => {
    adML = arg
    setLogged(true)
   
    
  }
  const changeLogOut = () => {
    setLogged(false)
  }


  return (
    <>
      <Head>


        <link rel="stylesheet" href="https://cdn.syncfusion.com/ej2/material.css" type="text/css" />
      </Head>
      {!logged && <Sign changeLogIn={changeLogIn} changeLogOut={changeLogOut} />}

      <div className={styles.mainArea}>

        {logged && <Board admEmail={adML} s_out={changeLogOut} />}

      </div>






    </>
  )
}
