import { useEffect, useState } from "react";


const UseEffectTips = () => {
    const [count,setCount] = useState(0)
    useEffect(() =>{
       
        setTimeout(()=>{
          setCount((prev) =>prev+1)
         console.log("rendered!!",count)
        // cleanup function
        Document.title= `welcome to ${count}`
        return () =>{
            console.log("welcome to surafel")
        }
        },3000)
    },[])
  return (
    <div>
           <p>{count}</p>
        <section>
          <button>Increment</button>
        </section>
    </div>
  )
};

export default UseEffectTips;