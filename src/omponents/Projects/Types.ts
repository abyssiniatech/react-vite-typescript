export type TodoAppTypes = {
  // type
  id: number;         // unique identifier
  title: string;      // todo text
  completed: boolean;  
  todo: string;
  todos: string;
  event: string;
  handleInput: () => void;
  handleSubmit: () => void;
  setTodos: React.Dispatch<React.SetStateAction<string[]>>;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
};
export type Todo = string;
