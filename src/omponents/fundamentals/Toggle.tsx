import { useState } from "react";


const Toggle = () => {
    const [show, setShow] = useState(true);
//   onClick(method) logic
    const handleClick = () => {
        setShow(prev => !prev);
    }
   const handleclick = () =>{
        setShow(prev => !prev)
   }
  return (
    <div className="bg-black text-white w-[600px] flex flex-col items-center  justify-center m-auto">
        
        {show && (
            <>
        <h1>Toggle text</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam labore aspernatur ut in neque molestias veritatis dolor, facilis totam. Hic illum porro quod, reprehenderit quidem nihil aliquam nisi laborum deserunt?</p>
        </>
        )}
        <button onClick={handleClick} className="bg-blue-700 mt-4 px-4 py-2 text-bg-primary">
            {show ? "Hide" : "Show"}
        </button>
            {
              show && (
                     <div className="bg-teal-700 text-white mt-4 p-4">
                  <h2>welcome to my channel</h2>
                  <p>These is The best </p>
                  </div>
                  )}
            
            <button onClick={handleclick} className="bg-indigo-800 text-white px-4 py-2 m-2">{show ? "hide" : "show"}</button>
    </div>
  )
};

export default Toggle;