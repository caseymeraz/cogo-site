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
import SvgSection from "../../../components/SvgSection";
import ProcessFlow from "../../../components/svg/ProcessFlow";

export const metadata: Metadata = {
  title: "How to Choose an ERP System | UK Guide | COGO",
  description:
    "Step-by-step guide to choosing the right ERP system for your UK business. Selection criteria, evaluation process, and common mistakes to avoid.",
};

export default function HowToChooseERPPage() {
  return (
    <PageLayout>
      <PageHeader
        eyebrow="ERP Selection Guide"
        title="How to choose an ERP system: why the process matters more than the product"
        subtitle="A structured ERP selection process refined over hundreds of engagements across the UK and Ireland. The same approach we use in our independent software selection consulting practice."
      />

      {/* Intro */}
      <ContentSection withBorder>
        <Prose>
          <p>
            Here is a stat that should make you uncomfortable: according to
            Panorama Consulting's 2024 ERP Report, 56% of ERP implementations
            experience cost overruns, and nearly half deliver no measurable
            business benefits after go-live. That is not because organisations
            picked the wrong software. It is because they ran a poor selection
            process.
          </p>
          <p>
            Most businesses approach ERP selection backwards. They start with a
            vendor demo, get excited by polished presentations, and then try to
            retrofit their requirements around whatever they have just seen.
            That is like choosing a house based on the show home and hoping the
            plumbing works.
          </p>
          <p>
            The truth is, there are probably four or five ERP systems that could
            work for your organisation. The differences between them matter far
            less than how well you define your requirements, how rigorously you
            evaluate the options, and how carefully you negotiate the contract.
            The process is the product.
          </p>
          <p>
            This guide walks you through a structured ERP selection process that
            we have refined over hundreds of engagements across the UK and
            Ireland. It is the same approach we use in our{" "}
            <Link href="/services/software-selection/">
              independent software selection consulting
            </Link>{" "}
            practice, and it works for organisations of every size, from SMEs
            running a GBP 5 million turnover to enterprise groups managing GBP
            500 million-plus.
          </p>
          <p>
            Whether you are replacing a legacy system that has reached end of
            life, consolidating multiple platforms after an acquisition, or
            simply outgrowing spreadsheets and workarounds, the steps are the
            same. Only the scale changes.
          </p>
          <PageImage
            src="/images/methodology-evaluation.png"
            alt="COGO six-step ERP evaluation and selection methodology"
          />
          <p>
            <strong>
              <Link href="/contact/">
                Need help with ERP selection? Talk to an independent advisor
              </Link>
            </strong>
          </p>
        </Prose>
      </ContentSection>

      <SvgSection caption="The structured path to the right ERP">
        <ProcessFlow />
      </SvgSection>

      {/* The 8-step ERP selection process */}
      <ContentSection withBorder>
        <SectionHeader
          eyebrow="The Framework"
          title="The 8-step ERP selection process"
          subtitle="A structured ERP selection process typically takes three to six months, depending on the complexity of your organisation and the number of sites involved. Rushing it saves you nothing. Every week you invest in proper evaluation saves you months of pain during implementation."
        />

        <Prose>
          <h3>Step 1 - Define your business requirements (not your IT wish list)</h3>
          <p>
            This is where most ERP selections go wrong before they have even
            started. Someone in IT creates a spreadsheet with 400 technical
            requirements, sends it to vendors, and asks them to tick boxes.
            Every vendor ticks every box. You have learned nothing.
          </p>
          <p>
            Good requirements start with your business, not your technology.
            Ask your operations director what keeps them up at night. Talk to
            your finance team about what takes too long at month-end. Sit with
            your warehouse manager and watch what happens when a rush order
            comes in.
          </p>
          <p>You want to capture three types of requirements:</p>
          <ul>
            <li>
              <strong>Must-have requirements</strong> - things your business
              cannot function without. These are your non-negotiables. For a
              food manufacturer, that might be full batch traceability with
              recall capability. For a professional services firm, it is
              probably multi-currency project accounting with revenue
              recognition.
            </li>
            <li>
              <strong>Important requirements</strong> - things that would
              significantly improve operations but are not deal-breakers. Think
              advanced planning and scheduling, or integrated CRM.
            </li>
            <li>
              <strong>Nice-to-have requirements</strong> - features that would
              be useful but are not worth paying a premium for. Mobile
              approvals, customisable dashboards, that sort of thing.
            </li>
          </ul>
          <p>
            Aim for 50 to 80 weighted requirements, not 400 unweighted ones. If
            you need a structured format,{" "}
            <Link href="/resources/templates/erp-selection-checklist/">
              download the ERP selection checklist
            </Link>{" "}
            we have developed from years of selection work.
          </p>
          <p>
            A critical point: involve the people who will actually use the
            system. If your selection team is made up entirely of directors and
            IT staff, you will miss the operational detail that makes or breaks
            an implementation. The warehouse supervisor who processes 200 goods
            receipts a day knows things your operations director does not.
          </p>

          <h3>Step 2 - Assess your current systems and gaps</h3>
          <p>
            Before you can choose where to go, you need an honest picture of
            where you are. Map out every system, spreadsheet, and manual process
            that supports your operations today. You will be surprised by how
            much of your business runs on workarounds that nobody has formally
            documented.
          </p>
          <p>Focus on:</p>
          <ul>
            <li>
              <strong>What is working well</strong> - some processes do not need
              to change. Identify these early so you do not accidentally break
              something that is functioning.
            </li>
            <li>
              <strong>What is broken or failing</strong> - the specific pain
              points that are costing you time, money, or compliance risk.
            </li>
            <li>
              <strong>What is missing entirely</strong> - capabilities you need
              but do not currently have. Often these are the biggest drivers for
              a new system.
            </li>
            <li>
              <strong>Integration points</strong> - every system that talks to
              (or should talk to) your current platform. CRM, eCommerce, WMS,
              EDI, payroll, banking. Document them all.
            </li>
          </ul>
          <p>
            This gap analysis becomes the foundation of your business case. It
            also helps you estimate the scale of change involved, which directly
            affects your implementation timeline and budget. For realistic
            numbers, see{" "}
            <Link href="/resources/guides/erp-cost-guide/">
              realistic ERP cost ranges for UK businesses
            </Link>
            .
          </p>

          <h3>Step 3 - Create your vendor longlist</h3>
          <p>
            With clear requirements in hand, you can start identifying potential
            vendors. The ERP market is crowded. Gartner's 2024 Magic Quadrant
            for Cloud ERP lists more than 20 vendors in the mid-market and
            enterprise segment alone. Factor in niche and industry-specific
            systems, and you are looking at hundreds of options.
          </p>
          <p>
            You do not need to evaluate them all. Start with a longlist of eight
            to twelve vendors, then narrow to a shortlist of three to five for
            detailed evaluation.
          </p>
          <p>Build your longlist based on:</p>
          <ul>
            <li>
              <strong>Industry fit</strong> - does the vendor have proven
              deployments in your sector? A system built for professional
              services will not handle food manufacturing traceability without
              heavy customisation.
            </li>
            <li>
              <strong>Size fit</strong> - is the system designed for
              organisations your size? An enterprise platform will be
              over-engineered and over-priced for a 50-person company. A
              small-business system will not scale to 500 users across multiple
              sites.
            </li>
            <li>
              <strong>Deployment model</strong> - cloud, on-premise, or hybrid?
              Most vendors have strong opinions about this. Make sure theirs
              aligns with yours.
            </li>
            <li>
              <strong>Geography</strong> - does the vendor have a meaningful
              presence in the UK and Ireland? Local support, local
              implementation partners, and familiarity with UK tax and
              regulatory requirements all matter.
            </li>
            <li>
              <strong>Vendor viability</strong> - is this company going to be
              around in ten years? Check revenue trends, ownership structure,
              and investment in R&D. Your ERP relationship is a decade-long
              commitment.
            </li>
          </ul>
          <p>
            If you want a head start,{" "}
            <Link href="/resources/guides/best-erp-systems/">
              our independent guide to the best ERP systems
            </Link>{" "}
            covers the major platforms with honest assessments of where each one
            excels and where it falls short.
          </p>

          <h3>Step 4 - Develop your evaluation criteria and scorecard</h3>
          <p>
            This is the step that separates rigorous selection from expensive
            guesswork. You need a structured scorecard that allows you to
            compare vendors on a consistent, weighted basis.
          </p>
          <p>Your scorecard should cover at minimum:</p>
          <ul>
            <li>Functional fit (weighted by requirement priority)</li>
            <li>
              Total cost of ownership over five years (not just the licence fee)
            </li>
            <li>Implementation approach and timeline</li>
            <li>Vendor viability and financial health</li>
            <li>Support model and SLAs</li>
            <li>Technology architecture and roadmap</li>
            <li>Reference quality and relevance</li>
            <li>Cultural fit with your organisation</li>
          </ul>
          <p>
            Weight each category based on what matters most to your business.
            For most organisations, functional fit and total cost of ownership
            should together account for 50-60% of the overall score.
          </p>
          <p>
            The key discipline here is agreeing the criteria and weightings
            before you start evaluating vendors. If you set the rules after you
            have seen the demos, you will unconsciously bias the scoring towards
            whichever vendor made the best impression. We have built{" "}
            <Link href="/resources/templates/erp-vendor-scorecard/">
              our ERP vendor evaluation scorecard template
            </Link>{" "}
            specifically to prevent this.
          </p>

          <h3>Step 5 - Issue your RFP or RFI</h3>
          <p>
            There is a meaningful difference between an RFI (Request for
            Information) and an RFP (Request for Proposal). An RFI is an
            early-stage document used to gather basic information from a broad
            set of vendors. An RFP is a detailed document that asks shortlisted
            vendors to propose a specific approach, including pricing.
          </p>
          <p>
            Most mid-market organisations can skip the RFI and go straight to an
            RFP with their shortlisted vendors. Enterprise organisations with
            complex requirements may benefit from a two-stage process: RFI to
            longlist, RFP to shortlist.
          </p>
          <p>A good ERP RFP includes:</p>
          <ul>
            <li>
              <strong>Company overview</strong> - your business, your industry,
              your scale, and your strategic direction. Give vendors enough
              context to propose something sensible.
            </li>
            <li>
              <strong>Requirements specification</strong> - your prioritised
              list of functional and technical requirements, with enough detail
              for vendors to respond meaningfully.
            </li>
            <li>
              <strong>Current state</strong> - a summary of your existing
              systems, volumes, and integration landscape.
            </li>
            <li>
              <strong>Evaluation criteria</strong> - tell vendors how you will
              be scoring their responses. This forces them to address what
              matters to you, not just recite their marketing materials.
            </li>
            <li>
              <strong>Commercial framework</strong> - what you need in their
              pricing proposal. Insist on a full five-year total cost of
              ownership breakdown, including licensing, implementation,
              customisation, training, support, and any anticipated upgrades.
            </li>
            <li>
              <strong>Demonstration requirements</strong> - specific scenarios
              you want them to demonstrate, based on your real business
              processes. More on this in the next step.
            </li>
            <li>
              <strong>Timeline and process</strong> - your selection timeline,
              key dates, and decision-making process.
            </li>
          </ul>
          <p>
            A well-written RFP typically runs 30 to 50 pages. If yours is 10
            pages, you have not been detailed enough. If it is 100 pages, you
            have included too much. You can{" "}
            <Link href="/resources/templates/erp-rfp-template/">
              download our ERP RFP template
            </Link>{" "}
            as a starting point.
          </p>

          <h3>Step 6 - Evaluate vendor demonstrations</h3>
          <p>
            Vendor demos are where selection processes get derailed most often.
            ERP vendors employ highly skilled pre-sales consultants who can make
            any system look magnificent. Their job is to impress you. Your job
            is to see through the performance and evaluate the substance.
          </p>
          <p>Three rules for effective demo evaluation:</p>
          <p>
            <strong>1. Script the demos yourself.</strong> Do not let vendors
            choose what to show you. Create three to five scenarios based on
            your most critical and most complex business processes. Send these
            to vendors in advance and insist they demonstrate exactly those
            scenarios using your data (or data that closely mirrors it). A food
            manufacturer might script a full batch production run with allergen
            tracking and a mock recall. A professional services firm might
            script a multi-phase project from proposal through to final
            invoice.
          </p>
          <p>
            <strong>2. Bring the right people into the room.</strong> Your
            finance director should watch the finance demos. Your production
            manager should watch the manufacturing demos. These people will
            spot gaps and workarounds that a project manager or IT lead will
            miss. Aim for consistency - the same evaluators should attend all
            vendor demos for a given area so they can make fair comparisons.
          </p>
          <p>
            <strong>3. Score immediately.</strong> Do not wait until all demos
            are complete to start scoring. Evaluate each vendor's demonstration
            on the same day, while the detail is fresh. Use your pre-agreed
            scorecard and be honest about what you saw. If a vendor could not
            demonstrate something, mark it accordingly. "We can do that with a
            bit of configuration" is not the same as demonstrating it live.
          </p>

          <h3>Step 7 - Check references and conduct site visits</h3>
          <p>
            This step gets skipped or rushed more often than any other, and it
            is one of the most valuable. Vendors will give you their best
            references - clients who had smooth implementations and are willing
            to say nice things. That is fine, but dig deeper.
          </p>
          <p>
            Ask for references that match your profile: same industry, similar
            size, similar complexity. If possible, ask for a reference that
            experienced difficulties during implementation and how those were
            resolved. How a vendor handles problems tells you far more than how
            they handle successes.
          </p>
          <p>Questions to ask reference clients:</p>
          <ul>
            <li>
              What was the actual implementation timeline versus what was
              originally proposed?
            </li>
            <li>
              What was the actual cost versus the original quote? Where did the
              overruns come from?
            </li>
            <li>
              How responsive is the vendor's support team? What happens when you
              log a critical issue at 4 PM on a Friday?
            </li>
            <li>
              What would you do differently if you were starting the project
              again?
            </li>
            <li>
              Would you choose the same system and the same implementation
              partner again?
            </li>
            <li>
              How has the system performed at scale? Any performance issues as
              data volumes have grown?
            </li>
          </ul>
          <p>
            If a vendor cannot provide relevant references, that is a red flag.
            If they provide references but discourage site visits, that is a
            bigger one. Seeing a system running in a live production environment
            - with real users doing real work - is worth more than any demo.
          </p>

          <h3>Step 8 - Negotiate, select, and plan implementation</h3>
          <p>
            By this point, you should have a clear front-runner based on your
            weighted scorecard, reference checks, and site visits. Now comes the
            negotiation, and this is where having independent advice pays for
            itself many times over.
          </p>
          <p>
            ERP contracts are written by the vendor's legal team to protect the
            vendor. Key areas to negotiate:
          </p>
          <ul>
            <li>
              <strong>Licensing and subscription costs</strong> - most vendors
              have significant room to move on price, especially at the end of
              their financial quarter. Do not accept the first quote.
            </li>
            <li>
              <strong>Price escalation clauses</strong> - subscription contracts
              often include annual price increases of 5-8%. Negotiate a cap, or
              lock in rates for the initial term.
            </li>
            <li>
              <strong>Implementation milestones and penalties</strong> - tie
              payments to the delivery of specific, measurable milestones. Do
              not pay for effort; pay for results.
            </li>
            <li>
              <strong>Data ownership and portability</strong> - make sure you
              own your data and can extract it in a usable format if you ever
              need to move.
            </li>
            <li>
              <strong>Service level agreements</strong> - define response and
              resolution times for different severity levels. Make sure there
              are consequences for missing them.
            </li>
            <li>
              <strong>Exit terms</strong> - nobody likes to think about the end
              of a relationship before it has started, but you need to know what
              happens if things go wrong.
            </li>
          </ul>
          <p>
            Once you have signed, resist the temptation to start implementation
            immediately. Spend two to four weeks on detailed implementation
            planning: confirming your project team, finalising the project plan,
            setting up governance structures, and preparing your organisation
            for the change ahead.
          </p>
        </Prose>
      </ContentSection>

      {/* ERP selection criteria that actually matter */}
      <ContentSection withBorder>
        <SectionHeader
          eyebrow="Evaluation Criteria"
          title="ERP selection criteria that actually matter"
          subtitle="Every ERP selection guide gives you a list of criteria. Most of those lists are generic enough to be useless. Here are the criteria that actually differentiate vendors in a real-world evaluation."
        />

        <Prose>
          <p>
            <strong>Functional depth in your core processes.</strong> This is
            not about whether the system has a finance module. They all do. It
            is about whether the system handles the specific complexity of your
            operations without heavy customisation. Can it manage your
            particular flavour of revenue recognition? Does it handle your
            warehouse's pick-pack-ship workflow? Will it support your quality
            management processes out of the box, or do you need an add-on?
          </p>
          <p>
            <strong>Total cost of ownership over five years.</strong> The
            licence fee is typically 15-25% of your total five-year cost.
            Implementation, customisation, data migration, training, and
            ongoing support make up the rest. Insist on a detailed five-year TCO
            breakdown from every vendor. Watch for implementation costs quoted
            in "estimated days" rather than fixed prices - that is where budgets
            blow out.
          </p>
          <p>
            <strong>Implementation partner quality.</strong> For most ERP
            platforms, the implementation is done by a partner, not the vendor.
            The quality of your implementation partner matters as much as the
            quality of the software. Ask about the specific team who will work
            on your project, not just the partner firm's credentials. Good
            consultants are in demand. Make sure the ones you meet during the
            sales process are the ones who will actually do the work.
          </p>
          <p>
            <strong>Technology architecture and future direction.</strong> Is
            the platform genuinely cloud-native, or is it a hosted version of
            an on-premise system with a cloud label? How often does the vendor
            release updates, and what is the upgrade process? A system that
            requires a major upgrade every three years with six months of
            testing is fundamentally different from one that delivers continuous
            updates with minimal disruption.
          </p>
          <p>
            <strong>Reporting and analytics.</strong> ERP systems are data
            engines. If you cannot get the information out in a useful format,
            the data is worthless. Test the reporting capabilities against your
            actual reporting requirements, not hypothetical ones. Can your
            finance team build their own reports, or do they need IT support for
            every new view? Does the system support real-time dashboards, or is
            reporting always a day behind?
          </p>
          <p>
            <strong>User experience.</strong> This is increasingly a
            differentiator. If the system is difficult to use, your people will
            find workarounds. Workarounds mean bad data. Bad data means bad
            decisions. Pay attention to how many clicks it takes to complete
            common tasks. Watch how your less technical team members react
            during demos. Modern ERP systems should feel intuitive, not require
            a training course for every new screen.
          </p>
          <p>
            <strong>Vendor financial health and market position.</strong> Your
            ERP relationship will last eight to twelve years. You need to be
            confident the vendor will still be investing in the platform for
            that entire period. Check their revenue growth, R&D investment as a
            percentage of revenue, and customer retention rates. A vendor with
            declining market share may cut R&D spending, which means your system
            slowly falls behind.
          </p>
        </Prose>
      </ContentSection>

      {/* Selection criteria by business size */}
      <ContentSection withBorder>
        <SectionHeader
          eyebrow="By Business Size"
          title="Selection criteria by business size"
          subtitle="The criteria above apply broadly, but the priority and weighting should shift significantly based on your organisation's size and complexity."
        />

        <div className="space-y-12">
          <Reveal>
            <SpotlightCard>
              <div className="p-8">
                <h3 className="text-[20px] font-semibold text-foreground mb-4">
                  SMEs (GBP 5m to GBP 30m turnover)
                </h3>
                <Prose>
                  <p>
                    For smaller organisations, simplicity and speed of
                    implementation trump everything else. You likely do not have
                    a dedicated IT team, and you cannot afford a 12-month
                    implementation that consumes your management team's
                    attention.
                  </p>
                  <p>
                    <strong>Prioritise:</strong>
                  </p>
                  <ul>
                    <li>
                      Speed of implementation (target 3-6 months, not 12-18)
                    </li>
                    <li>Ease of use with minimal training requirements</li>
                    <li>
                      Total cost of ownership (cloud subscription models
                      typically work better than large upfront capital
                      expenditure)
                    </li>
                    <li>
                      Vendor's ability to support you directly, without a
                      third-party implementation partner adding cost and
                      complexity
                    </li>
                    <li>
                      Scalability to support growth without requiring a platform
                      change in five years
                    </li>
                  </ul>
                  <p>
                    <strong>Deprioritise:</strong>
                  </p>
                  <ul>
                    <li>
                      Advanced customisation capabilities (you should be
                      adapting your processes to the software at this scale, not
                      the other way round)
                    </li>
                    <li>
                      Multi-entity, multi-currency complexity (unless you
                      genuinely need it now)
                    </li>
                    <li>
                      Deep industry-specific functionality (unless you operate
                      in a regulated sector like pharma or food)
                    </li>
                  </ul>
                  <p>
                    For SMEs, systems like Sage Intacct, Xero (with add-ons),
                    NetSuite, and Microsoft Dynamics 365 Business Central are
                    typically the right ballpark. The full enterprise platforms
                    (SAP S/4HANA, Oracle Cloud ERP) are almost certainly
                    over-specified and over-priced for your needs.
                  </p>
                </Prose>
              </div>
            </SpotlightCard>
          </Reveal>

          <Reveal delay={0.1}>
            <SpotlightCard>
              <div className="p-8">
                <h3 className="text-[20px] font-semibold text-foreground mb-4">
                  Mid-market (GBP 30m to GBP 250m turnover)
                </h3>
                <Prose>
                  <p>
                    The mid-market is where selection gets genuinely difficult.
                    You are too large and too complex for small-business systems,
                    but you may not need (or be able to afford) a full enterprise
                    platform. This is the most competitive segment of the ERP
                    market, and the one where the most options exist.
                  </p>
                  <p>
                    <strong>Prioritise:</strong>
                  </p>
                  <ul>
                    <li>
                      Functional depth in your core processes, without excessive
                      customisation
                    </li>
                    <li>
                      Strong implementation partner ecosystem with proven UK
                      mid-market experience
                    </li>
                    <li>
                      Integration capabilities with your existing technology
                      landscape
                    </li>
                    <li>
                      Total cost of ownership with transparent pricing (watch
                      for subscription costs that escalate significantly in years
                      three to five)
                    </li>
                    <li>
                      A clear technology roadmap that shows continued investment
                      in mid-market features
                    </li>
                  </ul>
                  <p>
                    <strong>Deprioritise:</strong>
                  </p>
                  <ul>
                    <li>
                      Global multi-entity capabilities (unless you have
                      international operations)
                    </li>
                    <li>
                      Industry-specific functionality that you do not currently
                      need (buy what you need today, not what you might need in
                      five years)
                    </li>
                  </ul>
                  <p>
                    Mid-market contenders typically include Microsoft Dynamics
                    365 Finance & Supply Chain Management, SAP S/4HANA Cloud
                    Public Edition, Oracle NetSuite, Infor CloudSuite
                    (industry-specific versions), and Epicor Kinetic.
                  </p>
                </Prose>
              </div>
            </SpotlightCard>
          </Reveal>

          <Reveal delay={0.2}>
            <SpotlightCard>
              <div className="p-8">
                <h3 className="text-[20px] font-semibold text-foreground mb-4">
                  Enterprise (GBP 250m-plus turnover)
                </h3>
                <Prose>
                  <p>
                    At enterprise scale, the functional and technical
                    requirements are usually complex enough that only a handful
                    of platforms are genuinely in contention. The selection
                    criteria shift towards risk mitigation and long-term
                    strategic alignment.
                  </p>
                  <p>
                    <strong>Prioritise:</strong>
                  </p>
                  <ul>
                    <li>
                      Global capabilities: multi-entity, multi-currency,
                      multi-language, multi-legislation
                    </li>
                    <li>
                      Proven deployments at your scale in your industry
                    </li>
                    <li>
                      Depth and maturity of the implementation partner network
                    </li>
                    <li>
                      Vendor's financial stability and long-term strategic
                      direction
                    </li>
                    <li>
                      Change management and organisational readiness support
                    </li>
                    <li>
                      Data migration capabilities for complex legacy
                      environments
                    </li>
                  </ul>
                  <p>
                    <strong>Deprioritise:</strong>
                  </p>
                  <ul>
                    <li>
                      Speed of implementation (enterprise ERP programmes
                      typically run 12-24 months; accept this and plan
                      accordingly)
                    </li>
                    <li>
                      Upfront cost (total cost of ownership over ten years
                      matters more than the year-one price tag)
                    </li>
                  </ul>
                  <p>
                    Enterprise selection is almost always a choice between SAP
                    S/4HANA, Oracle Cloud ERP, and Microsoft Dynamics 365
                    Finance & Supply Chain Management, with Infor as a strong
                    contender in specific industries (manufacturing, food and
                    beverage, healthcare).
                  </p>
                </Prose>
              </div>
            </SpotlightCard>
          </Reveal>
        </div>
      </ContentSection>

      {/* Industry-specific selection considerations */}
      <ContentSection withBorder>
        <SectionHeader
          eyebrow="Industry Focus"
          title="Industry-specific selection considerations"
          subtitle="While the core selection process is the same regardless of industry, certain sectors have specific requirements that significantly narrow the field of suitable vendors."
        />

        <div className="space-y-12">
          <Reveal>
            <div>
              <h3 className="text-[20px] font-semibold text-foreground mb-4">
                Manufacturing
              </h3>
              <Prose>
                <p>
                  Manufacturing ERP needs to handle production planning, shop
                  floor control, materials management, and quality assurance as
                  core functions, not bolt-on afterthoughts.
                </p>
                <p>
                  Key requirements to test: production scheduling (finite vs.
                  infinite capacity planning), bill of materials management
                  (multi-level, configurable, with revision control), shop floor
                  data collection, quality management with non-conformance
                  tracking, and supply chain planning including MRP and demand
                  forecasting.
                </p>
                <p>
                  Watch out for: general-purpose ERP systems that claim
                  manufacturing capability but actually just have a basic BOM
                  and works order module. If the vendor cannot demonstrate
                  detailed production scheduling against finite capacity
                  constraints using your real scenarios, their manufacturing
                  functionality probably is not deep enough.
                </p>
              </Prose>
            </div>
          </Reveal>

          <Reveal>
            <div>
              <h3 className="text-[20px] font-semibold text-foreground mb-4">
                Food and beverage
              </h3>
              <Prose>
                <p>
                  Food manufacturing adds regulatory complexity that generic
                  manufacturing systems simply cannot handle. If you are in this
                  sector, see our detailed guide to{" "}
                  <Link href="/industries/food-manufacturing/">
                    ERP for food manufacturing companies
                  </Link>
                  .
                </p>
                <p>
                  Non-negotiable requirements: full batch traceability (forward
                  and backward) with the ability to execute a mock recall in
                  under four hours, allergen management built into the recipe
                  and labelling process, catch weight handling for
                  variable-weight products, shelf life management with FEFO
                  (first expiry, first out) picking logic, and compliance with
                  BRC, SALSA, or other food safety standards.
                </p>
                <p>
                  A general-purpose ERP with a food "add-on" module will cause
                  you problems. Look for systems that were built for food from
                  the ground up, or that have a dedicated, mature food
                  manufacturing edition with a substantial installed base in the
                  UK.
                </p>
              </Prose>
            </div>
          </Reveal>

          <Reveal>
            <div>
              <h3 className="text-[20px] font-semibold text-foreground mb-4">
                Pharmaceutical and life sciences
              </h3>
              <Prose>
                <p>
                  Pharma is the most demanding sector for ERP selection because
                  regulatory compliance is not optional and the cost of getting
                  it wrong extends beyond fines to product recalls, import bans,
                  and criminal liability.
                </p>
                <p>
                  Non-negotiable requirements: 21 CFR Part 11 compliance
                  (electronic signatures and audit trails), full GxP validation
                  support, batch record management with electronic batch
                  recording, serialisation and track-and-trace capability,
                  stability management, and environmental monitoring
                  integration.
                </p>
                <p>
                  Your ERP vendor must understand validation. This means they
                  need to provide a validation-ready system with IQ/OQ/PQ
                  documentation, and their implementation partner must have
                  validated ERP experience specifically in your regulatory
                  environment. A vendor who does not understand the difference
                  between "validated" and "validation-ready" is not the right
                  vendor for pharma.
                </p>
              </Prose>
            </div>
          </Reveal>

          <Reveal>
            <div>
              <h3 className="text-[20px] font-semibold text-foreground mb-4">
                Professional services
              </h3>
              <Prose>
                <p>
                  Professional services firms (consulting, engineering,
                  architecture, legal) have a different set of core requirements
                  centred on project accounting, resource management, and
                  time-based billing.
                </p>
                <p>
                  Non-negotiable requirements: multi-dimensional project
                  accounting with work-in-progress tracking, resource planning
                  and utilisation management, time and expense capture
                  (mobile-friendly), revenue recognition compliant with IFRS 15,
                  and project-based invoicing with flexible billing arrangements
                  (fixed fee, time and materials, milestone, retainer).
                </p>
                <p>
                  The major ERP platforms can handle professional services, but
                  purpose-built systems like Deltek, Maconomy, and Unit4 often
                  provide deeper functionality out of the box. Microsoft
                  Dynamics 365 Project Operations is increasingly competitive in
                  this space, particularly for firms already invested in the
                  Microsoft ecosystem.
                </p>
              </Prose>
            </div>
          </Reveal>
        </div>
      </ContentSection>

      {/* The 5 most common ERP selection mistakes */}
      <ContentSection withBorder>
        <SectionHeader
          eyebrow="Avoid These Pitfalls"
          title="The 5 most common ERP selection mistakes"
          subtitle="These are not theoretical. We have seen every one of them, repeatedly, and the consequences are always expensive."
        />

        <div className="space-y-8">
          <Reveal>
            <SpotlightCard>
              <div className="p-8">
                <h3 className="text-[18px] font-semibold text-foreground mb-3">
                  1. Letting the vendor control the narrative
                </h3>
                <Prose>
                  <p>
                    When you allow vendors to run their standard demo and set
                    the agenda for discussions, you are evaluating their
                    presentation skills, not their software's fit for your
                    business. The fix is simple: you control the process. You
                    write the demo scripts. You set the agenda. You decide what
                    gets evaluated and how.
                  </p>
                  <p>
                    We have seen organisations spend GBP 250,000 or more on an
                    ERP system that could not handle their core production
                    process, because nobody asked the vendor to demonstrate that
                    specific process during evaluation. Do not let that happen
                    to you.
                  </p>
                </Prose>
              </div>
            </SpotlightCard>
          </Reveal>

          <Reveal delay={0.05}>
            <SpotlightCard>
              <div className="p-8">
                <h3 className="text-[18px] font-semibold text-foreground mb-3">
                  2. Underweighting total cost of ownership
                </h3>
                <Prose>
                  <p>
                    The most common version of this mistake: comparing vendor
                    A's GBP 150,000 licence fee with vendor B's GBP 200,000
                    licence fee, without considering that vendor A's
                    implementation will cost GBP 400,000 versus vendor B's GBP
                    250,000 because vendor A requires more customisation. Over
                    five years, vendor B is GBP 100,000 cheaper, despite the
                    higher licence fee.
                  </p>
                  <p>
                    Always evaluate total cost of ownership over a minimum of
                    five years. Include licensing, implementation, customisation,
                    data migration, training, annual maintenance or
                    subscription, infrastructure (if on-premise), and internal
                    staff costs. The licence fee is just the deposit.
                  </p>
                </Prose>
              </div>
            </SpotlightCard>
          </Reveal>

          <Reveal delay={0.1}>
            <SpotlightCard>
              <div className="p-8">
                <h3 className="text-[18px] font-semibold text-foreground mb-3">
                  3. Choosing software, then finding a way to justify it
                </h3>
                <Prose>
                  <p>
                    This happens more often than anyone admits. A senior
                    executive sees a demo, falls in love with a particular
                    system, and the "selection process" becomes an exercise in
                    confirming a decision that has already been made. The
                    resulting implementation is full of compromises, workarounds,
                    and "we will deal with that later" moments.
                  </p>
                  <p>
                    If you catch yourself adjusting your evaluation criteria to
                    favour a particular vendor, stop. Go back to your original
                    requirements. If the requirements have genuinely changed,
                    document why. If they have not, you are rationalising a gut
                    feeling.
                  </p>
                </Prose>
              </div>
            </SpotlightCard>
          </Reveal>

          <Reveal delay={0.15}>
            <SpotlightCard>
              <div className="p-8">
                <h3 className="text-[18px] font-semibold text-foreground mb-3">
                  4. Ignoring the implementation partner
                </h3>
                <Prose>
                  <p>
                    For most ERP platforms, you do not buy from the vendor and
                    implement with the vendor. You buy from the vendor and
                    implement with a systems integrator or consulting partner.
                    The quality of that partner has as much influence on your
                    project's success as the quality of the software.
                  </p>
                  <p>
                    According to Panorama Consulting, the implementation partner
                    is cited as the primary cause of project failure in 28% of
                    troubled ERP projects. Evaluate your implementation partner
                    with the same rigour you evaluate the software: check
                    references, interview the proposed team, assess their
                    methodology, and make sure the senior consultants you meet
                    during the sales process are contractually committed to your
                    project.
                  </p>
                </Prose>
              </div>
            </SpotlightCard>
          </Reveal>

          <Reveal delay={0.2}>
            <SpotlightCard>
              <div className="p-8">
                <h3 className="text-[18px] font-semibold text-foreground mb-3">
                  5. Skipping the business case
                </h3>
                <Prose>
                  <p>
                    An ERP implementation is a significant investment. Panorama
                    Consulting's 2024 report puts the average at USD 9.5
                    million, though mid-market UK implementations typically range
                    from GBP 200,000 to GBP 2 million depending on complexity.
                  </p>
                  <p>
                    Without a clear business case that quantifies the expected
                    benefits, you have no way to measure success and no way to
                    justify the investment if the board asks uncomfortable
                    questions six months in. Your business case should include
                    measurable KPIs: reduced month-end close time, lower
                    inventory carrying costs, fewer manual processes, improved
                    order accuracy, faster reporting. If you cannot quantify the
                    benefit, question whether it is real.
                  </p>
                </Prose>
              </div>
            </SpotlightCard>
          </Reveal>
        </div>
      </ContentSection>

      {/* Do you need a consultant? */}
      <ContentSection withBorder>
        <SectionHeader
          eyebrow="Independent Advice"
          title="Do you need a consultant for ERP selection?"
          subtitle="The honest answer: it depends on your internal capability, the complexity of your requirements, and how much is at stake."
        />

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Reveal>
            <SpotlightCard>
              <div className="p-8">
                <h3 className="text-[18px] font-semibold text-foreground mb-4">
                  You probably do not need a consultant if:
                </h3>
                <Prose>
                  <ul>
                    <li>
                      You are a small business buying a straightforward cloud
                      system
                    </li>
                    <li>
                      You have an experienced IT or operations leader who has
                      been through an ERP selection before
                    </li>
                    <li>
                      Your requirements are simple, single-site, and
                      single-entity
                    </li>
                    <li>
                      You are choosing between two or three obvious options in
                      your sector
                    </li>
                  </ul>
                </Prose>
              </div>
            </SpotlightCard>
          </Reveal>

          <Reveal delay={0.1}>
            <SpotlightCard>
              <div className="p-8">
                <h3 className="text-[18px] font-semibold text-foreground mb-4">
                  You probably do need a consultant if:
                </h3>
                <Prose>
                  <ul>
                    <li>
                      This is your organisation's first major ERP selection
                    </li>
                    <li>
                      You have complex, multi-site, or multi-entity requirements
                    </li>
                    <li>
                      The investment is significant relative to your turnover
                      (and for most mid-market organisations, it is)
                    </li>
                    <li>
                      You do not have the internal bandwidth to run a
                      three-to-six-month selection process alongside day-to-day
                      operations
                    </li>
                    <li>
                      You want genuine independence from vendor influence
                    </li>
                  </ul>
                </Prose>
              </div>
            </SpotlightCard>
          </Reveal>
        </div>

        <Prose>
          <p>
            The value of an independent consultant is not just expertise. It is
            objectivity. We have seen capable internal teams run good selection
            processes only to have the outcome overridden by a board member who
            played golf with a vendor's regional director. An independent
            advisor provides documented, evidence-based recommendations that are
            harder to dismiss.
          </p>
          <p>
            At COGO, our{" "}
            <Link href="/services/erp-consulting/">
              ERP consulting and advisory practice
            </Link>{" "}
            is entirely independent. We hold no vendor partnerships, earn no
            referral fees, and have no commercial interest in which system you
            choose. That independence means our recommendation is always based
            on what is right for your business, not what is profitable for us.
          </p>
          <p>
            Mint Jutras research found that organisations using independent
            selection advisors are 2.5 times more likely to complete their ERP
            project on time and on budget (Mint Jutras, 2023). Given that the
            average ERP cost overrun is 30-40% of the original budget, the fee
            for independent advice typically pays for itself several times over.
          </p>
        </Prose>
      </ContentSection>

      {/* Download scorecard */}
      <ContentSection withBorder>
        <SectionHeader
          eyebrow="Free Resource"
          title="Download: ERP selection scorecard"
        />

        <Prose>
          <p>
            We have developed a structured ERP selection scorecard based on the
            evaluation methodology described in this guide. It includes:
          </p>
          <ul>
            <li>
              A weighted scoring matrix covering all eight evaluation categories
            </li>
            <li>
              Pre-built criteria for functional fit, total cost of ownership,
              vendor viability, implementation approach, and support
            </li>
            <li>
              Space for multiple evaluators with automated score aggregation
            </li>
            <li>
              A vendor comparison summary that gives you a clear, defensible
              basis for your decision
            </li>
          </ul>
          <p>
            The scorecard is designed to be adapted to your specific
            requirements. Add your own criteria, adjust the weightings, and use
            it as the backbone of your evaluation process.
          </p>
          <p>
            <strong>
              <Link href="/resources/templates/erp-vendor-scorecard/">
                Download our ERP vendor evaluation scorecard template
              </Link>
            </strong>
          </p>
          <p>You may also find these useful:</p>
          <ul>
            <li>
              <Link href="/resources/templates/erp-rfp-template/">
                Download our ERP RFP template
              </Link>{" "}
              - a structured starting point for your Request for Proposal
            </li>
            <li>
              <Link href="/resources/templates/erp-selection-checklist/">
                Download the ERP selection checklist
              </Link>{" "}
              - a comprehensive checklist covering every stage of the selection
              process
            </li>
          </ul>
        </Prose>
      </ContentSection>

      {/* FAQ */}
      <ContentSection withBorder>
        <SectionHeader
          eyebrow="FAQ"
          title="Frequently asked questions"
        />

        <div className="space-y-10">
          <Reveal>
            <div>
              <h3 className="text-[18px] font-semibold text-foreground mb-3">
                How long does ERP selection take?
              </h3>
              <Prose>
                <p>
                  A well-run ERP selection process typically takes three to six
                  months from initial requirements definition to vendor
                  selection. Simpler evaluations (single site, straightforward
                  requirements, fewer than three vendors) can be completed in
                  eight to twelve weeks. Complex enterprise selections with
                  multiple sites, divisions, and regulatory requirements may
                  take six to nine months.
                </p>
                <p>
                  The most common cause of delays is internal decision-making,
                  not the evaluation process itself. Secure executive sponsorship
                  and decision-making authority before you start, and you will
                  avoid months of committee deliberation.
                </p>
              </Prose>
            </div>
          </Reveal>

          <Reveal>
            <div>
              <h3 className="text-[18px] font-semibold text-foreground mb-3">
                What are the most important ERP selection criteria?
              </h3>
              <Prose>
                <p>
                  The two most important criteria for most organisations are
                  functional fit (does the system handle your core business
                  processes without excessive customisation?) and total cost of
                  ownership over five years (what will this actually cost you,
                  not just the licence fee?). Together, these should account for
                  50-60% of your overall evaluation weighting.
                </p>
                <p>
                  Beyond those, implementation partner quality, vendor viability,
                  and technology architecture round out the top five. The
                  specific weighting depends on your circumstances - a heavily
                  regulated business will weight compliance features more
                  heavily; a fast-growing company will weight scalability.
                </p>
              </Prose>
            </div>
          </Reveal>

          <Reveal>
            <div>
              <h3 className="text-[18px] font-semibold text-foreground mb-3">
                Should I hire a consultant for ERP selection?
              </h3>
              <Prose>
                <p>
                  If this is your first ERP selection, the investment is
                  significant, or you have complex multi-site requirements, an
                  independent consultant will almost certainly save you more than
                  they cost. Research from Mint Jutras shows organisations using
                  independent advisors are 2.5 times more likely to complete on
                  time and on budget. If you are choosing a simple cloud system
                  for a single site with straightforward requirements, you can
                  probably manage the process internally. See our full breakdown
                  above for more detail, or learn about{" "}
                  <Link href="/services/erp-consulting/">
                    our ERP consulting and advisory practice
                  </Link>
                  .
                </p>
              </Prose>
            </div>
          </Reveal>

          <Reveal>
            <div>
              <h3 className="text-[18px] font-semibold text-foreground mb-3">
                How many ERP vendors should I evaluate?
              </h3>
              <Prose>
                <p>
                  Start with a longlist of eight to twelve vendors based on your
                  industry, size, and requirements. Narrow to a shortlist of
                  three to five for detailed evaluation, including scripted
                  demonstrations and reference checks. Evaluating fewer than
                  three gives you insufficient comparison. Evaluating more than
                  five consumes too much time for too little additional insight.
                </p>
              </Prose>
            </div>
          </Reveal>

          <Reveal>
            <div>
              <h3 className="text-[18px] font-semibold text-foreground mb-3">
                What should I include in an ERP RFP?
              </h3>
              <Prose>
                <p>
                  A comprehensive ERP RFP should include: your company overview
                  and strategic direction, detailed functional and technical
                  requirements (prioritised and weighted), your current systems
                  landscape, evaluation criteria and process, commercial
                  framework (insist on five-year TCO breakdown), scripted
                  demonstration scenarios, and your selection timeline. A
                  well-written RFP runs 30 to 50 pages. For a ready-made
                  starting point,{" "}
                  <Link href="/resources/templates/erp-rfp-template/">
                    download our ERP RFP template
                  </Link>
                  .
                </p>
              </Prose>
            </div>
          </Reveal>

          <Reveal>
            <div>
              <h3 className="text-[18px] font-semibold text-foreground mb-3">
                How do I evaluate ERP vendor demonstrations?
              </h3>
              <Prose>
                <p>
                  Three principles: script the demos yourself using your real
                  business scenarios, bring the actual end users into the room
                  (not just management), and score each vendor immediately after
                  their demo using your pre-agreed scorecard. Never let vendors
                  choose what to demonstrate - insist they show your specific
                  processes using data that mirrors your real operations. Pay
                  close attention to how the system handles exceptions and edge
                  cases, not just the happy path. And watch for "we can
                  configure that" responses - ask for live demonstration, not
                  promises.
                </p>
              </Prose>
            </div>
          </Reveal>
        </div>
      </ContentSection>

      {/* Author attribution */}
      <ContentSection withBorder>
        <Reveal>
          <p className="text-[14px] text-muted/70 italic leading-relaxed">
            This guide was written by Laurence Phelan, Director at COGO
            Consulting. COGO is an independent business transformation
            consultancy providing{" "}
            <Link
              href="/services/software-selection/"
              className="text-accent underline underline-offset-4 decoration-accent/30 hover:decoration-accent/60 transition-colors"
            >
              independent software selection consulting
            </Link>{" "}
            to organisations across the UK and Ireland. We hold no vendor
            partnerships and earn no referral fees.
          </p>
        </Reveal>
      </ContentSection>

      <PageCTA
        title="Need help with ERP selection?"
        subtitle="Book a 30-minute call with one of our partners. No pitch, no pressure. Tell us what you are facing and we will tell you honestly if we can help."
        buttonText="Talk to an independent advisor"
        buttonHref="/contact/"
      />
    </PageLayout>
  );
}
