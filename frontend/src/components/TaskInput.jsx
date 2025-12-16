function TaskInput({ title, setTitle, addTask }) {
  return (
    <div className="flex gap-2 mb-4">
      <input
        className="border p-2 flex-1 rounded"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add task"
      />
      <button onClick={addTask} className="bg-black text-white px-4 rounded">
        Add
      </button>
    </div>
  );
}

export default TaskInput;
