import { useState } from "react";
import { api } from "../api/api";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = async () => {
        const res = await api.post("/auth/login", { email, password });

        localStorage.setItem("token", res.data.token);

        navigate("/dashboard");
    };

    return (
        <div className="h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-xl shadow-md w-96">
                <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

                <input
                    className="w-full mb-3 p-2 border rounded"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                />

                <div className="relative mb-4">
                    <input
                        type={showPassword ? "text" : "password"}
                        className="w-full p-2 border rounded"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <span
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-2 cursor-pointer"
                    >
                        👁️
                    </span>
                </div>

                <button
                    onClick={handleLogin}
                    className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                >
                    Login
                </button>
                <p className="text-sm mt-4 text-center">
                    Don’t have an account?{" "}
                    <span
                        onClick={() => navigate("/register")}
                        className="text-blue-500 cursor-pointer"
                    >
                        Register
                    </span>
                </p>
            </div>
        </div>
    );
}