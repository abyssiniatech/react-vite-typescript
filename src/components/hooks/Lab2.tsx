import { useState } from "react";

const student=[
  {name:"surafel",age:23,department:"computer science"},
  {name:"Abel",age:63,department:"Software engineer"},
  {name:"Natan",age:23,department:"electrical engineer"},
  {name:"Aster",age:43,department:"Animal science"},
]

const Lab2 = () => {
  const [anaimal,setAnimal] = useState(student);
  const handle=()=>{
         console.log("welcome to my channel")
  }
  return (
    <div className="bg-gray-100 flex flex-col items-center gap-4 border-gray-500">
        {
          anaimal.map((list,index)=>{
            return(
               <div key={index} className="bg-indigo-800 text-white border-gray-400 p-4">
                 <h1>{list.name}</h1>
                 <h1>{list.age}</h1>
                 <h1>{list.department}</h1>
               </div>
            )
          })
        }
        <button onClick={handle} className="bg-green-800 text-white rounded ">Add</button>
    </div>
  )
};

export default Lab2;