import { createContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    // Load the user from localStorage if available
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const [error, setError] = useState(null); // To manage error state

  useEffect(() => {
    // Sync user state with localStorage
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
        setUser(response.data); // Store user data in state
        localStorage.setItem("token", response.data.token); // Store token in localStorage
        console.log("Login successful");
      } else {
        throw new Error("Login failed");
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("Login failed. Please try again.");
      throw error; // Rethrow error to be handled in the component
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
        const errorData = await response.json(); // Parse error response body
        console.error("Registration error:", errorData); // Log the error message
        throw new Error(errorData.message || "Registration failed");
      }
  
      const responseData = await response.json();
      console.log("Registration successful", responseData);
      return responseData; // Return response data
    } catch (error) {
      console.error("Registration error:", error);
      setError(error.message || "Registration failed. Please try again.");
      throw error; // Rethrow error to be handled in the component
    }
  };
  

  const logout = () => {
    setUser(null); // Clear the user state
    localStorage.removeItem("user"); // Remove user data from localStorage
    localStorage.removeItem("token"); // Remove token from localStorage
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, error }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
