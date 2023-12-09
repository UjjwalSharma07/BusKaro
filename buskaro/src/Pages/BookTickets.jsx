import React from 'react'

const BookTickets = () => {
    return (
        <div className=' flex flex-col justify-center items-center'>
            <h1 className=' text-3xl text-white mt-3 '> Book Tickets </h1>

            <form className=' w-[60%] max-w-[1160px] h-[500px]  rounded-lg border-[0.1em] border-richblack-700 flex flex-col  gap-y-4 mt-6 p-5'>
                
                <label className=' w-full'>
                    <p className=' text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] '>Source<sup className=' text-pink-200'>*</sup></p>
                    <input 
                        required
                        type='text'
                        placeholder='Enter Source'
                        name='source'
                        className=' bg-richblack-800 rounded-[0.5rem] w-full text-richblack-5 p-[12px]'
                    />
                </label>

                <label className=' w-full'>
                    <p className=' text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] '>Destination<sup className=' text-pink-200'>*</sup></p>
                    <input 
                        required
                        type='text'
                        placeholder='Enter Destination'
                        name='destination'
                        className=' bg-richblack-800 rounded-[0.5rem] w-full text-richblack-5 p-[12px]'
                    />
                </label>

                <div className=' flex gap-x-4 '>
                <label className='w-full'>
                    <p className=' text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]' >Date
                    <sup className=' text-pink-200'>*</sup>
                    </p>
                    <input
                        required
                        type='date'
                        name='date'
                        placeholder='Enter Date'
                        className=' bg-richblack-800 rounded-[0.5rem] w-full text-richblack-5 p-[12px]'
                    />
                </label>
                
                <label  className='w-full'>
                    <p className=' text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]' >Time
                    <sup className=' text-pink-200'>*</sup>
                    </p>
                    <input
                        required
                        type='time'
                        name='time'
                        placeholder='Enter Time'
                        className=' bg-richblack-800 rounded-[0.5rem] w-full text-richblack-5 p-[12px]'
                    />
                </label>
            </div>

            <label className=' w-full'>
                    <p className=' text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] '>Number of Person<sup className=' text-pink-200'>*</sup></p>
                    <input 
                        required
                        type='text'
                        placeholder='Enter Number of People'
                        name='peopleNumber'
                        className=' bg-richblack-800 rounded-[0.5rem] w-full text-richblack-5 p-[12px]'
                    />
                </label>
            
                <button className=' bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6'>Search</button>

                
            </form>

        </div>
      );
}

export default BookTickets