import firebase from "firebase/app";
import { initializeApp , getApps } from "firebase/app";
import { getMessaging , getToken } from "firebase/messaging";
import { getFirestore } from "firebase/firestore";
import { collection } from "firebase/firestore";
import { getDoc } from "firebase/firestore";
import { doc } from "firebase/firestore";
import 'firebase/messaging';
import {
  getAuth
} from 'firebase/auth'
// import "firebase/auth";
// import "firebase/firestore";

// import {
//     getFirestore  , collection , getDocs
// } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyD4FbWumk5_1boMDyfNDEjGDdZKyN-qNng",
  authDomain: "plannerreview.firebaseapp.com",
  projectId: "plannerreview",
  storageBucket: "plannerreview.appspot.com",
  messagingSenderId: "17526379723",
  appId: "1:17526379723:web:77da3423355503d10db74e"
  };
  
  const apps = getApps()
  export const app = !apps.length ? initializeApp(firebaseConfig) : apps[0]



  //initializeApp(firebaseConfig);
  //const messaging = firebase.messaging()

  
  
//   if(!firebase.apps.length){
      
//   } ;
// const db = getFirestore()

// const colRef = collection(db,'plans')

// getDocs(colRef)
// .then((snapshot)=>{
//     console.log(snapshot.docs)
// })

 
  export const db = getFirestore() 
  export const colRefUser = collection(db, 'users');
  export const colRefCommentary = collection(db, 'commentary');
 
  // const docRef = doc(db,'users')

  export default firebase;