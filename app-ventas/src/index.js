// Modulos
import React from "react";
import ReactDOM from "react-dom";
//import './index.css';
import App from "./App";
import firebase from "firebase/compat/app";
import 'bootstrap/dist/css/bootstrap.min.css';

const firebaseConfig = {
  apiKey: "AIzaSyDt0tkkAaBzQzsVGB_Ib2nDqgRE_vxDaEY",
  authDomain: "appventas-a1e41.firebaseapp.com",
  projectId: "appventas-a1e41",
  storageBucket: "appventas-a1e41.appspot.com",
  messagingSenderId: "101205741629",
  appId: "1:101205741629:web:0e1a80ff93748bfb1fda54",
  measurementId: "G-DYRH54Q261",
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
