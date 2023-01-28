import Form from "./components/Form";
import Mainbank from "./components/Mainbank";




function App() {
  return (
    <div className="flex w-full h-screen">
      <div className="hidden w-full flex items-center justify-center">
      <Form/>
      </div>

      <div className="bg-[#005bea] flex w-full"> 
        
        <div className="w-full  flex items-center justify-center">
        <Mainbank/>

        </div>



      </div>
    </div>
  );
}

export default App;
