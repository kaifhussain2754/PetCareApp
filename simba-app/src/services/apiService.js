const handleResponse = async (response) => {
    const contentType = response.headers.get('Content-Type');
    if (!response.ok) {
      if (contentType && contentType.includes('application/json')) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Something went wrong');
      } else {
        const errorText = await response.text();
        throw new Error(`Server error: ${errorText}`);
      }
    }
    return response.json();
  };
  

// src/services/apiService.js
export * from '../api/todosApi';
export * from '../api/expensesApi';
export * from '../api/careRecordsApi';
export * from '../api/remindersApi';
