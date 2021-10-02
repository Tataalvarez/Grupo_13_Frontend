import React from 'react'
import LoginGoogle from './LoginGoogle'


function Login() {
    return (
        <div id="contenedor">
            <div id="central">
                <div id="login">
                    <div className="titulo">
                        Bienvenido
                    </div>
                    <formgroup>
                        <input
                            type="text"
                            name="usuario" 
                            placeholder="Usuario"
                        />
                    </formgroup>
                    <formgroup>
                        <input
                            type="password"
                            name="Contraseña" 
                            placeholder="Contraseña"
                            
                        />
                    </formgroup>

                    <button id="BotonLogin" type="submit" title="Ingresar" name="Ingresar">Login
                    </button>
                    
                    <div id="Botongoogle"> 
                    <LoginGoogle/> 
                    </div>
                    

                   


                    <div className="pie-form">
                        <p>¿Olvidaste tu contraseña?</p>
                        <p>¿No tienes Cuenta? Registrate</p>
                    </div>
                    
                    
                </div>
            </div>


        </div>

    )
}

export default Login
