"use client";

import Image from "next/image";
import Reveal from "./Reveal";

const logos = [
  { name: "Kerry Group", src: "/logos/kerry.png" },
  { name: "Glanbia", src: "/logos/glanbia.png" },
  { name: "AbbVie", src: "/logos/abbvie.png" },
  { name: "HSE", src: "/logos/hse.png" },
  { name: "Sharp", src: "/logos/sharp.png" },
  { name: "UnitedDrug", src: "/logos/uniteddrug.png" },
  { name: "IPL", src: "/logos/ipl.png" },
];

export default function LogoTicker() {
  return (
    <section className="relative py-20 border-y border-white/[0.06] overflow-hidden">
      <Reveal>
        <p className="text-[11px] uppercase tracking-[0.15em] text-white/40 text-center mb-10 font-medium">
          Trusted by leaders across pharma, food & beverage, healthcare, and
          manufacturing
        </p>
      </Reveal>

      {/* Gradient fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-[#050508] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-[#050508] to-transparent z-10 pointer-events-none" />

      {/* Scrolling logos */}
      <div className="flex overflow-hidden">
        <div className="flex items-center gap-20 logo-ticker">
          {[...logos, ...logos, ...logos, ...logos].map((logo, i) => (
            <div
              key={`${logo.name}-${i}`}
              className="flex-shrink-0 opacity-30 hover:opacity-60 transition-opacity duration-500"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={140}
                height={50}
                className="h-9 w-auto brightness-0 invert object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
