"use client";

import { useState } from "react";
import { FiMail } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("Message sent successfully ✅");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send ❌");
      }
    } catch (err) {
      setStatus("Something went wrong ❌");
    }
  }

  return (
    <section className="w-full mt-16 py-16 px-6 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        
        {/* LEFT SIDE: Info */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold mb-4">Let&#39;s Connect</h2>
          <p className="text-gray-300">
            Feel free to reach out — whether it&#39;s about a project, opportunity, 
            or just to say hi.
          </p>

          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <FiMail className="w-10 h-10 text-blue-400" />
              <a 
                href="mailto:huyl.business@gmail.com"
                className="hover:underline"
              >
                huyl.business@gmail.com
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <FaGithub className="w-10 h-10 text-blue-400" />
              <a 
                href="https://github.com/huynly" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:underline"
              >
                github.com/huynly
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <FaLinkedin className="w-10 h-10 text-blue-400" />
              <a 
                href="https://www.linkedin.com/in/huyn-ly/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:underline"
              >
                linkedin.com/in/huynly
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-gray-800 p-6 rounded-2xl shadow-lg space-y-6"
        >
          <div>
            <label htmlFor="name" className="block mb-2 font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              className="w-full px-4 py-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              className="w-full px-4 py-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-2 font-medium">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
              className="w-full px-4 py-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-400 hover:bg-blue-500 text-white font-semibold py-2 px-6 rounded-lg transition duration-200"
          >
            Send Message
          </button>

          {status && <p className="text-sm mt-2">{status}</p>}
        </form>
      </div>
    </section>
  );
}
