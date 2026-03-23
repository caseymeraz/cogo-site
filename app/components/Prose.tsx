"use client";

import Reveal from "./Reveal";

interface ProseProps {
  children: React.ReactNode;
  className?: string;
}

export default function Prose({ children, className = "" }: ProseProps) {
  return (
    <Reveal>
      <div
        className={`prose-content space-y-5 text-[15px] text-muted leading-[1.8] [&_h2]:text-[clamp(22px,3vw,32px)] [&_h2]:font-semibold [&_h2]:tracking-[-0.02em] [&_h2]:text-foreground [&_h2]:mt-16 [&_h2]:mb-6 [&_h2]:leading-[1.2] [&_h3]:text-[20px] [&_h3]:font-semibold [&_h3]:tracking-[-0.01em] [&_h3]:text-foreground/90 [&_h3]:mt-12 [&_h3]:mb-4 [&_h4]:text-[16px] [&_h4]:font-semibold [&_h4]:text-foreground/80 [&_h4]:mt-8 [&_h4]:mb-3 [&_strong]:text-foreground [&_strong]:font-medium [&_a]:text-accent [&_a]:underline [&_a]:underline-offset-4 [&_a]:decoration-accent/30 hover:[&_a]:decoration-accent/60 [&_a]:transition-colors [&_ul]:space-y-2 [&_ul]:pl-0 [&_ul]:list-none [&_li]:flex [&_li]:gap-3 [&_li]:items-start [&_li]:before:content-[''] [&_li]:before:w-1 [&_li]:before:h-1 [&_li]:before:rounded-full [&_li]:before:bg-accent/60 [&_li]:before:mt-[0.65em] [&_li]:before:flex-shrink-0 [&_ol]:space-y-2 [&_ol]:pl-5 [&_ol]:list-decimal [&_ol_li]:flex-col [&_ol_li]:before:content-none [&_ol_li]:pl-1 [&_blockquote]:border-l-2 [&_blockquote]:border-accent/30 [&_blockquote]:pl-6 [&_blockquote]:italic [&_blockquote]:text-muted ${className}`}
      >
        {children}
      </div>
    </Reveal>
  );
}
