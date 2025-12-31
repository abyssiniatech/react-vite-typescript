
import { useState } from "react";
import type { TodoAppTypes } from "./Types";

const TodoApp = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<TodoAppTypes[]>([]);
  const [editId, setEditId] = useState<number | null>(null);

  // Input change
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  // Add or Update Todo
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!todo.trim()) return;

    if (editId !== null) {
      // Update existing
      setTodos((prev) =>
        prev.map((item) =>
          item.id === editId ? { ...item, title: todo } : item
        )
      );
      setEditId(null);
    } else {
      // Add new
      const newTodo:TodoAppTypes = {
          id: Date.now(),
          title: todo,
          completed: false,
          todo: "",
          todos: "",
          event: "",
          handleInput: function (): void {
              throw new Error("Function not implemented.");
          },
          handleSubmit: function (): void {
              throw new Error("Function not implemented.");
          },
          setTodos: function (): void {
              throw new Error("Function not implemented.");
          },
          setTodo: function (): void {
              throw new Error("Function not implemented.");
          }
      };
      setTodos([...todos, newTodo]);
    }

    setTodo("");
  };

  // Delete Todo
  const handleDelete = (id: number) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };

  // Edit Todo
  const handleEdit = (todo: TodoAppTypes) => {
    setTodo(todo.title);
    setEditId(todo.id);
  };

  // Toggle Completed
  const handleComplete = (id: number) => {
    setTodos((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  return (
    <div className="bg-indigo-800 min-h-screen text-white p-6">
      <h1 className="text- text-center font-bold mb-4">Todo App</h1>
      <form onSubmit={handleSubmit} className="flex gap-2 text-white text-2xl mb-4">
        <input
          type="text"
          value={todo}
          onChange={handleInput}
          placeholder="Add Your todo..."
          className="flex-1 p-2 rounded text-white"
        />
        <button
          type="submit"
          className="bg-green-500 px-4 py-2 rounded hover:bg-green-600"
        >
          {editId !== null ? "Update" : "Add"}
        </button>
      </form>

      <ul className="space-y-2">
        {todos.map((item) => (
          <li
            key={item.id}
            className={`flex justify-between items-center p-3 rounded  text-2xl ${
              item.completed ? "bg-gray-500 line-through" : "bg-indigo-600"
            }`}
          >
            <span>{item.title}</span>
            <div className="flex gap-2">
              <button
                onClick={() => handleComplete(item.id)}
                className="bg-yellow-400 px-2 py-1 rounded hover:bg-yellow-500"
              >
                {item.completed ? "Undo" : "Done"}
              </button>
              <button
                onClick={() => handleEdit(item)}
                className="bg-blue-400 px-2 py-1 rounded hover:bg-blue-500"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(item.id)}
                className="bg-red-500 px-2 py-1 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
