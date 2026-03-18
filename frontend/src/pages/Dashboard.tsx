import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";
import ProjectForm from "../components/ProjectForm";
import { useEffect, useState } from "react";
import { api } from "../api/api";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [projects, setProjects] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);

  const navigate = useNavigate();

  const fetchProjects = () => {
    api.get("/projects").then((res) => setProjects(res.data));
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const filtered = projects.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <Navbar />

     <div className="p-6">
  <div className="flex justify-between items-center mb-6">
    <input
      placeholder="🔍 Search projects..."
      className="border p-2 rounded-lg w-72 focus:ring-2 focus:ring-indigo-400"
      onChange={(e) => setSearch(e.target.value)}
    />

    <button
      onClick={() => setShowForm(true)}
      className="btn-primary"
    >
      + New Project
    </button>
  </div>

  <div className="grid grid-cols-3 gap-6">
    {filtered.map((p) => (
      <div
        key={p._id}
        className="card cursor-pointer"
        onClick={() => navigate(`/project/${p._id}`)}
      >
        <h2 className="text-lg font-semibold text-indigo-600">
          {p.title}
        </h2>

        <p className="text-sm text-gray-500 mt-1">
          {p.description}
        </p>

        <div className="mt-3">
          <span className="text-xs px-3 py-1 rounded-full bg-indigo-100 text-indigo-600">
            {p.status}
          </span>
        </div>
      </div>
    ))}
  </div>
</div>

      {showForm && (
        <ProjectForm
          onClose={() => setShowForm(false)}
          refresh={fetchProjects}
        />
      )}
    </div>
  );
}