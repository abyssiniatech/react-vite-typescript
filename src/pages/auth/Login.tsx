import { useNavigate } from "react-router-dom";
import AuthLayout from "../../layouts/AuthLayout";

const Login = () => {
  const navigate = useNavigate();

  return (
    <AuthLayout>
      <button
        onClick={() => navigate("/dashboard")}
        className="bg-green-500 text-white px-6 py-3 rounded"
      >
        Login
      </button>
    </AuthLayout>
  );
};

export default Login;
