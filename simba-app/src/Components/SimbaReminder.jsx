// SimbaReminder.jsx
import React, { useState } from 'react';

function SimbaReminder() {
  const [reminders, setReminders] = useState([]);
  const [form, setForm] = useState({ task: '', date: '', time: '', notes: '' });

  const addReminder = (e) => {
    e.preventDefault();
    setReminders([...reminders, form]);
    setForm({ task: '', date: '', time: '', notes: '' });
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Simba’s Reminder</h2>
      <form onSubmit={addReminder} style={{ marginBottom: '20px' }}>
        <div className="form-group">
          <label>Task</label>
          <input
            type="text"
            className="form-control"
            value={form.task}
            onChange={(e) => setForm({ ...form, task: e.target.value })}
            required
          />
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
        <div className="form-group">
          <label>Time</label>
          <input
            type="time"
            className="form-control"
            value={form.time}
            onChange={(e) => setForm({ ...form, time: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label>Notes</label>
          <textarea
            className="form-control"
            value={form.notes}
            onChange={(e) => setForm({ ...form, notes: e.target.value })}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary mt-2">Add Reminder</button>
      </form>
      <h3>Upcoming Reminders</h3>
      <ul className="list-group">
        {reminders.map((reminder, index) => (
          <li key={index} className="list-group-item">
            {reminder.task} - {reminder.date} {reminder.time} - {reminder.notes}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SimbaReminder;
