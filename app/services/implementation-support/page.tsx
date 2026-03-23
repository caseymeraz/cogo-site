import type { Metadata } from "next";
import PageLayout from "../../components/PageLayout";
import PageHeader from "../../components/PageHeader";
import ContentSection, { SectionHeader } from "../../components/ContentSection";
import Prose from "../../components/Prose";
import Reveal from "../../components/Reveal";
import SpotlightCard from "../../components/SpotlightCard";
import PageCTA from "../../components/PageCTA";
import PageImage from "../../components/PageImage";
import SvgSection from "../../components/SvgSection";
import TimelineRoadmap from "../../components/svg/TimelineRoadmap";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ERP Implementation Services | Independent Support | COGO",
  description:
    "Client-side ERP implementation support from independent consultants. We manage your implementation so vendors deliver on time and on budget.",
};

export default function ImplementationSupportPage() {
  return (
    <PageLayout>
      <PageHeader
        eyebrow="Implementation Support"
        title="Your ERP implementation is too important to leave to the people selling you the software"
        subtitle="COGO is an independent, client-side consultancy. We do not sell software. We do not take referral fees from vendors. We sit on your side of the table and make sure the people implementing your ERP system actually deliver what they promised."
      />

      {/* Intro */}
      <ContentSection withBorder>
        <Prose>
          <p>
            Every other page ranking for &quot;ERP implementation&quot; was written by the companies selling you the software. Oracle, SAP, NetSuite, Sage: they all have glossy guides explaining how their product will transform your business. What none of them mention is that they have a financial interest in how your ERP implementation unfolds, what gets scoped in, and how long it takes.
          </p>
          <p>
            This page is different. COGO is an independent, client-side consultancy. We do not sell software. We do not take referral fees from vendors. We sit on your side of the table and make sure the people implementing your ERP system actually deliver what they promised.
          </p>
          <p>
            If you are about to spend six or seven figures on an ERP implementation, or if you are already mid-project and things are going sideways, this page will give you a clear picture of what the process should look like, where it usually goes wrong, and what independent support actually involves.
          </p>
        </Prose>
      </ContentSection>

      <PageImage src="/images/hero-project-planning.jpg" alt="Project planning and timeline management for ERP implementation" />

      <SvgSection caption="A typical ERP implementation timeline">
        <TimelineRoadmap />
      </SvgSection>

      {/* Your ERP implementation deserves someone on your side */}
      <ContentSection withBorder withGrain>
        <SectionHeader
          eyebrow="Client-Side Support"
          title="Your ERP implementation deserves someone on your side"
        />
        <Prose>
          <p>
            Here is a scenario we see regularly. An organisation selects an ERP system, signs a contract with a system integrator, and hands over the keys. The integrator runs the project. They control the plan, the milestones, the budget reporting, and the definition of &quot;done.&quot; The client&apos;s internal team, often stretched thin and doing this for the first time, tries to keep up.
          </p>
          <p>
            Six months later, the project is over budget, behind schedule, and the integrator is pointing to change requests as the reason. The client has no independent view of whether the original scope was realistic, whether the change requests were genuinely out of scope, or whether the testing was thorough enough.
          </p>
          <p>
            This is what COGO exists to prevent.
          </p>
          <p>
            Our ERP implementation support covers client-side programme management, vendor oversight, change management, testing coordination, and go-live support. We work alongside your team from day one, or we parachute in mid-project when things need correcting.
          </p>
          <p>
            We do not implement the software. We make sure the people who do are held accountable.
          </p>
          <p>
            What that means in practice: we attend every steering committee, we review every deliverable against the contract, we run independent testing, we manage the change impact on your people, and we give you honest reporting on where the project actually stands, not where the integrator says it stands.
          </p>
          <p>
            If you are still at the selection stage, our{" "}
            <Link href="/services/erp-consulting/">independent ERP consulting services</Link> can help you get the foundation right before implementation begins. If you have already chosen SAP, we offer dedicated{" "}
            <Link href="/services/sap-consulting/">SAP consulting services for Ireland and the UK</Link>.
          </p>
        </Prose>
      </ContentSection>

      {/* The 6 phases of ERP implementation */}
      <ContentSection withBorder>
        <SectionHeader
          eyebrow="Methodology"
          title="The 6 phases of ERP implementation"
          subtitle="Every ERP implementation methodology follows roughly the same six phases. Understanding these phases lets you hold your implementation partner to a structured plan."
        />
        <div className="space-y-8">
          <Reveal>
            <SpotlightCard>
              <div className="p-7">
                <h3 className="text-[18px] font-semibold text-foreground mb-3">
                  Phase 1: Project planning and scoping
                </h3>
                <p className="text-[14px] text-muted leading-relaxed mb-3">
                  This is where the entire project is defined. Get it wrong here, and every subsequent phase inherits the problem. Project planning includes defining the programme governance structure, agreeing the scope, setting the budget and timeline, and mobilising both the internal team and the system integrator.
                </p>
                <p className="text-[14px] text-muted leading-relaxed mb-3">
                  The scoping work should produce a detailed statement of work that maps your business requirements to the ERP system&apos;s capabilities. This document becomes the contract baseline.
                </p>
                <p className="text-[14px] text-muted leading-relaxed">
                  Common mistakes at this stage: underestimating internal resource requirements (Panorama Consulting&apos;s 2024 ERP Report found that 39% of organisations identified insufficient internal resources as a primary challenge), accepting vague scope documents, and skipping the organisational readiness assessment. An independent ERP implementation consultant reviews all of these documents before they are signed.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
          <Reveal delay={0.05}>
            <SpotlightCard>
              <div className="p-7">
                <h3 className="text-[18px] font-semibold text-foreground mb-3">
                  Phase 2: Business process design
                </h3>
                <p className="text-[14px] text-muted leading-relaxed mb-3">
                  This phase answers a deceptively simple question: how will your business actually work on the new system? It involves documenting your current processes (as-is), designing the future-state processes (to-be), and mapping those processes to the ERP system&apos;s functionality. Where the system cannot support a process natively, you need to decide whether to change the process, configure the system differently, or build a customisation.
                </p>
                <p className="text-[14px] text-muted leading-relaxed mb-3">
                  This is where the tension between &quot;best practice&quot; and &quot;how we actually operate&quot; comes to a head. The job of an independent consultant is to help you make those trade-off decisions with full information.
                </p>
                <p className="text-[14px] text-muted leading-relaxed">
                  For organisations in regulated industries, this phase is especially critical. If you are in{" "}
                  <Link href="/industries/food-manufacturing/" className="text-accent underline underline-offset-4 decoration-accent/30 hover:decoration-accent/60 transition-colors">food manufacturing</Link> or{" "}
                  <Link href="/industries/pharmaceutical/" className="text-accent underline underline-offset-4 decoration-accent/30 hover:decoration-accent/60 transition-colors">pharmaceutical manufacturing</Link>, your processes need to satisfy regulatory requirements that generic &quot;best practice&quot; templates do not cover.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
          <Reveal delay={0.1}>
            <SpotlightCard>
              <div className="p-7">
                <h3 className="text-[18px] font-semibold text-foreground mb-3">
                  Phase 3: System configuration and development
                </h3>
                <p className="text-[14px] text-muted leading-relaxed mb-3">
                  With processes agreed, the integrator configures the ERP system and builds any custom developments. This phase also includes integration work, connecting the ERP system to other applications in your technology landscape.
                </p>
                <p className="text-[14px] text-muted leading-relaxed">
                  What to watch for: scope creep disguised as &quot;enhancements,&quot; integration complexity (if you have 15 integrations, each one needs its own design, build, and test cycle), and technical debt from shortcuts taken during configuration to meet deadlines. An independent consultant reviews the technical approach to identify risks early.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
          <Reveal delay={0.15}>
            <SpotlightCard>
              <div className="p-7">
                <h3 className="text-[18px] font-semibold text-foreground mb-3">
                  Phase 4: Data migration
                </h3>
                <p className="text-[14px] text-muted leading-relaxed mb-3">
                  Data migration is the phase that nobody wants to talk about until it becomes a crisis. Moving data from your legacy systems into the new ERP system is tedious, unglamorous work, and it is absolutely critical. The process involves extracting data from source systems, cleaning and transforming it, loading it into the ERP system, and validating that the data is accurate and complete.
                </p>
                <p className="text-[14px] text-muted leading-relaxed">
                  The biggest challenge is data quality. Your legacy systems contain years of accumulated data: duplicate customer records, incomplete supplier information, inconsistent product codes. Plan for at least three full mock migrations before go-live. A common cause of delays is discovering data quality issues too late. The best plans begin data assessment work in Phase 1 and run cleansing activities in parallel with Phases 2 and 3.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
          <Reveal delay={0.2}>
            <SpotlightCard>
              <div className="p-7">
                <h3 className="text-[18px] font-semibold text-foreground mb-3">
                  Phase 5: Testing, training, and user adoption
                </h3>
                <p className="text-[14px] text-muted leading-relaxed mb-3">
                  Testing is not a single event. It is a structured programme that should include unit testing, integration testing, user acceptance testing, performance testing, and regression testing. Each type requires documented test scripts, defined pass/fail criteria, and a formal defect management process.
                </p>
                <p className="text-[14px] text-muted leading-relaxed">
                  Training must be role-based (the warehouse team does not need to learn finance processes), hands-on (classroom slides are not enough), and delivered close to go-live (train too early and people forget). According to Prosci&apos;s 2023 report, projects with excellent change management were six times more likely to meet objectives. User adoption is the ultimate test: if people revert to spreadsheets within weeks, the implementation has failed regardless of whether the system is technically sound.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
          <Reveal delay={0.25}>
            <SpotlightCard>
              <div className="p-7">
                <h3 className="text-[18px] font-semibold text-foreground mb-3">
                  Phase 6: Go-live and post-implementation support
                </h3>
                <p className="text-[14px] text-muted leading-relaxed mb-3">
                  Go-live is not the finish line. It is the starting line. The cutover itself needs meticulous planning: data is frozen, final migration loads are run, the system is validated, and then users switch over.
                </p>
                <p className="text-[14px] text-muted leading-relaxed">
                  Post-implementation support (often called &quot;hypercare&quot;) typically runs for four to twelve weeks. After hypercare ends, you need a clear plan for ongoing support. Who manages the system? How are changes requested and approved? Who handles upgrades? If you do not have answers to these questions before go-live, you are not ready.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
        </div>
      </ContentSection>

      {/* Realistic timelines */}
      <ContentSection withBorder withGrain>
        <SectionHeader
          eyebrow="Timelines"
          title="Realistic ERP implementation timelines"
          subtitle="One of the most common questions we hear is 'how long will this take?' The honest answer is: longer than you want, but less than you fear, if you plan properly."
        />
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <Reveal delay={0}>
            <SpotlightCard>
              <div className="p-7">
                <p className="text-accent text-[13px] uppercase tracking-wider font-medium mb-2">Under 100 users</p>
                <p className="text-[28px] font-semibold text-foreground mb-3">3-6 months</p>
                <p className="text-[14px] text-muted leading-relaxed">
                  Single-site or single-business-unit implementation covering core financials, procurement, and perhaps one operational module. Cloud-based ERP systems with pre-built configurations can sometimes deliver within this window.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
          <Reveal delay={0.1}>
            <SpotlightCard>
              <div className="p-7">
                <p className="text-accent text-[13px] uppercase tracking-wider font-medium mb-2">100-500 users</p>
                <p className="text-[28px] font-semibold text-foreground mb-3">6-12 months</p>
                <p className="text-[14px] text-muted leading-relaxed">
                  Most mid-market ERP implementations. Multiple business units or locations, several modules, a dozen or more integrations, and a significant data migration effort. This is where the majority of Irish and UK organisations fall.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
          <Reveal delay={0.2}>
            <SpotlightCard>
              <div className="p-7">
                <p className="text-accent text-[13px] uppercase tracking-wider font-medium mb-2">500+ users</p>
                <p className="text-[28px] font-semibold text-foreground mb-3">12-24 months</p>
                <p className="text-[14px] text-muted leading-relaxed">
                  Large, multi-site, often multi-country implementations. These projects typically involve phased rollouts, complex integrations with legacy systems, and significant change management programmes. Some stretch beyond 24 months.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
        </div>
        <Prose>
          <p>
            <strong>Factors that extend timelines:</strong> Customisation adds design, build, and test time. Poor source data requires extensive cleansing. If your steering committee meets monthly and takes three meetings to approve a design decision, multiply your timeline by 1.5. Internal resource availability matters: if your project team members are splitting time between the ERP project and their day jobs, everything takes longer. And scope changes mid-project are the single fastest way to blow a timeline.
          </p>
          <p>
            If you want to understand the full financial picture, our guide on{" "}
            <Link href="/resources/guides/erp-cost-guide/">how much does an ERP system cost in the UK</Link> covers licence, implementation, and ongoing costs in detail.
          </p>
        </Prose>
      </ContentSection>

      {/* Why 70% fail */}
      <ContentSection withBorder>
        <SectionHeader
          eyebrow="The Reality"
          title="Why 70% of ERP implementations fail"
        />
        <Prose>
          <p>
            The statistic gets quoted so often that it has become background noise, but it reflects a real pattern. Panorama Consulting&apos;s 2024 ERP Report found that 46% of ERP projects exceeded their original budget, and the average cost overrun was 26%. A separate study by KPMG (2023) found that only 13% of major IT projects were considered &quot;fully successful.&quot;
          </p>
          <p>
            The word &quot;fail&quot; needs context. Most ERP implementations do eventually go live. The system gets switched on, transactions get processed, and the business continues. But &quot;the system works&quot; is a very low bar. Failure usually means the project cost significantly more than planned, took longer than expected, delivered fewer benefits than the business case promised, or caused serious operational disruption during the transition.
          </p>
        </Prose>
        <Reveal>
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            <SpotlightCard>
              <div className="p-7">
                <p className="text-accent font-semibold text-[16px] mb-2">1. No independent oversight</p>
                <p className="text-[14px] text-muted leading-relaxed">
                  The system integrator runs the project and reports on its own performance. Nobody is checking whether their progress reports match reality.
                </p>
              </div>
            </SpotlightCard>
            <SpotlightCard>
              <div className="p-7">
                <p className="text-accent font-semibold text-[16px] mb-2">2. Underinvestment in change management</p>
                <p className="text-[14px] text-muted leading-relaxed">
                  The technology gets all the budget and attention. The people who have to use it get a two-hour training session and a user manual.
                </p>
              </div>
            </SpotlightCard>
            <SpotlightCard>
              <div className="p-7">
                <p className="text-accent font-semibold text-[16px] mb-2">3. Inadequate testing</p>
                <p className="text-[14px] text-muted leading-relaxed">
                  Time pressure forces testing to be cut short. Defects that should have been caught before go-live surface in production, causing data errors and process failures.
                </p>
              </div>
            </SpotlightCard>
            <SpotlightCard>
              <div className="p-7">
                <p className="text-accent font-semibold text-[16px] mb-2">4. Poor data migration</p>
                <p className="text-[14px] text-muted leading-relaxed">
                  Garbage in, garbage out. Organisations that do not invest in data cleansing end up with a new system full of old problems.
                </p>
              </div>
            </SpotlightCard>
            <SpotlightCard className="md:col-span-2">
              <div className="p-7">
                <p className="text-accent font-semibold text-[16px] mb-2">5. Unrealistic expectations</p>
                <p className="text-[14px] text-muted leading-relaxed">
                  The vendor&apos;s sales team painted a picture of what the system could do in an ideal world. The implementation delivers what can be done within the agreed scope and budget, which is always less. We have written in more detail about{" "}
                  <Link href="/resources/blog/why-erp-implementations-fail/" className="text-accent underline underline-offset-4 decoration-accent/30 hover:decoration-accent/60 transition-colors">the 7 most common reasons ERP projects go wrong</Link>.
                </p>
              </div>
            </SpotlightCard>
          </div>
        </Reveal>
      </ContentSection>

      {/* Role of independent consultant */}
      <ContentSection withBorder withGrain>
        <SectionHeader
          eyebrow="Independence"
          title="The role of an independent implementation consultant"
          subtitle="There is a fundamental conflict of interest in the way most ERP projects are structured. This is like asking a building contractor to be their own building inspector."
        />
        <div className="grid md:grid-cols-2 gap-8">
          <Reveal>
            <div>
              <h3 className="text-[18px] font-semibold text-foreground mb-4">What a client-side consultant does</h3>
              <ul className="space-y-3 text-[14px] text-muted leading-relaxed">
                <li className="flex gap-3 items-start">
                  <span className="w-1 h-1 rounded-full bg-accent/60 mt-[0.65em] flex-shrink-0" />
                  Reviews and challenges the implementation plan before it is finalised
                </li>
                <li className="flex gap-3 items-start">
                  <span className="w-1 h-1 rounded-full bg-accent/60 mt-[0.65em] flex-shrink-0" />
                  Attends steering committee and project board meetings as your representative
                </li>
                <li className="flex gap-3 items-start">
                  <span className="w-1 h-1 rounded-full bg-accent/60 mt-[0.65em] flex-shrink-0" />
                  Reviews deliverables against the contract and the statement of work
                </li>
                <li className="flex gap-3 items-start">
                  <span className="w-1 h-1 rounded-full bg-accent/60 mt-[0.65em] flex-shrink-0" />
                  Monitors project progress independently of the integrator&apos;s reporting
                </li>
                <li className="flex gap-3 items-start">
                  <span className="w-1 h-1 rounded-full bg-accent/60 mt-[0.65em] flex-shrink-0" />
                  Manages risks and issues from the client&apos;s perspective
                </li>
                <li className="flex gap-3 items-start">
                  <span className="w-1 h-1 rounded-full bg-accent/60 mt-[0.65em] flex-shrink-0" />
                  Coordinates internal resources
                </li>
                <li className="flex gap-3 items-start">
                  <span className="w-1 h-1 rounded-full bg-accent/60 mt-[0.65em] flex-shrink-0" />
                  Runs or oversees user acceptance testing
                </li>
                <li className="flex gap-3 items-start">
                  <span className="w-1 h-1 rounded-full bg-accent/60 mt-[0.65em] flex-shrink-0" />
                  Manages the change management programme
                </li>
                <li className="flex gap-3 items-start">
                  <span className="w-1 h-1 rounded-full bg-accent/60 mt-[0.65em] flex-shrink-0" />
                  Provides honest, unfiltered reporting to your leadership team
                </li>
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div>
              <h3 className="text-[18px] font-semibold text-foreground mb-4">What a system integrator does</h3>
              <ul className="space-y-3 text-[14px] text-muted leading-relaxed">
                <li className="flex gap-3 items-start">
                  <span className="w-1 h-1 rounded-full bg-white/30 mt-[0.65em] flex-shrink-0" />
                  Configures and customises the ERP software
                </li>
                <li className="flex gap-3 items-start">
                  <span className="w-1 h-1 rounded-full bg-white/30 mt-[0.65em] flex-shrink-0" />
                  Builds integrations with other systems
                </li>
                <li className="flex gap-3 items-start">
                  <span className="w-1 h-1 rounded-full bg-white/30 mt-[0.65em] flex-shrink-0" />
                  Executes data migration (technical aspects)
                </li>
                <li className="flex gap-3 items-start">
                  <span className="w-1 h-1 rounded-full bg-white/30 mt-[0.65em] flex-shrink-0" />
                  Provides functional and technical expertise on the chosen ERP platform
                </li>
                <li className="flex gap-3 items-start">
                  <span className="w-1 h-1 rounded-full bg-white/30 mt-[0.65em] flex-shrink-0" />
                  Delivers system training
                </li>
                <li className="flex gap-3 items-start">
                  <span className="w-1 h-1 rounded-full bg-white/30 mt-[0.65em] flex-shrink-0" />
                  Provides post go-live technical support
                </li>
              </ul>
              <p className="mt-6 text-[14px] text-muted leading-relaxed">
                You need both. But they should not be the same company. The integrator cannot objectively assess their own work. You need a system integrator for their technical expertise. You need an independent consultant for objectivity. Combining both roles removes the checks and balances that keep the project honest.
              </p>
            </div>
          </Reveal>
        </div>
      </ContentSection>

      {/* ERP change management */}
      <ContentSection withBorder>
        <SectionHeader
          eyebrow="Change Management"
          title="ERP change management: the part that actually determines success"
          subtitle="Most of the reasons ERP implementations go wrong are not technical. The software works. What fails is the human side."
        />
        <Prose>
          <p>
            An ERP implementation is not an IT project. It is a business transformation project that happens to involve technology. When you implement a new ERP system, you are asking your finance team to process invoices differently, your warehouse team to use scanners instead of paper, your procurement team to follow new approval workflows, and your managers to use dashboards they did not design. Every one of those changes creates resistance.
          </p>
          <p>
            Organisations that treat change management as a training exercise miss the point entirely. Training teaches people what to do. Change management helps them understand why they are doing it, addresses their concerns, and supports them through the transition.
          </p>
        </Prose>

        <Reveal>
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            <SpotlightCard>
              <div className="p-7">
                <h3 className="text-[16px] font-semibold text-foreground mb-2">Impact assessment</h3>
                <p className="text-[14px] text-muted leading-relaxed">
                  Before anything else, we map every business process change, identify which teams are affected, and assess the severity of the change.
                </p>
              </div>
            </SpotlightCard>
            <SpotlightCard>
              <div className="p-7">
                <h3 className="text-[16px] font-semibold text-foreground mb-2">Leadership alignment</h3>
                <p className="text-[14px] text-muted leading-relaxed">
                  Your senior leaders need to visibly support the change. Not in a &quot;we sent an all-staff email&quot; way, but in a &quot;the managing director uses the new system in board meetings&quot; way.
                </p>
              </div>
            </SpotlightCard>
            <SpotlightCard>
              <div className="p-7">
                <h3 className="text-[16px] font-semibold text-foreground mb-2">Communication</h3>
                <p className="text-[14px] text-muted leading-relaxed">
                  Clear, honest, regular communication about what is changing, why, when, and what support is available. People can handle bad news. What they cannot handle is uncertainty.
                </p>
              </div>
            </SpotlightCard>
            <SpotlightCard>
              <div className="p-7">
                <h3 className="text-[16px] font-semibold text-foreground mb-2">Training design and delivery</h3>
                <p className="text-[14px] text-muted leading-relaxed">
                  Role-based, hands-on training delivered as close to go-live as practical. We also train super users who become the first line of support for their colleagues.
                </p>
              </div>
            </SpotlightCard>
            <SpotlightCard>
              <div className="p-7">
                <h3 className="text-[16px] font-semibold text-foreground mb-2">Adoption monitoring</h3>
                <p className="text-[14px] text-muted leading-relaxed">
                  After go-live, we track system usage, identify teams that are struggling, and intervene early. If the procurement team has stopped raising purchase orders in the new system by week three, we need to find out why and fix it.
                </p>
              </div>
            </SpotlightCard>
            <SpotlightCard>
              <div className="p-7">
                <h3 className="text-[16px] font-semibold text-foreground mb-2">Resistance management</h3>
                <p className="text-[14px] text-muted leading-relaxed">
                  Some resistance is inevitable. Most of it is legitimate. Our job is to distinguish between resistance that needs addressing and resistance that signals a real problem with the design.
                </p>
              </div>
            </SpotlightCard>
          </div>
        </Reveal>

        <Reveal>
          <p className="mt-8 text-[14px] text-muted leading-relaxed">
            ERP change management is not about getting people to comply. It is about helping them succeed in a new way of working. Prosci&apos;s 2023 research found that only 34% of organisations rated their change management effectiveness as &quot;good&quot; or &quot;excellent.&quot;
          </p>
        </Reveal>
      </ContentSection>

      {/* FAQ */}
      <ContentSection withBorder withGrain>
        <SectionHeader
          eyebrow="FAQ"
          title="Frequently asked questions"
        />
        <div className="space-y-12">
          <Reveal>
            <div>
              <h3 className="text-[18px] font-semibold text-foreground mb-3">What is ERP implementation?</h3>
              <p className="text-[15px] text-muted leading-relaxed">
                ERP implementation is the process of selecting, configuring, and deploying an enterprise resource planning system across an organisation. It involves planning the project, designing business processes, configuring the software, migrating data from legacy systems, testing the system, training users, and going live. A typical ERP system implementation covers finance, procurement, supply chain, manufacturing, and human resources. Implementation is not just a technology project; it requires significant organisational change, which is why it is one of the most complex and high-risk programmes a business will undertake.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div>
              <h3 className="text-[18px] font-semibold text-foreground mb-3">What are the 6 stages of ERP implementation?</h3>
              <p className="text-[15px] text-muted leading-relaxed">
                The six stages of ERP implementation are: (1) project planning and scoping, where you define the programme governance, scope, budget, and timeline; (2) business process design, where you document current processes and design future-state processes mapped to the ERP system; (3) system configuration and development, where the integrator configures the software and builds custom developments and integrations; (4) data migration, where data is extracted from legacy systems, cleansed, transformed, and loaded into the new system; (5) testing, training, and user adoption, which includes unit testing, integration testing, user acceptance testing, role-based training, and super user development; and (6) go-live and post-implementation support, covering the cutover, hypercare, and transition to ongoing operations. You can read more about{" "}
                <Link href="/services/software-selection/" className="text-accent underline underline-offset-4 decoration-accent/30 hover:decoration-accent/60 transition-colors">our 6-step ERP evaluation methodology</Link> for the selection work that should precede implementation.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div>
              <h3 className="text-[18px] font-semibold text-foreground mb-3">How long does ERP implementation take?</h3>
              <p className="text-[15px] text-muted leading-relaxed">
                ERP implementation timelines vary widely depending on the size of the organisation, the number of modules and locations in scope, the complexity of integrations, and the amount of customisation required. As a general guide: under 100 users typically takes 3-6 months, 100-500 users takes 6-12 months, and 500+ users takes 12-24 months. The most common factors that extend timelines are poor data quality, slow decision-making, scope changes mid-project, and insufficient internal resources dedicated to the project. If someone quotes you a timeline that sounds too good to be true, it probably is.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div>
              <h3 className="text-[18px] font-semibold text-foreground mb-3">How much does ERP implementation cost?</h3>
              <p className="text-[15px] text-muted leading-relaxed">
                ERP implementation costs depend on the software licence model (cloud subscription vs on-premise), the number of users, the scope of the implementation, the amount of customisation, and the system integrator&apos;s rates. For a mid-market organisation in Ireland or the UK implementing a tier-2 ERP system, total implementation costs (excluding the software licence) typically range from EUR 200,000 to EUR 1.5 million. Tier-1 implementations (SAP S/4HANA, Oracle Cloud) for larger organisations routinely exceed EUR 5 million. Our guide on{" "}
                <Link href="/resources/guides/erp-cost-guide/" className="text-accent underline underline-offset-4 decoration-accent/30 hover:decoration-accent/60 transition-colors">how much does an ERP system cost in the UK</Link> breaks these costs down in detail.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div>
              <h3 className="text-[18px] font-semibold text-foreground mb-3">Why do ERP implementations fail?</h3>
              <p className="text-[15px] text-muted leading-relaxed">
                ERP implementations fail for five primary reasons: lack of independent oversight (the integrator marks their own homework), underinvestment in change management (people are not prepared for the transition), inadequate testing (defects reach production), poor data migration (bad data corrupts the new system), and unrealistic expectations set during the sales process. Panorama Consulting&apos;s 2024 ERP Report found that 46% of projects exceeded their budget, with an average overrun of 26%. For a deeper analysis, read our post on{" "}
                <Link href="/resources/blog/why-erp-implementations-fail/" className="text-accent underline underline-offset-4 decoration-accent/30 hover:decoration-accent/60 transition-colors">why ERP implementations fail</Link>.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div>
              <h3 className="text-[18px] font-semibold text-foreground mb-3">Do I need a consultant for ERP implementation?</h3>
              <p className="text-[15px] text-muted leading-relaxed">
                If your organisation has implemented an ERP system before and has experienced programme managers on staff, you may be able to manage the client side internally. Most organisations, however, implement ERP systems once every 10-15 years. That means your team is doing this for the first time, while the system integrator does it every day. The knowledge imbalance is enormous, and it works in the integrator&apos;s favour, not yours. An independent ERP implementation consultant levels the playing field. The cost of an independent consultant is typically 5-10% of the total implementation budget, a fraction of the cost overrun you risk without one.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div>
              <h3 className="text-[18px] font-semibold text-foreground mb-3">What is ERP change management?</h3>
              <p className="text-[15px] text-muted leading-relaxed">
                ERP change management is the structured process of preparing, supporting, and guiding your people through the transition from legacy systems and processes to the new ERP system. It covers impact assessment, leadership alignment, communication, training, adoption monitoring, and resistance management. Prosci&apos;s 2023 research found that projects with excellent change management were six times more likely to meet their objectives. Without it, you end up with a technically sound system that nobody uses properly, and people revert to spreadsheets and workarounds within weeks of go-live.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div>
              <h3 className="text-[18px] font-semibold text-foreground mb-3">What happens after ERP go-live?</h3>
              <p className="text-[15px] text-muted leading-relaxed">
                After go-live, the implementation enters a hypercare period (typically 4-12 weeks) where the system integrator provides enhanced support. After hypercare ends, you transition to a business-as-usual support model. This should include a clear process for reporting and resolving issues, a governance structure for requesting system changes, a plan for regular updates and upgrades, ongoing user training for new starters and role changes, and a benefits realisation programme to measure whether the system is delivering the value your business case promised. Many organisations neglect the post go-live phase. In reality, the first six months after go-live determine whether the investment pays off.
              </p>
            </div>
          </Reveal>
        </div>
      </ContentSection>

      {/* Author */}
      <ContentSection withBorder>
        <Reveal>
          <p className="text-[13px] text-muted/70 italic leading-relaxed">
            Written by Laurence Phelan, Director, COGO Consulting.
          </p>
        </Reveal>
      </ContentSection>

      <PageCTA
        title="Talk to us about your ERP implementation"
        subtitle="If you are planning an ERP implementation, in the middle of one, or recovering from one that did not go to plan, we would like to hear from you. No pitch decks, no pressure. Just an honest conversation about where your project stands and whether we can help."
        buttonText="Get in touch"
        buttonHref="/contact/"
      />
    </PageLayout>
  );
}
