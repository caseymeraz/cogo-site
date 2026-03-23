import type { Metadata } from "next";
import Link from "next/link";
import PageLayout from "../../components/PageLayout";
import PageHeader from "../../components/PageHeader";
import ContentSection from "../../components/ContentSection";
import Reveal from "../../components/Reveal";
import Accordion from "../../components/Accordion";
import PageCTA from "../../components/PageCTA";
import SvgSection from "../../components/SvgSection";
import NetworkNodes from "../../components/svg/NetworkNodes";

export const metadata: Metadata = {
  title: "FAQ | ERP, SAP & Business Transformation | COGO",
  description:
    "Answers to common questions about ERP systems, SAP S/4HANA, business transformation, implementation costs, timelines, and independent consulting.",
};

const faqItems = [
  {
    question: "1. What is ERP?",
    answer: (
      <>
        <p>
          ERP stands for enterprise resource planning. In practical terms, it is
          a single software platform that brings your finance, operations, supply
          chain, manufacturing, HR, and other core business functions into one
          system. Instead of running separate spreadsheets and disconnected
          databases across departments, an ERP gives everyone a shared version of
          the truth.
        </p>
        <p>
          That matters because when your sales team, warehouse, and finance
          function are all working from the same data, you make faster decisions
          and waste less time reconciling numbers. Modern ERP systems run in the
          cloud, which means lower infrastructure costs and regular updates
          without painful upgrades. But the technology is only part of the
          picture - getting the business processes right before you configure the
          software is what separates a successful project from an expensive
          disappointment.
        </p>
        <p>
          If you are considering ERP for the first time or replacing an aging
          system, our{" "}
          <Link
            href="/services/erp-consulting/"
            className="text-accent underline underline-offset-4 decoration-accent/30 hover:decoration-accent/60 transition-colors"
          >
            ERP consulting
          </Link>{" "}
          team can help you work out what you actually need before you speak to
          any vendor.
        </p>
      </>
    ),
  },
  {
    question: "2. How long does an ERP implementation take?",
    answer: (
      <>
        <p>
          The honest answer is: it depends on the size and complexity of your
          organisation. A straightforward, single-site implementation for a
          mid-market company typically takes 9 to 18 months from project kick-off
          to go-live. Multi-site or multi-country rollouts can take two to three
          years.
        </p>
        <p>
          Several factors affect the timeline. The number of business processes
          you need to change, the amount of data migration required, how many
          integrations you need with other systems, and - critically - how
          available your own people are to work on the project. Most delays are
          not caused by the technology. They happen because decisions stall, key
          people are pulled back into their day jobs, or scope creeps beyond what
          was originally agreed.
        </p>
        <p>
          A realistic plan with proper contingency will always outperform an
          aggressive timeline that falls apart at the first hurdle. Our{" "}
          <Link
            href="/services/implementation-support/"
            className="text-accent underline underline-offset-4 decoration-accent/30 hover:decoration-accent/60 transition-colors"
          >
            implementation support
          </Link>{" "}
          service is designed to keep your project on track and protect your
          interests throughout.
        </p>
      </>
    ),
  },
  {
    question: "3. How much does an ERP system cost?",
    answer: (
      <>
        <p>
          ERP costs vary enormously, and anyone who gives you a firm number
          before understanding your business is guessing. That said, for a
          mid-market Irish company, you should expect a total investment of
          between EUR 250,000 and EUR 2 million or more, depending on the
          platform, the complexity of your processes, and how much customisation
          is required.
        </p>
        <p>
          The licence or subscription fee is usually only 20-30% of the total
          cost. The bulk of the spend goes on implementation services from a
          system integrator, data migration, integrations, testing, training, and
          change management. Ongoing costs - annual subscriptions, support
          contracts, and internal resources - are often underestimated during the
          business case stage.
        </p>
        <p>
          We have published a detailed{" "}
          <Link
            href="/resources/guides/erp-cost-guide/"
            className="text-accent underline underline-offset-4 decoration-accent/30 hover:decoration-accent/60 transition-colors"
          >
            ERP cost guide
          </Link>{" "}
          that breaks down each cost category and gives you a realistic framework
          for budgeting.
        </p>
      </>
    ),
  },
  {
    question: "4. What is SAP S/4HANA?",
    answer: (
      <>
        <p>
          SAP S/4HANA is SAP&apos;s current-generation ERP platform, built on an
          in-memory database called HANA. It replaces the older SAP ECC (ERP
          Central Component) system that thousands of organisations still run
          today. SAP has set a deadline for ECC end-of-support, which means every
          SAP customer will eventually need to move.
        </p>
        <p>
          The shift to S/4HANA is not a simple upgrade. It is, in practice, a
          re-implementation. The data model has changed, the user interface is
          different (SAP Fiori), and many of the transactions and reports you
          rely on today will work differently. That creates both risk and
          opportunity - risk if you treat it as a purely technical exercise, and
          opportunity if you use it to simplify your processes and clean up years
          of accumulated complexity.
        </p>
        <p>
          Whether you are running a greenfield implementation or a brownfield
          conversion, independent advice before you commit to a path is worth
          the investment. Learn more about{" "}
          <Link
            href="/services/sap-consulting/s4hana-migration/"
            className="text-accent underline underline-offset-4 decoration-accent/30 hover:decoration-accent/60 transition-colors"
          >
            S/4HANA migration
          </Link>{" "}
          and how we help clients navigate it.
        </p>
      </>
    ),
  },
  {
    question: "5. What is business transformation?",
    answer: (
      <>
        <p>
          Business transformation is the deliberate redesign of how your
          organisation operates - its processes, structures, technology, and ways
          of working - to achieve a step change in performance. It goes well
          beyond IT. A new ERP system might be part of a transformation
          programme, but the technology is the enabler, not the transformation
          itself.
        </p>
        <p>
          Genuine transformation starts with understanding where your business
          needs to be in three to five years and honestly assessing the gap
          between that future state and where you stand today. It typically
          involves rethinking end-to-end processes, removing duplication and
          manual workarounds, restructuring teams, and building new capabilities.
          None of that is comfortable, and none of it happens without sustained
          leadership commitment.
        </p>
        <p>
          We work with leadership teams to plan and execute{" "}
          <Link
            href="/services/business-transformation/"
            className="text-accent underline underline-offset-4 decoration-accent/30 hover:decoration-accent/60 transition-colors"
          >
            business transformation
          </Link>{" "}
          programmes that deliver measurable results, not just slide decks full
          of ambitions.
        </p>
      </>
    ),
  },
  {
    question: "6. What is client-side consulting?",
    answer: (
      <>
        <p>
          Client-side consulting means we work exclusively for you, the buyer,
          not for a software vendor or system integrator. We have no licence
          resale agreements, no implementation partnerships, and no referral
          fees. When we recommend a product or a partner, it is because we
          believe it is the right choice for your situation.
        </p>
        <p>
          This distinction matters more than most people realise. The technology
          market is full of conflicts of interest. Many of the firms advising
          you on what to buy also earn revenue from selling it to you. That does
          not make them dishonest, but it does create a bias you should be aware
          of. An independent adviser has no commercial reason to steer you
          towards any particular outcome.
        </p>
        <p>
          Read more about{" "}
          <Link
            href="/about/why-cogo/"
            className="text-accent underline underline-offset-4 decoration-accent/30 hover:decoration-accent/60 transition-colors"
          >
            why COGO operates on a client-side basis
          </Link>{" "}
          and what that means for the advice you receive.
        </p>
      </>
    ),
  },
  {
    question: "7. Do I need a consultant to implement ERP?",
    answer: (
      <>
        <p>
          You do not strictly need one, but doing it without independent support
          is a significant gamble. Your system integrator will manage the
          technical implementation, but their commercial incentive is to sell you
          more days, not fewer. Without someone on your side who has been through
          this before, you are relying entirely on the SI&apos;s judgement about
          what is right for your business.
        </p>
        <p>
          A good consultant will help you define your requirements before you go
          to market, run a fair selection process, negotiate contracts that
          protect you, and provide programme oversight during implementation.
          They will also challenge your own organisation when it drifts into
          scope creep or avoids difficult decisions. The cost of independent
          advice is typically a fraction of the overall project budget, and the
          value it protects is substantial.
        </p>
        <p>
          If you want to understand how independent support works in practice,
          take a look at our{" "}
          <Link
            href="/services/erp-consulting/"
            className="text-accent underline underline-offset-4 decoration-accent/30 hover:decoration-accent/60 transition-colors"
          >
            ERP consulting
          </Link>{" "}
          services.
        </p>
      </>
    ),
  },
  {
    question:
      "8. What is the difference between a system integrator and a consultant?",
    answer: (
      <>
        <p>
          A system integrator (SI) is the firm that configures and deploys your
          ERP software. They bring technical expertise, functional consultants,
          developers, and project managers. They are essential to any
          implementation - without them, nothing gets built.
        </p>
        <p>
          A client-side consultant sits on your side of the table. Their job is
          to make sure the SI delivers what was agreed, that your business
          requirements are properly translated into system design, and that
          commercial and contractual risks are managed. Think of it like building
          a house: the SI is the builder, the client-side consultant is your
          architect and project manager, making sure the builder follows the
          plans and the finished product is what you asked for.
        </p>
        <p>
          We explain this distinction in more detail on our{" "}
          <Link
            href="/about/why-cogo/"
            className="text-accent underline underline-offset-4 decoration-accent/30 hover:decoration-accent/60 transition-colors"
          >
            why COGO
          </Link>{" "}
          page, including how the two roles work together on a well-run project.
        </p>
      </>
    ),
  },
  {
    question:
      "9. Should we use the same company to select and implement ERP?",
    answer: (
      <>
        <p>
          In most cases, no. If the same firm that helps you choose the software
          also earns revenue from implementing it, there is an inherent conflict.
          They have a commercial interest in recommending the platform they are
          best placed to implement, not necessarily the platform that best fits
          your business.
        </p>
        <p>
          Keeping selection and implementation separate is not always practical -
          smaller organisations may not have the budget for two separate advisory
          engagements. But for mid-market and larger companies, an independent
          selection process almost always delivers a better outcome. You get a
          wider view of the market, more objective evaluation criteria, and a
          stronger negotiating position with vendors and SIs.
        </p>
        <p>
          Our{" "}
          <Link
            href="/services/software-selection/"
            className="text-accent underline underline-offset-4 decoration-accent/30 hover:decoration-accent/60 transition-colors"
          >
            software selection
          </Link>{" "}
          service is designed to give you exactly that: a fair, structured
          process that finds the right platform for your business, not the most
          convenient one for any adviser.
        </p>
      </>
    ),
  },
  {
    question: "10. How do I convince the board to invest in new ERP?",
    answer: (
      <>
        <p>
          Start with the problem, not the technology. Boards do not approve ERP
          projects - they approve investments that reduce risk, improve margins,
          or enable growth. Your business case needs to quantify the cost of
          staying on the current system (operational inefficiency, manual
          workarounds, inability to scale, compliance risk) and show a credible
          return on the proposed investment.
        </p>
        <p>
          Be honest about the costs, the timeline, and the disruption. Nothing
          erodes board confidence faster than an optimistic business case that
          has to be revised upward six months in. Include a realistic view of
          total cost of ownership over five years, a phased implementation plan,
          and a clear governance structure that shows how the investment will be
          managed.
        </p>
        <p>
          We have a{" "}
          <Link
            href="/resources/templates/transformation-business-case/"
            className="text-accent underline underline-offset-4 decoration-accent/30 hover:decoration-accent/60 transition-colors"
          >
            transformation business case template
          </Link>{" "}
          that gives you a proven structure for presenting the argument to your
          board.
        </p>
      </>
    ),
  },
  {
    question: "11. What questions should I ask an ERP vendor?",
    answer: (
      <>
        <p>
          The questions that matter most are the ones vendors least want to
          answer. Ask about total cost of ownership, not just licence fees. Ask
          for references from companies in your industry and of a similar size -
          and then actually call those references. Ask what percentage of
          implementations are delivered on time and on budget. Ask about the exit
          terms in their contract.
        </p>
        <p>
          You should also probe the product roadmap. Where is the vendor
          investing? Is the functionality you need available today, or is it
          &quot;on the roadmap&quot; - which often means it does not exist yet.
          Ask about integration capabilities, especially if you run other
          specialist systems that need to connect. And ask about the partner
          ecosystem - who will actually implement the system, and what is their
          track record?
        </p>
        <p>
          Our{" "}
          <Link
            href="/resources/guides/how-to-choose-erp/"
            className="text-accent underline underline-offset-4 decoration-accent/30 hover:decoration-accent/60 transition-colors"
          >
            guide to choosing ERP
          </Link>{" "}
          includes a full list of questions to ask vendors, along with guidance
          on how to evaluate their answers.
        </p>
      </>
    ),
  },
  {
    question: "12. What is operational excellence?",
    answer: (
      <>
        <p>
          Operational excellence is a management philosophy focused on
          continuously improving the way your organisation delivers value to its
          customers. It is not a one-off project or a set of tools - it is a
          sustained commitment to eliminating waste, reducing variability, and
          building a culture where everyone looks for better ways to work.
        </p>
        <p>
          In practice, operational excellence draws on methodologies such as
          Lean, Six Sigma, and theory of constraints. But the methodology
          matters less than the mindset. The organisations that do this well have
          leaders who are genuinely curious about how work gets done, who trust
          their frontline teams to identify problems, and who invest in building
          problem-solving capability at every level.
        </p>
        <p>
          If you want to explore what operational excellence could look like in
          your organisation, have a look at our{" "}
          <Link
            href="/services/business-transformation/"
            className="text-accent underline underline-offset-4 decoration-accent/30 hover:decoration-accent/60 transition-colors"
          >
            business transformation
          </Link>{" "}
          services.
        </p>
      </>
    ),
  },
  {
    question: "13. What is CSRD reporting?",
    answer: (
      <>
        <p>
          The Corporate Sustainability Reporting Directive (CSRD) is an EU
          regulation that requires companies to report detailed information about
          their environmental, social, and governance (ESG) performance. It
          replaces the earlier Non-Financial Reporting Directive (NFRD) and
          dramatically expands the scope - both in terms of what must be reported
          and which companies are covered.
        </p>
        <p>
          For Irish businesses, this is not a future concern. The first wave of
          CSRD reporting is already underway for large listed companies, and the
          requirements will cascade to large private companies and eventually to
          listed SMEs. The data collection burden is substantial, and many
          organisations are finding that their existing systems simply cannot
          produce the information required in the right format.
        </p>
        <p>
          We have written about{" "}
          <Link
            href="/resources/blog/csrd-reporting-ireland/"
            className="text-accent underline underline-offset-4 decoration-accent/30 hover:decoration-accent/60 transition-colors"
          >
            CSRD reporting in Ireland
          </Link>{" "}
          and what it means for your finance, operations, and IT functions.
        </p>
      </>
    ),
  },
  {
    question: "14. What is the best ERP for food manufacturing?",
    answer: (
      <>
        <p>
          There is no single &quot;best&quot; ERP for food manufacturing - the
          right choice depends on your size, complexity, regulatory requirements,
          and growth plans. That said, food manufacturing has specific needs that
          many general-purpose ERP systems handle poorly: batch traceability, lot
          tracking, shelf-life management, recipe and formula management,
          catch-weight processing, and compliance with food safety standards like
          BRCGS and FSSC 22000.
        </p>
        <p>
          The platforms that tend to perform well in this sector include SAP
          S/4HANA (for larger operations), Microsoft Dynamics 365 (for
          mid-market), and specialist systems like CSB-System, Aptean, and Infor
          CloudSuite Food & Beverage. The critical thing is to evaluate them
          against your specific requirements, not against generic feature lists
          or analyst rankings.
        </p>
        <p>
          We have deep experience in{" "}
          <Link
            href="/industries/food-manufacturing/"
            className="text-accent underline underline-offset-4 decoration-accent/30 hover:decoration-accent/60 transition-colors"
          >
            food manufacturing
          </Link>{" "}
          and can help you navigate the selection process with a clear
          understanding of what actually matters in your sector.
        </p>
      </>
    ),
  },
  {
    question: "15. Why do ERP projects fail?",
    answer: (
      <>
        <p>
          ERP projects rarely fail because of the technology. They fail because
          of poor planning, unclear ownership, unrealistic expectations, and
          inadequate change management. The most common patterns include:
          starting implementation before the business processes are properly
          defined, underestimating the effort required for data migration and
          testing, failing to invest in training and adoption, and allowing scope
          to expand without adjusting the budget and timeline.
        </p>
        <p>
          Another frequent cause of failure is a weak relationship between the
          client and the system integrator. If you do not have people on your
          side who understand the technology well enough to challenge the
          SI&apos;s recommendations, you will end up with a system that reflects
          their preferences rather than your needs. Contract structures that do
          not adequately protect the client are another recurring problem.
        </p>
        <p>
          We have written in detail about{" "}
          <Link
            href="/resources/blog/why-erp-implementations-fail/"
            className="text-accent underline underline-offset-4 decoration-accent/30 hover:decoration-accent/60 transition-colors"
          >
            why ERP implementations fail
          </Link>{" "}
          and what you can do to make sure yours does not.
        </p>
      </>
    ),
  },
];

export default function FAQPage() {
  return (
    <PageLayout>
      <PageHeader
        eyebrow="FAQ"
        title="Frequently asked questions"
        subtitle="Practical answers to the questions we hear most often about ERP, SAP, business transformation, and independent consulting."
      />

      <SvgSection caption="Connected answers for your transformation questions">
        <NetworkNodes />
      </SvgSection>

      <ContentSection withBorder>
        <Reveal>
          <Accordion items={faqItems} />
        </Reveal>
      </ContentSection>

      <PageCTA />
    </PageLayout>
  );
}
