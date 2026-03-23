"use client";

import { motion } from "framer-motion";

export default function TimelineRoadmap({ className = "" }: { className?: string }) {
  const milestones = [
    { x: 80, label: "Strategy", sub: "Months 1-2", done: true },
    { x: 240, label: "Selection", sub: "Months 3-5", done: true },
    { x: 400, label: "Build", sub: "Months 6-12", done: false },
    { x: 560, label: "Go-Live", sub: "Month 14", done: false },
    { x: 700, label: "Sustain", sub: "Ongoing", done: false },
  ];

  return (
    <svg viewBox="0 0 800 180" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Track background */}
      <motion.rect x="80" y="68" width="650" height="4" rx="2" fill="#e5e7eb"
        initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }}
        transition={{ duration: 1 }} style={{ transformOrigin: "left" }} />

      {/* Completed track */}
      <motion.rect x="80" y="68" width="280" height="4" rx="2" fill="url(#timeline-grad)"
        initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.3 }} style={{ transformOrigin: "left" }} />

      {milestones.map((m, i) => (
        <motion.g key={m.label}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 + i * 0.12 }}
        >
          {/* Milestone dot */}
          <circle cx={m.x} cy="70" r={m.done ? 10 : 8}
            fill={m.done ? "#0066ff" : "white"}
            stroke={m.done ? "#0066ff" : "#d1d5db"} strokeWidth="2" />
          {m.done && (
            <motion.path
              d={`M${m.x - 4} 70 L${m.x - 1} 73 L${m.x + 4} 67`}
              stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
            />
          )}
          {/* Labels */}
          <text x={m.x} y={i % 2 === 0 ? 42 : 110} textAnchor="middle"
            fill="#0a0a1a" fontSize="12" fontWeight="600" fontFamily="system-ui">
            {m.label}
          </text>
          <text x={m.x} y={i % 2 === 0 ? 56 : 124} textAnchor="middle"
            fill="#9ca3af" fontSize="10" fontFamily="system-ui">
            {m.sub}
          </text>
          {/* Connector line */}
          <line x1={m.x} y1={i % 2 === 0 ? 58 : 70}
            x2={m.x} y2={i % 2 === 0 ? 70 : 105}
            stroke="#e5e7eb" strokeWidth="1" strokeDasharray="2 2" />
        </motion.g>
      ))}

      {/* Moving dot on track */}
      <motion.circle cx="80" cy="70" r="4" fill="#0066ff"
        animate={{ cx: [80, 360] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", repeatType: "reverse" }} />

      <defs>
        <linearGradient id="timeline-grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0066ff" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
      </defs>
    </svg>
  );
}
