import { Routes, Route } from "react-router-dom";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";
import { Dashboard } from "../pages/Dashboard";
import { ProtectedRoutes } from "../components/ProtectedRoutes";

export const RoutesMain = () => {
    return (
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/dashboard" element={<ProtectedRoutes />}>
                <Route index element={<Dashboard />} />
            </Route>

        </Routes>
    );
};
