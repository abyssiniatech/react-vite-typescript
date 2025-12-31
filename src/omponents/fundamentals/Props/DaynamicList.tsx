
import { useState } from "react";

const DaynamicList = () => {
 const [list,setList] =useState<string[]>(["css","javascript","node"])

    const addtoconsole =() =>{
      setList(list)
    }
  return (
    <div>
      {
        list.map((list,index) =>{
           return(
             <ul key={index}>
                <li>{list}</li>
                <button onClick={addtoconsole}>Add to console</button>
             </ul>
           )
        })
      }
    </div>
  )
};

export default DaynamicList;