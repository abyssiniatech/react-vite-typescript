import { useState } from "react";


const Counter = () => {
  const [count, setCount] = useState<number>(0);
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<number | null>(null);
  const [sura,setSura] = useState<string>("");

  return (
    <div className="p-6 text-center">
        <p>Sura: {sura}</p>
      <h1 className="text-2xl font-bold">Count: {count}</h1>
      <p>Name: {name}</p>

      <button
        onClick={() => setCount(count + 1)}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
      >
        Increment

      <button className="bg-indigo-900 text-white px-4 py-2 rounded mt-4" onClick={() =>setCount(count-1)}>
         Decrement
      </button>

      {/* reset logic  with jsx element*/}

      <button className="bg-red-500 text-white px-4 py-2 rounded mt-4" onClick={() => setCount(0)}>
        Reset
      </button>
       {/* input jsx with logic */}
        <div className="mt-4">
       </div>
        <input  className="border border-gray-400 max-w-full"
        type="string"
          value={name}
          onChange={(e) => setName(String(e.target.value))}
        />


        {/* date of birth input */}
        <div className="mt-4">
             <label htmlFor="age">Enter your date of birth</label>
            <input type="date" id="age" className="border border-gray-400 max-w-full" />
        </div>
          {/* calculate age logic */}
            <button className="bg-green-500 text-white px-4 py-2 rounded mt-4" onClick={() => {
              const ageInput = document.getElementById("age") as HTMLInputElement;
              if (ageInput && ageInput.value) {
                const birthDate = new Date(ageInput.value);
                const today = new Date();
                const monthDiff = today.getMonth() - birthDate.getMonth();
                const calculatedAge = today.getFullYear() - birthDate.getFullYear() - 
                  (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate()) ? 1 : 0);
                setAge(calculatedAge);
              }
            }}>
              Calculate Age
            </button>
            {age !== null && <p>Your age is: {age}</p>}
            </button>



            {/* age */}
            <div className="mt-2 p-4">
                <input className="border border-gray-400 max-w-full" type="number" placeholder="Enter your age" onChange={(e) => setSura(String(e.target.value))} />
            </div>
    </div>
  );
};

export default Counter;
