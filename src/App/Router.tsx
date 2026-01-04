import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import DashboardLayout from "../layouts/DashboardLayout";

import Home from "../pages/Home";
import Blogs from "../pages/Blogs";
import BlogDetails from "../pages/BlogDetails";

import DashboardHome from "../pages/Dashboard/DashboardHome";
import Profile from "../pages/Dashboard/Profile";
import Settings from "../pages/Dashboard/Settings";

const Router = () => {
  return (
    <div>
       <header className="bg-indigo-700 text-pink-900 flex  font-bold items-center justify-center p-4 text-3xl">
        <h1>React Router</h1>
       </header>
    <Routes>
      {/* Public layout */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:id" element={<BlogDetails />} />
      </Route>

      {/* Dashboard layout */}
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<DashboardHome />} />
        <Route path="profile" element={<Profile />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
    {/* footer section */}
    <footer className="h-screen flex justify-center  items-center bg-black text-white text-center">
         <h2>&copy; {new Date().getFullYear()} | Surafel mengist</h2>
    </footer>
    </div>
  );
};

export default Router;
