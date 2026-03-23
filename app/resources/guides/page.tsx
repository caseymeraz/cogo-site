import type { Metadata } from "next";
import Link from "next/link";
import PageLayout from "../../components/PageLayout";
import PageHeader from "../../components/PageHeader";
import ContentSection from "../../components/ContentSection";
import Reveal from "../../components/Reveal";
import SpotlightCard from "../../components/SpotlightCard";
import PageCTA from "../../components/PageCTA";

export const metadata: Metadata = {
  title: "ERP & Digital Transformation Guides | COGO",
  description:
    "Independent, vendor-neutral guides on ERP selection, pricing, implementation, and digital transformation. Written by consultants who do not sell software.",
};

const guides = [
  {
    title: "How to choose an ERP system",
    description:
      "A step-by-step guide to ERP selection. Define your requirements, build a shortlist, run structured demos, and make a confident decision without vendor pressure.",
    href: "/resources/guides/how-to-choose-erp/",
    category: "ERP selection",
  },
  {
    title: "The 10 best ERP systems for UK businesses in 2026",
    description:
      "Independent comparison of SAP, Oracle, Microsoft Dynamics, NetSuite, Sage, Infor, IFS, Epicor, Acumatica, and SYSPRO. Real pricing in GBP, clear industry recommendations, and honest verdicts.",
    href: "/resources/guides/best-erp-systems/",
    category: "ERP selection",
  },
  {
    title: "How much does ERP cost in the UK?",
    description:
      "Realistic ERP costs in GBP for UK businesses of every size. Licensing, implementation, hidden costs, and pricing by system. The numbers you need to build a credible business case.",
    href: "/resources/guides/erp-cost-guide/",
    category: "ERP costs",
  },
  {
    title: "SAP vs Oracle: which ERP fits your UK business?",
    description:
      "Vendor-neutral head-to-head comparison of SAP S/4HANA and Oracle Cloud ERP. Cloud maturity, manufacturing, financials, user experience, pricing, and industry fit.",
    href: "/resources/guides/sap-vs-oracle/",
    category: "ERP selection",
  },
  {
    title: "How to build a digital transformation roadmap",
    description:
      "An 8-step framework for building a digital transformation roadmap that connects strategy to execution. Includes manufacturing-specific guidance and common pitfalls to avoid.",
    href: "/resources/guides/digital-transformation-roadmap/",
    category: "Transformation",
  },
  {
    title: "Warehouse management systems: UK buyer's guide",
    description:
      "Independent guide to WMS for UK manufacturers. When you need a standalone WMS versus your ERP warehouse module, top systems compared, and how to evaluate options.",
    href: "/resources/guides/warehouse-management-system/",
    category: "Technology",
  },
  {
    title: "Master data management: the foundation of ERP success",
    description:
      "Why master data management is the single biggest determinant of whether your ERP programme succeeds or fails. MDM best practices, software comparison, and how to get your data right before go-live.",
    href: "/resources/guides/master-data-management/",
    category: "Data",
  },
];

export default function GuidesIndexPage() {
  return (
    <PageLayout>
      <PageHeader
        eyebrow="Resources"
        title="Independent ERP and transformation guides"
        subtitle="Written by consultants who do not sell software, take commissions, or have a preferred platform. Every guide is shaped by what actually works, not by what generates licence revenue."
      />

      <ContentSection withBorder>
        <div className="grid gap-6">
          {guides.map((guide, i) => (
            <Reveal key={guide.href} delay={i * 0.04}>
              <Link href={guide.href} className="block group">
                <SpotlightCard>
                  <div className="p-6 md:p-8">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <p className="text-[11px] uppercase tracking-[0.15em] text-accent mb-3 font-medium">
                          {guide.category}
                        </p>
                        <h2 className="text-[18px] md:text-[20px] font-semibold text-white/90 mb-3 group-hover:text-accent transition-colors">
                          {guide.title}
                        </h2>
                        <p className="text-[14px] text-white/45 leading-relaxed">
                          {guide.description}
                        </p>
                      </div>
                      <svg
                        className="w-5 h-5 text-white/20 group-hover:text-accent group-hover:translate-x-1 transition-all flex-shrink-0 mt-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                  </div>
                </SpotlightCard>
              </Link>
            </Reveal>
          ))}
        </div>
      </ContentSection>

      <PageCTA
        title="Need advice tailored to your business?"
        subtitle="These guides give you the knowledge. If you want someone to apply it to your specific situation, talk to us. COGO is an independent, client-side consultancy. We do not sell software. We work for you."
        buttonText="Book a call"
        buttonHref="/contact/"
      />
    </PageLayout>
  );
}
