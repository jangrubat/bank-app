import * as React from 'react';
import { useState } from 'react'
import { BsBoxArrowInUp, BsBoxArrowInDown, BsBoxArrowRight, BsPeopleFill } from "react-icons/bs";
import { SiVisa } from "react-icons/si";
// import AccountBalance from './AccountBalance';
// import AccountBalance from './AccountBalance';
import Modal from './DepositModal';
import FriendsModal from './FriendsModal';
import SendModal from './SendModal';
import WidthdrawModal from './WidthdrawModal';


export default function Mainbank({currentUser,currentBal}){
    




    const [accountBalance, updateBalance] = useState(currentBal)

    
    const addDeposit = (inputNum)=>{
        updateBalance(accountBalance+ +inputNum)
    }

    const widthDrawDeposit = (inputNum)=>{
        updateBalance(accountBalance- +inputNum)
    }

    
    const sendMoney = (inputNum)=>{
        updateBalance(accountBalance- +inputNum)
    }
        



    //MODALS
    const [setModal, updateModal] = useState(false);
    const [setSendModal, updateSendModal] = useState(false);
    const [setWidthModal, updateWidthModal] = useState(false);
    const [setFriModal, updateFriModal] = useState(false);



    const depositClicked= ()=>{
        updateModal(true)
    }

    const sendMoneyClicked= ()=>{
        updateSendModal(true)
    }

    const widthdrawMoneyClicked= ()=>{
        updateWidthModal(true)
    }

    const friendsClicked= ()=>{
        updateFriModal(true)
    }
    ///////END-MODALS


   





    return(

        <div className=" bg-[#005bea] flex w-full"> 
        
        <div className=" w-full  flex items-center justify-center">
 


        
        <div className='flex flex-col w-full m-[50%]'>

            <h1 className='text-5xl text-[#ffffff] font-semibold drop-shadow-lg mb-3'>Welcome back, {currentUser} </h1>

            <div className='flex'>
                
            
            <div className='w-full'>


                <div className='w-[900px] h-[500px] bg-white border-2 rounded-3xl  p-8 m-2 '>
                <p className='text-[1.8rem] text-[#575757]'>Current Balance</p>
                <div className='mt-8 flex items-end  justify-between'>
                <h1 className='text-[3rem] self-start ' >PHP</h1>
                <div className='text-[6rem]'>{ accountBalance.toLocaleString()}</div> 
                </div>
                <div className='flex mt-[15%] justify-between'>
                <div>
                <p className='text-[30px] tracking-[.5em] '>6453 3434 6567 3465</p>
                <p>08/26</p>

                </div>
               
                
                
                <div className='text-[85px]'><SiVisa/></div>
                </div>
                </div>

            </div>

            <div className='w-full h-80'>
            
                <div className='flex'>
                <div className=' text-[30px]  font-semibold flex flex-col justify-center h-[242px]  bg-white w-[400px] border-2 rounded-3xl   p-8  m-2  active:scale-[.97] '>
                              
                <button  onClick={depositClicked}> <div className=' text-[50px] m-1 flex justify-center font-bold'><BsBoxArrowInUp/></div>  Deposit</button>
                

                </div>
                <div className=' text-[30px] font-semibold flex flex-col justify-center  h-[242px] bg-white w-[400px] border-2 rounded-3xl  p-8 m-2 active:scale-[.97]'>
                 
                <button onClick={sendMoneyClicked}><div className=' text-[50px] m-1 flex justify-center font-bold'><BsBoxArrowRight/></div>Send Money</button>
                

                </div>

                </div>
                <div className='flex'>
                <div className=' text-[30px] font-semibold flex flex-col justify-center  h-[242px] bg-white w-[400px] border-2  rounded-3xl  p-8 m-2 active:scale-[.97]'>
                 
                <button onClick={widthdrawMoneyClicked}><div className=' text-[50px] m-1 flex justify-center font-bold'><BsBoxArrowInDown/></div>Withdraw</button>
                

                </div>
                <div className=' text-[30px] font-semibold flex flex-col justify-center  h-[242px] bg-white w-[400px] border-2 rounded-3xl  p-8 m-2  active:scale-[.97]'>
                
                <button onClick={friendsClicked}><div className=' text-[50px] m-1 flex justify-center font-bold'><BsPeopleFill/></div>  Friends</button>
                

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
                    <button  className='text-white text-[25px] w-64 h-14 bg-gradient-to-r from-[#fbc205] to-[#ff9500] rounded-xl font-semibold active:scale-[.97] mt-4   '>Add Expense</button>
                </div>
                </div>
               

            </div>

            
        </div>







        {setModal && <Modal addDeposit={addDeposit} updateModal={updateModal}/>}
        {setSendModal && <SendModal sendMoney={sendMoney} updateSendModal={updateSendModal}/>}
        {setWidthModal && <WidthdrawModal widthDrawDeposit={widthDrawDeposit} updateWidthModal={updateWidthModal}/>}
        {setFriModal && <FriendsModal updateFriModal={updateFriModal}/>}



        
        </div>
        </div>



      </div>

        
        


)

}