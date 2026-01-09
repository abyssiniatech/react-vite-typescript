import { useRef } from "react";


const IncrementApp = () => {
    const userInc=useRef<number>(0)
    const handleinc =()=>{
      const val=  userInc.current +=1
      console.log(val)
    }
  return (
    <div>
        <p>See and open console window</p>
        <button onClick={handleinc} className="bg-teal-900 text-white rounded-md p-4 text-center">Increment</button>
    </div>
  )
};

export default IncrementApp;