import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaHandPointDown, FaLinkedin, FaLocationArrow, FaMailBulk, FaStar } from "react-icons/fa";
import { toast, Toaster } from "react-hot-toast";
import emailjs from "@emailjs/browser";
import Reveal from "./Reveal";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_6xbrahj",
        "template_nhm22kr",
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        "PM4k4RkrIkcWb7FKZ"
      )
      .then(() => {
        setLoading(false);
        toast.success(
          <div className="flex items-center gap-2">
            Pesan berhasil dikirim! <FaStar className="text-yellow-400" />
          </div>
        );
        setForm({ name: "", email: "", message: "" });
      })
      .catch(() => {
        setLoading(false);
        toast.error("Gagal mengirim pesan. Coba lagi nanti.");
      });
  };

  return (
    <section id="contact" className="scroll-mt-24 py-24 px-6 md:px-20">
      <Toaster position="top-right" />

      <Reveal className="text-center mb-14">
        <h2 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 flex items-center justify-center gap-2">
          <FaMailBulk /> Let&apos;s Connect
        </h2>
        <p className="mt-2 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto flex items-center justify-center gap-2">
          Punya project atau ingin ngobrol santai? Kirimkan pesanmu melalui form berikut ini <FaHandPointDown />
        </p>
      </Reveal>

      <div className="grid md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
        <Reveal>
          <div className="space-y-5">
            <div className="flex items-center gap-3 text-slate-700 dark:text-slate-200">
              <FaEnvelope className="text-sky-600 dark:text-sky-400" />
              <p>irsyadmuhammad4321@gmail.com</p>
            </div>
            <div className="flex items-center gap-3 text-slate-700 dark:text-slate-200">
              <FaLocationArrow className="text-sky-600 dark:text-sky-400" />
              <p>Bekasi, Indonesia</p>
            </div>

            <iframe
              title="Lokasi Babelan"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d991.2131182470643!2d107.01410576948943!3d-6.177844299440312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69897a55623959%3A0x1c0e36fac910f4d4!2sJl.%20Nilam%209%2C%20Bahagia%2C%20Kec.%20Babelan%2C%20Kabupaten%20Bekasi%2C%20Jawa%20Barat%2017610!5e0!3m2!1sid!2sid!4v1720845674000!5m2!1sid!2sid"
              className="w-full h-64 rounded-xl border border-slate-200 dark:border-slate-800"
              loading="lazy"
            />
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 md:p-8 space-y-5"
          >
            <div>
              <label className="block mb-2 text-sm font-medium">Name</label>
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-slate-300 dark:border-slate-700 rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-sky-400"
                placeholder="Masukan Nama"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium">Email</label>
              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-slate-300 dark:border-slate-700 rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-sky-400"
                placeholder="Masukan Email"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium">Message</label>
              <textarea
                name="message"
                rows={5}
                required
                value={form.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-slate-300 dark:border-slate-700 rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-sky-400 resize-none"
                placeholder="Let&apos;s talk about your next idea..."
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full px-6 py-3 rounded-lg bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 font-medium hover:opacity-90 transition"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </motion.form>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
