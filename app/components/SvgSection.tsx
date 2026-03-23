"use client";

import Reveal from "./Reveal";

interface SvgSectionProps {
  children: React.ReactNode;
  caption?: string;
  className?: string;
}

export default function SvgSection({ children, caption, className = "" }: SvgSectionProps) {
  return (
    <Reveal>
      <figure className={`my-14 max-w-3xl mx-auto ${className}`}>
        <div className="p-6 md:p-8 rounded-2xl border border-border bg-surface/50 overflow-hidden">
          {children}
        </div>
        {caption && (
          <figcaption className="mt-3 text-[12px] text-muted text-center">
            {caption}
          </figcaption>
        )}
      </figure>
    </Reveal>
  );
}
