import { Outlet } from "react-router-dom";


const Home = () => {
  return (
  <>
    <div className="flex justify-center m-auto w-50 items-center border border-gray-50 p-4 rounded">Home page</div>
    <Outlet />
  </>
  )
};

export default Home;