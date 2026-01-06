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
      <button onClick={handleInc}>Increment</button>
    </div>
  );
};

export default Counter;
