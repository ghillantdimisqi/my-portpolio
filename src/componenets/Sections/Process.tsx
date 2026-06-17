import React from 'react';
import { ArrowRight } from 'lucide-react';

// Data portfolio tiruan berdasarkan gambar
const portfolios = [
  {
    id: 1,
    title: 'Portfolio 1',
    category: 'Web Development',
    tag: 'Best Portfolio',
    // Ganti dengan path gambar portfolio Anda di folder public/
    image: '/images/portfolio1.jpg', 
    bgColor: 'bg-[#0f0926]', // Estimasi warna background mock-up 1
  },
  {
    id: 2,
    title: 'Portfolio 2',
    category: 'Web Development',
    tag: 'Best Portfolio',
    image: '/images/portfolio2.jpg',
    bgColor: 'bg-[#0b0f19]', // Estimasi warna background mock-up 2
  },
  {
    id: 3,
    title: 'Portfolio 3',
    category: 'Web Development',
    tag: 'Best Portfolio',
    image: '/images/portfolio3.jpg',
    bgColor: 'bg-[#0d1117]', // Estimasi warna background mock-up 3
  },
];

export default function PortfolioSection() {
  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-24 font-sans text-slate-800">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER SECTION */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
              Design to <span className="text-[#a855f7]">Code Accuracy</span>
            </h2>
            <p className="text-gray-500 leading-relaxed text-sm md:text-base">
              We translated design mockups into pixel-perfect, responsive components, 
              ensuring a smooth user experience across all devices.
            </p>
          </div>
          
          {/* Button See All */}
          <button className="flex items-center gap-3 border border-slate-300 hover:border-slate-800 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 self-start md:self-auto group">
            See All
            <span className="bg-black text-white p-2 rounded-full group-hover:scale-110 transition-transform">
              <ArrowRight className="w-4 h-4" />
            </span>
          </button>
        </div>

        {/* CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolios.map((item) => (
            <div 
              key={item.id} 
              className="bg-[#f3f4f6] rounded-3xl p-5 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Container Mockup Gambar */}
              <div className={'relative ${item.bgColor} rounded-2xl aspect-[4/3] overflow-hidden p-4 mb-6 flex items-center justify-center'}>
                
                {/* Ribbon / Tag */}
                {item.tag && (
                  <div className="absolute top-0 left-0 bg-[#eab308] text-black font-bold text-[10px] uppercase px-3 py-1 rounded-br-xl rounded-tl-xl z-10 shadow-sm">
                    {item.tag}
                  </div>
                )}
                
                {/* Gambar Mockup Website */}
                {/* Anda bisa mengganti tag img dengan <Image /> dari next/image */}
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover rounded-xl border border-slate-700/50 object-top shadow-xl transition-transform duration-500 hover:scale-[1.02]"
                />
              </div>

              {/* Detail Info Bawah */}
              <div className="pt-2 border-t border-slate-200">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-lg text-slate-900 mb-1">{item.title}</h3>
                    <p className="text-xs text-gray-400 font-medium">{item.category}</p>
                  </div>
                  
                  {/* Circle Arrow Button */}
                  <button className="bg-[#b45309]/10 hover:bg-[#b45309] text-[#b45309] hover:text-white p-3 rounded-full transition-colors duration-300">
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}