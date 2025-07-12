import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa"; // pastikan kamu install react-icons

const AppLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>

      {/* Floating Chat Button */}
      <a
        href="https://wa.me/089654619089"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 bg-green-500 p-3 rounded-full shadow-xl hover:scale-110 transition z-50"
      >
        <FaWhatsapp size={24} />
      </a>
    </>
  );
};

export default AppLayout;
