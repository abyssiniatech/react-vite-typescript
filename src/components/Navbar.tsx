import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const handleactive =({isActive}:{isActive:boolean}) =>{
    return{
      textDecoration: isActive ? "underscore" : "none",
      color:isActive   ? "pink" : "white",
      fontWeight: isActive ? "bold" : "normal",
    }
  }
  return (
    <header className="bg-indigo-900 text-2xl text-white">
      <nav className="max-w-6xl mx-auto p-4 flex justify-between">
        <div className="font-bold">React Blog</div>

        <div className="flex gap-4">
          <NavLink style={handleactive} to="/">Home</NavLink>
          <NavLink style={handleactive} to="/blogs">Blogs</NavLink>
          <NavLink style={handleactive} to="/dashboard">Dashboard</NavLink>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
