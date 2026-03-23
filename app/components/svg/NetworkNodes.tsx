"use client";

import { motion } from "framer-motion";

export default function NetworkNodes({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 800 300" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Connecting lines */}
      <motion.path
        d="M100 150 L250 80 L400 150 L550 80 L700 150"
        stroke="url(#line-grad)" strokeWidth="1.5" strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
      <motion.path
        d="M250 80 L250 200 M400 150 L400 250 M550 80 L550 200"
        stroke="url(#line-grad)" strokeWidth="1" strokeLinecap="round" strokeDasharray="4 4"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 0.4 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.5 }}
      />
      {/* Nodes */}
      {[
        { cx: 100, cy: 150, r: 8, delay: 0.2 },
        { cx: 250, cy: 80, r: 10, delay: 0.4 },
        { cx: 400, cy: 150, r: 12, delay: 0.6 },
        { cx: 550, cy: 80, r: 10, delay: 0.8 },
        { cx: 700, cy: 150, r: 8, delay: 1.0 },
        { cx: 250, cy: 200, r: 6, delay: 0.7 },
        { cx: 400, cy: 250, r: 6, delay: 0.9 },
        { cx: 550, cy: 200, r: 6, delay: 1.1 },
      ].map((node, i) => (
        <motion.circle
          key={i} cx={node.cx} cy={node.cy} r={node.r}
          fill="url(#node-grad)" stroke="#0066ff" strokeWidth="1.5"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: node.delay, ease: "backOut" }}
        />
      ))}
      {/* Pulse rings on main nodes */}
      {[{ cx: 400, cy: 150 }, { cx: 250, cy: 80 }, { cx: 550, cy: 80 }].map((p, i) => (
        <motion.circle
          key={`pulse-${i}`} cx={p.cx} cy={p.cy} r="12"
          fill="none" stroke="#0066ff" strokeWidth="1"
          initial={{ scale: 1, opacity: 0.4 }}
          animate={{ scale: 2.5, opacity: 0 }}
          transition={{ duration: 2, repeat: Infinity, delay: i * 0.7 }}
        />
      ))}
      <defs>
        <linearGradient id="line-grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0066ff" stopOpacity="0.3" />
          <stop offset="50%" stopColor="#7c3aed" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#0066ff" stopOpacity="0.3" />
        </linearGradient>
        <radialGradient id="node-grad">
          <stop offset="0%" stopColor="#0066ff" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#0066ff" stopOpacity="0.05" />
        </radialGradient>
      </defs>
    </svg>
  );
}
