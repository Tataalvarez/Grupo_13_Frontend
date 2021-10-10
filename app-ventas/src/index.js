import React, { Suspense } from "react";
import ReactDOM from "react-dom";
//import './index.css';
import { App } from "./App";
import { FirebaseAppProvider } from "reactfire";

import firebaseConfig from "./firebase";
import "bootswatch/dist/lumen/bootstrap.min.css";

ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <Suspense fallback={'Conectando la app...'}>
        <App />
      </Suspense>
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
