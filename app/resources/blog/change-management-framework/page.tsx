import type { Metadata } from "next";
import Link from "next/link";
import PageLayout from "../../../components/PageLayout";
import PageHeader from "../../../components/PageHeader";
import ContentSection from "../../../components/ContentSection";
import Prose from "../../../components/Prose";
import PageCTA from "../../../components/PageCTA";
import SvgSection from "../../../components/SvgSection";
import ProcessFlow from "../../../components/svg/ProcessFlow";

export const metadata: Metadata = {
  title: "Change Management Framework for ERP | Choose and Apply | COGO",
  description: "How to choose a change management framework for your ERP project - comparing ADKAR, Kotter, and Prosci, with practical advice on applying them to technology programmes.",
};

export default function ChangeManagementFrameworkPage() {
  return (
    <PageLayout>
      <PageHeader eyebrow="Blog" title="Change management framework: how to choose and apply one to your ERP project" subtitle="Laurence Phelan - 23 March 2026" />
      <ContentSection withBorder><Prose>
        <p>Prosci&apos;s 2023 benchmarking study found that projects with excellent change management were 7x more likely to meet their objectives. Yet in most ERP programmes, change management is an afterthought.</p>
        <h2>The most popular frameworks</h2>
        <h3>ADKAR (Prosci)</h3>
        <p>Breaks individual change into five stages: Awareness, Desire, Knowledge, Ability, Reinforcement. Practical, action-oriented, and directly actionable. Best for organisations focused on individual adoption.</p>
        <h3>Kotter&apos;s 8-step process</h3>
        <p>Eight steps from creating urgency to instituting change. Excels at the leadership and organisational level. Best for large organisations where cultural change is the primary challenge.</p>
        <h3>Prosci methodology</h3>
        <p>Wraps around ADKAR with three phases: preparing for change, managing change, and reinforcing change. The most comprehensive approach. Best for organisations building long-term change management capability.</p>
      </Prose></ContentSection>
      <SvgSection caption="Structured change management approach">
        <ProcessFlow />
      </SvgSection>

      <ContentSection withBorder><Prose>
        <h2>Applying change management to ERP projects</h2>
        <p><strong>Start at project kick-off, not before go-live.</strong> Change management should begin during the planning phase.</p>
        <p><strong>Map the change impact by role, not by module.</strong> Your people think in roles, not modules.</p>
        <p><strong>Build a network of change champions.</strong> People embedded in each department who understand and support the change.</p>
        <p><strong>Over-communicate.</strong> Prosci&apos;s research indicates employees need to hear a message 5 to 7 times before it sinks in.</p>
        <p><strong>Train for competence, not just awareness.</strong> Organisations spending 15%+ of ERP budget on training see 2x better adoption (Bersin by Deloitte).</p>
        <p><strong>Plan for resistance.</strong> It is a natural response to change, not a sign that something is wrong.</p>
        <h2>Measuring adoption</h2>
        <p>Track system usage rates, process compliance, help desk tickets, error rates, user satisfaction surveys, and business KPI improvement. For support, explore <Link href="/services/implementation-support/">our approach to ERP change management</Link>.</p>
      </Prose></ContentSection>
      <ContentSection withBorder><Prose>
        <h2>Frequently asked questions</h2>
        <h3>What is the best change management framework for ERP?</h3>
        <p>There is no single best framework. ADKAR is most commonly used in ERP implementations. Most successful programmes use elements of both ADKAR and Kotter.</p>
        <h3>How much should we budget for change management?</h3>
        <p>Industry benchmarks suggest 10 to 15% of your total ERP programme budget.</p>
        <h3>When should change management start?</h3>
        <p>Day one. Projects initiating change management at project start are 6x more likely to meet objectives (Prosci).</p>
      </Prose></ContentSection>
      <PageCTA />
    </PageLayout>
  );
}
