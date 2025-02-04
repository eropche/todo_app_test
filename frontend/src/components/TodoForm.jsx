import { useState } from "react";

function TodoForm({ addTodo }) {
    const [text, setText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text.trim()) return;
        addTodo(text);
        setText("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input value={text} onChange={e => setText(e.target.value)} />
            <button type="submit">Add</button>
        </form>
    );
}

export default TodoForm;