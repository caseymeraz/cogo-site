"use client";

import { motion } from "framer-motion";

export default function ComparisonScale({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 600 280" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Center pillar */}
      <motion.rect x="295" y="40" width="10" height="200" rx="5" fill="#e5e7eb"
        initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true }}
        transition={{ duration: 0.6 }} style={{ transformOrigin: "bottom" }} />

      {/* Balance beam */}
      <motion.line x1="100" y1="80" x2="500" y2="80" stroke="#0a0a1a" strokeWidth="3" strokeLinecap="round"
        initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }} style={{ transformOrigin: "center" }} />

      {/* Fulcrum triangle */}
      <motion.path d="M285 80 L300 55 L315 80" fill="#0066ff" fillOpacity="0.15" stroke="#0066ff" strokeWidth="1.5"
        initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        transition={{ delay: 0.5 }} />

      {/* Left pan - Vendor Bias */}
      <motion.g initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.6, duration: 0.5 }}>
        <line x1="140" y1="80" x2="110" y2="130" stroke="#e5e7eb" strokeWidth="1.5" />
        <line x1="140" y1="80" x2="170" y2="130" stroke="#e5e7eb" strokeWidth="1.5" />
        <rect x="80" y="130" width="120" height="70" rx="10" fill="#fef2f2" stroke="#fca5a5" strokeWidth="1.5" />
        <text x="140" y="160" textAnchor="middle" fill="#dc2626" fontSize="11" fontWeight="600" fontFamily="system-ui">Vendor</text>
        <text x="140" y="178" textAnchor="middle" fill="#dc2626" fontSize="11" fontWeight="600" fontFamily="system-ui">Bias</text>
      </motion.g>

      {/* Right pan - Independent */}
      <motion.g initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.8, duration: 0.5 }}>
        <line x1="460" y1="80" x2="430" y2="130" stroke="#e5e7eb" strokeWidth="1.5" />
        <line x1="460" y1="80" x2="490" y2="130" stroke="#e5e7eb" strokeWidth="1.5" />
        <rect x="400" y="130" width="120" height="70" rx="10" fill="#eff6ff" stroke="#93c5fd" strokeWidth="1.5" />
        <text x="460" y="160" textAnchor="middle" fill="#0066ff" fontSize="11" fontWeight="600" fontFamily="system-ui">Independent</text>
        <text x="460" y="178" textAnchor="middle" fill="#0066ff" fontSize="11" fontWeight="600" fontFamily="system-ui">Advice</text>
      </motion.g>

      {/* Checkmark on right */}
      <motion.path d="M445 215 L455 225 L475 205" stroke="#0066ff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 1.2 }} />

      {/* X on left */}
      <motion.g initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 1.0 }}>
        <line x1="130" y1="210" x2="150" y2="230" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" />
        <line x1="150" y1="210" x2="130" y2="230" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" />
      </motion.g>
    </svg>
  );
}
