"use client";

import { motion } from "framer-motion";

export default function SystemArchitecture({ className = "" }: { className?: string }) {
  const modules = [
    { x: 80, y: 30, w: 130, label: "Finance", color: "#0066ff" },
    { x: 240, y: 30, w: 130, label: "Operations", color: "#7c3aed" },
    { x: 400, y: 30, w: 130, label: "Supply Chain", color: "#0066ff" },
    { x: 560, y: 30, w: 160, label: "Manufacturing", color: "#7c3aed" },
    { x: 80, y: 170, w: 130, label: "HR", color: "#7c3aed" },
    { x: 240, y: 170, w: 130, label: "Sales & CRM", color: "#0066ff" },
    { x: 400, y: 170, w: 130, label: "Procurement", color: "#7c3aed" },
    { x: 560, y: 170, w: 160, label: "Analytics", color: "#0066ff" },
  ];

  return (
    <svg viewBox="0 0 800 280" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Central ERP bar */}
      <motion.rect x="60" y="100" width="680" height="50" rx="10" fill="url(#erp-bar)" stroke="url(#erp-bar-stroke)" strokeWidth="1.5"
        initial={{ scaleX: 0, opacity: 0 }} whileInView={{ scaleX: 1, opacity: 1 }} viewport={{ once: true }}
        transition={{ duration: 0.8 }} style={{ transformOrigin: "center" }} />
      <motion.text x="400" y="130" textAnchor="middle" fill="#0066ff" fontSize="14" fontWeight="700" fontFamily="system-ui"
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 }}>
        ERP Platform
      </motion.text>

      {/* Module cards */}
      {modules.map((mod, i) => (
        <motion.g key={mod.label}
          initial={{ opacity: 0, y: i < 4 ? -15 : 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
        >
          <rect x={mod.x} y={mod.y} width={mod.w} height="50" rx="8"
            fill="white" stroke="#e5e7eb" strokeWidth="1.5" />
          <rect x={mod.x} y={mod.y} width={mod.w} height="3" rx="1.5"
            fill={mod.color} opacity="0.6" />
          <text x={mod.x + mod.w / 2} y={mod.y + 32} textAnchor="middle"
            fill="#374151" fontSize="11" fontWeight="500" fontFamily="system-ui">
            {mod.label}
          </text>
          {/* Connector line */}
          <line x1={mod.x + mod.w / 2} y1={i < 4 ? mod.y + 50 : mod.y}
            x2={mod.x + mod.w / 2} y2={i < 4 ? 100 : 150}
            stroke="#e5e7eb" strokeWidth="1.5" strokeDasharray="3 3" />
        </motion.g>
      ))}

      <defs>
        <linearGradient id="erp-bar" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0066ff" stopOpacity="0.06" />
          <stop offset="50%" stopColor="#7c3aed" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#0066ff" stopOpacity="0.06" />
        </linearGradient>
        <linearGradient id="erp-bar-stroke" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0066ff" stopOpacity="0.3" />
          <stop offset="50%" stopColor="#7c3aed" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#0066ff" stopOpacity="0.3" />
        </linearGradient>
      </defs>
    </svg>
  );
}
