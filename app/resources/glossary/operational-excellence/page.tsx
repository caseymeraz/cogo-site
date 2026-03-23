import type { Metadata } from "next";
import Link from "next/link";
import PageLayout from "../../../components/PageLayout";
import PageHeader from "../../../components/PageHeader";
import ContentSection from "../../../components/ContentSection";
import Prose from "../../../components/Prose";
import PageCTA from "../../../components/PageCTA";

export const metadata: Metadata = {
  title: "What is operational excellence? | Glossary | COGO",
  description:
    "Operational excellence is a management philosophy focused on continuously improving operations through eliminating waste, reducing variation, and building problem-solving culture.",
};

export default function OperationalExcellencePage() {
  return (
    <PageLayout>
      <PageHeader
        eyebrow="Glossary"
        title="Operational excellence"
        subtitle="A management philosophy focused on continuously improving the way an organisation operates."
      />

      <ContentSection withBorder>
        <Prose>
          <p>
            Operational excellence is a management philosophy and set of
            practices focused on continuously improving the way an organisation
            operates. It is not a project with a start and end date - it is an
            ongoing commitment to eliminating waste, reducing variation,
            improving quality, and delivering greater value to customers.
          </p>

          <h2>Core principles</h2>

          <p>
            Operational excellence draws on several established methodologies,
            including Lean (originally from the Toyota Production System), Six
            Sigma, and theory of constraints. While the tools differ, the
            underlying principles are consistent:
          </p>

          <ul>
            <li>
              <strong>Customer focus:</strong> Every process should be evaluated
              by the value it delivers to the customer. Anything that does not
              add value is a candidate for elimination.
            </li>
            <li>
              <strong>Process thinking:</strong> Work flows through processes,
              not through organisational charts. Understanding and improving
              those flows is more productive than optimising individual
              departments in isolation.
            </li>
            <li>
              <strong>Continuous improvement:</strong> Small, sustained
              improvements compound over time. Organisations that build a culture
              of daily problem-solving consistently outperform those that rely on
              periodic big-bang change programmes.
            </li>
            <li>
              <strong>Respect for people:</strong> The people closest to the work
              are best placed to identify problems and propose improvements.
              Leadership&apos;s role is to create the conditions for that to
              happen.
            </li>
          </ul>

          <h2>Operational excellence in practice</h2>

          <p>
            In an Irish manufacturing or services context, operational excellence
            typically involves process mapping, performance measurement (KPIs and
            visual management), waste reduction, standardised work, and
            capability building. The goal is not perfection - it is building an
            organisation that gets measurably better, month after month.
          </p>
          <p>
            To explore how operational excellence fits into a broader improvement
            programme, visit our{" "}
            <Link
              href="/services/business-transformation/"
              className="text-accent underline underline-offset-4 decoration-accent/30 hover:decoration-accent/60 transition-colors"
            >
              business transformation
            </Link>{" "}
            services page.
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
