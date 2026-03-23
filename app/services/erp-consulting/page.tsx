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
  title: "Independent ERP Consulting | Vendor-Neutral Advice | COGO",
  description:
    "ERP consulting from independent advisors with no vendor ties. We help you select, evaluate, and implement the right ERP for your business.",
};

export default function ERPConsultingPage() {
  return (
    <PageLayout>
      <PageHeader
        eyebrow="ERP Consulting"
        title="Independent ERP consulting for UK and Ireland businesses"
        subtitle="COGO is an independent ERP consultancy with no vendor partnerships, no reseller agreements, and no implementation revenue. Your ERP consultant works exclusively on your side of the table."
      />

      {/* Intro */}
      <ContentSection withBorder>
        <Prose>
          <p>
            Most ERP consulting firms have a favourite answer before you have even asked the question. They hold vendor partnerships, earn referral fees, and build their revenue model around steering you towards one platform. That is not consulting. That is selling.
          </p>
          <p>
            When you engage us for ERP consulting, the advice you get is shaped by your operations, your budget, and your growth plans - not by which software vendor is paying the highest commission this quarter.
          </p>
          <p>
            We work with mid-market and enterprise organisations across Ireland and the UK, typically businesses turning over EUR 20m to EUR 500m that have outgrown their current systems or are facing a forced upgrade. Our clients include food manufacturers running batch-process operations, pharmaceutical companies navigating regulatory complexity, dairy processors managing co-op structures, and professional services firms that need project accounting done properly.
          </p>
          <p>
            What does that look like in practice? We help you define what you actually need from an ERP system, evaluate the options without bias, run a structured selection process, negotiate contracts that protect your interests, and stay involved through implementation to make sure what was promised is what gets delivered. If you want the full picture, read about{" "}
            <Link href="/services/software-selection/">our 6-step ERP evaluation methodology</Link> or see{" "}
            <Link href="/resources/guides/best-erp-systems/">our independent guide to the best ERP systems</Link>.
          </p>
          <p>
            The result is a better decision, a fairer contract, and an implementation that does not go sideways in month three.
          </p>
        </Prose>
      </ContentSection>

      <PageImage src="/images/hero-whiteboard.jpg" alt="COGO technology agnostic consulting presentation showing ERP vendors evaluated" />

      {/* Our ERP consulting services */}
      <ContentSection withBorder withGrain>
        <SectionHeader
          eyebrow="Our Services"
          title="Our ERP consulting services"
        />
        <div className="grid md:grid-cols-2 gap-6">
          <Reveal delay={0}>
            <SpotlightCard>
              <div className="p-7">
                <h3 className="text-[18px] font-semibold text-foreground mb-3">
                  ERP selection and evaluation
                </h3>
                <p className="text-[14px] text-muted leading-relaxed">
                  Choosing an ERP system is one of the most expensive technology decisions your organisation will make. Panorama Consulting's 2024 ERP Report found that the average ERP implementation costs USD 9.5 million and takes 16 months. Get the selection wrong and you are living with the consequences for a decade or more.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
          <Reveal delay={0.1}>
            <SpotlightCard>
              <div className="p-7">
                <h3 className="text-[18px] font-semibold text-foreground mb-3">
                  Vendor shortlisting and RFP management
                </h3>
                <p className="text-[14px] text-muted leading-relaxed">
                  The ERP market has become crowded and confusing. Gartner's 2024 Magic Quadrant for Cloud ERP lists more than 20 vendors in the mid-market and enterprise space alone. We narrow the field to three to five vendors that genuinely fit your requirements.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
          <Reveal delay={0.2}>
            <SpotlightCard>
              <div className="p-7">
                <h3 className="text-[18px] font-semibold text-foreground mb-3">
                  Contract negotiation support
                </h3>
                <p className="text-[14px] text-muted leading-relaxed">
                  ERP contracts are complex, and they are written by the vendor's legal team to protect the vendor's interests. Our clients routinely save 15-25% on their initial contract value through better negotiation.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
          <Reveal delay={0.3}>
            <SpotlightCard>
              <div className="p-7">
                <h3 className="text-[18px] font-semibold text-foreground mb-3">
                  ERP strategy and roadmap development
                </h3>
                <p className="text-[14px] text-muted leading-relaxed">
                  Not every organisation is ready to buy an ERP system tomorrow. We develop a technology roadmap that connects your ERP strategy to your wider business objectives, including a realistic budget envelope and phased implementation approach.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
          <Reveal delay={0.4}>
            <SpotlightCard className="md:col-span-2">
              <div className="p-7">
                <h3 className="text-[18px] font-semibold text-foreground mb-3">
                  Post-selection implementation oversight
                </h3>
                <p className="text-[14px] text-muted leading-relaxed">
                  Selecting the right ERP system is only half the battle. According to Panorama Consulting, 56% of ERP projects experience cost overruns, and 46% deliver no measurable business benefits post go-live. Our{" "}
                  <Link href="/services/implementation-support/" className="text-accent underline underline-offset-4 decoration-accent/30 hover:decoration-accent/60 transition-colors">client-side ERP implementation consulting</Link>{" "}
                  keeps your interests protected throughout.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
        </div>
      </ContentSection>

      {/* ERP selection detail */}
      <ContentSection withBorder>
        <SectionHeader
          eyebrow="Selection"
          title="ERP selection and evaluation in depth"
        />
        <Prose>
          <p>
            Our ERP selection process starts with understanding your business, not reviewing vendor demos. We map your critical processes, identify the pain points that are actually costing you money, and build a requirements specification that reflects how your business operates today and where it is heading over the next five to seven years.
          </p>
          <p>
            From there, we score and weight those requirements so you can compare vendors on substance rather than presentation skills. ERP vendors are very good at demos. They have rehearsed them thousands of times. Your job is to see past the demo and understand what the software will actually do for your specific operation. That is what we help you do.
          </p>
          <p>
            We use structured evaluation criteria across functionality, total cost of ownership, vendor viability, implementation approach, and ongoing support. Every recommendation comes with documented rationale. No black boxes, no gut feelings, no "trust us." For a broader view of how we approach this, see{" "}
            <Link href="/resources/guides/how-to-choose-erp/">how to choose an ERP system</Link>.
          </p>
        </Prose>
      </ContentSection>

      {/* Vendor shortlisting detail */}
      <ContentSection withBorder withGrain>
        <SectionHeader
          eyebrow="RFP Management"
          title="Software vendor shortlisting and RFP management"
        />
        <Prose>
          <p>
            We maintain detailed, current knowledge of the major ERP platforms - SAP S/4HANA, Microsoft Dynamics 365, Oracle NetSuite, Infor, IFS, Sage, Epicor, and others - along with industry-specific systems for food, pharma, and manufacturing. If you are specifically looking at SAP, we also offer dedicated{" "}
            <Link href="/services/sap-consulting/">SAP consulting services for Ireland and the UK</Link>.
          </p>
          <p>
            Our shortlisting process narrows the field to three to five vendors that genuinely fit your requirements. We then manage the full RFP process: writing the RFP document, managing vendor responses, organising scripted demonstrations based on your real scenarios, and facilitating the evaluation scoring. This saves your team weeks of effort and ensures you are comparing like with like.
          </p>
        </Prose>
      </ContentSection>

      {/* Contract negotiation detail */}
      <ContentSection withBorder>
        <SectionHeader
          eyebrow="Negotiation"
          title="Contract negotiation support"
        />
        <Prose>
          <p>
            Licensing models have shifted dramatically in recent years, with most vendors pushing subscription-based pricing that can escalate significantly after the initial term.
          </p>
          <p>
            We have reviewed hundreds of ERP contracts and know where the traps sit: uncapped price escalation clauses, vague implementation milestones, inadequate service level commitments, restrictive data portability terms, and penalty structures that punish you for the vendor's delays.
          </p>
          <p>
            We do not replace your legal team, but we work alongside them to make sure the commercial and technical terms are fair. Our clients routinely save 15-25% on their initial contract value through better negotiation, and more importantly, they avoid the ongoing cost traps that do not show up until year two or three.
          </p>
        </Prose>
      </ContentSection>

      {/* ERP strategy detail */}
      <ContentSection withBorder withGrain>
        <SectionHeader
          eyebrow="Strategy"
          title="ERP strategy and roadmap development"
        />
        <Prose>
          <p>
            Some organisations need to step back and work out what they are actually trying to achieve before they start talking to vendors.
          </p>
          <p>
            Our ERP strategy work helps you answer the fundamental questions: Do you need a new ERP, or can your current system be extended? Should you go cloud, on-premise, or hybrid? Do you need one integrated platform or a best-of-breed approach with specialist systems? What is the realistic timeline, and how do you phase the rollout to manage risk?
          </p>
          <p>
            We develop a technology roadmap that connects your ERP strategy to your wider business objectives. This includes a realistic budget envelope, a phased implementation approach, a change management plan, and a governance structure that keeps the programme on track. The roadmap becomes your reference point for every technology decision over the next three to five years.
          </p>
        </Prose>
      </ContentSection>

      {/* Implementation oversight detail */}
      <ContentSection withBorder>
        <SectionHeader
          eyebrow="Oversight"
          title="Post-selection implementation oversight"
        />
        <Prose>
          <p>
            The gap between what was sold and what gets delivered is where most ERP projects fail. Our{" "}
            <Link href="/services/implementation-support/">client-side ERP implementation consulting</Link>{" "}
            keeps your interests protected throughout the implementation. We act as your independent eyes and ears, monitoring progress against the agreed plan, challenging the system integrator when quality drops or scope creeps, and making sure your team has the support they need to manage the change.
          </p>
          <p>
            This is not about replacing your SI - it is about making sure they deliver what they promised, on time and on budget. We attend steering committees, review deliverables, validate testing, and flag risks before they become problems. Think of it as an insurance policy on your largest technology investment.
          </p>
        </Prose>
      </ContentSection>

      {/* What does an ERP consultant do? */}
      <ContentSection withBorder withGrain>
        <SectionHeader
          eyebrow="Roles Explained"
          title="What does an ERP consultant do?"
        />
        <Prose>
          <p>
            If you have searched for "ERP consultant," you have probably noticed the results are mostly job listings. That makes sense - it is a broad term. But there is an important distinction between someone who configures ERP software for a living and someone who advises you on which ERP software to buy and how to get the most from it. Both are called ERP consultants. They do very different things.
          </p>
          <h3>The advisory ERP consultant</h3>
          <p>
            An advisory ERP consultant (that is what we are) works on the client side. Your consultant helps you define your requirements, evaluate vendors, select the right system, negotiate contracts, and oversee implementation. They do not sell software, they do not implement software, and they do not earn money from any particular vendor winning your business.
          </p>
          <p>
            Their value comes from independence. They have seen dozens of ERP projects across multiple industries and multiple platforms. They know what works, what does not, and where things typically go wrong. According to Mint Jutras, organisations that use independent selection advisors are 2.5 times more likely to complete their ERP project on time and on budget (Mint Jutras, 2023).
          </p>
          <p>
            An advisory ERP consultant typically gets involved early - often months before any vendor is contacted - and stays involved through go-live. They are your sounding board, your quality control, and your negotiator.
          </p>
          <h3>The ERP consultant vs the system integrator</h3>
          <p>
            A system integrator (SI) is a firm that implements ERP software. They employ technical consultants who configure, customise, and deploy a specific platform. Accenture, Deloitte, Capgemini, and dozens of smaller firms operate in this space. They are essential to getting your ERP system live, but they are not independent. They earn their revenue from implementation work, and in many cases, they hold vendor partnerships that shape their recommendations.
          </p>
          <p>
            Here is the practical difference: a system integrator wants to win your implementation project. An independent ERP consultant wants you to pick the right system and the right integrator, and then holds both accountable during delivery.
          </p>
          <p>You need both. But you need the independent advisor first.</p>
        </Prose>

        {/* Comparison table */}
        <Reveal>
          <div className="mt-12 overflow-x-auto">
            <table className="w-full text-[14px] text-muted">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 pr-4 text-foreground/80 font-medium"></th>
                  <th className="text-left py-3 px-4 text-accent font-medium">Advisory ERP consultant</th>
                  <th className="text-left py-3 pl-4 text-foreground/80 font-medium">System integrator</th>
                </tr>
              </thead>
              <tbody className="[&_tr]:border-b [&_tr]:border-border">
                <tr>
                  <td className="py-3 pr-4 text-foreground/80">Works for</td>
                  <td className="py-3 px-4">You, the client</td>
                  <td className="py-3 pl-4">Software vendor or independently</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 text-foreground/80">Revenue model</td>
                  <td className="py-3 px-4">Advisory fees</td>
                  <td className="py-3 pl-4">Implementation fees, often vendor-linked</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 text-foreground/80">Platform bias</td>
                  <td className="py-3 px-4">None</td>
                  <td className="py-3 pl-4">Typically specialises in one or two platforms</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 text-foreground/80">Involvement</td>
                  <td className="py-3 px-4">Selection through go-live oversight</td>
                  <td className="py-3 pl-4">Implementation and configuration</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 text-foreground/80">Independence</td>
                  <td className="py-3 px-4">Fully independent</td>
                  <td className="py-3 pl-4">Varies - often vendor-partnered</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Reveal>
      </ContentSection>

      {/* How to choose an ERP consultant */}
      <ContentSection withBorder>
        <SectionHeader
          eyebrow="Selection Criteria"
          title="How to choose an ERP consultant"
        />
        <Prose>
          <h3>Independent vs vendor-tied</h3>
          <p>
            This is the single most important question. Ask any prospective ERP consultant: "Do you hold partnerships or reseller agreements with any ERP vendor?" If the answer is yes, their advice comes with a conflict of interest. That does not make them bad people - it makes them salespeople with a consulting title.
          </p>
          <p>
            An independent ERP consultancy has no financial relationship with any software vendor. Their only source of revenue is your advisory fee. That alignment matters enormously when you are making a decision that will cost your organisation millions of euros over the next decade. Read more about{" "}
            <Link href="/about/why-cogo/">what makes client-side consulting different</Link>.
          </p>
          <h3>Credentials and experience to look for</h3>
          <p>ERP consulting is an unregulated field. Anyone can call themselves an ERP consultant. Here is what actually matters:</p>
          <p>
            <strong>Industry experience.</strong> Your ERP consultant should have deep experience in your specific industry. ERP requirements for a food manufacturer running batch processing are fundamentally different from those of a professional services firm. Ask for case studies in your sector.
          </p>
          <p>
            <strong>Platform breadth.</strong> A good independent ERP consultant should have working knowledge of at least five to seven major ERP platforms. If they only know SAP and Oracle, their "independent" advice will always land on SAP or Oracle.
          </p>
          <p>
            <strong>Process expertise.</strong> The best ERP consultants are operations people first and technology people second. They understand manufacturing processes, supply chain management, financial consolidation, and regulatory compliance. The technology is just the enabler.
          </p>
          <p>
            <strong>Track record.</strong> Ask for references. Speak to previous clients. Find out not just whether the project was successful, but whether the consultant added value during the difficult moments - scope disputes, budget overruns, vendor conflicts.
          </p>
          <p>
            <strong>Methodology.</strong> A credible ERP consultancy has a documented, repeatable methodology for selection, evaluation, and implementation oversight. If they cannot show you their process, they are making it up as they go.
          </p>
          <h3>Questions to ask before hiring an ERP consultant</h3>
          <p>Before you engage any ERP consulting firm, ask these questions:</p>
          <ol>
            <li>Do you hold any vendor partnerships, reseller agreements, or referral arrangements?</li>
            <li>How many ERP selection projects have you completed in the past three years?</li>
            <li>Can you provide references from clients in my industry?</li>
            <li>What is your methodology for requirements gathering and vendor evaluation?</li>
            <li>How do you handle situations where your recommendation differs from what the client wants to hear?</li>
            <li>What does your fee structure look like, and is any part of it contingent on a vendor being selected?</li>
            <li>Will you stay involved through implementation, and if so, in what capacity?</li>
            <li>What ERP platforms have you evaluated in the past 12 months?</li>
          </ol>
          <p>If they hesitate on question one or question six, keep looking.</p>
        </Prose>
      </ContentSection>

      {/* Industries */}
      <ContentSection withBorder withGrain>
        <SectionHeader
          eyebrow="Industries"
          title="Industries we serve"
          subtitle="Our ERP consultants have deep sector experience across industries where getting the system right is not optional - it is operational survival."
        />
        <div className="grid md:grid-cols-2 gap-6">
          <Reveal delay={0}>
            <SpotlightCard>
              <div className="p-7">
                <h3 className="text-[18px] font-semibold text-foreground mb-3">
                  Food manufacturing
                </h3>
                <p className="text-[14px] text-muted leading-relaxed">
                  Batch traceability, recipe management, co-product handling, and compliance with BRCGS and FSSC 22000. ERP mistakes in food manufacturing can mean product recalls. Read more about{" "}
                  <Link href="/industries/food-manufacturing/" className="text-accent underline underline-offset-4 decoration-accent/30 hover:decoration-accent/60 transition-colors">ERP for food manufacturing companies</Link>.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
          <Reveal delay={0.1}>
            <SpotlightCard>
              <div className="p-7">
                <h3 className="text-[18px] font-semibold text-foreground mb-3">
                  Pharmaceutical manufacturing
                </h3>
                <p className="text-[14px] text-muted leading-relaxed">
                  GxP validation, serialisation, batch record management, and compliance with HPRA and MHRA requirements. Regulatory complexity demands ERP systems that are built for purpose. See{" "}
                  <Link href="/industries/pharmaceutical/" className="text-accent underline underline-offset-4 decoration-accent/30 hover:decoration-accent/60 transition-colors">ERP systems for pharmaceutical manufacturing</Link>.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
          <Reveal delay={0.2}>
            <SpotlightCard>
              <div className="p-7">
                <h3 className="text-[18px] font-semibold text-foreground mb-3">
                  Dairy processing
                </h3>
                <p className="text-[14px] text-muted leading-relaxed">
                  Co-op structures, milk pool management, seasonal production variability, and sustainability reporting for Bord Bia's Origin Green programme. Dairy processors need ERP systems that can handle complexity other manufacturers never face.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
          <Reveal delay={0.3}>
            <SpotlightCard>
              <div className="p-7">
                <h3 className="text-[18px] font-semibold text-foreground mb-3">
                  Healthcare and medtech
                </h3>
                <p className="text-[14px] text-muted leading-relaxed">
                  UDI compliance, quality management system integration, and supply chain visibility. Medical device manufacturers face both FDA 21 CFR Part 11 and EU MDR requirements, and your ERP system needs to support both.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
          <Reveal delay={0.4}>
            <SpotlightCard className="md:col-span-2">
              <div className="p-7">
                <h3 className="text-[18px] font-semibold text-foreground mb-3">
                  Professional services
                </h3>
                <p className="text-[14px] text-muted leading-relaxed">
                  Project accounting, resource planning, revenue recognition under IFRS 15, and multi-entity consolidation. Most generic ERP systems handle professional services badly. You need a system designed for it.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
        </div>
      </ContentSection>

      {/* Testimonials */}
      <ContentSection withBorder>
        <SectionHeader
          eyebrow="Testimonials"
          title="What our clients say"
        />
        <div className="space-y-8">
          <Reveal>
            <blockquote className="border-l-2 border-accent/30 pl-6">
              <p className="text-[15px] text-muted leading-relaxed italic">
                "COGO helped us avoid what would have been a EUR 2 million mistake. The vendor our internal team favoured could not actually meet our batch traceability requirements. COGO's structured evaluation process made that clear before we signed anything."
              </p>
              <footer className="mt-3 text-[13px] text-muted/70">
                Operations Director, Irish food manufacturer
              </footer>
            </blockquote>
          </Reveal>
          <Reveal delay={0.1}>
            <blockquote className="border-l-2 border-accent/30 pl-6">
              <p className="text-[15px] text-muted leading-relaxed italic">
                "Having an independent ERP consultant at the table changed the dynamic entirely. The vendors knew they were being held to a higher standard, and the contract we ended up with was significantly better than the first draft."
              </p>
              <footer className="mt-3 text-[13px] text-muted/70">
                CFO, UK pharmaceutical company
              </footer>
            </blockquote>
          </Reveal>
          <Reveal delay={0.2}>
            <blockquote className="border-l-2 border-accent/30 pl-6">
              <p className="text-[15px] text-muted leading-relaxed italic">
                "We had been through two failed ERP implementations before we engaged COGO. The difference was having someone who worked for us, not for the software vendor."
              </p>
              <footer className="mt-3 text-[13px] text-muted/70">
                CEO, Irish dairy processor
              </footer>
            </blockquote>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="text-[13px] text-muted/70 italic">
              Case study details available on request. We are happy to connect you with clients who have agreed to serve as references.
            </p>
          </Reveal>
        </div>
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
              <h3 className="text-[18px] font-semibold text-foreground mb-3">What does an ERP consultant do?</h3>
              <p className="text-[15px] text-muted leading-relaxed">
                An ERP consultant helps organisations select, evaluate, and implement enterprise resource planning (ERP) systems. There are two types: advisory consultants who work on the client side to manage the selection process and oversee implementation, and technical consultants who work for system integrators to configure and deploy the software. At COGO, we operate exclusively on the advisory side. We do not sell or implement software. We help you find the right system, negotiate a fair contract, and make sure the implementation delivers what was promised.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div>
              <h3 className="text-[18px] font-semibold text-foreground mb-3">How much does an ERP consultant cost?</h3>
              <p className="text-[15px] text-muted leading-relaxed">
                Independent ERP consulting fees in the UK and Ireland typically range from EUR 1,200 to EUR 2,500 per day for senior consultants, or can be structured as fixed-fee engagements for defined scopes like ERP selection or RFP management. A full ERP selection project - from requirements gathering through vendor selection and contract negotiation - typically runs between EUR 40,000 and EUR 120,000 depending on the complexity of your organisation. That might sound like a significant investment, but set it against the average ERP implementation cost of USD 9.5 million (Panorama Consulting, 2024). Getting the selection wrong costs far more than getting the advice right.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div>
              <h3 className="text-[18px] font-semibold text-foreground mb-3">Do I need an ERP consultant?</h3>
              <p className="text-[15px] text-muted leading-relaxed">
                Not always. If your organisation has deep internal experience with ERP selection, has recently been through a successful ERP project, and has the bandwidth to manage a six to twelve month selection process while running the business, you might manage without external support. In practice, most mid-market organisations do not have that combination. The ERP market changes rapidly, vendor pricing strategies are complex, and your team's day jobs do not stop because you are selecting a new system. An independent ERP consultant brings current market knowledge, structured methodology, and negotiation experience that most internal teams simply do not have.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div>
              <h3 className="text-[18px] font-semibold text-foreground mb-3">What is the difference between an ERP consultant and a system integrator?</h3>
              <p className="text-[15px] text-muted leading-relaxed">
                An ERP consultant (in the advisory sense) works for you. They help you define requirements, evaluate vendors, and select the right system. They have no financial relationship with any ERP vendor. A system integrator works to implement a specific ERP platform. They employ technical consultants who configure and deploy the software. System integrators often hold vendor partnerships and specialise in one or two platforms. Both roles are essential - you need an independent advisor to help you choose, and you need a system integrator to help you implement. The key is to engage them in the right order: advisor first, integrator second.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div>
              <h3 className="text-[18px] font-semibold text-foreground mb-3">How do I choose an independent ERP consultant?</h3>
              <p className="text-[15px] text-muted leading-relaxed">
                Start with independence. Any ERP consultant who holds vendor partnerships, reseller agreements, or earns referral fees from software vendors is not truly independent. Beyond that, look for industry-specific experience (ERP requirements vary enormously between sectors), a documented methodology for selection and evaluation, platform breadth (knowledge across five or more major ERP systems), and verifiable client references. Ask to speak to previous clients, and ask those clients specifically about how the consultant handled difficult situations - scope disputes, unexpected costs, or vendor conflicts. That is where the real value of a good ERP consultant shows up.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div>
              <h3 className="text-[18px] font-semibold text-foreground mb-3">How long does ERP selection take?</h3>
              <p className="text-[15px] text-muted leading-relaxed">
                A structured ERP selection process typically takes four to six months from initial requirements gathering to vendor selection and contract signature. This includes requirements definition (four to six weeks), market scan and vendor shortlisting (two to three weeks), RFP preparation and vendor response (four to six weeks), vendor demonstrations and evaluation scoring (three to four weeks), and contract negotiation (three to six weeks). Rushing the process is one of the most common mistakes organisations make. A study by Panorama Consulting found that organisations spending less than six months on selection were significantly more likely to experience budget overruns and missed deadlines during implementation. Take the time to get it right. The implementation will go better for it.
              </p>
            </div>
          </Reveal>
        </div>
      </ContentSection>

      {/* Author */}
      <ContentSection withBorder>
        <Reveal>
          <p className="text-[13px] text-muted/70 italic leading-relaxed">
            Written by Laurence Phelan, Director, COGO Consulting. Laurence has spent 20+ years advising organisations across Ireland and the UK on ERP selection, technology strategy, and business transformation. He has led ERP advisory engagements across food manufacturing, pharmaceutical, dairy, healthcare, and professional services sectors.
          </p>
        </Reveal>
      </ContentSection>

      <PageCTA
        title="Ready to talk?"
        subtitle="If you are facing an ERP decision and want independent advice from someone who is not trying to sell you software, we should talk. Whether you are at the early strategy stage or already deep into vendor conversations and feeling uncertain, a conversation with an experienced ERP consultant will give you clarity."
        buttonText="Book a call with an independent ERP consultant"
        buttonHref="/contact/"
      />
    </PageLayout>
  );
}
