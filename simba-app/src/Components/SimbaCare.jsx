// SimbaCare.jsx
import React, { useState } from 'react';

function SimbaCare() {
  const [careEntries, setCareEntries] = useState([]);
  const [form, setForm] = useState({ type: '', notes: '', date: '' });

  const addCareEntry = (e) => {
    e.preventDefault();
    setCareEntries([...careEntries, form]);
    setForm({ type: '', notes: '', date: '' });
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Simba’s Care</h2>
      <form onSubmit={addCareEntry} style={{ marginBottom: '20px' }}>
        <div className="form-group">
          <label>Type</label>
          <input
            type="text"
            className="form-control"
            value={form.type}
            onChange={(e) => setForm({ ...form, type: e.target.value })}
            required
          />
        </div>
        <div className="form-group">
          <label>Notes</label>
          <textarea
            className="form-control"
            value={form.notes}
            onChange={(e) => setForm({ ...form, notes: e.target.value })}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label>Date</label>
          <input
            type="date"
            className="form-control"
            value={form.date}
            onChange={(e) => setForm({ ...form, date: e.target.value })}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary mt-2">Add Care Entry</button>
      </form>
      <h3>Care History</h3>
      <ul className="list-group">
        {careEntries.map((entry, index) => (
          <li key={index} className="list-group-item">
            {entry.type} - {entry.notes} - {entry.date}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SimbaCare;
