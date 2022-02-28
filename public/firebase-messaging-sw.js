
import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging/sw";


const firebaseApp = initializeApp({
    apiKey: "AIzaSyB4M1Vk74QhnMjtcKgtE48RIiTvqueDYgg",
    authDomain: "planner-9025b.firebaseapp.com",
    projectId: "planner-9025b",
    storageBucket: "planner-9025b.appspot.com",
    messagingSenderId: "546951333498",
    appId: "1:546951333498:web:43ec1ddc124bc437e29dc3"
});

const messaging = getMessaging(firebaseApp);