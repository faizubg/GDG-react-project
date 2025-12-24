import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../layouts/AuthContext";

const ProtectedRoute = () => {
  const { authed } = useAuth();

  if (!authed) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
