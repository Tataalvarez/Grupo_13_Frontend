import React from 'react';
import GoogleLogin from 'react-google-login';

function LoginGoogle() {
  const respuestaGoogle=(respuesta)=>{
      console.log(respuesta);
  }

  return (
      <div className="BotonLogin text-center">

          <GoogleLogin
  clientId="77872791370-lsc9uefumnejcvs3lu13flg5g5cn1lc3.apps.googleusercontent.com"
  buttonText="Login"
  onSuccess={respuestaGoogle}
  onFailure={respuestaGoogle}
  cookiePolicy={'single_host_origin'}
  />

    </div>
  );
}

export default LoginGoogle;