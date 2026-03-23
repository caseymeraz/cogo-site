import type { Metadata } from "next";
import Link from "next/link";
import PageLayout from "../../../components/PageLayout";
import PageHeader from "../../../components/PageHeader";
import ContentSection, {
  SectionHeader,
} from "../../../components/ContentSection";
import Prose from "../../../components/Prose";
import Reveal from "../../../components/Reveal";
import SpotlightCard from "../../../components/SpotlightCard";
import PageCTA from "../../../components/PageCTA";
import PageImage from "../../../components/PageImage";

export const metadata: Metadata = {
  title: "Digital Transformation Roadmap Guide | COGO",
  description:
    "How to build a digital transformation roadmap that connects strategy to execution. Step-by-step framework with downloadable template.",
};

export default function DigitalTransformationRoadmapPage() {
  return (
    <PageLayout>
      <PageHeader
        eyebrow="Guides"
        title="How to build a digital transformation roadmap that actually works"
        subtitle="A board agrees that the organisation needs to go digital. Someone produces a strategy document full of ambition. Then nothing meaningful changes for 18 months. The missing piece is a roadmap."
      />

      {/* Intro */}
      <ContentSection withBorder>
        <Prose>
          <p>
            <strong>Last updated: March 2026</strong>
          </p>
          <p>
            Nobody translated that strategy into a sequenced, funded, realistic
            plan for getting from where you are to where you need to be. That
            plan is your digital transformation roadmap. Getting it right is the
            difference between an organisation that transforms and one that just
            talks about it.
          </p>
          <p>
            At COGO Consulting, we are an independent, client-side consultancy.
            We do not sell technology. We do not take commissions from vendors.
            What we do is help organisations in Ireland and the UK build
            transformation programmes that deliver. This guide captures what we
            have learned about building roadmaps that survive contact with
            reality.
          </p>
        </Prose>
      </ContentSection>

      <PageImage
        src="/images/hero-data-analytics.jpg"
        alt="Digital transformation analytics and roadmap planning"
      />

      {/* What is a roadmap */}
      <ContentSection withBorder>
        <SectionHeader
          eyebrow="Foundations"
          title="What is a digital transformation roadmap?"
        />
        <Prose>
          <p>
            A digital transformation roadmap is a structured, time-bound plan
            that sets out the specific initiatives, technology changes, process
            redesigns, and organisational shifts your business needs to
            undertake to reach a defined future state. It connects your
            high-level strategy to concrete, sequenced actions with clear
            ownership, milestones, and success measures.
          </p>
          <p>
            Your strategy says <em>where</em> you want to get to. Your roadmap
            says <em>how</em> you will get there, <em>in what order</em>, and{" "}
            <em>by when</em>.
          </p>
          <p>A good roadmap typically spans 18 to 36 months and covers:</p>
          <ul>
            <li>
              <strong>Technology</strong>: which systems you will implement,
              replace, or integrate
            </li>
            <li>
              <strong>Processes</strong>: which workflows need redesigning and in
              what sequence
            </li>
            <li>
              <strong>People</strong>: what training, restructuring, and change
              management is needed
            </li>
            <li>
              <strong>Data</strong>: how you will consolidate, clean, and govern
              your data
            </li>
            <li>
              <strong>Governance</strong>: who owns each initiative, how
              decisions get made, and how you measure progress
            </li>
          </ul>
        </Prose>
      </ContentSection>

      {/* 8-step framework */}
      <ContentSection withBorder>
        <SectionHeader
          eyebrow="Framework"
          title="How to build a digital transformation roadmap: the 8-step framework"
          subtitle="Based on what we have seen work across dozens of transformation programmes in manufacturing, pharma, food production, financial services, and professional services."
        />
        <div className="grid gap-6">
          <Reveal>
            <SpotlightCard>
              <div className="p-6">
                <h3 className="text-[17px] font-semibold text-foreground mb-3">
                  Step 1: Assess your current technology landscape
                </h3>
                <p className="text-[14px] text-muted leading-relaxed">
                  You cannot plan a route without knowing your starting point.
                  A proper assessment covers system inventory (including shadow
                  IT), integration mapping, technical debt, user satisfaction,
                  and total cost of ownership. Productiv&#39;s 2024 SaaS
                  Intelligence Report found the average enterprise uses 371 SaaS
                  applications, with 56% of licences unused or underutilised.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
          <Reveal delay={0.05}>
            <SpotlightCard>
              <div className="p-6">
                <h3 className="text-[17px] font-semibold text-foreground mb-3">
                  Step 2: Define your business vision and objectives
                </h3>
                <p className="text-[14px] text-muted leading-relaxed">
                  Your transformation objectives should be business outcomes,
                  not technology goals. There is a meaningful difference between
                  &quot;implement a new ERP system&quot; and &quot;reduce
                  order-to-cash cycle time by 40% through integrated, automated
                  processes.&quot; Make them specific, measurable, and anchored
                  to commercial reality.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
          <Reveal delay={0.1}>
            <SpotlightCard>
              <div className="p-6">
                <h3 className="text-[17px] font-semibold text-foreground mb-3">
                  Step 3: Map your processes (current and future state)
                </h3>
                <p className="text-[14px] text-muted leading-relaxed">
                  Document how things actually work today, not how they are
                  supposed to work. Then design the processes you want.
                  Standardise before you automate. Design for exceptions, not
                  just the happy path. Involve the people who actually do the
                  work.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
          <Reveal delay={0.15}>
            <SpotlightCard>
              <div className="p-6">
                <h3 className="text-[17px] font-semibold text-foreground mb-3">
                  Step 4: Evaluate and select the right technology
                </h3>
                <p className="text-[14px] text-muted leading-relaxed">
                  With your objectives and future-state processes defined, you
                  can now make informed technology decisions. Evaluate functional
                  fit, integration capability, total cost of ownership, vendor
                  viability, and implementation track record. This is where{" "}
                  <Link href="/services/erp-consulting/">
                    independent advice
                  </Link>{" "}
                  pays for itself many times over.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
          <Reveal delay={0.2}>
            <SpotlightCard>
              <div className="p-6">
                <h3 className="text-[17px] font-semibold text-foreground mb-3">
                  Step 5: Build your data strategy
                </h3>
                <p className="text-[14px] text-muted leading-relaxed">
                  Data is the part everyone acknowledges is important and nobody
                  wants to deal with properly. Address data quality, migration
                  planning, governance, architecture, and analytics. Gartner
                  estimates poor data quality costs organisations an average of
                  USD 12.9 million per year. Start data cleansing early.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
          <Reveal delay={0.25}>
            <SpotlightCard>
              <div className="p-6">
                <h3 className="text-[17px] font-semibold text-foreground mb-3">
                  Step 6: Design the people and change management plan
                </h3>
                <p className="text-[14px] text-muted leading-relaxed">
                  Technology is the easy part. People are the hard part.
                  McKinsey&#39;s research shows 70% of transformation programmes
                  fail to reach their goals, and the most cited cause is
                  employee resistance. Allocate 15 to 20% of your programme
                  budget to change management.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
          <Reveal delay={0.3}>
            <SpotlightCard>
              <div className="p-6">
                <h3 className="text-[17px] font-semibold text-foreground mb-3">
                  Step 7: Create the implementation timeline with milestones
                </h3>
                <p className="text-[14px] text-muted leading-relaxed">
                  Sequence by dependency, not by wish. Plan in phases, not as a
                  single big bang. Build in contingency (if your estimate is 12
                  weeks, plan for 15). Define clear milestones that are binary
                  (done or not done). Assign a named person, not a team, who is
                  accountable.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
          <Reveal delay={0.35}>
            <SpotlightCard>
              <div className="p-6">
                <h3 className="text-[17px] font-semibold text-foreground mb-3">
                  Step 8: Define success metrics and governance
                </h3>
                <p className="text-[14px] text-muted leading-relaxed">
                  Measure at three levels: business outcome metrics (revenue,
                  cost, satisfaction), programme delivery metrics (time, budget,
                  scope), and adoption metrics (login rates, process
                  compliance). The business must own the programme, not IT.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
        </div>
      </ContentSection>

      {/* Manufacturing roadmap */}
      <ContentSection withBorder>
        <SectionHeader
          eyebrow="Manufacturing"
          title="Digital transformation roadmap for manufacturing"
          subtitle="Manufacturing presents unique challenges. The intersection of production planning, shop floor execution, quality management, and supply chain creates complexity that generic roadmap templates cannot handle."
        />
        <Prose>
          <h3>Why manufacturing roadmaps are different</h3>
          <ul>
            <li>
              <strong>IT/OT convergence</strong>: connecting shop floor equipment
              (PLCs, SCADA, MES) with enterprise systems requires specialist
              skills and careful cybersecurity planning
            </li>
            <li>
              <strong>Production continuity</strong>: you cannot take a factory
              offline for a system cutover the way you might take an office team
              offline for a weekend
            </li>
            <li>
              <strong>Quality and regulatory requirements</strong>: in food
              manufacturing and pharma, traceability and compliance are
              constraints, not nice-to-haves
            </li>
            <li>
              <strong>Shop floor adoption</strong>: getting buy-in from
              production teams and shift supervisors is different from training
              office staff on a new finance system
            </li>
          </ul>

          <h3>A typical manufacturing transformation roadmap</h3>
          <p>
            <strong>Phase 1 (months 1 to 8): Foundation.</strong> Complete
            technology and process assessment across all sites. Cleanse and
            standardise master data. Implement core ERP modules (finance,
            procurement, inventory). Begin MES evaluation and selection.
          </p>
          <p>
            <strong>Phase 2 (months 9 to 16): Operations.</strong> Deploy
            production planning and shop floor execution. Integrate MES with
            ERP. Implement quality management system. Roll out warehouse
            management.
          </p>
          <p>
            <strong>Phase 3 (months 17 to 24): Optimisation.</strong> Deploy
            advanced planning and scheduling. Implement predictive maintenance
            using IoT sensor data. Build operational dashboards and analytics.
          </p>
          <p>
            According to the World Economic Forum&#39;s 2024 Global Lighthouse
            Network report, manufacturing companies that successfully implement
            Industry 4.0 technologies see productivity improvements of 30 to
            50% and quality improvements of 35 to 65%.
          </p>
        </Prose>
      </ContentSection>

      {/* Common pitfalls */}
      <ContentSection withBorder>
        <SectionHeader
          eyebrow="Pitfalls"
          title="Common pitfalls and how to avoid them"
        />
        <div className="grid md:grid-cols-2 gap-6">
          <Reveal>
            <SpotlightCard>
              <div className="p-6">
                <h3 className="text-[17px] font-semibold text-foreground mb-3">
                  Starting with technology instead of business problems
                </h3>
                <p className="text-[14px] text-muted leading-relaxed">
                  The most common and most expensive mistake. An organisation
                  decides it needs &quot;a new ERP&quot; without first being
                  clear about what business problems it is solving. Always start
                  with business objectives before technology selection.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
          <Reveal delay={0.05}>
            <SpotlightCard>
              <div className="p-6">
                <h3 className="text-[17px] font-semibold text-foreground mb-3">
                  Underestimating the people side
                </h3>
                <p className="text-[14px] text-muted leading-relaxed">
                  Projects with excellent change management were six times more
                  likely to meet objectives (Prosci). Despite this, most
                  organisations spend less than 5% of their transformation
                  budget on change management.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
          <Reveal delay={0.1}>
            <SpotlightCard>
              <div className="p-6">
                <h3 className="text-[17px] font-semibold text-foreground mb-3">
                  Planning everything at the same level of detail
                </h3>
                <p className="text-[14px] text-muted leading-relaxed">
                  Use a rolling-wave approach. Plan the current phase in detail,
                  the next phase at an intermediate level, and later phases at a
                  high level. Update the detailed plans as you get closer.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
          <Reveal delay={0.15}>
            <SpotlightCard>
              <div className="p-6">
                <h3 className="text-[17px] font-semibold text-foreground mb-3">
                  Ignoring data until it is too late
                </h3>
                <p className="text-[14px] text-muted leading-relaxed">
                  Data quality issues are the number one cause of ERP
                  implementation delays (Panorama Consulting 2024). Start your
                  data assessment in Phase 1, regardless of when your go-live is
                  planned.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
          <Reveal delay={0.2}>
            <SpotlightCard>
              <div className="p-6">
                <h3 className="text-[17px] font-semibold text-foreground mb-3">
                  No executive sponsorship
                </h3>
                <p className="text-[14px] text-muted leading-relaxed">
                  A transformation programme without active, visible executive
                  sponsorship will stall. The sponsor should attend steering
                  committee meetings, communicate regularly, and make decisions
                  promptly when escalated.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
        </div>
      </ContentSection>

      {/* FAQ */}
      <ContentSection withBorder>
        <SectionHeader eyebrow="FAQ" title="Frequently asked questions" />
        <div className="space-y-10">
          <Reveal>
            <Prose>
              <h3>What is a digital transformation roadmap?</h3>
              <p>
                A structured plan that translates your digital strategy into
                specific, sequenced initiatives with timelines, budgets,
                ownership, and success metrics. It typically spans 18 to 36
                months and covers technology, processes, people, data, and
                governance.
              </p>
            </Prose>
          </Reveal>
          <Reveal>
            <Prose>
              <h3>How long should a transformation roadmap cover?</h3>
              <p>
                Most effective roadmaps span 18 to 36 months. Shorter than 18
                months typically does not allow enough time for meaningful
                transformation. Longer than 36 months means the later phases
                will be largely fictional. Use a rolling-wave approach: detailed
                planning for the next 6 months, intermediate for months 7 to
                18, and directional for months 19 to 36.
              </p>
            </Prose>
          </Reveal>
          <Reveal>
            <Prose>
              <h3>
                What is the difference between a roadmap and a strategy?
              </h3>
              <p>
                A digital strategy defines <em>what</em> you want to achieve
                and <em>why</em>. A roadmap defines <em>how</em> you will get
                there, <em>when</em> things will happen, and <em>who</em> is
                responsible. The strategy is typically a 3 to 5 year document.
                The roadmap is an 18 to 36 month delivery plan. You need both,
                but the roadmap is what actually makes things happen.
              </p>
            </Prose>
          </Reveal>
          <Reveal>
            <Prose>
              <h3>What are common digital transformation mistakes?</h3>
              <p>
                The five most common: starting with technology selection before
                defining business problems, underinvesting in change management,
                planning everything at the same level of detail, ignoring data
                quality until late, and lacking active executive sponsorship.
                McKinsey&#39;s research suggests 70% of programmes fail to meet
                objectives, and the majority of failures are caused by people
                and process issues, not technology.
              </p>
            </Prose>
          </Reveal>
          <Reveal>
            <Prose>
              <h3>How often should a roadmap be updated?</h3>
              <p>
                At minimum, review and update quarterly. The current phase
                should be reviewed fortnightly as part of programme governance.
                Formally revisit the roadmap whenever there is a significant
                change in business strategy, a major milestone is reached, a
                critical risk materialises, or there is a leadership change.
              </p>
            </Prose>
          </Reveal>
        </div>
      </ContentSection>

      <PageCTA
        title="Need help building your roadmap?"
        subtitle="If you are facing a major transformation programme and want independent, experienced guidance, we can help. We have built roadmaps for manufacturers, pharma companies, food businesses, and professional services firms across Ireland and the UK. Zero vendor bias."
        buttonText="Get in touch"
        buttonHref="/contact/"
      />
    </PageLayout>
  );
}
