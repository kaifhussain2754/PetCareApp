const API_URL = 'http://localhost:5000/api/care-records';

const handleResponse = async (response) => {
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Something went wrong');
  }
  return response.json();
};

export const getCareRecords = async () => {
  try {
    const response = await fetch(API_URL);
    return handleResponse(response);
  } catch (error) {
    console.error('Error fetching care records:', error);
    throw error;
  }
};

export const getCareRecordById = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`);
    return handleResponse(response);
  } catch (error) {
    console.error(`Error fetching care record with id ${id}:`, error);
    throw error;
  }
};

export const createCareRecord = async (careRecord) => {
  try {
    const response = await fetch(API_URL, {
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
    const response = await fetch(`${API_URL}/${id}`, {
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
    const response = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    return handleResponse(response);
  } catch (error) {
    console.error(`Error deleting care record with id ${id}:`, error);
    throw error;
  }
};
