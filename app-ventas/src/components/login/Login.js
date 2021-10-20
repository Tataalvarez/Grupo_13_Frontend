import React from "react";
import BotonGoogle from "./BotonGoogle";
import "./login.css";

function Login() {
  return (
    <div id="contenedor">
      <div id="central">
        <div id="login">
          <div className="titulo">Bienvenido</div>
          <formgroup>
            <input type="text" name="usuario" placeholder="Usuario" />
          </formgroup>
          <formgroup>
            <input type="password" name="Contraseña" placeholder="Contraseña" />
          </formgroup>

          <button
            className="BotonLogin"
            type="submit"
            title="Ingresar"
            name="Ingresar"
          >
            Login
          </button>

          <BotonGoogle />

          <div className="pie-form">
            <p className="parrafo">¿Olvidaste tu contraseña?</p>
            <p className="parrafo">¿No tienes Cuenta? Registrate</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
