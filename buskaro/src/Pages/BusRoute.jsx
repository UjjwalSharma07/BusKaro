import React from 'react';

const BusRoute = () => {
  return (

    <div className=' flex flex-col justify-center items-center gap-y-7 min-h-screen'>
        
        <h1 className=' text-3xl text-white mt-3'>Bus Routes :</h1>

        {/* Route Div? */}
        <div className=' w-[90%]  h-[550px]  rounded-lg flex p-2 gap-x-4'>

            {/* Left Section */}
            <div className=' h-[100%] w-1/3 flex flex-col bg-white border'>
                <div className=' h-1/4 bg-richblack-800'></div>
                <div className=' h-3/4 flex flex-col'>
                    <h3>Stps at:</h3>
                    <ol className=' overflow-y-scroll overflow-x-hidden h-[100%]'>
                        <li>a</li>
                        <li>b</li>
                        <li>c</li>
                        <li>d</li>
                        <li>e</li>
                        <li>f</li>
                        <li>g</li>
                        <li>h</li>
                        <li>i</li>
                        <li>j</li>
                        <li>j</li>
                        <li>j</li>
                        <li>j</li>
                        <li>j</li>
                        <li>j</li>
                        <li>j</li>
                        <li>j</li>
                        <li>j</li>
                        <li>j</li>
                        <li>j</li>
                        <li>j</li>
                        <li>j</li>
                        <li>j</li>
                        <li>j</li>
                        <li>j</li>
                        <li>j</li>
                        <li>j</li>
                        <li>j</li>
                        <li>j</li>
                        <li>j</li>
                        <li>j</li>
                        <li>j</li>
                        <li>j</li>
                        <li>j</li>
                        <li>j</li>
                        <li>j</li>
                        <li>j</li>
                    </ol>
                </div>
            </div>


            {/* Map */}
            <div className='border-2 border-dotted border-richblack-700 w-2/3 h-[100%]'>

            </div>
        </div>
    </div>
    
  )
}

export default BusRoute