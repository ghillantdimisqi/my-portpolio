import React from "react";

// Data untuk 3 kolom di bawah agar kode lebih bersih
const services = [
  {
    icon: "⚙️", // Anda bisa mengganti ini dengan Lucide-react icon atau SVG gear
    title: "COMPONENT-BASED DEVELOPMENT",
    description:
      "Reusable, scalable code built with modern frameworks like React or Vue.",
  },
  {
    icon: "🎨", // Anda bisa mengganti dengan SVG palette
    title: "PIXEL-PERFECT UI IMPLEMENTATION",
    description:
      "Translating design into high-fidelity user interfaces with attention to detail.",
  },
  {
    icon: "📱", // Anda bisa mengganti dengan SVG smartphone
    title: "RESPONSIVE & ACCESSIBLE DESIGN",
    description:
      "Optimized layouts that work seamlessly across all screen sizes and devices.",
  },
];

export default function FrontendServices() {
  return (
    <section className=" bg-white text-gray-900 py-16 px-6 md:px-12 max-w-7xl mx-auto font-sans">
      {/* Header Headline */}
      <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
        <h2 className="text-2xl md:text-4xl font-normal leading-relaxed text-slate-800">
          As frontend developers, we bring designs to life with{" "}
          <span className="text-pink-400 font-medium">clean</span>,{" "}
          <span className="text-pink-400 font-medium">responsive code</span>{" "}
          that blends creativity 🎨 with usability 🌟.
        </h2>
      </div>

      {/* Grid 3 Kolom */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6 relative">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center md:items-start md:text-left px-4 relative"
          >
            {/* Garis Pembatas Vertikal (Hanya muncul di desktop/md ke atas untuk kolom 2 dan 3) */}
            {index > 0 && (
              <div className="hidden md:block absolute left-0 top-0 bottom-0 w-[1px] bg-gray-200" />
            )}

            {/* Lingkaran Icon */}
            <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center shadow-sm text-xl mb-6 bg-gray-50">
              {service.icon}
            </div>

            {/* Judul Fitur */}
            <h3 className="text-sm md:text-base font-bold tracking-wider text-slate-900 mb-3 uppercase">
              {service.title}
            </h3>

            {/* Deskripsi */}
            <p className="text-sm text-gray-500 leading-relaxed max-w-sm md:max-w-none">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
