import "./App.css";
import { useContext } from "react";
import AuthContext from "./context/AuthContext";
import { Routes, Route, useNavigate } from "react-router-dom";
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

function App() {
  const navigate = useNavigate();
  const accessToken = useContext(AuthContext);

  if (!accessToken) navigate("/login");

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
      </Routes>
    </div>
  );
}

export default App;
