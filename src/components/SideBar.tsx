import { NavLink } from "react-router-dom";

const linkStyle = ({ isActive }: { isActive: boolean }) =>
  isActive
    ? "block px-4 py-2 rounded bg-blue-100 text-blue-700 font-semibold"
    : "block px-4 py-2 rounded text-gray-700 hover:bg-gray-100";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white border-r min-h-full">
      <nav className="p-4 space-y-2">
        <NavLink to="/dashboard" className={linkStyle}>
          Dashboard
        </NavLink>
        <NavLink to="/dashboard/analytics" className={linkStyle}>
          Analytics
        </NavLink>
        <NavLink to="/dashboard/settings" className={linkStyle}>
          Settings
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
