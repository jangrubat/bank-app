import * as React from 'react';
import { useState } from 'react';

export default function Form({setLoginWindow,setOpenMainBank,setCurrentUser,    setCurrentUBal}){

    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const closeLogin= ()=>{
        setLoginWindow(false)
        setOpenMainBank(true)
    }




    const   [accounts,setAccount] = useState([
        {
          id: 1,
          fullName: 'Jan Grubat',
          userName: 'jangrubat',
          password: '1234',
          accountBal: 10000
        },
        {
            id: 1,
            fullName: 'Potato Man',
            userName: 'potatoguy',
            password: '1234',
            accountBal: 10000
          }
     ])

    const handleSubmit = (e)=>{
        e.preventDefault();
        
        const match = accounts.find((data) => data.userName === username && data.password === password)

        

       


        if(match){
           
            console.log(match.fullName)
            setCurrentUser(match.fullName)
            setCurrentUBal(match.accountBal)
            closeLogin()
            
            
        }else{
            alert("No User FOUND, PLEASE REGISTER")
        }

    }


    return(
        <div className=" w-full flex items-center justify-center">
       
        <form onSubmit={handleSubmit} className='bg-[#005bea]  px-10 py-20 rounded-3xl border-2'>
            
           <h1 className='text-5xl text-[#ffffff] font-semibold drop-shadow-lg'>Grubs Money App</h1>
           <p className=' text-[#ffffff] font-medium text-lg text-center  mt-4'>Welcome back! Please enter your details.</p>

           <div className='mt-8'>
                        <div>
                            <label className='text-[#ffffff] text-lg font-medium ' htmlFor="">Username</label>
                            <input value={username} onChange={(e)=>setUserName(e.target.value)} className=' w-full border-2 border-gray-100 rounded-xl p-2 mt-1' placeholder='Enter your username' />                            
                        </div>
                        <div className='mt-2'>
                            <label className='text-[#ffffff] text-lg font-medium' htmlFor="">Password</label>
                            <input value={password} onChange={(e)=>setPassword(e.target.value)} className='w-full border-2 border-gray-100 rounded-xl p-2 mt-1' placeholder='Enter your password' type='password' />                            
                        </div>

                       


           </div>
                        <div className='mt-8 flex items-center justify-center'>
                            <button type='submit' className='text-white w-64 h-14 bg-gradient-to-r from-[#fbc205] to-[#ff9500] rounded-xl font-semibold active:scale-[.97]   '>Sign in</button>
                        </div>
                    <div className='flex text-white justify-center mt-5 hover:underline'>
                        <button>Don't have an Account? Register Here.</button>
                    </div>

        </form>
        </div>

    );

}