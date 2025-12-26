import  { useState , useEffect} from 'react';

const Useeffect = () => {
    const [data, setData] = useState<{ id: number; title: string; body: string }[]>([]);

    useEffect(() => {

        setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/posts')
                .then(response => response.json())
                .then(data => {
                    setData(data as { id: number; title: string; body: string }[]);
                });
        }, 1000);
    }, []);

    return (
        <div>
            <h2>Posts</h2>
            {data.map(post => (
                <div key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
    )
};
  

 
export default Useeffect;