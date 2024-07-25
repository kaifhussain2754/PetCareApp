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

// Care Records API functions
export const getCareRecords = async () => {
  try {
    const response = await fetch(`${API_URL}/care-records`);
    return handleResponse(response);
  } catch (error) {
    console.error('Error fetching care records:', error);
    throw error;
  }
};

export const getCareRecordById = async (id) => {
  try {
    const response = await fetch(`${API_URL}/care-records/${id}`);
    return handleResponse(response);
  } catch (error) {
    console.error(`Error fetching care record with id ${id}:`, error);
    throw error;
  }
};

export const createCareRecord = async (careRecord) => {
  try {
    const response = await fetch(`${API_URL}/care-records`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(careRecord),
    });
    return handleResponse(response);
  } catch (error) {
    console.error('Error creating care record:', error);
    throw error;
  }
};

export const updateCareRecord = async (id, careRecord) => {
  try {
    const response = await fetch(`${API_URL}/care-records/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(careRecord),
    });
    return handleResponse(response);
  } catch (error) {
    console.error(`Error updating care record with id ${id}:`, error);
    throw error;
  }
};

export const deleteCareRecord = async (id) => {
  try {
    const response = await fetch(`${API_URL}/care-records/${id}`, { method: 'DELETE' });
    return handleResponse(response);
  } catch (error) {
    console.error(`Error deleting care record with id ${id}:`, error);
    throw error;
  }
};

// Reminders API functions
export const getReminders = async () => {
  try {
    const response = await fetch(`${API_URL}/reminders`);
    return handleResponse(response);
  } catch (error) {
    console.error('Error fetching reminders:', error);
    throw error;
  }
};

export const getReminderById = async (id) => {
  try {
    const response = await fetch(`${API_URL}/reminders/${id}`);
    return handleResponse(response);
  } catch (error) {
    console.error(`Error fetching reminder with id ${id}:`, error);
    throw error;
  }
};

export const createReminder = async (reminder) => {
  try {
    const response = await fetch(`${API_URL}/reminders`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        reminder_name: reminder.reminder_name,
        reminder_date_time: reminder.reminder_date_time,
      }),
    });
    return handleResponse(response);
  } catch (error) {
    console.error('Error creating reminder:', error);
    throw error;
  }
};

export const updateReminder = async (id, reminder) => {
  try {
    const response = await fetch(`${API_URL}/reminders/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        reminder_name: reminder.reminder_name,
        reminder_date_time: reminder.reminder_date_time,
      }),
    });
    return handleResponse(response);
  } catch (error) {
    console.error(`Error updating reminder with id ${id}:`, error);
    throw error;
  }
};

export const deleteReminder = async (id) => {
  try {
    const response = await fetch(`${API_URL}/reminders/${id}`, { method: 'DELETE' });
    return handleResponse(response);
  } catch (error) {
    console.error(`Error deleting reminder with id ${id}:`, error);
    throw error;
  }
};
