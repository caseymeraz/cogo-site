"use client";

import { motion } from "framer-motion";

export default function ProcessFlow({ className = "" }: { className?: string }) {
  const steps = [
    { x: 60, label: "Discover" },
    { x: 210, label: "Define" },
    { x: 360, label: "Evaluate" },
    { x: 510, label: "Select" },
    { x: 660, label: "Deliver" },
  ];

  return (
    <svg viewBox="0 0 800 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Progress track */}
      <motion.rect
        x="60" y="88" width="670" height="4" rx="2" fill="#e5e7eb"
        initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }} style={{ transformOrigin: "left" }}
      />
      <motion.rect
        x="60" y="88" width="670" height="4" rx="2" fill="url(#track-grad)"
        initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }} style={{ transformOrigin: "left" }}
      />

      {steps.map((step, i) => (
        <motion.g
          key={step.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
        >
          {/* Step circle */}
          <circle cx={step.x + 35} cy="90" r="18" fill="white" stroke="#0066ff" strokeWidth="2" />
          <text x={step.x + 35} y="95" textAnchor="middle" fill="#0066ff" fontSize="13" fontWeight="600" fontFamily="system-ui">
            {i + 1}
          </text>
          {/* Label */}
          <text x={step.x + 35} y="140" textAnchor="middle" fill="#6b7280" fontSize="12" fontWeight="500" fontFamily="system-ui">
            {step.label}
          </text>
        </motion.g>
      ))}

      {/* Active indicator on step 3 */}
      <motion.circle
        cx="395" cy="90" r="18" fill="none" stroke="#0066ff" strokeWidth="2"
        initial={{ scale: 1, opacity: 0.5 }}
        animate={{ scale: 1.8, opacity: 0 }}
        transition={{ duration: 2, repeat: Infinity }}
      />

      <defs>
        <linearGradient id="track-grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0066ff" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
      </defs>
    </svg>
  );
}
