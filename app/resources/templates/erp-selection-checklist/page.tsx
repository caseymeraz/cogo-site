import type { Metadata } from "next";
import Link from "next/link";
import PageLayout from "../../../components/PageLayout";
import PageHeader from "../../../components/PageHeader";
import ContentSection from "../../../components/ContentSection";
import Prose from "../../../components/Prose";
import Reveal from "../../../components/Reveal";
import PageCTA from "../../../components/PageCTA";

export const metadata: Metadata = {
  title: "ERP selection criteria checklist | Free download | COGO",
  description:
    "Download the evaluation checklist we use with clients during ERP selection. Assess every vendor against a consistent set of criteria across six dimensions.",
};

export default function ERPSelectionChecklistPage() {
  return (
    <PageLayout>
      <PageHeader
        eyebrow="Templates"
        title="ERP selection criteria checklist"
        subtitle="The evaluation checklist we use with our own clients during ERP selection projects."
      />

      <ContentSection withBorder>
        <Prose>
          <p>
            This is the evaluation checklist we use with our own clients during
            ERP selection projects. It ensures you assess every vendor and
            product against a consistent set of criteria - so your decision is
            based on evidence, not on which vendor gave the best demo.
          </p>

          <h2>What is included</h2>

          <p>The checklist covers six evaluation dimensions:</p>

          <ul>
            <li>
              <strong>Functional fit</strong> - does the software meet your core
              business requirements out of the box, or will it need heavy
              customisation?
            </li>
            <li>
              <strong>Technical fit</strong> - architecture, cloud readiness,
              integration capabilities, security, and scalability.
            </li>
            <li>
              <strong>Vendor viability</strong> - financial stability, product
              roadmap, investment in R&D, and market position.
            </li>
            <li>
              <strong>Industry experience</strong> - references from similar
              companies in your sector.
            </li>
            <li>
              <strong>Implementation partner quality</strong> - the track record
              and capability of the system integrator who will deliver the
              project.
            </li>
            <li>
              <strong>Total cost of ownership</strong> - not just licence fees,
              but implementation, data migration, integrations, training, ongoing
              support, and internal resource costs.
            </li>
          </ul>

          <h2>How to use it</h2>

          <p>
            Score each criterion on a consistent scale and weight the dimensions
            according to what matters most for your organisation. The checklist
            includes suggested weightings, but you should adjust them to reflect
            your priorities. The goal is to make the decision transparent and
            defensible - so that when someone asks &quot;why did we choose this
            system?&quot;, you have a clear, evidence-based answer.
          </p>
        </Prose>
      </ContentSection>

      <ContentSection withBorder>
        <Reveal>
          <div className="rounded-2xl glass p-10 text-center">
            <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-5">
              <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-[18px] font-medium text-foreground mb-3">
              Download the ERP selection criteria checklist
            </h3>
            <p className="text-[14px] text-muted mb-6 max-w-md mx-auto">
              Get in touch to receive a copy of this checklist, tailored to your industry and requirements.
            </p>
            <Link
              href="/contact/"
              className="inline-flex px-6 py-3 rounded-full text-[14px] font-medium bg-accent/10 text-accent hover:bg-accent/20 transition-colors"
            >
              Request checklist
            </Link>
          </div>
        </Reveal>
      </ContentSection>

      <ContentSection withBorder>
        <div className="flex items-center gap-4">
          <Link
            href="/resources/templates/"
            className="text-[14px] text-accent hover:text-accent/80 transition-colors flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            Back to templates
          </Link>
        </div>
      </ContentSection>

      <PageCTA />
    </PageLayout>
  );
}
