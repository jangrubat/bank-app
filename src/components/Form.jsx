import * as React from 'react';

export default function Form(){
    return(
        <div className='bg-[#005bea]  px-10 py-20 rounded-3xl border-2'>
           <h1 className='text-5xl text-[#ffffff] font-semibold drop-shadow-lg'>Grubs Money App</h1>
           <p className=' text-[#ffffff] font-medium text-lg text-center  mt-4'>Welcome back! Please enter your details.</p>
           <div className='mt-8'>
                        <div>
                            <label className='text-[#ffffff] text-lg font-medium ' htmlFor="">Username</label>
                            <input className=' w-full border-2 border-gray-100 rounded-xl p-2 mt-1' placeholder='Enter your username' />                            
                        </div>
                        <div className='mt-2'>
                            <label className='text-[#ffffff] text-lg font-medium' htmlFor="">Password</label>
                            <input className='w-full border-2 border-gray-100 rounded-xl p-2 mt-1' placeholder='Enter your password' type='password' />                            
                        </div>

                       


           </div>
                        <div className='mt-8 flex items-center justify-center'>
                            <button className='text-white w-64 h-14 bg-gradient-to-r from-[#fbc205] to-[#ff9500] rounded-xl font-semibold active:scale-[.97]   '>Sign in</button>
                        </div>


        </div>

    );

}