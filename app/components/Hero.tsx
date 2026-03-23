"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Layered background */}
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute inset-0 grain" />

      {/* Floating orbs */}
      <motion.div
        animate={{
          x: [0, 40, -30, 0],
          y: [0, -50, 30, 0],
          scale: [1, 1.15, 0.9, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-accent/[0.06] blur-[120px]"
      />
      <motion.div
        animate={{
          x: [0, -40, 30, 0],
          y: [0, 30, -50, 0],
          scale: [1, 0.9, 1.15, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-accent-2/[0.06] blur-[120px]"
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Eyebrow badge */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-border bg-surface mb-10"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
          </span>
          <span className="text-[11px] tracking-[0.15em] text-muted uppercase font-medium">
            Independent. Technology-agnostic. On your side.
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-[clamp(36px,7vw,72px)] font-semibold leading-[1.0] tracking-[-0.03em] text-foreground mb-7"
        >
          Your next technology decision
          <br />
          <span className="gradient-text">is too important to get wrong</span>
        </motion.h1>

        {/* Subhead */}
        <motion.p
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.6, delay: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-[18px] text-muted max-w-[520px] mx-auto mb-12 leading-relaxed text-balance"
        >
          We work for you, not the software vendors. From ERP selection to SAP
          implementation, we make sure your business gets the right technology
          and the right partner.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.6, delay: 0.9, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {/* Primary CTA */}
          <a
            href="#contact"
            className="shimmer-button group relative px-8 py-4 rounded-full font-medium text-sm"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-accent to-accent-2 rounded-full" />
            <span className="absolute inset-0 bg-gradient-to-r from-accent to-accent-2 rounded-full blur-xl opacity-25 group-hover:opacity-40 transition-opacity" />
            <span className="relative z-10 flex items-center gap-2 text-white">
              Book a call
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </a>

          {/* Secondary CTA */}
          <a
            href="#approach"
            className="group px-8 py-4 rounded-full text-sm text-muted border border-border hover:border-border-hover hover:text-foreground hover:bg-surface transition-all duration-300"
          >
            See how we work
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 rounded-full border border-border flex items-start justify-center p-2"
          >
            <motion.div
              animate={{ opacity: [0.4, 1, 0.4], height: [6, 10, 6] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 rounded-full bg-accent/70"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
