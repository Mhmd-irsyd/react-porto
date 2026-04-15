import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

const AppLayout = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <Navbar />
      <main className="pt-20">
        <Outlet />
      </main>

      {/* Floating Chat Button */}
      <a
        href="https://wa.me/089654619089"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 p-3 rounded-full shadow-lg hover:scale-105 transition z-50"
      >
        <FaWhatsapp size={24} />
      </a>
    </div>
  );
};

export default AppLayout;
