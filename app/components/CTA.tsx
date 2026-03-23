"use client";

import Reveal from "./Reveal";

export default function CTA() {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute inset-0 hero-gradient opacity-60" />
      <div className="absolute inset-0 grain" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <Reveal>
          <h2 className="text-[clamp(28px,5vw,48px)] font-semibold tracking-[-0.03em] leading-[1.1] mb-6">
            Ready to make the right
            <br />
            <span className="gradient-text">technology decision?</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="text-[17px] text-muted mb-12 max-w-xl mx-auto leading-relaxed text-balance">
            Book a 30-minute call with one of our partners. No pitch, no
            pressure. Tell us what you are facing and we will tell you honestly
            if we can help.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            {/* Primary CTA with border beam */}
            <a
              href="mailto:info@cogo.ie"
              className="border-beam shimmer-button group relative px-10 py-4.5 rounded-full font-medium text-[14px]"
            >
              <span className="absolute inset-[1px] bg-gradient-to-r from-accent to-accent-2 rounded-full" />
              <span className="absolute inset-[1px] bg-gradient-to-r from-accent to-accent-2 rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity" />
              <span className="relative z-10 flex items-center gap-2 text-white">
                Book a call
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </a>

            <a
              href="mailto:info@cogo.ie"
              className="text-[13px] text-muted hover:text-foreground transition-colors duration-300"
            >
              or email info@cogo.ie
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="grid sm:grid-cols-3 gap-8 text-[13px]">
            {[
              { region: "Ireland", phone: "+353 87 984 2886" },
              { region: "Americas", phone: "+1 608 302 8164" },
              { region: "South Africa", phone: "+27 651 015 858" },
            ].map((contact) => (
              <div key={contact.region}>
                <div className="font-medium text-foreground/70 mb-1">
                  {contact.region}
                </div>
                <div className="text-muted">{contact.phone}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
