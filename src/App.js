import "./App.css";
import { Routes, Route } from "react-router-dom";
/*import { useNavigate } from "react-router-dom";*/
import LogInPage from "./pages/Login";
import RegisterPage from "./pages/RegisterUser";
import HomePage from "./pages/Home";
import PostPage from "./pages/Post";
import ProfilesPage from "./pages/Profiles";
import ProfilePage from "./pages/Profile";
import NewPostPage from "./pages/NewPost";
import SearchPage from "./pages/Search";

function App() {
  /*
  Was trying to figure out how to make sure user did not access other pages without login in.
  Had to throw in the towle..
  
  const navigate = useNavigate;

  const user =
    localStorage.getItem("name") !== "undefined"
      ? JSON.parse(localStorage.getItem("name"))
      : localStorage.clear();

  if (!user) navigate("/login");
  */

  return (
    <div>
      <Routes>
        <Route path="/*" Component={LogInPage} />
        <Route path="registeruser" Component={RegisterPage} />
        <Route path="/posts" Component={HomePage} />
        <Route path="post/:id" Component={PostPage} />
        <Route path="profiles" Component={ProfilesPage} />
        <Route path="profile/:id" Component={ProfilePage} />
        <Route path="newpost" Component={NewPostPage} />
        <Route path="search" Component={SearchPage} />
      </Routes>
    </div>
  );
}

export default App;
