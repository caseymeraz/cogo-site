"use client";

import { motion } from "framer-motion";

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
    accent: "from-accent to-blue-600",
  },
  {
    number: "02",
    title: "Software evaluation & selection",
    description:
      "Choosing the wrong ERP or enterprise platform costs years and millions. We run a proven six-step evaluation process that removes the guesswork and the vendor bias.",
    features: [
      "Requirements scoping",
      "Vendor shortlisting & RFP management",
      "Custom demo scripts",
      "Contract negotiation support",
    ],
    accent: "from-accent-2 to-purple-600",
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
    accent: "from-pink-500 to-rose-600",
  },
  {
    number: "04",
    title: "CRM consulting",
    description:
      "Your customer data is scattered across spreadsheets, inboxes, and notepads. We help you select, implement, and actually adopt a CRM that your team will use.",
    features: [
      "CRM maturity assessment",
      "Platform selection",
      "Sales process design",
      "Marketing automation setup",
    ],
    accent: "from-emerald-400 to-teal-600",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-16"
        >
          <p className="text-xs uppercase tracking-widest text-accent mb-4">
            What we do
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Four ways we keep your project on track
          </h2>
          <p className="text-muted text-lg">
            Every engagement starts with one question: what does your business
            actually need? Not what a vendor wants to sell you.
          </p>
        </motion.div>

        {/* Service cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-2xl border border-border bg-surface/50 p-8 card-hover overflow-hidden"
            >
              {/* Gradient accent line */}
              <div
                className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${service.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              {/* Number */}
              <span className="text-6xl font-bold text-border/50 absolute top-6 right-8 select-none">
                {service.number}
              </span>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-semibold mb-3 pr-16">
                  {service.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-sm text-muted"
                    >
                      <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
