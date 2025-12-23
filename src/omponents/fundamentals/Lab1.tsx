import { useState } from "react";


const Lab1 = () => {
    const [show,setShow] =useState(true);
    const handleclick =() =>{
        setShow(show => !show)
    }

  return (
    <div className="h-screen flex flex-col justify-center items-center  bg-indigo-900 text-white text-center">
        {
            show && (
                <section className="w-[600px] rounded">

                <h1>Welcome to my website!</h1>`
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum sapiente reprehenderit, esse quaerat quia neque hic ipsam, dolorem tempora cumque repellat at non odit architecto fugiat porro officiis facilis. Minus.</p>
                </section>
            )
        }
       <button onClick={handleclick} className="bg-teal-700 text-white px-4 py-2 rounded text-3xl">
        {show ? "Hide" : "Show"}
        
        </button>
    </div>
  )
};

export default Lab1;