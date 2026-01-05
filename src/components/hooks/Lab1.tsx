import { useState } from "react";

const UsestateLab1 = () => {
    const [counter,setCounter] = useState(0)
 const handleinc = ()=>{
   setCounter(counter+1)
 }
    return (
    <div className="bg-indigo-900 text-white text-3xl font-bold rounded-2xl flex h-screen justify-between items-center">
        <section className="bg-indigo-800   p-22 flex items-center  gap-4justify-between h-screen text-white border border-gray-400 ">

        <button onClick={handleinc}>Add</button>
       <p>{counter} </p> 
        </section>
      </div>
  )
};

export default UsestateLab1;