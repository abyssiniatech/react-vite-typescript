import { Routes, Route } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import DashboardHome from "../pages/dashboard/DashboardHome";
import Analytics from "../pages/dashboard/Analytics";
import Settings from "../pages/dashboard/Settings";
import Login from "../pages/auth/Login";
import NotFound from "../pages/NotFound";
import ProtectedRoute from "../routes/ProtectedRoute";
const AppRouter = () => {
  return (
    <Routes>
      {/* Auth Route */}
      <Route path="/login" element={<Login />} />

      {/* Protected Dashboard Layout */}
      <Route
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        <Route path="/dashboard" element={<DashboardHome />} />
        <Route path="/dashboard/analytics" element={<Analytics />} />
        <Route path="/dashboard/settings" element={<Settings />} />
      </Route>

      {/* Catch-all */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
