import React, { useState } from "react";
import useTodoStore from "../store";
import "../App.css";

const TodoList = () => {
    const [inputValue, setInputValue] = useState('');
    const [editId, setEditId] = useState(null);
    const [editValue, setEditValue] = useState('');
    const { todos, addTodo, toggleTodo, deleteTodo, updateTodo } = useTodoStore();
  
    const handleAddTodo = () => {
      if (inputValue.trim()) {
        addTodo(inputValue);
        setInputValue('');
      }
    };
  
    const handleEditTodo = (id, text) => {
      setEditId(id);
      setEditValue(text);
    };
  
    const handleUpdateTodo = () => {
      if (editValue.trim()) {
        updateTodo(editId, editValue);  // Update the todo item
        setEditId(null);                // Reset the edit ID to close the edit mode
        setEditValue('');               // Clear the input field after updating
      }
    };
  
    return (
      <div className="app-container">
        <h1>To-Do List</h1>
        <div className="input-container">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Add a new task..."
            className="input-field"
          />
          <button onClick={handleAddTodo} className="add-btn">Add</button>
        </div>
        <ul className="todo-list">
          {todos.map((todo) => (
            <li key={todo.id} className="todo-item">
              {editId === todo.id ? (
                <div className="edit-container">
                  <input
                    type="text"
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                    className="edit-field"
                  />
                  <button onClick={handleUpdateTodo} className="update-btn">Update</button>
                </div>
              ) : (
                <>
                  <span
                    className={`todo-text ${todo.completed ? 'completed' : ''}`}
                    onClick={() => toggleTodo(todo.id)}
                  >
                    {todo.text}
                  </span>
                  <div className="todo-actions">
                    <button onClick={() => handleEditTodo(todo.id, todo.text)} className="edit-btn">Edit</button>
                    <button onClick={() => deleteTodo(todo.id)} className="delete-btn">Delete</button>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    );
};

export default TodoList;
