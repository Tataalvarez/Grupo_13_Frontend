import React, {useState, useEffect} from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';


function BotonGoogle() {

  const provider = new firebase.auth.GoogleAuthProvider ();
  
  const [user,setUser]=useState(null);

  useEffect(() =>{
    firebase.auth().onAuthStateChanged((user)=>{
      if(user){
        setUser(user.email)
        console.log("estas logueado")
      } else {
        console.log("no logueado")

      }
     
    })
  },[])
    

  const signInWithGoogle = () => {
    firebase.auth().signInWithPopup(provider)
    .then((result) => {
      console.log("estoy logeado con google")
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const credential = error.credential
      console.log(`error en login errorCode:${errorCode}, msg:${errorMessage}`)
    });
  }
    
  

  return (
    <div className="BotonLogin text-center">
      
      <button type="button" onClick={signInWithGoogle}> </button>

    </div>
      

  );
}

export default BotonGoogle;