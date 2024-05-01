import './App.css';
import { Routes, Route, Navigate } from "react-router-dom";
import { DashboardLayout, AuthLayout } from './layouts';

function App() {
  return (
    <Routes>
      <Route path="/dashboard/*" element={<DashboardLayout />} />
      <Route path="/auth/*" element={<AuthLayout />} />
      <Route path="*" element={<Navigate to="/dashboard/home" replace />} />
    </Routes>
  );
}

export default App;
