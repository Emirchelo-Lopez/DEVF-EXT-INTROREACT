import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<h1>Welcome!</h1>} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<SignUp />} />
    <Route path="*" element={<h2 className="text-center">404</h2>} />
  </Routes>
);
export default AppRoutes;
