"use client";

import Reveal from "./Reveal";

interface ContentSectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  withGrain?: boolean;
  withBorder?: boolean;
}

export default function ContentSection({
  children,
  className = "",
  id,
  withGrain = false,
  withBorder = false,
}: ContentSectionProps) {
  return (
    <section
      id={id}
      className={`py-20 md:py-28 relative ${withBorder ? "border-t border-border" : ""} ${className}`}
    >
      {withGrain && <div className="absolute inset-0 grain" />}
      <div className="relative z-10 max-w-4xl mx-auto px-6">{children}</div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  centered = false,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}) {
  return (
    <Reveal>
      <div className={`mb-14 ${centered ? "text-center max-w-2xl mx-auto" : "max-w-2xl"}`}>
        {eyebrow && (
          <p className="text-[11px] uppercase tracking-[0.15em] text-accent mb-4 font-medium">
            {eyebrow}
          </p>
        )}
        <h2 className="text-[clamp(24px,3.5vw,36px)] font-semibold tracking-[-0.02em] leading-[1.15] mb-4">
          {title}
        </h2>
        {subtitle && (
          <p className="text-[15px] text-muted leading-relaxed">{subtitle}</p>
        )}
      </div>
    </Reveal>
  );
}
