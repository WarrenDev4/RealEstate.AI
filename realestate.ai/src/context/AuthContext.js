import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        {/* Try loading available user from localStorage */}
        const storedUser = localStorage.getItem("user");
        return storedUser ? JSON.parse(storedUser) : null;
    });

    const navigate = useNavigate();

    useEffect(() => {
        {/* Syncs user state with the localStorage */}
        if (user) {
            localStorage.setItem("user", JSON.stringify(user));
        } else {
            localStorage.removeItem("user");
        }
    }, [user]);

    const login = async (username, password) => {
        try {
            const response = await axios.post("http://localhost:8080/api/auth/login", { username, password });
            setUser(response.data); 
            localStorage.setItem("token", response.data.token); // Store token
            navigate("/home"); 
        } catch (error) {
            console.error("Login failed", error);
        }
    };

    const register = async (username, email, password) => {
        try {
            await axios.post("http://localhost:8080/api/auth/register", { username, email, password });
            navigate("/login"); {/* Successful registration! */}
        } catch (error) {
            console.error("Registration failed", error);
        }
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        navigate("/login");
    };

    return (
        <AuthContext.Provider value={{ user, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
