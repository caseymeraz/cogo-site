"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

interface DropdownItem {
  label: string;
  href: string;
  description?: string;
}

interface NavItem {
  label: string;
  href?: string;
  items?: DropdownItem[];
}

const navItems: NavItem[] = [
  {
    label: "Services",
    items: [
      { label: "ERP Consulting", href: "/services/erp-consulting/", description: "Independent, vendor-neutral ERP advice" },
      { label: "Software Selection", href: "/services/software-selection/", description: "Our 6-step evaluation methodology" },
      { label: "SAP Consulting", href: "/services/sap-consulting/", description: "S/4HANA, implementation, and reboot" },
      { label: "Implementation Support", href: "/services/implementation-support/", description: "Client-side project oversight" },
      { label: "CRM Consulting", href: "/services/crm-consulting/", description: "Select, integrate, and adopt" },
      { label: "Business Transformation", href: "/services/business-transformation/", description: "Strategy, process, and change" },
    ],
  },
  {
    label: "Industries",
    items: [
      { label: "Pharmaceutical", href: "/industries/pharmaceutical/" },
      { label: "Food & Beverage", href: "/industries/food-manufacturing/" },
      { label: "Public Sector", href: "/industries/public-sector/" },
      { label: "Professional Services", href: "/industries/professional-services/" },
    ],
  },
  {
    label: "Resources",
    items: [
      { label: "Blog", href: "/resources/blog/" },
      { label: "Guides", href: "/resources/guides/" },
      { label: "FAQ", href: "/resources/faq/" },
      { label: "Glossary", href: "/resources/glossary/" },
    ],
  },
  {
    label: "About",
    items: [
      { label: "Our Story", href: "/about/" },
      { label: "Team", href: "/about/team/" },
      { label: "Why COGO", href: "/about/why-cogo/" },
      { label: "Partners", href: "/about/partners/" },
    ],
  },
];

function DesktopDropdown({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 150);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <button className="text-[13px] text-white/45 hover:text-white/90 transition-colors duration-300 flex items-center gap-1">
        {item.label}
        <svg className={`w-3 h-3 transition-transform duration-200 ${open ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <AnimatePresence>
        {open && item.items && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.96 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute top-full left-1/2 -translate-x-1/2 pt-3"
          >
            <div className="nav-blur bg-[#0a0a12]/95 border border-white/[0.08] rounded-xl shadow-2xl shadow-black/50 min-w-[260px] py-2 overflow-hidden">
              {item.items.map((sub) => (
                <Link
                  key={sub.href}
                  href={sub.href}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-2.5 hover:bg-white/[0.04] transition-colors"
                >
                  <span className="text-[13px] font-medium text-white/80 block">
                    {sub.label}
                  </span>
                  {sub.description && (
                    <span className="text-[11px] text-white/35 block mt-0.5">
                      {sub.description}
                    </span>
                  )}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "nav-blur bg-[#050508]/80 border-b border-white/[0.06]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logos/cogo-logo.png"
            alt="COGO Business Transformation"
            width={120}
            height={40}
            className="h-7 w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {navItems.map((item) =>
            item.items ? (
              <DesktopDropdown key={item.label} item={item} />
            ) : (
              <Link
                key={item.label}
                href={item.href!}
                className="text-[13px] text-white/45 hover:text-white/90 transition-colors duration-300"
              >
                {item.label}
              </Link>
            )
          )}
          <Link
            href="/contact/"
            className="text-[13px] px-5 py-2.5 rounded-full bg-white/[0.06] text-white/80 border border-white/[0.08] hover:bg-white/[0.1] hover:border-white/[0.15] transition-all duration-300"
          >
            Book a call
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-[1.5px] bg-white/70 transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
          <span className={`block w-5 h-[1.5px] bg-white/70 transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-[1.5px] bg-white/70 transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden nav-blur bg-[#050508]/95 border-b border-white/[0.06] overflow-hidden max-h-[80vh] overflow-y-auto"
          >
            <nav className="px-6 py-6 space-y-1">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.items ? (
                    <>
                      <button
                        onClick={() =>
                          setMobileExpanded(
                            mobileExpanded === item.label ? null : item.label
                          )
                        }
                        className="w-full flex items-center justify-between py-3 text-[15px] text-white/60"
                      >
                        {item.label}
                        <svg
                          className={`w-4 h-4 transition-transform duration-200 ${mobileExpanded === item.label ? "rotate-180" : ""}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      <AnimatePresence>
                        {mobileExpanded === item.label && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="pl-4 pb-2 space-y-1">
                              {item.items.map((sub) => (
                                <Link
                                  key={sub.href}
                                  href={sub.href}
                                  onClick={() => setMobileOpen(false)}
                                  className="block py-2 text-[14px] text-white/40 hover:text-white/70 transition-colors"
                                >
                                  {sub.label}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={item.href!}
                      onClick={() => setMobileOpen(false)}
                      className="block py-3 text-[15px] text-white/60 hover:text-white/90 transition-colors"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              <Link
                href="/contact/"
                onClick={() => setMobileOpen(false)}
                className="block text-[14px] px-5 py-3 rounded-full bg-white/[0.06] text-white/80 border border-white/[0.08] text-center mt-4"
              >
                Book a call
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
