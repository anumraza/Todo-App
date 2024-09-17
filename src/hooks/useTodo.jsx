import { useState, useEffect } from 'react';

export const useTodo = () => {
  const [tasks, setTasks] = useState([]); // Start with an empty array

  const [completedTasks, setCompletedTasks] = useState(0);

  useEffect(() => {
    // Calculate the number of completed tasks whenever `tasks` changes
    const completedCount = tasks.filter(task => task.completed).length;
    setCompletedTasks(completedCount);
  }, [tasks]);

  const addTask = (title) => {
    setTasks([...tasks, { id: Date.now(), title, completed: false }]);
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => task.id === id 
      ? { ...task, completed: !task.completed } 
      : task));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return { tasks, completedTasks, addTask, toggleTask, deleteTask };
};
