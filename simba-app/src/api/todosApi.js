const API_URL = 'http://localhost:5000/api/todos';

const handleResponse = async (response) => {
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Something went wrong');
  }
  return response.json();
};

export const getTodos = async () => {
  try {
    const response = await fetch(API_URL);
    return handleResponse(response);
  } catch (error) {
    console.error('Error fetching todos:', error);
    throw error;
  }
};

export const getTodoById = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`);
    return handleResponse(response);
  } catch (error) {
    console.error(`Error fetching todo with id ${id}:`, error);
    throw error;
  }
};

export const createTodo = async (todo) => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(todo),
    });
    return handleResponse(response);
  } catch (error) {
    console.error('Error creating todo:', error);
    throw error;
  }
};

export const updateTodo = async (id, todo) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(todo),
    });
    return handleResponse(response);
  } catch (error) {
    console.error(`Error updating todo with id ${id}:`, error);
    throw error;
  }
};

export const deleteTodo = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    return handleResponse(response);
  } catch (error) {
    console.error(`Error deleting todo with id ${id}:`, error);
    throw error;
  }
};
