import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-blue-600 text-white px-6 py-4 flex justify-between">
      <Link to="/dashboard" className="text-xl font-bold">
        ProDashboard
      </Link>
      <nav>
        <Link to="/dashboard/settings" className="hover:underline">
          Settings
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
