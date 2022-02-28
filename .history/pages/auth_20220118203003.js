import React from "react";
import  StyledFirebaseAuth  from "react-firebaseui/StyledFirebaseAuth";
import firebase from "../firebase/clientApp";




const uiConfig = {
    signInSuccessUrl: "/",
    signInOptions: [firebase.auth.GithubAuthProvider.PROVIDER_ID],
};


function SignInScreen() {
    return (
        <div>



            <h1>Logen</h1>
            <p></p>







        </div>





    )
}