import type { Metadata } from "next";
import Link from "next/link";
import PageLayout from "../../../components/PageLayout";
import PageHeader from "../../../components/PageHeader";
import ContentSection from "../../../components/ContentSection";
import Prose from "../../../components/Prose";
import PageCTA from "../../../components/PageCTA";

export const metadata: Metadata = {
  title: "What is digital transformation? | Glossary | COGO",
  description:
    "Digital transformation is the use of digital technology to fundamentally change how an organisation operates, delivers value to customers, and competes in its market.",
};

export default function DigitalTransformationPage() {
  return (
    <PageLayout>
      <PageHeader
        eyebrow="Glossary"
        title="Digital transformation"
        subtitle="The use of digital technology to fundamentally change how an organisation operates, delivers value, and competes."
      />

      <ContentSection withBorder>
        <Prose>
          <p>
            Digital transformation is the use of digital technology to
            fundamentally change how an organisation operates, delivers value to
            customers, and competes in its market. It goes beyond simply
            digitising paper-based processes or installing new software - it
            means rethinking your business model, your operations, and your
            customer experience in light of what technology now makes possible.
          </p>

          <h2>What digital transformation looks like in practice</h2>

          <p>
            For most Irish businesses, digital transformation involves some
            combination of:
          </p>

          <ul>
            <li>
              <strong>Replacing legacy systems</strong> with modern, cloud-based
              platforms (ERP, CRM, and other core systems).
            </li>
            <li>
              <strong>Automating manual processes</strong> that currently rely on
              spreadsheets, email, and paper forms.
            </li>
            <li>
              <strong>Using data and analytics</strong> to inform decisions that
              were previously based on intuition or experience alone.
            </li>
            <li>
              <strong>Connecting systems</strong> so that information flows
              automatically between your operations, supply chain, customers, and
              regulators.
            </li>
            <li>
              <strong>Enabling remote and flexible working</strong> through
              collaboration tools and cloud infrastructure.
            </li>
          </ul>

          <h2>Why it matters for Irish organisations</h2>

          <p>
            Ireland&apos;s economy is heavily oriented towards sectors - pharma,
            medtech, food manufacturing, financial services - where regulatory
            compliance, traceability, and operational efficiency are critical.
            These are exactly the areas where outdated systems and manual
            processes create the most risk and waste the most resources.
          </p>
          <p>
            The challenge is not understanding the case for change. Most
            leadership teams know their systems are holding them back. The
            challenge is executing the transformation in a way that delivers
            results without paralysing the organisation during the transition.
          </p>
          <p>
            If you are planning a technology-led transformation, our{" "}
            <Link
              href="/services/business-transformation/"
              className="text-accent underline underline-offset-4 decoration-accent/30 hover:decoration-accent/60 transition-colors"
            >
              business transformation
            </Link>{" "}
            services can help you build a practical roadmap and execute it
            effectively.
          </p>
        </Prose>
      </ContentSection>

      <ContentSection withBorder>
        <div className="flex items-center gap-4">
          <Link
            href="/resources/glossary/"
            className="text-[14px] text-accent hover:text-accent/80 transition-colors flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            Back to glossary
          </Link>
        </div>
      </ContentSection>

      <PageCTA />
    </PageLayout>
  );
}
