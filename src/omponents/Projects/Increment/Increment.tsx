
import { useState } from "react";

const Increment: React.FC = () => {
  const [value, setValue] = useState<number>(0);

  const increment = (): void => {
    setValue(prev => prev + 1);
  };

  const decrement = (): void => {
    setValue(prev => prev - 1);
  };

  const reset = (): void => {
    setValue(0);
  };

  return (
    <div className="bg-indigo-900 text-white h-screen flex justify-center items-center">
      <section>
        <button
          className="bg-green-700 rounded px-8 py-4 text-3xl m-4 hover:bg-green-500"
          onClick={decrement}
        >
          Decrement
        </button>

        <button
          className="bg-green-700 rounded px-8 py-4 text-3xl m-4 hover:bg-green-500"
          onClick={reset}
        >
          Reset
        </button>

        <span className="font-bold text-3xl text-orange-300 mx-4">
          {value}
        </span>

        <button
          className="bg-green-700 rounded px-8 py-4 text-3xl m-4 hover:bg-green-500"
          onClick={increment}
        >
          Increment
        </button>

        <button className="btn btn-info px-4 py-2 rounded text-3xl">
          <i className="fa-solid fa-house"></i> Info
        </button>
      </section>
    </div>
  );
};

export default Increment;
