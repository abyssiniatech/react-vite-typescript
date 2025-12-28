import {  useState } from "react";


const Useref = () => {
    const[name,setname] =useState("")
  
 
  return (
    <div>
        <section>
          <label htmlFor="name" className="text-3xl font-bold font-mono text-white">Name:{name && <span className="text-red-700">{name}</span>}</label>
         <input onChange={(e) =>setname(e.target.value)} type="text"  id="name" className="border border-gray-400 w-[80%] px-4 py-2 rounded-md bg-white text-gray-800 focus:bg-gray-100" />
        </section>
    </div>
  )
};

export default Useref;