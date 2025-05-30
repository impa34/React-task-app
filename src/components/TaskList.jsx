import {TaskContext} from '../context/TaskContext'
import {useContext} from 'react'
import TaskItem from './TaskItem'

function TaskList() {
  const { tasks, toggleTask, deleteTask, deleteAll } = useContext(TaskContext);

  return (
    <div>
      <button onClick={deleteAll} className="bg-red-700 hover:bg-red-800 text-white py-2 px-4 rounded mt-4 w-full transition">Delete All</button>
          <ul>
          {tasks.map((task) => (
        <TaskItem key={task.id} task={task} className="flex justify-between items-center p-2">
          <span className={`cursor-pointer ${task.completed ? "line-through" : ""}`}
          onClick={() => toggleTask(task.id)}>
            {task.text}
          </span>
          <button onClick={() => deleteTask(task.id)}>🗑</button>
        </TaskItem>
          ))
          }</ul>
    </div>

  );
}

export default TaskList;
