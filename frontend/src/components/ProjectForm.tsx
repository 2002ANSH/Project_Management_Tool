import { useState } from "react";
import { api } from "../api/api";

export default function ProjectForm({ onClose, refresh }: any) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const createProject = async () => {
    await api.post("/projects", {
      title,
      description,
      status: "active",
    });

    refresh();
    onClose();
  };

  return (
   <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center">
  <div className="bg-white p-6 rounded-xl w-96 shadow-xl">
    <h2 className="text-lg font-bold mb-4 text-indigo-600">
      Create Project
    </h2>

    <input
      className="w-full mb-3 p-2 border rounded-lg focus:ring-2 focus:ring-indigo-400"
      placeholder="Title"
      onChange={(e) => setTitle(e.target.value)}
    />

    <textarea
      className="w-full mb-3 p-2 border rounded-lg focus:ring-2 focus:ring-indigo-400"
      placeholder="Description"
      onChange={(e) => setDescription(e.target.value)}
    />

    <div className="flex justify-end gap-3">
      <button onClick={onClose} className="btn-secondary">
        Cancel
      </button>

      <button onClick={createProject} className="btn-primary">
        Create
      </button>
    </div>
  </div>
</div>
  );
}