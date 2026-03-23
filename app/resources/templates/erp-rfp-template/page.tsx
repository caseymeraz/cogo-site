import type { Metadata } from "next";
import Link from "next/link";
import PageLayout from "../../../components/PageLayout";
import PageHeader from "../../../components/PageHeader";
import ContentSection from "../../../components/ContentSection";
import Prose from "../../../components/Prose";
import Reveal from "../../../components/Reveal";
import PageCTA from "../../../components/PageCTA";

export const metadata: Metadata = {
  title: "ERP RFP template | Free download | COGO",
  description:
    "Download a proven ERP RFP template that covers functional requirements, technical requirements, implementation approach, and commercial terms.",
};

export default function ERPRFPTemplatePage() {
  return (
    <PageLayout>
      <PageHeader
        eyebrow="Templates"
        title="ERP RFP template"
        subtitle="A well-structured request for proposal is the foundation of a fair and effective ERP selection process."
      />

      <ContentSection withBorder>
        <Prose>
          <p>
            A well-structured request for proposal is the foundation of a fair
            and effective ERP selection process. This template gives you a proven
            format for communicating your requirements to vendors in a way that
            makes their responses comparable and your evaluation straightforward.
          </p>

          <h2>What is included</h2>

          <p>
            The template covers all the sections a thorough ERP RFP should
            contain:
          </p>

          <ul>
            <li>
              <strong>Company overview and project context</strong> - so vendors
              understand your business, not just your requirements list.
            </li>
            <li>
              <strong>Functional requirements by module</strong> - finance,
              procurement, manufacturing, supply chain, warehousing, HR, and CRM,
              with space to mark each requirement as mandatory, desirable, or
              nice-to-have.
            </li>
            <li>
              <strong>Technical requirements</strong> - hosting, integration,
              security, data migration, and reporting.
            </li>
            <li>
              <strong>Implementation approach</strong> - methodology, timeline
              expectations, project governance, and resource assumptions.
            </li>
            <li>
              <strong>Commercial requirements</strong> - pricing structure,
              licensing model, payment terms, and contract expectations.
            </li>
            <li>
              <strong>Vendor response format</strong> - a standardised structure
              so you can compare proposals like-for-like.
            </li>
          </ul>

          <h2>Who this is for</h2>

          <p>
            This template is designed for mid-market companies in Ireland and the
            UK that are going to market for a new ERP system. Whether you are
            replacing an aging on-premise system or implementing ERP for the
            first time, a structured RFP will save you weeks of effort and give
            you a much stronger negotiating position.
          </p>

          <h2>Why it matters</h2>

          <p>
            Vendors respond to vague RFPs with vague proposals. The more
            specific and structured your RFP, the more useful the responses you
            receive - and the easier it is to hold vendors accountable during
            implementation for what they promised during the sales process.
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
            <h3 className="text-[18px] font-medium text-white/85 mb-3">
              Download the ERP RFP template
            </h3>
            <p className="text-[14px] text-white/40 mb-6 max-w-md mx-auto">
              Get in touch to receive a copy of this template, tailored to your industry and requirements.
            </p>
            <Link
              href="/contact/"
              className="inline-flex px-6 py-3 rounded-full text-[14px] font-medium bg-accent/10 text-accent hover:bg-accent/20 transition-colors"
            >
              Request template
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
