"use client";

import { motion } from "framer-motion";

export default function ComplianceStack({ className = "" }: { className?: string }) {
  const layers = [
    { y: 20, label: "Regulatory Compliance", sub: "MHRA / HPRA / FDA / GxP", color: "#dc2626", bg: "#fef2f2", border: "#fca5a5" },
    { y: 80, label: "Validation & Audit Trail", sub: "CSV / GAMP 5 / 21 CFR Part 11", color: "#7c3aed", bg: "#f5f3ff", border: "#c4b5fd" },
    { y: 140, label: "ERP System Layer", sub: "SAP / Oracle / Dynamics", color: "#0066ff", bg: "#eff6ff", border: "#93c5fd" },
    { y: 200, label: "Business Process", sub: "Quality / Batch / Serialisation", color: "#059669", bg: "#ecfdf5", border: "#6ee7b7" },
  ];

  return (
    <svg viewBox="0 0 600 280" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {layers.map((layer, i) => (
        <motion.g key={layer.label}
          initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.12 }}
        >
          <rect x="100" y={layer.y} width="400" height="50" rx="10"
            fill={layer.bg} stroke={layer.border} strokeWidth="1.5" />
          <text x="300" y={layer.y + 22} textAnchor="middle"
            fill={layer.color} fontSize="12" fontWeight="600" fontFamily="system-ui">
            {layer.label}
          </text>
          <text x="300" y={layer.y + 38} textAnchor="middle"
            fill="#9ca3af" fontSize="10" fontFamily="system-ui">
            {layer.sub}
          </text>
        </motion.g>
      ))}

      {/* Connecting arrows */}
      {[70, 130, 190].map((y, i) => (
        <motion.g key={i}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.5 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 + i * 0.1 }}
        >
          <line x1="300" y1={y} x2="300" y2={y + 10} stroke="#d1d5db" strokeWidth="1.5" />
          <path d={`M295 ${y + 7} L300 ${y + 13} L305 ${y + 7}`} fill="#d1d5db" />
        </motion.g>
      ))}

      {/* Side bracket - "Validated Environment" */}
      <motion.g initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.8 }}>
        <path d="M520 30 L540 30 L540 240 L520 240" fill="none" stroke="#e5e7eb" strokeWidth="1.5" />
        <text x="555" y="140" fill="#9ca3af" fontSize="10" fontFamily="system-ui" transform="rotate(90 555 140)" textAnchor="middle">
          Validated Environment
        </text>
      </motion.g>
    </svg>
  );
}
