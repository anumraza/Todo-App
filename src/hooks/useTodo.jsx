import { useState, useEffect } from 'react';

export const useTodo = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Repair the faucet", completed: false },
    { id: 2, title: "Write a letter", completed: false },
    { id: 3, title: "Buy groceries", completed: true }
  ]);

  const [completedTasks, setCompletedTasks] = useState(0);

  useEffect(() => {
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