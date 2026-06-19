import TodoItem from "./TodoItem";
import type { Todo } from "../types/Todo";


type TodoListProps = {
    todos: Todo[];
    deleteTodo: (id: number) => void;
    toggleComplete: (id: number) => void;
};


function TodoList({
    todos,
    deleteTodo,
    toggleComplete,
}: TodoListProps) {
    return(
        <>
        {todos.map((todo) => (
            <TodoItem
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            toggleComplete={toggleComplete}
            />
        ))}
        </>
    );
}

export default TodoList;