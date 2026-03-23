"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Partnership() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl border border-border bg-surface/50 p-8 md:p-12 lg:p-16 overflow-hidden"
        >
          {/* Background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-2/5 rounded-full blur-3xl" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div>
              <p className="text-xs uppercase tracking-widest text-accent mb-4">
                Strategic partnership
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Irish expertise.
                <br />
                <span className="text-muted">Global SAP delivery.</span>
              </h2>
              <p className="text-muted leading-relaxed mb-6">
                Through our partnership with Westernacher, a global SAP Gold
                Partner founded in 1969, we combine COGO&apos;s local advisory
                and client-side leadership with world-class SAP implementation
                capability.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Onshore and offshore delivery options",
                  "Deep expertise across SAP S/4HANA, BTP, Signavio, IBP, and EWM",
                  "Flexible resourcing that scales with your needs",
                  "Local engagement backed by 1,200+ consultants in 18+ countries",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted">
                    <svg
                      className="w-5 h-5 text-accent flex-shrink-0 mt-0.5"
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
                className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent/80 transition-colors"
              >
                Learn about our SAP services
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>

            {/* Logos / visual */}
            <div className="flex flex-col items-center justify-center gap-8">
              <div className="flex items-center gap-6">
                <div className="p-4 rounded-2xl border border-border bg-background/50">
                  <Image
                    src="/logos/cogo-logo.png"
                    alt="COGO"
                    width={140}
                    height={50}
                    className="h-10 w-auto brightness-0 invert"
                  />
                </div>
                <div className="text-2xl text-border font-light">+</div>
                <div className="p-4 rounded-2xl border border-border bg-background/50">
                  <Image
                    src="/logos/westernacher.png"
                    alt="Westernacher"
                    width={140}
                    height={50}
                    className="h-10 w-auto brightness-0 invert"
                  />
                </div>
              </div>

              {/* Partnership stats */}
              <div className="grid grid-cols-3 gap-6 text-center w-full max-w-sm">
                <div>
                  <div className="text-2xl font-bold gradient-text">1,200+</div>
                  <div className="text-xs text-muted mt-1">Consultants</div>
                </div>
                <div>
                  <div className="text-2xl font-bold gradient-text">18+</div>
                  <div className="text-xs text-muted mt-1">Countries</div>
                </div>
                <div>
                  <div className="text-2xl font-bold gradient-text">55+</div>
                  <div className="text-xs text-muted mt-1">Years</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
