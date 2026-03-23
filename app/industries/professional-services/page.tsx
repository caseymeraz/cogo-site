import type { Metadata } from "next";
import Link from "next/link";
import PageLayout from "../../components/PageLayout";
import PageHeader from "../../components/PageHeader";
import ContentSection, { SectionHeader } from "../../components/ContentSection";
import Prose from "../../components/Prose";
import Reveal from "../../components/Reveal";
import SpotlightCard from "../../components/SpotlightCard";
import PageCTA from "../../components/PageCTA";

export const metadata: Metadata = {
  title: "ERP for Professional Services | Guide | COGO",
  description:
    "Independent guide to ERP for professional services firms. Compare systems for project accounting, resource management, billing, and time tracking.",
};

export default function ProfessionalServicesPage() {
  return (
    <PageLayout>
      <PageHeader
        eyebrow="Industries"
        title="ERP for professional services: the system your firm actually needs"
        subtitle="If your most valuable asset walks out the door every evening, you need a system designed around that reality. Generic ERP was built for manufacturers. Your firm deserves better."
      />

      {/* Intro */}
      <ContentSection withBorder>
        <Prose>
          <p>
            If you run a professional services firm, whether consulting,
            engineering, architecture, legal, IT services, or any other
            project-based business, your core challenge is deceptively simple:
            know what your people are working on, know whether each project is
            making money, and bill your clients accurately and promptly.
          </p>
          <p>
            Most generic ERP systems were built for manufacturers and
            distributors. They are excellent at tracking physical inventory and
            managing bill-of-materials explosions. They are far less good at
            tracking the time and expertise of your people.
          </p>
          <p>
            An ERP for professional services firms must handle project
            accounting, resource management, time and expense tracking, and
            complex billing arrangements, often on the same project
            simultaneously. Get this right and you have real-time visibility of
            project profitability, utilisation rates, and cash flow. Get it
            wrong and you are relying on spreadsheets, guesswork, and the
            finance director&#39;s instinct.
          </p>
          <p>
            This guide covers what your firm needs from an ERP system, which
            platforms are worth considering, and how to avoid the mistakes we
            see repeatedly. Our{" "}
            <Link href="/services/erp-consulting/">
              independent ERP consulting services
            </Link>{" "}
            are built for exactly this kind of decision.
          </p>
        </Prose>
      </ContentSection>

      {/* Why professional services need ERP */}
      <ContentSection withBorder>
        <SectionHeader
          eyebrow="The fundamentals"
          title="Why professional services firms need ERP"
          subtitle="You might think your firm is too small for ERP, or that your current mix of accounting software, project management tools, and spreadsheets is good enough. Here is why that thinking costs you money."
        />
        <Prose>
          <h3>Project accounting is not the same as general accounting</h3>
          <p>
            Standard accounting software gives you a profit and loss statement
            and a balance sheet. It does not tell you whether Project X is 60%
            complete and 80% through its budget. It does not flag that your
            senior consultant has been billing at a blended rate that is 15%
            below the rate card. It does not warn you that your work-in-progress
            (WIP) balance has grown by 40% in the last quarter because invoices
            are not going out on time.
          </p>
          <p>
            According to SPI Research&#39;s 2024 Professional Services Maturity
            Benchmark, top-performing firms achieve project margins of 38% or
            higher, while the average firm sits at around 28%. That 10-point
            gap, on a firm billing GBP 20 million annually, is GBP 2 million in
            profit. The difference often comes down to whether you can see
            project-level profitability in real time.
          </p>

          <h3>Resource management drives your profitability</h3>
          <p>
            Your people are your product. Utilisation rate, the percentage of
            available hours billed to clients, is the single most important
            metric in professional services. The SPI Research benchmark puts the
            median billable utilisation rate at 68.1% across all professional
            services firms. Top performers hit 75% or above.
          </p>
          <p>
            Your ERP must give you visibility of who is available, who is
            overbooked, what skills you need versus what you have, and where you
            have bench time that could be deployed. Without this, you are
            guessing, and every unproductive day for a senior consultant
            represents GBP 800 to GBP 2,000 in lost revenue.
          </p>

          <h3>Billing complexity</h3>
          <p>
            Professional services billing is rarely simple. You may have
            fixed-price contracts, time-and-materials engagements, retainers,
            milestone-based billing, and hybrid arrangements, all within the
            same client relationship. Your ERP must handle all of these,
            generate accurate invoices, manage revenue recognition in line with
            IFRS 15 (or FRS 102 in the UK and Ireland), and track
            client-specific terms.
          </p>
          <p>
            Late or inaccurate billing kills cash flow. The SPI benchmark
            reports that the average days sales outstanding (DSO) for
            professional services firms is 42 days. Firms with poor billing
            processes routinely exceed 60 days. On a GBP 20 million firm, the
            difference between 42-day and 60-day DSO is approximately GBP 1
            million in additional working capital tied up at any given time.
          </p>

          <h3>Time and expense tracking</h3>
          <p>
            If your consultants record time weekly in a spreadsheet that gets
            emailed to finance, you are losing revenue. Studies consistently
            show that delayed time entry leads to under-recording. People
            forget. They round down. They miss chargeable activities. Your ERP
            must make time capture easy, mobile, and, ideally, integrated into
            the tools your people already use (Outlook, Teams, project
            management software).
          </p>
        </Prose>
      </ContentSection>

      {/* Top ERP systems */}
      <ContentSection withBorder>
        <SectionHeader
          eyebrow="System comparison"
          title="Top ERP systems for professional services"
          subtitle="Not every ERP system is built for project-based businesses. Here is an honest comparison of the platforms most commonly used in professional services."
        />
        <div className="grid gap-6">
          <Reveal>
            <SpotlightCard>
              <div className="p-6">
                <h3 className="text-[17px] font-semibold text-white/90 mb-2">
                  Microsoft Dynamics 365 Business Central + Project Operations
                </h3>
                <p className="text-[13px] text-accent/80 mb-3">
                  Best for: Mid-market firms (50 to 500 people) | GBP 150k to
                  500k implementation
                </p>
                <p className="text-[14px] text-white/50 leading-relaxed">
                  The most common mid-market choice. Project Operations has
                  improved significantly since 2022. Integrated project
                  accounting, resource scheduling, time and expense tracking.
                  Strong Microsoft ecosystem integration with Teams, Outlook,
                  and Power BI.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
          <Reveal delay={0.05}>
            <SpotlightCard>
              <div className="p-6">
                <h3 className="text-[17px] font-semibold text-white/90 mb-2">
                  Unit4 ERP
                </h3>
                <p className="text-[13px] text-accent/80 mb-3">
                  Best for: Mid-to-large professional services (200 to 5,000+
                  people) | GBP 300k to 1m+
                </p>
                <p className="text-[14px] text-white/50 leading-relaxed">
                  Purpose-built for people-centric organisations with strong
                  project accounting and good resource management. One of the
                  best fits for pure professional services. Less suited if you
                  also have manufacturing or distribution operations.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
          <Reveal delay={0.1}>
            <SpotlightCard>
              <div className="p-6">
                <h3 className="text-[17px] font-semibold text-white/90 mb-2">
                  SAP S/4HANA + SAP Professional Services
                </h3>
                <p className="text-[13px] text-accent/80 mb-3">
                  Best for: Large firms and global consultancies | GBP 1m to
                  5m+ implementation
                </p>
                <p className="text-[14px] text-white/50 leading-relaxed">
                  Deep project accounting, multi-currency, global compliance,
                  powerful analytics. The big four accounting firms and large
                  engineering consultancies use SAP. Overkill for most mid-market
                  firms. See our guide on{" "}
                  <Link href="/resources/guides/erp-cost-guide/">
                    how much ERP costs in the UK
                  </Link>{" "}
                  for more context.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
          <Reveal delay={0.15}>
            <SpotlightCard>
              <div className="p-6">
                <h3 className="text-[17px] font-semibold text-white/90 mb-2">
                  Oracle NetSuite + SRP
                </h3>
                <p className="text-[13px] text-accent/80 mb-3">
                  Best for: Mid-market, cloud-first professional services firms
                  | GBP 100k to 400k
                </p>
                <p className="text-[14px] text-white/50 leading-relaxed">
                  Strong cloud offering. The Services Resource Planning (SRP)
                  module is purpose-built for professional services. Native
                  cloud, good project management, and solid financials. Evaluate
                  depth of project accounting against Dynamics and Unit4.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
          <Reveal delay={0.2}>
            <SpotlightCard>
              <div className="p-6">
                <h3 className="text-[17px] font-semibold text-white/90 mb-2">
                  Deltek Vantagepoint
                </h3>
                <p className="text-[13px] text-accent/80 mb-3">
                  Best for: Architecture, engineering, and environmental
                  consulting | GBP 100k to 400k
                </p>
                <p className="text-[14px] text-white/50 leading-relaxed">
                  Purpose-built for AEC firms with excellent project accounting,
                  resource planning, and compliance. If you are an AEC firm,
                  Deltek is the industry standard. Less relevant for other
                  professional services sectors.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
          <Reveal delay={0.25}>
            <SpotlightCard>
              <div className="p-6">
                <h3 className="text-[17px] font-semibold text-white/90 mb-2">
                  FinancialForce (Certinia)
                </h3>
                <p className="text-[13px] text-accent/80 mb-3">
                  Best for: Firms already on Salesforce | GBP 150k to 500k
                </p>
                <p className="text-[14px] text-white/50 leading-relaxed">
                  Built on Salesforce platform, integrating CRM with project
                  delivery and financials. Excellent if you are already a
                  Salesforce shop. Less compelling if you are not, as you are
                  taking on Salesforce platform costs as well.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
        </div>
        <Prose>
          <p>
            For a broader comparison across industries, see{" "}
            <Link href="/resources/guides/best-erp-systems/">
              our independent guide to the best ERP systems
            </Link>
            .
          </p>
        </Prose>
      </ContentSection>

      {/* What to look for */}
      <ContentSection withBorder>
        <SectionHeader
          eyebrow="Selection criteria"
          title="What to look for when selecting professional services ERP"
          subtitle="Beyond the core features of project accounting, resource management, and billing, pay attention to these factors."
        />
        <Prose>
          <h3>Revenue recognition</h3>
          <p>
            IFRS 15 (Revenue from Contracts with Customers) and its UK/Ireland
            equivalent under FRS 102 require you to recognise revenue as
            performance obligations are satisfied. For professional services,
            this means recognising revenue over time based on a measure of
            progress (typically cost-to-cost or effort-based). Your ERP must
            support automated revenue recognition calculations and generate the
            disclosures your auditors require.
          </p>

          <h3>Multi-entity and multi-currency</h3>
          <p>
            If your firm operates across Ireland, the UK, and other markets,
            your ERP must handle intercompany transactions, multi-currency
            billing, and consolidated group reporting. This is especially
            important post-Brexit, where many Irish firms bill in both EUR and
            GBP.
          </p>

          <h3>Integration with CRM and delivery tools</h3>
          <p>
            Your ERP does not operate in isolation. It needs to integrate with
            your CRM (to flow opportunity data into project setup), your project
            management tools (to capture actuals against plan), and your
            collaboration platforms (Teams, Slack). Evaluate integration
            capabilities before you commit to a platform.
          </p>

          <h3>Reporting and analytics</h3>
          <p>
            You need real-time dashboards showing utilisation, project margins,
            WIP, pipeline, and DSO. If your ERP cannot deliver this without
            exporting data to Excel, it is not fit for purpose. Look for
            embedded analytics or proven integration with Power BI, Tableau, or
            similar tools.
          </p>
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
            <Prose>
              <h3>
                What is the best ERP system for professional services?
              </h3>
              <p>
                It depends on your size, sector, and existing technology
                landscape. Microsoft Dynamics 365 is the most common mid-market
                choice. Unit4 is purpose-built for people-centric organisations.
                Deltek is the standard for architecture, engineering, and
                construction firms. Oracle NetSuite suits cloud-first mid-market
                firms. SAP is for large global operations. The right answer
                starts with understanding your specific requirements.
              </p>
            </Prose>
          </Reveal>
          <Reveal>
            <Prose>
              <h3>How much does a professional services ERP cost?</h3>
              <p>
                For a mid-market firm (100 to 500 people), expect to invest
                between GBP 150,000 and GBP 600,000 in total implementation
                costs including software, configuration, data migration,
                training, and go-live support. Larger firms or those with
                complex multi-entity structures will pay more. Ongoing annual
                subscription and support costs typically run between GBP 50,000
                and GBP 200,000. For more detail, see{" "}
                <Link href="/resources/guides/erp-cost-guide/">
                  how much does an ERP system cost in the UK
                </Link>
                .
              </p>
            </Prose>
          </Reveal>
          <Reveal>
            <Prose>
              <h3>Can I use generic accounting software instead of ERP?</h3>
              <p>
                You can, but you will outgrow it. Xero and Sage are fine for
                basic accounting, but they do not provide project-level
                profitability tracking, resource management, WIP management, or
                complex billing. Most firms reach the breaking point at around
                50 to 100 people, when the spreadsheets holding everything
                together become unmanageable and unreliable.
              </p>
            </Prose>
          </Reveal>
          <Reveal>
            <Prose>
              <h3>
                How long does a professional services ERP implementation take?
              </h3>
              <p>
                For a mid-market firm on a cloud platform, expect 6 to 12
                months from project kick-off to go-live. More complex
                implementations involving multiple entities, data migrations
                from legacy systems, and extensive integrations can take 12 to
                18 months. The biggest variable is usually your own
                organisation&#39;s capacity to engage in the project. Your
                people are busy delivering client work, and carving out time for
                ERP implementation is always a challenge.
              </p>
            </Prose>
          </Reveal>
        </div>
      </ContentSection>

      <PageCTA
        title="Talk to us about ERP for your firm"
        subtitle="We are a professional services firm ourselves, so we understand your operating model from the inside. We know what matters: utilisation, project margin, billing velocity, and cash conversion. Our independent ERP consulting gives you vendor-neutral advice on system selection, implementation planning, and programme oversight."
        buttonText="Book a call"
        buttonHref="/contact/"
      />
    </PageLayout>
  );
}
