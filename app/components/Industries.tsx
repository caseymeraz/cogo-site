"use client";

import Link from "next/link";
import Reveal from "./Reveal";
import SpotlightCard from "./SpotlightCard";

const industries = [
  {
    title: "Food and beverage manufacturing",
    description:
      "Complex supply chains, tight margins, heavy regulation. We know this world because we came from it.",
    href: "/industries/food-manufacturing/",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
  },
  {
    title: "Pharmaceutical and life sciences",
    description:
      "Validation, compliance, serialisation. Your ERP project has more constraints than most consultants understand.",
    href: "/industries/pharmaceutical/",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
  },
  {
    title: "Public sector",
    description:
      "Procurement rules, accountability requirements, and the pressure to get it right first time. We help you navigate all of it.",
    href: "/industries/public-sector/",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
      </svg>
    ),
  },
  {
    title: "Professional services",
    description:
      "When your people are your product, the technology behind them matters more than anyone admits.",
    href: "/industries/professional-services/",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
      </svg>
    ),
  },
];

export default function Industries() {
  return (
    <section className="py-28 relative border-t border-border">
      <div className="absolute inset-0 grain" />
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <Reveal>
          <div className="max-w-2xl mb-16">
            <p className="text-[11px] uppercase tracking-[0.15em] text-accent mb-4 font-medium">
              Industries we work with
            </p>
            <h2 className="text-[clamp(24px,3.5vw,36px)] font-semibold tracking-[-0.02em] leading-[1.15] mb-4">
              Deep experience in the sectors that need it most
            </h2>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-5">
          {industries.map((industry, i) => (
            <Reveal key={industry.title} delay={i * 0.08}>
              <Link href={industry.href} className="block h-full">
                <SpotlightCard className="h-full">
                  <div className="p-7 lg:p-8 flex gap-5">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl border border-border bg-white flex items-center justify-center text-accent">
                      {industry.icon}
                    </div>
                    <div>
                      <h3 className="text-[15px] font-semibold tracking-[-0.01em] mb-2 text-foreground">
                        {industry.title}
                      </h3>
                      <p className="text-[13px] text-muted leading-[1.7]">
                        {industry.description}
                      </p>
                    </div>
                  </div>
                </SpotlightCard>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
