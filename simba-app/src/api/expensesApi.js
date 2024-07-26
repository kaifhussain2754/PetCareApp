// src/api/expenseApi.js
import axios from 'axios';

// Get the base URL from the environment variable
const API_URL = import.meta.env.VITE_APP_API_EXPENSE_URL;

export const getExpenses = async () => {
  try {
    const response = await axios.get(API_URL); // Full URL includes the endpoint path
    return response.data;
  } catch (error) {
    console.error('Error fetching expenses:', error);
    throw error;
  }
};

export const addExpense = async (expense) => {
  try {
    const response = await axios.post(API_URL, expense); // Full URL includes the endpoint path
    return response.data;
  } catch (error) {
    console.error('Error adding expense:', error);
    throw error;
  }
};

export const updateExpense = async (id, updatedExpense) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, updatedExpense); // Append the ID to the URL
    return response.data;
  } catch (error) {
    console.error('Error updating expense:', error);
    throw error;
  }
};

export const deleteExpense = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`); // Append the ID to the URL
    return response.data;
  } catch (error) {
    console.error('Error deleting expense:', error);
    throw error;
  }
};

export const getExpenseById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`); // Append the ID to the URL
    return response.data;
  } catch (error) {
    console.error('Error fetching expense by ID:', error);
    throw error;
  }
};
