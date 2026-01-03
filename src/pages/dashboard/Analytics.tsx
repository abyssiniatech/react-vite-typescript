import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";

const Analytics = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header title="Analytics" />
      <button
        onClick={() => navigate("/dashboard/settings")}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
      >
        Go to Settings
      </button>
    </>
  );
};

export default Analytics;
