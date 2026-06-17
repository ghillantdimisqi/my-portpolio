import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#090b0e] text-[#9ca3af] py-6 px-6 md:px-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Teks Hak Cipta */}
        <div className="text-sm font-light tracking-wide text-center sm:text-left">
          ©️ 2026 Ghillant Dimisqi. All rights reserved.
        </div>

        {/* Ikon Media Sosial */}
        <div className="flex items-center gap-3">
          {/* Facebook */}
          <a
            href="#"
            className="w-8 h-8 rounded-full border border-gray-700 flex items-center justify-center hover:border-gray-400 hover:text-white transition-colors"
            aria-label="Facebook"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
            </svg>
          </a>

          {/* Instagram */}
          <a
            href="#"
            className="w-8 h-8 rounded-full border border-gray-700 flex items-center justify-center hover:border-gray-400 hover:text-white transition-colors"
            aria-label="Instagram"
          >
            <svg
              className="w-4 h-4 fill-none stroke-current stroke-2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="#"
            className="w-8 h-8 rounded-full border border-gray-700 flex items-center justify-center hover:border-gray-400 hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>

          {/* TikTok */}
          <a
            href="#"
            className="w-8 h-8 rounded-full border border-gray-700 flex items-center justify-center hover:border-gray-400 hover:text-white transition-colors"
            aria-label="TikTok"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12.525.02c1.31.01 2.61.01 3.91.02.08 1.53.63 3.03 1.63 4.14.7.75 1.6 1.3 2.59 1.61v3.96c-1.3-.12-2.57-.66-3.58-1.5-.47-.39-.88-.86-1.21-1.38v6.74c0 1.24-.26 2.48-.77 3.61-.7 1.54-1.97 2.76-3.52 3.37-1.42.56-3 .67-4.49.33-1.67-.38-3.18-1.44-4.14-2.89C1.94 16.59 1.51 14.82 1.74 13c.31-2.4 2.1-4.45 4.51-5.11.83-.23 1.7-.3 2.56-.2v3.91c-.81-.13-1.65.03-2.35.48-.96.61-1.47 1.75-1.34 2.87.12 1.05.8 1.98 1.77 2.37.76.3 1.61.27 2.34-.1.74-.38 1.25-1.12 1.32-1.95.05-1.92.02-11.41.02-13.33z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
