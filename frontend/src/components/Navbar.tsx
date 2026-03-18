import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // 🔥 token remove
    localStorage.removeItem("token");

    // 🔥 redirect to login
    navigate("/");
  };

  return (
    <div className="bg-white shadow px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-indigo-600 cursor-pointer">
        🚀 Project Manager
      </h1>

      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
      >
        Logout
      </button>
    </div>
  );
}