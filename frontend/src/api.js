const API_URL = "http://localhost:8000/api/todos";

export const fetchTodos = async () => {
    const response = await fetch(API_URL);
    return response.json();
};

export const addTodoRequest = async (text) => {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
    });
    return response.json();
};

export const removeTodoRequest = async (id) => {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
};