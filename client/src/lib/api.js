export async function getTodos() {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/api/todos`);
  const data = await response.json();
  return data;
} 

export async function addTodo(title, completed) {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/api/todos`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title, completed }),
  });
  return response.json();
}

export async function updateTodo(id, title, completed) {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/api/todos/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title, completed }),
  });
  return response.json();
}