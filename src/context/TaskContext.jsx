import { createContext, useState, useEffect } from "react";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text, date, priority) => {
    setTasks([
      ...tasks,
      { id: crypto.randomUUID(), text, date, priority, completed: false, },
    ]);
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const deleteAll = () => {
    setTasks([])
  }


  return (
    <TaskContext.Provider value={{ tasks, addTask, deleteTask, toggleTask, deleteAll }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContext;
