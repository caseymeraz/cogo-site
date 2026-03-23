import type { Metadata } from "next";
import Link from "next/link";
import PageLayout from "../../../components/PageLayout";
import PageHeader from "../../../components/PageHeader";
import ContentSection from "../../../components/ContentSection";
import Prose from "../../../components/Prose";
import Reveal from "../../../components/Reveal";
import PageCTA from "../../../components/PageCTA";

export const metadata: Metadata = {
  title: "System integrator evaluation guide | Free download | COGO",
  description:
    "A structured approach to evaluating and shortlisting system integrator partners. Covers requirements, scoring, interview framework, and contract negotiation.",
};

export default function SystemIntegratorEvaluationPage() {
  return (
    <PageLayout>
      <PageHeader
        eyebrow="Templates"
        title="System integrator evaluation guide"
        subtitle="Your system integrator will have more influence on project success than the software itself. Choose well."
      />

      <ContentSection withBorder>
        <Prose>
          <p>
            Your system integrator (SI) will have more influence on the success
            or failure of your ERP project than the software itself. This guide
            gives you a structured approach to evaluating and shortlisting SI
            partners - because a great product implemented by the wrong partner
            is a recipe for trouble.
          </p>

          <h2>What is included</h2>

          <p>
            The guide walks you through the full SI evaluation process:
          </p>

          <ul>
            <li>
              <strong>Defining your SI requirements</strong> - what capabilities,
              industry experience, and team composition you need.
            </li>
            <li>
              <strong>Creating a shortlist</strong> - how to identify and
              approach potential SI partners, including what to look for beyond
              the obvious big names.
            </li>
            <li>
              <strong>Evaluation criteria and scoring</strong> - a weighted
              scorecard covering delivery methodology, team quality, references,
              commercial approach, cultural fit, and risk management.
            </li>
            <li>
              <strong>Interview and presentation framework</strong> - structured
              questions and scenarios to use during SI presentations, designed to
              reveal how they actually work, not just how they pitch.
            </li>
            <li>
              <strong>Contract negotiation checklist</strong> - key commercial
              and contractual terms to negotiate before you sign, including
              fixed-price vs time-and-materials considerations, change control
              processes, and exit clauses.
            </li>
          </ul>

          <h2>Who this is for</h2>

          <p>
            This guide is for any organisation that is about to engage a system
            integrator for an ERP implementation, upgrade, or migration. It is
            particularly useful if this is your first major technology project
            and you have limited experience evaluating SI proposals.
          </p>
          <p>
            The relationship with your SI will define the next one to three years
            of your project. Take the time to choose well.
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
              Download the system integrator evaluation guide
            </h3>
            <p className="text-[14px] text-white/40 mb-6 max-w-md mx-auto">
              Get in touch to receive a copy of this guide, tailored to your project requirements.
            </p>
            <Link
              href="/contact/"
              className="inline-flex px-6 py-3 rounded-full text-[14px] font-medium bg-accent/10 text-accent hover:bg-accent/20 transition-colors"
            >
              Request guide
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
