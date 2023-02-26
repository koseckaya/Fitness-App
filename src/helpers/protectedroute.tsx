import { ReactNode, useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../components/utils/contexts";

interface ProtectedRouteProps {
  children: ReactNode;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { currentUser } = useContext(UserContext);
  if (!currentUser) {
    return <Navigate to='/' />;
  }
  return <>{children}</>;
};