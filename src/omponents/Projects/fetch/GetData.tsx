// const url =https://jsonplaceholder.typicode.com/albums;

import { useEffect, useState } from "react";

const GetData = () => {
 const [data, setData] = useState<{ id: number; title: string }[]>([]);
   useEffect(() =>{
     setTimeout(() =>{
        fetch('https://jsonplaceholder.typicode.com/albums')
        .then((response) => response.json())
        .then((data) => setData(data as {id:number, title:string}[]))
        .catch((error) => console.error("Error fetching data:", error));
     },1000)
   },[])
  return (
    <div className="bg-black text-white p-10 m-2">
      {data.map((item) => (
        <div className="bg-gray-600 border border-white flex justify-between items-center p-8 w-full mb-4 rounded w-100 items-center" key={item.id}>
         <h2>{item.id}</h2>
         <p>{item.title}</p>
          </div>
      ))}
    </div>
  )
};

export default GetData;