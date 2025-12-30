import { useState } from "react";


const Increment = () => {
    const [val,setVal] =useState(0);
    const handleinc=() =>{
        setVal(prev => prev-1)
    }
    const handleres =() =>{
         setVal(0)
    }
    const handledec =() =>{
        setVal(prev =>prev+1)
    }
  return (
    <div className="bg-indigo-600 p-6 rounded">
        <div className="bg-indigo-900 flex w-100 rounded-lg m-auto flex-col items-center justify-center mb-2 gap-4">
          <h1 className="text-white font-bold ">{val}</h1>
          <button onClick={handledec} className="bg-blue-700  font-bold text-white px-4 py-2.5 rounded-lg text-6xl">Decrement</button>
          <button onClick={handleres} className="bg-pink-700  font-bold text-white px-4 py-2.5 rounded-lg text-6xl">Reset</button>
          <button onClick={handleinc} className="bg-teal-700 my-2.5 font-bold text-bold text-white px-4 py-2.5 rounded-lg text-6xl">Increment</button>
        </div>
    </div>
  )
};

export default Increment;