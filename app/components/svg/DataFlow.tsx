"use client";

import { motion } from "framer-motion";

export default function DataFlow({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 800 250" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Left box - Source Systems */}
      <motion.rect x="30" y="60" width="160" height="130" rx="12" fill="#f7f7f8" stroke="#e5e7eb" strokeWidth="1.5"
        initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} />
      <text x="110" y="95" textAnchor="middle" fill="#0a0a1a" fontSize="13" fontWeight="600" fontFamily="system-ui">Source</text>
      <text x="110" y="112" textAnchor="middle" fill="#6b7280" fontSize="11" fontFamily="system-ui">Systems</text>
      {[85, 105, 125].map((y, i) => (
        <motion.rect key={i} x="55" y={y + 20} width="110" height="6" rx="3" fill={i === 1 ? "#0066ff" : "#e5e7eb"}
          initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }} style={{ transformOrigin: "left" }} fillOpacity={i === 1 ? 0.3 : 1} />
      ))}

      {/* Arrow 1 */}
      <motion.g initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.6 }}>
        <motion.path d="M200 125 L280 125" stroke="#0066ff" strokeWidth="2" strokeDasharray="6 4"
          initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.6 }} />
        <path d="M275 120 L285 125 L275 130" fill="#0066ff" />
      </motion.g>

      {/* Center box - Transform */}
      <motion.rect x="290" y="40" width="220" height="170" rx="16" fill="white" stroke="#0066ff" strokeWidth="2"
        initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }} />
      <motion.rect x="290" y="40" width="220" height="170" rx="16" fill="url(#center-glow)" strokeWidth="0"
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.6 }} />
      <text x="400" y="85" textAnchor="middle" fill="#0066ff" fontSize="14" fontWeight="700" fontFamily="system-ui">COGO</text>
      <text x="400" y="105" textAnchor="middle" fill="#6b7280" fontSize="11" fontFamily="system-ui">Independent Evaluation</text>
      {/* Gear icon suggestion */}
      <motion.circle cx="400" cy="150" r="25" fill="none" stroke="#0066ff" strokeWidth="1.5" strokeDasharray="4 3"
        animate={{ rotate: 360 }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }} />
      <circle cx="400" cy="150" r="8" fill="#0066ff" fillOpacity="0.15" stroke="#0066ff" strokeWidth="1.5" />

      {/* Arrow 2 */}
      <motion.g initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 1.0 }}>
        <motion.path d="M520 125 L600 125" stroke="#7c3aed" strokeWidth="2" strokeDasharray="6 4"
          initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 1.0 }} />
        <path d="M595 120 L605 125 L595 130" fill="#7c3aed" />
      </motion.g>

      {/* Right box - Right Fit */}
      <motion.rect x="610" y="60" width="160" height="130" rx="12" fill="#f7f7f8" stroke="#e5e7eb" strokeWidth="1.5"
        initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.8 }} />
      <text x="690" y="95" textAnchor="middle" fill="#0a0a1a" fontSize="13" fontWeight="600" fontFamily="system-ui">Right Fit</text>
      <text x="690" y="112" textAnchor="middle" fill="#6b7280" fontSize="11" fontFamily="system-ui">Solution</text>
      <motion.path d="M665 150 L680 165 L715 135" stroke="#0066ff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 1.4 }} />

      <defs>
        <radialGradient id="center-glow">
          <stop offset="0%" stopColor="#0066ff" stopOpacity="0.06" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
      </defs>
    </svg>
  );
}
