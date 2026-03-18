import Navbar from "../components/Navbar";
import TaskCard from "../components/TaskCard";
import TaskForm from "../components/TaskForm";
import { useEffect, useState } from "react";
import { api } from "../api/api";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";

export default function ProjectDetails() {
  const { id } = useParams();
  const [tasks, setTasks] = useState<any[]>([]);
  const [showForm, setShowForm] = useState(false);

  const fetchTasks = () => {
    api.get(`/tasks/${id}`).then((res) => setTasks(res.data));
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div>
      <Navbar />

      <div className="p-6">
        <BackButton />
        <h1 className="text-xl font-bold mb-4">Tasks</h1>

        {/* ✅ BUTTON */}
        <button
          onClick={() => setShowForm(true)}
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg mb-4"
        >
          + Add Task
        </button>

        {/* ✅ MODAL FORM */}
        {showForm && (
          <TaskForm
            projectId={id}
            refresh={fetchTasks}
            onClose={() => setShowForm(false)}
          />
        )}

        {/* ✅ TASK LIST */}
        <div className="space-y-3 mt-4">
          {tasks.map((t) => (
            <TaskCard key={t._id} task={t} />
          ))}
        </div>
      </div>
    </div>
  );
}