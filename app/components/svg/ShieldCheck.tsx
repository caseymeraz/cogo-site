"use client";

import { motion } from "framer-motion";

export default function ShieldCheck({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 350" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Shield shape */}
      <motion.path
        d="M200 30 L340 80 L340 180 C340 260 270 310 200 330 C130 310 60 260 60 180 L60 80 Z"
        fill="url(#shield-fill)" stroke="url(#shield-stroke)" strokeWidth="2"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />
      {/* Inner shield glow */}
      <motion.path
        d="M200 60 L310 100 L310 180 C310 240 255 280 200 300 C145 280 90 240 90 180 L90 100 Z"
        fill="url(#shield-inner)" strokeWidth="0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
      />
      {/* Checkmark */}
      <motion.path
        d="M150 175 L185 210 L255 140"
        stroke="#0066ff" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
      />
      {/* Decorative dots */}
      {[
        { cx: 200, cy: 50, delay: 0.3 },
        { cx: 330, cy: 100, delay: 0.5 },
        { cx: 70, cy: 100, delay: 0.5 },
        { cx: 200, cy: 320, delay: 0.8 },
      ].map((dot, i) => (
        <motion.circle
          key={i} cx={dot.cx} cy={dot.cy} r="4" fill="#0066ff"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: dot.delay, ease: "backOut" }}
        />
      ))}
      <defs>
        <linearGradient id="shield-stroke" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#0066ff" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
        <linearGradient id="shield-fill" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#0066ff" stopOpacity="0.06" />
          <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.03" />
        </linearGradient>
        <radialGradient id="shield-inner">
          <stop offset="0%" stopColor="#0066ff" stopOpacity="0.08" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
      </defs>
    </svg>
  );
}
