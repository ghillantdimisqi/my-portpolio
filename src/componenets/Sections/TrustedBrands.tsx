import React from 'react';
import { Check, X } from 'lucide-react';

export default function ComparisonSection() {
  const featuresWithMe = [
    "React Expert",
    "Precise Website Implementation",
    "TypeScript Proficiency",
    "Clean, Maintainable Code",
    "Responsive Website Development",
    "Performance Optimization",
    "UI Design Proficiency (Figma)"
  ];

  const featuresAnotherTalent = [
    "Basic React Knowledge",
    "Inconsistent Design Translation",
    "Little to No TypeScript Knowledge",
    "Unstructured Code",
    "Inconsistent Responsiveness",
    "Slow and Heavy Websites",
    "No Design Skills"
  ];

  return (
    <section className="bg-white py-16 px-4 max-w-6xl mx-auto font-sans">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          More Than Just Code
        </h2>
        <p className="text-sm md:text-base text-gray-600 max-w-md mx-auto">
          We care about design, performance, and user experience all in one.
        </p>
      </div>

      {/* Grid Container */}
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        
        {/* Card: With Me */}
        <div className="bg-[#f2b94c] rounded-2xl p-8 md:p-10 shadow-sm flex flex-col items-center">
          <h3 className="text-lg font-bold text-gray-900 mb-6">With Me</h3>
          
          {/* Avatar */}
          <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-white/50 mb-8">
            <img 
              src="/avatar-me.jpg" // Ganti dengan path foto Anda
              alt="My Avatar" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* List Kelebihan */}
          <ul className="w-full space-y-4">
            {featuresWithMe.map((item, index) => (
              <li key={index} className="flex items-center justify-center gap-3 text-sm md:text-base font-semibold text-gray-900">
                <Check className="w-5 h-5 shrink-0 stroke-[3]" />
                <span className="text-center">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Card: Another Talent */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 md:p-10 shadow-sm flex flex-col items-center">
          <h3 className="text-lg font-bold text-gray-900 mb-6">Another Talent</h3>
          
          {/* Avatar Placeholder */}
          <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center mb-8">
            <svg className="w-10 h-10 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </div>

          {/* List Kekurangan */}
          <ul className="w-full space-y-4">
            {featuresAnotherTalent.map((item, index) => (
              <li key={index} className="flex items-center justify-center gap-3 text-sm md:text-base font-medium text-gray-700">
                <X className="w-5 h-5 text-red-500 shrink-0 stroke-[2]" />
                <span className="text-center">{item}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}