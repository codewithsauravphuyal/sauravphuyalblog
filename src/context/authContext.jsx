import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
  const [loading, setLoading] = useState(true); // New loading state
  const [error, setError] = useState(null); // New error state

  const login = async (inputs) => {
    setLoading(true); // Set loading to true during login
    try {
      const res = await axios.post("/auth/login", inputs, { withCredentials: true });
      setCurrentUser(res.data);
      setError(null); // Clear error on successful login
    } catch (error) {
      console.error("Login failed:", error);
      setError("Invalid username or password."); // Set error message
    } finally {
      setLoading(false); // Set loading to false after login attempt
    }
  };

  const logout = async () => {
    setLoading(true); // Set loading to true during logout
    try {
      await axios.post("/auth/logout", {}, { withCredentials: true });
      setCurrentUser(null);
      setError(null); // Clear error on successful logout
    } catch (error) {
      console.error("Logout failed:", error);
      setError("Failed to logout. Please try again."); // Set error message
    } finally {
      setLoading(false); // Set loading to false after logout attempt
    }
  };

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem("user", JSON.stringify(currentUser));
    } else {
      localStorage.removeItem("user"); // Clear user from local storage if logged out
    }
  }, [currentUser]);

  // Optionally check for an active session on initial load
  useEffect(() => {
    const checkSession = async () => {
      try {
        const res = await axios.get("/auth/session", { withCredentials: true });
        setCurrentUser(res.data);
      } catch (error) {
        console.error("Session check failed:", error);
      } finally {
        setLoading(false); // Set loading to false after session check
      }
    };
    
    checkSession();
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout, loading, error }}>
      {children}
    </AuthContext.Provider>
  );
};
