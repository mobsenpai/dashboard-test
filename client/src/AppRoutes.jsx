import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import LoginForm from "./components/forms/LoginForm";
import RegisterationForm from "./components/forms/RegisterationForm";
import DashboardLayout from "./layouts/DashboardLayout";
import DashboardHomePage from "./pages/DashboardHomePage";
import { useAuth } from "./contexts/AuthContext";
import PollDetailsPage from "./pages/PollDetailsPage";

function AppRoutes() {
  const { user } = useAuth();
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="login" element={<LoginForm />} />
        <Route path="register" element={<RegisterationForm />} />
      </Route>

      {/* Dashboard - protected route */}
      <Route
        path="/dashboard"
        element={user ? <DashboardLayout /> : <Navigate to="/login" />}
      >
        <Route index element={<DashboardHomePage />} />
        <Route path="polls/create" element={<></>} />
        <Route path="polls/:id" element={<PollDetailsPage />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
