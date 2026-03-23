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
  title: "CRM Consulting Ireland | Independent Advice | COGO",
  description:
    "Independent CRM consulting for Irish and UK businesses. Selection, implementation, and strategy from advisors with no vendor ties.",
};

export default function CRMConsultingPage() {
  return (
    <PageLayout>
      <PageHeader
        eyebrow="CRM Consulting"
        title="Your CRM should make your sales team's life easier, not harder"
        subtitle="Independent CRM consultancy with no vendor partnerships, no reseller margins, and no implementation revenue. We help you choose the right CRM, set it up properly, and make sure your people actually use it."
      />

      {/* Intro */}
      <ContentSection withBorder>
        <Prose>
          <p>
            Here is what usually happens. A business buys a CRM. There is a
            burst of enthusiasm. The vendor runs a few training sessions. Then,
            within three months, half the sales team is back to tracking deals
            in spreadsheets and the other half is entering data grudgingly, with
            no confidence that anyone is actually looking at it.
          </p>
          <p>
            According to Gartner&apos;s 2024 Sales Technology Survey, 58% of
            CRM investments fail to improve sales productivity (Gartner, 2024).
            Not because the software is bad - most modern CRM platforms are
            perfectly capable - but because nobody took the time to understand
            what the sales team actually needed, how the business really
            operates, and what would have to change to make the system stick.
          </p>
          <p>
            That is the gap COGO fills. We are an independent CRM consultancy
            with no vendor partnerships, no reseller margins, and no
            implementation revenue. We do not sell CRM software. We help you
            choose the right one, set it up properly, and make sure your people
            actually use it. Our advice is shaped by your business - your sales
            process, your team&apos;s habits, your growth plans - not by which
            platform pays us the most.
          </p>
          <p>
            If your CRM is gathering dust, or you have not picked one yet and
            want to get it right first time, you are in the right place.
          </p>
        </Prose>
      </ContentSection>

      <PageImage src="/images/crm-hubspot.png" alt="HubSpot CRM platform" aspect="auto" />

      {/* Three-block approach */}
      <ContentSection withBorder>
        <SectionHeader
          eyebrow="Our method"
          title="COGO's three-block CRM approach"
          subtitle="Most CRM projects try to do everything at once. We use a phased approach we call the three-block method: Stand, Walk, Run."
        />

        <div className="space-y-8">
          <Reveal>
            <SpotlightCard>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[13px] font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">
                    Block 1
                  </span>
                  <h3 className="text-[17px] font-semibold text-white/90">
                    Standing Strong (30-60 days)
                  </h3>
                </div>
                <p className="text-[14px] text-white/50 leading-relaxed mb-4">
                  Before anyone talks about dashboards or automations, your CRM
                  needs a solid foundation. This first phase is about getting
                  the basics right so everything that follows actually works.
                </p>
                <ul className="space-y-2">
                  <li className="flex gap-3 items-start text-[14px] text-white/50 leading-relaxed">
                    <span className="w-1 h-1 rounded-full bg-accent/60 mt-[0.65em] flex-shrink-0" />
                    <span>
                      <strong className="text-white/80 font-medium">
                        Data architecture
                      </strong>{" "}
                      - designing your contact, company, and deal structures to
                      match how your business actually sells
                    </span>
                  </li>
                  <li className="flex gap-3 items-start text-[14px] text-white/50 leading-relaxed">
                    <span className="w-1 h-1 rounded-full bg-accent/60 mt-[0.65em] flex-shrink-0" />
                    <span>
                      <strong className="text-white/80 font-medium">
                        Pipeline design
                      </strong>{" "}
                      - mapping your real sales stages, with clear entry and
                      exit criteria that match what your reps do day to day
                    </span>
                  </li>
                  <li className="flex gap-3 items-start text-[14px] text-white/50 leading-relaxed">
                    <span className="w-1 h-1 rounded-full bg-accent/60 mt-[0.65em] flex-shrink-0" />
                    <span>
                      <strong className="text-white/80 font-medium">
                        Data migration and cleanup
                      </strong>{" "}
                      - moving your existing data cleanly, without dragging over
                      years of duplicates and dead records
                    </span>
                  </li>
                  <li className="flex gap-3 items-start text-[14px] text-white/50 leading-relaxed">
                    <span className="w-1 h-1 rounded-full bg-accent/60 mt-[0.65em] flex-shrink-0" />
                    <span>
                      <strong className="text-white/80 font-medium">
                        Core integrations
                      </strong>{" "}
                      - connecting your CRM to email, calendar, and your
                      accounting or{" "}
                      <Link
                        href="/services/erp-consulting/"
                        className="text-accent underline underline-offset-4 decoration-accent/30 hover:decoration-accent/60 transition-colors"
                      >
                        ERP platform
                      </Link>
                    </span>
                  </li>
                  <li className="flex gap-3 items-start text-[14px] text-white/50 leading-relaxed">
                    <span className="w-1 h-1 rounded-full bg-accent/60 mt-[0.65em] flex-shrink-0" />
                    <span>
                      <strong className="text-white/80 font-medium">
                        User setup and permissions
                      </strong>{" "}
                      - making sure each person sees exactly what they need and
                      nothing they do not
                    </span>
                  </li>
                </ul>
              </div>
            </SpotlightCard>
          </Reveal>

          <Reveal>
            <SpotlightCard>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[13px] font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">
                    Block 2
                  </span>
                  <h3 className="text-[17px] font-semibold text-white/90">
                    Walking - training and pipeline management (60-120 days)
                  </h3>
                </div>
                <p className="text-[14px] text-white/50 leading-relaxed mb-4">
                  With the foundation set, Block 2 is about building habits.
                  This is where most CRM projects actually succeed or fail, and
                  it has almost nothing to do with technology.
                </p>
                <ul className="space-y-2">
                  <li className="flex gap-3 items-start text-[14px] text-white/50 leading-relaxed">
                    <span className="w-1 h-1 rounded-full bg-accent/60 mt-[0.65em] flex-shrink-0" />
                    <span>
                      <strong className="text-white/80 font-medium">
                        Role-specific training
                      </strong>{" "}
                      - not generic vendor webinars, but sessions tailored to
                      how your salespeople, managers, and support staff will
                      actually use the system each day
                    </span>
                  </li>
                  <li className="flex gap-3 items-start text-[14px] text-white/50 leading-relaxed">
                    <span className="w-1 h-1 rounded-full bg-accent/60 mt-[0.65em] flex-shrink-0" />
                    <span>
                      <strong className="text-white/80 font-medium">
                        Pipeline management cadence
                      </strong>{" "}
                      - establishing a weekly rhythm for pipeline reviews using
                      real CRM data
                    </span>
                  </li>
                  <li className="flex gap-3 items-start text-[14px] text-white/50 leading-relaxed">
                    <span className="w-1 h-1 rounded-full bg-accent/60 mt-[0.65em] flex-shrink-0" />
                    <span>
                      <strong className="text-white/80 font-medium">
                        Reporting and visibility
                      </strong>{" "}
                      - building the reports and dashboards your managers need
                      to coach effectively and forecast accurately
                    </span>
                  </li>
                  <li className="flex gap-3 items-start text-[14px] text-white/50 leading-relaxed">
                    <span className="w-1 h-1 rounded-full bg-accent/60 mt-[0.65em] flex-shrink-0" />
                    <span>
                      <strong className="text-white/80 font-medium">
                        Process refinement
                      </strong>{" "}
                      - adjusting workflows based on feedback from the first few
                      weeks of live use
                    </span>
                  </li>
                </ul>
                <p className="text-[14px] text-white/50 leading-relaxed mt-4">
                  Nucleus Research found that CRM systems deliver an average
                  return of EUR 8.71 for every EUR 1 spent - but only when
                  adoption is sustained beyond the first 90 days (Nucleus
                  Research, 2024). Block 2 is how you get there.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>

          <Reveal>
            <SpotlightCard>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[13px] font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">
                    Block 3
                  </span>
                  <h3 className="text-[17px] font-semibold text-white/90">
                    Running - marketing integration, AI, and lead capture (120+
                    days)
                  </h3>
                </div>
                <p className="text-[14px] text-white/50 leading-relaxed mb-4">
                  Once your team is confidently managing pipeline in the CRM,
                  you can start layering in the more sophisticated capabilities
                  that genuinely move the needle on revenue.
                </p>
                <ul className="space-y-2">
                  <li className="flex gap-3 items-start text-[14px] text-white/50 leading-relaxed">
                    <span className="w-1 h-1 rounded-full bg-accent/60 mt-[0.65em] flex-shrink-0" />
                    <span>
                      <strong className="text-white/80 font-medium">
                        Marketing integration
                      </strong>{" "}
                      - connecting your CRM to your email marketing platform,
                      website forms, and advertising tools so leads flow in
                      automatically
                    </span>
                  </li>
                  <li className="flex gap-3 items-start text-[14px] text-white/50 leading-relaxed">
                    <span className="w-1 h-1 rounded-full bg-accent/60 mt-[0.65em] flex-shrink-0" />
                    <span>
                      <strong className="text-white/80 font-medium">
                        AI-powered sequences
                      </strong>{" "}
                      - automated follow-up sequences, lead scoring models, and
                      next-best-action prompts
                    </span>
                  </li>
                  <li className="flex gap-3 items-start text-[14px] text-white/50 leading-relaxed">
                    <span className="w-1 h-1 rounded-full bg-accent/60 mt-[0.65em] flex-shrink-0" />
                    <span>
                      <strong className="text-white/80 font-medium">
                        Lead capture and qualification
                      </strong>{" "}
                      - web-to-lead forms, chatbots, and landing page
                      integrations that feed qualified prospects directly into
                      your pipeline
                    </span>
                  </li>
                  <li className="flex gap-3 items-start text-[14px] text-white/50 leading-relaxed">
                    <span className="w-1 h-1 rounded-full bg-accent/60 mt-[0.65em] flex-shrink-0" />
                    <span>
                      <strong className="text-white/80 font-medium">
                        Advanced analytics
                      </strong>{" "}
                      - customer lifetime value modelling, churn prediction, and
                      sales cycle analysis
                    </span>
                  </li>
                </ul>
                <p className="text-[14px] text-white/50 leading-relaxed mt-4">
                  This phased approach means every feature you add is built on a
                  working foundation. No automations firing into a broken
                  pipeline. No AI scoring leads that nobody follows up on.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
        </div>
      </ContentSection>

      {/* CRM Selection */}
      <ContentSection withBorder>
        <SectionHeader
          eyebrow="Platform comparison"
          title="CRM selection: which platform is right for you?"
          subtitle="There are more than 900 CRM products on the market today (G2, 2025). You need to find the three or four that genuinely fit your business and then pick the best one based on evidence, not a vendor's demo script."
        />

        <div className="grid md:grid-cols-2 gap-6">
          <Reveal delay={0}>
            <SpotlightCard>
              <div className="p-6">
                <h3 className="text-[17px] font-semibold text-white/90 mb-3">
                  Salesforce
                </h3>
                <p className="text-[14px] text-white/50 leading-relaxed">
                  Still the market leader with roughly 22% global market share
                  (IDC, 2024). Enormously capable, but also complex and
                  expensive. If your sales team is under 20 people, Salesforce
                  is likely more platform than you need. It excels in larger
                  organisations with dedicated admin resource and complex
                  multi-product sales cycles.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
          <Reveal delay={0.1}>
            <SpotlightCard>
              <div className="p-6">
                <h3 className="text-[17px] font-semibold text-white/90 mb-3">
                  HubSpot
                </h3>
                <p className="text-[14px] text-white/50 leading-relaxed">
                  The strongest option for businesses that want their CRM and
                  marketing automation in one place without heavy configuration.
                  HubSpot&apos;s free tier is genuinely useful, and its paid
                  tiers scale well up to about 200 users. The trade-off is less
                  flexibility in custom objects and enterprise reporting
                  compared to Salesforce.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
          <Reveal delay={0.2}>
            <SpotlightCard>
              <div className="p-6">
                <h3 className="text-[17px] font-semibold text-white/90 mb-3">
                  Microsoft Dynamics 365
                </h3>
                <p className="text-[14px] text-white/50 leading-relaxed">
                  The natural choice if your business already runs on Microsoft
                  (Teams, Outlook, SharePoint, Azure). The integration is a
                  genuine advantage. However, Dynamics 365 implementations tend
                  to be more complex and costlier than HubSpot, and you will
                  likely need a systems integrator.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
          <Reveal delay={0.3}>
            <SpotlightCard>
              <div className="p-6">
                <h3 className="text-[17px] font-semibold text-white/90 mb-3">
                  Zoho CRM
                </h3>
                <p className="text-[14px] text-white/50 leading-relaxed">
                  Often overlooked, but a serious contender for SMEs that want
                  solid functionality without enterprise pricing. Zoho&apos;s
                  ecosystem includes over 40 integrated apps. If budget matters
                  - and it always should - Zoho deserves a place on your
                  shortlist.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
        </div>

        <Prose>
          <p className="mt-8">
            The right CRM depends on your team size, sales complexity, existing
            technology stack, and budget - not on which vendor has the best
            marketing. We help you weigh those factors objectively. As part of
            our{" "}
            <Link href="/services/software-selection/">
              independent software selection consulting
            </Link>
            , we evaluate the major platforms regularly.
          </p>
        </Prose>
      </ContentSection>

      {/* Why CRM implementations go wrong */}
      <ContentSection withBorder>
        <SectionHeader
          eyebrow="Common pitfalls"
          title="Why CRM implementations go wrong"
          subtitle="Forrester reported in 2024 that 49% of CRM projects either fail outright or deliver significantly less value than expected. Here are the patterns we see repeatedly."
        />

        <div className="space-y-6">
          <Reveal>
            <SpotlightCard>
              <div className="p-6">
                <h3 className="text-[17px] font-semibold text-white/90 mb-3">
                  1. No clear definition of what &quot;done&quot; looks like
                </h3>
                <p className="text-[14px] text-white/50 leading-relaxed">
                  &quot;We need better visibility of the pipeline&quot; is not a
                  goal. &quot;Every rep logs activity within 24 hours, pipeline
                  is reviewed weekly, and forecast accuracy is within 15%&quot;
                  - that is a goal. Without measurable targets, nobody can tell
                  whether the project worked.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>

          <Reveal>
            <SpotlightCard>
              <div className="p-6">
                <h3 className="text-[17px] font-semibold text-white/90 mb-3">
                  2. Treating it as an IT project instead of a sales project
                </h3>
                <p className="text-[14px] text-white/50 leading-relaxed">
                  Your CRM exists to help your sales team, account managers, and
                  customer service reps do their jobs better. But too often, the
                  project gets handed to IT because &quot;it is a technology
                  thing.&quot; IT does the technical work competently, but
                  nobody asks the people who will live in the system eight hours
                  a day what they need.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>

          <Reveal>
            <SpotlightCard>
              <div className="p-6">
                <h3 className="text-[17px] font-semibold text-white/90 mb-3">
                  3. Dirty data, dirty system
                </h3>
                <p className="text-[14px] text-white/50 leading-relaxed">
                  Migrating your existing data without cleaning it first is one
                  of the most common and most damaging mistakes. Duplicate
                  contacts, outdated company records, deals that closed three
                  years ago still sitting in the pipeline - all of it comes
                  across into your shiny new CRM and immediately undermines
                  trust. If your reps cannot trust the data, they will not trust
                  the system.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>

          <Reveal>
            <SpotlightCard>
              <div className="p-6">
                <h3 className="text-[17px] font-semibold text-white/90 mb-3">
                  4. Under-investing in training and change management
                </h3>
                <p className="text-[14px] text-white/50 leading-relaxed">
                  The vendor provides a handful of generic training sessions.
                  Your team nods along. Then everyone goes back to their desks
                  and has no idea how the system applies to their role. Real CRM
                  training is role-specific, scenario-based, and repeated. One
                  session is not enough.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>

          <Reveal>
            <SpotlightCard>
              <div className="p-6">
                <h3 className="text-[17px] font-semibold text-white/90 mb-3">
                  5. Over-customisation in the first phase
                </h3>
                <p className="text-[14px] text-white/50 leading-relaxed">
                  Some businesses try to customise every field, workflow, and
                  automation before anyone has used the system in anger. The
                  result is a rigid setup that does not match how people
                  actually work. Start simple. Get people using it. Then
                  customise based on real feedback, not theoretical
                  requirements.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>

          <Reveal>
            <SpotlightCard>
              <div className="p-6">
                <h3 className="text-[17px] font-semibold text-white/90 mb-3">
                  6. No executive sponsor with real authority
                </h3>
                <p className="text-[14px] text-white/50 leading-relaxed">
                  CRM adoption requires someone senior enough to say: &quot;This
                  is how we work now. Pipeline reviews happen in the CRM. If it
                  is not in the system, it does not exist.&quot; Without that
                  level of sponsorship, the CRM becomes optional - and optional
                  tools do not get used.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
        </div>

        <Prose>
          <p className="mt-8">
            If you want to avoid these traps, COGO can help - whether you are
            starting fresh or rescuing a CRM project that has gone off track.
            Our team focuses on{" "}
            <Link href="/services/implementation-support/">
              making sure your system integrator delivers on time and on budget
            </Link>
            .
          </p>
        </Prose>
      </ContentSection>

      {/* CRM Strategy */}
      <ContentSection withBorder>
        <SectionHeader
          eyebrow="Strategy"
          title="CRM strategy: beyond the software"
          subtitle="A CRM is not a strategy. It is a tool that supports a strategy. The distinction matters because many businesses buy a CRM platform expecting it to fix problems that are really about people, process, and culture."
        />

        <div className="space-y-8">
          <Reveal>
            <div>
              <h3 className="text-[17px] font-semibold text-white/85 mb-3">
                What does your sales process actually look like?
              </h3>
              <p className="text-[15px] text-white/55 leading-[1.8]">
                Not the version on the slide deck from the last quarterly
                review. The real one - where reps skip stages, qualification is
                inconsistent, and nobody agrees on what a &quot;qualified
                opportunity&quot; means. Your CRM should codify the process you
                want, but it has to be rooted in the process you have, or people
                will work around it.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div>
              <h3 className="text-[17px] font-semibold text-white/85 mb-3">
                What data do you actually need to make decisions?
              </h3>
              <p className="text-[15px] text-white/55 leading-[1.8]">
                Most CRM systems capture far more data than anyone uses. Every
                additional required field is a tax on your sales team&apos;s
                time. Be ruthless about what you collect. If nobody is going to
                look at a field in a report or use it to trigger a workflow, do
                not ask your reps to fill it in.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div>
              <h3 className="text-[17px] font-semibold text-white/85 mb-3">
                How will you measure success?
              </h3>
              <p className="text-[15px] text-white/55 leading-[1.8]">
                Before you go live, define the metrics that matter: lead
                response time, pipeline conversion rates, forecast accuracy,
                customer retention rates, average deal cycle length. Measure
                them before the CRM goes in, and track them after. That is how
                you prove ROI - or identify where things need to change.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div>
              <h3 className="text-[17px] font-semibold text-white/85 mb-3">
                Who owns the CRM long-term?
              </h3>
              <p className="text-[15px] text-white/55 leading-[1.8]">
                After the consultants leave, someone in your business needs to
                own the system. That means a dedicated CRM administrator (or at
                minimum a power user with allocated time), a process for change
                requests, and a governance model for data quality. Without
                ongoing ownership, even the best CRM implementation degrades
                within 12 to 18 months.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div>
              <h3 className="text-[17px] font-semibold text-white/85 mb-3">
                How does CRM fit into your wider technology strategy?
              </h3>
              <p className="text-[15px] text-white/55 leading-[1.8]">
                Your CRM does not operate in isolation. It connects to your ERP,
                your marketing platform, your customer support tools, your
                finance system. If you are planning a broader transformation, it
                makes sense to align your CRM and ERP decisions. Talk to us
                about how our{" "}
                <Link
                  href="/services/erp-consulting/"
                  className="text-accent underline underline-offset-4 decoration-accent/30 hover:decoration-accent/60 transition-colors"
                >
                  ERP consulting and advisory practice
                </Link>{" "}
                works alongside CRM projects.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <p className="text-[15px] text-white/55 leading-[1.8] mt-8">
            A clear CRM strategy, defined before you buy anything, is the single
            biggest predictor of project success. It costs almost nothing to get
            right and a fortune to fix later.
          </p>
        </Reveal>
      </ContentSection>

      {/* FAQ */}
      <ContentSection withBorder>
        <SectionHeader eyebrow="FAQ" title="Frequently asked questions" />

        <div className="space-y-12">
          <Reveal>
            <div>
              <h3 className="text-[17px] font-semibold text-white/85 mb-3">
                How long does a CRM implementation take?
              </h3>
              <p className="text-[15px] text-white/55 leading-[1.8]">
                For a mid-market business with 20 to 100 users, expect 8 to 16
                weeks for a solid core implementation (Blocks 1 and 2).
                Marketing automation, AI sequences, and advanced integrations
                (Block 3) typically add another 8 to 12 weeks. Beware of anyone
                promising full deployment in under six weeks - speed usually
                comes at the expense of adoption.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div>
              <h3 className="text-[17px] font-semibold text-white/85 mb-3">
                How much does CRM consulting cost in Ireland?
              </h3>
              <p className="text-[15px] text-white/55 leading-[1.8]">
                Our engagements typically range from EUR 15,000 for a focused
                CRM selection and strategy project to EUR 50,000+ for
                end-to-end advisory across selection, implementation oversight,
                and adoption support. That is separate from software licence
                costs and implementation partner fees. The exact figure depends
                on your team size, sales process complexity, and whether you are
                starting fresh or rescuing an existing system.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div>
              <h3 className="text-[17px] font-semibold text-white/85 mb-3">
                Do we need a CRM consultant if we are a small business?
              </h3>
              <p className="text-[15px] text-white/55 leading-[1.8]">
                If you have fewer than 10 users and a straightforward sales
                process, you can probably handle setup yourself with a good
                implementation partner. Where a CRM consultant adds value -
                even for smaller businesses - is in the selection phase.
                Choosing the wrong platform and then migrating to another one 18
                months later is vastly more expensive than getting independent
                advice upfront. Our{" "}
                <Link
                  href="/services/software-selection/"
                  className="text-accent underline underline-offset-4 decoration-accent/30 hover:decoration-accent/60 transition-colors"
                >
                  independent software selection consulting
                </Link>{" "}
                is designed for exactly this.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div>
              <h3 className="text-[17px] font-semibold text-white/85 mb-3">
                Can you help fix a CRM that has already been implemented badly?
              </h3>
              <p className="text-[15px] text-white/55 leading-[1.8]">
                Yes, and it is more common than you would think. About a third
                of our CRM engagements are rescue projects - businesses that
                implemented a CRM one to three years ago and are not getting
                value from it. We audit the current setup, identify what is
                broken (usually a combination of data quality, process
                alignment, and training gaps), and build a remediation plan. It
                is almost always cheaper than starting again from scratch.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div>
              <h3 className="text-[17px] font-semibold text-white/85 mb-3">
                Which CRM is best for Irish businesses?
              </h3>
              <p className="text-[15px] text-white/55 leading-[1.8]">
                There is no single answer. The right CRM depends on your
                industry, team size, budget, and sales complexity. We have seen
                Irish businesses thrive on Salesforce, HubSpot, Dynamics 365,
                and Zoho alike. What matters more than which platform you choose
                is how well it is implemented and how consistently your team
                uses it.
              </p>
            </div>
          </Reveal>
        </div>
      </ContentSection>

      <PageCTA
        title="Talk to us about your CRM"
        subtitle="Whether you are selecting a CRM for the first time, struggling with adoption, or building a CRM strategy that connects sales, marketing, and service - we can help. COGO is independent. We do not resell software and we do not earn referral fees."
        buttonText="Book a call"
        buttonHref="/contact/"
      />
    </PageLayout>
  );
}
