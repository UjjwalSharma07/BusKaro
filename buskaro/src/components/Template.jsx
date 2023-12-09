import React from 'react';
import frameImage from '../assets/frame.png';
import SignUpForm from './SignupForm';
import LoginForm from './LoginForm';
import {FcGoogle} from "react-icons/fc";
import { VscGithubInverted } from "react-icons/vsc";


const Template = ({title,  desc, desc2, image, formType, setIsLoggedIn}) => {
    const handleLoginWithGoogle = () => {
        // window.location.href = "https://oauthapp-8l6w.onrender.com/login/federated/google";
        window.location.href = "http://localhost:8800/login/federated/google"
      };
      const handleLoginWithGithub = () => {
        // window.location.href = "https://oauthapp-8l6w.onrender.com/auth/github";
        window.location.href = "http://localhost:8800/auth/github"
      };
  return (

    <div className=' flex  justify-between w-11/12  max-w-[1160px] py-12 mx-auto gap-x-12 gap-y-0'>

        <div className=' w-11/12 max-w-[450px]'>

            <h1 className=' text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem]'>{title}</h1>

            <p className=' text-[1.125rem] leading-[1.625rem] mt-4'>

                <span className=' text-richblack-100'>{desc}</span>
                <br/>
                <span className=' text-blue-100 italic'>{desc2}</span>
            </p>

            {formType === "signup" ?
            (<SignUpForm setIsLoggedIn={setIsLoggedIn} />) : 
            (<LoginForm setIsLoggedIn={setIsLoggedIn} />)}

            <div className=' flex flex-row w-full items-center my-4 gap-x-2'>
                <div className=' w-full h-[1px] bg-richblack-700 '></div>

                <p className=' text-richblack-700 font-medium leading-[1.375rem]'>OR</p>

                <div className=' w-full h-[1px] bg-richblack-700'></div>
            </div>

            <button onClick={handleLoginWithGoogle} className=' w-full flex justify-center items-center rounded-[8px] font-medium text-richblack-100 border border-richblack-700 px-[12px] py-[8px] gap-x-2 mt-6'>
                <FcGoogle/>
                <p>Continue with Google</p>
            </button>
            <button onClick={handleLoginWithGithub} className=' w-full flex justify-center items-center rounded-[8px] font-medium text-richblack-100 border border-richblack-700 px-[12px] py-[8px] gap-x-2 mt-6'>
                <VscGithubInverted /> 
                <p>Continue with Github</p>
            </button>
        </div>

        <div className=' relative w-11/12 max-w-[450px]  '>
            <img src={frameImage} alt='Pattern' 
            width={558} 
            height={504} 
            loading='lazy' />

            <img src={image} 
            alt='Students'  
            loading='lazy' 
            className=' absolute -top-4 right-4 h-[400px] '
            />

        </div>

    </div>
  )
}

export default Template