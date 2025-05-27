function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li
      className={`p-2 my-2 rounded-xl mb-2 shadow-md flex justify-between items-start border-l-4 ${
        task.priority === "High"
          ? "border-red-500 bg-red-950"
          : task.priority === "Medium"
          ? "border-yellow-500 bg-yellow-900"
          : "border-green-500 bg-green-900"
      }`}
    >
      <div>
        <p
          className={`text-lg font-semibold ${
            task.completed ? "line-through text-gray-400" : ""
          }`}
        >
          {task.text}
        </p>
        <p className="text-sm text-gray-300">Date: {task.date}</p>
        <p className="text-sm text-gray-300">Priority: {task.priority}</p>
      </div>
      <div className="flex flex-col gap-2">
        <button
          onClick={() => onToggle(task.id)}
          className="text-blue-400 hover:text-blue-600 text-sm"
        >
          {task.completed ? "Unmark" : "Complete"}
        </button>
        <button onClick={() => onDelete(task.id)} className="">
          🗑
        </button>
      </div>
    </li>
  );
}

export default TaskItem;
