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
  title: "Public Sector ERP & Digital Transformation | COGO",
  description:
    "Independent guide to ERP and digital transformation for public sector organisations. HSE, NHS, and local government. Vendor-neutral advice from COGO Consulting.",
};

export default function PublicSectorPage() {
  return (
    <PageLayout>
      <PageHeader
        eyebrow="Industries"
        title="Public sector ERP and digital transformation: independent guidance for complex organisations"
        subtitle="Public sector organisations face unique challenges when selecting and implementing enterprise technology. Procurement rules, stakeholder complexity, and accountability requirements demand an approach built for your reality, not a vendor's sales cycle."
      />

      {/* Intro */}
      <ContentSection withBorder>
        <Prose>
          <p>
            Whether you run a hospital group, a local authority, a government
            agency, or a national health service, you are under pressure to
            modernise your technology while managing tight budgets, complex
            governance, and public accountability.
          </p>
          <p>
            At COGO, we have worked directly with organisations including the
            Health Service Executive (HSE) in Ireland on major technology
            transformation programmes. We understand how public sector
            organisations operate, where ERP implementations most commonly fail,
            and what it takes to deliver lasting change in environments where
            every decision faces scrutiny.
          </p>
          <p>
            We are independent. We do not sell software. We do not take vendor
            commissions. That independence is exactly what public sector
            organisations need when the stakes are high and the vendor landscape
            is crowded with competing claims. Our{" "}
            <Link href="/services/erp-consulting/">
              independent ERP consulting services
            </Link>{" "}
            are built for this kind of work.
          </p>
        </Prose>
      </ContentSection>

      <PageImage
        src="/images/hero-team-tablet.jpg"
        alt="Public sector team reviewing digital transformation progress"
      />

      {/* Why public sector needs ERP */}
      <ContentSection withBorder>
        <SectionHeader
          eyebrow="The fundamentals"
          title="Why public sector organisations need modern ERP"
          subtitle="Legacy systems, fragmented data, and manual processes cost public sector organisations more than most realise. The case for modernisation is built on measurable inefficiency, not aspiration."
        />
        <Prose>
          <h3>Procurement complexity at scale</h3>
          <p>
            A typical acute hospital procures from thousands of suppliers. A
            local authority manages everything from highways maintenance
            contracts to social care providers. The HSE spent EUR 5.96 billion
            on non-pay costs in 2023 alone (HSE Annual Report, 2023). Managing
            that level of expenditure across fragmented procurement systems
            leads to waste, maverick spending, and missed savings.
          </p>
          <p>
            Your ERP must consolidate procurement across departments, enforce
            approval workflows, track contract compliance, and provide spend
            visibility at category level. Without this, purchasing decisions
            happen in the dark.
          </p>

          <h3>Financial management and reporting</h3>
          <p>
            Public sector finance is complex. NHS trusts in England manage
            budgets that can exceed GBP 1 billion annually. Irish hospital
            groups report to the HSE, which reports to the Department of Health.
            Local authorities must comply with the Code of Practice on Local
            Authority Accounting in the UK or the Accounting Code of Practice in
            Ireland.
          </p>
          <p>
            Your ERP must handle fund accounting, commitment accounting,
            cost-centre reporting, multi-entity consolidation, and the specific
            reporting requirements of your regulators. NHS England&#39;s 2023
            review of financial sustainability highlighted that trusts with poor
            financial reporting systems were significantly more likely to run
            deficits (NHS England, 2023).
          </p>

          <h3>HR and workforce management</h3>
          <p>
            The NHS employs over 1.5 million people (NHS Digital, 2024). The
            HSE employs approximately 130,000. Local authorities across the UK
            employ over 1.4 million. Your ERP must handle complex pay structures
            including shift premiums, on-call allowances, and agency staff. It
            must support workforce planning, absence management, and compliance
            with working time directives.
          </p>

          <h3>Supply chain resilience</h3>
          <p>
            The Covid-19 pandemic exposed the fragility of public sector supply
            chains worldwide. PPE shortages, ventilator procurement challenges,
            and vaccine distribution logistics all highlighted the need for
            real-time visibility of inventory, supplier performance, and demand
            forecasting.
          </p>
        </Prose>
      </ContentSection>

      {/* HSE and digital transformation */}
      <ContentSection withBorder>
        <SectionHeader
          eyebrow="Case experience"
          title="HSE and public sector digital transformation"
          subtitle="COGO has direct experience supporting the HSE through technology transformation programmes. The lessons apply to any large public sector organisation."
        />
        <Prose>
          <p>
            The HSE serves a population of over 5 million people, operates
            across hundreds of facilities, and manages a budget exceeding EUR 22
            billion (HSE Annual Report, 2023). The organisation has been working
            to consolidate its technology landscape, moving from fragmented
            legacy systems toward more standardised platforms.
          </p>
          <p>
            What we have learned from this work applies broadly across public
            sector organisations:
          </p>
          <ul>
            <li>
              <strong>Start with process, not software.</strong> The biggest risk
              in public sector ERP is automating broken processes. Before you
              select a vendor, map your current processes, identify what needs to
              change, and design your future state.
            </li>
            <li>
              <strong>Governance matters more than features.</strong> In large
              organisations with competing priorities, your programme governance
              structure determines whether the implementation succeeds or stalls.
            </li>
            <li>
              <strong>Data migration is where projects fail.</strong> Public
              sector organisations typically have decades of data spread across
              multiple systems. Cleaning, mapping, and migrating that data takes
              longer than anyone estimates.
            </li>
            <li>
              <strong>Change management is not optional.</strong> Staff are busy
              people delivering public services. If you do not invest in proper
              training, communication, and engagement, you will deliver a system
              that nobody uses properly.
            </li>
          </ul>
          <p>
            For more on how we support complex implementations, see our{" "}
            <Link href="/services/implementation-support/">
              ERP implementation support and programme management
            </Link>{" "}
            services.
          </p>
        </Prose>
      </ContentSection>

      {/* Key features */}
      <ContentSection withBorder>
        <SectionHeader
          eyebrow="Features"
          title="Key ERP features for public sector organisations"
          subtitle="Not every ERP system is suited to public sector requirements. These are the capabilities that matter most."
        />
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Reveal>
            <SpotlightCard>
              <div className="p-6">
                <h3 className="text-[17px] font-semibold text-foreground mb-3">
                  Procurement and contract management
                </h3>
                <p className="text-[14px] text-muted leading-relaxed">
                  Requisition-to-payment workflows, catalogue management,
                  contract tracking, and supplier performance monitoring.
                  Support for framework agreements and mini-competitions as
                  required by EU and UK procurement directives.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
          <Reveal delay={0.05}>
            <SpotlightCard>
              <div className="p-6">
                <h3 className="text-[17px] font-semibold text-foreground mb-3">
                  Fund accounting and budgetary control
                </h3>
                <p className="text-[14px] text-muted leading-relaxed">
                  Support for fund accounting, commitment accounting, multi-year
                  budgeting, and the specific chart of accounts used by your
                  organisation. Reports in the formats required by regulators,
                  whether the HSE, NHS England, or a devolved administration.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
          <Reveal delay={0.1}>
            <SpotlightCard>
              <div className="p-6">
                <h3 className="text-[17px] font-semibold text-foreground mb-3">
                  HR, payroll, and workforce planning
                </h3>
                <p className="text-[14px] text-muted leading-relaxed">
                  Complex pay structures (Agenda for Change in the NHS, HSE
                  consolidated salary scales in Ireland), pension calculations,
                  working time compliance, and integration with rostering
                  systems.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
          <Reveal delay={0.15}>
            <SpotlightCard>
              <div className="p-6">
                <h3 className="text-[17px] font-semibold text-foreground mb-3">
                  Inventory and supply chain management
                </h3>
                <p className="text-[14px] text-muted leading-relaxed">
                  Real-time inventory visibility across sites, automated
                  replenishment based on par levels, and integration with
                  product recall systems. These are operational necessities, not
                  nice-to-haves.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
          <Reveal delay={0.2}>
            <SpotlightCard>
              <div className="p-6">
                <h3 className="text-[17px] font-semibold text-foreground mb-3">
                  Regulatory compliance and audit
                </h3>
                <p className="text-[14px] text-muted leading-relaxed">
                  Full audit trails, segregation of duties, and the evidence
                  your internal auditors, the Comptroller and Auditor General
                  (Ireland), or the National Audit Office (UK) require during
                  reviews and inspections.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
          <Reveal delay={0.25}>
            <SpotlightCard>
              <div className="p-6">
                <h3 className="text-[17px] font-semibold text-foreground mb-3">
                  Public sector procurement compliance
                </h3>
                <p className="text-[14px] text-muted leading-relaxed">
                  Support for open, restricted, and competitive dialogue
                  procedures under EU and UK public procurement regulations.
                  Built-in controls to ensure transparency and compliance with
                  threshold rules.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
        </div>
      </ContentSection>

      {/* ERP systems */}
      <ContentSection withBorder>
        <SectionHeader
          eyebrow="System comparison"
          title="ERP systems used in the public sector"
          subtitle="Different platforms suit different types and sizes of public sector organisation. Here is an honest view of what is commonly deployed."
        />
        <div className="grid gap-6">
          <Reveal>
            <SpotlightCard>
              <div className="p-6">
                <h3 className="text-[17px] font-semibold text-foreground mb-2">
                  SAP S/4HANA
                </h3>
                <p className="text-[13px] text-accent/80 mb-3">
                  Best for: Large hospital groups, national health systems, and
                  major government agencies
                </p>
                <p className="text-[14px] text-muted leading-relaxed">
                  Deep financial management, strong procurement, proven at
                  scale in public sector. The HSE and several NHS trusts use
                  SAP. Powerful but requires significant investment in
                  implementation and ongoing support.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
          <Reveal delay={0.05}>
            <SpotlightCard>
              <div className="p-6">
                <h3 className="text-[17px] font-semibold text-foreground mb-2">
                  Oracle Cloud ERP
                </h3>
                <p className="text-[13px] text-accent/80 mb-3">
                  Best for: Large and mid-sized public sector organisations
                </p>
                <p className="text-[14px] text-muted leading-relaxed">
                  Strong financials and procurement, good cloud roadmap, solid
                  HR module. Oracle has invested heavily in public
                  sector-specific cloud functionality. Evaluate carefully
                  against SAP for your specific needs.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
          <Reveal delay={0.1}>
            <SpotlightCard>
              <div className="p-6">
                <h3 className="text-[17px] font-semibold text-foreground mb-2">
                  Microsoft Dynamics 365
                </h3>
                <p className="text-[13px] text-accent/80 mb-3">
                  Best for: Mid-sized trusts, local authorities, and government
                  agencies
                </p>
                <p className="text-[14px] text-muted leading-relaxed">
                  Familiar interface, strong ecosystem, good integration with
                  Microsoft 365 tools. Works well for finance and procurement.
                  HR and payroll may require third-party add-ons. The most
                  common mid-market choice in UK public sector.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
          <Reveal delay={0.15}>
            <SpotlightCard>
              <div className="p-6">
                <h3 className="text-[17px] font-semibold text-foreground mb-2">
                  Unit4
                </h3>
                <p className="text-[13px] text-accent/80 mb-3">
                  Best for: Mid-sized public sector and not-for-profit
                  organisations
                </p>
                <p className="text-[14px] text-muted leading-relaxed">
                  Purpose-built for people-centric organisations with strong
                  fund accounting. A good fit for organisations that do not
                  need deep manufacturing or supply chain functionality. Well
                  suited to local authorities and education bodies.
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
        <div className="space-y-10">
          <Reveal>
            <Prose>
              <h3>What ERP systems do NHS trusts use?</h3>
              <p>
                Most NHS trusts in England use SAP or Oracle for core financials
                and procurement. Some mid-sized trusts have implemented
                Microsoft Dynamics 365. The NHS has been moving toward
                standardisation, but the reality is that the installed base
                remains fragmented. In Ireland, the HSE has used SAP for
                financial management.
              </p>
            </Prose>
          </Reveal>
          <Reveal>
            <Prose>
              <h3>How much does a public sector ERP implementation cost?</h3>
              <p>
                For a mid-sized NHS trust or Irish hospital group, expect to
                invest between GBP 2 million and GBP 10 million depending on
                scope (finance only versus finance, procurement, and HR), number
                of sites, data migration complexity, and integration
                requirements. Local authority implementations tend to sit in the
                GBP 500,000 to GBP 3 million range. National-level programmes
                can cost significantly more.
              </p>
            </Prose>
          </Reveal>
          <Reveal>
            <Prose>
              <h3>How long does a public sector ERP implementation take?</h3>
              <p>
                A core finance and procurement implementation for a hospital
                group or large local authority typically takes 18 to 24 months.
                Adding HR, payroll, and supply chain modules extends that to 24
                to 36 months. Phased rollouts are common and generally advisable
                because trying to do everything at once in a public sector
                setting carries too much operational risk.
              </p>
            </Prose>
          </Reveal>
          <Reveal>
            <Prose>
              <h3>
                What procurement rules apply to public sector ERP selection?
              </h3>
              <p>
                In the UK, the Procurement Act 2023 (replacing the Public
                Contracts Regulations 2015) governs how public bodies procure
                technology. In Ireland, the Office of Government Procurement
                (OGP) provides frameworks and guidelines. ERP procurement
                typically falls above the threshold for open or restricted
                procedures, meaning a structured, transparent process is
                required. Having independent advisory support through this
                process ensures your evaluation is defensible and delivers the
                right outcome for your organisation.
              </p>
            </Prose>
          </Reveal>
          <Reveal>
            <Prose>
              <h3>
                Do public sector ERP systems integrate with clinical or
                operational systems?
              </h3>
              <p>
                They should, but they are not the same thing. Your ERP handles
                finance, procurement, HR, and supply chain. Clinical systems,
                case management platforms, and citizen-facing services are
                separate. The integration points are typically around supply
                chain (consumption data feeding procurement), HR (staff records
                feeding rostering), and reporting (consolidated operational and
                financial data). Look for systems with proven integration
                capabilities or established APIs.
              </p>
            </Prose>
          </Reveal>
        </div>
      </ContentSection>

      <PageCTA
        title="Talk to us about public sector ERP and transformation"
        subtitle="We bring direct experience of working with the HSE and an understanding of public sector procurement, governance, and compliance. Whether you are selecting a new ERP system, rescuing a troubled programme, or planning a digital transformation, we provide the independent oversight that keeps your project on track."
        buttonText="Book a call"
        buttonHref="/contact/"
      />
    </PageLayout>
  );
}
