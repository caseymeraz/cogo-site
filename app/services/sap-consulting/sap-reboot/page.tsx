import type { Metadata } from "next";
import PageLayout from "../../../components/PageLayout";
import PageHeader from "../../../components/PageHeader";
import ContentSection, { SectionHeader } from "../../../components/ContentSection";
import Prose from "../../../components/Prose";
import Reveal from "../../../components/Reveal";
import SpotlightCard from "../../../components/SpotlightCard";
import PageCTA from "../../../components/PageCTA";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SAP Reboot | Fix Underperforming SAP | COGO",
  description:
    "Your SAP system is underperforming, not broken. COGO's SAP Reboot programme diagnoses root causes and delivers a practical recovery roadmap for UK and Ireland organisations.",
};

export default function SAPRebootPage() {
  return (
    <PageLayout>
      <PageHeader
        eyebrow="SAP Reboot"
        title="Your SAP system isn't broken. It's been neglected."
        subtitle="COGO's SAP Reboot programme diagnoses root causes, removes the workarounds, and delivers a practical recovery roadmap. No rip-and-replace required."
      />

      {/* Intro */}
      <ContentSection withBorder>
        <Prose>
          <p>
            Here is a pattern COGO sees repeatedly across UK and Ireland organisations: you spent millions implementing SAP. Go-live happened. The project team disbanded. The system integrator moved on. And now, three or five or eight years later, your SAP system is limping along -- technically functional but operationally painful.
          </p>
          <p>
            Your people have built workarounds in spreadsheets. The staff who understood the original configuration have left. Reports do not give you the numbers you need. New hires get two days of "training" that consists of someone showing them which buttons to press. And the phrase "that's just how SAP works" gets used in every meeting.
          </p>
          <p>
            This is not a technology problem. Your SAP system has been neglected. The processes have drifted, the knowledge has eroded, and the gap between what SAP can do and what your organisation actually gets from it has widened to the point where people question whether the original investment was worth it.
          </p>
          <p>
            It was. But you need a reboot.
          </p>
          <p>
            If you are also considering a move to S/4HANA, a reboot can be a sensible first step: stabilise and optimise what you have before committing to a migration programme. And if you need broader support, explore our{" "}
            <Link href="/services/sap-consulting/">SAP consulting services for Ireland and the UK</Link>.
          </p>
        </Prose>
      </ContentSection>

      {/* Signs you need a reboot */}
      <ContentSection withBorder withGrain>
        <SectionHeader
          eyebrow="Warning Signs"
          title="Signs your SAP system needs a reboot"
        />
        <Prose>
          <p>Be honest. How many of these apply to your organisation?</p>
        </Prose>
        <div className="grid md:grid-cols-2 gap-6 mt-10">
          <Reveal delay={0}>
            <SpotlightCard>
              <div className="p-7">
                <h3 className="text-[18px] font-semibold text-white/90 mb-3">
                  Workarounds outnumber standard processes
                </h3>
                <p className="text-[14px] text-white/50 leading-relaxed">
                  Your teams download data from SAP, manipulate it in Excel, and re-upload it. Or worse, they maintain parallel spreadsheets that duplicate what SAP should be doing.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
          <Reveal delay={0.1}>
            <SpotlightCard>
              <div className="p-7">
                <h3 className="text-[18px] font-semibold text-white/90 mb-3">
                  The people who configured SAP are gone
                </h3>
                <p className="text-[14px] text-white/50 leading-relaxed">
                  Your original project team has moved on, and no one currently in the organisation understands why things were set up the way they were. Configuration decisions made years ago are treated as immutable laws of nature.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
          <Reveal delay={0.2}>
            <SpotlightCard>
              <div className="p-7">
                <h3 className="text-[18px] font-semibold text-white/90 mb-3">
                  Data quality has deteriorated
                </h3>
                <p className="text-[14px] text-white/50 leading-relaxed">
                  Master data is inconsistent, duplicate records are common, and your finance team spends days reconciling numbers that should match automatically.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
          <Reveal delay={0.3}>
            <SpotlightCard>
              <div className="p-7">
                <h3 className="text-[18px] font-semibold text-white/90 mb-3">
                  User adoption is low
                </h3>
                <p className="text-[14px] text-white/50 leading-relaxed">
                  People avoid SAP wherever possible. They find it slow, confusing, and unhelpful. New starters learn bad habits from colleagues who have been working around the system for years.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
          <Reveal delay={0.4}>
            <SpotlightCard>
              <div className="p-7">
                <h3 className="text-[18px] font-semibold text-white/90 mb-3">
                  Reporting does not work
                </h3>
                <p className="text-[14px] text-white/50 leading-relaxed">
                  Your management reports are assembled manually from multiple sources because no one trusts the numbers coming directly out of SAP. Month-end closing takes far longer than it should.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
          <Reveal delay={0.5}>
            <SpotlightCard>
              <div className="p-7">
                <h3 className="text-[18px] font-semibold text-white/90 mb-3">
                  Upgrades and changes are feared
                </h3>
                <p className="text-[14px] text-white/50 leading-relaxed">
                  Even minor changes to SAP are treated as high-risk projects. Your IT team avoids applying support packs because they are not sure what will break.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
        </div>
        <Reveal delay={0.6}>
          <p className="text-[15px] text-white/55 mt-10 leading-relaxed">
            If three or more of these ring true, your SAP system needs attention. Not necessarily a replacement. A reboot.
          </p>
        </Reveal>
      </ContentSection>

      {/* The four phases */}
      <ContentSection withBorder>
        <SectionHeader
          eyebrow="Our Approach"
          title="COGO's SAP Reboot programme"
          subtitle="The SAP Reboot is a structured programme, not a consulting engagement that drags on indefinitely. It has four phases, each with clear deliverables and decision points."
        />
        <div className="space-y-16">
          <Reveal>
            <div>
              <h3 className="text-[20px] font-semibold text-white/85 mb-4">Phase 1: Discovery and health check (4-6 weeks)</h3>
              <div className="text-[15px] text-white/55 leading-[1.8] space-y-4">
                <p>Before prescribing anything, you need an accurate diagnosis. COGO's health check covers:</p>
                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  {[
                    { label: "Process mapping", desc: "How your organisation actually uses SAP today, not the to-be processes from the original implementation." },
                    { label: "Configuration review", desc: "Your SAP configuration audited against current recommended practices and your actual business requirements." },
                    { label: "Custom code assessment", desc: "How much custom ABAP exists, whether it is documented, and whether it is still needed. Typically 20-40% is orphaned." },
                    { label: "Data quality analysis", desc: "Profiling of your master data and transactional data to quantify the extent of quality issues." },
                    { label: "User interviews", desc: "Conversations with the people who use SAP every day, from warehouse operators to accounts payable clerks." },
                    { label: "Licence and cost review", desc: "Assessment of whether you are paying for SAP modules and user licences you are not using." },
                  ].map((item, i) => (
                    <div key={i} className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                      <p className="text-[14px] font-medium text-white/80 mb-1">{item.label}</p>
                      <p className="text-[13px] text-white/45 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-4">
                  The output is a Health Check Report with a prioritised list of issues, their business impact, and recommended actions. No jargon, no 200-page document that sits on a shelf.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div>
              <h3 className="text-[20px] font-semibold text-white/85 mb-4">Phase 2: Recovery roadmap (2-3 weeks)</h3>
              <div className="text-[15px] text-white/55 leading-[1.8] space-y-4">
                <p>Based on the health check findings, COGO develops a Recovery Roadmap sequenced by business impact and implementation effort:</p>
                <ul className="space-y-3 mt-4">
                  <li className="flex gap-3 items-start">
                    <span className="w-1 h-1 rounded-full bg-accent/60 mt-[0.65em] flex-shrink-0" />
                    <span><strong className="text-white/80 font-medium">Quick wins (0-3 months):</strong> Configuration corrections, unused customisation removal, licence optimisation, and targeted training.</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="w-1 h-1 rounded-full bg-accent/60 mt-[0.65em] flex-shrink-0" />
                    <span><strong className="text-white/80 font-medium">Medium-term improvements (3-9 months):</strong> Process redesign, data cleansing programmes, and reporting improvements.</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="w-1 h-1 rounded-full bg-accent/60 mt-[0.65em] flex-shrink-0" />
                    <span><strong className="text-white/80 font-medium">Strategic initiatives (9-18 months):</strong> Implementing unused SAP modules, integration improvements, or preparing for S/4HANA migration.</span>
                  </li>
                </ul>
                <p>Each item includes an estimated cost, resource requirement, expected benefit, and dependencies. You decide what to pursue and in what order.</p>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div>
              <h3 className="text-[20px] font-semibold text-white/85 mb-4">Phase 3: Embed and sustain</h3>
              <div className="text-[15px] text-white/55 leading-[1.8] space-y-4">
                <p>
                  This is where most "fix-it" engagements fail. They diagnose the problems, make recommendations, and leave. COGO stays to help you embed the changes: hands-on implementation support, knowledge transfer to your internal team, SAP Centre of Excellence (CoE) design, and{" "}
                  <Link href="/services/sap-consulting/sap-training/" className="text-accent underline underline-offset-4 decoration-accent/30 hover:decoration-accent/60 transition-colors">role-based SAP training</Link>{" "}
                  that addresses the specific gaps identified in Phase 1.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div>
              <h3 className="text-[20px] font-semibold text-white/85 mb-4">Phase 4: Future enhancements</h3>
              <div className="text-[15px] text-white/55 leading-[1.8] space-y-4">
                <p>
                  Once your SAP system is stable and delivering value again, COGO helps you plan forward. Should you upgrade to S/4HANA, and if so, when? Are there additional SAP modules or cloud services that would benefit your organisation? How do you maintain the improvements and prevent another cycle of neglect?
                </p>
                <p>
                  This phase connects directly to our{" "}
                  <Link href="/services/implementation-support/" className="text-accent underline underline-offset-4 decoration-accent/30 hover:decoration-accent/60 transition-colors">client-side ERP implementation consulting</Link>{" "}
                  if a larger programme is warranted.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </ContentSection>

      {/* What a reboot delivers */}
      <ContentSection withBorder withGrain>
        <SectionHeader
          eyebrow="Results"
          title="What a reboot delivers"
          subtitle="COGO does not promise 'transformation.' Here is what a SAP Reboot actually delivers, based on outcomes from previous engagements."
        />
        <div className="grid md:grid-cols-2 gap-6">
          <Reveal delay={0}>
            <SpotlightCard>
              <div className="p-7">
                <h3 className="text-[18px] font-semibold text-white/90 mb-3">
                  Reduced operational cost
                </h3>
                <p className="text-[14px] text-white/50 leading-relaxed">
                  One UK manufacturing client reduced month-end closing from 12 days to 5 days after a reboot of their SAP Finance processes. The saving in staff time alone paid for the engagement within six months.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
          <Reveal delay={0.1}>
            <SpotlightCard>
              <div className="p-7">
                <h3 className="text-[18px] font-semibold text-white/90 mb-3">
                  Fewer workarounds
                </h3>
                <p className="text-[14px] text-white/50 leading-relaxed">
                  When SAP does what it is supposed to do, your people stop maintaining parallel spreadsheets. That is not just a time saving. It is a data integrity improvement that affects every decision made from that data.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
          <Reveal delay={0.2}>
            <SpotlightCard>
              <div className="p-7">
                <h3 className="text-[18px] font-semibold text-white/90 mb-3">
                  Better reporting
                </h3>
                <p className="text-[14px] text-white/50 leading-relaxed">
                  Reliable, timely management information from a single source. No more "which version of the numbers is correct?" debates at board meetings.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
          <Reveal delay={0.3}>
            <SpotlightCard>
              <div className="p-7">
                <h3 className="text-[18px] font-semibold text-white/90 mb-3">
                  Licence cost savings
                </h3>
                <p className="text-[14px] text-white/50 leading-relaxed">
                  COGO regularly identifies GBP 50,000 to GBP 200,000 in annual licence savings during the health check phase: unused named users, modules licensed but never deployed, and indirect access exposure that needs addressing.
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
              <h3 className="text-[18px] font-semibold text-white/85 mb-3">How long does a SAP Reboot take?</h3>
              <p className="text-[15px] text-white/50 leading-relaxed">
                The Discovery and Health Check phase takes four to six weeks. The Recovery Roadmap is developed in two to three weeks. Implementation of improvements varies based on scope. Quick wins can be delivered in the first three months, with medium-term improvements typically completed within nine months. The total programme length depends on how many roadmap items you choose to pursue.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div>
              <h3 className="text-[18px] font-semibold text-white/85 mb-3">Is a reboot worth it if we are planning to move to S/4HANA anyway?</h3>
              <p className="text-[15px] text-white/50 leading-relaxed">
                Yes, often more so. Migrating a neglected SAP system to S/4HANA means you carry all the problems forward (in a brownfield conversion) or spend significant time unpicking them during the new implementation (in a greenfield). A reboot cleans up data quality, removes unnecessary customisations, and stabilises processes, all of which reduce the cost and risk of a subsequent{" "}
                <Link href="/services/sap-consulting/s4hana-migration/" className="text-accent underline underline-offset-4 decoration-accent/30 hover:decoration-accent/60 transition-colors">S/4HANA migration</Link>.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div>
              <h3 className="text-[18px] font-semibold text-white/85 mb-3">What does a SAP Reboot cost?</h3>
              <p className="text-[15px] text-white/50 leading-relaxed">
                The Discovery and Health Check (Phase 1) and Recovery Roadmap (Phase 2) are typically delivered for a fixed fee, ranging from GBP 25,000 to GBP 60,000 depending on the size and complexity of your SAP landscape. Implementation costs in Phases 3 and 4 depend on the scope of improvements you choose to pursue. COGO provides detailed estimates for each roadmap item so you can make informed decisions about what to prioritise.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div>
              <h3 className="text-[18px] font-semibold text-white/85 mb-3">Can COGO do the reboot remotely?</h3>
              <p className="text-[15px] text-white/50 leading-relaxed">
                COGO works across the UK and Ireland, and much of the health check and roadmap work can be done remotely. However, user interviews and process mapping benefit significantly from on-site presence. We recommend a blended approach: on-site for discovery workshops, remote for analysis and implementation support.
              </p>
            </div>
          </Reveal>
        </div>
      </ContentSection>

      {/* Author */}
      <ContentSection withBorder withGrain>
        <Reveal>
          <p className="text-[13px] text-white/30 italic leading-relaxed">
            Written by Lance Harcourt, COGO Consulting. Lance works with organisations across Ireland and the UK to stabilise, optimise, and future-proof their SAP investments.
          </p>
        </Reveal>
      </ContentSection>

      <PageCTA
        title="SAP underperforming?"
        subtitle="Do not assume the only option is ripping it out and starting again. Talk to COGO about a SAP Reboot: practical diagnosis and a clear path forward."
        buttonText="Talk to us about a SAP Reboot"
        buttonHref="/contact/"
      />
    </PageLayout>
  );
}
