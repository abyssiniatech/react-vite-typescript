import { useState } from "react";

const TodoWithTypescript = () => {
    // Component logic will go here
    const [todo,setTodo] = useState<string>("");
    const [todos,setTodos] = useState<string[]>([]);
     const handleSubmit = (e:React.FormEvent) => {
            e.preventDefault();
            setTodos([...todos,todo]);
      };
     const handleInput = (e:React.ChangeEvent<HTMLInputElement>) => {
            setTodo(e.target.value);
      };


    //   delete function will go here
    const handleDelete = (index:number) => {
        setTodos(todos.filter((_,i) => i !== index));
    };

    // update function will go here
    const handleUpdate = (index:number, updatedTodo:string) => {
        const updatedTodos = todos.map((t,i) => i === index ? updatedTodo : t);
        setTodos(updatedTodos);
    };

    // save logic will go here
   


  return (
     

    <div className="h-screen flex justify-center items-center bg-gray-100 p-12">
         <section className="bg-white p-12  rounded shadow-md w-full max-w-md">
            <form className="mt-2 flex flex-col items-center" onSubmit={handleSubmit}>
                <h2 className="text-2xl font-bold mb-4 text-center">Todo List</h2>
                <input onChange={handleInput} type="text" placeholder="Enter todo" className="border border-gray-400 px-2 py-1 mr-2 w-full" />
                <button type="submit" className="bg-blue-500 w-full text-white px-4 py-2 rounded m-2">Add Todo</button>
            </form>
              {
                todos.map((t,index) => (
                    <div key={index} className="bg-gray-200 p-2 rounded my-2">
                        {t}
                         
                        <button onClick={() => handleDelete(index)} className="bg-red-500 text-white px-2 py-1 rounded ml-4">Delete</button>
                        <button onClick={() => handleUpdate(index, t)} className="bg-green-500 text-white px-2 py-1 rounded ml-4">Update</button>
                    </div>
                ))
              }
         </section>
    </div>
  )
};

export default TodoWithTypescript;