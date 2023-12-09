import React, { useState } from 'react'
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from "axios";

const SignupForm = ({setIsLoggedIn}) => {

    const navigate = useNavigate();

    const[formData,setFormData] = useState({
        firstName: "",
        lastName: "",
        password: "",
        email: "",
        confirmPassword: "",
    });

    const [showPass, setShowPass] = useState(false);
    const [showConfirmPass, setConfirmPass] = useState(false);
    const [accType, setAccType] = useState("User");

    function changeHandler(event){

        setFormData( (prevData) => (
            {
                ...prevData,
                [event.target.name] : event.target.value,
            }
        ))
    };

    function submitHandler(event){
        event.preventDefault();
        if(formData.password !== formData.confirmPassword){
            toast.error("Password Do Not Match");
            return;
        }
        // setIsLoggedIn(true);
        // toast.success("Account Created");
        const accountData = {
            ...formData
        };
        const finalData = {
            ...accountData,
            accType
        }

        console.log("printing Final account data ");
        console.log(finalData);
        registerUser(finalData);
        
    }
    const registerUser = async (finalData) => {
        try {
          console.log(finalData);
          const response = await axios.post(
            // "https://oauthapp-8l6w.onrender.com/api/v1/auth/register",
            "http://localhost:8800/api/v1/auth/register",
            finalData
          );
          console.log(response);
          if (response.data.success) {
            toast.success(`${response.data.message}`);
            setIsLoggedIn(true);
            navigate("/login")
          } else {
            console.log("Registration failed:", response.data.message);
            toast.error(`${response.data.message}`);
          }
        } catch (error) {
          console.log("Error occurs in user registration:", error);
          toast.error(`${error.response.data.message}`);
        }
      };
    
      
  return (
    <div>

        <div
        className='flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max'>

            <button
            className={`${accType === "User" 
            ?
              "bg-richblack-900 text-richblack-5"
            :"bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
            onClick={()=> setAccType("User")}>
                User
            </button>

            <button
            className={`${accType === "Driver" 
            ?
              "bg-richblack-900 text-richblack-5"
            :"bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
            onClick={() => setAccType("Driver")}>
                Driver
            </button>
        </div>

        <form onSubmit={submitHandler}>

            <div className=' flex gap-x-4 mt-[20px]'>
                {/* First Name and Last Name */}
                <label className='w-full mt-4'>
                    <p className=' text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]' >First Name
                    <sup className=' text-pink-200'>*</sup>
                    </p>
                    <input
                        required
                        type='text'
                        name='firstName'
                        onChange={changeHandler}
                        placeholder='Enter First Name'
                        value={formData.firstName}
                        className=' bg-richblack-800 rounded-[0.5rem] w-full text-richblack-5 p-[12px]'
                    />
                </label>
                
                <label  className='w-full mt-4'>
                    <p className=' text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]' >Last Name
                    <sup className=' text-pink-200'>*</sup>
                    </p>
                    <input
                        required
                        type='text'
                        name='lastName'
                        onChange={changeHandler}
                        placeholder='Enter Last Name'
                        value={formData.lastName}
                        className=' bg-richblack-800 rounded-[0.5rem] w-full text-richblack-5 p-[12px]'
                    />
                </label>
            </div>

            {/* Email */}
            <div className='mt-[20px]'>
            <label className=' w-full'>
                    <p className=' text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]' >Email Address
                    <sup className=' text-pink-200'>*</sup>
                    </p>
                    <input
                        required
                        type='email'
                        name='email'
                        onChange={changeHandler}
                        placeholder='Enter Email Address'
                        value={formData.email}
                        className=' bg-richblack-800 rounded-[0.5rem] w-full text-richblack-5 p-[12px]'
                    />
            </label>
            </div>

            {/* Create Confirm Password */}
            <div className=' w-full flex gap-x-4 mt-[20px]'>
                <label className=' w-full relative'>
                        <p className=' text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]' >Create Password
                        <sup className=' text-pink-200'>*</sup>
                        </p>
                        <input
                            required
                            type= {showPass ? ("text") : ("password")}
                            name='password'
                            onChange={changeHandler}
                            placeholder='Enter Password'
                            value={formData.password}
                            className=' bg-richblack-800 rounded-[0.5rem] w-full text-richblack-5 p-[12px]'
                        />
                        <span  className=' absolute right-3 cursor-pointer top-[38px]' onClick={ ()=> setShowPass((prev) => !prev)}>
                         {showPass ? (<AiOutlineEyeInvisible  fontSize={24} fill='#afb2bf' />) : (<AiOutlineEye fontSize={24} fill='#afb2bf'/>)}
                        </span>
                </label>

                <label className=' w-full relative'>
                        <p className=' text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]' >Confirm Password
                        <sup className=' text-pink-200'>*</sup>
                        </p>
                        <input
                            required
                            type= {showConfirmPass ? ("text") : ("password")}
                            name='confirmPassword'
                            onChange={changeHandler}
                            placeholder='Confirm Password'
                            value={formData.confirmPassword}
                            className=' bg-richblack-800 rounded-[0.5rem] w-full text-richblack-5 p-[12px]'
                        />
                        <span onClick={ ()=> setConfirmPass((prev) => !prev)}
                        className=' absolute right-3 cursor-pointer top-[38px]'
                        >
                         {showConfirmPass ? (<AiOutlineEyeInvisible fontSize={24} fill='#afb2bf' />) : (<AiOutlineEye fontSize={24} fill='#afb2bf' />)}
                        </span>
                </label>


            </div>

            <button className=' w-full bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6'>Create Account</button>

        </form>

    </div>
  )
}

export default SignupForm