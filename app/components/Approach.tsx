"use client";

import Reveal from "./Reveal";

const steps = [
  {
    step: "01",
    title: "Understand your business",
    description:
      "We start by listening. We map your current systems, processes, and pain points before recommending anything.",
  },
  {
    step: "02",
    title: "Define what you actually need",
    description:
      "We run workshops with your team to document requirements, clarify budget, and set realistic timelines.",
  },
  {
    step: "03",
    title: "Evaluate without bias",
    description:
      "We are technology-agnostic. We have evaluated every major ERP and CRM on the market and recommend what fits.",
  },
  {
    step: "04",
    title: "Select with confidence",
    description:
      "Custom demos, scored evaluations, reference checks. You make the final call with full visibility.",
  },
  {
    step: "05",
    title: "Implement and protect your interests",
    description:
      "We sit on your side during implementation, managing vendors and keeping the project honest.",
  },
  {
    step: "06",
    title: "Sustain and grow",
    description:
      "We help embed new ways of working, train your team, and build internal capability.",
  },
];

export default function Approach() {
  return (
    <section id="approach" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 hero-gradient opacity-30" />
      <div className="absolute inset-0 grain" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section header */}
        <Reveal>
          <div className="max-w-2xl mx-auto text-center mb-20">
            <p className="text-[11px] uppercase tracking-[0.15em] text-accent mb-4 font-medium">
              Our approach
            </p>
            <h2 className="text-[clamp(28px,4vw,40px)] font-semibold tracking-[-0.03em] leading-[1.1] mb-5">
              A process built from 30 years of knowing what goes wrong
            </h2>
            <p className="text-[16px] text-white/50 leading-relaxed text-balance">
              Most transformation projects fail because of bad decisions made
              early. Our methodology prevents that.
            </p>
          </div>
        </Reveal>

        {/* Steps grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <Reveal key={step.step} delay={i * 0.07}>
              <div className="group relative p-7 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-white/[0.12] hover:bg-white/[0.04] transition-all duration-500 h-full">
                {/* Step number */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="flex items-center justify-center w-10 h-10 rounded-xl border border-white/[0.08] bg-white/[0.03] text-[12px] font-mono text-accent group-hover:border-accent/30 transition-colors duration-500">
                    {step.step}
                  </span>
                  <div className="h-px flex-1 bg-gradient-to-r from-white/[0.08] to-transparent" />
                </div>

                {/* Content */}
                <h3 className="text-[16px] font-semibold tracking-[-0.01em] mb-2.5">
                  {step.title}
                </h3>
                <p className="text-[13px] text-white/40 leading-[1.7]">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
