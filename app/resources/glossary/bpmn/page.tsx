import type { Metadata } from "next";
import Link from "next/link";
import PageLayout from "../../../components/PageLayout";
import PageHeader from "../../../components/PageHeader";
import ContentSection from "../../../components/ContentSection";
import Prose from "../../../components/Prose";
import PageCTA from "../../../components/PageCTA";

export const metadata: Metadata = {
  title: "What is BPMN? | Glossary | COGO",
  description:
    "BPMN (Business Process Model and Notation) is a standardised graphical notation for documenting business processes with a common visual language.",
};

export default function BPMNPage() {
  return (
    <PageLayout>
      <PageHeader
        eyebrow="Glossary"
        title="BPMN"
        subtitle="Business Process Model and Notation - a standardised graphical notation for documenting business processes."
      />

      <ContentSection withBorder>
        <Prose>
          <p>
            BPMN (Business Process Model and Notation) is a standardised
            graphical notation for documenting business processes. It provides a
            common visual language that business analysts, process owners, and
            technical teams can all understand, making it far more effective than
            ad-hoc flowcharts or text-based process descriptions.
          </p>

          <h2>Why BPMN matters</h2>

          <p>
            Every organisation has processes, but surprisingly few have
            documented them clearly. When you are implementing a new ERP system,
            redesigning operations, or trying to identify inefficiencies, you
            need a reliable way to map how work actually flows through your
            organisation - not how people think it flows, but how it really
            happens.
          </p>
          <p>
            BPMN gives you that. It uses a defined set of symbols - events
            (circles), activities (rectangles), gateways (diamonds), and flows
            (arrows) - to represent processes in a way that is precise enough
            for technical implementation but readable enough for business people
            to validate.
          </p>

          <h2>When to use BPMN</h2>

          <p>BPMN is particularly valuable during:</p>

          <ul>
            <li>
              <strong>ERP implementation:</strong> Documenting your current-state
              (&quot;as-is&quot;) and future-state (&quot;to-be&quot;) processes
              before configuring the system.
            </li>
            <li>
              <strong>Process improvement:</strong> Identifying bottlenecks,
              handoff points, and unnecessary steps.
            </li>
            <li>
              <strong>Compliance and audit:</strong> Creating clear, auditable
              records of how critical processes work.
            </li>
            <li>
              <strong>Automation:</strong> BPMN models can be executed directly
              by process automation engines, bridging the gap between design and
              implementation.
            </li>
          </ul>

          <p>
            If you are planning a process mapping exercise as part of a broader
            transformation programme, our{" "}
            <Link
              href="/services/business-transformation/"
              className="text-accent underline underline-offset-4 decoration-accent/30 hover:decoration-accent/60 transition-colors"
            >
              business transformation
            </Link>{" "}
            team can help.
          </p>
        </Prose>
      </ContentSection>

      <ContentSection withBorder>
        <div className="flex items-center gap-4">
          <Link
            href="/resources/glossary/"
            className="text-[14px] text-accent hover:text-accent/80 transition-colors flex items-center gap-2"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>
            Back to glossary
          </Link>
        </div>
      </ContentSection>

      <PageCTA />
    </PageLayout>
  );
}
