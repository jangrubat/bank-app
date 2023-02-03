import { useState } from "react";
import Form from "./components/Form";
import Mainbank from "./components/Mainbank";



function App() {

  const [loginWindow, setLoginWindow] = useState(true);
  const [openMainBank, setOpenMainBank] = useState(false)

  const [currentUser,setCurrentUser] = useState('')
  const [currentBal,setCurrentUBal] = useState('')




  return (
    <div className="flex w-full h-screen">
     
     {loginWindow && <Form 
     setLoginWindow={setLoginWindow} 
     setCurrentUser={setCurrentUser}
     setCurrentUBal={setCurrentUBal}
     setOpenMainBank={setOpenMainBank}
     
     />} 
     {openMainBank && <Mainbank  currentUser={currentUser}
     currentBal={currentBal}   />} 

       
    </div>
  );
}

export default App;

