"use client";

import Link from "next/link";
import Reveal from "./Reveal";
import SpotlightCard from "./SpotlightCard";

const services = [
  {
    number: "01",
    title: "Digital strategy & business design",
    description:
      "Before you talk to a single vendor, you need to know what your business actually needs. We map your processes, assess your systems, and build a clear strategy so you are driving the conversation.",
    features: [
      "System landscape assessment",
      "Process mapping & optimisation",
      "Strategic digital roadmap",
      "Budget and timeline planning",
    ],
    gradient: "from-cyan-400 to-blue-500",
    spotlightColor: "rgba(0, 194, 255, 0.1)",
  },
  {
    number: "02",
    title: "Software evaluation & selection",
    description:
      "Choosing the wrong ERP or enterprise platform costs years and millions. We run a proven six-step evaluation process that removes the guesswork and the vendor bias.",
    features: [
      "Requirements scoping workshops",
      "Vendor shortlisting & RFP management",
      "Custom demo scripts",
      "Contract negotiation support",
    ],
    gradient: "from-violet-400 to-purple-600",
    spotlightColor: "rgba(124, 58, 237, 0.1)",
  },
  {
    number: "03",
    title: "SAP consulting & implementation",
    description:
      "Through our partnership with Westernacher, a global SAP Gold Partner, you get local advisory with world-class delivery. We manage the project from your side of the table.",
    features: [
      "SAP S/4HANA transformation",
      "Supply chain optimisation",
      "SAP reboot & recovery",
      "Training with Enable Now & WalkMe",
    ],
    gradient: "from-rose-400 to-pink-600",
    spotlightColor: "rgba(244, 63, 94, 0.1)",
  },
  {
    number: "04",
    title: "CRM consulting",
    description:
      "Your customer data is scattered across spreadsheets, inboxes, and notepads. We help you select, implement, and actually adopt a CRM that your team will use.",
    features: [
      "CRM maturity assessment",
      "Platform selection & evaluation",
      "Sales process design",
      "Marketing automation setup",
    ],
    gradient: "from-emerald-400 to-teal-500",
    spotlightColor: "rgba(16, 185, 129, 0.1)",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-28 relative">
      <div className="absolute inset-0 grain" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section header */}
        <Reveal>
          <div className="max-w-2xl mb-20">
            <p className="text-[11px] uppercase tracking-[0.15em] text-accent mb-4 font-medium">
              What we do
            </p>
            <h2 className="text-[clamp(28px,4vw,40px)] font-semibold tracking-[-0.03em] leading-[1.1] mb-5">
              Four ways we keep your project on track
            </h2>
            <p className="text-[16px] text-muted leading-relaxed">
              Every engagement starts with one question: what does your business
              actually need? Not what a vendor wants to sell you.
            </p>
          </div>
        </Reveal>

        {/* Bento grid */}
        <div className="grid md:grid-cols-2 gap-5">
          {services.map((service, i) => (
            <Reveal key={service.number} delay={i * 0.08}>
              <SpotlightCard
                spotlightColor={service.spotlightColor}
                className="h-full"
              >
                <div className="p-8 lg:p-10 relative">
                  {/* Gradient accent line */}
                  <div
                    className={`absolute top-0 left-8 right-8 h-px bg-gradient-to-r ${service.gradient} opacity-20`}
                  />

                  {/* Number watermark */}
                  <span className="absolute top-6 right-8 text-[72px] font-bold leading-none text-foreground/[0.05] select-none tracking-[-0.04em]">
                    {service.number}
                  </span>

                  {/* Content */}
                  <div className="relative">
                    <h3 className="text-[20px] font-semibold tracking-[-0.02em] mb-3 pr-16 text-foreground">
                      {service.title}
                    </h3>
                    <p className="text-[14px] text-muted leading-[1.7] mb-7">
                      {service.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2.5">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-3 text-[13px] text-foreground/60"
                        >
                          <span
                            className={`w-1 h-1 rounded-full bg-gradient-to-r ${service.gradient} flex-shrink-0`}
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
