import React from 'react'
import { useState } from 'react'
import { BsXSquareFill } from "react-icons/bs";



function Modal({updateModal, addDeposit}) {
    
    const [inputNum, setNewInput] = useState('')

    const closeClicked= ()=>{
        updateModal(false)
    }


    const setDeposit = () =>{
       addDeposit(inputNum)
       updateModal(false)
       setNewInput('')
    }

  




  return (
    <div className=' absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-[#787878c1] w-full h-screen'>
      <div className='flex flex-col absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] border-2 p-2 rounded-xl bg-white w-[800px] h-[400px]'>
        <div className='flex justify-between'>
        <h1 className='text-[50px] mx-10'>  Deposit</h1>
        <button className='text-[40px] font-bold m-5' onClick={closeClicked}><BsXSquareFill/></button>
        
        </div>
        <p className='text-[20px] mx-10'>Amount to Deposit</p>
        
        <input 
        type='text'
       value={inputNum}
        onChange={(e) =>setNewInput(e.target.value)} 
        className='border-2 text-[50px] mx-[5%] mt-[8%]' placeholder='Enter amount' />

        <button onClick={setDeposit} className='text-white mx-[35%] mt-[5%] h-14 bg-gradient-to-r from-[#fbc205] to-[#ff9500] rounded-xl text-[23px] font-semibold active:scale-[.97] '>PROCEED</button>
      </div>
    </div>
  )
}

export default Modal
