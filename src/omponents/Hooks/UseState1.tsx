
import { useState} from 'react';
// type countProp ={
//     count:number,
//     setCount:ReactNode
// }
const UseState1 = () => {
    const [count,setCount] =useState<number>(0)
    const handleinc=() =>{
        setCount(prev =>prev+1)
    }
    const handleres = () =>{
        setCount(0)
    }
    const handledec = () =>{
        setCount(prev =>prev-1)
    }

  return (
    <div className="bg-indigo-800 text-white shadow-lg p-4 m-2 h-screen flex justify-center items-center">
          <section className="bg-indigo-600  text-white rounded border border-white p-4">
            {count>1?<p className="text-center text-4xl text-pink-900">{count}</p>:
             count == 0 ? <p className="text-center text-4xl  text-shadow-fuchsia-800">{count}</p>:
             <p className="text-center text-4xl  text-white">{count}</p>

            }
             <main className="bg-indigo-900 p-8 m-2 border rounded border-white shadow-2xs flex gap-4 justify-center items-center">
                <button onClick={handleinc} className="px-4 bg-teal-700 py-2 text-2xl rounded hover:bg-teal-600 text-white font-bold shadow-md border-0">Increment</button>
                <button onClick={handleres} className="px-4 bg-teal-700 py-2 text-2xl rounded hover:bg-teal-600 text-white font-bold shadow-md border-0">Reset</button>
                <button onClick={handledec} className="px-4 bg-teal-700 py-2 text-2xl rounded hover:bg-teal-600 text-white font-bold shadow-md border-0">Decrement</button>

             </main>
          </section>
    </div>
  )
};

export default UseState1;