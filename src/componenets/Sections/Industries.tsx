import React from "react";
import Image from "next/image";

// Tipe data untuk list pengalaman
interface Experience {
  id: number;
  date: string;
  role: string;
  companyName: string;
  logoUrl: string; // Ganti dengan path logo Anda sendiri di folder public
  description: string;
}

const experiencesData: Experience[] = [
  {
    id: 1,
    date: "2025 - Present",
    role: "Frontend Developer",
    companyName: "Airbnb",
    logoUrl: "/logos/airbnb.svg", // Sediakan file logo di folder public/logos/
    description:
      "Built responsive web interfaces using modern frameworks like React.js, ensuring seamless integration with backend systems. Optimized performance, implemented accessible designs, and delivered clean, reusable code to enhance user experience and scalability.",
  },
  {
    id: 2,
    date: "2025 - Present",
    role: "Frontend Developer",
    companyName: "Airtasker",
    logoUrl: "/logos/airtasker.svg",
    description:
      "Built responsive web interfaces using modern frameworks like React.js, ensuring seamless integration with backend systems. Optimized performance, implemented accessible designs, and delivered clean, reusable code to enhance user experience and scalability.",
  },
  {
    id: 3,
    date: "2025 - Present",
    role: "Frontend Developer",
    companyName: "Slack",
    logoUrl: "/logos/slack.svg",
    description:
      "Built responsive web interfaces using modern frameworks like React.js, ensuring seamless integration with backend systems. Optimized performance, implemented accessible designs, and delivered clean, reusable code to enhance user experience and scalability.",
  },
];

export default function ExperienceSection() {
  return (
    <section className="bg-[#0b0c10] text-white min-h-screen py-20 px-6 sm:px-12 md:px-24">
      <div className="max-w-6xl mx-auto">
        {/* HEADER SECTION */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight max-w-md">
            Experiences That <br />
            <span className="text-[#f1a824]">Shaped Me!</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-xs md:text-right font-light leading-relaxed">
            From startups to side projects, every step has been a chance to
            learn, build, and level up.
          </p>
        </div>

        {/* LIST EXPERIENCES */}
        <div className="flex flex-col">
          {experiencesData.map((exp) => (
            <div
              key={exp.id}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center py-10 border-t border-gray-800/60 last:border-b last:border-gray-800/60"
            >
              {/* Kolom 1: Tanggal & Posisi */}
              <div className="md:col-span-3 flex flex-col gap-1">
                <span className="text-xs text-gray-500 font-medium tracking-wider">
                  {exp.date}
                </span>
                <h3 className="text-lg font-semibold text-gray-100">
                  {exp.role}
                </h3>
              </div>

              {/* Kolom 2: Logo Perusahaan */}
              <div className="md:col-span-3 flex items-center justify-start md:justify-center">
                <div className="w-full max-w-[180px] h-16 bg-[#121318] border border-gray-800/80 rounded-xl flex items-center justify-center p-4 hover:border-gray-700 transition-colors duration-300">
                  {/* Jika logo berupa gambar/svg siap pakai */}
                  <div className="relative w-full h-full flex items-center justify-center text-gray-400 font-bold tracking-wide">
                    {/* Gantilah baris teks di bawah ini dengan komponen <Image /> jika aset gambar sudah ada */}
                    {/* <Image src={exp.logoUrl} alt={exp.companyName} width={120} height={40} className="object-contain" /> */}
                    <span>{exp.companyName}</span>
                  </div>
                </div>
              </div>

              {/* Kolom 3: Deskripsi Pekerjaan */}
              <div className="md:col-span-6">
                <p className="text-gray-400 text-sm sm:text-base font-light leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
