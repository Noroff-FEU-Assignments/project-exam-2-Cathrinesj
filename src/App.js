import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import LogIn from "./pages/Login";
import Posts from "./pages/Home";
import Post from "./pages/Post";
import People from "./pages/People";
import Profile from "./pages/Profile";
import UserPost from "./pages/UserPost";
import UserProfile from "./pages/UserProfile";

import { useEffect } from "react";
import RegisterUser from "./pages/RegisterUser";

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
        <Route path="registeruser" Component={RegisterUser} />
        <Route path="posts" Component={Posts} />
        <Route path="post/:id" Component={Post} />
        <Route path="people" Component={People} />
        <Route path="profile" Component={Profile} />
        <Route path="userpost" Component={UserPost} />
        <Route path="userprofile" Component={UserProfile} />
      </Routes>
    </div>
  );
}

export default App;
