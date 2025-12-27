
import { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState<{id: number, name: string}[]>([]);
  useEffect(() => {
    setTimeout(async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setData(data);
    }, 1000);
  }, []);
  return <div className="bg-indigo-800 min-h-screen text-white p-10">
       <h1 className="text-2xl text-center">User list</h1>
       {

        data.map((user: {id: number, name: string}) => (
          <p className="border border-gray-400 flex flex-col align-items-center rounded p-4 justify-center hover:bg-indigo-700" key={user.id}>{user.name}</p>
        ))
       }
  </div>;
};

export default App;
