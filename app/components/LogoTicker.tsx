"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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
    <section className="relative py-16 border-y border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs uppercase tracking-widest text-muted text-center"
        >
          Trusted by leaders across pharma, food & beverage, healthcare, and
          manufacturing
        </motion.p>
      </div>

      {/* Gradient fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

      {/* Scrolling logos */}
      <div className="flex overflow-hidden">
        <div className="flex items-center gap-16 logo-ticker">
          {[...logos, ...logos].map((logo, i) => (
            <div
              key={`${logo.name}-${i}`}
              className="flex-shrink-0 opacity-40 hover:opacity-70 transition-opacity duration-300"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={140}
                height={50}
                className="h-10 w-auto brightness-0 invert object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
