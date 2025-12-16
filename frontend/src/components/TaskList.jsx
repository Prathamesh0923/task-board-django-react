function TaskList({ tasks, toggleTask, deleteTask }) {
  return (
    <ul className="space-y-2">
      {tasks.map(task => (
        <li key={task.id} className="flex justify-between items-center p-2 bg-gray-50 rounded">
          <label className="flex items-center gap-2">
            <input type="checkbox" checked={task.completed} onChange={() => toggleTask(task.id)} />
            <span className={task.completed ? "line-through" : ""}>{task.title}</span>
          </label>
          <button onClick={() => deleteTask(task.id)} className="text-red-500">✕</button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
