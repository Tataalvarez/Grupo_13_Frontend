import React from "react";
import BotonGoogle from "./BotonGoogle";
import "./login.css";

function Login() {
  return (
    <div className="contenedor">
      <div className="central">
        <div className="login">
          <div className="titulo">GRUPO 13</div>
          <BotonGoogle />
        </div>
      </div>
    </div>
  );
}

export default Login;
