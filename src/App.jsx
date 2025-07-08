import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Certificates from "./pages/Certificates"; // ← Import page sertifikat

function App() {
  return (
    <div className="bg-[#0f172a] min-h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/certificates" element={<Certificates />} />
      </Routes>
    </div>
  );
}

export default App;
