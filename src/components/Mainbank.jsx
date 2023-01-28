import * as React from 'react';

export default function Mainbank(){
    return(
        <div className='flex flex-col w-full mx-[20%]'>
            <h1 className='text-5xl text-[#ffffff] font-semibold drop-shadow-lg mb-3'>Grubs Money App</h1>

            <div className='flex'>
                
            
            <div className='w-full'>


                <div className='w-[900px] h-[500px] bg-white border-2 rounded-3xl  p-8 m-2 '>
                <h1 className='text-[150px]'>$0.00</h1>
                <p className='mt-[120px] text-[30px]'>6453 3434 6567 3465</p>
                <div className=' flex justify-between'>
                <small>08/26</small>
                <div>THIS</div>
                </div>
                </div>

            </div>

            <div className='w-full h-80'>
            
                <div className='flex'>
                <div className=' text-[30px]  font-semibold flex justify-center h-[242px]  bg-white w-[400px] border-2 rounded-3xl   p-8  m-2  active:scale-[.97]'>
                <button> Deposit</button>
                

                </div>
                <div className=' text-[30px] font-semibold flex justify-center  h-[242px] bg-white w-[400px] border-2 rounded-3xl  p-8 m-2 active:scale-[.97]'>
                <button>Send Money</button>
                

                </div>

                </div>
                <div className='flex'>
                <div className=' text-[30px] font-semibold flex justify-center  h-[242px] bg-white w-[400px] border-2  rounded-3xl  p-8 m-2 active:scale-[.97]'>
                <button>Withdraw</button>
                

                </div>
                <div className=' text-[30px] font-semibold flex justify-center  h-[242px] bg-white w-[400px] border-2 rounded-3xl  p-8 m-2  active:scale-[.97]'>
                <button> Friends</button>
                

                </div>

                </div>
                






                

            </div>
            </div>
        <div>
        <div className='w-full m-2 '>
            

                <div className='w-full h-[380px] rounded-3xl border-2 p-8 bg-white'>
                <h1 className='text-[40px]'>EXPENSES</h1>
              
                <div className='flex justify-between' >
                
                <div>Expense Name</div>
                <div>Cost</div>

                <div>Actions</div>
                    
                </div>
                <div className='h-[165px] border-2 m-1'>

                    </div>
                <div className='flex justify-center'>
                    <button className='text-white w-64 h-14 bg-gradient-to-r from-[#fbc205] to-[#ff9500] rounded-xl font-semibold active:scale-[.97] mt-4  '>Add Expense</button>
                </div>
                </div>
               

            </div>

            
        </div>








        </div>
        
        


)

}