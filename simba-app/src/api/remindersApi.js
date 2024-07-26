// src/services/apiService.js
const API_URL = import.meta.env.VITE_APP_API_URL;

const handleResponse = async (response) => {
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || 'Something went wrong');
  }
  return response.json().catch(() => ({}));
};

export const getReminders = async () => {
  try {
    const response = await fetch(API_URL);
    return handleResponse(response);
  } catch (error) {
    console.error('Error fetching reminders:', error);
    throw error;
  }
};

export const getReminderById = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`);
    return handleResponse(response);
  } catch (error) {
    console.error(`Error fetching reminder with id ${id}:`, error);
    throw error;
  }
};

export const createReminder = async (reminder) => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(reminder),
    });
    return handleResponse(response);
  } catch (error) {
    console.error('Error creating reminder:', error);
    throw error;
  }
};

export const updateReminder = async (id, reminder) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(reminder),
    });
    return handleResponse(response);
  } catch (error) {
    console.error(`Error updating reminder with id ${id}:`, error);
    throw error;
  }
};

export const deleteReminder = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to delete reminder');
    }
    return response; // Return the raw response to check status in the frontend
  } catch (error) {
    console.error(`Error deleting reminder with id ${id}:`, error);
    throw error;
  }
};
