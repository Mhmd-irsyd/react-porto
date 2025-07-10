// src/App.jsx
import { Routes, Route } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import Home from "./pages/Home";
import Certificates from "./pages/Certificates";

function App() {
  return (
    <Routes>
      {/* Wrap semua page utama dengan AppLayout */}
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="certificates" element={<Certificates />} />
        {/* Tambah halaman lain di sini */}
      </Route>
    </Routes>
  );
}

export default App;
