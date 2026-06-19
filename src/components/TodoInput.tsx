import type { ChangeEvent } from "react";

type TodoInputProps = {
    text: string;
    setText: (value: string) => void;
    addTodo: () => void;
};

function TodoInput({
    text,
    setText,
    addTodo,
}: TodoInputProps) {
    return (
        <div>
            <input
            type="text"
            value={text}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setText(e.target.value)
            }
            placeholder="Enter Todo..."
            />


            <button onClick={addTodo}>
                Add
            </button>
        </div>
    );
}

export default TodoInput;