import {useState,useEffect} from 'react'
type info = {
    userId:number;
    id:number;
    title:string;
    body:string;
   

}
const Fetch = () => {
    const [user,setUser] = useState<info[]>([])
    const [loading,setLoading] =useState<boolean>(true)
    useEffect(() =>{
         setTimeout(()=>{
            try{
             const fetchs = async()=>{
                const res= await fetch("https://jsonplaceholder.typicode.com/posts")
                const data = await res.json()
                setUser(data)
             }
             fetchs()
            }
            catch(error){
                console.log(error)
            }
         },1000)
    },[])
     if(!loading){
        return <h1>welcome</h1>
     }
  return (
    <div>
        {
         user.map((list,index)=>{
            return(
                <div key={index} className='bg-white m-2 p-4 rounded text-gray-900 text-2xl border border-gray-400 '>
                    <ul>
                        <li>{list.userId}</li>
                       
                        <li>{list.title}</li>
                        <li>{list.body}</li>
                    </ul>
                </div>
            )
         })
        }
    </div>
  )
};

export default Fetch;