import { useRef } from "react";


const Second = () => {
    const inputRef=useRef<HTMLInputElement | null>(null);
    const handleref = () =>{
      inputRef.current?.focus()
    }
  return (
    <div className="h-screen flex items-center justify-center gap-8">
        <input className="rounded-md  px-8 py-4 text-2xl" type="text" ref={inputRef} />
        <button className="bg-blue-700 text-2xl text-white px-8 py-4 rounded-lg text-center" onClick={handleref}>Focus</button>
    </div>
  )
};

export default Second;