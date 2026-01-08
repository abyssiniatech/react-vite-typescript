
import { useCounter } from "./useCounter";
const Counter = () => {
  const { count, setCount } = useCounter();

  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="text-2xl font-bold">Count: {count}</h1>

      <div className="flex gap-3">
        <button
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-green-600 text-white rounded"
        >
          +
        </button>

        <button
          onClick={() => setCount(count - 1)}
          className="px-4 py-2 bg-red-600 text-white rounded"
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Counter;
