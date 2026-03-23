import type { Metadata } from "next";
import Link from "next/link";
import PageLayout from "../../components/PageLayout";
import PageHeader from "../../components/PageHeader";
import ContentSection from "../../components/ContentSection";
import Reveal from "../../components/Reveal";
import PageCTA from "../../components/PageCTA";

export const metadata: Metadata = {
  title: "Blog | COGO Consulting",
  description:
    "Independent insights on ERP, business transformation, and technology strategy for mid-market businesses across Ireland and the UK.",
};

const posts = [
  {
    title: "Why ERP implementations fail: 7 hard lessons from the client side",
    description:
      "70% of ERP implementations fail to meet expectations. As independent, client-side consultants, we break down the 7 real reasons ERP projects go wrong and how to prevent failure.",
    href: "/resources/blog/why-erp-implementations-fail/",
    author: "Laurence Phelan",
    date: "2026-03-23",
  },
  {
    title: "Enterprise Ireland grants: how to fund your transformation project",
    description:
      "A practical guide to Enterprise Ireland grants that fund technology and transformation projects. Which grants apply, how to apply, and how COGO clients use them.",
    href: "/resources/blog/enterprise-ireland-grants/",
    author: "Lance Harcourt",
    date: "2026-03-23",
  },
  {
    title: "Outgrown Sage? Here is what to do next",
    description:
      "If your Sage system is holding you back, here are the signs, your realistic options, and how to evaluate what comes next - from independent ERP consultants.",
    href: "/resources/blog/outgrown-sage/",
    author: "Lance Harcourt",
    date: "2026-03-23",
  },
  {
    title: "CSRD reporting: what Irish companies need from their systems",
    description:
      "CSRD is coming for Irish businesses. Here is what it means for your ERP, reporting systems, and data collection - and what to do about it now.",
    href: "/resources/blog/csrd-reporting-ireland/",
    author: "Laurence Phelan",
    date: "2026-03-23",
  },
  {
    title: "How your ERP system can make or break BRCGS compliance",
    description:
      "Your ERP system can make or break BRCGS certification. See exactly which modules map to BRCGS requirements, which ERPs support food safety, and download our compliance checklist.",
    href: "/resources/blog/brcgs-compliance-technology/",
    author: "Lance Harcourt",
    date: "2026-03-23",
  },
  {
    title:
      "Computer system validation: what pharma manufacturers need to know before touching their ERP",
    description:
      "Computer system validation is non-negotiable in pharma. Learn how CSV applies to ERP systems, what regulators expect, and how GAMP 5 structures the work.",
    href: "/resources/blog/computer-system-validation-pharma/",
    author: "Laurence Phelan",
    date: "2026-03-23",
  },
  {
    title:
      "Your ERP implementation plan is probably missing the parts that matter most",
    description:
      "Most ERP implementation plans are either too vague or too detailed. Here is what a solid ERP implementation plan actually contains, the common mistakes, and a template structure you can adapt.",
    href: "/resources/blog/erp-implementation-plan/",
    author: "Lance Harcourt",
    date: "2026-03-23",
  },
  {
    title:
      "FSSC 22000: what your food business actually needs to get certified",
    description:
      "What FSSC 22000 demands from your food safety systems, how it differs from BRCGS, and the ERP features that make certification manageable. Independent advice from COGO.",
    href: "/resources/blog/fssc-22000-systems/",
    author: "Lance Harcourt",
    date: "2026-03-23",
  },
  {
    title:
      "Food safety management systems: what they are, what they need, and how to choose the right technology",
    description:
      "A practical guide to food safety management systems: HACCP principles, technology requirements, ERP vs standalone FSMS, and how to choose the right approach for your business.",
    href: "/resources/blog/food-safety-management-systems/",
    author: "Lance Harcourt",
    date: "2026-03-23",
  },
  {
    title:
      "Electronic batch records: why paper is costing your pharma business more than you think",
    description:
      "How electronic batch records replace paper in pharmaceutical manufacturing, the regulatory drivers behind the shift, and what to look for in your ERP system.",
    href: "/resources/blog/electronic-batch-records/",
    author: "Laurence Phelan",
    date: "2026-03-23",
  },
  {
    title:
      "GxP compliance and your ERP: what regulated businesses actually need to know",
    description:
      "What GxP means for your ERP system: GMP, GLP, GCP, GDP requirements, how they affect ERP selection, and the features that keep you compliant.",
    href: "/resources/blog/gxp-compliance-erp/",
    author: "Laurence Phelan",
    date: "2026-03-23",
  },
  {
    title:
      "ERP data migration: the part of your project most likely to go wrong",
    description:
      "A practical guide to ERP data migration: types of data, migration strategies, data cleansing, testing, and the common mistakes that derail projects.",
    href: "/resources/blog/erp-data-migration/",
    author: "Lance Harcourt",
    date: "2026-03-23",
  },
  {
    title:
      "Finance transformation: what it really means and how to build a case for it",
    description:
      "Finance transformation is more than new software. A practical guide to the CFO's role, technology enablers, building the business case, and the stages of real transformation.",
    href: "/resources/blog/finance-transformation/",
    author: "Laurence Phelan",
    date: "2026-03-23",
  },
  {
    title: "ERP implementation life cycle: the six phases every project follows",
    description:
      "A practical guide to the ERP implementation life cycle - the six phases from planning to optimisation, realistic timelines, and the mistakes that derail each stage.",
    href: "/resources/blog/erp-implementation-life-cycle/",
    author: "Lance Harcourt",
    date: "2026-03-23",
  },
  {
    title: "ERP testing guide: how to test your ERP system properly",
    description:
      "A practical ERP testing guide covering unit, integration, UAT, regression, performance, and cutover rehearsal testing - with timelines, resources, and the mistakes that sink go-live.",
    href: "/resources/blog/erp-testing-guide/",
    author: "Lance Harcourt",
    date: "2026-03-23",
  },
  {
    title: "Benefits of ERP: what you actually get (and what you probably won't)",
    description:
      "An honest look at ERP benefits - the operational, financial, and strategic advantages that materialise, the ones that rarely do, and how to measure real ERP ROI.",
    href: "/resources/blog/benefits-of-erp/",
    author: "Laurence Phelan",
    date: "2026-03-23",
  },
  {
    title:
      "Digital supply chain transformation: a practical guide for Irish and UK businesses",
    description:
      "A practical guide to digital supply chain transformation - the technologies, business case, stages, and visibility gains that Irish and UK organisations need to understand.",
    href: "/resources/blog/supply-chain-digital-transformation/",
    author: "Laurence Phelan",
    date: "2026-03-23",
  },
  {
    title:
      "Change management framework: how to choose and apply one to your ERP project",
    description:
      "How to choose a change management framework for your ERP project - comparing ADKAR, Kotter, and Prosci, with practical advice on applying them to technology programmes.",
    href: "/resources/blog/change-management-framework/",
    author: "Laurence Phelan",
    date: "2026-03-23",
  },
  {
    title: "CRM implementation issues: the 7 problems that sink most projects",
    description:
      "The 7 most common CRM implementation issues - from data quality to user adoption - and practical advice on how to prevent each one before it derails your project.",
    href: "/resources/blog/crm-implementation-issues/",
    author: "Karl Llewellyn",
    date: "2026-03-23",
  },
  {
    title:
      "SAP Business One vs Microsoft Dynamics 365: an independent comparison",
    description:
      "An independent, side-by-side comparison of SAP Business One vs Microsoft Dynamics 365 covering cost, functionality, scalability, and fit for UK and Irish businesses.",
    href: "/resources/blog/sap-vs-dynamics/",
    author: "Lance Harcourt",
    date: "2026-03-23",
  },
  {
    title:
      "Integrated business planning: what it is, how it works, and the technology behind it",
    description:
      "What integrated business planning is, how it differs from S&OP, which technology platforms support it, and how to implement IBP in your organisation.",
    href: "/resources/blog/integrated-business-planning/",
    author: "Laurence Phelan",
    date: "2026-03-23",
  },
  {
    title:
      "MES vs ERP: understanding the manufacturing execution system and where it fits",
    description:
      "How a manufacturing execution system (MES) differs from ERP, when you need both, and what to consider when integrating them for your manufacturing operation.",
    href: "/resources/blog/mes-manufacturing-execution-system/",
    author: "Lance Harcourt",
    date: "2026-03-23",
  },
  {
    title: "Industry 4.0 in Ireland: a practical guide for manufacturers",
    description:
      "What Industry 4.0 means for Irish manufacturers, which technologies matter, what supports are available from Enterprise Ireland, and how to get started.",
    href: "/resources/blog/industry-4-0-ireland/",
    author: "Laurence Phelan",
    date: "2026-03-23",
  },
  {
    title: "Smart manufacturing: how to build your technology roadmap",
    description:
      "What smart manufacturing is, the core technologies involved, a maturity model for getting started, and how ERP serves as the backbone of a smart factory.",
    href: "/resources/blog/smart-manufacturing/",
    author: "Lance Harcourt",
    date: "2026-03-23",
  },
  {
    title: "ERP optimisation after go-live: why the real work starts now",
    description:
      "Your ERP is live but underperforming. This guide covers what ERP optimisation looks like after go-live - from hypercare through to long-term improvements.",
    href: "/resources/blog/erp-post-go-live-optimization/",
    author: "Lance Harcourt",
    date: "2026-03-23",
  },
  {
    title:
      "The independent ERP health check: what it is, when you need one, and what it actually covers",
    description:
      "An ERP health check is a structured, objective assessment of how well your ERP system is serving your business. Learn when you need one and what it covers.",
    href: "/resources/blog/erp-health-check/",
    author: "Laurence Phelan",
    date: "2026-03-23",
  },
  {
    title:
      "HPRA compliance: a technology guide for pharmaceutical manufacturers",
    description:
      "How to build the technology infrastructure your pharmaceutical operation needs for HPRA compliance - from validated ERP systems to electronic batch records and regulatory submissions.",
    href: "/resources/blog/hpra-compliance-guide/",
    author: "Laurence Phelan",
    date: "2026-03-23",
  },
  {
    title:
      "Value stream mapping for digital transformation and ERP selection",
    description:
      "Value stream mapping shows you where time and money are being wasted before you invest in new technology. Learn how VSM fits into transformation and ERP selection.",
    href: "/resources/blog/value-stream-mapping/",
    author: "Lance Harcourt",
    date: "2026-03-23",
  },
  {
    title:
      "Digital procurement transformation: technology, ERP, and the business case",
    description:
      "Procurement transformation is not just about buying software. Learn what digital procurement transformation actually involves, the technology that enables it, and how to build the business case.",
    href: "/resources/blog/digital-procurement-transformation/",
    author: "Laurence Phelan",
    date: "2026-03-23",
  },
];

export default function BlogIndexPage() {
  return (
    <PageLayout>
      <PageHeader
        eyebrow="Resources"
        title="Blog"
        subtitle="Independent insights on ERP, business transformation, and technology strategy from the COGO team."
      />

      <ContentSection withBorder>
        <div className="space-y-10">
          {posts.map((post, i) => (
            <Reveal key={post.href} delay={i < 6 ? i * 0.05 : 0}>
              <Link href={post.href} className="group block">
                <article className="border border-white/[0.06] rounded-2xl p-8 hover:border-white/[0.12] transition-colors duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <p className="text-[12px] text-white/30 font-medium">
                      {post.author}
                    </p>
                    <p className="text-[12px] text-white/30">{post.date}</p>
                  </div>
                  <h2 className="text-[18px] font-semibold text-white/90 tracking-[-0.01em] leading-snug mb-3 group-hover:text-accent transition-colors duration-300">
                    {post.title}
                  </h2>
                  <p className="text-[14px] text-white/45 leading-relaxed">
                    {post.description}
                  </p>
                </article>
              </Link>
            </Reveal>
          ))}
        </div>
      </ContentSection>

      <PageCTA />
    </PageLayout>
  );
}
