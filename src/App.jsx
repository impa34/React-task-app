import "./App.css";
import TaskCounter from "./components/TaskCounter";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import {TaskProvider} from './context/TaskContext'  

function App() {

  return (
    <TaskProvider>
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center px-4 py-10">
      <h1 className="text-4xl font-bold mb-4">Task List</h1>
      <TaskCounter />
      <TaskForm />
      <TaskList />
       </div>
    </TaskProvider>
  );
}

export default App;
