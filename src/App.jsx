import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import TodoList from './components/TodoList';
import ProgressBar from './components/ProgressBar';
import { useTodo } from './hooks/useTodo';
import './index.css';

const App = () => {
  const { tasks, completedTasks, addTask, toggleTask, deleteTask } = useTodo();
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim()) {
      addTask(newTask);
      setNewTask('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddTask();
    }
  };

  return (
    <Container className='main-container' maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        To-Do List
      </Typography>

      <ProgressBar completedTasks={completedTasks} totalTasks={tasks.length} />

      <TextField
        fullWidth
        variant="outlined"
        label="Add a new task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        onKeyPress={handleKeyPress}  
      />
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={handleAddTask}
        style={{ marginTop: '1rem' }}
      >
        Add Task
      </Button>

      <TodoList tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask} />
    </Container>
  );
};

export default App;