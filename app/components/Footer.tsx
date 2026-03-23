"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.04] py-14 relative">
      <div className="absolute inset-0 grain" />
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <Image
              src="/logos/cogo-logo.png"
              alt="COGO"
              width={100}
              height={34}
              className="h-5 w-auto brightness-0 invert opacity-40"
            />
          </div>

          <nav className="flex items-center gap-8 text-[13px] text-white/35">
            <a href="#services" className="hover:text-white/70 transition-colors duration-300">
              Services
            </a>
            <a href="#approach" className="hover:text-white/70 transition-colors duration-300">
              Approach
            </a>
            <a href="#results" className="hover:text-white/70 transition-colors duration-300">
              Why COGO
            </a>
            <a href="#contact" className="hover:text-white/70 transition-colors duration-300">
              Contact
            </a>
          </nav>

          <a
            href="https://www.linkedin.com/company/cogo-business-transformation"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/30 hover:text-accent transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </div>

        <div className="mt-10 pt-8 border-t border-white/[0.04] text-center">
          <p className="text-[11px] text-white/25 tracking-wide">
            &copy; {new Date().getFullYear()} COGO Business Transformation. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
