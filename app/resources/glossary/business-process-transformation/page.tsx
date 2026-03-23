import type { Metadata } from "next";
import Link from "next/link";
import PageLayout from "../../../components/PageLayout";
import PageHeader from "../../../components/PageHeader";
import ContentSection from "../../../components/ContentSection";
import Prose from "../../../components/Prose";
import PageCTA from "../../../components/PageCTA";

export const metadata: Metadata = {
  title: "What is business process transformation? | Glossary | COGO",
  description:
    "Business process transformation is the fundamental redesign of how work gets done within an organisation to achieve a step change in performance.",
};

export default function BusinessProcessTransformationPage() {
  return (
    <PageLayout>
      <PageHeader
        eyebrow="Glossary"
        title="Business process transformation"
        subtitle="The fundamental redesign of how work gets done within an organisation to achieve a step change in performance."
      />

      <ContentSection withBorder>
        <Prose>
          <p>
            Business process transformation is the fundamental redesign of the
            way work gets done within an organisation. Unlike incremental process
            improvement, which focuses on making existing processes faster or
            cheaper, transformation involves rethinking entire workflows from
            first principles to achieve a step change in performance.
          </p>

          <h2>When transformation is needed</h2>

          <p>
            Process improvement works well when the underlying process is sound
            but needs fine-tuning. Transformation is the right approach when:
          </p>

          <ul>
            <li>
              Your current processes were designed around systems or constraints
              that no longer exist.
            </li>
            <li>
              You are implementing a new ERP or core platform and need to
              redesign workflows to fit the new technology.
            </li>
            <li>
              Your organisation has grown through acquisition and is running
              multiple versions of the same process.
            </li>
            <li>
              Customer expectations have changed fundamentally, and your existing
              processes cannot meet them.
            </li>
            <li>
              Regulatory requirements (such as CSRD or product traceability)
              demand capabilities your current processes cannot support.
            </li>
          </ul>

          <h2>How it works</h2>

          <p>
            Business process transformation typically follows a structured
            approach: document the current state, identify pain points and root
            causes, design the future state, build a roadmap for getting there,
            and then execute. The execution phase is where most programmes
            struggle, because changing processes means changing how people work -
            and that requires sustained commitment to training, communication,
            and support.
          </p>
          <p>
            Technology is usually involved, but it is not the starting point.
            The process design should come first; the technology should be
            configured to support it, not the other way around.
          </p>
          <p>
            Our{" "}
            <Link
              href="/services/business-transformation/"
              className="text-accent underline underline-offset-4 decoration-accent/30 hover:decoration-accent/60 transition-colors"
            >
              business transformation
            </Link>{" "}
            team helps organisations plan and execute process transformation
            programmes that deliver real, measurable improvement.
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
