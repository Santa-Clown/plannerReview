import '../styles/globals.css'
import firebase from '../firebase/clientApp'
import { useEffect } from 'react'
import { getMessaging, onMessage } from "firebase/messaging";





function MyApp({ Component, pageProps }) {

  // useEffect(()=>{
  //   const msg = getMessaging();
  //   msg.requestPermission().then(()=>{
  //     return msg.getToken();
  //   }).then((data)=>{
  //     console.warn('token',data)
  //   })
  // })
  // useEffect(()=>{
  //   const messaging = firebase.messaging()
  //   messaging.requestPermission().then(()=>{
  //     return messaging.getToken()
  //   }).then((token)=>{
  //     console.log(token)
  //   })
  // })
  return <Component {...pageProps} />
}

export default MyApp
