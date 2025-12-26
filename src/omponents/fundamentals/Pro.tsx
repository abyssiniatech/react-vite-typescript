import { useState } from "react";

type typePro = {
    name:string,
    age: number;
}

const Pro = ({name,age} :typePro) => {
    const [info,setInfo] =useState(true)
     const handle =() =>{
        setInfo (info => !info)
        alert("welcome to my channel")
     }
  return (
    <div>
        {
            info && (
                <div>
                  <h1>{name}</h1>
                  <h1>{age}</h1>
                </div>
            )

        }
        <button onClick={handle} className="btn btn-primary">{info ? "hide" :"show"}</button>
        
    </div>
  )
};

export default Pro;