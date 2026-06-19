import { useState } from "react";

import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import DeletedList from "./components/DeletedList";

import type { Todo } from "./types/Todo";


function App() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [deleteTodos, setDeletedTodos] = useState<Todo[]>([]);

  function addTodo() {
    if (!text.trim()) return;

    const newTodo: Todo = {
      id: Date.now(),
      text,
      completed: false,
    };

    setTodos ((prev) => [...prev, newTodo]);
    setText("");
  }

  function deleteTodo(id: number) {
    const deletedItem = todos.find(
      (todo) => todo.id === id
    );

    if(deletedItem) {
      setDeletedTodos((prev) => [
        deletedItem,
        ...prev,
      ]);
    }

    setTodos((prev) => 
    prev.filter((todo) => todo.id !== id)
  );
  }


  function toggleComplete(id:number) {
    setTodos((prev) =>
    prev.map((todo) =>
    todo.id === id
    ? {
      ...todo,
      completed: !todo.completed,
    }
    : todo

  )
);
  }

  return (
    <div>
      <h1>Todo App</h1>

      <TodoInput
      text={text}
      setText={setText}
      addTodo={addTodo}
      />

      <TodoList
      todos={todos}
      deleteTodo={deleteTodo}
      toggleComplete={toggleComplete}
      />

      <DeletedList
      deleteTodos={deleteTodos}
      />
    </div>
  );
}

export default App;