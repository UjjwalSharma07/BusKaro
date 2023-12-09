import React from 'react'
import { GiBus } from "react-icons/gi";
import { BiSearch } from 'react-icons/bi';
import { NavLink,Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Navbar = ({isLoggedIn,setIsLoggedIn}) => {

    const navigate = useNavigate();

    function submitHandler(){
        navigate("/busRoutes");
    };

  return (
    <div className= " flex justify-between items-center w-screen  py-4 mx-auto px-10">
    <NavLink to="/">
    <div className='text-white flex  items-center gap-x-2 '  >
      <GiBus size="3em"/>
      <h1 className=' text-xl'>BusKaro!</h1>
    </div>
    </NavLink>
    <div className="flex items-center gap-5">
              <div className="relative" >
                <input
                  type="text"
                  placeholder="Search By Bus No."
                  className="py-1 pl-7 pr-12 rounded bg-opacity-25 bg-white text-white placeholder-white"
                />
                <BiSearch className="text-white absolute right-3 top-1/2 transform -translate-y-1/2" onClick={submitHandler} />
              </div>
              {/*  <div className="flex items-center gap-1">
                <FaUserCircle className="text-white text-3xl" />
              </div> */ }
              <div className=' flex items-center gap-x-4 '>
             { !isLoggedIn && 
                <Link to="/login">
                    <button className='text-[#daa520] border-[0.1em] border-[#daa520] py-[8px] px-[15px] rounded-[8px] transition-all ease-in duration-300 hover:bg-[#daa520] hover:text-black'>Log In</button>
                </Link>
             }
             { !isLoggedIn &&
                <Link to="/signup" >
                    <button className=' text-[#daa520] border-[0.1em] border-[#daa520] py-[8px] px-[15px] rounded-[8px] transition-all ease-in duration-300 hover:bg-[#daa520] hover:text-black  '>Sign Up</button>
                </Link>
             }
            { isLoggedIn &&
                <Link to="/">
                    <button onClick={ ()=> {
                        setIsLoggedIn(false);
                        toast.success("Logged Out");
                    }} className='text-[#daa520] border-[0.1em] border-[#daa520] py-[8px] px-[15px] rounded-[8px] transition-all ease-in duration-300 hover:bg-[#daa520] hover:text-black'>Log Out</button>
                </Link>
            }
            { isLoggedIn &&
                <Link to="/dashboard">
                    <button className='text-[#daa520] border-[0.1em] border-[#daa520] py-[8px] px-[15px] rounded-[8px] transition-all ease-in duration-300 hover:bg-[#daa520] hover:text-black'>Dashboard</button>
                </Link>
            }
         </div>
              
            </div>
    </div>
  )
}

export default Navbar