"use client";

import Reveal from "./Reveal";

export default function TruthSection() {
  return (
    <section className="py-28 relative">
      <div className="absolute inset-0 grain" />
      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.15em] text-accent mb-5 font-medium">
            The uncomfortable truth
          </p>
          <h2 className="text-[clamp(24px,3.5vw,36px)] font-semibold tracking-[-0.02em] leading-[1.15] mb-8">
            Between 55% and 75% of large IT projects fail to deliver what was promised
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="space-y-5 text-[15px] text-white/50 leading-[1.8]">
            <p>
              Not because the technology is wrong, but because the advice was
              conflicted from day one.
            </p>
            <p>
              Every ERP vendor will tell you their system is perfect. Every system
              integrator will tell you the project needs more consultants. Every
              Big Four firm will send a partner to the pitch and a graduate to the
              project.
            </p>
            <p className="text-white/70 font-medium">
              You deserve better than that. You deserve advice that puts your
              business first, not someone else&apos;s revenue target.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
