
import { useState } from "react";



const Increment = () => {
    const [value,setValue] =useState(0)
  const dec=()=>{
  setValue(value+1)
  }
  const res=() =>[
    setValue(0)
  ]
  const inc=()=>{
    setValue(value-1)
  }
  return (
    
    <div className="bg-indigo-900 text-white h-screen flex justify-center items-center ">
        <section>
            <button className="bg-green-700 text-white rounded px-8 py-4 text-center text-3xl m-4 hover:bg-green-500" onClick={dec}>Decrement</button>
            <button className="bg-green-700 text-white rounded px-8 py-4 text-center text-3xl m-4 hover:bg-green-500" onClick={res}>Reset</button>
            <span className="font-bold text-3xl text-orange-950 ">{value}</span>
            <button className="bg-green-700 text-white rounded px-8 py-4 text-center text-3xl m-4 hover:bg-green-500" onClick={inc}>Increment</button>
        </section>
    </div>
  )
};

export default Increment;