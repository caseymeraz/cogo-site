import type { Metadata } from "next";
import PageLayout from "../../../components/PageLayout";
import PageHeader from "../../../components/PageHeader";
import ContentSection, { SectionHeader } from "../../../components/ContentSection";
import Prose from "../../../components/Prose";
import Reveal from "../../../components/Reveal";
import SpotlightCard from "../../../components/SpotlightCard";
import PageCTA from "../../../components/PageCTA";
import PageImage from "../../../components/PageImage";
import SvgSection from "../../../components/SvgSection";
import TimelineRoadmap from "../../../components/svg/TimelineRoadmap";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SAP S/4HANA Migration | Independent UK Guide | COGO",
  description:
    "Independent, client-side guidance on SAP S/4HANA migration for UK and Ireland businesses. Greenfield, brownfield, RISE with SAP: honest advice from COGO.",
};

export default function S4HANAMigrationPage() {
  return (
    <PageLayout>
      <PageHeader
        eyebrow="SAP S/4HANA"
        title="SAP S/4HANA: what UK and Ireland businesses need to know"
        subtitle="If you are running SAP ECC today, you already know the clock is ticking. This guide gives you the plain facts: what S/4HANA actually is, how the migration paths differ, what it will cost, and how long it takes. No vendor spin."
      />

      {/* Intro */}
      <ContentSection withBorder>
        <Prose>
          <p>
            SAP S/4HANA is not optional. It is the only supported path forward once SAP ends mainstream maintenance for ECC in 2027. Yet according to a 2024 ASUG survey, roughly 40% of SAP customers had not started their S/4HANA migration planning. That figure should worry you.
          </p>
          <p>
            COGO is an independent, client-side consultancy. We do not sell SAP licences, we do not take referral fees, and we have no incentive to steer you towards a particular deployment model. Through{" "}
            <Link href="/about/partners/">our SAP Gold Partner alliance with Westernacher</Link>, we bring deep technical capability without the conflicts of interest that come with being a reseller.
          </p>
          <p>
            If you want broader context on{" "}
            <Link href="/services/sap-consulting/">our SAP consulting practice</Link>, start there. This page goes deeper into the S/4HANA migration specifically.
          </p>
        </Prose>
      </ContentSection>

      <PageImage src="/images/sap-consulting-8.png" alt="SAP S/4HANA migration consulting" />

      <SvgSection caption="S/4HANA migration phases">
        <TimelineRoadmap />
      </SvgSection>

      {/* What is SAP S/4HANA? */}
      <ContentSection withBorder withGrain>
        <SectionHeader
          eyebrow="Overview"
          title="What is SAP S/4HANA?"
        />
        <Prose>
          <p>
            SAP S/4HANA is SAP&apos;s current-generation enterprise resource planning (ERP) suite, built natively on the SAP HANA in-memory database. It replaces the older SAP ECC (ERP Central Component) platform that most large organisations have run since the mid-2000s.
          </p>
        </Prose>
        <Reveal>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <SpotlightCard>
              <div className="p-7">
                <h3 className="text-[16px] font-semibold text-foreground mb-2">In-memory architecture</h3>
                <p className="text-[14px] text-muted leading-relaxed">
                  S/4HANA runs on HANA rather than traditional relational databases like Oracle, IBM Db2, or Microsoft SQL Server. This removes aggregate tables and index-heavy structures, meaning reports and analytics that used to take minutes can return in seconds.
                </p>
              </div>
            </SpotlightCard>
            <SpotlightCard>
              <div className="p-7">
                <h3 className="text-[16px] font-semibold text-foreground mb-2">Simplified data model</h3>
                <p className="text-[14px] text-muted leading-relaxed">
                  SAP collapsed several hundred tables in core finance alone. The old BSEG, BSAD, BSAK cluster tables are replaced by the universal journal (ACDOCA). This fundamentally alters how financial data is stored and retrieved.
                </p>
              </div>
            </SpotlightCard>
            <SpotlightCard>
              <div className="p-7">
                <h3 className="text-[16px] font-semibold text-foreground mb-2">Embedded analytics</h3>
                <p className="text-[14px] text-muted leading-relaxed">
                  Rather than extracting data to a separate BW system for reporting, S/4HANA offers real-time analytical views directly on transactional data.
                </p>
              </div>
            </SpotlightCard>
            <SpotlightCard>
              <div className="p-7">
                <h3 className="text-[16px] font-semibold text-foreground mb-2">Fiori user experience</h3>
                <p className="text-[14px] text-muted leading-relaxed">
                  The front end moves from the old SAP GUI to browser-based Fiori applications, which are role-based and designed around the tasks your people actually perform day to day.
                </p>
              </div>
            </SpotlightCard>
            <SpotlightCard className="md:col-span-2">
              <div className="p-7">
                <h3 className="text-[16px] font-semibold text-foreground mb-2">Cloud, on-premise, or hybrid</h3>
                <p className="text-[14px] text-muted leading-relaxed">
                  S/4HANA can be deployed as a public cloud edition (multi-tenant, SAP-managed), a private cloud edition (single-tenant, SAP-managed infrastructure), or on-premise (your infrastructure, your control).
                </p>
              </div>
            </SpotlightCard>
          </div>
        </Reveal>
        <Reveal>
          <p className="mt-8 text-[14px] text-muted leading-relaxed">
            In short: S/4HANA is not just an upgrade. It is a re-architecture of the core ERP platform. That distinction matters when you are planning your migration, because the technical and organisational effort is closer to a new implementation than a version upgrade.
          </p>
        </Reveal>
      </ContentSection>

      {/* ECC end of maintenance */}
      <ContentSection withBorder>
        <SectionHeader
          eyebrow="Deadline"
          title="SAP ECC end of maintenance: the 2027 deadline"
        />
        <Prose>
          <p>
            SAP announced in February 2020 that mainstream maintenance for ECC 6.0 (Enhancement Packs 1 through 8) would end on 31 December 2027. Extended maintenance is available until 2030, but at a premium: SAP has indicated a 2% surcharge on your existing maintenance fees for each year of extended support.
          </p>
          <p>
            Here is what &quot;end of mainstream maintenance&quot; actually means for your organisation:
          </p>
          <ol>
            <li><strong>No new functionality.</strong> SAP will not release enhancement packs, new features, or regulatory updates for ECC after 2027. If UK or Irish tax rules change (as they regularly do), you will need to build your own workarounds.</li>
            <li><strong>Reduced support quality.</strong> While SAP will still accept support tickets under extended maintenance, response times and fix commitments degrade. Critical patches become discretionary on SAP&apos;s part.</li>
            <li><strong>Security risk.</strong> Without ongoing patches, your ECC system becomes an increasing security liability. For organisations subject to GDPR, NIS2, or financial services regulation, this is a compliance concern, not just an IT one.</li>
            <li><strong>Ecosystem erosion.</strong> Consulting firms, system integrators, and independent contractors are shifting their teams to S/4HANA. Finding experienced ECC resources will become harder and more expensive each year.</li>
          </ol>
          <p>
            The deadline is real. Organisations that have not started planning by now are already behind. A typical S/4HANA migration takes 18 to 36 months from project kickoff to go-live. If you are reading this in 2025 or 2026, the maths is not in your favour unless you act quickly.
          </p>
          <p>
            That said, do not let urgency push you into a poorly planned migration. A rushed S/4HANA project that goes live with broken processes, poor data quality, and untrained users is worse than staying on ECC with extended maintenance for an extra year. The deadline creates urgency, but it should not create panic.
          </p>
        </Prose>
      </ContentSection>

      {/* Migration options */}
      <ContentSection withBorder withGrain>
        <SectionHeader
          eyebrow="Migration Paths"
          title="S/4HANA migration options: greenfield, brownfield, and selective data transition"
          subtitle="There are three recognised approaches to moving from ECC to S/4HANA. Each involves genuine trade-offs."
        />
        <div className="space-y-8">
          <Reveal>
            <SpotlightCard>
              <div className="p-7">
                <h3 className="text-[18px] font-semibold text-foreground mb-3">Greenfield (new implementation)</h3>
                <p className="text-[14px] text-muted leading-relaxed mb-3">
                  You build a fresh S/4HANA system from scratch. No historical data is migrated automatically. You configure new processes, load master data, and start clean.
                </p>
                <p className="text-[14px] text-muted leading-relaxed mb-3">
                  <strong className="text-foreground/80">When it makes sense:</strong> Your current ECC system is heavily customised and the customisations no longer serve the business. You want to adopt SAP&apos;s standard processes. You are merging multiple ECC instances. Your chart of accounts or master data is fundamentally flawed.
                </p>
                <p className="text-[14px] text-muted leading-relaxed">
                  <strong className="text-foreground/80">The reality:</strong> Longest timeline (typically 24 to 36 months). Highest cost (you are essentially implementing ERP from the ground up). Greatest organisational disruption. Best opportunity to redesign processes, if you have the appetite for it.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
          <Reveal delay={0.1}>
            <SpotlightCard>
              <div className="p-7">
                <h3 className="text-[18px] font-semibold text-foreground mb-3">Brownfield (system conversion)</h3>
                <p className="text-[14px] text-muted leading-relaxed mb-3">
                  You convert your existing ECC system in place. Your configuration, customisations, and historical data come across. Think of it as an in-place technical migration.
                </p>
                <p className="text-[14px] text-muted leading-relaxed mb-3">
                  <strong className="text-foreground/80">When it makes sense:</strong> Your current processes work well and your customisations are justified. You need to preserve historical transactional data for regulatory or audit reasons. You want the shortest path to S/4HANA with the least organisational disruption. Your ECC system is relatively &quot;clean.&quot;
                </p>
                <p className="text-[14px] text-muted leading-relaxed">
                  <strong className="text-foreground/80">The reality:</strong> Shorter timeline (typically 12 to 24 months). Lower cost than greenfield, but not cheap. Custom code remediation alone can be a major workstream. You inherit all the problems of your current system unless you actively address them.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
          <Reveal delay={0.2}>
            <SpotlightCard>
              <div className="p-7">
                <h3 className="text-[18px] font-semibold text-foreground mb-3">Selective data transition (hybrid)</h3>
                <p className="text-[14px] text-muted leading-relaxed mb-3">
                  Also called &quot;landscape transformation&quot; or sometimes &quot;bluefield.&quot; You selectively choose which data, processes, and configurations to bring forward from ECC into a new S/4HANA system.
                </p>
                <p className="text-[14px] text-muted leading-relaxed mb-3">
                  <strong className="text-foreground/80">When it makes sense:</strong> You want the process redesign benefits of greenfield but need to bring across specific historical data. You are carving out a business unit (post-merger or divestiture scenarios). You have multiple ECC systems and want to consolidate while cherry-picking the best processes from each.
                </p>
                <p className="text-[14px] text-muted leading-relaxed">
                  <strong className="text-foreground/80">The reality:</strong> Moderate timeline (18 to 30 months). Requires specialist tooling (SNP CrystalBridge, SAP&apos;s own LTMC, or similar). Most flexible approach, but also the most complex to plan and govern.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
        </div>
        <Reveal>
          <p className="mt-8 text-[15px] text-muted leading-relaxed">
            There is no universal answer. COGO&apos;s role is to help you assess your current landscape, understand your business objectives, and match them to the right approach before you engage a system integrator. Too many organisations let their SI choose the migration path, which introduces an obvious conflict: SIs tend to recommend the approach that generates the most billable hours. An honest assessment takes two to four weeks and costs a fraction of a wrong decision. If you want to understand the broader cost picture, read our guide on{" "}
            <Link href="/resources/guides/erp-cost-guide/" className="text-accent underline underline-offset-4 decoration-accent/30 hover:decoration-accent/60 transition-colors">how much does an ERP system cost in the UK</Link>.
          </p>
        </Reveal>
      </ContentSection>

      {/* RISE vs GROW */}
      <ContentSection withBorder>
        <SectionHeader
          eyebrow="Commercial Models"
          title="RISE with SAP vs GROW with SAP"
          subtitle="SAP has introduced two commercial offerings that bundle licensing, infrastructure, and services. They sound similar but target very different organisations."
        />
        <div className="grid md:grid-cols-2 gap-6">
          <Reveal>
            <SpotlightCard>
              <div className="p-7">
                <h3 className="text-[18px] font-semibold text-foreground mb-3">RISE with SAP</h3>
                <p className="text-[14px] text-muted leading-relaxed mb-3">
                  Aimed at existing SAP customers migrating from ECC to S/4HANA. Bundles S/4HANA Cloud Private Edition, SAP Business Technology Platform (BTP) credits, SAP Business Process Intelligence tools, managed infrastructure, and a dedicated customer success partner.
                </p>
                <p className="text-[14px] text-muted leading-relaxed mb-3">
                  <strong className="text-foreground/80">What you need to know:</strong> RISE is a subscription model, replacing your perpetual ECC licence. Understand the total cost of ownership over five to ten years, not just the annual subscription. SAP controls the upgrade cycle. &quot;Clean core&quot; is SAP&apos;s stated philosophy: keep the core standard, extend on BTP. Contract negotiations matter enormously.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
          <Reveal delay={0.1}>
            <SpotlightCard>
              <div className="p-7">
                <h3 className="text-[18px] font-semibold text-foreground mb-3">GROW with SAP</h3>
                <p className="text-[14px] text-muted leading-relaxed mb-3">
                  Targets new SAP customers, typically mid-market organisations. Bundles S/4HANA Cloud Public Edition, pre-configured industry best practices, guided onboarding, and lower entry cost than RISE.
                </p>
                <p className="text-[14px] text-muted leading-relaxed mb-3">
                  <strong className="text-foreground/80">What you need to know:</strong> Public cloud edition means your customisation options are limited to configuration and BTP extensions. SAP targets 16-week implementations for standard deployments. The total cost can be attractive for organisations with 200 to 2,000 employees in industries where SAP&apos;s pre-configured processes are a good fit.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
        </div>
        <Reveal>
          <p className="mt-8 text-[15px] text-muted leading-relaxed">
            Neither RISE nor GROW is inherently right or wrong. The danger is when SAP or a partner positions one as the obvious answer without properly assessing your needs. COGO has guided clients through both programmes and helped several negotiate RISE contracts that saved 15-25% against SAP&apos;s initial proposals. The key is understanding what you actually need before signing.
          </p>
        </Reveal>
      </ContentSection>

      {/* Key S/4HANA modules */}
      <ContentSection withBorder withGrain>
        <SectionHeader
          eyebrow="Modules"
          title="Key S/4HANA modules"
          subtitle="S/4HANA is modular, and you do not have to adopt everything at once. Here are the core modules most relevant to UK and Irish businesses."
        />
        <div className="grid md:grid-cols-2 gap-6">
          <Reveal delay={0}>
            <SpotlightCard>
              <div className="p-7">
                <h3 className="text-[16px] font-semibold text-foreground mb-2">S/4HANA Finance</h3>
                <p className="text-[14px] text-muted leading-relaxed">
                  The universal journal (ACDOCA) eliminates the need for separate general ledger, cost of sales ledger, profit centre accounting, and special purpose ledger reconciliation. Key capabilities include real-time financial reporting without batch processing, integrated margin analysis, central finance for multi-entity consolidation, IFRS 16 lease accounting, and UK MTD and Irish VAT return compliance.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
          <Reveal delay={0.1}>
            <SpotlightCard>
              <div className="p-7">
                <h3 className="text-[16px] font-semibold text-foreground mb-2">Supply Chain Management</h3>
                <p className="text-[14px] text-muted leading-relaxed">
                  Addresses planning, logistics, and inventory management in a single data model. Key capabilities include demand-driven MRP (DDMRP), embedded extended warehouse management (EWM), advanced available-to-promise (aATP), integration with SAP Integrated Business Planning (IBP), and post-Brexit customs and trade compliance support.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
          <Reveal delay={0.2}>
            <SpotlightCard>
              <div className="p-7">
                <h3 className="text-[16px] font-semibold text-foreground mb-2">Manufacturing</h3>
                <p className="text-[14px] text-muted leading-relaxed">
                  Brings production planning and shop floor execution closer together. Key capabilities include embedded PP/DS, integration with SAP Digital Manufacturing, quality management with in-process inspection points, batch management and traceability (critical for food, pharma, and chemicals), and IoT integration for predictive maintenance.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
          <Reveal delay={0.3}>
            <SpotlightCard>
              <div className="p-7">
                <h3 className="text-[16px] font-semibold text-foreground mb-2">Procurement</h3>
                <p className="text-[14px] text-muted leading-relaxed">
                  Brings together operational purchasing with strategic sourcing. Key capabilities include central procurement for multi-subsidiary organisations, SAP Ariba integration, purchase order automation and approval workflows via Fiori, contract management with milestone tracking, and supplier risk monitoring.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
        </div>
        <Reveal>
          <p className="mt-8 text-[14px] text-muted leading-relaxed">
            The question is not which modules to adopt but in what sequence. A phased rollout reduces risk and lets your organisation absorb change in manageable stages. COGO helps you define that sequencing based on business priority, not vendor convenience.
          </p>
        </Reveal>
      </ContentSection>

      {/* Timeline and cost */}
      <ContentSection withBorder>
        <SectionHeader
          eyebrow="Costs & Timeline"
          title="S/4HANA migration timeline and cost: realistic expectations"
          subtitle="Let us be direct about this, because too many organisations go into S/4HANA projects with unrealistic budgets and timelines."
        />

        {/* Timeline table */}
        <Reveal>
          <div className="overflow-x-auto mb-10">
            <table className="w-full text-[14px] text-muted">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 pr-4 text-foreground/80 font-medium">Migration approach</th>
                  <th className="text-left py-3 px-4 text-accent font-medium">Typical duration</th>
                  <th className="text-left py-3 pl-4 text-foreground/80 font-medium">Range</th>
                </tr>
              </thead>
              <tbody className="[&_tr]:border-b [&_tr]:border-border">
                <tr>
                  <td className="py-3 pr-4 text-foreground/80">Brownfield (system conversion)</td>
                  <td className="py-3 px-4">12-18 months</td>
                  <td className="py-3 pl-4">9-24 months</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 text-foreground/80">Selective data transition</td>
                  <td className="py-3 px-4">18-24 months</td>
                  <td className="py-3 pl-4">15-30 months</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 text-foreground/80">Greenfield (new implementation)</td>
                  <td className="py-3 px-4">24-30 months</td>
                  <td className="py-3 pl-4">18-36 months</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Reveal>

        <Prose>
          <h3>Cost</h3>
          <p>
            <strong>SAP licensing/subscription:</strong> On-premise perpetual licence: typically EUR 3,000-5,000 per named user, plus 22% annual maintenance. RISE with SAP subscription: typically EUR 4,000-8,000 per user per year. GROW with SAP subscription: typically EUR 1,500-4,000 per user per year.
          </p>
          <p>
            <strong>System integration (SI) fees:</strong> Mid-market (500-2,000 employees): GBP 1.5M to GBP 5M. Large enterprise (2,000-10,000 employees): GBP 5M to GBP 20M. Complex multi-country enterprise (10,000+ employees): GBP 15M to GBP 50M+.
          </p>
          <p>
            <strong>Internal costs (often underestimated):</strong> Backfilling roles for subject matter experts seconded to the project, change management and communications, data cleansing (budget three to six months of dedicated effort), training development and delivery, and post-go-live hypercare support.
          </p>
          <p>
            <strong>Infrastructure:</strong> Cloud hosting (AWS, Azure, or Google Cloud): GBP 15,000-50,000 per month for production, development, and test environments.
          </p>
          <p>
            The most common budgeting mistake is underestimating internal costs and change management. A useful rule of thumb: for every GBP 1 spent on SI fees, budget GBP 0.30-0.50 for internal costs. For a detailed breakdown, see our guide on{" "}
            <Link href="/resources/guides/erp-cost-guide/">how much does an ERP system cost in the UK</Link>.
          </p>
        </Prose>
      </ContentSection>

      {/* How COGO supports */}
      <ContentSection withBorder withGrain>
        <SectionHeader
          eyebrow="Our Role"
          title="How COGO supports your S/4HANA migration"
          subtitle="COGO is not a system integrator. We sit on your side of the table: independent, client-side advisors who protect your interests throughout the programme."
        />
        <div className="space-y-8">
          <Reveal>
            <SpotlightCard>
              <div className="p-7">
                <h3 className="text-[18px] font-semibold text-foreground mb-3">Pre-programme (before you spend serious money)</h3>
                <ul className="space-y-2 text-[14px] text-muted leading-relaxed">
                  <li className="flex gap-3 items-start">
                    <span className="w-1 h-1 rounded-full bg-accent/60 mt-[0.65em] flex-shrink-0" />
                    <span><strong className="text-foreground/80">Landscape assessment:</strong> We audit your current ECC environment, including custom code volume, data quality, integration landscape, and organisational readiness.</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="w-1 h-1 rounded-full bg-accent/60 mt-[0.65em] flex-shrink-0" />
                    <span><strong className="text-foreground/80">Migration path recommendation:</strong> Greenfield, brownfield, or selective, based on your business objectives, not what generates the most consulting fees.</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="w-1 h-1 rounded-full bg-accent/60 mt-[0.65em] flex-shrink-0" />
                    <span><strong className="text-foreground/80">Business case development:</strong> Realistic cost and benefit modelling that your CFO will actually trust.</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="w-1 h-1 rounded-full bg-accent/60 mt-[0.65em] flex-shrink-0" />
                    <span><strong className="text-foreground/80">SI selection support:</strong> We help you write the RFP, evaluate responses, and negotiate contracts.</span>
                  </li>
                </ul>
              </div>
            </SpotlightCard>
          </Reveal>
          <Reveal delay={0.1}>
            <SpotlightCard>
              <div className="p-7">
                <h3 className="text-[18px] font-semibold text-foreground mb-3">During the programme</h3>
                <ul className="space-y-2 text-[14px] text-muted leading-relaxed">
                  <li className="flex gap-3 items-start">
                    <span className="w-1 h-1 rounded-full bg-accent/60 mt-[0.65em] flex-shrink-0" />
                    <span><strong className="text-foreground/80">Programme assurance:</strong> Independent oversight of your SI&apos;s delivery. We attend steering committees, review milestone deliverables, and flag risks before they become problems.</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="w-1 h-1 rounded-full bg-accent/60 mt-[0.65em] flex-shrink-0" />
                    <span><strong className="text-foreground/80">Change management:</strong> Ensuring your people are prepared for new processes and technology. This is where most S/4HANA programmes fail, and it is where COGO adds the most value.</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="w-1 h-1 rounded-full bg-accent/60 mt-[0.65em] flex-shrink-0" />
                    <span><strong className="text-foreground/80">Testing governance:</strong> Making sure user acceptance testing is rigorous, scenario-based, and covers your real business processes.</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="w-1 h-1 rounded-full bg-accent/60 mt-[0.65em] flex-shrink-0" />
                    <span><strong className="text-foreground/80">Data migration oversight:</strong> Your data is only as good as your cleansing effort. We help you define data quality standards and hold your SI accountable to them.</span>
                  </li>
                </ul>
              </div>
            </SpotlightCard>
          </Reveal>
          <Reveal delay={0.2}>
            <SpotlightCard>
              <div className="p-7">
                <h3 className="text-[18px] font-semibold text-foreground mb-3">Post-go-live</h3>
                <ul className="space-y-2 text-[14px] text-muted leading-relaxed">
                  <li className="flex gap-3 items-start">
                    <span className="w-1 h-1 rounded-full bg-accent/60 mt-[0.65em] flex-shrink-0" />
                    <span><strong className="text-foreground/80">Hypercare support:</strong> The first 90 days after go-live are critical. We help you manage the transition from project mode to business-as-usual.</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="w-1 h-1 rounded-full bg-accent/60 mt-[0.65em] flex-shrink-0" />
                    <span><strong className="text-foreground/80">Benefits realisation:</strong> Tracking whether the benefits in your business case are actually being delivered, and taking corrective action when they are not.</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="w-1 h-1 rounded-full bg-accent/60 mt-[0.65em] flex-shrink-0" />
                    <span><strong className="text-foreground/80">Continuous improvement:</strong> Identifying quick wins and optimisation opportunities once your users have settled into the new system.</span>
                  </li>
                </ul>
              </div>
            </SpotlightCard>
          </Reveal>
        </div>
        <Reveal>
          <p className="mt-8 text-[14px] text-muted leading-relaxed">
            Through{" "}
            <Link href="/about/partners/" className="text-accent underline underline-offset-4 decoration-accent/30 hover:decoration-accent/60 transition-colors">our SAP Gold Partner alliance with Westernacher</Link>, we bring deep S/4HANA technical expertise without the commercial conflicts of a traditional SI relationship. And through our{" "}
            <Link href="/services/implementation-support/" className="text-accent underline underline-offset-4 decoration-accent/30 hover:decoration-accent/60 transition-colors">ERP implementation support and programme management</Link> capability, we can scale our involvement to match your needs.
          </p>
        </Reveal>
      </ContentSection>

      {/* FAQ */}
      <ContentSection withBorder>
        <SectionHeader
          eyebrow="FAQ"
          title="Frequently asked questions"
        />
        <div className="space-y-12">
          <Reveal>
            <div>
              <h3 className="text-[18px] font-semibold text-foreground mb-3">How long does an SAP S/4HANA migration take?</h3>
              <p className="text-[15px] text-muted leading-relaxed">
                A typical SAP S/4HANA migration takes 12 to 36 months, depending on your chosen approach. A brownfield system conversion for a single-country operation can be completed in 12 to 18 months. A greenfield implementation for a complex multi-country organisation may take 24 to 36 months. These timelines include discovery, build, test, data migration, training, and go-live support.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div>
              <h3 className="text-[18px] font-semibold text-foreground mb-3">What is the difference between SAP S/4HANA Cloud and on-premise?</h3>
              <p className="text-[15px] text-muted leading-relaxed">
                SAP S/4HANA Cloud comes in two editions: Public Cloud (multi-tenant, SAP-managed, limited customisation) and Private Cloud (single-tenant, SAP-managed infrastructure, more customisation flexibility). On-premise S/4HANA runs on your own infrastructure (or IaaS) and gives you full control over upgrades, customisations, and timelines. The Public Cloud edition suits organisations happy with SAP&apos;s standard processes; the Private Cloud or on-premise editions suit those needing more flexibility.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div>
              <h3 className="text-[18px] font-semibold text-foreground mb-3">Can we migrate from SAP ECC to S/4HANA in phases?</h3>
              <p className="text-[15px] text-muted leading-relaxed">
                Yes, and for many organisations a phased approach is advisable. You can migrate core finance first, then supply chain, then procurement, for example. SAP also supports a &quot;central finance&quot; deployment where S/4HANA runs alongside your existing ECC system during transition. The phased approach reduces go-live risk but extends the overall programme timeline and requires you to manage integration between old and new systems during the transition period.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div>
              <h3 className="text-[18px] font-semibold text-foreground mb-3">What happens to our custom ABAP code during migration?</h3>
              <p className="text-[15px] text-muted leading-relaxed">
                SAP provides the Custom Code Migration Worklist and the SAP Readiness Check to identify custom code that will not work in S/4HANA. Common issues include references to deprecated tables, obsolete function modules, and use of database-specific SQL. Your options are to remediate the code, replace it with SAP standard functionality, or retire it entirely. In COGO&apos;s experience, 30-50% of custom code in a typical ECC system is no longer actively used and can be retired.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div>
              <h3 className="text-[18px] font-semibold text-foreground mb-3">Is RISE with SAP mandatory for S/4HANA?</h3>
              <p className="text-[15px] text-muted leading-relaxed">
                No. RISE with SAP is one commercial model, a subscription bundle that includes S/4HANA Private Cloud Edition, BTP credits, and managed infrastructure. You can still purchase S/4HANA as an on-premise perpetual licence or adopt S/4HANA Public Cloud Edition via the GROW with SAP programme. RISE is SAP&apos;s preferred model (because it generates recurring subscription revenue), but it is not the only option.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div>
              <h3 className="text-[18px] font-semibold text-foreground mb-3">Do we need to change our business processes during an S/4HANA migration?</h3>
              <p className="text-[15px] text-muted leading-relaxed">
                It depends on your migration approach. A brownfield conversion can preserve most existing processes, though some will need adjustment where S/4HANA has fundamentally changed the underlying data model (finance is the most affected area). A greenfield implementation is an opportunity, and often a requirement, to redesign processes. SAP&apos;s &quot;fit-to-standard&quot; philosophy encourages adopting standard processes wherever possible, which reduces long-term maintenance but requires significant change management effort. The right answer depends on whether your current processes genuinely serve the business or simply reflect how things have always been done.
              </p>
            </div>
          </Reveal>
        </div>
      </ContentSection>

      <PageCTA
        title="Your 2027 deadline is closer than it looks"
        subtitle="Talk to COGO about your S/4HANA migration. Independent, honest advice with no licence fees attached."
        buttonText="Get in touch"
        buttonHref="/contact/"
      />
    </PageLayout>
  );
}
