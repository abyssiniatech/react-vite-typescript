import { useState } from "react";
const  info={
    name:"surafel",
    age:23,
    email:"suraf@gmail.com"
}
const Objects = () => {
    const [obj,setObj]=useState(info);
    const dis=false
    const handleObj =()=>{
        setObj({...obj,name:"abel",age:23,email:"abel@gmail.com"})
    }
  return (
    <div className="bg-indigo-800 text-2xl text-white text-center rounded w-100 m-auto">
      {
       dis ? (
        <div>

            <p >My name is :<span className="bg-gray-50 text-pink-800">{obj.name}</span> </p>
            <p > i am <span className="bg-gray-50 text-pink-800">{obj.age}</span> years old</p>
            <p > my  email is <span className="bg-gray-50 text-pink-800">{obj.email}</span></p>
          <button className="bg-green-900 p-4 mt-10 text-white " onClick={handleObj}>Onclick</button>
        </div>
    )
        : <h1>No components are renderd</h1>
        
      }
    </div>
  )
};

export default Objects;