"use client";

import Reveal from "./Reveal";
import SpotlightCard from "./SpotlightCard";

const points = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Independent and vendor-agnostic",
    description:
      "We do not sell software. We do not take referral fees. Our only incentive is to get the right answer for your business.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
    title: "Client-side, always",
    description:
      "We sit on your side of the table. During vendor negotiations, implementations, and disputes, we represent your interests.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5a17.92 17.92 0 01-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    title: "Local advisory, global delivery",
    description:
      "Irish-headquartered with access to 1,200+ SAP consultants in 18 countries through our Westernacher partnership.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "Senior people, not juniors",
    description:
      "You work directly with partners who have decades of industry experience. No graduates learning on your budget.",
  },
];

export default function Differentiators() {
  return (
    <section id="results" className="py-28 relative">
      <div className="absolute inset-0 border-y border-white/[0.04]" />
      <div className="absolute inset-0 bg-white/[0.01]" />
      <div className="absolute inset-0 grain" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <Reveal>
          <div className="max-w-2xl mb-16">
            <p className="text-[11px] uppercase tracking-[0.15em] text-accent mb-4 font-medium">
              Why COGO
            </p>
            <h2 className="text-[clamp(28px,4vw,40px)] font-semibold tracking-[-0.03em] leading-[1.1] mb-5">
              The difference is whose side we are on
            </h2>
            <p className="text-[16px] text-white/50 leading-relaxed">
              Large consulting firms earn more when projects get bigger. We earn
              trust by keeping yours right-sized and on track.
            </p>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-5">
          {points.map((point, i) => (
            <Reveal key={point.title} delay={i * 0.08}>
              <SpotlightCard>
                <div className="p-7 lg:p-8 flex gap-5">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl border border-white/[0.08] bg-white/[0.03] flex items-center justify-center text-accent">
                    {point.icon}
                  </div>
                  <div>
                    <h3 className="text-[15px] font-semibold tracking-[-0.01em] mb-2">
                      {point.title}
                    </h3>
                    <p className="text-[13px] text-white/40 leading-[1.7]">
                      {point.description}
                    </p>
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
