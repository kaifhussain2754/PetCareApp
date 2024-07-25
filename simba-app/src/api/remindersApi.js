const API_URL = 'http://localhost:5000/api/reminders';

const handleResponse = async (response) => {
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Something went wrong');
  }
  return response.json();
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
    return handleResponse(response);
  } catch (error) {
    console.error(`Error deleting reminder with id ${id}:`, error);
    throw error;
  }
};
