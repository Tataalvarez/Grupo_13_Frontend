import React from "react";
import ReactDOM from "react-dom";
//import './index.css';
import { Routs } from "./routes/Routs";

import "./firebase";
import "bootswatch/dist/lumen/bootstrap.min.css";

ReactDOM.render(
  <React.StrictMode>
    <Routs />
  </React.StrictMode>,
  document.getElementById("root")
);
