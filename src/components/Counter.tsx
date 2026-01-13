import { useCounter } from "../context/useCounter";

const Counter = () => {
  const { count, increment, decrement, reset } = useCounter();
  
  return (
    <div style={{ textAlign: "center" }} className="h-screen flex justify-center items-center bg-gray-100 text-white">
      <section className="bg-blue-800 p-44 shadow-lg rounded-lg hover:bg-blue-600 text-white">
        <h2 className="text-6xl mb-8">Counter App </h2>
        <h1 className="w-16 h-16 bg-black text-center font-bold  p-4 text-3xl m-auto rounded-full flex justify-center items-center">{count}</h1>
        <button className="bg-teal-800 border-0 px-8 py-4 m-2 text-white font-bold  text-4xl rounded-md hover:bg-blue-700" onClick={increment}>+</button>
        <button className="bg-teal-800 border-0 px-8 py-4 m-2 text-white font-bold  text-4xl rounded-md hover:bg-blue-700" onClick={reset}>0</button>
        <button className="bg-teal-800 border-0 px-8 py-4 m-2 text-white font-bold  text-4xl rounded-md hover:bg-blue-700" onClick={decrement}>-</button>
      </section>
    </div>
  );
};

export default Counter;
