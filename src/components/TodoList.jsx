import React from 'react';
import { List } from '@mui/material';
import TodoItem from './TodoItem';

const TodoList = ({ tasks, toggleTask, deleteTask }) => {
  return (
    <List className='list-todo'>
      {tasks.map(task => (
        <TodoItem 
          key={task.id} 
          task={task} 
          toggleTask={toggleTask} 
          deleteTask={deleteTask}
        />
      ))}
    </List>
  );
};

export default TodoList;



