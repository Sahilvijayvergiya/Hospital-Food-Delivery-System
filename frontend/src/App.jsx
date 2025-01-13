import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import ManagerDashboard from './pages/ManagerDashboard';
import PantryDashboard from './pages/PantryDashboard';
import DeliveryDashboard from './pages/DeliveryDashboard';
import Login from './pages/Login';
import { useAuth } from './context/AuthContext';

const App = () => {
  const { role } = useAuth();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        {/* Protect routes based on roles */}
        <Route
          path="/manager-dashboard"
          element={role === 'manager' ? <ManagerDashboard /> : <Navigate to="/login" />}
        />
        <Route
          path="/pantry-dashboard"
          element={role === 'staff' ? <PantryDashboard /> : <Navigate to="/login" />}
        />
        <Route
          path="/delivery-dashboard"
          element={role === 'delivery' ? <DeliveryDashboard /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
};

export default App;
