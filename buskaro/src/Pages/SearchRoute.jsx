import React from 'react'
import { BiSearch } from 'react-icons/bi';
import Map from '../components/Map';

const SearchRoute = () => {
  return (
    <div className='relative'>
     <div className='absolute flex justify-center items-center w-[500px] bg-white rounded-lg left-[32%] top-6 outline-2 py-2'>
  <input
    type='text'
    placeholder='Enter Location'
    className='rounded-lg bg-opacity-25 text-black placeholder-black text-center w-full h-full outline-none px-4' // Adjusted styling
  />
  <BiSearch size="1.5em" className=' mr-5'/>
</div>
    
      <Map/>
      
      <div className='flex flex-col justify-center items-center mt-[100px] gap-y-4'>
      <div className='w-11/12 h-[200px] border-[0.1em] border-richblack-700 rounded-lg '></div>
      <div className='w-11/12 h-[200px] border-[0.1em] border-richblack-700  rounded-lg '></div>
      <div className='w-11/12 h-[200px] border-[0.1em] border-richblack-700 rounded-lg '></div>
      </div>
    </div>
  )
}

export default SearchRoute