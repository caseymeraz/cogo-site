import type { Metadata } from "next";
import Link from "next/link";
import PageLayout from "../../../components/PageLayout";
import PageHeader from "../../../components/PageHeader";
import ContentSection from "../../../components/ContentSection";
import Prose from "../../../components/Prose";
import Reveal from "../../../components/Reveal";
import PageCTA from "../../../components/PageCTA";

export const metadata: Metadata = {
  title: "ERP vendor evaluation scorecard | Free download | COGO",
  description:
    "A structured, repeatable scorecard for evaluating and comparing ERP vendors. Includes scoring matrix, demo criteria, and reference check questions.",
};

export default function ERPVendorScorecardPage() {
  return (
    <PageLayout>
      <PageHeader
        eyebrow="Templates"
        title="ERP vendor evaluation scorecard"
        subtitle="A structured, repeatable way to evaluate and compare vendors so the decision is based on objective assessment."
      />

      <ContentSection withBorder>
        <Prose>
          <p>
            Choosing an ERP vendor is one of the most consequential technology
            decisions your organisation will make. This scorecard gives you a
            structured, repeatable way to evaluate and compare vendors so the
            decision is based on objective assessment rather than gut feel or
            sales charisma.
          </p>

          <h2>What is included</h2>

          <p>The scorecard provides:</p>

          <ul>
            <li>
              <strong>A standardised scoring matrix</strong> with weighted
              categories covering functional capability, technical architecture,
              vendor stability, implementation approach, commercial terms, and
              cultural fit.
            </li>
            <li>
              <strong>Individual evaluator sheets</strong> so each member of your
              selection team can score independently before the group discussion.
            </li>
            <li>
              <strong>A consolidation view</strong> that aggregates scores across
              evaluators and highlights areas of agreement and disagreement.
            </li>
            <li>
              <strong>Demo scoring criteria</strong> - a specific set of
              evaluation points to use during vendor demonstrations, focused on
              your critical business scenarios rather than the vendor&apos;s
              standard showcase.
            </li>
            <li>
              <strong>Reference check questions</strong> - a structured set of
              questions to ask each vendor&apos;s reference customers.
            </li>
          </ul>

          <h2>Why consistency matters</h2>

          <p>
            Without a structured scorecard, selection decisions tend to be
            dominated by whoever presented most recently or most persuasively.
            This template ensures every vendor is measured against the same
            criteria, and that the final decision reflects the collective
            judgement of your team - not just the loudest voice in the room.
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
              Download the ERP vendor evaluation scorecard
            </h3>
            <p className="text-[14px] text-white/40 mb-6 max-w-md mx-auto">
              Get in touch to receive a copy of this scorecard, tailored to your selection process.
            </p>
            <Link
              href="/contact/"
              className="inline-flex px-6 py-3 rounded-full text-[14px] font-medium bg-accent/10 text-accent hover:bg-accent/20 transition-colors"
            >
              Request scorecard
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
