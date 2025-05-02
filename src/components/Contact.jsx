import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaWhatsapp, FaGithub, FaLinkedin, FaLocationArrow } from "react-icons/fa";
import { toast, Toaster } from "react-hot-toast";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "your_service_id", // ganti sesuai akun EmailJS kamu
        "your_template_id",
        {
          from_name: form.name,
          to_name: "Irsyad",
          from_email: form.email,
          message: form.message,
        },
        "your_public_key"
      )
      .then(() => {
        setLoading(false);
        toast.success("Message sent! I'll get back to you soon ✨");
        setForm({ name: "", email: "", message: "" });
      })
      .catch(() => {
        setLoading(false);
        toast.error("Oops, something went wrong. Try again!");
      });
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-20 bg-gradient-to-br from-green-900 via-blue-900 to-black text-white relative">
      <Toaster position="top-right" />

      {/* Floating Chat Button */}
      <a
        href="https://wa.me/089654619089"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 bg-green-500 p-3 rounded-full shadow-xl hover:scale-110 transition z-50"
      >
        <FaWhatsapp size={24} />
      </a>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold mb-2">📬 Let’s Connect</h2>
        <p className="text-gray-300 max-w-xl mx-auto">
          Have a project in mind or just want to say hi? Fill the form below or connect with me through social media!
        </p>
      </motion.div>

      {/* Contact Form & Info */}
      <div className="grid md:grid-cols-2 gap-16 items-start">
        {/* Left Side Info */}
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-blue-400" />
            <p>irsyadmuhammad4321@gmail.com</p>
          </div>
          <div className="flex items-center gap-4">
            <FaLocationArrow className="text-green-400" />
            <p>Bekasi, Indonesia</p>
          </div>

          <div className="flex gap-6 mt-8">
            <a href="https://github.com/username" target="_blank" rel="noreferrer" className="hover:scale-110 transition">
              <FaGithub size={28} />
            </a>
            <a href="https://linkedin.com/in/username" target="_blank" rel="noreferrer" className="hover:scale-110 transition">
              <FaLinkedin size={28} />
            </a>
          </div>

          {/* Google Map Embed */}
          <iframe
            title="map"
            src="https://maps.google.com/maps?q=bekasi&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="w-full h-64 mt-6 rounded-lg shadow-md border border-white/20"
            loading="lazy"
          ></iframe>
        </motion.div>

        {/* Right Side Form */}
        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          initial={{ x: 60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-md rounded-lg p-6 md:p-10 space-y-6 border border-white/10"
        >
          <div>
            <label className="block mb-2 font-semibold">Name</label>
            <input
              type="text"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-transparent border border-white/20 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Masukan Nama"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">Email</label>
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-transparent border border-white/20 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Masukan Email"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">Message</label>
            <textarea
              name="message"
              rows={5}
              required
              value={form.message}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-transparent border border-white/20 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 resize-none"
              placeholder="Let's talk about your next idea..."
            ></textarea>
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={loading}
            className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-3 rounded-md shadow-md font-semibold flex items-center gap-2 justify-center"
          >
            {loading ? "Sending..." : "Send Message"}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
