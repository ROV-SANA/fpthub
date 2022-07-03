import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/css/reset.css";
import "./assets/css/setup.css";
import Bookmark from "./pages/Bookmark";
import Explore from "./pages/Explore";
import Home from "./pages/Home"
import Login from "./pages/Login";
import Notifications from "./pages/Notifications";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/home" element={<Home></Home>} />
        <Route path="/explore" element={<Explore></Explore>} />
        <Route path="/notifications" element={<Notifications></Notifications>} />
        <Route path="/bookmark" element={<Bookmark></Bookmark>} />
        <Route path="/settings" element={<Settings></Settings>} />
        <Route path="/profile" element={<Profile></Profile>} />
      </Routes>
    </>
  );
}

export default App;
