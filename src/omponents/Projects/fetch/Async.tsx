import  { useEffect,useState } from 'react';
const url="https://jsonplaceholder.typicode.com/posts";
const  Async = () => {
    interface Post {
        id: number;
        title: string;
        body: string;
    }
    
    const [posts, setPosts] = useState<Post[]>([]);
    useEffect(() =>{
        setTimeout(() => {
            // fetchData() with async await
            async function fetchData() {
                const response = await fetch(url);
                const data = await response.json();
                setPosts(data);
            }
            fetchData();
        }, 2000);
    })
    // async function fetchData() {}
  return (
    <div className='bg-black text-white font-bold font-serif'>
        {
            posts.map((post: Post) =>
                 <div key={post.id} className='bg-gray-500 border border-white mb-4'>
                    <ul>
                        <li className='bg-gray-700 border p-4 border-white rounded mb-2'>{post.id}</li>
                        <li className='bg-gray-700 border p-4 border-white rounded mb-2'>{post.body}</li>
                        <li className='bg-gray-700 border p-4 border-white rounded mb-2'>{post.title}</li>
                    </ul>
                  
                 </div>)
        }
    </div>
  )
};

export default Async;