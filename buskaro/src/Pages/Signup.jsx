import React from 'react';
import Template from '../components/Template';
import signupImg from '../assets/signup2.jpg';

const Signup = ({setIsLoggedIn}) => {
  return (
    <Template
        title = "Hop On Board with BusKaro! "
        desc = "Ready, Set, BusKaro : Signup Now."
        desc2 = "Your Journey Begins Here!"
        image={signupImg}
        formType="signup"
        setIsLoggedIn={setIsLoggedIn} 
    />
  )
}

export default Signup