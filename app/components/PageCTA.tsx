"use client";

import Reveal from "./Reveal";

interface PageCTAProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonHref?: string;
}

export default function PageCTA({
  title = "Ready to talk?",
  subtitle = "Book a 30-minute call with one of our partners. No pitch, no pressure. Tell us what you are facing and we will tell you honestly if we can help.",
  buttonText = "Book a call",
  buttonHref = "/contact/",
}: PageCTAProps) {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden border-t border-white/[0.04]">
      <div className="absolute inset-0 hero-gradient opacity-40" />
      <div className="absolute inset-0 grain" />

      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
        <Reveal>
          <h2 className="text-[clamp(24px,4vw,40px)] font-semibold tracking-[-0.03em] leading-[1.1] mb-5">
            {title}
          </h2>
          <p className="text-[15px] text-white/45 leading-relaxed mb-10 text-balance">
            {subtitle}
          </p>
          <a
            href={buttonHref}
            className="shimmer-button group relative inline-flex px-8 py-4 rounded-full font-medium text-[14px]"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-accent to-accent-2 rounded-full" />
            <span className="absolute inset-0 bg-gradient-to-r from-accent to-accent-2 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity" />
            <span className="relative z-10 flex items-center gap-2 text-background">
              {buttonText}
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
        </Reveal>
      </div>
    </section>
  );
}
