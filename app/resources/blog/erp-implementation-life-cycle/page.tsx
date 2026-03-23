import type { Metadata } from "next";
import Link from "next/link";
import PageLayout from "../../../components/PageLayout";
import PageHeader from "../../../components/PageHeader";
import ContentSection from "../../../components/ContentSection";
import Prose from "../../../components/Prose";
import Reveal from "../../../components/Reveal";
import PageCTA from "../../../components/PageCTA";

export const metadata: Metadata = {
  title: "ERP Implementation Life Cycle | 6 Phases Explained | COGO",
  description:
    "A practical guide to the ERP implementation life cycle - the six phases from planning to optimisation, realistic timelines, and the mistakes that derail each stage.",
};

export default function ErpImplementationLifeCyclePage() {
  return (
    <PageLayout>
      <PageHeader eyebrow="Blog" title="ERP implementation life cycle: the six phases every project follows" subtitle="Lance Harcourt - 23 March 2026" />
      <ContentSection withBorder><Prose>
        <p>If you are about to spend seven figures on an ERP programme, you need a clear picture of the ERP implementation life cycle before you sign a single contract. Every ERP implementation follows six distinct phases, each with its own objectives, risks, and deliverables.</p>
        <p>According to Panorama Consulting&apos;s 2023 ERP Report, 40% of ERP projects experience significant operational disruption at go-live. Most of that disruption traces back to problems created weeks or months earlier.</p>
      </Prose></ContentSection>
      <ContentSection withBorder><Prose>
        <h2>Phase 1: Planning (8 to 12 weeks)</h2>
        <p>You document current-state processes and pain points, define objectives, build a realistic budget including 15 to 25% contingency, assemble the project team, and create the programme governance structure.</p>
        <p><strong>Common mistakes:</strong> Skipping the business case, under-resourcing internal teams, treating planning as the integrator&apos;s job. If you need independent guidance, consider <Link href="/services/implementation-support/">client-side ERP implementation consulting</Link>.</p>
        <h2>Phase 2: Design (10 to 16 weeks)</h2>
        <p>You run detailed requirements workshops, map future-state processes, identify gaps between requirements and standard software, make fit-gap decisions, and produce design documents.</p>
        <p><strong>Common mistakes:</strong> Gold-plating requirements, excluding end users from workshops, signing off designs nobody reads.</p>
        <h2>Phase 3: Build (12 to 20 weeks)</h2>
        <p>The integrator configures the system, custom developments are built, interfaces and integrations are developed, and data migration routines are built and tested.</p>
        <p><strong>Common mistakes:</strong> Losing attention, scope creep through change requests, ignoring data quality. Read our guide on <Link href="/resources/blog/erp-implementation-plan/">how to build a realistic ERP implementation plan</Link>.</p>
      </Prose></ContentSection>
      <ContentSection withBorder><Prose>
        <h2>Phase 4: Test (8 to 12 weeks)</h2>
        <p>This includes unit testing, integration testing, user acceptance testing (UAT), performance testing, data migration testing, and cutover rehearsal.</p>
        <p><strong>Common mistakes:</strong> Treating testing as the integrator&apos;s responsibility, no entry/exit criteria, skipping regression testing.</p>
        <h2>Phase 5: Deploy (2 to 6 weeks)</h2>
        <p>Final data migration, system handover, go-live communications, hypercare support, and early life issue management.</p>
        <p><strong>Common mistakes:</strong> No cutover plan, pulling the hypercare team too early, forgetting that your people still need to serve customers while learning a new system.</p>
        <h2>Phase 6: Optimise (ongoing)</h2>
        <p>Post-implementation review, process optimisation based on real usage data, Phase 2 enhancements, advanced reporting, and continuous improvement.</p>
        <p><strong>Common mistakes:</strong> Disbanding the project team on day one, declaring victory too early, no measurement of KPIs.</p>
      </Prose></ContentSection>
      <ContentSection withBorder><Prose>
        <h2>Total timeline: what to expect</h2>
        <p>For a mid-market ERP implementation (100 to 500 users), expect 12 to 18 months from planning through go-live, plus 6 to 12 months of optimisation. Large enterprise programmes routinely take 18 to 36 months. Gartner indicates the average ERP implementation takes 17.4 months.</p>
        <h2>Frequently asked questions</h2>
        <h3>What is the most important phase?</h3>
        <p>Planning. Every decision made (or avoided) in planning ripples through the entire programme.</p>
        <h3>Can we run phases in parallel?</h3>
        <p>Some overlap is normal, but overlapping major phases (such as starting build before design is signed off) introduces significant risk.</p>
        <h3>Do we need an independent adviser?</h3>
        <p>An independent, client-side adviser can be particularly valuable during planning, vendor selection, and testing. Explore our <Link href="/services/implementation-support/">client-side ERP implementation consulting</Link> services.</p>
      </Prose></ContentSection>
      <PageCTA />
    </PageLayout>
  );
}
