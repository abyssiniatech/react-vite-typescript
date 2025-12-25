 
type PropsType = {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

const Props = ({ count, setCount }: PropsType) => {

  const increment = () => setCount((prev) => prev + 1);
  const Decrement =()=> setCount((prev) => prev-1);
  const Reset = () => setCount(0)

  return (
    <div className="flex flex-col gap-4 justify-center items-center h-screen">
         <section>
      <h1 className="text-3xl font-bold underline">Count App Using Props</h1>
         </section>
      <button
        className="bg-indigo-900 font-bold font-mono  text-white bold rounded px-4 py-2"
        onClick={Decrement}>
        Decrement <span>{count}</span>
      </button>
         <button
        className="bg-indigo-900 font-bold font-mono  text-white bold rounded px-4 py-2"
        onClick={Reset}>
        Reset <span>{count}</span>
      </button>
         <button
        className="bg-indigo-900 font-bold font-mono  text-white bold rounded px-4 py-2"
        onClick={increment}>
        Increment <span>{count}</span>
      </button>
    </div>
  );
};

export default Props;
