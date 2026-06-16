import React from 'react';

export default function PortfolioPage() {
  return (
    <div className="relative min-h-screen bg-[#a34063] text-white flex flex-col justify-between p-4 md:p-8 overflow-x-hidden">
      <header className="w-full flex justify-center z-30 pt-2">
        <nav className="bg-[#782845]/60 backdrop-blur-md px-6 py-2.5 rounded-full flex gap-5 text-xs md:text-sm font-medium border border-white/10 shadow-lg">
          <a href="#home" className="hover:text-[#f2bd54] transition-colors">
            Home
          </a>
          <a href="#about" className="hover:text-[#f2bd54] transition-colors">
            About
          </a>
          <a href="#skill" className="hover:text-[#f2bd54] transition-colors">
            Skill
          </a>
          <a
            href="#projects"
            className="hover:text-[#f2bd54] transition-colors"
          >
            Projects
          </a>
          <a href="#faq" className="hover:text-[#f2bd54] transition-colors">
            FAQ
          </a>
          <a href="#contact" className="hover:text-[#f2bd54] transition-colors">
            Contact
          </a>
        </nav>
      </header>

      {/* 2. KONTEN UTAMA (GRID SYSTEM) */}
      <main className="relative flex-1 grid grid-cols-1 md:grid-cols-12 items-center gap-6 my-auto w-full max-w-7xl mx-auto z-10 py-8 md:py-0">
        {/* --- KOLOM KIRI: TECH STACK BAR & DESKRIPSI --- */}
        <div className="order-2 md:order-1 md:col-span-3 flex flex-col justify-between h-full py-4 space-y-8 md:space-y-0">
          {/* Floating Tech Stack Sidebar */}
          <div className="bg-[#782845]/30 border border-white/10 w-14 p-2.5 rounded-full flex flex-col gap-4 items-center backdrop-blur-md shadow-xl self-start">
            {/* Logo JavaScript */}
            <div className="w-9 h-9 bg-[#f7df1e] rounded-lg flex items-center justify-center font-black text-black text-[11px] shadow-sm">
              JS
            </div>
            {/* Logo CSS/Tailwind (Representasi Alternatif) */}
            <div className="w-9 h-9 bg-[#0070f3] rounded-lg flex items-center justify-center font-black text-white text-[11px] shadow-sm">
              3
            </div>
            {/* Logo HTML/HTML5 */}
            <div className="w-9 h-9 bg-[#e34f26] rounded-lg flex items-center justify-center font-black text-white text-[11px] shadow-sm">
              5
            </div>
            {/* Logo React */}
            <div className="w-9 h-9 bg-[#20232a] rounded-lg flex items-center justify-center text-[#61dafb] text-lg font-bold shadow-sm animate-[spin_10s_linear_infinite]">
              ⚛
            </div>
          </div>

          {/* Deskripsi Profile Singkat */}
          <div className="space-y-3 max-w-xs pt-4 md:pt-0">
            {/* Tombol Mikrofon Kecil */}
            <div className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center border border-white/20 shadow-inner">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                <path d="M19 10v1a7 7 0 0 1-14 0v-1" />
                <line x1="12" x2="12" y1="19" y2="22" />
              </svg>
            </div>
            <h2 className="text-lg md:text-xl font-bold tracking-wide">
              Hi, I'm Ghillant Dimisqi
            </h2>
            <p className="text-xs md:text-sm text-white/70 leading-relaxed font-light">
              a frontend developer passionate about creating seamless digital
              experiences that are fast, responsive, and user-friendly.
            </p>
          </div>
        </div>

        {/* --- KOLOM TENGAH: TEKS RAKSASA & FOTO MODEL --- */}
        <div className="order-1 md:order-2 md:col-span-6 relative flex flex-col items-center justify-center min-h-[360px] md:min-h-[500px] w-full">
          {/* Efek Layer Paling Belakang: Besar Teks Poster */}
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none z-0">
            {/* Teks Handwriting "Junior" */}
            <span
              className="text-3xl md:text-5xl text-white italic font-serif self-start ml-8 md:ml-16 -mb-4 md:-mb-7 z-10 tracking-wider transform -rotate-3 opacity-90"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Junior
            </span>
            {/* Baris Utama 1 */}
            <h1 className="text-[4.5rem] sm:text-[6.5rem] md:text-[8.5rem] font-extrabold text-[#f2bd54] tracking-tighter leading-none uppercase text-center font-mono">
              FRONTEND
            </h1>
            {/* Baris Utama 2 */}
            <h1 className="text-[4.5rem] sm:text-[6.5rem] md:text-[8.5rem] font-extrabold text-[#f2bd54] tracking-tighter leading-none uppercase text-center font-mono -mt-2 md:-mt-5">
              DEVELOPER
            </h1>
          </div>

          {/* Badge Status Kerja */}
          <div className="absolute top-4 md:top-10 bg-[#611b36] text-[10px] md:text-xs px-3.5 py-1.5 rounded-full flex items-center gap-2 border border-white/10 z-20 shadow-md">
            <span className="w-2 h-2 bg-pink-500 rounded-full animate-pulse shadow-[0_0_8px_#ec4899]"></span>
            <span className="font-medium tracking-wide text-white/90">
              Available for Hire
            </span>
          </div>

          {/* Wrapper Foto Utama (Ganti src dengan tautan berkas gambar asli Anda) */}
          <div className="absolute bottom-0 z-10 w-full max-w-[280px] sm:max-w-[340px] md:max-w-[420px] aspect-[4/5] flex items-end justify-center">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop" // Tautan mockup sementara
              alt="Ghillant Dimisqi"
              className="w-full h-full object-cover object-center rounded-b-3xl mix-blend-normal filter drop-shadow-[0_15px_15px_rgba(0,0,0,0.4)] opacity-95"
              style={{
                maskImage:
                  "linear-gradient(to bottom, black 85%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, black 85%, transparent 100%)",
              }}
            />
          </div>

          {/* Elemen Dekoratif Bentuk Bintang di Background */}
          <div className="absolute bottom-16 right-6 text-[#bc4f76] text-5xl opacity-40 select-none animate-spin-slow">
            ✦
          </div>
          <div className="absolute top-1/4 left-4 text-[#bc4f76] text-6xl opacity-30 select-none">
            ✦
          </div>
        </div>

        {/* --- KOLOM KANAN: STATISTIK & CALL TO ACTION --- */}
        <div className="order-3 md:order-3 md:col-span-3 flex flex-col justify-between h-full py-4 items-end space-y-8 md:space-y-0 w-full">
          {/* Section List Statistik */}
          <div className="space-y-4 md:space-y-5 w-full text-right max-w-[160px] md:max-w-[200px] ml-auto">
            <div className="border-b border-white/10 pb-3">
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
                2+
              </h3>
              <p className="text-[10px] md:text-xs text-white/60 font-light uppercase tracking-wider">
                Years Experience
              </p>
            </div>
            <div className="border-b border-white/10 pb-3">
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
                99%
              </h3>
              <p className="text-[10px] md:text-xs text-white/60 font-light uppercase tracking-wider">
                Client Satisfaction
              </p>
            </div>
            <div className="border-b border-white/10 pb-3">
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
                3
              </h3>
              <p className="text-[10px] md:text-xs text-white/60 font-light uppercase tracking-wider">
                Project Delivered
              </p>
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
                50
              </h3>
              <p className="text-[10px] md:text-xs text-white/60 font-light uppercase tracking-wider">
                Clients Worldwide
              </p>
            </div>
          </div>

          {/* Tombol Kontak Emas (CTA Button) */}
          <button className="w-full sm:w-auto bg-[#f2bd54] hover:bg-[#dbab4c] text-black font-bold pl-5 pr-1.5 py-1.5 rounded-full flex items-center justify-between sm:justify-start gap-4 shadow-xl transition-all transform hover:scale-[1.03] active:scale-[0.98] group self-end">
            <span className="text-xs md:text-sm tracking-wide pl-1">
              Contact Me
            </span>
            <div className="bg-black text-white p-2 rounded-full group-hover:translate-x-1 transition-transform duration-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" x2="19" y1="12" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </div>
          </button>
        </div>
      </main>

    </div>
  );
}

