import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { AuthProvider } from "./context/AuthContext";
import LogInPage from "./pages/Login";
import RegisterPage from "./pages/RegisterUser";
import HomePage from "./pages/Home";
import PostPage from "./pages/Post";
import ProfilesPage from "./pages/Profiles";
import ProfilePage from "./pages/Profile";
import UserPostPage from "./pages/UserPost";
import UserProfilePage from "./pages/UserProfile";
import NewPostPage from "./pages/NewPost";
import UpdatePage from "./pages/UpdatePost";
import SearchPage from "./pages/Search";

function App() {
  const navigate = useNavigate;
  
  const user =
  localStorage.getItem("name") !== "undefined"
  ? JSON.parse(localStorage.getItem("name"))
  : localStorage.clear();
  
  if (!user) navigate("/login");
  
  return (
    <div>
    <Routes>
    <Route path="login" Component={LogInPage} />
    <Route path="registeruser" Component={RegisterPage} />
    <Route path="/" Component={HomePage} />
    <Route path="post/:id" Component={PostPage} />
    <Route path="profiles" Component={ProfilesPage} />
    <Route path="profile/:id" Component={ProfilePage} />
    <Route path="userpost/:id" Component={UserPostPage} />
    <Route path="userprofile/:id" Component={UserProfilePage} />
    <Route path="newpost" Component={NewPostPage} />
    <Route path="updatepost" Component={UpdatePage} />
    <Route path="search" Component={SearchPage} />
    </Routes>
    </div>
    );
  }
  
  export default App;
  