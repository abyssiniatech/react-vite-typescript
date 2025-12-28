import {useEffect,useState} from 'react'


const UseEffect1 = () => {
    const [count,setCount] = useState<number>(0);

    useEffect(()=>{
        setTimeout(()=>{
             setCount(prev =>prev+1)
             console.log(`welcome to my channel:  ${count} times render the app`)
        },3000)
    },[count])
    const handlecount =():void=>{
               setCount(count+1)
            }
  return (
    <div className='bg-indigo-900 text-white h-screen flex items-center justify-center'>
      <button onClick={handlecount} className='btn btn-success'>Increment by: {count}</button>
    </div>
  )
};

export default UseEffect1;