import React from 'react'
//Auth
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import axios from 'axios';
function Login() {
  return (
    <GoogleOAuthProvider clientId="377509215492-6qfh0l50l1cae9snbquq1tepv6to8fs3.apps.googleusercontent.com">
            <GoogleLogin
      onSuccess={async (credentialResponse) => {
        const res = await axios.post("http://localhost:3001/login", {
          data: credentialResponse
        });
        
        
      }}
      onError={() => {
        console.log('Login Failed');
      }}
    />
    </GoogleOAuthProvider>
  )
}

export default Login