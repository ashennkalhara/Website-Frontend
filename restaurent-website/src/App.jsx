import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminPanel from "./components/admin/AdminPanel";
import StaffPanel from "./components/admin/StaffPanel";
import Home from "./components/routes/Home";
import PrivateRoute from './components/routes/PrivateRoute';
import StaffLogin from './components/StaffLogin';
import ProtectedRoute from './components/routes/ProtectedRoute';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route 
          path="/admin" 
          element={<PrivateRoute element={AdminPanel} role="admin" />} 
        />
        <Route path="/StaffLogin" element={<StaffLogin />} />
        <Route 
          path="/staff" 
          element={<ProtectedRoute element={StaffPanel} role="staff" />} 
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
