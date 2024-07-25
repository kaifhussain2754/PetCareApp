import React, { useState, useEffect } from 'react';
import { getTodos, createTodo } from '../api/todosApi'; // Adjust the import path as necessary

const ToDoList = () => {
    const [todos, setTodos] = useState([]);
    const [taskDescription, setTaskDescription] = useState('');
    const [completed, setCompleted] = useState(false);
    const [priority, setPriority] = useState('low'); // Default priority
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const fetchedTodos = await getTodos();
                setTodos(fetchedTodos);
            } catch (err) {
                setError('Error fetching todos');
                console.error(err);
            }
        };

        fetchTodos();
    }, []);

    const handleCreateTodo = async (e) => {
        e.preventDefault();
        try {
            const newTodo = {
                task_description: taskDescription,
                completed,
                priority
            };
            await createTodo(newTodo);
            setTodos(prevTodos => [...prevTodos, newTodo]);
            setTaskDescription('');
            setCompleted(false);
            setPriority('low');
        } catch (err) {
            setError('Error creating todo');
            console.error(err);
        }
    };

    return (
        <div>
            <h1>ToDo List</h1>
            {error && <p>{error}</p>}
            <form onSubmit={handleCreateTodo}>
                <div>
                    <label>
                        Task Description:
                        <input
                            type="text"
                            value={taskDescription}
                            onChange={(e) => setTaskDescription(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Completed:
                        <input
                            type="checkbox"
                            checked={completed}
                            onChange={() => setCompleted(!completed)}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Priority:
                        <select
                            value={priority}
                            onChange={(e) => setPriority(e.target.value)}
                        >
                            <option value="low">Low</option>
                            <option value="medium">Medium</option>
                            <option value="high">High</option>
                        </select>
                    </label>
                </div>
                <button type="submit">Add ToDo</button>
            </form>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        <p>{todo.task_description}</p>
                        <p>Completed: {todo.completed ? 'Yes' : 'No'}</p>
                        <p>Priority: {todo.priority}</p>
                        <p>Created At: {new Date(todo.created_at).toLocaleString()}</p>
                        <p>Updated At: {new Date(todo.updated_at).toLocaleString()}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ToDoList;
