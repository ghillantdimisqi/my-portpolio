"use client";
import { useState } from "react";

export default function Faq() {
  // Menyimpan index FAQ yang sedang terbuka (default: 0 yaitu pertanyaan pertama)
  const [openIndex, setOpenIndex] = useState(0);

  const faqData = [
    {
      id: "01",
      question: "What technologies do you work with?",
      answer:
        "I mainly work with HTML, CSS, JavaScript, and frameworks like React, Next.js, and Vue. I also have experience using Tailwind CSS, TypeScript, and working with APIs.",
    },
    {
      id: "02",
      question: "Do you work on freelance or remote projects?",
      answer:
        "Yes, I am available for both freelance gigs and full-time remote contracts. I am used to working across different time zones.",
    },
    {
      id: "03",
      question: "Can you convert Figma or Sketch designs into code?",
      answer:
        "Absolutely. I pride myself on pixel-perfect conversion, ensuring responsiveness, clean Tailwind code, and smooth animations.",
    },
    {
      id: "04",
      question: "Do you collaborate with backend developers or teams?",
      answer:
        "Yes, I frequently collaborate with backend teams, integrating RESTful and GraphQL APIs seamlessly into the frontend.",
    },
    {
      id: "05",
      question: "Are you available for full-time roles?",
      answer:
        "Yes, I am actively looking for full-time opportunities where I can contribute to exciting projects and grow with the team.",
    },
  ];

  const toggleFaq = (index) => {
    // Jika diklik lagi pada yang sudah terbuka, maka akan tertutup (null)
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#F8F8F8] min-h-screen py-20 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">
            Let's Clear Things Up
          </h2>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
            I've answered a few questions that usually come up when working with
            a frontend developer like me.
          </p>
        </div>

        {/* Accordion List */}
        <div className="border-t border-gray-200">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.id}
                className="border-b border-gray-200 py-6 transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-start justify-between text-left focus:outline-none group"
                >
                  {/* ID & Pertanyaan */}
                  <div className="flex items-start gap-8 md:gap-16">
                    <span className="text-sm md:text-base font-bold text-gray-900 pt-1">
                      {item.id}
                    </span>
                    <span className="text-base md:text-xl font-semibold text-gray-950 group-hover:text-gray-700 transition-colors">
                      {item.question}
                    </span>
                  </div>

                  {/* Tombol +/- */}
                  <div className="ml-4 flex-shrink-0">
                    {isOpen ? (
                      <div className="w-8 h-8 rounded-full bg-[#B26A7A] text-white flex items-center justify-center text-xl font-light select-none">
                        +
                      </div>
                    ) : (
                      <div className="w-8 h-8 rounded-full border border-gray-300 text-gray-600 flex items-center justify-center text-xl font-light select-none bg-white">
                        −
                      </div>
                    )}
                  </div>
                </button>

                {/* Konten Jawaban (Accordion) */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100 mt-4"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden pl-12 md:pl-20 max-w-3xl">
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
