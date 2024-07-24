const API_URL = 'http://localhost:5000/api';

const handleResponse = async (response) => {
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Something went wrong');
  }
  return response.json();
};

export const getExpenses = async () => {
  try {
    const response = await fetch(`${API_URL}/expenses`);
    return handleResponse(response);
  } catch (error) {
    console.error('Error fetching expenses:', error);
    throw error;
  }
};

export const getExpenseById = async (id) => {
  try {
    const response = await fetch(`${API_URL}/expenses/${id}`);
    return handleResponse(response);
  } catch (error) {
    console.error(`Error fetching expense with id ${id}:`, error);
    throw error;
  }
};

export const createExpense = async (expense) => {
  try {
    const response = await fetch(`${API_URL}/expenses`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(expense),
    });
    return handleResponse(response);
  } catch (error) {
    console.error('Error creating expense:', error);
    throw error;
  }
};

export const updateExpense = async (id, expense) => {
  try {
    const response = await fetch(`${API_URL}/expenses/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(expense),
    });
    return handleResponse(response);
  } catch (error) {
    console.error(`Error updating expense with id ${id}:`, error);
    throw error;
  }
};

export const deleteExpense = async (id) => {
  try {
    const response = await fetch(`${API_URL}/expenses/${id}`, { method: 'DELETE' });
    return handleResponse(response);
  } catch (error) {
    console.error(`Error deleting expense with id ${id}:`, error);
    throw error;
  }
};
