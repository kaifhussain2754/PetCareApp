import axios from 'axios';
import React, { useState } from 'react';

const OpenAIChat = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await axios.post('/api/openai', { prompt: input });
      setResponse(res.data.choices[0].text);
    } catch (error) {
      console.error('Error:', error);
      setError('Failed to fetch response from OpenAI.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message"
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Sending...' : 'Send'}
        </button>
      </form>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <div>
        <strong>Response:</strong> {response}
      </div>
    </div>
  );
};

export default OpenAIChat;
