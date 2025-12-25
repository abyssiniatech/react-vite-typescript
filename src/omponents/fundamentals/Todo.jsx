import { useState } from "react";


const Todo = () => {
    const [todo,setTodo] =useState("")
    const [tods,setTodos] =useState([])
   
    const handlesubmit =(e) =>{
      e.preventDefault();
      setTodos([...tods,...todo])
    }
     const handleChange =(e)=>{
      setTodo(e.target.value)
    }
  return (
    <div className="bg-indigo-800 text-white bold  w-100 border-2 border-amber-900 p-4 rounded">
         <form onSubmit={handlesubmit} className="flex gap-4  justify-center items-center">
            <input className="bg-white text-gray-600 px-4 rounded py-3" type="text" onChange={handleChange}  />
            <button  className="bg-green-700 px-4 py-2 rounded text-3xl font-bold ">Add</button>
        </form>
        {
          tods.map((list)=>{
            (
              <ul className="bg-white text-blue rounded p-4 m-2">
                <li  key={list.id}>{list}{console.log("hello")}</li>
              </ul>
            )
          })
        }
    </div>
  )
}
export default Todo;