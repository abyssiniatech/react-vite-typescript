
type PropsSurafel = {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

const Practice = ({count,setCount}:PropsSurafel ) => {
       const handleInc =()=>{
         setCount(count+1)
     }
  return (
    <div>
        <p>{count}</p>
        <button onClick={handleInc}>Increment</button>
    </div>
  )
};

export default Practice;