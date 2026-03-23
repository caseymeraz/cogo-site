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

export const metadata: Metadata = {
  title: "Master Data Management Guide | ERP Foundation | COGO",
  description:
    "Why master data management is the foundation of ERP success. MDM best practices, software comparison, and how to get your data right before go-live.",
};

export default function MasterDataManagementPage() {
  return (
    <PageLayout>
      <PageHeader
        eyebrow="Guides"
        title="Master data management: why your ERP is only as good as your data"
        subtitle="You can spend millions on SAP, Oracle, or Microsoft Dynamics. But if your master data is a mess, your shiny new ERP will produce the same bad outputs as the old one. Faster, perhaps. But still wrong."
      />

      {/* Intro */}
      <ContentSection withBorder>
        <Prose>
          <p>
            Here is a truth that most ERP vendors will not tell you upfront: the
            software is not the hard part. The data is.
          </p>
          <p>
            You can hire the best implementation partner. You can run flawless
            workshops and sign off every process design on time. But if your
            master data has duplicate customer records, inconsistent product
            codes, and supplier information scattered across spreadsheets and
            someone&#39;s email inbox, your new ERP will fail.
          </p>
          <p>
            According to Gartner&#39;s 2025 Data Quality Market Guide, poor
            data quality costs organisations an average of USD 12.9 million per
            year. For manufacturers and distributors going through an ERP
            implementation, the cost shows up in delayed go-lives, incorrect
            inventory valuations, failed integrations, and users who lose trust
            in the system within the first week.
          </p>
          <p>
            Master data management is not glamorous work. It is painstaking and
            detail-oriented. But it is the single biggest determinant of whether
            your ERP programme succeeds or fails.
          </p>
        </Prose>
      </ContentSection>

      {/* What is MDM */}
      <ContentSection withBorder>
        <SectionHeader
          eyebrow="Fundamentals"
          title="What is master data management?"
        />
        <Prose>
          <p>
            Master data management (MDM) is the set of processes, governance,
            policies, standards, and tools that ensure your organisation&#39;s
            critical shared data (customers, suppliers, products, employees,
            financial structures) is accurate, consistent, and maintained over
            time.
          </p>
          <p>
            Master data is distinct from transactional data (like sales orders
            or invoices) and analytical data (like reports and dashboards). It is
            the foundational reference data that every transaction depends on.
            When you raise a purchase order, the supplier record is master data.
            The PO itself is transactional data.
          </p>
          <p>
            The goal is simple to state and difficult to achieve: one version of
            the truth, everywhere, all the time.
          </p>
        </Prose>
      </ContentSection>

      {/* Why MDM matters */}
      <ContentSection withBorder>
        <SectionHeader
          eyebrow="Why it matters"
          title="Why MDM matters for ERP implementations"
        />
        <div className="grid md:grid-cols-2 gap-6">
          <Reveal>
            <SpotlightCard>
              <div className="p-6">
                <h3 className="text-[17px] font-semibold text-white/90 mb-3">
                  Data migration is the top risk
                </h3>
                <p className="text-[14px] text-white/50 leading-relaxed">
                  A 2024 survey by Panorama Consulting found that 38% of ERP
                  implementations experienced significant issues related to data
                  migration and data quality. It was the single most cited cause
                  of go-live delays.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
          <Reveal delay={0.05}>
            <SpotlightCard>
              <div className="p-6">
                <h3 className="text-[17px] font-semibold text-white/90 mb-3">
                  Bad data breaks integrations
                </h3>
                <p className="text-[14px] text-white/50 leading-relaxed">
                  If your product codes do not match between ERP and WMS,
                  picking lists fail. If customer records are inconsistent
                  between ERP and CRM, your sales team will not trust either
                  system.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
          <Reveal delay={0.1}>
            <SpotlightCard>
              <div className="p-6">
                <h3 className="text-[17px] font-semibold text-white/90 mb-3">
                  Bad data erodes user trust
                </h3>
                <p className="text-[14px] text-white/50 leading-relaxed">
                  Users make up their minds about a new ERP within the first two
                  weeks. If they find three duplicate records with different
                  addresses, they stop trusting the system and revert to
                  spreadsheets.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
          <Reveal delay={0.15}>
            <SpotlightCard>
              <div className="p-6">
                <h3 className="text-[17px] font-semibold text-white/90 mb-3">
                  Good MDM reduces ongoing costs
                </h3>
                <p className="text-[14px] text-white/50 leading-relaxed">
                  IBM&#39;s research estimates the cost of fixing a data error
                  increases tenfold for every stage it progresses through the
                  data lifecycle. Fixing data at the source is an order of
                  magnitude cheaper than fixing it downstream.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
        </div>
      </ContentSection>

      {/* Types of master data */}
      <ContentSection withBorder>
        <SectionHeader
          eyebrow="Categories"
          title="Types of master data"
          subtitle="Understanding the categories helps you prioritise your MDM effort. Not all master data carries equal risk."
        />
        <Prose>
          <h3>Customer master data</h3>
          <p>
            Legal names, addresses, payment terms, credit limits, tax
            registration numbers. In most organisations, customer data is the
            most duplicated and inconsistent category. It is common to find the
            same customer entered 5 to 10 different ways across legacy systems.
          </p>

          <h3>Vendor and supplier master data</h3>
          <p>
            Supplier names, addresses, banking details, payment terms, lead
            times, and compliance certifications. Errors in bank details lead
            directly to misdirected payments, a fraud vector that costs UK
            businesses over GBP 500 million annually (UK Finance, 2024).
          </p>

          <h3>Product and material master data</h3>
          <p>
            Item codes, descriptions, units of measure, bill of materials,
            weights, dimensions, classification codes. For manufacturers, this
            is often the most complex category, with thousands of SKUs and
            intricate parent-child relationships.
          </p>

          <h3>Financial master data</h3>
          <p>
            Chart of accounts, cost centres, profit centres, tax codes, currency
            codes, and intercompany structures. Errors here produce incorrect
            management accounts, statutory reporting issues, and audit findings.
          </p>
        </Prose>
      </ContentSection>

      {/* MDM software */}
      <ContentSection withBorder>
        <SectionHeader
          eyebrow="Software"
          title="MDM software comparison"
        />
        <div className="grid gap-6">
          <Reveal>
            <SpotlightCard>
              <div className="p-6">
                <h3 className="text-[17px] font-semibold text-white/90 mb-2">
                  Informatica MDM
                </h3>
                <p className="text-[13px] text-accent/80 mb-3">
                  Large enterprises, multi-domain MDM | Market leader
                </p>
                <p className="text-[14px] text-white/50 leading-relaxed">
                  Deepest feature set in the market. Cloud or on-premise
                  deployment. The standard choice for large, complex MDM
                  requirements.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
          <Reveal delay={0.05}>
            <SpotlightCard>
              <div className="p-6">
                <h3 className="text-[17px] font-semibold text-white/90 mb-2">
                  SAP Master Data Governance
                </h3>
                <p className="text-[13px] text-accent/80 mb-3">
                  SAP-centric organisations | Native S/4HANA integration
                </p>
                <p className="text-[14px] text-white/50 leading-relaxed">
                  The natural choice if you are running SAP S/4HANA. Available
                  on SAP BTP (cloud) or on-premise.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
          <Reveal delay={0.1}>
            <SpotlightCard>
              <div className="p-6">
                <h3 className="text-[17px] font-semibold text-white/90 mb-2">
                  Profisee Platform
                </h3>
                <p className="text-[13px] text-accent/80 mb-3">
                  Mid-market, Microsoft environments | Cost-effective
                </p>
                <p className="text-[14px] text-white/50 leading-relaxed">
                  Fast deployment on Azure. A strong mid-market option,
                  particularly for organisations already in the Microsoft
                  ecosystem.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
          <Reveal delay={0.15}>
            <SpotlightCard>
              <div className="p-6">
                <h3 className="text-[17px] font-semibold text-white/90 mb-2">
                  Stibo Systems STEP
                </h3>
                <p className="text-[13px] text-accent/80 mb-3">
                  Product-heavy organisations (retail, manufacturing) | Strong
                  PIM + MDM combination
                </p>
                <p className="text-[14px] text-white/50 leading-relaxed">
                  Excellent for organisations where product information
                  management is as important as traditional master data
                  governance.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
        </div>
        <Prose>
          <p>
            <strong>A word of caution:</strong> you do not always need a
            dedicated MDM platform. For many mid-market organisations, a
            disciplined data cleansing exercise, strong governance processes, and
            the data management capabilities built into your ERP may be
            sufficient. A standalone MDM platform makes sense when you have
            multiple source systems that need to share and synchronise master
            data on an ongoing basis.
          </p>
        </Prose>
      </ContentSection>

      {/* Best practices */}
      <ContentSection withBorder>
        <SectionHeader
          eyebrow="Best practices"
          title="MDM best practices for ERP projects"
        />
        <Prose>
          <h3>Start MDM early: 6 months before go-live at minimum</h3>
          <p>
            Do not treat data as a workstream that starts during the build
            phase. Begin your master data assessment during the design phase, or
            earlier. You need time to profile your existing data, define your
            target data model, build cleansing rules, and get business users to
            review and validate the cleansed data.
          </p>

          <h3>Profile your data before you cleanse it</h3>
          <p>
            Data profiling means analysing your existing data to understand its
            structure, completeness, accuracy, and consistency. How many
            customer records are duplicates? What percentage of product records
            have complete descriptions? You cannot fix what you have not
            measured.
          </p>

          <h3>Assign data owners, not just data stewards</h3>
          <p>
            Every master data domain needs a named owner, a senior person with
            the authority to make decisions about data standards, resolve
            disputes, and hold people accountable. This is a business role, not
            an IT role.
          </p>

          <h3>Define and enforce data standards</h3>
          <p>
            Naming conventions (&quot;Ltd&quot; vs &quot;Limited&quot;), address
            formatting (use Royal Mail PAF), product description templates,
            mandatory fields, and duplicate detection rules. These standards must
            be built into your ERP&#39;s validation rules, not just documented
            in a policy that nobody reads.
          </p>

          <h3>Implement ongoing data quality monitoring</h3>
          <p>
            Data quality is not a one-time project. After go-live, implement
            data quality dashboards, regular audits, exception reporting, and
            feedback loops. MIT Sloan Management Review (2024) found
            organisations with ongoing data quality programmes achieve 15 to 20%
            higher user adoption rates for enterprise systems.
          </p>

          <h3>Do not skip the human review</h3>
          <p>
            Automated matching and cleansing tools are powerful, but not
            infallible. Every batch of cleansed master data should be reviewed by
            business users who know the data. This review is time-consuming and
            nobody enjoys it, but it is the single most effective way to catch
            errors and build user ownership.
          </p>
        </Prose>
      </ContentSection>

      {/* FAQ */}
      <ContentSection withBorder>
        <SectionHeader eyebrow="FAQ" title="Frequently asked questions" />
        <div className="space-y-10">
          <Reveal>
            <Prose>
              <h3>When should we start our MDM effort?</h3>
              <p>
                Start as early as possible, ideally 6 to 12 months before your
                planned ERP go-live. Data profiling and cleansing take longer
                than anyone expects, and late discovery of quality issues is one
                of the most common causes of go-live delays.
              </p>
            </Prose>
          </Reveal>
          <Reveal>
            <Prose>
              <h3>Do we need a dedicated MDM tool?</h3>
              <p>
                For many mid-market organisations, the data management
                capabilities built into your ERP, combined with disciplined
                processes and governance, are sufficient. You need a dedicated
                MDM platform when you have multiple source systems that all need
                to share and synchronise master data.
              </p>
            </Prose>
          </Reveal>
          <Reveal>
            <Prose>
              <h3>How much does an MDM programme cost?</h3>
              <p>
                A data cleansing exercise for a mid-market ERP project might
                cost GBP 50,000 to 150,000. A full enterprise MDM platform
                implementation can range from GBP 200,000 to over GBP 1 million.
                Start with governance and process; add tooling only when the
                business case is clear.
              </p>
            </Prose>
          </Reveal>
          <Reveal>
            <Prose>
              <h3>
                What is the relationship between MDM and data migration?
              </h3>
              <p>
                Data migration is the one-time process of moving data from
                legacy systems into your new ERP. MDM is the ongoing discipline
                of keeping that data accurate and consistent after migration.
                Think of migration as the initial clean-up and MDM as the
                maintenance programme. Without MDM, your beautifully cleansed
                migrated data will degrade within months.
              </p>
            </Prose>
          </Reveal>
        </div>
      </ContentSection>

      <PageCTA
        title="Getting your master data right before go-live?"
        subtitle="COGO provides independent data readiness assessments, governance design, and MDM advisory for ERP programmes across Ireland and the UK. We work alongside your team and your implementation partner to make sure the data foundation is solid."
        buttonText="Talk to us"
        buttonHref="/contact/"
      />
    </PageLayout>
  );
}
