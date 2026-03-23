import type { Metadata } from "next";
import PageLayout from "../../components/PageLayout";
import PageHeader from "../../components/PageHeader";
import ContentSection, { SectionHeader } from "../../components/ContentSection";
import Prose from "../../components/Prose";
import Reveal from "../../components/Reveal";
import SpotlightCard from "../../components/SpotlightCard";
import PageCTA from "../../components/PageCTA";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Business Transformation Consulting | COGO",
  description:
    "Independent business transformation consulting for UK and Irish businesses. Strategy, process, technology, and change management from practitioners.",
};

export default function BusinessTransformationPage() {
  return (
    <PageLayout>
      <PageHeader
        eyebrow="Business Transformation"
        title="Business transformation consulting that actually works"
        subtitle="Most business transformation programmes fail. McKinsey puts the failure rate at around 70%. We help you land in the 30% that succeeds."
      />

      {/* Intro */}
      <ContentSection withBorder>
        <Prose>
          <p>
            Most business transformation programmes fail. That is not opinion or scaremongering. McKinsey&apos;s research (2023) puts the failure rate at around 70%. BCG&apos;s own studies land in a similar range. The numbers have barely moved in two decades.
          </p>
          <p>
            So why do organisations keep getting it wrong? And more importantly, how do you make sure yours is in the 30% that succeeds?
          </p>
          <p>
            That is what this page is about. Not theory. Not a framework you can hang on the wall and forget about. Practical, tested guidance on business transformation from consultants who have actually done it, inside real companies, with real budgets, real deadlines, and real people who did not ask for their jobs to change.
          </p>
        </Prose>
      </ContentSection>

      {/* What is business transformation? */}
      <ContentSection withBorder withGrain>
        <SectionHeader
          eyebrow="Definition"
          title="What is business transformation?"
        />
        <Prose>
          <p>
            Business transformation is the fundamental rethinking and redesign of how an organisation operates, including its processes, technology, people, and strategy, to achieve a measurable step-change in performance. It goes well beyond incremental improvement. Where continuous improvement tweaks what you already do, business transformation changes what you do and how you do it.
          </p>
          <p>
            In practical terms, a business transformation programme typically involves redesigning core business processes, selecting and implementing new technology (often an ERP system or suite of integrated platforms), restructuring teams or roles, and aligning the entire effort to a clear strategic goal. It is not a single project. It is a coordinated programme of change that touches every part of the organisation.
          </p>
          <p>
            Here is the part that most consultancies gloss over: business transformation is hard. Gartner&apos;s 2023 research found that only 34% of organisational change initiatives are a &quot;clear success.&quot; The reasons are consistent. Poor planning, technology chosen for the wrong reasons, no executive sponsorship, and above all, underestimating the human side of change. According to Prosci&apos;s Best Practices in Change Management report (2023), projects with excellent change management were six times more likely to meet objectives than those with poor change management. If your business transformation strategy does not account for people, it will not work.
          </p>
        </Prose>
      </ContentSection>

      {/* COGO's services */}
      <ContentSection withBorder>
        <SectionHeader
          eyebrow="Our Services"
          title="COGO's business transformation services"
          subtitle="We are not a Big Four firm that will send you a team of graduates with a slide deck. COGO is an independent, client-side consultancy. That means we work for you, not for a software vendor."
        />
        <div className="grid md:grid-cols-2 gap-6">
          <Reveal delay={0}>
            <SpotlightCard>
              <div className="p-7">
                <h3 className="text-[18px] font-semibold text-white/90 mb-3">
                  Digital strategy
                </h3>
                <p className="text-[14px] text-white/50 leading-relaxed">
                  Before you spend a penny on technology, you need to know where you are going and why. Your digital strategy should answer three questions: What does the business need to achieve in the next 3 to 5 years? What technology and processes will get you there? And what is the realistic cost and timeline? We work with your leadership team to build a digital strategy that connects to commercial outcomes. Read our guide on{" "}
                  <Link href="/resources/guides/digital-transformation-roadmap/" className="text-accent underline underline-offset-4 decoration-accent/30 hover:decoration-accent/60 transition-colors">how to build a digital transformation roadmap</Link>.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
          <Reveal delay={0.1}>
            <SpotlightCard>
              <div className="p-7">
                <h3 className="text-[18px] font-semibold text-white/90 mb-3">
                  Business process transformation
                </h3>
                <p className="text-[14px] text-white/50 leading-relaxed">
                  Technology does not fix broken processes. It amplifies them. Before you implement any new system, you need to understand how your business actually works today and design how it should work tomorrow. In our experience, 60% to 70% of the benefit from a transformation programme comes from process redesign, not from the technology itself. We map your current processes, identify waste and bottlenecks, and redesign them using lean principles before anyone starts configuring software.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
          <Reveal delay={0.2}>
            <SpotlightCard>
              <div className="p-7">
                <h3 className="text-[18px] font-semibold text-white/90 mb-3">
                  Strategic digital roadmap
                </h3>
                <p className="text-[14px] text-white/50 leading-relaxed">
                  A digital roadmap is not a Gantt chart. It is a sequenced plan that shows which changes to make, in what order, and why. It accounts for dependencies, resource constraints, budget cycles, and risk. A good roadmap phases the work so you see returns early, build momentum, and can adjust as you learn. That is how lean business transformation works in practice.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
          <Reveal delay={0.3}>
            <SpotlightCard>
              <div className="p-7">
                <h3 className="text-[18px] font-semibold text-white/90 mb-3">
                  Operational excellence
                </h3>
                <p className="text-[14px] text-white/50 leading-relaxed">
                  Operational excellence is not a destination. It is a discipline. We help you build it into the fabric of your organisation, not as a one-off project, but as a permanent capability. This includes performance management frameworks, training your teams in lean and continuous improvement methods, and establishing governance structures that keep things on track after the consultants leave.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
        </div>
      </ContentSection>

      {/* The 4 pillars */}
      <ContentSection withBorder withGrain>
        <SectionHeader
          eyebrow="Framework"
          title="The 4 pillars of successful business transformation"
          subtitle="After working on transformation programmes across manufacturing, pharma, food, and professional services, we have identified four pillars that determine whether a programme succeeds or fails. Every failed programme we have been called in to rescue was missing at least one of these."
        />

        <div className="space-y-12">
          <Reveal>
            <div>
              <h3 className="text-[20px] font-semibold tracking-[-0.01em] text-white/85 mb-4">1. Strategy and vision</h3>
              <div className="space-y-4 text-[15px] text-white/55 leading-[1.8]">
                <p>
                  You cannot transform a business without knowing what you are transforming it into. That sounds obvious, but you would be surprised how many organisations launch transformation programmes without a clear, shared vision of what success looks like.
                </p>
                <p>
                  Your business transformation strategy needs to answer specific questions. What will the business look like in 3 years? What capabilities do you need that you do not have today? What will you stop doing? What commercial outcomes are you targeting: revenue growth, margin improvement, speed to market, regulatory compliance?
                </p>
                <p>
                  The vision needs to come from the top. McKinsey&apos;s 2023 research on transformation found that programmes with visible CEO commitment were 5.3 times more likely to succeed. Not just sponsorship in name, but active, visible involvement.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div>
              <h3 className="text-[20px] font-semibold tracking-[-0.01em] text-white/85 mb-4">2. Process redesign</h3>
              <div className="space-y-4 text-[15px] text-white/55 leading-[1.8]">
                <p>
                  This is where the work gets real. Process redesign means taking your core business processes apart, understanding where value is created and where it is destroyed, and rebuilding them.
                </p>
                <p>
                  We use lean principles here, not because lean is fashionable, but because it works. Value stream mapping, waste identification, standard work: these are proven methods that have been refined over decades. The goal is to design processes that are simpler, faster, and more reliable before you layer technology on top.
                </p>
                <p>
                  A common mistake is jumping straight to technology. Someone decides &quot;we need a new ERP&quot; and starts a software selection process without first understanding what the new system needs to do differently. That is how you end up spending millions on a system that automates your existing broken processes.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div>
              <h3 className="text-[20px] font-semibold tracking-[-0.01em] text-white/85 mb-4">3. Technology selection and implementation</h3>
              <div className="space-y-4 text-[15px] text-white/55 leading-[1.8]">
                <p>
                  Technology is an enabler, not a strategy. But the right technology, properly implemented, can be transformative. The wrong technology, or the right technology implemented badly, will set you back years.
                </p>
                <p>
                  This is where independence matters most. If your consulting firm also sells SAP licences, or gets referral fees from Microsoft, their &quot;independent&quot; technology recommendation is not independent at all. COGO has no commercial relationship with any software vendor. When we recommend a platform, it is because it is right for your business. Full stop.
                </p>
                <p>
                  Through our partnership with Westernacher, we bring deep implementation expertise in SAP and other enterprise platforms, but the recommendation always comes first, and it is always independent. Learn more about our{" "}
                  <Link href="/services/erp-consulting/" className="text-accent underline underline-offset-4 decoration-accent/30 hover:decoration-accent/60 transition-colors">independent ERP consulting services</Link> or{" "}
                  <Link href="/services/sap-consulting/" className="text-accent underline underline-offset-4 decoration-accent/30 hover:decoration-accent/60 transition-colors">our SAP consulting practice</Link>.
                </p>
                <p>
                  For the implementation itself, we provide{" "}
                  <Link href="/services/implementation-support/" className="text-accent underline underline-offset-4 decoration-accent/30 hover:decoration-accent/60 transition-colors">ERP implementation support and programme management</Link>{" "}
                  to make sure the technology is delivered on time, on budget, and actually works the way your people need it to.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div>
              <h3 className="text-[20px] font-semibold tracking-[-0.01em] text-white/85 mb-4">4. People and change management</h3>
              <div className="space-y-4 text-[15px] text-white/55 leading-[1.8]">
                <p>
                  Here is the uncomfortable truth: your transformation will succeed or fail based on whether your people adopt the new ways of working. Every other pillar is important, but this one is decisive.
                </p>
                <p>
                  Prosci&apos;s research (2023) is unambiguous on this point. Effective change management is the single biggest predictor of project success. Yet it is consistently the most underfunded and underresourced element of transformation programmes.
                </p>
                <p>
                  Change management is not sending an email about the new system. It is not a half-day training session the week before go-live. Real change management starts at the beginning of the programme and runs through every phase. It means understanding who is affected, how their work will change, what concerns they have, and building a structured plan to move them from awareness to adoption.
                </p>
                <p>
                  In practical terms, this means executive sponsorship that is visible and sustained. It means involving frontline teams in process design, not just telling them about it afterwards. It means training that is role-specific and hands-on. And it means measuring adoption, not just whether the system is live, but whether people are actually using it correctly.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </ContentSection>

      {/* UK and Ireland context */}
      <ContentSection withBorder>
        <SectionHeader
          eyebrow="UK & Ireland"
          title="Business transformation for UK and Ireland companies"
          subtitle="If you are running a mid-market business in the UK or Ireland, your transformation context is different from a Fortune 500 company. Your budgets are smaller. Your teams are leaner. You cannot afford a two-year discovery phase."
        />
        <div className="space-y-12">
          <Reveal>
            <div>
              <h3 className="text-[20px] font-semibold tracking-[-0.01em] text-white/85 mb-4">Enterprise Ireland grants for transformation</h3>
              <div className="space-y-4 text-[15px] text-white/55 leading-[1.8]">
                <p>
                  If your business is based in Ireland, there is genuine financial support available. Enterprise Ireland&apos;s Digitalisation Voucher and its suite of innovation and competitiveness grants can offset a meaningful portion of your transformation costs. The Business Process Improvement Grant alone can cover up to 50% of eligible consultancy costs.
                </p>
                <p>
                  These grants are competitive and the application process matters. We have helped clients successfully apply for and draw down Enterprise Ireland funding for transformation programmes. Read more about{" "}
                  <Link href="/resources/blog/enterprise-ireland-grants/" className="text-accent underline underline-offset-4 decoration-accent/30 hover:decoration-accent/60 transition-colors">Enterprise Ireland grants for digital transformation</Link>.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div>
              <h3 className="text-[20px] font-semibold tracking-[-0.01em] text-white/85 mb-4">CSRD compliance driving transformation</h3>
              <div className="space-y-4 text-[15px] text-white/55 leading-[1.8]">
                <p>
                  The Corporate Sustainability Reporting Directive is not just a reporting requirement. For many Irish and UK businesses, it is a forcing function for business transformation. CSRD requires detailed, auditable data on everything from carbon emissions to supply chain practices. If your systems cannot produce that data reliably, you have a problem that a spreadsheet will not solve.
                </p>
                <p>
                  We are seeing a growing number of clients use CSRD compliance as the catalyst for a broader transformation programme. It makes commercial sense: if you need to overhaul your data infrastructure anyway, why not use the opportunity to fix your processes and systems at the same time? For a detailed breakdown, see our guide on{" "}
                  <Link href="/resources/blog/csrd-reporting-ireland/" className="text-accent underline underline-offset-4 decoration-accent/30 hover:decoration-accent/60 transition-colors">CSRD reporting requirements for Irish companies</Link>.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div>
              <h3 className="text-[20px] font-semibold tracking-[-0.01em] text-white/85 mb-4">UK and Irish industry context</h3>
              <div className="space-y-4 text-[15px] text-white/55 leading-[1.8]">
                <p>
                  The UK and Irish mid-market has specific characteristics that shape how transformation should be approached. Many businesses in this segment are family-owned or private-equity backed. Decision-making is faster than in large corporates, but resources are tighter. There is often a legacy of underinvestment in technology, which means the gap between current state and desired state is larger.
                </p>
                <p>
                  In sectors like food manufacturing, pharma, and professional services, regulatory requirements add complexity. Your new processes and systems need to be validated and compliant from day one. If you operate in these sectors, you may find our pages on{" "}
                  <Link href="/industries/food-manufacturing/" className="text-accent underline underline-offset-4 decoration-accent/30 hover:decoration-accent/60 transition-colors">ERP for food manufacturing companies</Link> and{" "}
                  <Link href="/industries/pharmaceutical/" className="text-accent underline underline-offset-4 decoration-accent/30 hover:decoration-accent/60 transition-colors">pharma ERP consulting for UK and Ireland</Link> useful.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </ContentSection>

      {/* Scenarios */}
      <ContentSection withBorder withGrain>
        <SectionHeader
          eyebrow="In Practice"
          title="What transformation looks like in practice"
        />
        <div className="space-y-8">
          <Reveal>
            <SpotlightCard>
              <div className="p-7">
                <h3 className="text-[18px] font-semibold text-white/90 mb-3">
                  A food manufacturer outgrowing its systems
                </h3>
                <p className="text-[14px] text-white/50 leading-relaxed mb-3">
                  A mid-sized Irish food manufacturer with EUR 80 million in revenue was running on a patchwork of systems: an ageing ERP for finance, spreadsheets for production planning, and a standalone quality system that did not talk to anything else. They were winning new retail contracts but could not scale.
                </p>
                <p className="text-[14px] text-white/50 leading-relaxed mb-3">
                  Their transformation programme started with process mapping. Before touching any technology, we spent six weeks understanding how the business actually ran. The findings were revealing: 40% of production planners&apos; time was spent re-entering data between systems. Quality checks were duplicated because nobody trusted the data. Customer order changes took 48 hours to flow through to the production floor.
                </p>
                <p className="text-[14px] text-white/50 leading-relaxed">
                  The redesigned processes eliminated most of that waste. A single integrated ERP replaced four systems. But the technology was the second step, not the first. The result: order-to-delivery time dropped by 35%, traceability became real-time, and the business had the operational capacity to take on the new contracts without adding headcount.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
          <Reveal delay={0.1}>
            <SpotlightCard>
              <div className="p-7">
                <h3 className="text-[18px] font-semibold text-white/90 mb-3">
                  A professional services firm preparing for growth
                </h3>
                <p className="text-[14px] text-white/50 leading-relaxed mb-3">
                  A UK-based professional services firm with 200 staff and three offices was growing through acquisition but struggling to integrate. Each acquired business had its own systems, its own processes, and its own way of doing things. Client onboarding took twice as long as it should. Financial reporting was a monthly ordeal.
                </p>
                <p className="text-[14px] text-white/50 leading-relaxed mb-3">
                  The transformation here was less about technology and more about standardisation. We helped them define a single operating model for client onboarding, resource management, billing, and reporting. Then we selected a platform that could support that model across all offices. The technology implementation took five months. The process redesign and change management ran for nine.
                </p>
                <p className="text-[14px] text-white/50 leading-relaxed">
                  Eighteen months later, the firm had a single view of every client, consistent service delivery across all offices, and financial reporting that took days instead of weeks. More importantly, they had a scalable platform that could absorb the next acquisition without starting from scratch.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
          <Reveal delay={0.2}>
            <SpotlightCard>
              <div className="p-7">
                <h3 className="text-[18px] font-semibold text-white/90 mb-3">
                  A pharmaceutical company meeting regulatory demands
                </h3>
                <p className="text-[14px] text-white/50 leading-relaxed mb-3">
                  An Irish pharmaceutical company needed to comply with new serialisation requirements and tighten its batch tracking. Their existing systems could not support the level of traceability required. Rather than bolt on another point fix, they used the regulatory deadline as the catalyst for a broader business process transformation.
                </p>
                <p className="text-[14px] text-white/50 leading-relaxed">
                  We worked with their operations, quality, and IT teams to redesign their end-to-end manufacturing and quality processes. The new ERP system was configured to support these redesigned processes, with validation built in from the start. The programme took 14 months from kick-off to go-live. Compliance was achieved ahead of the deadline, and the business gained real-time visibility into production and quality that they had never had before.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
        </div>
      </ContentSection>

      {/* Why COGO */}
      <ContentSection withBorder>
        <SectionHeader
          eyebrow="Why COGO"
          title="Why COGO for business transformation?"
        />
        <div className="grid md:grid-cols-2 gap-6">
          <Reveal delay={0}>
            <SpotlightCard>
              <div className="p-7">
                <h3 className="text-[18px] font-semibold text-white/90 mb-3">
                  Independence that actually means something
                </h3>
                <p className="text-[14px] text-white/50 leading-relaxed">
                  We do not sell software. We do not take commissions or referral fees from vendors. We do not have a &quot;preferred partner&quot; list that dictates our recommendations. When we tell you that a particular platform is right for your business, it is because we have assessed your requirements and matched them to the market. Gartner&apos;s 2023 research found that 65% of ERP implementations exceed their budget. One of the primary reasons is that businesses are sold technology that does not match their actual needs. You will not have that problem with us.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
          <Reveal delay={0.1}>
            <SpotlightCard>
              <div className="p-7">
                <h3 className="text-[18px] font-semibold text-white/90 mb-3">
                  Practitioners, not theorists
                </h3>
                <p className="text-[14px] text-white/50 leading-relaxed">
                  Our consultants have worked inside businesses, not just alongside them. They have been the programme manager sweating over a go-live date. They have been the operations director trying to keep the business running while everything changes around them. We do not produce 200-page reports that nobody reads. We produce plans that work, recommendations that are realistic, and we stay involved through execution.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
          <Reveal delay={0.2}>
            <SpotlightCard>
              <div className="p-7">
                <h3 className="text-[18px] font-semibold text-white/90 mb-3">
                  The Westernacher partnership
                </h3>
                <p className="text-[14px] text-white/50 leading-relaxed">
                  For SAP implementations specifically, our partnership with Westernacher gives you access to one of Europe&apos;s most experienced SAP consultancies. Westernacher has over 900 consultants and more than 50 years of SAP implementation experience. But here is the important distinction: COGO manages the relationship and the programme. We are on your side of the table.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
          <Reveal delay={0.3}>
            <SpotlightCard>
              <div className="p-7">
                <h3 className="text-[18px] font-semibold text-white/90 mb-3">
                  Right-sized for your business
                </h3>
                <p className="text-[14px] text-white/50 leading-relaxed">
                  We are not trying to be McKinsey. We do not need to staff 50 consultants on your programme to make our numbers work. We scale our teams to match your needs and your budget. The people who scope your programme are the people who deliver it. You will not brief a partner who then disappears, leaving you with a team of juniors.
                </p>
              </div>
            </SpotlightCard>
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
              <h3 className="text-[18px] font-semibold text-white/85 mb-3">What is business transformation?</h3>
              <p className="text-[15px] text-white/50 leading-relaxed">
                Business transformation is the fundamental redesign of how an organisation operates to achieve a step-change in performance. It typically involves rethinking strategy, redesigning business processes, implementing new technology, and managing the people side of change. Unlike incremental improvement, which optimises what you already do, business transformation changes the model itself. A successful business transformation programme aligns all four of these elements (strategy, process, technology, and people) around a clear commercial objective.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div>
              <h3 className="text-[18px] font-semibold text-white/85 mb-3">What are the 4 stages of business transformation?</h3>
              <p className="text-[15px] text-white/50 leading-relaxed">
                While every programme is different, most successful business transformations follow four broad stages. First, assessment and strategy: understanding where you are today, defining where you need to be, and building the business case. Second, design: redesigning processes, selecting technology, and planning the change management approach. Third, implementation: configuring and deploying technology, rolling out new processes, and training people. Fourth, optimisation: measuring results, refining processes, embedding continuous improvement, and building the capability to sustain the change. The biggest mistake organisations make is treating stage four as optional. Without it, you risk sliding back to old ways of working within months.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div>
              <h3 className="text-[18px] font-semibold text-white/85 mb-3">How long does a business transformation take?</h3>
              <p className="text-[15px] text-white/50 leading-relaxed">
                For a mid-market business in the UK or Ireland, a typical business transformation programme takes between 12 and 24 months from initial assessment to go-live. Larger or more complex programmes can take longer. The timeline depends on scope (how many processes and systems are involved), readiness (how mature your current processes are), resources (both internal and external), and appetite for change. Be wary of anyone who promises a faster timeline without understanding your business. Rushing a transformation is one of the most reliable ways to ensure it fails.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div>
              <h3 className="text-[18px] font-semibold text-white/85 mb-3">How much does business transformation cost?</h3>
              <p className="text-[15px] text-white/50 leading-relaxed">
                Costs vary enormously depending on scope, complexity, and the technology involved. For a mid-market business, a transformation programme including process redesign, technology implementation, and change management typically costs between EUR 500,000 and EUR 3 million. That includes consultancy, technology licences, implementation, training, and internal resource costs. The more important question is return on investment. A well-executed transformation should deliver measurable returns within 18 to 24 months of go-live, typically through reduced operational costs, improved productivity, better data for decision-making, and increased capacity for growth. If your consultancy cannot articulate the expected ROI in specific terms, ask harder questions.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div>
              <h3 className="text-[18px] font-semibold text-white/85 mb-3">What is the difference between digital transformation and business transformation?</h3>
              <p className="text-[15px] text-white/50 leading-relaxed">
                Digital transformation focuses specifically on using technology to change how a business operates and delivers value. Business transformation is broader: it includes digital transformation but also encompasses strategy, process redesign, organisational change, and culture. In practice, the two are deeply intertwined. You cannot transform your business processes without technology, and technology without process change is just an expensive upgrade. At COGO, we treat them as inseparable. A business transformation framework that ignores technology is incomplete, and a digital transformation consulting engagement that ignores process and people is a recipe for an expensive failure.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div>
              <h3 className="text-[18px] font-semibold text-white/85 mb-3">Why do most transformations fail?</h3>
              <p className="text-[15px] text-white/50 leading-relaxed">
                The 70% failure rate that McKinsey and others cite comes down to a few recurring causes. First, lack of clear vision and executive commitment: programmes that do not have visible, sustained support from the top lose momentum. Second, underinvesting in change management: organisations spend millions on technology and almost nothing on helping people adapt. Third, poor process discipline: implementing new technology on top of broken processes just automates the mess. Fourth, unrealistic timelines and budgets: organisations underestimate the effort required, then cut corners when they run short. Fifth, choosing technology for the wrong reasons: selecting a platform because of vendor relationships or brand recognition rather than fit for purpose. COGO exists to help you avoid every one of these pitfalls.
              </p>
            </div>
          </Reveal>
        </div>
      </ContentSection>

      {/* Author */}
      <ContentSection withBorder>
        <Reveal>
          <p className="text-[13px] text-white/30 italic leading-relaxed">
            Written by Laurence Phelan, Director, COGO Consulting. Laurence has over 20 years of experience in business and digital transformation across manufacturing, pharma, food, and professional services.
          </p>
        </Reveal>
      </ContentSection>

      <PageCTA
        title="Ready to talk?"
        subtitle="If you are planning a business transformation and want independent advice from consultants who have actually done it, we should talk. No pitch decks, no pressure. Just an honest conversation about where you are and where you want to be."
        buttonText="Talk to us about your transformation"
        buttonHref="/contact/"
      />
    </PageLayout>
  );
}
