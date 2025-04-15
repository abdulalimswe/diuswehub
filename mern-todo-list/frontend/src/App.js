import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.get('http://localhost:5000/api/todos');
      setTodos(response.data);
    } catch (error) {
      setError('Failed to fetch todos');
      console.error('Error fetching todos:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const addTodo = async () => {
    if (!newTodo.trim()) return;
    
    try {
      const response = await axios.post('http://localhost:5000/api/todos', {
        text: newTodo,
        completed: false
      });
      setTodos([...todos, response.data]);
      setNewTodo('');
    } catch (error) {
      setError('Failed to add todo');
      console.error('Error adding todo:', error);
    }
  };

  const toggleTodo = async (id) => {
    try {
      const todo = todos.find(t => t._id === id);
      const response = await axios.patch(`http://localhost:5000/api/todos/${id}`, {
        completed: !todo.completed
      });
      setTodos(todos.map(t => t._id === id ? response.data : t));
    } catch (error) {
      setError('Failed to update todo');
      console.error('Error updating todo:', error);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/todos/${id}`);
      setTodos(todos.filter(t => t._id !== id));
    } catch (error) {
      setError('Failed to delete todo');
      console.error('Error deleting todo:', error);
    }
  };

  return (
    <div className="dark-theme">
      <div className="todo-container">
        <h1 className="app-title">Todo List</h1>
        
        <div className="input-container">
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Enter Task..."
            onKeyPress={(e) => e.key === 'Enter' && addTodo()}
            className="todo-input"
          />
          <button onClick={addTodo} className="add-button">
            <span>Add</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <path fill="none" d="M0 0h24v24H0z"/>
              <path fill="currentColor" d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"/>
            </svg>
          </button>
        </div>

        {isLoading ? (
          <div className="loading">Loading...</div>
        ) : error ? (
          <div className="error-message">{error}</div>
        ) : (
          <ul className="todo-list">
            {todos.length === 0 ? (
              <li className="empty-state">No tasks yet. Add one above!</li>
            ) : (
              todos.map((todo) => (
                <li key={todo._id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
                  <label className="checkbox-container">
                    <input
                      type="checkbox"
                      checked={todo.completed}
                      onChange={() => toggleTodo(todo._id)}
                      className="hidden-checkbox"
                    />
                    <span className="custom-checkbox"></span>
                  </label>
                  <span className="todo-text">{todo.text}</span>
                  <button 
                    onClick={() => deleteTodo(todo._id)} 
                    className="delete-button"
                    aria-label="Delete task"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
                      <path fill="none" d="M0 0h24v24H0z"/>
                      <path fill="currentColor" d="M17 6h5v2h-2v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3zm1 2H6v12h12V8zm-9 3h2v6H9v-6zm4 0h2v6h-2v-6zM9 4v2h6V4H9z"/>
                    </svg>
                  </button>
                </li>
              ))
            )}
          </ul>
        )}

        {todos.length > 0 && (
          <div className="todo-stats">
            <span>{todos.filter(t => t.completed).length} of {todos.length} tasks completed</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;