function TodoItem({ todo, removeTodo }) {
    return (
        <li>
            {todo.text} <button onClick={() => removeTodo(todo.id)}>X</button>
        </li>
    );
}

export default TodoItem;