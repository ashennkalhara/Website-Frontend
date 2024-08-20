import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminPanel from "./components/admin/AdminPanel";
import StaffPanel from "./components/admin/StaffPanel";
import Home from "./components/routes/Home";
import PrivateRoute from './components/routes/PrivateRoute';
import StaffLogin from './components/staff/StaffLogin';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route 
          path="/admin" 
          element={<PrivateRoute element={AdminPanel} />} 
        />
        
        <Route path="/staffLogin" element={<StaffLogin />} />
        <Route path="/staff" element={<StaffPanel />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;