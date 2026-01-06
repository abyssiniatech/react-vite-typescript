import { useEffect, useState } from "react";


const Lab1 = () => {
    const [counter,setCounter] = useState(0)
    const handleinc = ()=>{
        setCounter((prev) =>prev+1)
    }
    useEffect(()=>{
         setTimeout(()=>{
      document.title= `${counter} times render`
         },2000)
    },[counter])
  return (
    <div className="h-screen flex justify-center items-center flex-col">
        <h1>Useeffect hooks   React + typescript =<span className="bg-indigo-700 px-8 py-4 rounded text-center text-white text-2xl ">{counter}</span> </h1>
        <button onClick={handleinc} className="bg-indigo-900 text-white px-8 py-4 rounded m-4 text-center text-2xl">Increment</button>
    </div>
  )
};

export default Lab1;