import React from "react";

export default function Testimonial() {
  return (
    <section className="bg-white py-16 px-4 font-sans text-center">
      {/* Header Section */}
      <div className="max-w-2xl mx-auto mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 tracking-tight">
          What They Say About Working With Me
        </h2>
        <p className="text-sm md:text-base text-gray-600">
          Real words from clients, teammates, and mentors I've collaborated with
          on various projects.
        </p>
      </div>

      {/* Card Section dengan Efek Stack */}
      <div className="relative max-w-4xl mx-auto mb-8">
        {/* Lapisan Belakang 2 */}
        <div className="absolute inset-x-8 -bottom-4 h-full bg-[#b25e7a]/20 rounded-2xl z-0 transform scale-95" />
        {/* Lapisan Belakang 1 */}
        <div className="absolute inset-x-4 -bottom-2 h-full bg-[#b25e7a]/40 rounded-2xl z-10 transform scale-98" />

        {/* Card Utama */}
        <div className="relative z-20 bg-[#b15875] text-white rounded-2xl p-8 md:p-12 shadow-xl flex flex-col items-center">
          {/* Bintang Rating */}
          <div className="flex space-x-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="w-5 h-5 text-amber-400 fill-current"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>

          {/* Isi Testimoni */}
          <blockquote className="text-base md:text-lg lg:text-xl font-normal leading-relaxed text-center max-w-3xl mb-8 opacity-95">
            “Working with Edwin Anderson was a smooth experience from start to
            finish. He translated our design into clean, responsive code and
            even suggested improvements we hadn't thought of. Highly
            recommended!”
          </blockquote>

          {/* Profil */}
          <div className="flex flex-col items-center">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80" // Gambar placeholder wanita Asia mirip di desain
              alt="Sarah Tan"
              className="w-14 h-14 rounded-full object-cover border-2 border-white/20 mb-3"
            />
            <h4 className="font-semibold text-base">Sarah Tan</h4>
            <p className="text-xs text-white/80 mt-1">
              Product Manager at Finovate
            </p>
          </div>
        </div>
      </div>

      {/* Tombol Navigasi Slider */}
      <div className="flex justify-center space-x-4 mt-8">
        <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors focus:outline-none">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors focus:outline-none">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}
