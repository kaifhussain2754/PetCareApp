import React, { useEffect, useState } from 'react';
import { TextField, Button, Checkbox, FormControlLabel, Select, MenuItem } from '@mui/material';
import { getTodos, createTodo, updateTodo, deleteTodo } from '../services/apiService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from 'react-router-dom'; // Add this import
import '@fortawesome/fontawesome-free/css/all.min.css';

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <IconButton
      onClick={() => navigate(-1)}
      aria-label="back"
      style={{ position: 'absolute', top: '20px', left: '20px', color: '#ffffff' }}
    >
      <ArrowBackIcon />
    </IconButton>
  );
};

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('Low');
  const [inputFocus, setInputFocus] = useState(false);

  useEffect(() => {
    loadTodos();
  }, []);

  const loadTodos = async () => {
    try {
      const todos = await getTodos();
      setTodos(todos);
    } catch (error) {
      console.error('Error loading todos:', error);
    }
  };

  const handleAddTodo = async () => {
    try {
      const newTodo = { task_description: newTask, completed: false, priority };
      await createTodo(newTodo);
      setNewTask('');
      setPriority('Low');
      loadTodos();
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };

  const handleToggleComplete = async (id, completed) => {
    try {
      await updateTodo(id, { completed: !completed });
      loadTodos();
    } catch (error) {
      console.error('Error updating todo:', error);
    }
  };

  const handleDeleteTodo = async (id) => {
    try {
      await deleteTodo(id);
      loadTodos();
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  const sortedTodos = todos.sort((a, b) => {
    // Sort by priority first (High > Medium > Low)
    const priorityOrder = { High: 1, Medium: 2, Low: 3 };
    if (priorityOrder[a.priority] !== priorityOrder[b.priority]) {
      return priorityOrder[a.priority] - priorityOrder[b.priority];
    }
  
    // If priorities are the same, sort by completion status
    if (a.completed !== b.completed) {
      return a.completed - b.completed;
    }
  
    // Optionally, you can sort by creation date or any other criteria here
    return 0;
  });

  return (
    <div style={styles.container}>
      <BackButton />
      <h1 style={styles.title}>Todo List</h1>
      <div style={styles.formContainer}>
        <TextField
          label="New task"
          variant="outlined"
          fullWidth
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          style={{
            ...styles.input,
            borderColor: inputFocus ? '#ff6f61' : 'white',
          }}
          InputLabelProps={{ style: { color: '#ffffff' } }}
          inputProps={{ style: { color: '#ffffff' } }}
          onFocus={() => setInputFocus(true)}
          onBlur={() => setInputFocus(false)}
        />
        <Select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          variant="outlined"
          fullWidth
          style={styles.select}
          inputProps={{ style: { color: '#ffffff' } }}
        >
          <MenuItem value="" disabled>Select Priority</MenuItem>
          <MenuItem value="Low">Low</MenuItem>
          <MenuItem value="Medium">Medium</MenuItem>
          <MenuItem value="High">High</MenuItem>
        </Select>
        <Button
          variant="contained"
          style={{ backgroundColor: '#ff6f61', color: 'white' }}
          onClick={handleAddTodo}
          fullWidth
        >
          Add
        </Button>
      </div>
      <ul style={styles.listGroup}>
        {sortedTodos.map((todo) => (
          <li key={todo.id} style={styles.listItem}>
            <div style={styles.listItemContent}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={todo.completed}
                    onChange={() => handleToggleComplete(todo.id, todo.completed)}
                    style={{ color: '#ffffff' }}
                  />
                }
                label={
                  <span style={{ textDecoration: todo.completed ? 'line-through' : 'none', color: '#ffffff' }}>
                    {todo.task_description} - <strong>{todo.priority}</strong>
                  </span>
                }
              />
            </div>
            <Button
              variant="contained"
              style={{ backgroundColor: 'red', color: 'white' }}
              onClick={() => handleDeleteTodo(todo.id)}
            >
              <FontAwesomeIcon icon={faTrash} />
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '600px',
    margin: '20px auto',
    padding: '20px',
    background: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '10px',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    color: 'white',
    fontFamily: 'Arial, sans-serif',
    position: 'relative', // Added to position the back button correctly
  },
  title: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  formContainer: {
    marginBottom: '20px',
  },
  input: {
    marginBottom: '10px',
    borderColor: 'white',
  },
  select: {
    marginBottom: '10px',
    borderColor: 'white',
  },
  listGroup: {
    listStyleType: 'none',
    paddingLeft: '0',
  },
  listItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
    margin: '5px 0',
    background: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '5px',
  },
  listItemContent: {
    display: 'flex',
    alignItems: 'center',
  },
};

export default TodoList;
