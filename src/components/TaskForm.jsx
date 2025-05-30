import { useState } from "react";
import {TaskContext} from '../context/TaskContext'
import {useContext} from 'react'

function TaskForm() {
  const [text, setText] = useState("");
  const [date, setDate] = useState("");
  const [priority, setPriority] = useState("");
  const {addTask} = useContext(TaskContext)

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() && date && priority) {
      addTask(text, date, priority);
      setText("");
      setDate("");
      setPriority("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-800 p-4 rounded-xl shadow-lg space-y-3">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="New task"
      className="w-full p-2 rounded bg-gray-900 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"></input>
      <input
        value={date}
        onChange={(e) => setDate(e.target.value)}
        type="date"
        className="w-full p-2 rounded bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      ></input>
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className="w-full p-2 rounded bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <button type="submit" className="bg-blue-600 w-full py-2 rounded text-white font-semibold hover:bg-blue-700 transition">Add</button>
    </form>
  );
}

export default TaskForm;
