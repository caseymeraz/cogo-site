import Link from "next/link";

interface InternalLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function InternalLink({
  href,
  children,
  className = "",
}: InternalLinkProps) {
  return (
    <Link
      href={href}
      className={`text-accent underline underline-offset-4 decoration-accent/30 hover:decoration-accent/60 transition-colors ${className}`}
    >
      {children}
    </Link>
  );
}
