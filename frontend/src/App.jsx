import { useEffect, useState } from "react";
import axios from "axios";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import ProgressBar from "./components/ProgessBar";

const API = "https://task-board-backend.onrender.com/api";


function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  const fetchTasks = async () => {
    const res = await axios.get(`${API}/tasks/`);
    setTasks(res.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = async () => {
    if (!title) return;
    await axios.post(`${API}/tasks/add/`, { title });
    setTitle("");
    fetchTasks();
  };

  const toggleTask = async (id) => {
    await axios.put(`${API}/tasks/${id}/`);
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await axios.delete(`${API}/tasks/delete/${id}/`);
    fetchTasks();
  };

  const completed = tasks.filter(t => t.completed).length;
  const progress = tasks.length ? Math.round((completed / tasks.length) * 100) : 0;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow w-full max-w-md">
        <h1 className="text-2xl font-bold mb-1">Task Board</h1>
        <p className="text-sm text-gray-500 mb-4">Stay focused. Finish strong.</p>

        <TaskInput title={title} setTitle={setTitle} addTask={addTask} />
        <ProgressBar progress={progress} />
        <TaskList tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask} />

        {progress === 100 && (
          <p className="mt-4 text-center text-green-600 font-semibold">
            🎉 All tasks completed!
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
