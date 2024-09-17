
import React, { useState } from 'react';
import { List } from '@mui/material';
import TodoItem from './TodoItem';
import ConfirmationPrompt from './ConfirmationPrompt';

const TodoList = ({ tasks, toggleTask, deleteTask }) => {
  const [showModal, setShowModal] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState(null);

  // Handle the delete button click
  const handleDeleteClick = (id) => {
    setTaskToDelete(id);  
    setShowModal(true);   
  };

  // Confirm delete action
  const handleConfirmDelete = () => {
    deleteTask(taskToDelete);  
    setShowModal(false);       
  };

  // Cancel delete action
  const handleCancelDelete = () => {
    setShowModal(false);  
  };

  return (
    <>
      <List className="list-todo">
        {tasks.map(task => (
          <TodoItem 
            key={task.id} 
            task={task} 
            toggleTask={toggleTask} 
            deleteTask={() => handleDeleteClick(task.id)} 
          />
        ))}
      </List>

      <ConfirmationPrompt
        show={showModal}
        onConfirm={handleConfirmDelete}
        onCancel={handleCancelDelete}
        message="Are you sure you want to delete this task?"
      />
    </>
  );
};

export default TodoList;