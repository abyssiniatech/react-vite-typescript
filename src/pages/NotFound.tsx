import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-5xl font-bold mb-4">404</h1>
      <p className="mb-4">Page Not Found</p>
      <Link to="/dashboard" className="text-blue-600 underline">
        Go to Dashboard
      </Link>
    </div>
  );
};

export default NotFound;
