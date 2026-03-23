import type { Metadata } from "next";
import Link from "next/link";
import PageLayout from "../../components/PageLayout";
import PageHeader from "../../components/PageHeader";
import ContentSection, { SectionHeader } from "../../components/ContentSection";
import Prose from "../../components/Prose";
import Reveal from "../../components/Reveal";
import SpotlightCard from "../../components/SpotlightCard";
import PageCTA from "../../components/PageCTA";
import PageImage from "../../components/PageImage";

export const metadata: Metadata = {
  title: "SAP Consulting Ireland & UK | Independent | COGO",
  description:
    "Independent SAP consulting for Irish and UK businesses. Client-side advisory, S/4HANA migration, SAP reboot, and implementation support.",
};

export default function SAPConsultingPage() {
  return (
    <PageLayout>
      <PageHeader
        eyebrow="SAP Consulting"
        title="SAP consulting that works for you, not the vendor"
        subtitle="Independent, client-side SAP advisory for Irish and UK businesses. We don't implement SAP. We don't resell licences. Your SAP consultant sits on your side of the table."
      />

      {/* Intro */}
      <ContentSection withBorder>
        <Prose>
          <p>
            Most SAP consulting firms are also SAP implementation partners. They
            earn their money by selling SAP projects. The bigger the project, the
            more they bill. That creates a structural conflict of interest that
            nobody in the industry likes to talk about, but every CFO who has
            been through an SAP programme knows is real.
          </p>
          <p>
            COGO is different. We are an independent, client-side SAP
            consultancy. We do not implement SAP. We do not resell SAP licences.
            We do not earn referral fees from SAP or from any system integrator.
            Your SAP consultant sits on your side of the table, full stop.
          </p>
          <p>
            Why does that matter? Because SAP projects are expensive, complex,
            and high-risk. The Standish Group&apos;s 2024 CHAOS Report found
            that only 31% of IT projects are delivered on time and on budget
            (Standish Group, 2024). SAP programmes, with their scale and
            organisational impact, tend to skew worse. ERP implementations run an
            average of 16 months and cost USD 9.5 million according to Panorama
            Consulting&apos;s 2024 ERP Report (Panorama Consulting, 2024). When
            the people advising you are also the people billing for
            implementation, the advice gets shaped by their revenue model rather
            than your business needs.
          </p>
          <p>
            We work with mid-market and enterprise organisations across Ireland
            and the UK. Our clients typically run SAP already and are facing a
            decision: migrate to S/4HANA, fix a system that never delivered what
            was promised, or re-evaluate whether SAP is still the right platform
            at all. Some are greenfield - considering SAP for the first time and
            wanting independent guidance before they commit.
          </p>
          <p>
            Whatever the situation, we give you honest, vendor-neutral counsel.
            Sometimes that means recommending SAP. Sometimes it means
            recommending something else entirely. If you want to understand how
            SAP compares to other options, read our guide on{" "}
            <Link href="/resources/guides/sap-vs-oracle/">
              SAP vs Oracle: which ERP is right for your business
            </Link>
            .
          </p>
        </Prose>
      </ContentSection>

      <PageImage src="/images/sap-consulting-graphic.png" alt="SAP consulting services overview" />

      {/* Capabilities */}
      <ContentSection withBorder>
        <SectionHeader
          eyebrow="What we do"
          title="Our SAP capabilities"
        />

        {/* S/4HANA */}
        <Reveal>
          <div className="mb-16">
            <h3 className="text-[20px] font-semibold tracking-[-0.01em] text-foreground mb-4">
              SAP S/4HANA advisory and migration support
            </h3>
            <Prose>
              <p>
                SAP&apos;s own deadline tells the story: mainstream maintenance
                for ECC 6.0 ends in 2027, with extended maintenance available
                until 2030 at a premium (SAP, 2024). If your organisation runs
                SAP ECC, you are facing a forced move to S/4HANA whether you
                want one or not. The question is not if, but how and when.
              </p>
              <p>
                S/4HANA migration is not a simple upgrade. It is a
                re-implementation. The underlying database changes from any
                supported database to SAP HANA. Business processes that were
                customised over years need to be re-evaluated. Custom code - and
                most organisations have thousands of lines of it - needs to be
                assessed, remediated, or retired. Data volumes need to be
                right-sized. And your team needs to learn a fundamentally
                different user interface in SAP Fiori.
              </p>
              <p>
                According to ASUG&apos;s 2024 Pulse of the SAP Customer survey,
                only 28% of SAP customers had migrated to S/4HANA by mid-2024,
                despite years of SAP pushing the move (Americas&apos; SAP
                Users&apos; Group, 2024). Many are stuck, unsure how to start,
                or burned by initial assessments that dramatically
                underestimated the effort.
              </p>
              <p>
                Our S/4HANA advisory service helps you cut through the noise. We
                assess your current SAP landscape, quantify your custom code
                exposure, evaluate your migration options (greenfield,
                brownfield, or selective data transition), and build a realistic
                business case with honest timelines and budgets. We then help
                you select and manage the right implementation partner, and we
                stay involved throughout to protect your interests.
              </p>
              <p>
                If you are{" "}
                <Link href="/services/sap-consulting/s4hana-migration/">
                  planning your move to S/4HANA
                </Link>
                , start with independent advice before you start with a system
                integrator.
              </p>
            </Prose>
          </div>
        </Reveal>

        {/* SAP Reboot */}
        <Reveal>
          <div className="mb-16">
            <h3 className="text-[20px] font-semibold tracking-[-0.01em] text-foreground mb-4">
              SAP Reboot - fixing underperforming SAP systems
            </h3>
            <Prose>
              <p>
                Here is a pattern we see regularly: an organisation spent
                millions on SAP five or seven years ago. The system went live,
                roughly on time, and the implementation partner moved on. But
                the business never got what it was promised. Reports do not work
                properly. Users have built workarounds in spreadsheets. Master
                data is a mess. Nobody trusts the numbers coming out of the
                system.
              </p>
              <p>
                The instinct is often to blame SAP itself. But in most cases,
                the problem is not the software. It is configuration that was
                rushed to meet a go-live date, training that was inadequate,
                master data that was migrated without proper cleansing, or
                business processes that were mapped to SAP&apos;s standard
                functionality without enough thought about how the organisation
                actually operates.
              </p>
              <p>
                Our SAP Reboot service is designed specifically for this
                situation. We conduct a thorough diagnostic of your SAP
                environment: how it is configured, how it is being used (and
                misused), where the gaps are between what the system can do and
                what your people need it to do. We then build a prioritised
                remediation plan that addresses the root causes, not just the
                symptoms.
              </p>
              <p>
                This is almost always faster and cheaper than a full
                re-implementation. If your SAP system is not delivering value,{" "}
                <Link href="/services/sap-consulting/sap-reboot/">
                  fixing an SAP system that is not delivering value
                </Link>{" "}
                is a more detailed look at how we approach this.
              </p>
            </Prose>
          </div>
        </Reveal>

        {/* SAP Training */}
        <Reveal>
          <div className="mb-16">
            <h3 className="text-[20px] font-semibold tracking-[-0.01em] text-foreground mb-4">
              SAP training (SAP Enable Now, WalkMe)
            </h3>
            <Prose>
              <p>
                The single biggest reason SAP systems underperform is poor user
                adoption. You can configure SAP perfectly and it will not matter
                if your people do not know how to use it, do not trust it, or
                have found easier ways to do their work outside the system.
              </p>
              <p>
                SAP&apos;s own Digital Adoption Report found that 52% of
                enterprise software features go unused, with lack of effective
                training cited as the primary cause (SAP / WalkMe, 2023). That
                is a staggering amount of wasted investment.
              </p>
              <p>
                We deliver SAP training programmes that are tailored to your
                configuration, your processes, and your people. We do not run
                generic SAP courses. We build training around how your specific
                system works, using your data, your transactions, and your
                real-world scenarios.
              </p>
              <p>
                We work with both SAP Enable Now (SAP&apos;s native digital
                adoption platform) and WalkMe to create in-application guidance
                that supports users at the point of need - not in a classroom
                three weeks before go-live that everyone has forgotten by day
                one. For organisations across Ireland, our{" "}
                <Link href="/services/sap-consulting/sap-training/">
                  SAP training services in Ireland
                </Link>{" "}
                page covers our full training capabilities.
              </p>
            </Prose>
          </div>
        </Reveal>

        <PageImage src="/images/partnership-diagram.jpg" alt="COGO and Westernacher partnership model for SAP delivery" />

        {/* Supply Chain */}
        <Reveal>
          <div className="mb-16">
            <h3 className="text-[20px] font-semibold tracking-[-0.01em] text-foreground mb-4">
              SAP supply chain optimisation (Rest4rt)
            </h3>
            <Prose>
              <p>
                Supply chain is where SAP earns its keep or fails most visibly.
                If your supply chain planning is still running on spreadsheets
                alongside SAP, or if your MRP runs take hours and produce
                results nobody acts on, there is a problem.
              </p>
              <p>
                We work with Rest4rt, a specialist SAP supply chain optimisation
                tool, to improve demand planning, production scheduling, and
                inventory management within your existing SAP environment.
                Rest4rt sits on top of SAP and enhances the native supply chain
                planning capabilities without requiring a full
                re-implementation.
              </p>
              <p>
                For food and dairy manufacturers dealing with short shelf lives,
                seasonal demand, and co-pack complexity, this can be
                transformative. For pharmaceutical companies managing batch
                genealogy and regulatory compliance, it brings structure to
                planning processes that are often more art than science.
              </p>
              <p>
                The goal is straightforward: get more value from the SAP
                investment you have already made, without starting again.
              </p>
            </Prose>
          </div>
        </Reveal>
      </ContentSection>

      {/* RISE and GROW */}
      <ContentSection withBorder>
        <SectionHeader
          eyebrow="SAP commercial models"
          title="RISE with SAP and GROW with SAP: what you need to know"
          subtitle="SAP has been aggressively marketing two commercial packages. Let's cut through the marketing and explain what they actually are."
        />

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Reveal delay={0}>
            <SpotlightCard>
              <div className="p-6">
                <h3 className="text-[17px] font-semibold text-foreground mb-3">
                  RISE with SAP
                </h3>
                <p className="text-[14px] text-muted leading-relaxed mb-3">
                  Aimed at existing SAP customers, particularly those on ECC who
                  need to migrate to S/4HANA. Bundles S/4HANA Cloud (private
                  edition), SAP Business Technology Platform (BTP), SAP Signavio
                  for process analysis, and infrastructure hosting into a single
                  subscription contract.
                </p>
                <p className="text-[14px] text-muted leading-relaxed">
                  RISE simplifies the commercial structure, but it does not
                  simplify the actual migration work. You still need to assess
                  your custom code, cleanse your data, redesign your processes,
                  and manage organisational change. And RISE locks you into
                  SAP&apos;s infrastructure partners (typically AWS, Azure, or
                  Google Cloud), which limits your flexibility.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
          <Reveal delay={0.1}>
            <SpotlightCard>
              <div className="p-6">
                <h3 className="text-[17px] font-semibold text-foreground mb-3">
                  GROW with SAP
                </h3>
                <p className="text-[14px] text-muted leading-relaxed mb-3">
                  Aimed at new SAP customers, typically mid-market organisations
                  adopting SAP for the first time. Bundles S/4HANA Cloud (public
                  edition) with pre-configured best practices, community
                  support, and a lower entry price point.
                </p>
                <p className="text-[14px] text-muted leading-relaxed">
                  The trade-off is less customisation - public cloud means you
                  run SAP&apos;s standard processes with limited modification.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
        </div>

        <Reveal>
          <SpotlightCard>
            <div className="p-6">
              <h3 className="text-[17px] font-semibold text-foreground mb-3">
                SAP Business Technology Platform (BTP)
              </h3>
              <p className="text-[14px] text-muted leading-relaxed">
                BTP is SAP&apos;s platform for building extensions,
                integrations, and custom applications on top of S/4HANA. It
                includes SAP Integration Suite, SAP Build (low-code tools), and
                analytics capabilities. If your organisation has significant
                custom requirements, BTP is how SAP expects you to address them
                going forward, rather than modifying the core S/4HANA system.
              </p>
            </div>
          </SpotlightCard>
        </Reveal>

        <Prose>
          <p className="mt-8">
            Our advice? Both RISE and GROW can make sense in the right
            circumstances. But you should evaluate them with independent eyes.
            The commercial terms, the infrastructure choices, the scope of what
            is included versus what is extra - these all need careful scrutiny.
            SAP&apos;s partners have strong financial incentives to sell RISE
            and GROW. An independent SAP consultant has no such incentive and
            can tell you whether the package genuinely fits your situation.
          </p>
        </Prose>
      </ContentSection>

      {/* Why choose COGO */}
      <ContentSection withBorder>
        <SectionHeader
          eyebrow="Why COGO"
          title="Why choose COGO for SAP consulting?"
        />

        <Reveal>
          <div className="mb-12">
            <h3 className="text-[20px] font-semibold tracking-[-0.01em] text-foreground mb-4">
              Independent and client-side, by design
            </h3>
            <Prose>
              <p>
                We are not an SAP implementation firm that also offers
                &quot;advisory.&quot; Advisory is all we do. Our revenue comes
                from consulting fees, not from implementation billings or vendor
                referrals. That means our advice is genuinely independent. When
                we tell you SAP is the right choice, it is because we believe
                it. When we tell you it is not, same applies.
              </p>
              <p>
                This matters more than you might think. Forrester&apos;s 2024
                report on ERP advisory services found that organisations using
                independent advisors were 40% more likely to stay within budget
                and 35% more likely to achieve their stated business objectives
                compared to those who relied solely on their implementation
                partner&apos;s advisory services (Forrester Research, 2024).
              </p>
              <p>
                We sit on the client side throughout the engagement. We attend
                your steering committees, review your system integrator&apos;s
                deliverables, challenge their assumptions, and make sure they
                deliver what they promised. We are your independent eyes and
                ears inside what is often the largest and most complex programme
                your organisation will run.
              </p>
            </Prose>
          </div>
        </Reveal>

        <Reveal>
          <div className="mb-12">
            <h3 className="text-[20px] font-semibold tracking-[-0.01em] text-foreground mb-4">
              Westernacher partnership
            </h3>
            <Prose>
              <p>
                While COGO is vendor-independent in our advisory work, we
                maintain a strategic alliance with Westernacher Consulting, a
                long-established SAP Gold Partner with over 900 SAP consultants
                globally. Westernacher has been an SAP partner for more than 30
                years and holds specialisations across S/4HANA, supply chain
                management, and public sector.
              </p>
              <p>
                This partnership gives our clients the best of both worlds. You
                get independent, client-side advice from COGO, and when you need
                implementation capability, you get access to a proven SAP Gold
                Partner through{" "}
                <Link href="/about/partners/">
                  our SAP Gold Partner alliance with Westernacher
                </Link>
                . We manage the relationship on your behalf, holding Westernacher
                to the same standards we would hold any SI.
              </p>
              <p>
                It is worth noting: we do not earn a referral fee from
                Westernacher. If Westernacher is not the right fit for your
                project, we will tell you and recommend alternatives. The
                alliance exists because they are good at what they do, not
                because we make money from directing work their way.
              </p>
            </Prose>
          </div>
        </Reveal>

        <Reveal>
          <div className="mb-12">
            <h3 className="text-[20px] font-semibold tracking-[-0.01em] text-foreground mb-4">
              SAP project management and governance
            </h3>
            <Prose>
              <p>
                Large SAP programmes fail more often from poor governance than
                from poor technology. Scope creep, change request backlogs,
                untested integrations, and steering committees that
                rubber-stamp rather than challenge - these are the real project
                killers.
              </p>
              <p>
                We provide experienced SAP programme management and governance
                that keeps your project on track. This includes establishing
                proper programme governance structures, defining clear
                stage-gates and quality criteria, managing scope and change
                control, overseeing testing strategy and execution, and
                preparing your organisation for go-live.
              </p>
              <p>
                If you are looking for broader support across any ERP programme,
                not just SAP, see{" "}
                <Link href="/services/erp-consulting/">
                  our ERP consulting and advisory practice
                </Link>{" "}
                or our dedicated{" "}
                <Link href="/services/implementation-support/">
                  client-side ERP implementation consulting
                </Link>{" "}
                page.
              </p>
            </Prose>
          </div>
        </Reveal>
      </ContentSection>

      {/* Industries */}
      <ContentSection withBorder>
        <SectionHeader
          eyebrow="Industries"
          title="SAP consulting by industry"
          subtitle="SAP is a horizontal platform, but every industry uses it differently. Generic SAP advice from consultants who have only worked in one industry is a recipe for expensive mistakes."
        />

        <div className="grid md:grid-cols-2 gap-6">
          <Reveal delay={0}>
            <SpotlightCard>
              <div className="p-6">
                <h3 className="text-[17px] font-semibold text-foreground mb-3">
                  Food and dairy
                </h3>
                <p className="text-[14px] text-muted leading-relaxed mb-3">
                  Ireland&apos;s food and dairy sector represents EUR 16.3
                  billion in exports (Bord Bia, 2024), and SAP is the dominant
                  ERP in mid-to-large food manufacturers. Batch management and
                  traceability, shelf-life management, catch-weight processing,
                  co-product handling, and quality management are operational
                  necessities.
                </p>
                <p className="text-[14px] text-muted leading-relaxed">
                  We have worked with food and dairy businesses running SAP
                  PP-PI, SAP QM, and SAP EWM. We understand the intersection
                  between SAP configuration and BRCGS, FSSC 22000, and retailer
                  audit requirements.{" "}
                  <Link
                    href="/industries/food-manufacturing/"
                    className="text-accent underline underline-offset-4 decoration-accent/30 hover:decoration-accent/60 transition-colors"
                  >
                    ERP for food manufacturing
                  </Link>
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
          <Reveal delay={0.1}>
            <SpotlightCard>
              <div className="p-6">
                <h3 className="text-[17px] font-semibold text-foreground mb-3">
                  Pharmaceutical and life sciences
                </h3>
                <p className="text-[14px] text-muted leading-relaxed mb-3">
                  GxP compliance, 21 CFR Part 11 requirements, serialisation
                  under the EU Falsified Medicines Directive, and computer
                  system validation (CSV) under GAMP 5 impose constraints on
                  how SAP is configured, validated, and maintained.
                </p>
                <p className="text-[14px] text-muted leading-relaxed">
                  Ireland is home to 9 of the top 10 global pharmaceutical
                  companies and produces over EUR 85 billion in pharma exports
                  annually (IDA Ireland, 2024). Our pharma SAP consultants
                  understand CSV lifecycle management and validation master
                  planning.{" "}
                  <Link
                    href="/industries/pharmaceutical/"
                    className="text-accent underline underline-offset-4 decoration-accent/30 hover:decoration-accent/60 transition-colors"
                  >
                    GxP-compliant ERP advisory
                  </Link>
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
          <Reveal delay={0.2}>
            <SpotlightCard>
              <div className="p-6">
                <h3 className="text-[17px] font-semibold text-foreground mb-3">
                  Healthcare
                </h3>
                <p className="text-[14px] text-muted leading-relaxed">
                  Healthcare organisations face unique challenges with SAP,
                  particularly around patient data protection under GDPR,
                  integration with clinical systems (EPR, PAS, LIMS), and the
                  complexity of healthcare procurement and supply chain
                  management. Budget constraints, legacy system landscapes, and
                  the critical nature of system uptime all shape how SAP
                  projects should be planned and executed.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
          <Reveal delay={0.3}>
            <SpotlightCard>
              <div className="p-6">
                <h3 className="text-[17px] font-semibold text-foreground mb-3">
                  Manufacturing
                </h3>
                <p className="text-[14px] text-muted leading-relaxed">
                  SAP remains the ERP of choice for large-scale manufacturers.
                  The platform&apos;s depth in production planning (PP),
                  materials management (MM), plant maintenance (PM), and quality
                  management (QM) is difficult to match. We help manufacturers
                  get SAP configuration right for their specific production
                  model, whether that is discrete, repetitive, process, or
                  mixed-mode manufacturing.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
        </div>
      </ContentSection>

      {/* Team */}
      <ContentSection withBorder>
        <SectionHeader
          eyebrow="Our people"
          title="Meet our SAP team"
        />

        <div className="grid md:grid-cols-2 gap-6">
          <Reveal delay={0}>
            <SpotlightCard>
              <div className="p-6">
                <h3 className="text-[17px] font-semibold text-foreground mb-2">
                  Laurence Phelan
                </h3>
                <p className="text-[12px] uppercase tracking-wider text-accent mb-3">
                  Director
                </p>
                <p className="text-[14px] text-muted leading-relaxed mb-3">
                  Laurence has spent over 20 years in ERP and business
                  transformation consulting, with deep expertise in SAP across
                  multiple industries. He founded COGO to address a gap he had
                  seen repeatedly: businesses making multi-million-euro SAP
                  decisions with no independent advice in the room.
                </p>
                <p className="text-[14px] text-muted leading-relaxed">
                  Laurence&apos;s approach is straightforward: understand the
                  business first, then work out what the technology needs to do.
                  He is a firm believer that most SAP problems are business
                  problems dressed up as technical problems, and that the right
                  answer sometimes is not SAP at all.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
          <Reveal delay={0.1}>
            <SpotlightCard>
              <div className="p-6">
                <h3 className="text-[17px] font-semibold text-foreground mb-2">
                  Lance Harcourt
                </h3>
                <p className="text-[12px] uppercase tracking-wider text-accent mb-3">
                  SAP Practice Lead
                </p>
                <p className="text-[14px] text-muted leading-relaxed mb-3">
                  Lance brings over 15 years of hands-on SAP experience
                  spanning S/4HANA, ECC, supply chain management, and SAP
                  project management. His background is unusual in that he has
                  worked on both the implementation side and the client side,
                  giving him a clear understanding of where SIs cut corners and
                  where clients need to push back.
                </p>
                <p className="text-[14px] text-muted leading-relaxed">
                  His clients appreciate his directness. Lance tells you what
                  you need to hear, not what you want to hear. In SAP projects,
                  that is the most valuable quality a consultant can have.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
        </div>
      </ContentSection>

      {/* Case Studies */}
      <ContentSection withBorder>
        <SectionHeader
          eyebrow="Results"
          title="What our clients have achieved"
          subtitle="We respect our clients' confidentiality, so we present these as representative scenarios rather than named case studies. The numbers and outcomes are real."
        />

        <div className="space-y-6">
          <Reveal>
            <SpotlightCard>
              <div className="p-6">
                <h3 className="text-[17px] font-semibold text-foreground mb-3">
                  Irish food manufacturer: S/4HANA migration delivered on budget
                </h3>
                <p className="text-[14px] text-muted leading-relaxed mb-3">
                  A mid-sized Irish food manufacturer (EUR 180m revenue, 600 SAP
                  users) needed to migrate from ECC 6.0 to S/4HANA. Their
                  incumbent SI had quoted a 24-month programme at EUR 4.2
                  million. We conducted an independent assessment and found the
                  scope was significantly over-engineered, with the SI proposing
                  to re-implement functionality the client did not use and would
                  never need.
                </p>
                <p className="text-[14px] text-muted leading-relaxed">
                  Our revised scope and competitive SI selection process
                  resulted in a 16-month programme delivered for EUR 2.8
                  million - a 33% saving. Twelve months post go-live, the
                  client had reduced inventory carrying costs by 18% and cut
                  month-end close from 12 days to 6.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>

          <Reveal>
            <SpotlightCard>
              <div className="p-6">
                <h3 className="text-[17px] font-semibold text-foreground mb-3">
                  UK pharma company: SAP Reboot after failed implementation
                </h3>
                <p className="text-[14px] text-muted leading-relaxed mb-3">
                  A UK-based pharmaceutical company (EUR 320m revenue) had gone
                  live on SAP ECC three years earlier, but the system was
                  significantly underperforming. The board was considering a EUR
                  3 million re-implementation.
                </p>
                <p className="text-[14px] text-muted leading-relaxed">
                  We conducted a diagnostic and recommended an SAP Reboot
                  instead - a targeted remediation programme delivered in 9
                  months for EUR 650,000. Within six months of completion, the
                  client had eliminated all parallel spreadsheet processes and
                  was running end-to-end batch traceability through SAP for the
                  first time.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>

          <Reveal>
            <SpotlightCard>
              <div className="p-6">
                <h3 className="text-[17px] font-semibold text-foreground mb-3">
                  Dairy co-operative: independent SAP selection advisory
                </h3>
                <p className="text-[14px] text-muted leading-relaxed mb-3">
                  A large Irish dairy co-operative was evaluating whether to
                  replace its legacy ERP with SAP S/4HANA or an alternative
                  platform. Three SAP partners had already pitched, each
                  recommending SAP with project budgets ranging from EUR 6
                  million to EUR 12 million.
                </p>
                <p className="text-[14px] text-muted leading-relaxed">
                  We ran an independent evaluation process, benchmarking SAP
                  against two alternative platforms across 400+ weighted
                  requirements. SAP S/4HANA was ultimately selected, but the
                  structured process produced a contract that was 22% below the
                  lowest of the three original partner quotes. The
                  co-operative&apos;s chairman told us it was &quot;the first
                  time anyone in the room was clearly working for us, not for
                  SAP.&quot;
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
        </div>
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
              <h3 className="text-[17px] font-semibold text-foreground mb-3">
                What is SAP consulting?
              </h3>
              <p className="text-[15px] text-muted leading-[1.8]">
                SAP consulting covers a range of advisory and technical services
                related to SAP software. This includes strategic advice on
                whether SAP is right for your organisation, planning and
                managing SAP implementations, optimising existing SAP systems,
                and supporting migrations to newer SAP platforms like S/4HANA.
                SAP consulting can be delivered by SAP&apos;s own consulting
                arm, by SAP implementation partners (system integrators), or by
                independent advisory firms like COGO that work exclusively on
                the client side.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div>
              <h3 className="text-[17px] font-semibold text-foreground mb-3">
                What does an SAP consultant do?
              </h3>
              <p className="text-[15px] text-muted leading-[1.8]">
                An SAP consultant helps organisations plan, implement, and
                optimise SAP systems. The role varies depending on whether the
                consultant works for a system integrator (in which case they
                typically configure and customise SAP modules) or for an
                independent advisory firm (in which case they advise on
                strategy, vendor selection, project governance, and
                implementation oversight). At COGO, our SAP consultants focus on
                the advisory side: helping you make better decisions, manage
                your SI effectively, and get genuine business value from your
                SAP investment.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div>
              <h3 className="text-[17px] font-semibold text-foreground mb-3">
                How much does SAP consulting cost?
              </h3>
              <p className="text-[15px] text-muted leading-[1.8]">
                SAP consulting costs vary significantly depending on the type of
                engagement. Independent advisory engagements (strategy,
                selection, implementation oversight) typically range from EUR
                50,000 to EUR 300,000 depending on scope and duration. Full SAP
                implementations can cost anywhere from EUR 1 million for a
                focused mid-market deployment to EUR 50 million or more for
                large, multi-site enterprise programmes. Panorama
                Consulting&apos;s 2024 data puts the average ERP implementation
                cost at USD 9.5 million. The cost of independent advisory is
                typically 3-5% of the total programme cost - and routinely saves
                multiples of that through better scope control, vendor
                negotiation, and risk management.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div>
              <h3 className="text-[17px] font-semibold text-foreground mb-3">
                What is SAP S/4HANA?
              </h3>
              <p className="text-[15px] text-muted leading-[1.8]">
                SAP S/4HANA is SAP&apos;s current-generation ERP platform,
                replacing the older ECC (ERP Central Component) system. It runs
                exclusively on the SAP HANA in-memory database, which delivers
                significantly faster processing for analytics and transactions.
                S/4HANA features a modernised user interface (SAP Fiori),
                simplified data models, and embedded analytics. It is available
                as an on-premise deployment, a private cloud edition (through
                RISE with SAP), or a public cloud edition (through GROW with
                SAP). SAP has announced that mainstream maintenance for ECC 6.0
                ends in 2027, making migration to S/4HANA a near-term priority
                for most SAP customers.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div>
              <h3 className="text-[17px] font-semibold text-foreground mb-3">
                What is the difference between RISE with SAP and GROW with SAP?
              </h3>
              <p className="text-[15px] text-muted leading-[1.8]">
                RISE with SAP is designed for existing SAP customers migrating
                to S/4HANA. It bundles S/4HANA Cloud (private edition), SAP
                BTP, SAP Signavio, and infrastructure into a single
                subscription. You get more flexibility to retain custom code and
                tailored processes. GROW with SAP is designed for new SAP
                customers, typically mid-market organisations, adopting S/4HANA
                Cloud (public edition) for the first time. It uses
                pre-configured best practices with limited customisation, at a
                lower entry cost. The key difference: RISE suits complex,
                established SAP landscapes; GROW suits organisations willing to
                adopt standard processes with minimal modification.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div>
              <h3 className="text-[17px] font-semibold text-foreground mb-3">
                What is SAP BTP?
              </h3>
              <p className="text-[15px] text-muted leading-[1.8]">
                SAP Business Technology Platform (BTP) is SAP&apos;s platform
                for extending S/4HANA without modifying the core system. It
                includes integration tools (SAP Integration Suite), low-code
                development (SAP Build), analytics, AI services, and data
                management capabilities. BTP is SAP&apos;s answer to the
                customisation challenge: rather than modifying S/4HANA directly
                (which creates upgrade headaches), you build extensions and
                integrations on BTP. For organisations with significant custom
                requirements, BTP is increasingly a core part of the SAP
                architecture, not an optional add-on.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div>
              <h3 className="text-[17px] font-semibold text-foreground mb-3">
                How long does an SAP implementation take?
              </h3>
              <p className="text-[15px] text-muted leading-[1.8]">
                Timelines depend on scope, complexity, and organisational
                readiness. A focused, single-site SAP implementation for a
                mid-market organisation can be delivered in 9 to 14 months.
                Multi-site, multi-country deployments typically take 18 to 36
                months. S/4HANA migrations from ECC vary widely: a brownfield
                (system conversion) approach is typically 12 to 18 months, while
                a greenfield (new implementation) can be 18 to 30 months.
                Panorama Consulting&apos;s 2024 data shows the average ERP
                implementation takes 16 months, but SAP programmes at the
                enterprise end regularly exceed this.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div>
              <h3 className="text-[17px] font-semibold text-foreground mb-3">
                Do I need an independent SAP consultant?
              </h3>
              <p className="text-[15px] text-muted leading-[1.8]">
                If your SAP programme is a significant investment for your
                organisation (and it almost certainly is), independent advice
                pays for itself. Your implementation partner is incentivised to
                sell the largest scope possible. SAP itself is incentivised to
                sell the broadest licence package possible. An independent SAP
                consultant has no such incentives and will challenge both the SI
                and SAP on your behalf. We typically save clients 15-30% on
                total programme cost through better scoping, tighter contracts,
                and more effective project governance.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div>
              <h3 className="text-[17px] font-semibold text-foreground mb-3">
                What industries use SAP?
              </h3>
              <p className="text-[15px] text-muted leading-[1.8]">
                SAP is used across virtually every industry, but it has
                particular strength in manufacturing, food and beverage,
                pharmaceuticals, chemicals, utilities, oil and gas, retail, and
                public sector. In Ireland, SAP has a strong presence in food
                manufacturing, dairy, pharmaceutical, and medical devices.
                Globally, SAP claims over 400,000 customers in 180 countries
                (SAP, 2024). The platform&apos;s depth in complex
                manufacturing, supply chain, and financial processes makes it a
                natural fit for organisations with operational complexity, but
                it is overkill for many mid-market businesses with simpler
                requirements.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div>
              <h3 className="text-[17px] font-semibold text-foreground mb-3">
                How do I choose an SAP consulting partner?
              </h3>
              <p className="text-[15px] text-muted leading-[1.8]">
                Look for three things. First, independence: does the firm earn
                money from SAP implementations, or purely from advising you?
                Second, relevant experience: have they worked in your industry,
                with organisations of similar size and complexity? Third,
                references: ask to speak to clients who have been through
                similar programmes. Do not accept case studies or testimonials -
                insist on a direct conversation with a project sponsor or
                finance director who can tell you what it was really like. And
                if a firm tells you they have never had a difficult project,
                walk away. Every experienced SAP consultant has scars, and the
                honest ones will tell you about them.
              </p>
            </div>
          </Reveal>
        </div>
      </ContentSection>

      {/* Author note */}
      <ContentSection withBorder>
        <Reveal>
          <p className="text-[13px] text-muted/70 leading-relaxed italic">
            This page was written by Laurence Phelan, Director at COGO
            Consulting. Laurence has over 20 years of experience in ERP
            advisory, with particular expertise in SAP S/4HANA, SAP programme
            governance, and independent vendor selection for Irish and UK
            businesses.
          </p>
        </Reveal>
      </ContentSection>

      <PageCTA
        title="Talk to us about your SAP project"
        subtitle="Book a 30-minute call with one of our partners. No pitch, no pressure. Tell us what you are facing and we will tell you honestly if we can help."
        buttonText="Book a call"
        buttonHref="/contact/"
      />
    </PageLayout>
  );
}
