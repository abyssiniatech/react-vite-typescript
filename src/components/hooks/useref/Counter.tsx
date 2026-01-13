import { useRef } from "react";

const Counter = () => {
  const counterRef = useRef<number>(0);

  const handleInc = () => {
    counterRef.current += 1;
    console.log(counterRef.current); // you WILL see it change
  };

  return (
    <div>
      <p>Counter (check console)</p>
      <button className="bg-blue-700 px-4 py-2 text-white rounded text-3xl text-center font-bold" onClick={handleInc}>Increment</button>
    </div>
  );
};

export default Counter;
