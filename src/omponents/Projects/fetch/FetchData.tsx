
import { useState ,useEffect } from 'react';


const FetchData = () => {
    const [data, setData] = useState<{ id: number; title: string; url: string, thumbnailUrl: string }[]>([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos/')
            .then(response => response.json())
            .then((data) => {
                const slicedData = data.slice(0, 100);
                setData(slicedData as { id: number; title: string; url: string; thumbnailUrl: string }[]);
                console.log(slicedData);
                setData(data as { id: number; title: string; url: string, thumbnailUrl: string }[]);
                console.log(data);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }, []);
    return (
    <div>
        <h2></h2>
        {data.map((post,index)=>(
            <div key={index}>
                <h2>{post.id}</h2>
                <h3>{post.title}</h3>
                <img src={post.url} alt={post.title} />
                <img src={post.thumbnailUrl} alt={post.title} />
            </div>
        ))}
    </div>
  )
};

export default FetchData;