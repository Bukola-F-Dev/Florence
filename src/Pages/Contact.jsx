import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";  
import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";


export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    title: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");

    try {
      await emailjs.send(
        "service_6ir8d2k",      
        "template_j92jtqq",    
        formData,
        "odlQsJjG0XIhZPaLN"       
      );
      setSuccess("Message sent successfully!");
      setFormData({ name: "", email: "", title: "", message: "" });
    } catch (err) {
      setSuccess("Failed to send message. Try again later.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section
    id="contact"
    className="py-20 px-6 md:px-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-500 font-[Poppins]"
  >
    <div className="max-w-7xl mx-auto">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
       className="relative max-w-3xl mx-auto p-10 bg-white dark:bg-slate-900/60 backdrop-blur-xl border border-gray-200 dark:border-slate-700 rounded-3xl" >
             {/* Heading */}
             <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Get In Touch
          </h2>

          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Interested in working together or have a project idea? Feel free to
            reach out and let's build something amazing.
          </p>
        </motion.div>
  
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          className="grid lg:grid-cols-2 gap-12 items-start"
        > 
          {/* CONTACT INFO */}
          <motion.div variants={item} className="space-y-8">

            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Contact Information
            </h3>

            <p className="text-gray-600 dark:text-gray-400">
              I'm open to freelance opportunities, collaborations and full time
              roles. Feel free to reach out using the form or through any of the
              platforms below.
            </p>

            {/* Contact Items */}
            <div className="space-y-6">

              <div className="flex items-center gap-4">
                <div className="text-blue-500 text-xl">
                  <FaEnvelope />
                </div>
                <span className="text-gray-700 dark:text-gray-300">
                  your@email.com
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-blue-500 text-xl">
                  <FaPhoneAlt />
                </div>
                <span className="text-gray-700 dark:text-gray-300">
                  +234 XXX XXX XXXX
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-blue-500 text-xl">
                  <FaMapMarkerAlt />
                </div>
                <span className="text-gray-700 dark:text-gray-300">
                  Lagos, Nigeria
                </span>
              </div>

            </div>

            {/* Social Links */}
            <div className="flex gap-6 text-2xl mt-6">
              <a
                href="#"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition"
              >
                <FaGithub />
              </a>

              <a
                href="#"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition"
              >
                <FaLinkedin />
              </a>
            </div>

          </motion.div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">

             {/* CONTACT FORM */}
          <motion.div
            variants={item}
            className="bg-white dark:bg-gray-800 p-8 rounded-xl space-y-6"
          >

            <div className="grid md:grid-cols-2 gap-6"></div>

<input
  type="text"
  name="name"
  placeholder="Your Name"
  value={formData.name}
  onChange={handleChange}
  required
  className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent text-gray-800 dark:text-white focus:outline-none focus:border-blue-500"
                />

<input
  type="email"
  name="email"
  placeholder="Your Email"
  value={formData.email}
  onChange={handleChange}
  required
  className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent text-gray-800 dark:text-white focus:outline-none focus:border-blue-500"
                   />

{/* SUBJECT FIELD (matches {{title}}) */}
<input
  type="text"
  name="title"
  placeholder="Subject"
  value={formData.title}
  onChange={handleChange}
  required
  className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent text-gray-800 dark:text-white focus:outline-none focus:border-blue-500"
  />

<textarea
  name="message"
  placeholder="Your Message"
  value={formData.message}
  onChange={handleChange}
  required
  rows={5}
  className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent text-gray-800 dark:text-white focus:outline-none focus:border-blue-500"
  />

<motion.button
  type="submit"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-medium transition"
  disabled={loading}
>
  {loading ? "Sending..." : "Send Message"}
</motion.button>

          {success && (
            <p className="text-center text-green-400 font-medium mt-2">
              {success}
            </p>
          )}
      </motion.div>
      </form>
      </motion.div>
      </motion.div>
      </div>
    </section>
  );
}