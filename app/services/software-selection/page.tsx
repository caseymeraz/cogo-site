import type { Metadata } from "next";
import PageLayout from "../../components/PageLayout";
import PageHeader from "../../components/PageHeader";
import ContentSection, { SectionHeader } from "../../components/ContentSection";
import Prose from "../../components/Prose";
import Reveal from "../../components/Reveal";
import SpotlightCard from "../../components/SpotlightCard";
import PageCTA from "../../components/PageCTA";
import PageImage from "../../components/PageImage";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Independent Software Selection | ERP Evaluation | COGO",
  description:
    "Vendor-neutral software selection from independent consultants. Our 6-step methodology ensures you choose the right ERP, CRM, or enterprise platform.",
};

export default function SoftwareSelectionPage() {
  return (
    <PageLayout>
      <PageHeader
        eyebrow="Software Selection"
        title="Why the company selling you software should not be the one helping you choose it"
        subtitle="COGO is an independent, client-side software selection consultant. We do not sell software, implement software, hold vendor partnerships, or earn referral commissions."
      />

      {/* Intro */}
      <ContentSection withBorder>
        <Prose>
          <p>
            There is a structural problem in how most organisations buy enterprise software. The firms that advise you on which system to choose are, more often than not, the same firms that earn their revenue implementing that system. They hold vendor certifications, receive referral fees, and staff their benches with consultants trained on a single platform. Their advice is not neutral. It cannot be. Their business model will not allow it.
          </p>
          <p>
            This matters because software selection is one of the highest-stakes decisions your organisation will make. Panorama Consulting's 2024 ERP Report puts the average implementation cost at USD 9.5 million (Panorama Consulting, 2024). Get the selection wrong, and you are locked into a platform that does not fit for the next 10 to 15 years. The cost of switching is enormous. The cost of living with the wrong system is worse.
          </p>
          <p>
            We work with mid-market and enterprise organisations across Ireland and the UK - typically EUR 20m to EUR 500m turnover - selecting ERP, CRM, WMS, or other enterprise platforms. Our clients come to us because they want an honest answer, not a sales pitch dressed up as advice.
          </p>
          <p>
            If you want to understand{" "}
            <Link href="/about/why-cogo/">what makes client-side consulting different</Link>, the short version is this: we only earn fees from you. That means our incentive is to get you the right system at the right price, not to steer you towards the platform that pays us the most.
          </p>
        </Prose>
      </ContentSection>

      <PageImage src="/images/methodology-evaluation.png" alt="COGO six-step ERP evaluation methodology" />

      {/* 6-step methodology */}
      <ContentSection withBorder withGrain>
        <SectionHeader
          eyebrow="Our Methodology"
          title="COGO's 6-step software selection methodology"
          subtitle="Picking enterprise software is not a matter of watching demos and choosing the one with the slickest presentation. It requires a structured process that starts with your business and ends with a contract that protects your interests."
        />

        {/* Step 1 */}
        <div className="space-y-10">
          <Reveal>
            <SpotlightCard>
              <div className="p-7">
                <div className="flex items-center gap-4 mb-4">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent text-[14px] font-semibold">1</span>
                  <h3 className="text-[18px] font-semibold text-foreground">Project initiation</h3>
                </div>
                <div className="text-[14px] text-muted leading-relaxed space-y-3">
                  <p>
                    Before anything else, we need to agree on what this project is actually for. A surprising number of software selections begin without a clear answer to: "What problem are we solving?"
                  </p>
                  <p>
                    We establish the governance structure (who makes decisions, how quickly, and how disputes are escalated), define scope and timeline, identify the internal team members who need to be involved, and align selection criteria with your wider business strategy.
                  </p>
                  <p>
                    We also conduct a readiness assessment. If your business is mid-restructure, if your process documentation is non-existent, or if your leadership team cannot agree on priorities, we will tell you. Starting a selection you are not ready for wastes everyone's time and money.
                  </p>
                  <p>The output is a project charter and stakeholder map that keeps the process on track from day one.</p>
                </div>
              </div>
            </SpotlightCard>
          </Reveal>

          {/* Step 2 */}
          <Reveal>
            <SpotlightCard>
              <div className="p-7">
                <div className="flex items-center gap-4 mb-4">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent text-[14px] font-semibold">2</span>
                  <h3 className="text-[18px] font-semibold text-foreground">Scoping and requirements</h3>
                </div>
                <div className="text-[14px] text-muted leading-relaxed space-y-3">
                  <p>
                    This is the most important step in the entire process, and it is the one most organisations rush through or outsource to the wrong people.
                  </p>
                  <p>
                    Requirements gathering is not about asking department heads to write wish lists. It requires structured workshops that map your critical business processes, identify the pain points actually costing you money, and distinguish between requirements that are genuinely essential and those that are merely desirable.
                  </p>
                  <p>
                    We categorise requirements as functional, technical, operational, regulatory, and commercial (including total cost over five years). Each requirement is weighted by business impact. This weighting becomes the foundation for every subsequent evaluation - it ensures you compare vendors on substance, not slide decks. For a broader view, see{" "}
                    <Link href="/resources/guides/how-to-choose-erp/" className="text-accent underline underline-offset-4 decoration-accent/30 hover:decoration-accent/60 transition-colors">our step-by-step ERP selection guide</Link>.
                  </p>
                  <p>The output is a detailed requirements specification that becomes the backbone of your RFP and the benchmark against which every vendor is measured.</p>
                </div>
              </div>
            </SpotlightCard>
          </Reveal>

          {/* Step 3 */}
          <Reveal>
            <SpotlightCard>
              <div className="p-7">
                <div className="flex items-center gap-4 mb-4">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent text-[14px] font-semibold">3</span>
                  <h3 className="text-[18px] font-semibold text-foreground">System integrator shortlist</h3>
                </div>
                <div className="text-[14px] text-muted leading-relaxed space-y-3">
                  <p>
                    The enterprise software market is crowded. Gartner's 2024 Magic Quadrant for Cloud ERP lists over 20 vendors in the mid-market space alone (Gartner, 2024). Add in niche platforms and the number runs into the hundreds. You cannot evaluate them all.
                  </p>
                  <p>
                    We maintain current knowledge of the major platforms - SAP S/4HANA, Microsoft Dynamics 365, Oracle NetSuite, Infor, IFS, Sage, Epicor, and others - along with the system integrators that implement them. Using your weighted requirements, we narrow the field to three to five vendors and their corresponding implementation partners.
                  </p>
                  <p>
                    Shortlisting is based on functional fit, industry experience, total cost of ownership, vendor financial stability, and implementation partner quality. We are matching your scored requirements against verified platform capabilities, not guessing.
                  </p>
                  <p>
                    If you want an overview of the major platforms before we start, read{" "}
                    <Link href="/resources/guides/best-erp-systems/" className="text-accent underline underline-offset-4 decoration-accent/30 hover:decoration-accent/60 transition-colors">our independent guide to the best ERP systems</Link>.
                  </p>
                </div>
              </div>
            </SpotlightCard>
          </Reveal>

          {/* Step 4 */}
          <Reveal>
            <SpotlightCard>
              <div className="p-7">
                <div className="flex items-center gap-4 mb-4">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent text-[14px] font-semibold">4</span>
                  <h3 className="text-[18px] font-semibold text-foreground">RFP preparation</h3>
                </div>
                <div className="text-[14px] text-muted leading-relaxed space-y-3">
                  <p>
                    A good RFP does two things: it forces vendors to respond to your specific requirements (not their generic marketing material), and it creates a level playing field so you can compare responses like-for-like.
                  </p>
                  <p>
                    We write the entire RFP document, including functional requirements, technical requirements, commercial terms, and scenario-based demonstration scripts. The demo scripts matter most. We design them around your real business scenarios - your actual products, customers, and processes - so vendors cannot hide behind rehearsed demos that bear no resemblance to your operation.
                  </p>
                  <p>
                    We also manage the full RFP process: distributing the document, handling vendor queries, collecting and normalising responses, and organising evaluation sessions. This saves your team weeks of effort and ensures no vendor gets an unfair advantage through informal back-channels.
                  </p>
                  <p>
                    If you need a head start,{" "}
                    <Link href="/resources/templates/erp-rfp-template/" className="text-accent underline underline-offset-4 decoration-accent/30 hover:decoration-accent/60 transition-colors">download our ERP RFP template</Link>{" "}
                    to see the structure we use.
                  </p>
                </div>
              </div>
            </SpotlightCard>
          </Reveal>

          {/* Step 5 */}
          <Reveal>
            <SpotlightCard>
              <div className="p-7">
                <div className="flex items-center gap-4 mb-4">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent text-[14px] font-semibold">5</span>
                  <h3 className="text-[18px] font-semibold text-foreground">Vendor selection</h3>
                </div>
                <div className="text-[14px] text-muted leading-relaxed space-y-3">
                  <p>
                    Each vendor is scored against your weighted requirements using{" "}
                    <Link href="/resources/templates/erp-vendor-scorecard/" className="text-accent underline underline-offset-4 decoration-accent/30 hover:decoration-accent/60 transition-colors">our ERP vendor evaluation scorecard template</Link>. Your team participates in every evaluation session, and every score is documented with rationale.
                  </p>
                  <p>
                    We also conduct reference site visits - not the hand-picked references the vendor offers. We identify organisations in your sector running the platform for at least 12 months and have unfiltered conversations about working with the vendor and the system integrator daily.
                  </p>
                  <p>
                    The output is a recommendation report with the evidence, scoring, commercial comparison, and a clear recommendation. Your leadership team makes the final decision with full information, not gut instinct.
                  </p>
                </div>
              </div>
            </SpotlightCard>
          </Reveal>

          {/* Step 6 */}
          <Reveal>
            <SpotlightCard>
              <div className="p-7">
                <div className="flex items-center gap-4 mb-4">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent text-[14px] font-semibold">6</span>
                  <h3 className="text-[18px] font-semibold text-foreground">Contract negotiation</h3>
                </div>
                <div className="text-[14px] text-muted leading-relaxed space-y-3">
                  <p>
                    Enterprise software contracts are written by the vendor's legal team to protect the vendor. We have reviewed hundreds of them and know where the traps sit: uncapped price escalation clauses, vague implementation milestones, inadequate service level commitments, restrictive data portability terms, and penalty structures that punish you for the vendor's failures.
                  </p>
                  <p>
                    We work alongside your legal and procurement teams to negotiate terms that are genuinely fair. Our clients routinely save 15-25% on initial contract value through structured negotiation, and - more importantly - avoid the ongoing cost traps that do not surface until year two or three.
                  </p>
                </div>
              </div>
            </SpotlightCard>
          </Reveal>
        </div>
      </ContentSection>

      {/* AI-enabled evaluation */}
      <ContentSection withBorder>
        <SectionHeader
          eyebrow="Technology"
          title="AI-enabled ERP evaluation"
          subtitle="Software selection has traditionally been manual and document-heavy. COGO has invested in AI-enabled evaluation tools that make the process faster, more consistent, and more thorough."
        />
        <div className="grid md:grid-cols-2 gap-6">
          <Reveal delay={0}>
            <SpotlightCard>
              <div className="p-7">
                <h3 className="text-[18px] font-semibold text-foreground mb-3">
                  Automated requirements analysis
                </h3>
                <p className="text-[14px] text-muted leading-relaxed">
                  Our AI tools process your existing documentation - process maps, system documentation, audit reports, regulatory filings - to identify requirements that your team might miss in workshop settings. In a recent engagement with a food manufacturer, our AI-assisted analysis identified 47 regulatory requirements that had not been captured in the initial workshops.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
          <Reveal delay={0.1}>
            <SpotlightCard>
              <div className="p-7">
                <h3 className="text-[18px] font-semibold text-foreground mb-3">
                  RFP response scoring
                </h3>
                <p className="text-[14px] text-muted leading-relaxed">
                  When vendors return 200-page RFP responses, someone has to read them. Our AI tools pre-score responses against your weighted requirements, flagging gaps, inconsistencies, and non-answers. Your evaluation team still reviews everything, but they start with a structured analysis rather than a blank scorecard.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
          <Reveal delay={0.2}>
            <SpotlightCard>
              <div className="p-7">
                <h3 className="text-[18px] font-semibold text-foreground mb-3">
                  Total cost of ownership modelling
                </h3>
                <p className="text-[14px] text-muted leading-relaxed">
                  Our AI-enabled TCO models pull together licensing costs, implementation fees, support charges, infrastructure costs, and the hidden costs vendors do not mention (data migration, training, customisation, integration). The model runs scenarios across five and ten-year horizons so you see the real cost, not the first-year teaser price.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
          <Reveal delay={0.3}>
            <SpotlightCard>
              <div className="p-7">
                <h3 className="text-[18px] font-semibold text-foreground mb-3">
                  Market intelligence
                </h3>
                <p className="text-[14px] text-muted leading-relaxed">
                  We continuously monitor vendor financials, product roadmaps, customer satisfaction data, and analyst reports. This intelligence is structured and searchable, giving us - and you - a current, evidence-based view of the market rather than relying on reports written six months ago.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
        </div>
        <Reveal>
          <p className="text-[14px] text-muted leading-relaxed mt-8">
            This is not AI replacing human judgement. It is AI handling the volume and consistency problems so your evaluation team can focus on the decisions that actually require experience and business knowledge.
          </p>
        </Reveal>
      </ContentSection>

      <PageImage src="/images/hero-factory-discussion.jpg" alt="Consultants discussing process requirements in a manufacturing facility" />

      {/* Why you shouldn't let your SI pick */}
      <ContentSection withBorder withGrain>
        <SectionHeader
          eyebrow="Independence"
          title="Why you should not let your system integrator pick your software"
          subtitle="This is the single most common mistake we see in enterprise software selection, and it costs organisations millions."
        />
        <Prose>
          <p>
            Here is how it happens. Your organisation decides it needs a new ERP. Someone suggests talking to a system integrator - perhaps one you have worked with before. The SI runs a few workshops, looks at your requirements, and recommends a platform. Conveniently, it is the platform they specialise in implementing.
          </p>
          <p>You have just let the builder choose the building materials.</p>
          <p>
            The conflict of interest is structural, not personal. System integrators earn their revenue from implementation projects. They are incentivised to recommend the platform they know best (it reduces their risk and lets them staff from their existing bench), not the platform that is the best fit for your business.
          </p>
          <p>
            According to a 2023 Mint Jutras study, organisations that used an independent selection advisor were 2.5 times more likely to complete their ERP project on time and on budget than those that relied on vendor-aligned advice (Mint Jutras, 2023). The reason is straightforward: independent advisors evaluate the full market. Vendor-aligned advisors evaluate their own product.
          </p>
          <p>
            There is a subtler problem too. An SI that recommends the software and then implements it has no independent quality benchmark. If things go wrong, who holds them accountable? Not the software vendor - they have made their sale. Not the SI - they will blame your requirements or your data. You need someone who can challenge the SI's recommendations, review their delivery, and hold them to the contract.
          </p>
          <p>
            That someone is an independent software selection consultant. For ongoing oversight during implementation, see our{" "}
            <Link href="/services/implementation-support/">client-side ERP implementation consulting</Link> service.
          </p>
        </Prose>
      </ContentSection>

      {/* How we evaluate SIs */}
      <ContentSection withBorder>
        <SectionHeader
          eyebrow="Evaluation"
          title="How we evaluate system integrators"
          subtitle="Choosing the right software is only half the equation. The right system integrator matters just as much - and is arguably harder to assess before you have committed."
        />
        <div className="grid md:grid-cols-2 gap-6">
          <Reveal delay={0}>
            <SpotlightCard>
              <div className="p-7">
                <h3 className="text-[18px] font-semibold text-foreground mb-3">Industry experience</h3>
                <p className="text-[14px] text-muted leading-relaxed">
                  Not "we have done projects in your sector" - we want evidence. How many implementations in your specific industry? What were the outcomes? Can they provide references from organisations of similar size and complexity?
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
          <Reveal delay={0.1}>
            <SpotlightCard>
              <div className="p-7">
                <h3 className="text-[18px] font-semibold text-foreground mb-3">Team quality</h3>
                <p className="text-[14px] text-muted leading-relaxed">
                  An SI's proposal often features their senior people. The team that does the work is frequently more junior. We insist on meeting the proposed project team and verifying their experience against your project's requirements.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
          <Reveal delay={0.2}>
            <SpotlightCard>
              <div className="p-7">
                <h3 className="text-[18px] font-semibold text-foreground mb-3">Implementation methodology</h3>
                <p className="text-[14px] text-muted leading-relaxed">
                  Every SI claims to have a proven methodology. We review the detail: how they manage scope, handle change requests, approach data migration, structure testing, and transition to support. The rigour of their methodology tells you a lot about how the project will actually run.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
          <Reveal delay={0.3}>
            <SpotlightCard>
              <div className="p-7">
                <h3 className="text-[18px] font-semibold text-foreground mb-3">Commercial model</h3>
                <p className="text-[14px] text-muted leading-relaxed">
                  Fixed price, time and materials, or hybrid? We analyse the commercial structure, benchmark it against market rates, and identify where costs are likely to escalate. A "fixed price" proposal with 150 assumptions is not really fixed price.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
          <Reveal delay={0.4}>
            <SpotlightCard>
              <div className="p-7">
                <h3 className="text-[18px] font-semibold text-foreground mb-3">References and track record</h3>
                <p className="text-[14px] text-muted leading-relaxed">
                  We do not rely on the references the SI provides. We independently identify organisations that have worked with the SI on comparable projects and have candid conversations about the experience.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
          <Reveal delay={0.5}>
            <SpotlightCard>
              <div className="p-7">
                <h3 className="text-[18px] font-semibold text-foreground mb-3">Cultural fit</h3>
                <p className="text-[14px] text-muted leading-relaxed">
                  An SI that works well with a large enterprise may struggle with a mid-market organisation where decisions are made faster and governance is lighter. We assess how the SI's working style aligns with your organisation's culture.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
        </div>
        <Reveal>
          <p className="text-[14px] text-muted leading-relaxed mt-8">
            The output is a scored evaluation that lets you compare system integrators with the same rigour you applied to the software itself.
          </p>
        </Reveal>
      </ContentSection>

      {/* Download checklist */}
      <ContentSection withBorder withGrain>
        <SectionHeader
          eyebrow="Resources"
          title="Download: ERP selection checklist"
          subtitle="We have distilled our methodology into a practical checklist covering every phase from project initiation to contract signature."
        />
        <Prose>
          <p>The checklist includes:</p>
          <ul>
            <li>Governance and team setup requirements</li>
            <li>Requirements gathering workshop templates</li>
            <li>Vendor shortlisting criteria</li>
            <li>RFP content structure and scoring framework</li>
            <li>Demonstration script guidance</li>
            <li>Reference site visit question bank</li>
            <li>Contract review checkpoints</li>
            <li>Common pitfalls and how to avoid them</li>
          </ul>
          <p>It is free, it is practical, and it is based on more than a decade of client-side selection work.</p>
          <p>
            If you want more detailed guidance, read{" "}
            <Link href="/resources/guides/how-to-choose-erp/">our step-by-step ERP selection guide</Link> or explore{" "}
            <Link href="/services/erp-consulting/">our ERP consulting and advisory practice</Link>.
          </p>
        </Prose>
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
              <h3 className="text-[18px] font-semibold text-foreground mb-3">How long does a software selection process take?</h3>
              <p className="text-[15px] text-muted leading-relaxed">
                A well-run selection process typically takes 12 to 16 weeks from project initiation to vendor recommendation. Contract negotiation adds another four to eight weeks. Timelines vary depending on the complexity of your requirements, the number of business units involved, and how quickly your internal team can commit time to workshops and evaluations. Rushing the process to meet an artificial deadline almost always leads to a worse decision.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div>
              <h3 className="text-[18px] font-semibold text-foreground mb-3">How much does independent software selection consulting cost?</h3>
              <p className="text-[15px] text-muted leading-relaxed">
                Our fees for a full 6-step engagement typically range from EUR 50,000 to EUR 150,000, depending on complexity and scope. That sounds significant until you compare it to the cost of choosing the wrong system. With average ERP implementations costing USD 9.5 million (Panorama Consulting, 2024), a 15% saving through better selection and negotiation covers our fees several times over.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div>
              <h3 className="text-[18px] font-semibold text-foreground mb-3">Can you help with software other than ERP?</h3>
              <p className="text-[15px] text-muted leading-relaxed">
                Yes. Our methodology applies to any enterprise software decision: CRM, WMS, EQMS, LIMS, HRIS, and specialist industry platforms. The principles are the same - structured requirements, objective evaluation, and independent advice. If you are choosing a system that will cost six figures or more, the process should be rigorous.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div>
              <h3 className="text-[18px] font-semibold text-foreground mb-3">What if we have already shortlisted vendors?</h3>
              <p className="text-[15px] text-muted leading-relaxed">
                That is fine. We regularly join processes already underway. We can pick up from whatever stage you have reached - validating your shortlist, writing the RFP, running the evaluation, or negotiating the contract. What we will not do is rubber-stamp a decision that has already been made. If your shortlist is missing a vendor that should be there, we will tell you.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div>
              <h3 className="text-[18px] font-semibold text-foreground mb-3">Do you work with specific ERP vendors or platforms?</h3>
              <p className="text-[15px] text-muted leading-relaxed">
                No, and that is the point. We hold no certifications, partnerships, or reseller agreements with any vendor. We maintain current knowledge of SAP, Microsoft, Oracle, Infor, IFS, Sage, Epicor, and others, plus industry-specific systems for food, pharma, and professional services. Our recommendations are based on fit, not affiliation. For more, see{" "}
                <Link href="/resources/guides/best-erp-systems/" className="text-accent underline underline-offset-4 decoration-accent/30 hover:decoration-accent/60 transition-colors">our independent guide to the best ERP systems</Link>.
              </p>
            </div>
          </Reveal>
        </div>
      </ContentSection>

      <PageCTA
        title="Start your software selection with independent advice"
        subtitle="Book a 30-minute call with one of our partners. No pitch, no pressure. Tell us what you are facing and we will tell you honestly if we can help."
        buttonText="Book a call"
        buttonHref="/contact/"
      />
    </PageLayout>
  );
}
