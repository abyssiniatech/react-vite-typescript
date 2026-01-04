import { Outlet, NavLink } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-gray-900 text-white p-4">
        <h2 className="text-xl font-bold mb-4">Dashboard</h2>
        <nav className="flex flex-col gap-2">
          <NavLink to="/dashboard">Home</NavLink>
          <NavLink to="/dashboard/profile">Profile</NavLink>
          <NavLink to="/dashboard/settings">Settings</NavLink>
        </nav>
      </aside>

      <main className="flex-1 p-6 bg-gray-100">
        <Outlet />
       <NavLink to ="/"> <button className="bg-indigo-800 rounded-lg text-white px-4 py-2">go to home page</button></NavLink>
      </main>
    </div>
  );
};

export default DashboardLayout;
