import { useState, useEffect } from "react";
import { fetchTodos, addTodoRequest, removeTodoRequest } from "./api";

function App() {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState("");

    useEffect(() => {
        fetchTodos().then(setTodos);
    }, []);

    const addTodo = async () => {
        if (input.trim()) {
            const newTodo = await addTodoRequest(input.trim());
            setTodos((prevTodos) => [...prevTodos, newTodo]);
            setInput("");
        }
    };

    const removeTodo = async (id) => {
        await removeTodoRequest(id);
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
            <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
                <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">TODO List</h1>
                <div className="flex mb-4">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="border p-2 flex-grow rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Add a new task"
                    />
                    <button
                        onClick={addTodo}
                        className="ml-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md transition-all"
                    >
                        Add
                    </button>
                </div>
                <ul className="space-y-2">
                    {todos.map((todo) => (
                        <li
                            key={todo.id}
                            className="flex justify-between items-center p-3 bg-gray-50 rounded-lg shadow-md border"
                        >
                            <span className="text-gray-700">{todo.text}</span>
                            <button
                                onClick={() => removeTodo(todo.id)}
                                className="text-red-500 hover:text-red-600 transition-all"
                            >
                                ✖
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default App;