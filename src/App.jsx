import { useEffect } from "react";
import "./App.css";
import Login from "./pages/login";
import { getItemWithExpiry } from "./services/tokenExpries";
import { Route, Routes } from "react-router-dom";

function App() {
  useEffect(() => {
    const interval = setInterval(() => {
      const token = getItemWithExpiry("auth_token");

      if (!token) {
        localStorage.removeItem("authenticated");
        localStorage.removeItem("auth_token");
        // navigate("/sign-in");
      }
    }, 60 * 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <Login />
    </>
  );
}

export default App;
