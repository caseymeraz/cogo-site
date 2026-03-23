"use client";

import Image from "next/image";
import Reveal from "./Reveal";

interface PageImageProps {
  src: string;
  alt: string;
  caption?: string;
  priority?: boolean;
  className?: string;
  aspect?: "wide" | "square" | "auto";
}

export default function PageImage({
  src,
  alt,
  caption,
  priority = false,
  className = "",
  aspect = "wide",
}: PageImageProps) {
  const aspectClass = {
    wide: "aspect-[16/9]",
    square: "aspect-square",
    auto: "",
  }[aspect];

  return (
    <Reveal>
      <figure className={`my-12 ${className}`}>
        <div
          className={`relative ${aspectClass} overflow-hidden rounded-2xl border border-white/[0.06]`}
        >
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 800px"
            loading={priority ? "eager" : "lazy"}
          />
          {/* Subtle gradient overlay to blend with dark theme */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050508]/30 to-transparent pointer-events-none" />
        </div>
        {caption && (
          <figcaption className="mt-3 text-[12px] text-white/30 text-center">
            {caption}
          </figcaption>
        )}
      </figure>
    </Reveal>
  );
}
