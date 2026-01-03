import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
// import Sidebar from "../components/Sidebar";
import Sidebar from "../components/SideBar";
import Footer from "../components/Footer";

const DashboardLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar at top */}
      <Navbar />

      {/* Sidebar + main content */}
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6 bg-gray-100">
          <Outlet />
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default DashboardLayout;
