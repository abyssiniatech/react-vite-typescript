import { useState } from "react";

// styling the web  by using tailwind css

const Onshow = () => {
    const [show,setShow] =useState(true)
    const handleshow =()=>{
    setShow(prev =>!prev)
    }
  return (
    <div className="bg-indigo-950 tewxt-white font-bold h-screen flex flex-col justify-center items-center text-2xl text-white">{show && (
        <>
           <main className="w-150 rounded shadow-blue-50 border-2 border-amber-200 p-6">
            <h1>Welcome to these channel</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non voluptatum quae amet perspiciatis inventore, quas est error distinctio voluptate nulla ab doloremque! Eius non facere quia perferendis amet repellat quo?</p>
            
           </main>
           </>
            )
            }
           <button onClick={handleshow} className="bg-blue-700 text-white hover:bg-blue-500 rounded px-4 py-2 mt-4 ">{show? "Hide" :"Show"}</button>
    </div>
    
  )
};

export default Onshow;