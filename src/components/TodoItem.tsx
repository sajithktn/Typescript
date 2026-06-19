import type { Todo } from "../types/Todo";

type TodoItemProps = {
    todo: Todo;
    deleteTodo: (id: number) => void;
    toggleComplete: (id: number) => void;
};

function TodoItem({
    todo,
    deleteTodo,
    toggleComplete,
}: TodoItemProps) {
    return(
        <div>
            <span
            style ={{
                textDecoration: todo.completed
                ? "line-through"
                : "none",
            }}
            >
                {todo.text}
            </span>

            <button 
            onClick={() => 
                toggleComplete(todo.id)
            }
            >
                Complete
            </button>

            <button
            onClick={() => 
                deleteTodo(todo.id)
            }
            >
                Delete
            </button>
        </div>
    );
}

export default TodoItem;