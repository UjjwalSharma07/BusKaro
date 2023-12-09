import React, { useState } from 'react'
import Map from '../components/Map'
import { LuArrowLeftRight } from "react-icons/lu";
import { NavLink } from 'react-router-dom';
import NewsLetter from '../components/NewsLetter';

const Home = () => {
  return (
    <div>
    <div className='relative'> 
        <Map/>
        <div className='absolute text-black bg-white rounded-lg top-1/2 left-1/2 -translate-x-[50%] -translate-y-[110%] px-4 py-2 border border-black font-bold hover:scale-110 transition-all ease-in duration-300 hover:shadow-2xl  '>
          <button>Live Tracking</button>

        </div>
        <div className='absolute flex flex-col w-[600px] bg-richblack-900 top-[86%] left-[30%] text-richblack-100 border-[0.1em] border-[#daa520] rounded-lg '>
          <div className='flex justify-between items-center p-4 w-[70%] mx-auto '>
            <p className='text-lg text-white font-bold'>From</p>
            <p className='text-lg text-white font-bold'>To</p>
          </div>
          <div className='flex justify-center items-center pb-4 px-4 gap-x-4'>
            <input
              type='text'
              className="py-1 pl-7 pr-12 rounded bg-opacity-25 bg-white text-white placeholder-white text-center"
              placeholder='Choose Source Point '
            />
            <LuArrowLeftRight/>
            <input
              type='text'
              className="py-1 pl-7 pr-12 rounded bg-opacity-25 bg-white text-white placeholder-white text-center"
              placeholder='Choose Destination Point '
            />
          </div>
          <div className='flex justify-center items-center mb-2'>
          <button className='w-[80%] rounded-lg font-medium text-[#daa520] border-[0.1em] border-[#daa520] px-[12px] py-[8px] gap-x-2 my-4 hover:scale-110 transition-all ease-in duration-300 hover:bg-[#daa520] hover:text-black'>Search</button>
          </div>
         
        </div>
        </div>

        <div className='flex w-full gap-x-2 mt-[100px] justify-evenly items-center h-[200px]  '>
        <NavLink to="/nearestBusStop" >
        <button className='text-lg w-[200px] h-[100px] rounded-lg font-bold text-richblack-900 bg-[#daa520]  border-2 border-gray-300 hover:text-[#daa520]  hover:bg-white hover:scale-110 transition-all duration-300 ease-in'>Nearest Bus Stop</button>    
        </NavLink>
          
          <NavLink to="/bookTickets">
          <button className='text-lg w-[200px] h-[100px] rounded-lg font-bold text-richblack-900 bg-[#daa520]  border-2 border-gray-300 hover:text-[#daa520]  hover:bg-white hover:scale-110 transition-all duration-300 ease-in'>Book Tickets </button>
          </NavLink>
          
        
        <NavLink to="/searchRoute">
        <button className='text-lg w-[200px] h-[100px] rounded-lg font-bold text-richblack-900 bg-[#daa520]  border-2 border-gray-300 hover:text-[#daa520]  hover:bg-white hover:scale-110 transition-all duration-300 ease-in'>Search Route</button>
        </NavLink>
          
        <NavLink to="/queries">
        <button className='text-lg w-[200px] h-[100px] rounded-lg font-bold text-richblack-900 bg-[#daa520]  border-2 border-gray-300 hover:text-[#daa520]  hover:bg-white hover:scale-110 transition-all duration-300 ease-in'>Queries</button>
        </NavLink>
          
    
        </div>
        <NewsLetter/>
</div>
  )

}
export default Home