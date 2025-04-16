import { createContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const [error, setError] = useState(null); 

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  const login = async (email, password) => {
    try {
      const response = await axios.post("http://localhost:8080/api/auth/login", {
        email,
        password
      });

      if (response.status === 200) {
        setUser(response.data); 
        localStorage.setItem("token", response.data.token); 
        console.log("Login successful");
      } else {
        throw new Error("Login failed");
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("Login failed. Please try again.");
      throw error; 
    }
  };

  const register = async (firstName, lastName, email, password) => {
    try {
      const response = await fetch("http://localhost:8080/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ firstName, lastName, email, password })
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        console.error("Registration error:", errorData); 
        throw new Error(errorData.message || "Registration failed");
      }
  
      const responseData = await response.json();
      console.log("Registration successful", responseData);
      return responseData;
    } catch (error) {
      console.error("Registration error:", error);
      setError(error.message || "Registration failed. Please try again.");
      throw error; 
    }
  };
  

  const logout = () => {
    setUser(null); 
    localStorage.removeItem("user"); 
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, error }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
