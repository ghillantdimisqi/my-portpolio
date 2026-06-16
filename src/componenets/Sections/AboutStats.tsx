'use client';

import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react'; 

const TechStackSection = () => {
  const skills = [
    {
      title: 'HTML',
      description: 'Crafting semantic, accessible HTML structures.',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      bgColor: 'bg-[#F2B245]',
      textColor: 'text-neutral-800',
    },
    {
      title: 'CSS',
      description: 'Designing beautiful, responsive, and modern layouts.',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
      bgColor: 'bg-white border border-neutral-100 shadow-sm',
      textColor: 'text-neutral-800',
    },
    {
      title: 'Javascript',
      description: 'Building dynamic functionality and interactive features.',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      bgColor: 'bg-[#F2B245]',
      textColor: 'text-neutral-800',
    },
    {
      title: 'React',
      description: 'Developing scalable, component-based web applications.',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      bgColor: 'bg-white border border-neutral-100 shadow-sm',
      textColor: 'text-neutral-800',
    },
  ];

  return (
    <section className="w-full min-h-screen bg-gradient-to-b from-white via-neutral-50 to-[pink] flex flex-col justify-center items-center px-4 py-16 font-sans text-neutral-900">
      {/* Header */}
      <div className="text-center max-w-2xl mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight mb-4">
          Code, Design, and Everything in Between
        </h2>
        <p className="text-sm md:text-base text-neutral-600 font-medium">
          These are the technologies that power my workflow and bring ideas to
          life.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl w-full px-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={
              "${skill.bgColor} rounded-[48px] p-8 flex flex-col items-center text-center justify-center min-h-[340px] transition-transform duration-300 hover:-translate-y-2"
            }
          >
            {/* Icon Container */}
            <div className="w-16 h-16 bg-white rounded-full shadow-md flex items-center justify-center p-3.5 mb-6">
              <img
                src={skill.icon}
                alt={"${skill.title} icon"}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Title */}
            <h3 className={"text-xl font-bold mb-3 ${skill.textColor}"}>
              {skill.title}
            </h3>

            {/* Description */}
            <p
              className={
                "text-sm leading-relaxed max-w-[200px] ${skill.textColor} opacity-90"
              }
            >
              {skill.description}
            </p>
          </div>
        ))}
      </div>

      {/* Slider Navigation Buttons */}
      <div className="flex gap-4 mt-12">
        <button className="w-12 h-12 rounded-full border border-neutral-300 bg-white flex items-center justify-center text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900 transition-colors shadow-sm">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button className="w-12 h-12 rounded-full border border-neutral-300 bg-white flex items-center justify-center text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900 transition-colors shadow-sm">
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};

export default TechStackSection;