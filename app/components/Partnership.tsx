"use client";

import Image from "next/image";
import Reveal from "./Reveal";

export default function Partnership() {
  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 grain" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <Reveal>
          <div className="relative rounded-3xl border border-white/[0.06] overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 bg-white/[0.02]" />
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/[0.04] rounded-full blur-[120px]" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-2/[0.04] rounded-full blur-[120px]" />

            {/* Border beam on this card */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

            <div className="relative z-10 p-8 md:p-12 lg:p-16">
              <div className="grid lg:grid-cols-2 gap-14 items-center">
                {/* Text */}
                <div>
                  <p className="text-[11px] uppercase tracking-[0.15em] text-accent mb-5 font-medium">
                    Strategic partnership
                  </p>
                  <h2 className="text-[clamp(28px,4vw,40px)] font-semibold tracking-[-0.03em] leading-[1.1] mb-6">
                    Irish expertise.
                    <br />
                    <span className="text-white/40">Global SAP delivery.</span>
                  </h2>
                  <p className="text-[15px] text-white/45 leading-[1.7] mb-8">
                    Through our partnership with Westernacher, a global SAP Gold
                    Partner founded in 1969, we combine COGO&apos;s local advisory
                    and client-side leadership with world-class SAP implementation
                    capability.
                  </p>
                  <ul className="space-y-3.5 mb-10">
                    {[
                      "Onshore and offshore delivery options",
                      "Deep expertise across SAP S/4HANA, BTP, Signavio, IBP, and EWM",
                      "Flexible resourcing that scales with your needs",
                      "Local engagement backed by 1,200+ consultants in 18+ countries",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-[13px] text-white/50"
                      >
                        <svg
                          className="w-4 h-4 text-accent flex-shrink-0 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-[13px] text-accent hover:text-accent/70 transition-colors font-medium"
                  >
                    Learn about our SAP services
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>

                {/* Logos + stats */}
                <div className="flex flex-col items-center justify-center gap-10">
                  {/* Partner logos */}
                  <div className="flex items-center gap-6">
                    <div className="p-5 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                      <Image
                        src="/logos/cogo-logo.png"
                        alt="COGO"
                        width={140}
                        height={50}
                        className="h-9 w-auto brightness-0 invert opacity-80"
                      />
                    </div>
                    <div className="text-[24px] text-white/20 font-extralight">+</div>
                    <div className="p-5 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                      <Image
                        src="/logos/westernacher.png"
                        alt="Westernacher"
                        width={140}
                        height={50}
                        className="h-9 w-auto brightness-0 invert opacity-80"
                      />
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-8 text-center w-full max-w-sm">
                    {[
                      { value: "1,200+", label: "Consultants" },
                      { value: "18+", label: "Countries" },
                      { value: "55+", label: "Years" },
                    ].map((stat) => (
                      <div key={stat.label}>
                        <div className="text-[24px] font-bold tracking-[-0.02em] gradient-text leading-none mb-1.5">
                          {stat.value}
                        </div>
                        <div className="text-[11px] text-white/35 uppercase tracking-[0.1em]">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
