"use client";

import React from "react";

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen flex items-center justify-center p-6 md:p-12 font-sans">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* ================= SISI KIRI: TEKS & PORTFOLIO ================= */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
              Let's Work Together
            </h1>
            <p className="text-gray-500 text-base md:text-lg leading-relaxed max-w-md">
              Have a project in mind or just want to say hi? Drop me a message —
              I'd love to hear from you.
            </p>
          </div>

          {/* Grid Preview Gambar Mini (3 Kolom) */}
          <div className="grid grid-cols-3 gap-3 max-w-md">
            <div className="rounded-xl overflow-hidden shadow-sm border border-gray-100 aspect-[4/5]">
              <img
                src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=300&auto=format&fit=crop&q=60"
                alt="Project 1"
                className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-sm border border-gray-100 aspect-[4/5]">
              <img
                src="https://images.unsplash.com/photo-1541462608141-ad4979e408c9?w=300&auto=format&fit=crop&q=60"
                alt="Project 2"
                className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-sm border border-gray-100 aspect-[4/5]">
              <img
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=300&auto=format&fit=crop&q=60"
                alt="Project 3"
                className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            </div>
          </div>
        </div>

        {/* ================= SISI KANAN: FORM & ILUSTRASI ================= */}
        <div className="relative pt-24 md:pt-28 w-full max-w-lg mx-auto lg:max-w-none">
          {/* Ilustrasi Karakter (Menggunakan SVG murni pengganti gambar 302374.jpg) */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-36 h-28 z-10">
            <svg viewBox="0 0 140 110" className="w-full h-full drop-shadow-sm">
              {/* Kepala & Leher */}
              <rect
                x="62"
                y="55"
                width="16"
                height="20"
                fill="#fcd34d"
                rx="2"
              />
              <circle cx="70" cy="45" r="18" fill="#fcd34d" />
              {/* Rambut & Jenggot */}
              <path
                d="M52 40c0-12 8-18 18-18s18 6 18 18v5c0 4-4 8-18 8s-18-4-18-8z"
                fill="#111827"
              />
              <path d="M55 45c0 10 6 14 15 14s15-4 15-14H55z" fill="#111827" />
              {/* Kacamata */}
              <circle
                cx="63"
                cy="42"
                r="5"
                fill="none"
                stroke="#ffffff"
                strokeWidth="1.5"
              />
              <circle
                cx="77"
                cy="42"
                r="5"
                fill="none"
                stroke="#ffffff"
                strokeWidth="1.5"
              />
              <line
                x1="68"
                y1="42"
                x2="72"
                y2="42"
                stroke="#ffffff"
                strokeWidth="1.5"
              />
              {/* Baju */}
              <path
                d="M40 75c0-10 10-15 30-15s30 5 30 15v15H40V75z"
                fill="#f59e0b"
              />
              {/* Tangan Kiri mengintip */}
              <circle cx="36" cy="78" r="4" fill="#fcd34d" />
              <circle cx="39" cy="80" r="4" fill="#fcd34d" />
              <circle cx="43" cy="82" r="4" fill="#fcd34d" />
              {/* Tangan Kanan mengintip */}
              <circle cx="104" cy="78" r="4" fill="#fcd34d" />
              <circle cx="101" cy="80" r="4" fill="#fcd34d" />
              <circle cx="97" cy="82" r="4" fill="#fcd34d" />
            </svg>
          </div>

          {/* Kotak Form Utama */}
          <div className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.04),0_1px_3px_rgba(0,0,0,0.02)] border border-gray-100 relative z-20">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Form Terkirim!");
              }}
              className="space-y-6"
            >
              {/* Input Nama */}
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="block text-sm font-bold text-gray-800 tracking-wide"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  placeholder="Enter your name"
                  className="w-full px-5 py-4 border border-gray-200 rounded-2xl bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all text-sm"
                />
              </div>

              {/* Input Email */}
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-bold text-gray-800 tracking-wide"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  placeholder="Enter your email"
                  className="w-full px-5 py-4 border border-gray-200 rounded-2xl bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all text-sm"
                />
              </div>

              {/* Input Pesan */}
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-bold text-gray-800 tracking-wide"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  placeholder="Enter your message"
                  className="w-full px-5 py-4 border border-gray-200 rounded-2xl bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all text-sm resize-none"
                ></textarea>
              </div>

              {/* Tombol Kirim */}
              <button
                type="submit"
                className="w-full bg-[#b56584] hover:bg-[#a25472] text-white font-medium py-4 px-6 rounded-2xl shadow-sm transition-all duration-200 mt-2 text-center text-sm tracking-wide active:scale-[0.99]"
              >
                Let's Talk
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
