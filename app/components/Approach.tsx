"use client";

import { motion } from "framer-motion";

const steps = [
  {
    step: "01",
    title: "Understand your business",
    description:
      "We start by listening. We map your current systems, processes, and pain points before recommending anything. No generic playbooks.",
  },
  {
    step: "02",
    title: "Define what you actually need",
    description:
      "We run workshops with your team to document requirements, clarify budget, and set realistic timelines. You leave with a clear brief, not a vague wishlist.",
  },
  {
    step: "03",
    title: "Evaluate without bias",
    description:
      "We are technology-agnostic. We have evaluated every major ERP and CRM on the market. We recommend what fits your business, not what pays us commission.",
  },
  {
    step: "04",
    title: "Select with confidence",
    description:
      "Custom demos, scored evaluations, reference checks. You make the final call with full visibility of costs, risks, and trade-offs.",
  },
  {
    step: "05",
    title: "Implement and protect your interests",
    description:
      "We sit on your side of the table during implementation, managing vendors and keeping the project honest. Your goals come first.",
  },
  {
    step: "06",
    title: "Sustain and grow",
    description:
      "We do not disappear after go-live. We help embed new ways of working, train your team, and build internal capability so you are not dependent on consultants.",
  },
];

export default function Approach() {
  return (
    <section id="approach" className="py-24 relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 radial-fade opacity-50" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <p className="text-xs uppercase tracking-widest text-accent mb-4">
            Our approach
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            A process built from 30 years of knowing what goes wrong
          </h2>
          <p className="text-muted text-lg">
            Most transformation projects fail because of bad decisions made
            early. Our six-step methodology is designed to prevent that.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-accent-2 to-transparent" />

          <div className="space-y-12">
            {steps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative flex gap-6 md:gap-8"
              >
                {/* Step circle */}
                <div className="relative z-10 flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full border border-border bg-surface flex items-center justify-center">
                  <span className="text-xs md:text-sm font-mono text-accent">
                    {step.step}
                  </span>
                </div>

                {/* Content */}
                <div className="pt-2 md:pt-3">
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
