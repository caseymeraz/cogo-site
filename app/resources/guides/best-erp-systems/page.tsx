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

export const metadata: Metadata = {
  title: "Best ERP Systems UK 2026: Independent Guide | COGO",
  description:
    "Independent, vendor-neutral comparison of the best ERP systems for UK businesses. Pricing in GBP, industry recommendations, and honest assessments.",
};

export default function BestERPSystemsPage() {
  return (
    <PageLayout>
      <PageHeader
        eyebrow="Guides"
        title="The 10 best ERP systems for UK businesses in 2026"
        subtitle="Most ERP comparison guides are written by vendors or their partners. This one is written by independent consultants who do not sell software, take commissions, or have a preferred platform."
      />

      {/* Intro */}
      <ContentSection withBorder>
        <Prose>
          <p>
            <strong>Last updated: March 2026</strong>
          </p>
          <p>
            You have probably read three or four ERP comparison guides today and
            noticed the same systems get suspiciously glowing reviews from
            companies that happen to sell them.
          </p>
          <p>
            This guide is different. COGO Consulting is an independent,
            client-side business transformation consultancy. We have no vendor
            partnerships. No commission. No preferred platform. When we help
            organisations select an ERP system, the only thing that matters is
            whether it actually fits your business.
          </p>
          <p>
            Below you will find our honest assessment of the 10 best ERP
            systems available to UK businesses right now, with real pricing in
            GBP, clear industry recommendations, and the kind of blunt verdict
            you would get from a trusted adviser rather than a sales deck.
          </p>
          <p>
            If you want a structured process for making this decision, start
            with{" "}
            <Link href="/resources/guides/how-to-choose-erp/">
              our step-by-step ERP selection guide
            </Link>
            .
          </p>
        </Prose>
      </ContentSection>

      <PageImage
        src="/images/hero-whiteboard.jpg"
        alt="Technology agnostic ERP evaluation showing major vendors"
      />

      {/* Quick comparison */}
      <ContentSection withBorder>
        <SectionHeader
          eyebrow="Overview"
          title="Quick comparison table"
        />
        <Reveal>
          <div className="overflow-x-auto -mx-6 px-6">
            <table className="w-full text-[13px] text-muted border-collapse">
              <thead>
                <tr className="border-b border-border text-left">
                  <th className="py-3 pr-4 text-foreground font-medium">System</th>
                  <th className="py-3 pr-4 text-foreground font-medium">Best for</th>
                  <th className="py-3 pr-4 text-foreground font-medium">UK pricing (per user/month)</th>
                  <th className="py-3 pr-4 text-foreground font-medium">Deployment</th>
                  <th className="py-3 pr-4 text-foreground font-medium">Our rating</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="py-3 pr-4 text-foreground">SAP S/4HANA</td>
                  <td className="py-3 pr-4">Large enterprises, complex operations</td>
                  <td className="py-3 pr-4">GBP 150 to 300+</td>
                  <td className="py-3 pr-4">Cloud, on-premise, hybrid</td>
                  <td className="py-3 pr-4 text-accent">9/10</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 pr-4 text-foreground">Oracle Cloud ERP</td>
                  <td className="py-3 pr-4">Large enterprises, finance-heavy</td>
                  <td className="py-3 pr-4">GBP 140 to 275+</td>
                  <td className="py-3 pr-4">Cloud</td>
                  <td className="py-3 pr-4 text-accent">8.5/10</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 pr-4 text-foreground">Microsoft Dynamics 365</td>
                  <td className="py-3 pr-4">Mid-market, Microsoft environments</td>
                  <td className="py-3 pr-4">GBP 50 to 150</td>
                  <td className="py-3 pr-4">Cloud, hybrid</td>
                  <td className="py-3 pr-4 text-accent">8.5/10</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 pr-4 text-foreground">NetSuite</td>
                  <td className="py-3 pr-4">Fast-growing mid-market</td>
                  <td className="py-3 pr-4">GBP 80 to 200</td>
                  <td className="py-3 pr-4">Cloud</td>
                  <td className="py-3 pr-4 text-accent">8/10</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 pr-4 text-foreground">Sage X3</td>
                  <td className="py-3 pr-4">UK mid-market manufacturers</td>
                  <td className="py-3 pr-4">GBP 60 to 120</td>
                  <td className="py-3 pr-4">Cloud, on-premise</td>
                  <td className="py-3 pr-4 text-accent">7.5/10</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 pr-4 text-foreground">Infor M3</td>
                  <td className="py-3 pr-4">Process manufacturing</td>
                  <td className="py-3 pr-4">GBP 100 to 200</td>
                  <td className="py-3 pr-4">Cloud, on-premise</td>
                  <td className="py-3 pr-4 text-accent">8/10</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 pr-4 text-foreground">IFS Cloud</td>
                  <td className="py-3 pr-4">Asset-intensive industries</td>
                  <td className="py-3 pr-4">GBP 100 to 200</td>
                  <td className="py-3 pr-4">Cloud</td>
                  <td className="py-3 pr-4 text-accent">8/10</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 pr-4 text-foreground">Epicor Kinetic</td>
                  <td className="py-3 pr-4">Discrete manufacturing</td>
                  <td className="py-3 pr-4">GBP 70 to 150</td>
                  <td className="py-3 pr-4">Cloud, on-premise</td>
                  <td className="py-3 pr-4 text-accent">7.5/10</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 pr-4 text-foreground">Acumatica</td>
                  <td className="py-3 pr-4">SMEs, flexible licensing</td>
                  <td className="py-3 pr-4">Consumption-based (~GBP 800/mo)</td>
                  <td className="py-3 pr-4">Cloud</td>
                  <td className="py-3 pr-4 text-accent">7.5/10</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 pr-4 text-foreground">SYSPRO</td>
                  <td className="py-3 pr-4">Small to mid-size manufacturers</td>
                  <td className="py-3 pr-4">GBP 50 to 100</td>
                  <td className="py-3 pr-4">Cloud, on-premise</td>
                  <td className="py-3 pr-4 text-accent">7/10</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Reveal>
        <Prose>
          <p>
            <em>
              Pricing is indicative and based on typical UK deployments as of
              early 2026. Actual costs vary significantly based on modules, user
              counts, and implementation scope. For a detailed breakdown, read{" "}
              <Link href="/resources/guides/erp-cost-guide/">
                how much does an ERP system cost in the UK
              </Link>
              .
            </em>
          </p>
        </Prose>
      </ContentSection>

      {/* Methodology */}
      <ContentSection withBorder>
        <SectionHeader
          eyebrow="Methodology"
          title="How we evaluated these ERP systems"
        />
        <Prose>
          <p>
            Every vendor claims their product is market-leading. Our evaluation
            criteria are straightforward:
          </p>
          <ul>
            <li>
              <strong>Functional depth</strong>: Does the system genuinely cover
              what it claims, or do you need bolt-ons for basic requirements?
            </li>
            <li>
              <strong>UK market fit</strong>: Is there a proper UK presence,
              local implementation partners, and support for UK regulatory and
              tax requirements (including Making Tax Digital)?
            </li>
            <li>
              <strong>Total cost of ownership</strong>: Not just licence fees,
              but implementation, customisation, training, and ongoing support
              over a five-year horizon
            </li>
            <li>
              <strong>Implementation track record</strong>: How often do projects
              come in on time and budget? Panorama Consulting&#39;s 2024 ERP
              Report found that 42% of ERP projects exceeded their budget.
            </li>
            <li>
              <strong>Industry suitability</strong>: Which verticals does the
              system genuinely serve well, versus which ones it just lists on the
              website?
            </li>
            <li>
              <strong>User experience</strong>: How quickly can your people
              actually learn and use the system day-to-day?
            </li>
          </ul>
          <p>
            We draw on our direct experience advising on ERP selections across
            dozens of UK and Irish organisations, combined with analyst data from
            Gartner, IDC, and Panorama Consulting.
          </p>
        </Prose>
      </ContentSection>

      {/* Individual reviews */}
      <ContentSection withBorder>
        <SectionHeader
          eyebrow="Individual reviews"
          title="System-by-system analysis"
        />
        <div className="grid gap-6">
          {/* SAP */}
          <Reveal>
            <SpotlightCard>
              <div className="p-6">
                <h3 className="text-[17px] font-semibold text-foreground mb-1">
                  1. SAP S/4HANA
                </h3>
                <p className="text-[13px] text-accent/80 mb-3">
                  Best for: 500+ employees, complex multi-site operations,
                  regulated industries | Rating: 9/10
                </p>
                <div className="text-[14px] text-muted leading-relaxed space-y-3">
                  <p>
                    SAP remains the dominant name in enterprise ERP globally.
                    S/4HANA is its current-generation platform, built on an
                    in-memory database. SAP reported over 30,000 S/4HANA
                    customers worldwide by late 2024. Unmatched functional depth
                    across finance, procurement, manufacturing, and supply chain.
                  </p>
                  <p>
                    <strong className="text-foreground/80">UK pricing:</strong> Cloud
                    typically GBP 150 to 300+ per user per month. On-premise
                    often GBP 500,000+ upfront. Implementation costs for
                    mid-market typically GBP 500,000 to 2 million+.
                  </p>
                  <p>
                    <strong className="text-foreground/80">Verdict:</strong> If you
                    need deep functionality across a complex operation, SAP is
                    hard to beat. But only choose SAP if the complexity of your
                    operations genuinely demands it.
                  </p>
                </div>
              </div>
            </SpotlightCard>
          </Reveal>

          {/* Oracle */}
          <Reveal delay={0.05}>
            <SpotlightCard>
              <div className="p-6">
                <h3 className="text-[17px] font-semibold text-foreground mb-1">
                  2. Oracle Cloud ERP
                </h3>
                <p className="text-[13px] text-accent/80 mb-3">
                  Best for: Large organisations, finance-heavy, multi-entity |
                  Rating: 8.5/10
                </p>
                <div className="text-[14px] text-muted leading-relaxed space-y-3">
                  <p>
                    Oracle has aggressively moved its customer base to cloud with
                    Fusion Cloud ERP, a genuinely cloud-native platform. Oracle
                    reported 38% cloud revenue growth in fiscal Q2 2025.
                    Exceptionally strong financials, procurement, and project
                    management modules.
                  </p>
                  <p>
                    <strong className="text-foreground/80">UK pricing:</strong>{" "}
                    Typically GBP 140 to 275+ per user per month. Five-year TCO
                    for mid-market (200 to 500 users) often GBP 1.5 million to 4
                    million.
                  </p>
                  <p>
                    <strong className="text-foreground/80">Verdict:</strong> A
                    serious platform for serious organisations. If your primary
                    pain is financial consolidation or procurement at scale, it
                    deserves a place on your shortlist. For a deeper comparison,
                    read{" "}
                    <Link href="/resources/guides/sap-vs-oracle/">
                      SAP vs Oracle
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </SpotlightCard>
          </Reveal>

          {/* Microsoft */}
          <Reveal delay={0.1}>
            <SpotlightCard>
              <div className="p-6">
                <h3 className="text-[17px] font-semibold text-foreground mb-1">
                  3. Microsoft Dynamics 365
                </h3>
                <p className="text-[13px] text-accent/80 mb-3">
                  Best for: Mid-market (50 to 1,000 employees), Microsoft
                  ecosystem | Rating: 8.5/10
                </p>
                <div className="text-[14px] text-muted leading-relaxed space-y-3">
                  <p>
                    Microsoft&#39;s modular ERP and CRM platform. Familiar
                    interface for Microsoft users, which reduces training time
                    significantly. Business Central offers a genuinely capable
                    option for smaller organisations (50 to 250 employees).
                    Strong Power Platform integration.
                  </p>
                  <p>
                    <strong className="text-foreground/80">UK pricing:</strong>{" "}
                    Business Central Essentials from approximately GBP 52 per
                    user per month. Finance from approximately GBP 135.
                    Implementation typically GBP 150,000 to 800,000.
                  </p>
                  <p>
                    <strong className="text-foreground/80">Verdict:</strong> The safe
                    bet for mid-market UK businesses, and that is not a
                    criticism. The Microsoft ecosystem integration is a genuine
                    competitive advantage. Be ruthless about partner selection.
                  </p>
                </div>
              </div>
            </SpotlightCard>
          </Reveal>

          {/* NetSuite */}
          <Reveal delay={0.15}>
            <SpotlightCard>
              <div className="p-6">
                <h3 className="text-[17px] font-semibold text-foreground mb-1">
                  4. NetSuite
                </h3>
                <p className="text-[13px] text-accent/80 mb-3">
                  Best for: Fast-growing mid-market (50 to 500 employees) |
                  Rating: 8/10
                </p>
                <div className="text-[14px] text-muted leading-relaxed space-y-3">
                  <p>
                    One of the original cloud ERP systems with over 38,000
                    customers globally. Unified system covering ERP, CRM, and
                    e-commerce. Strong for fast-growing companies that need to
                    scale quickly, add subsidiaries, or expand internationally.
                  </p>
                  <p>
                    <strong className="text-foreground/80">UK pricing:</strong>{" "}
                    Typically GBP 80 to 200 per user per month, plus platform
                    fee of GBP 800 to 1,500 per month. Mid-market deployment
                    typically GBP 200,000 to 600,000.
                  </p>
                  <p>
                    <strong className="text-foreground/80">Verdict:</strong> The
                    right choice for growth-stage businesses that need a unified
                    cloud platform and are not primarily manufacturers.
                  </p>
                </div>
              </div>
            </SpotlightCard>
          </Reveal>

          {/* Sage X3 */}
          <Reveal delay={0.2}>
            <SpotlightCard>
              <div className="p-6">
                <h3 className="text-[17px] font-semibold text-foreground mb-1">
                  5. Sage X3
                </h3>
                <p className="text-[13px] text-accent/80 mb-3">
                  Best for: UK mid-market manufacturers and distributors (100 to
                  500 employees) | Rating: 7.5/10
                </p>
                <div className="text-[14px] text-muted leading-relaxed space-y-3">
                  <p>
                    Headquartered in Newcastle with deep understanding of UK tax,
                    regulatory, and business requirements. Good manufacturing
                    functionality including process and discrete manufacturing.
                    Competitive pricing compared to SAP, Oracle, and Dynamics at
                    similar scale.
                  </p>
                  <p>
                    <strong className="text-foreground/80">UK pricing:</strong>{" "}
                    Typically GBP 60 to 120 per user per month for cloud.
                    Implementation GBP 100,000 to 400,000.
                  </p>
                  <p>
                    <strong className="text-foreground/80">Verdict:</strong> An
                    underrated option for UK manufacturers and distributors.
                    Genuinely understands UK business requirements.
                  </p>
                </div>
              </div>
            </SpotlightCard>
          </Reveal>

          {/* Infor M3 */}
          <Reveal delay={0.25}>
            <SpotlightCard>
              <div className="p-6">
                <h3 className="text-[17px] font-semibold text-foreground mb-1">
                  6. Infor M3
                </h3>
                <p className="text-[13px] text-accent/80 mb-3">
                  Best for: Process manufacturing (250 to 2,000+ employees) |
                  Rating: 8/10
                </p>
                <div className="text-[14px] text-muted leading-relaxed space-y-3">
                  <p>
                    A specialist ERP built for process manufacturing, food and
                    beverage, fashion, chemicals, and distribution. Deep
                    formulation, recipe management, batch tracking, and
                    catch-weight capabilities. Ranked as a Leader in IDC&#39;s
                    2024 MarketScape for Process Manufacturing ERP.
                  </p>
                  <p>
                    <strong className="text-foreground/80">UK pricing:</strong>{" "}
                    Typically GBP 100 to 200 per user per month. Implementation
                    GBP 300,000 to 1 million.
                  </p>
                  <p>
                    <strong className="text-foreground/80">Verdict:</strong> For food
                    manufacturers, genuinely one of the best options available.
                    But it is a specialist tool. Read more about{" "}
                    <Link href="/industries/food-manufacturing/">
                      ERP for food manufacturing
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </SpotlightCard>
          </Reveal>

          {/* IFS */}
          <Reveal delay={0.3}>
            <SpotlightCard>
              <div className="p-6">
                <h3 className="text-[17px] font-semibold text-foreground mb-1">
                  7. IFS Cloud
                </h3>
                <p className="text-[13px] text-accent/80 mb-3">
                  Best for: Asset-intensive industries (500 to 5,000+
                  employees) | Rating: 8/10
                </p>
                <div className="text-[14px] text-muted leading-relaxed space-y-3">
                  <p>
                    A single platform covering ERP, Enterprise Asset Management,
                    and Field Service Management. IFS reported 21% ARR growth in
                    2024. Market-leading asset management and field service
                    capabilities integrated directly into the ERP.
                  </p>
                  <p>
                    <strong className="text-foreground/80">UK pricing:</strong>{" "}
                    Typically GBP 100 to 200 per user per month. Implementation
                    GBP 300,000 to 1 million+.
                  </p>
                  <p>
                    <strong className="text-foreground/80">Verdict:</strong> If you
                    are in aerospace, energy, or construction and need integrated
                    ERP, asset management, and field service, IFS Cloud is hard
                    to beat.
                  </p>
                </div>
              </div>
            </SpotlightCard>
          </Reveal>

          {/* Epicor */}
          <Reveal delay={0.35}>
            <SpotlightCard>
              <div className="p-6">
                <h3 className="text-[17px] font-semibold text-foreground mb-1">
                  8. Epicor Kinetic
                </h3>
                <p className="text-[13px] text-accent/80 mb-3">
                  Best for: Discrete manufacturers and distributors (50 to
                  1,000 employees) | Rating: 7.5/10
                </p>
                <div className="text-[14px] text-muted leading-relaxed space-y-3">
                  <p>
                    Built specifically for discrete manufacturers, distributors,
                    and building supply companies. Deep MRP, shop floor control,
                    advanced planning and scheduling. Good track record in the UK
                    manufacturing mid-market.
                  </p>
                  <p>
                    <strong className="text-foreground/80">UK pricing:</strong>{" "}
                    Typically GBP 70 to 150 per user per month. Implementation
                    GBP 150,000 to 600,000.
                  </p>
                  <p>
                    <strong className="text-foreground/80">Verdict:</strong> If you
                    are a UK discrete manufacturer in the 50 to 500 employee
                    range, Epicor Kinetic deserves serious consideration.
                  </p>
                </div>
              </div>
            </SpotlightCard>
          </Reveal>

          {/* Acumatica */}
          <Reveal delay={0.4}>
            <SpotlightCard>
              <div className="p-6">
                <h3 className="text-[17px] font-semibold text-foreground mb-1">
                  9. Acumatica
                </h3>
                <p className="text-[13px] text-accent/80 mb-3">
                  Best for: SMEs wanting flexible licensing (20 to 500
                  employees) | Rating: 7.5/10
                </p>
                <div className="text-[14px] text-muted leading-relaxed space-y-3">
                  <p>
                    Consumption-based licensing rather than per-user pricing,
                    which makes it attractive for organisations where many people
                    need occasional system access. Open API architecture. Good
                    distribution, construction, and retail functionality.
                  </p>
                  <p>
                    <strong className="text-foreground/80">UK pricing:</strong>{" "}
                    Consumption-based, starting from approximately GBP 800 to
                    1,500 per month. Implementation GBP 100,000 to 400,000.
                  </p>
                  <p>
                    <strong className="text-foreground/80">Verdict:</strong> The
                    disruptor on this list. The pricing model is genuinely
                    appealing. The main risk is the relatively thin UK partner
                    ecosystem.
                  </p>
                </div>
              </div>
            </SpotlightCard>
          </Reveal>

          {/* SYSPRO */}
          <Reveal delay={0.45}>
            <SpotlightCard>
              <div className="p-6">
                <h3 className="text-[17px] font-semibold text-foreground mb-1">
                  10. SYSPRO
                </h3>
                <p className="text-[13px] text-accent/80 mb-3">
                  Best for: Small to mid-size manufacturers (50 to 500
                  employees) | Rating: 7/10
                </p>
                <div className="text-[14px] text-muted leading-relaxed space-y-3">
                  <p>
                    Purpose-built for small to mid-size manufacturers and
                    distributors. Good balance of manufacturing depth and ease of
                    use. Supports both process and discrete manufacturing. More
                    affordable than most competitors at this functional level.
                  </p>
                  <p>
                    <strong className="text-foreground/80">UK pricing:</strong>{" "}
                    Typically GBP 50 to 100 per user per month. Implementation
                    GBP 80,000 to 300,000.
                  </p>
                  <p>
                    <strong className="text-foreground/80">Verdict:</strong> A solid,
                    unpretentious ERP for manufacturers who do not need the
                    complexity or cost of SAP or Infor. Should be on your
                    shortlist alongside Sage X3 and Epicor Kinetic.
                  </p>
                </div>
              </div>
            </SpotlightCard>
          </Reveal>
        </div>
      </ContentSection>

      {/* Which is right */}
      <ContentSection withBorder>
        <SectionHeader
          eyebrow="Choosing"
          title="Which ERP is right for your business?"
          subtitle="Choosing an ERP system is not about finding the best platform. It is about finding the right fit for your specific business."
        />
        <Prose>
          <h3>By company size</h3>
          <p>
            <strong>Under 50 employees:</strong> You probably do not need a
            traditional ERP. Look at Xero or Sage 200 for accounting, combined
            with industry-specific tools. If you genuinely need ERP, Acumatica
            and SYSPRO offer the most cost-effective entry points. Microsoft
            Dynamics 365 Business Central is also worth considering.
          </p>
          <p>
            <strong>50 to 250 employees:</strong> The sweet spot for mid-market
            ERP. Your shortlist should include Dynamics 365, NetSuite, Sage X3,
            Epicor Kinetic (if manufacturing), or SYSPRO (if manufacturing).
            Budget GBP 100,000 to 500,000 for implementation.
          </p>
          <p>
            <strong>250 to 1,000 employees:</strong> You need a platform that
            scales. Consider Dynamics 365 (Finance and Supply Chain), NetSuite,
            Infor M3 (if process manufacturing), IFS Cloud (if
            asset-intensive), or Sage X3. Budget GBP 300,000 to 1.5 million.
          </p>
          <p>
            <strong>1,000+ employees:</strong> SAP S/4HANA and Oracle Cloud ERP
            become serious contenders. Dynamics 365 and IFS Cloud can also serve
            this segment depending on your industry. Budget GBP 1 million to 5
            million+.
          </p>

          <h3>By industry</h3>
          <p>
            <strong>Food manufacturing:</strong> Infor M3 or SYSPRO. Both offer
            the traceability, batch management, and allergen tracking your
            industry requires. SAP for larger operations (500+ employees).
          </p>
          <p>
            <strong>Pharmaceutical and life sciences:</strong> SAP S/4HANA is
            the dominant choice. For smaller pharma companies, Sage X3 and Infor
            M3 are viable alternatives. Learn more about{" "}
            <Link href="/industries/pharmaceutical/">
              pharma ERP consulting
            </Link>
            .
          </p>
          <p>
            <strong>Professional services:</strong> NetSuite or Microsoft
            Dynamics 365. Both handle project accounting, time tracking, and
            resource management well. Oracle&#39;s project module is strong for
            larger firms. See our{" "}
            <Link href="/industries/professional-services/">
              professional services ERP guide
            </Link>
            .
          </p>
          <p>
            <strong>Distribution:</strong> Dynamics 365, NetSuite, Epicor
            Kinetic, or Acumatica. All handle warehouse management, order
            processing, and supply chain planning capably at mid-market level.
          </p>

          <h3>By budget tier</h3>
          <p>
            <strong>Under GBP 200,000 total:</strong> SYSPRO, Acumatica, or
            Dynamics 365 Business Central
          </p>
          <p>
            <strong>GBP 200,000 to 500,000:</strong> Sage X3, Epicor Kinetic,
            Dynamics 365, or NetSuite
          </p>
          <p>
            <strong>GBP 500,000 to 1.5 million:</strong> Dynamics 365 (full),
            NetSuite, Infor M3, or IFS Cloud
          </p>
          <p>
            <strong>GBP 1.5 million+:</strong> SAP S/4HANA or Oracle Cloud ERP
          </p>
        </Prose>
      </ContentSection>

      {/* FAQ */}
      <ContentSection withBorder>
        <SectionHeader eyebrow="FAQ" title="Frequently asked questions" />
        <div className="space-y-10">
          <Reveal>
            <Prose>
              <h3>What is the most used ERP in the UK?</h3>
              <p>
                SAP and Microsoft Dynamics hold the largest market share among
                UK enterprises, but the answer depends on company size. For
                large enterprises (1,000+ employees), SAP dominates. In the
                mid-market (100 to 1,000 employees), Dynamics 365 and Sage are
                the most commonly deployed. According to Statista (2024), SAP
                holds approximately 22% of the global ERP market, with Oracle at
                12% and Microsoft at 8%.
              </p>
            </Prose>
          </Reveal>
          <Reveal>
            <Prose>
              <h3>Which ERP is best, Oracle or SAP?</h3>
              <p>
                Neither is universally better. SAP has deeper manufacturing,
                supply chain, and operations functionality. Oracle has stronger
                financials, procurement, and a more modern cloud architecture.
                SAP has a larger UK partner ecosystem. Oracle offers faster cloud
                implementation. For a detailed comparison, read{" "}
                <Link href="/resources/guides/sap-vs-oracle/">
                  SAP vs Oracle: which ERP is right for your business
                </Link>
                .
              </p>
            </Prose>
          </Reveal>
          <Reveal>
            <Prose>
              <h3>How much does an ERP system cost in the UK?</h3>
              <p>
                ERP costs in the UK vary enormously. Small business (under 50
                users): GBP 50,000 to 200,000. Mid-market (50 to 250 users):
                GBP 200,000 to 1 million. Enterprise (250 to 1,000+ users): GBP
                1 million to 5 million+. These ranges include software
                licensing, implementation services, data migration, training, and
                first-year support. For a detailed breakdown, read{" "}
                <Link href="/resources/guides/erp-cost-guide/">
                  how much does an ERP system cost in the UK
                </Link>
                .
              </p>
            </Prose>
          </Reveal>
          <Reveal>
            <Prose>
              <h3>What is the best ERP for manufacturing?</h3>
              <p>
                It depends on your type of manufacturing. Discrete manufacturing
                (engineering, automotive, metals): Epicor Kinetic, SAP S/4HANA,
                or Dynamics 365 Supply Chain Management. Process manufacturing
                (food, chemicals, pharma): Infor M3, SAP S/4HANA, or SYSPRO.
                The critical distinction is between process and discrete
                manufacturing. Always evaluate based on your specific
                manufacturing processes, not generic claims.
              </p>
            </Prose>
          </Reveal>
        </div>
      </ContentSection>

      <PageCTA
        title="Need help choosing?"
        subtitle="Selecting an ERP system is a decision you will live with for seven to ten years. The software licence is a fraction of the total investment. If you want independent, vendor-neutral guidance, talk to us. We work for you, not the vendors."
        buttonText="Book a free consultation"
        buttonHref="/contact/"
      />
    </PageLayout>
  );
}
