import { Routes, Route } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import Home from "./pages/Home";
import Certificates from "./pages/Certificates";
import KHSPage from "./pages/KhsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="certificates" element={<Certificates />} />
        <Route path="khs" element={<KHSPage />} />
      </Route>
    </Routes>
  );
}

export default App;
