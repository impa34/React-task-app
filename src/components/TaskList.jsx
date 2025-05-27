import TaskItem from "./TaskItem";

function TaskList({ tasks, onToggle, onDelete, onDeleteAll }) {
  return (
    <div>
      <button onClick={onDeleteAll} className="bg-red-700 hover:bg-red-800 text-white py-2 px-4 rounded mt-4 w-full transition">Delete All</button>
          <ul>
      {tasks.length === 0 && <li>No tasks</li>}
      {tasks.map(task=> (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
    </div>

  );
}

export default TaskList;
