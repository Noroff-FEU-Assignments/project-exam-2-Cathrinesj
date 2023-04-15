import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Navigation from "./components/Navigation";
import LogIn from "./pages/Login";
import Posts from "./pages/Home";
import { useEffect } from "react";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const User =
      localStorage.getItem("accessToken") !== "undefined"
        ? JSON.parse(localStorage.getItem("accessToken"))
        : localStorage.clear();

    if (!User) navigate("/login");
  }, []);

  return (
    <div>
      <Routes>
        <Route path="login" Component={LogIn} />
        <Route path="/*" Component={Posts} />
      </Routes>
    </div>
  );
}

export default App;
