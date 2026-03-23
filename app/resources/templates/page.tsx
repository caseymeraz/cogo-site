import type { Metadata } from "next";
import Link from "next/link";
import PageLayout from "../../components/PageLayout";
import PageHeader from "../../components/PageHeader";
import ContentSection from "../../components/ContentSection";
import Reveal from "../../components/Reveal";
import SpotlightCard from "../../components/SpotlightCard";
import PageCTA from "../../components/PageCTA";

export const metadata: Metadata = {
  title: "Free ERP & Transformation Templates | COGO",
  description:
    "Download free templates for ERP selection, vendor evaluation, RFP writing, cost estimation, and transformation business cases. Built from real client projects.",
};

const templates = [
  {
    title: "ERP RFP template",
    href: "/resources/templates/erp-rfp-template/",
    description:
      "A proven format for communicating your requirements to ERP vendors in a way that makes their responses comparable and your evaluation straightforward.",
  },
  {
    title: "ERP selection criteria checklist",
    href: "/resources/templates/erp-selection-checklist/",
    description:
      "The evaluation checklist we use with our own clients during ERP selection projects. Assess every vendor against a consistent set of criteria.",
  },
  {
    title: "ERP vendor evaluation scorecard",
    href: "/resources/templates/erp-vendor-scorecard/",
    description:
      "A structured, repeatable way to evaluate and compare ERP vendors so the decision is based on objective assessment rather than gut feel.",
  },
  {
    title: "System integrator evaluation guide",
    href: "/resources/templates/system-integrator-evaluation/",
    description:
      "A structured approach to evaluating and shortlisting system integrator partners for your ERP implementation project.",
  },
  {
    title: "Transformation business case template",
    href: "/resources/templates/transformation-business-case/",
    description:
      "A complete structure for building a credible business case that speaks the language of your board - risk, return, and realistic expectations.",
  },
  {
    title: "ERP cost calculator",
    href: "/resources/templates/erp-cost-calculator/",
    description:
      "Build a realistic picture of your total ERP investment, including the costs that are easy to overlook during the planning stage.",
  },
];

export default function TemplatesPage() {
  return (
    <PageLayout>
      <PageHeader
        eyebrow="Templates"
        title="Free templates and tools"
        subtitle="Practical templates built from real client projects. Use them to structure your ERP selection, build your business case, and evaluate vendors and partners."
      />

      <ContentSection withBorder>
        <div className="grid gap-6">
          {templates.map((template, index) => (
            <Reveal key={template.href} delay={index * 0.05}>
              <Link href={template.href}>
                <SpotlightCard className="p-8 hover:border-white/10 transition-colors">
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <h2 className="text-[18px] font-medium text-foreground mb-3 tracking-[-0.01em]">
                        {template.title}
                      </h2>
                      <p className="text-[15px] text-muted leading-relaxed">
                        {template.description}
                      </p>
                    </div>
                    <svg
                      className="w-5 h-5 text-accent flex-shrink-0 mt-1"
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
                </SpotlightCard>
              </Link>
            </Reveal>
          ))}
        </div>
      </ContentSection>

      <PageCTA />
    </PageLayout>
  );
}
