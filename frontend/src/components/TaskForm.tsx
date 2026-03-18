import { useState } from "react";
import { api } from "../api/api";

export default function TaskForm({ projectId, refresh, onClose }: any) {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("todo");

const createTask = async () => {
  try {
    await api.post("/tasks", {
      title,
      status,
      project: projectId,
    });

    refresh();
    onClose(); 
  } catch (err) {
    console.log(err);
  }
};
 return (
  <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">
    <div className="bg-white p-6 rounded-xl w-96 shadow-xl">
      <h2 className="text-lg font-bold mb-4 text-indigo-600">
        Add Task
      </h2>

      <input
        className="w-full mb-3 p-2 border rounded-lg"
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <select
        className="w-full mb-3 p-2 border rounded-lg"
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="todo">Todo</option>
        <option value="in-progress">In Progress</option>
        <option value="done">Done</option>
      </select>

      <div className="flex justify-end gap-3">
        <button onClick={onClose} className="px-3 py-1">
          Cancel
        </button>

        <button
          onClick={createTask}
          className="bg-indigo-600 text-white px-4 py-2 rounded"
        >
          Add Task
        </button>
      </div>
    </div>
  </div>
);
}