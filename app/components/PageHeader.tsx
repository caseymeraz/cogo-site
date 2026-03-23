"use client";

import Reveal from "./Reveal";

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  className?: string;
}

export default function PageHeader({
  eyebrow,
  title,
  subtitle,
  className = "",
}: PageHeaderProps) {
  return (
    <section
      className={`relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden ${className}`}
    >
      {/* Background */}
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute inset-0 hero-gradient opacity-60" />
      <div className="absolute inset-0 grain" />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <Reveal>
          {eyebrow && (
            <p className="text-[11px] uppercase tracking-[0.15em] text-accent mb-5 font-medium">
              {eyebrow}
            </p>
          )}
          <h1 className="text-[clamp(32px,5vw,56px)] font-semibold tracking-[-0.03em] leading-[1.05] mb-6">
            {title}
          </h1>
          {subtitle && (
            <p className="text-[17px] text-white/50 leading-relaxed max-w-2xl text-balance">
              {subtitle}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
