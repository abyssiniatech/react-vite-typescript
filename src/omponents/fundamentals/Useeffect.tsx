// fetch data from api and display it using useeffect hook
import { useEffect } from "react";
import { useState } from "react";
const Useeffect = () => {
    // create  usestate hook to store data
    const [data, setData] = useState<{ id: number; title: string; body: string }[]>([]);
        useEffect(() => {
            fetch("https://jsonplaceholder.typicode.com/posts")
                .then(response => response.json())
                .then(data => {
                    // Update state with fetched data
                    console.log(data);
                    setData(data);
                });
        }, []);
  return (
    <div className="border border-gray-400 text-center m-4 p-4 w-100">
        <h1 className="border border-gray-300 text-3xl">Posts</h1>
        {data.map(post => (
            <div key={post.id} className="border border-gray-200 m-2 p-2">
                <h2 className="border border-gray-300">{post.title}</h2>
                <p className="border border-gray-300">{post.body}</p>
            </div>
        ))}
    </div>
  )
};

export default Useeffect;