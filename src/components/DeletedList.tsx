import type { Todo } from "../types/Todo";

type DeletedListProps = {
    deleteTodos: Todo[];
};

function DeletedList({
    deleteTodos,
}: DeletedListProps) {
    return (
        <>
        <h2>Deleted Todos</h2>

        {deleteTodos.map((todo) =>(
            <div key={todo.id}>
                {todo.text}
            </div>
        ))}
        </>
    );
}

export default DeletedList;