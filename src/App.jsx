import "./App.css";
import { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text, date, priority) => {
    const newTask = {
      id: crypto.randomUUID(),
      text,
      completed: false,
      date,
      priority
    };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const deleteAll = () => {
    setTasks([])
  }

  const completedCount = tasks.filter(task => task.completed).length
  const pendingCount = tasks.filter(task => !(task.completed)).length

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center px-4 py-10">
      <h1 className="text-4xl font-bold mb-4">Task List</h1>
      <div className="flex justify-between text-l text-gray-400">
      <span className="p-1">Total tasks completed: {completedCount}</span>
      <span className="p-1">Total tasks pending: {pendingCount}</span>
      </div>
      <TaskForm onAdd={addTask} />
      <TaskList tasks={tasks} onDelete={deleteTask} onToggle={toggleTask} onDeleteAll={deleteAll}/>
    </div>
  );
}

export default App;
