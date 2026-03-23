"use client";

import { motion } from "framer-motion";

export default function CRMPipeline({ className = "" }: { className?: string }) {
  const stages = [
    { label: "Leads", count: "124", width: 160, color: "#0066ff", opacity: 0.12 },
    { label: "Qualified", count: "67", width: 140, color: "#0066ff", opacity: 0.18 },
    { label: "Proposal", count: "34", width: 120, color: "#7c3aed", opacity: 0.15 },
    { label: "Negotiation", count: "18", width: 100, color: "#7c3aed", opacity: 0.22 },
    { label: "Won", count: "12", width: 80, color: "#0066ff", opacity: 0.25 },
  ];

  return (
    <svg viewBox="0 0 600 280" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {stages.map((stage, i) => {
        const y = 20 + i * 50;
        const x = (600 - stage.width) / 2;
        return (
          <motion.g key={stage.label}
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            style={{ transformOrigin: "center" }}
          >
            <rect x={x} y={y} width={stage.width} height="38" rx="8"
              fill={stage.color} fillOpacity={stage.opacity}
              stroke={stage.color} strokeWidth="1" strokeOpacity="0.2" />
            <text x="300" y={y + 18} textAnchor="middle"
              fill="#0a0a1a" fontSize="12" fontWeight="600" fontFamily="system-ui">
              {stage.label}
            </text>
            <text x="300" y={y + 32} textAnchor="middle"
              fill="#6b7280" fontSize="10" fontFamily="system-ui">
              {stage.count} opportunities
            </text>
          </motion.g>
        );
      })}

      {/* Arrow indicators between stages */}
      {[70, 120, 170, 220].map((y, i) => (
        <motion.path key={i} d={`M295 ${y - 3} L300 ${y + 4} L305 ${y - 3}`}
          fill="none" stroke="#d1d5db" strokeWidth="1.5" strokeLinecap="round"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          transition={{ delay: 0.3 + i * 0.1 }} />
      ))}
    </svg>
  );
}
