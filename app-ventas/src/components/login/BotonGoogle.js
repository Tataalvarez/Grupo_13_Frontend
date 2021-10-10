import React from 'react';
import firebase from 'firebase/compat/app';
import {GoogleAuthProvider} from 'firebase/auth';


function BotonGoogle() {

  const provider = new firebase.auth.GoogleAuthProvider ();

  const signInWithGoogle =()=>{
    
    firebase.auth().signInWithPopup(provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = error.credential
    // ...
  });

      
  }

  return (
    <div className="BotonLogin text-center">
      
      <button type="button" onClick={signInWithGoogle}> </button>

    </div>
      

  );
}

export default BotonGoogle;