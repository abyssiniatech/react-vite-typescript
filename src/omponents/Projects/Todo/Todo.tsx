import { useState, type ChangeEvent, type FormEvent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faPlus,
  faPen,
  faTrash,
  faSave,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

type TodoItem = {
  id: number;
  text: string;
};

const Todo: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [editId, setEditId] = useState<number | null>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (!todo.trim()) return;

    if (editId !== null) {
      // UPDATE
      setTodos(prev =>
        prev.map(item =>
          item.id === editId ? { ...item, text: todo } : item
        )
      );
      setEditId(null);
    } else {
      // CREATE
      setTodos(prev => [
        ...prev,
        { id: Date.now(), text: todo },
      ]);
    }

    setTodo("");
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setTodo(e.target.value);
  };

  const handleEdit = (item: TodoItem): void => {
    setTodo(item.text);
    setEditId(item.id);
  };

  const handleDelete = (id: number): void => {
    setTodos(prev => prev.filter(item => item.id !== id));
  };

  const cancelEdit = (): void => {
    setEditId(null);
    setTodo("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 to-purple-900 flex items-center justify-center p-4">
      <section className="bg-white w-full max-w-2xl rounded-xl shadow-xl p-6">
        <h1 className="text-3xl text-bg-primary rounded flex justify-center items-center text-light font-bold text-center text-indigo-700 mb-6">
           Todo APP
        </h1>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="flex gap-3">
          <input
            value={todo}
            onChange={handleChange}
            placeholder="Add or update a task..."
            className="flex-1 px-4 py-3 border rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <button
            type="submit"
            className={`px-5 py-3 rounded-lg text-white text-lg flex items-center gap-2 ${
              editId !== null
                ? "bg-green-600 hover:bg-green-700"
                : "bg-indigo-600 hover:bg-indigo-700"
            }`}
          >
            <FontAwesomeIcon icon={editId !== null ? faSave : faPlus} />
            {editId !== null ? "Save" : "Add"}
          </button>

          {editId !== null && (
            <button
              type="button"
              onClick={cancelEdit}
              className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-3 rounded-lg"
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>
             
          )}
        </form>

        {/* LIST */}
        <ul className="mt-6 space-y-3">
          {todos.map(item => (
            <li
              key={item.id}
              className="flex justify-between items-center bg-gray-100 px-4 py-3 rounded-lg shadow-sm mt-2"
            >
              <span className="text-lg text-gray-800">
                {item.text}
              </span>

              <div className="flex gap-3">
                <button
                  onClick={() => handleEdit(item)}
                  className="text-blue-600 hover:text-blue-800"
                >
                  <FontAwesomeIcon icon={faPen} />
                </button>

                <button
                  onClick={() => handleDelete(item.id)}
                  className="text-red-600 hover:text-red-800"
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
            </li>
          ))}
        </ul>

        {todos.length === 0 && (
          <p className="text-center text-gray-400 mt-6">
            No todos yet. Add one 👆
          </p>
        )}
        <footer className="flex justify-center items-center mt-14">
            <p className="">Surafel | {new Date().getFullYear()}&copy;</p>
        </footer>
      </section>
    </div>
  );
};

export default Todo;
