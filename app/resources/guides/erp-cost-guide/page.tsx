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
  title: "How Much Does ERP Cost in the UK? 2026 Guide | COGO",
  description:
    "Realistic ERP costs in GBP for UK businesses. Licensing, implementation, hidden costs, and pricing by system. From independent ERP consultants.",
};

export default function ERPCostGuidePage() {
  return (
    <PageLayout>
      <PageHeader
        eyebrow="Guides"
        title="How much does ERP cost? The honest answer for UK businesses in 2026"
        subtitle="For a UK mid-market business with 100 to 500 employees, expect to spend between GBP 150,000 and GBP 750,000 on a modern ERP system, all in. This guide gives you the real numbers."
      />

      {/* Intro */}
      <ContentSection withBorder>
        <Prose>
          <p>
            You are here because somebody wants a number. How much will this
            ERP thing actually cost?
          </p>
          <p>
            That number could be GBP 40,000 for a 30-person manufacturer
            picking up a tier-two cloud system. Or it could be north of GBP 2
            million for a complex, multi-site SAP deployment. The range is wide
            because ERP is not a product you buy off a shelf. It is a programme
            of work that reshapes how your entire organisation operates. The
            software licence is often the smallest line item on the invoice.
          </p>
          <p>
            This guide gives you the real numbers, in GBP, based on what we see
            across UK implementations every year. No vendor spin. No
            &quot;contact us for pricing&quot; rubbish. Just the figures you need
            to build a credible business case.
          </p>
          <p>
            If you want help sizing this for your specific situation,{" "}
            <Link href="/services/erp-consulting/">
              talk to an independent ERP consultant
            </Link>{" "}
            who does not sell software.
          </p>
        </Prose>
      </ContentSection>

      <PageImage
        src="/images/hero-project-planning.jpg"
        alt="ERP project planning and budget management"
      />

      {/* Cost breakdown */}
      <ContentSection withBorder>
        <SectionHeader
          eyebrow="Breakdown"
          title="ERP cost breakdown: where does the money actually go?"
          subtitle="Most people fixate on the licence fee. That is a mistake. Licensing typically accounts for just 15 to 25% of your total ERP cost."
        />
        <Reveal>
          <div className="overflow-x-auto -mx-6 px-6 mb-8">
            <table className="w-full text-[13px] text-muted border-collapse">
              <thead>
                <tr className="border-b border-border text-left">
                  <th className="py-3 pr-4 text-foreground font-medium">Cost category</th>
                  <th className="py-3 pr-4 text-foreground font-medium">Typical %</th>
                  <th className="py-3 pr-4 text-foreground font-medium">GBP range (mid-market)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="py-3 pr-4 text-foreground">Software licensing</td>
                  <td className="py-3 pr-4">15-25%</td>
                  <td className="py-3 pr-4">GBP 30,000 to 250,000</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 pr-4 text-foreground">Implementation consulting</td>
                  <td className="py-3 pr-4">25-35%</td>
                  <td className="py-3 pr-4">GBP 50,000 to 350,000</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 pr-4 text-foreground">Customisation and development</td>
                  <td className="py-3 pr-4">10-20%</td>
                  <td className="py-3 pr-4">GBP 20,000 to 200,000</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 pr-4 text-foreground">Data migration</td>
                  <td className="py-3 pr-4">5-10%</td>
                  <td className="py-3 pr-4">GBP 10,000 to 100,000</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 pr-4 text-foreground">Training</td>
                  <td className="py-3 pr-4">5-10%</td>
                  <td className="py-3 pr-4">GBP 10,000 to 80,000</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 pr-4 text-foreground">Hardware and infrastructure</td>
                  <td className="py-3 pr-4">0-10%</td>
                  <td className="py-3 pr-4">GBP 0 to 100,000</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 pr-4 text-foreground">Ongoing support (per year)</td>
                  <td className="py-3 pr-4">15-22% of licence</td>
                  <td className="py-3 pr-4">GBP 15,000 to 80,000/year</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 pr-4 text-foreground">Internal resource costs</td>
                  <td className="py-3 pr-4">10-20%</td>
                  <td className="py-3 pr-4">GBP 30,000 to 200,000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Reveal>
        <Prose>
          <p>
            <strong>
              The line most vendors leave off the quote is the last one.
            </strong>{" "}
            Your people will spend thousands of hours on this project. A finance
            manager pulled into workshops three days a week for six months has a
            real cost, even if no invoice arrives.
          </p>
          <p>
            According to Panorama Consulting&#39;s 2025 ERP Report, the average
            ERP implementation takes 17.4 months. That is 17.4 months of your
            best people splitting their attention between the project and their
            day jobs.
          </p>
        </Prose>
      </ContentSection>

      {/* Pricing by system */}
      <ContentSection withBorder>
        <SectionHeader
          eyebrow="By system"
          title="ERP pricing by system: what do the major platforms actually cost?"
        />
        <div className="grid gap-6 mb-8">
          <Reveal>
            <SpotlightCard>
              <div className="p-6">
                <h3 className="text-[17px] font-semibold text-foreground mb-2">
                  SAP S/4HANA
                </h3>
                <p className="text-[13px] text-accent/80 mb-3">
                  GBP 250,000 to 2,000,000+ total | Large enterprises, complex
                  manufacturing
                </p>
                <p className="text-[14px] text-muted leading-relaxed">
                  If you are a GBP 50 million turnover business, you almost
                  certainly do not need SAP S/4HANA. We regularly see mid-market
                  organisations talked into enterprise-grade systems by
                  persuasive sales teams.
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
                  GBP 200,000 to 1,500,000+ total | Upper mid-market to
                  enterprise
                </p>
                <p className="text-[14px] text-muted leading-relaxed">
                  Oracle&#39;s pricing can be opaque, and negotiation is
                  expected. For a deeper comparison, read{" "}
                  <Link href="/resources/guides/sap-vs-oracle/">
                    SAP vs Oracle
                  </Link>
                  .
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
                  GBP 80,000 to 500,000 total | Mid-market, professional
                  services, distribution
                </p>
                <p className="text-[14px] text-muted leading-relaxed">
                  Dominates the UK mid-market for good reason. Per-user licensing
                  is transparent (starting around GBP 150 to 170 per user per
                  month for Finance and Operations modules).
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
          <Reveal delay={0.15}>
            <SpotlightCard>
              <div className="p-6">
                <h3 className="text-[17px] font-semibold text-foreground mb-2">
                  NetSuite
                </h3>
                <p className="text-[13px] text-accent/80 mb-3">
                  GBP 50,000 to 300,000 total | Fast-growing mid-market, SaaS
                </p>
                <p className="text-[14px] text-muted leading-relaxed">
                  NetSuite&#39;s pricing is opaque. Oracle (who own NetSuite)
                  are notorious for aggressive discounting off inflated list
                  prices. Never accept the first quote.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
          <Reveal delay={0.2}>
            <SpotlightCard>
              <div className="p-6">
                <h3 className="text-[17px] font-semibold text-foreground mb-2">
                  Sage X3 and SYSPRO
                </h3>
                <p className="text-[13px] text-accent/80 mb-3">
                  GBP 40,000 to 250,000 total | Mid-market manufacturing and
                  distribution
                </p>
                <p className="text-[14px] text-muted leading-relaxed">
                  Cost-effective options for manufacturers that need genuine ERP
                  functionality without the overhead of SAP or Oracle.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
        </div>
        <Prose>
          <p>
            Read{" "}
            <Link href="/resources/guides/best-erp-systems/">
              our independent guide to the best ERP systems
            </Link>{" "}
            before you let a vendor define your shortlist.
          </p>
        </Prose>
      </ContentSection>

      {/* By business size */}
      <ContentSection withBorder>
        <SectionHeader
          eyebrow="By size"
          title="ERP cost by business size"
        />
        <Prose>
          <h3>Under 50 employees: GBP 20,000 to 80,000</h3>
          <p>
            At this size, you are likely looking at cloud-native systems like
            Xero (if it is just finance), NetSuite, or Sage Intacct. The risk
            is over-buying. A 40-person business does not need Dynamics 365
            Finance and Operations. A good rule of thumb: your total first-year
            ERP cost should not exceed 1 to 2% of annual turnover.
          </p>
          <p>
            <strong>Typical timeline:</strong> 3 to 6 months
          </p>

          <h3>50 to 250 employees: GBP 80,000 to 350,000</h3>
          <p>
            The sweet spot for mid-market ERP vendors: Dynamics 365, NetSuite,
            Sage X3, SYSPRO. Most of the cost goes to implementation consulting
            and change management. At this size, you need to budget for change
            management properly. The technology is rarely the reason ERP projects
            fail at mid-market scale. It is people.
          </p>
          <p>
            <strong>Typical timeline:</strong> 6 to 12 months
          </p>

          <h3>250 to 1,000 employees: GBP 350,000 to 1,000,000+</h3>
          <p>
            SAP, Oracle, and Dynamics 365 Finance and Operations are the usual
            contenders. Internal resource costs become a much bigger factor. You
            will likely need a dedicated project team of 3 to 5 people, plus 10
            to 20 subject matter experts contributing 20 to 40% of their time
            over 12 to 18 months. Partner selection becomes critical at this
            tier.
          </p>
          <p>
            <strong>Typical timeline:</strong> 12 to 24 months
          </p>

          <h3>1,000+ employees: GBP 750,000 to 3,000,000+</h3>
          <p>
            Enterprise-scale ERP is a different animal. Multi-year programmes,
            dedicated programme offices, phased rollouts. SAP S/4HANA and Oracle
            dominate here. Gartner&#39;s 2025 data suggests that organisations
            with more than 1,000 employees spend an average of 3.2% of annual
            revenue on ERP over a five-year period.
          </p>
          <p>
            <strong>Typical timeline:</strong> 18 to 36+ months
          </p>
        </Prose>
      </ContentSection>

      {/* Hidden costs */}
      <ContentSection withBorder>
        <SectionHeader
          eyebrow="Hidden costs"
          title="The hidden costs most vendors will not mention"
          subtitle="This is where we earn our fee as independent consultants. Every ERP vendor will give you a project quote. Very few will tell you about the costs that sit outside it."
        />
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Reveal>
            <SpotlightCard>
              <div className="p-6">
                <h3 className="text-[17px] font-semibold text-foreground mb-3">
                  Internal staff time
                </h3>
                <p className="text-[14px] text-muted leading-relaxed">
                  Your best people will lose 30 to 50% of their productive
                  capacity for the duration of the project. Real cost: GBP
                  30,000 to 200,000 in equivalent salary, plus the knock-on
                  effect of delayed business-as-usual work.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
          <Reveal delay={0.05}>
            <SpotlightCard>
              <div className="p-6">
                <h3 className="text-[17px] font-semibold text-foreground mb-3">
                  Productivity dip at go-live
                </h3>
                <p className="text-[14px] text-muted leading-relaxed">
                  Panorama Consulting found 67% of organisations experienced
                  operational disruption during go-live, with an average
                  productivity dip of 15 to 25% lasting 1 to 4 months.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
          <Reveal delay={0.1}>
            <SpotlightCard>
              <div className="p-6">
                <h3 className="text-[17px] font-semibold text-foreground mb-3">
                  Scope creep
                </h3>
                <p className="text-[14px] text-muted leading-relaxed">
                  The average ERP project exceeds its original budget by 30 to
                  40%, according to Panorama&#39;s research. Budget a
                  contingency of at least 20%.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
          <Reveal delay={0.15}>
            <SpotlightCard>
              <div className="p-6">
                <h3 className="text-[17px] font-semibold text-foreground mb-3">
                  Data cleansing
                </h3>
                <p className="text-[14px] text-muted leading-relaxed">
                  Customer records with missing postcodes, duplicate supplier
                  accounts, product codes that mean different things in different
                  departments. Real cost: GBP 10,000 to 60,000. Often
                  underestimated by a factor of three.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
          <Reveal delay={0.2}>
            <SpotlightCard>
              <div className="p-6">
                <h3 className="text-[17px] font-semibold text-foreground mb-3">
                  Integration costs
                </h3>
                <p className="text-[14px] text-muted leading-relaxed">
                  Your ERP needs to talk to your CRM, e-commerce platform,
                  warehouse management, and EDI connections. Each integration is
                  a mini-project: GBP 5,000 to 30,000 per integration. A
                  typical mid-market business has 5 to 15 integrations.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
          <Reveal delay={0.25}>
            <SpotlightCard>
              <div className="p-6">
                <h3 className="text-[17px] font-semibold text-foreground mb-3">
                  Extended post go-live support
                </h3>
                <p className="text-[14px] text-muted leading-relaxed">
                  Implementation partners typically include 4 to 8 weeks of
                  hypercare. It is almost never enough. Extending it costs GBP
                  15,000 to 60,000, and you will be negotiating from a weak
                  position.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
        </div>
      </ContentSection>

      {/* Cloud vs on-premise */}
      <ContentSection withBorder>
        <SectionHeader
          eyebrow="Deployment"
          title="Cloud vs on-premise: cost comparison"
          subtitle="According to Gartner, over 85% of new ERP deployments in 2025 were cloud-based. For most UK mid-market businesses, cloud ERP is the right answer in 2026."
        />
        <Prose>
          <h3>Cloud ERP (SaaS)</h3>
          <p>
            Lower upfront cost. Monthly or annual subscription, typically GBP
            100 to 250 per user per month. Implementation is generally faster
            and less expensive. Upgrades included in subscription. Minimal IT
            overhead. The trade-off is limited customisation, but that is
            usually a good thing.
          </p>

          <h3>On-premise ERP</h3>
          <p>
            Higher upfront cost with perpetual licence. Annual maintenance at 18
            to 22% of licence cost. Deep customisation is possible, but every
            customisation is a future upgrade headache. Significant IT overhead
            for servers, backups, security, and patching.
          </p>

          <h3>The real comparison</h3>
          <p>
            Total cost of ownership over 10 years is broadly comparable, though
            cloud tends to be 10 to 20% more expensive at high user counts. But
            cloud ERP includes upgrades, infrastructure management, and security
            patches in the subscription. For most UK businesses, cloud is the
            better value proposition when you account for all costs.
          </p>
          <p>
            The exceptions are businesses with extreme data sovereignty
            requirements, highly specialised manufacturing processes, or
            locations with unreliable internet connectivity.
          </p>
        </Prose>
      </ContentSection>

      {/* Cost of doing nothing */}
      <ContentSection withBorder>
        <SectionHeader
          eyebrow="Inaction"
          title="The cost of doing nothing"
          subtitle="Every conversation about ERP cost should include this question: what is it costing you to stay on your current system?"
        />
        <Prose>
          <p>
            We audit organisations every year that are spending more on
            maintaining their legacy systems than a new ERP would cost them.
          </p>
          <p>
            <strong>Manual workarounds:</strong> If your finance team spends two
            days every month reconciling data between systems, that is 24
            working days per year. For a team of three, you are looking at GBP
            30,000 to 50,000 annually just for workarounds.
          </p>
          <p>
            <strong>Staff retention:</strong> Good finance professionals and
            operations managers do not want to spend their careers wrestling with
            legacy systems. If your competitors are running modern cloud ERP,
            you will struggle to attract the calibre of people you need.
          </p>
          <p>
            <strong>Inability to scale:</strong> A Forrester study found that
            organisations that delayed ERP modernisation by more than three
            years spent an average of 25% more on the eventual implementation.
          </p>
          <p>
            When we run cost-of-inaction analyses for clients, the annual cost
            of maintaining the status quo typically lands between GBP 100,000
            and 500,000 for a mid-market business. Against a total ERP
            investment of GBP 200,000 to 500,000, the payback case often writes
            itself.
          </p>
        </Prose>
      </ContentSection>

      {/* FAQ */}
      <ContentSection withBorder>
        <SectionHeader eyebrow="FAQ" title="Frequently asked questions" />
        <div className="space-y-10">
          <Reveal>
            <Prose>
              <h3>How much does an ERP system cost for a small business?</h3>
              <p>
                For a UK business with under 50 employees, expect to pay between
                GBP 20,000 and 80,000 for a cloud ERP implementation. This
                typically includes a system like NetSuite, Sage Intacct, or
                Dynamics 365 Business Central. Annual subscription costs will
                run GBP 15,000 to 40,000 after that. The biggest mistake small
                businesses make is over-specifying.
              </p>
            </Prose>
          </Reveal>
          <Reveal>
            <Prose>
              <h3>How much does SAP cost for a mid-size company?</h3>
              <p>
                SAP S/4HANA for a mid-size UK company (250 to 1,000 employees)
                typically costs between GBP 400,000 and 1,200,000 in total.
                SAP&#39;s licensing model has shifted heavily toward cloud
                subscription (SAP RISE), with typical per-user costs of GBP 150
                to 350 per month. The implementation cost is where SAP gets
                expensive, typically requiring 1.5x to 3x the licence cost in
                consulting fees.
              </p>
            </Prose>
          </Reveal>
          <Reveal>
            <Prose>
              <h3>Is cloud ERP cheaper than on-premise?</h3>
              <p>
                In the short term, yes. Over a 10-year period, the total cost of
                ownership is broadly comparable, though cloud tends to be 10 to
                20% more expensive at high user counts. However, cloud ERP
                includes upgrades, infrastructure management, and security
                patches. For most UK businesses in 2026, cloud is the better
                value proposition when you account for all costs.
              </p>
            </Prose>
          </Reveal>
          <Reveal>
            <Prose>
              <h3>How do I justify ERP investment to the board?</h3>
              <p>
                Lead with the cost of inaction, not the features of the new
                system. Boards respond to risk and opportunity cost. Quantify
                what the current state is costing: manual workarounds, delayed
                reporting, compliance risk, inability to scale. Then present the
                ERP investment with a clear payback period (typically 2 to 4
                years for mid-market). Our{" "}
                <Link href="/resources/templates/transformation-business-case/">
                  digital transformation business case template
                </Link>{" "}
                gives you the exact structure finance directors expect.
              </p>
            </Prose>
          </Reveal>
        </div>
      </ContentSection>

      <PageCTA
        title="Get accurate ERP cost estimates for your business"
        subtitle="The ranges in this guide will get you to a credible budget. But every organisation is different. COGO is an independent, client-side consultancy. We do not sell software or take commissions. If you are building an ERP business case, evaluating vendors, or trying to make sense of wildly different quotes, we will give you a straight answer."
        buttonText="Talk to an independent adviser"
        buttonHref="/contact/"
      />
    </PageLayout>
  );
}
