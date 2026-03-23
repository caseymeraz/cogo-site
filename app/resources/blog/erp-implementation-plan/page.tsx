import type { Metadata } from "next";
import Link from "next/link";
import PageLayout from "../../../components/PageLayout";
import PageHeader from "../../../components/PageHeader";
import ContentSection from "../../../components/ContentSection";
import Prose from "../../../components/Prose";
import Reveal from "../../../components/Reveal";
import PageCTA from "../../../components/PageCTA";

export const metadata: Metadata = {
  title: "ERP Implementation Plan: What a Good One Looks Like | COGO",
  description:
    "Most ERP implementation plans are either too vague or too detailed. Here is what a solid ERP implementation plan actually contains, the common mistakes, and a template structure you can adapt.",
};

export default function ErpImplementationPlanPage() {
  return (
    <PageLayout>
      <PageHeader
        eyebrow="Blog"
        title="Your ERP implementation plan is probably missing the parts that matter most"
        subtitle="Lance Harcourt - 23 March 2026"
      />

      <ContentSection withBorder>
        <Prose>
          <p>An ERP implementation plan is supposed to be the document that keeps a complex, expensive, high-risk project on track. In practice, most of the plans we see are either a vague set of bullet points that no one references after week two, or a 200-page tome produced by the system integrator that the client team never fully reads.</p>
          <p>Neither approach works. According to Panorama Consulting&apos;s 2023 ERP Report, 46% of ERP projects exceed their original budget, 43% exceed their planned timeline, and only 57% of organisations report that they achieved at least half of their expected benefits.</p>
          <p>This post walks you through what a good ERP implementation plan looks like, the key components it must contain, the planning mistakes that derail projects, and a template structure you can adapt.</p>
        </Prose>
      </ContentSection>

      <ContentSection withBorder>
        <Prose>
          <h2>What an ERP implementation plan actually is</h2>
          <p>An ERP implementation plan is a living document that defines: what the project will deliver (scope), how long it will take (timeline and milestones), what it will cost (budget), who will do the work (resources and governance), what could go wrong (risks and mitigations), and how you will know if it is working (success criteria and benefits tracking).</p>
          <p>It is not a project schedule. It is not a requirements document. It is not a statement of work from your system integrator. It is the client-side plan that you, the organisation buying and implementing the ERP, own and manage.</p>
        </Prose>
      </ContentSection>

      <ContentSection withBorder>
        <Prose>
          <h2>The key components of a solid ERP implementation plan</h2>
          <h3>1. Scope definition</h3>
          <p>This is where most problems start. A vague scope leads to scope creep, budget overruns, and go-live delays. Your scope definition should include in-scope modules and functionality, in-scope business processes, in-scope sites and entities, out-of-scope items, and integration scope.</p>
          <h3>2. Timeline and milestones</h3>
          <p>Your timeline should be realistic, not aspirational. According to Panorama Consulting (2023), the average ERP implementation takes 16.3 months. Key milestones typically include project kick-off, requirements sign-off, design/blueprint sign-off, development complete, SIT complete, UAT complete, data migration complete, go/no-go decision, go-live, hypercare period end, and project close.</p>
          <h3>3. Budget</h3>
          <p>Your ERP budget should cover all costs: software costs, implementation partner fees, internal resource costs, infrastructure costs, data migration costs, training costs, change management costs, and contingency (15% to 25% of total project cost). For <Link href="/resources/guides/erp-cost-guide/">realistic ERP cost ranges for UK businesses</Link>, see our cost guide.</p>
          <h3>4. Resources and governance</h3>
          <p>An ERP implementation demands significant internal resources. Your plan must identify an executive sponsor, a client-side project manager, process owners, subject matter experts, and a steering committee.</p>
          <h3>5. Risk register</h3>
          <p>Every ERP project carries risk. Common risks include loss of key SMEs, scope creep, data quality issues discovered late, integration complexity exceeding estimates, organisational resistance, system integrator resource changes, testing delays, and go-live readiness not achieved by the planned date.</p>
          <h3>6. Change management plan</h3>
          <p>Your change management plan should cover impact assessment, communication plan, training plan, resistance management, and readiness assessment.</p>
          <h3>7. Testing strategy</h3>
          <p>Your plan should define unit testing, system integration testing (SIT), user acceptance testing (UAT), performance testing, and data migration testing (at least two full dress rehearsals before go-live).</p>
        </Prose>
      </ContentSection>

      <ContentSection withBorder>
        <Prose>
          <h2>Common planning mistakes</h2>
          <p><strong>1. Planning for the happy path only.</strong> Most plans assume everything will go roughly to schedule. Build in buffer. Define your go/no-go criteria early.</p>
          <p><strong>2. Underestimating internal resource requirements.</strong> Your SMEs will spend 30% to 50% of their time on the project during design and testing phases.</p>
          <p><strong>3. No client-side project manager.</strong> Relying entirely on the system integrator&apos;s project manager is like relying entirely on your builder to manage your house renovation. Invest in <Link href="/services/implementation-support/">client-side ERP implementation consulting</Link> if you do not have this capability in-house.</p>
          <p><strong>4. Treating the plan as a static document.</strong> Your plan should be reviewed and updated at least fortnightly.</p>
          <p><strong>5. Skipping the benefits realisation plan.</strong> Without a benefits realisation plan, you have no way of knowing whether the project succeeded or simply finished.</p>
        </Prose>
      </ContentSection>

      <ContentSection withBorder>
        <Prose>
          <h2>Template structure for your ERP implementation plan</h2>
          <ol>
            <li><strong>Executive summary</strong> - Project objectives, scope summary, timeline summary, budget summary</li>
            <li><strong>Project scope</strong> - In-scope modules, processes, sites, and integrations; out-of-scope items; scope change control procedure</li>
            <li><strong>Project timeline</strong> - Phase breakdown with dates; milestone schedule with entry/exit criteria; dependencies and critical path</li>
            <li><strong>Budget</strong> - Cost breakdown by category; contingency allocation; cost tracking approach</li>
            <li><strong>Organisation and governance</strong> - Project team structure and roles; steering committee terms of reference; RACI; escalation procedures</li>
            <li><strong>Resource plan</strong> - Internal resource allocation by phase; backfill arrangements; integrator resource commitments</li>
            <li><strong>Risk management</strong> - Risk register; issue log; review frequency</li>
            <li><strong>Change management plan</strong> - Impact assessment; communication plan; training plan; readiness assessment approach</li>
            <li><strong>Testing strategy</strong> - Test phases, responsibilities, and timelines; defect management process; go/no-go criteria</li>
            <li><strong>Data migration plan</strong> - Data scope and mapping; data cleansing approach; migration rehearsal schedule; verification and sign-off process</li>
            <li><strong>Go-live plan</strong> - Cutover schedule; fallback/rollback plan; hypercare arrangements</li>
            <li><strong>Benefits realisation plan</strong> - Target benefits with measurable KPIs; measurement approach and timeline; accountability for benefit delivery</li>
          </ol>
        </Prose>
      </ContentSection>

      <ContentSection withBorder>
        <Prose>
          <h2>Frequently asked questions</h2>
          <h3>How detailed should an ERP implementation plan be?</h3>
          <p>Detailed enough that any member of the steering committee can pick it up and understand the current state of the project, the next milestones, and the key risks. But not so detailed that maintaining it becomes a project in itself.</p>
          <h3>Who should own the ERP implementation plan?</h3>
          <p>The client-side project manager. Not the system integrator. The plan is a client document that protects your interests.</p>
          <h3>What is the biggest planning mistake you see?</h3>
          <p>Underestimating the organisational change. Businesses spend 80% of their planning effort on the technical implementation and 20% on change management. It should be closer to 50/50.</p>
        </Prose>
      </ContentSection>

      <ContentSection withBorder>
        <Reveal>
          <p className="text-[15px] text-muted leading-relaxed">
            <strong>Starting an ERP project and want to make sure your plan covers what matters?</strong>{" "}
            <Link href="/contact/" className="text-accent underline underline-offset-4 decoration-accent/30 hover:decoration-accent/60 transition-colors">Get in touch</Link>{" "}
            about our <Link href="/services/implementation-support/" className="text-accent underline underline-offset-4 decoration-accent/30 hover:decoration-accent/60 transition-colors">client-side ERP implementation consulting</Link> service.
          </p>
        </Reveal>
      </ContentSection>

      <PageCTA />
    </PageLayout>
  );
}
