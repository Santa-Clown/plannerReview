import firebase from "firebase/app";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection } from "firebase/firestore";
import { getDoc } from "firebase/firestore";
import { doc } from "firebase/firestore";
import {
  getAuth
} from 'firebase/auth'
// import "firebase/auth";
// import "firebase/firestore";

// import {
//     getFirestore  , collection , getDocs
// } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB4M1Vk74QhnMjtcKgtE48RIiTvqueDYgg",
    authDomain: "planner-9025b.firebaseapp.com",
    projectId: "planner-9025b",
    storageBucket: "planner-9025b.appspot.com",
    messagingSenderId: "546951333498",
    appId: "1:546951333498:web:43ec1ddc124bc437e29dc3"
  };

  



  initializeApp(firebaseConfig);

  
  
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
  export const colRefUser = collection(db, 'comment');
  // const docRef = doc(db,'users')

  export default firebase;