"use client";

import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Reveal from "./Reveal";

function AnimatedNumber({
  target,
  suffix = "",
  duration = 2,
}: {
  target: number;
  suffix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const start = Date.now();
    const end = start + duration * 1000;
    const step = () => {
      const now = Date.now();
      const progress = Math.min((now - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (now < end) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

const stats = [
  {
    value: 30,
    suffix: "+",
    label: "Years of experience",
    description: "Across ERP, SAP, CRM, and digital transformation",
  },
  {
    value: 70,
    suffix: "%",
    label: "Of IT projects fail",
    description: "Industry-wide. Our clients beat those odds.",
  },
  {
    value: 1200,
    suffix: "+",
    label: "SAP consultants",
    description: "Through our Westernacher partnership",
  },
  {
    value: 18,
    suffix: "+",
    label: "Countries",
    description: "Global delivery, local advisory",
  },
];

export default function Stats() {
  return (
    <section className="py-28 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08}>
              <div className="text-center p-6 rounded-2xl border border-border hover:border-border-hover transition-colors duration-500">
                <div className="text-[clamp(36px,5vw,56px)] font-bold tracking-[-0.03em] gradient-text mb-2 leading-none">
                  <AnimatedNumber target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-[13px] font-medium text-foreground mb-1">
                  {stat.label}
                </div>
                <div className="text-[12px] text-muted leading-relaxed">
                  {stat.description}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
