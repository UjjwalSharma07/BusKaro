import React from 'react';
import Template from '../components/Template';
import loginImg from '../assets/login1.jpg';

const Login = ({setIsLoggedIn}) => {
  return (

    <Template
        title = "Welcome Back"
        desc = "Continue Your Expedition."
        desc2 = "Access your Journey: BusKaro Login "
        image={loginImg}
        formType="login"
        setIsLoggedIn={setIsLoggedIn} 
    />

  )
}

export default Login
