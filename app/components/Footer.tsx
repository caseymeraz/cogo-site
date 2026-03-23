"use client";

import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  {
    title: "Services",
    links: [
      { label: "ERP Consulting", href: "/services/erp-consulting/" },
      { label: "Software Selection", href: "/services/software-selection/" },
      { label: "SAP Consulting", href: "/services/sap-consulting/" },
      { label: "Implementation Support", href: "/services/implementation-support/" },
      { label: "CRM Consulting", href: "/services/crm-consulting/" },
      { label: "Business Transformation", href: "/services/business-transformation/" },
    ],
  },
  {
    title: "Industries",
    links: [
      { label: "Pharmaceutical", href: "/industries/pharmaceutical/" },
      { label: "Food & Beverage", href: "/industries/food-manufacturing/" },
      { label: "Public Sector", href: "/industries/public-sector/" },
      { label: "Professional Services", href: "/industries/professional-services/" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/resources/blog/" },
      { label: "Guides", href: "/resources/guides/" },
      { label: "FAQ", href: "/resources/faq/" },
      { label: "Glossary", href: "/resources/glossary/" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about/" },
      { label: "Team", href: "/about/team/" },
      { label: "Why COGO", href: "/about/why-cogo/" },
      { label: "Partners", href: "/about/partners/" },
      { label: "Contact", href: "/contact/" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Main footer */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-5 gap-10">
          {/* Logo + tagline */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/">
              <Image
                src="/logos/cogo-logo.png"
                alt="COGO"
                width={100}
                height={34}
                className="h-6 w-auto mb-4"
              />
            </Link>
            <p className="text-[12px] text-muted leading-relaxed">
              Independent business transformation consulting for Ireland, the UK, and beyond.
            </p>
          </div>

          {/* Link columns */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <p className="text-[11px] uppercase tracking-[0.1em] text-foreground/70 font-medium mb-4">
                {group.title}
              </p>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[13px] text-muted hover:text-foreground transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="py-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-muted/60 tracking-wide">
            &copy; {new Date().getFullYear()} COGO Business Transformation. All
            rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <a
              href="https://www.linkedin.com/company/cogo-business-transformation"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-accent transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="mailto:info@cogo.ie"
              className="text-[11px] text-muted hover:text-foreground transition-colors duration-300"
            >
              info@cogo.ie
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
