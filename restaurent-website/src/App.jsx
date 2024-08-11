import AdminPanel from "./components/admin/AdminPanel";
import StaffPanel from "./components/admin/StaffPanel";
import Home from "./components/routes/Home";

import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

// src/App.jsx
const App = () => {
  return (
       <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/staff" element={<StaffPanel />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
