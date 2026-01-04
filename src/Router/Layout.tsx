import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="text-center">
      <h1 className="text-center">HEADER componets </h1>

      {/* Child route renders here */}
      <Outlet />

      <h1 className="text-center">welcome to it</h1>
    </div>
  );
};

export default Layout;
