import React from 'react'
//Auth
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
function Login() {
  return (
    <GoogleOAuthProvider clientId="377509215492-6qfh0l50l1cae9snbquq1tepv6to8fs3.apps.googleusercontent.com">
            <GoogleLogin
      onSuccess={credentialResponse => {
        console.log(credentialResponse);
      }}
      onError={() => {
        console.log('Login Failed');
      }}
    />
    </GoogleOAuthProvider>
  )
}

export default Login