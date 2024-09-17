import React from 'react';
import { ListItem, Checkbox, IconButton, ListItemText } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import './TodoItem.css';

const TodoItem = ({ task, toggleTask, deleteTask }) => {
  return (
    <ListItem className='list-item'
      secondaryAction={
        <IconButton edge="end" aria-label="delete" onClick={() => deleteTask(task.id)}>
          <DeleteIcon />
        </IconButton>
      }
    >
      <Checkbox 
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
      />
      <ListItemText 
        primary={task.title} 
        className={task.completed ? 'completed' : ''}
      />
    </ListItem>
  );
};

export default TodoItem;