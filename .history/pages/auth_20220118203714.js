import React from "react";
import  StyledFirebaseAuth  from "react-firebaseui/StyledFirebaseAuth";
import firebase from "../firebase/clientApp";




const uiConfig = {
    signInSuccessUrl: "/",
    signInOptions: [firebase.auth.GithubAuthProvider.PROVIDER_ID],
};


function SignInScreen() {
    return (
        <div style={
            {
                maxWidth: "320px",
                




            }
        }>

            



            <h1>Logen</h1>
            <p>Please plablla</p>
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth= {firebase.auth()} />







        </div>





    )
}