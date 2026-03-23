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
  title: "Warehouse Management Systems: UK Buyer's Guide | COGO",
  description:
    "Independent guide to warehouse management systems for UK manufacturers. WMS vs ERP warehouse module, key features, and how to choose.",
};

export default function WarehouseManagementSystemPage() {
  return (
    <PageLayout>
      <PageHeader
        eyebrow="Guides"
        title="Warehouse management systems: what UK manufacturers need to know"
        subtitle="If your warehouse still relies on spreadsheets, paper pick lists, or the 'Dave knows where everything is' system, you are leaving money on the table."
      />

      {/* Intro */}
      <ContentSection withBorder>
        <Prose>
          <p>
            According to Warehousing Education and Research Council (WERC) data,
            companies using a warehouse management system report an average 25%
            improvement in inventory accuracy and a 20% increase in picking
            productivity within the first year.
          </p>
          <p>
            A warehouse management system is one of the highest-impact
            investments a manufacturer can make, but only if you pick the right
            one. This guide gives you an independent, vendor-neutral view of
            what a WMS does, how it compares to the warehouse module already
            sitting inside your ERP, and how to evaluate the options without
            getting lost in vendor hype.
          </p>
        </Prose>
      </ContentSection>

      {/* What is a WMS */}
      <ContentSection withBorder>
        <SectionHeader
          eyebrow="Fundamentals"
          title="What is a WMS?"
        />
        <Prose>
          <p>
            A warehouse management system (WMS) is software that controls and
            optimises the day-to-day operations within a warehouse. It manages
            receiving, put-away, inventory tracking, picking, packing, shipping,
            and returns. A WMS provides real-time visibility into stock levels,
            location accuracy, and workforce productivity across one or more
            warehouse sites.
          </p>
          <p>
            Unlike a basic inventory module, a WMS is purpose-built for the
            physical movement of goods. It tells your team exactly where to put
            items, which order to pick next, and how to load a lorry for the
            most efficient delivery route.
          </p>
          <p>
            Think of it this way: your ERP knows <em>what</em> you have. Your
            WMS knows <em>where</em> it is, <em>who</em> is handling it, and{" "}
            <em>how fast</em> it is moving.
          </p>
        </Prose>
      </ContentSection>

      {/* WMS vs ERP */}
      <ContentSection withBorder>
        <SectionHeader
          eyebrow="Comparison"
          title="WMS vs ERP warehouse module: which do you need?"
          subtitle="The honest answer is: it depends on the complexity of your warehouse operations."
        />
        <Prose>
          <h3>When your ERP warehouse module is enough</h3>
          <p>
            Your ERP&#39;s built-in warehouse functionality will likely serve
            you well if you operate a single warehouse with fewer than 10,000
            SKUs, your picking processes are straightforward, you ship fewer
            than 500 orders per day, your inventory accuracy is already above
            95%, and you do not need advanced slotting optimisation.
          </p>

          <h3>When you need a dedicated WMS</h3>
          <p>
            A standalone WMS becomes worth the investment when you manage
            multiple warehouse sites, your order volumes exceed 500 to 1,000
            shipments per day, you handle complex fulfilment (kitting, serial
            number tracking, batch/lot control, hazmat), your picking accuracy
            is below 99%, or you need advanced labour management.
          </p>
          <p>
            According to Gartner&#39;s 2025 Supply Chain Technology survey, 62%
            of manufacturers with annual revenue above GBP 50 million use a
            standalone WMS rather than relying on their ERP&#39;s native module.
          </p>
          <p>
            If you are unsure where you fall, our{" "}
            <Link href="/services/erp-consulting/">
              independent ERP consulting services
            </Link>{" "}
            can help you assess whether your current system is truly holding you
            back.
          </p>
        </Prose>
      </ContentSection>

      {/* Top WMS systems */}
      <ContentSection withBorder>
        <SectionHeader
          eyebrow="Systems"
          title="Top WMS systems for UK businesses"
        />
        <div className="grid gap-6">
          <Reveal>
            <SpotlightCard>
              <div className="p-6">
                <h3 className="text-[17px] font-semibold text-white/90 mb-2">
                  SAP EWM
                </h3>
                <p className="text-[13px] text-accent/80 mb-3">
                  Large enterprises on SAP S/4HANA | GBP 150,000 to 500,000+
                  annually
                </p>
                <p className="text-[14px] text-white/50 leading-relaxed">
                  Deep SAP ecosystem integration. The natural choice if you are
                  already running SAP S/4HANA, but requires deep SAP expertise.
                  If considering this route, our{" "}
                  <Link href="/services/sap-consulting/">
                    SAP consulting practice
                  </Link>{" "}
                  can provide independent guidance.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
          <Reveal delay={0.05}>
            <SpotlightCard>
              <div className="p-6">
                <h3 className="text-[17px] font-semibold text-white/90 mb-2">
                  Oracle WMS Cloud
                </h3>
                <p className="text-[13px] text-accent/80 mb-3">
                  Mid-to-large businesses on Oracle ERP | GBP 100,000 to
                  350,000+ annually
                </p>
                <p className="text-[14px] text-white/50 leading-relaxed">
                  Strong analytics and machine learning capabilities. Good
                  integration with Oracle Cloud ERP and supply chain modules.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
          <Reveal delay={0.1}>
            <SpotlightCard>
              <div className="p-6">
                <h3 className="text-[17px] font-semibold text-white/90 mb-2">
                  Manhattan Active WM
                </h3>
                <p className="text-[13px] text-accent/80 mb-3">
                  High-volume, complex distribution | GBP 120,000 to 400,000+
                  annually
                </p>
                <p className="text-[14px] text-white/50 leading-relaxed">
                  Cloud-native, unified platform with no version upgrades. You
                  always run the latest release, which is a real advantage for
                  businesses tired of costly upgrades every few years.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
          <Reveal delay={0.15}>
            <SpotlightCard>
              <div className="p-6">
                <h3 className="text-[17px] font-semibold text-white/90 mb-2">
                  Blue Yonder WMS
                </h3>
                <p className="text-[13px] text-accent/80 mb-3">
                  Omni-channel retailers and manufacturers | GBP 100,000 to
                  300,000+ annually
                </p>
                <p className="text-[14px] text-white/50 leading-relaxed">
                  AI-powered demand sensing. Strong capabilities for
                  organisations managing both direct-to-consumer and B2B
                  fulfilment channels.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
          <Reveal delay={0.2}>
            <SpotlightCard>
              <div className="p-6">
                <h3 className="text-[17px] font-semibold text-white/90 mb-2">
                  Korber WMS
                </h3>
                <p className="text-[13px] text-accent/80 mb-3">
                  Mid-market manufacturers | GBP 50,000 to 200,000 annually
                </p>
                <p className="text-[14px] text-white/50 leading-relaxed">
                  Flexible, modular architecture. A solid mid-market option with
                  good configurability for diverse warehouse operations.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
          <Reveal delay={0.25}>
            <SpotlightCard>
              <div className="p-6">
                <h3 className="text-[17px] font-semibold text-white/90 mb-2">
                  OrderWise
                </h3>
                <p className="text-[13px] text-accent/80 mb-3">
                  UK SMEs (food, wholesale, distribution) | GBP 15,000 to
                  60,000 annually
                </p>
                <p className="text-[14px] text-white/50 leading-relaxed">
                  UK-built with lower total cost of ownership. Often overlooked,
                  but for UK SMEs, particularly in food and wholesale, it
                  delivers strong WMS functionality at a fraction of the cost of
                  enterprise platforms.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
        </div>
      </ContentSection>

      {/* Key features */}
      <ContentSection withBorder>
        <SectionHeader
          eyebrow="Features"
          title="Key WMS features for manufacturing"
        />
        <div className="grid md:grid-cols-2 gap-6">
          <Reveal>
            <SpotlightCard>
              <div className="p-6">
                <h3 className="text-[17px] font-semibold text-white/90 mb-3">
                  Inventory tracking and visibility
                </h3>
                <p className="text-[14px] text-white/50 leading-relaxed">
                  Real-time accuracy down to the bin level. Lot/batch tracking,
                  serial number management, and expiry date tracking.
                  Best-performing warehouses achieve 99.5%+ accuracy (Aberdeen
                  Group).
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
          <Reveal delay={0.05}>
            <SpotlightCard>
              <div className="p-6">
                <h3 className="text-[17px] font-semibold text-white/90 mb-3">
                  Picking and packing
                </h3>
                <p className="text-[14px] text-white/50 leading-relaxed">
                  Support for discrete, batch, wave, zone, and cluster picking
                  strategies. Cartonisation, packing validation via barcode
                  scan, and automated label generation.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
          <Reveal delay={0.1}>
            <SpotlightCard>
              <div className="p-6">
                <h3 className="text-[17px] font-semibold text-white/90 mb-3">
                  ERP integration
                </h3>
                <p className="text-[14px] text-white/50 leading-relaxed">
                  Non-negotiable. Your WMS must integrate with your ERP for
                  sales orders, purchase orders, inventory adjustments,
                  manufacturing orders, and master data. Poor integration is the
                  number one reason WMS implementations fail.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
          <Reveal delay={0.15}>
            <SpotlightCard>
              <div className="p-6">
                <h3 className="text-[17px] font-semibold text-white/90 mb-3">
                  Barcode and RFID
                </h3>
                <p className="text-[14px] text-white/50 leading-relaxed">
                  Barcode scanning is table stakes for any WMS in 2026. RFID is
                  more situational but increasingly viable as tag costs have
                  dropped roughly 60% over the past five years (IDTechEx, 2025).
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
        </div>
      </ContentSection>

      {/* How to select */}
      <ContentSection withBorder>
        <SectionHeader
          eyebrow="Selection"
          title="How to select a WMS"
        />
        <Prose>
          <ol>
            <li>
              <strong>Define your requirements before you talk to vendors.</strong>{" "}
              &quot;We need better inventory accuracy&quot; is not a requirement.
              &quot;We need real-time bin-level accuracy with lot tracking across
              three warehouse sites&quot; is.
            </li>
            <li>
              <strong>Establish integration requirements early.</strong> Map
              every system the WMS will talk to: ERP, TMS, e-commerce, EDI, MES.
              Identify data flows, direction, and required frequency.
            </li>
            <li>
              <strong>Assess total cost of ownership.</strong> Factor in
              implementation, data migration, hardware (scanners, label
              printers, wireless infrastructure), training, and ongoing support.
              Five-year TCO for a mid-market manufacturer typically falls
              between GBP 250,000 and 750,000.
            </li>
            <li>
              <strong>Run a structured evaluation.</strong> Score vendors against
              your documented requirements using a weighted scoring model.
            </li>
            <li>
              <strong>Insist on a proof of concept.</strong> Give each
              shortlisted vendor your actual scenarios, not their rehearsed demo
              script.
            </li>
            <li>
              <strong>Check references in your industry.</strong> Ask what went
              wrong, not just what went right.
            </li>
          </ol>
        </Prose>
      </ContentSection>

      {/* FAQ */}
      <ContentSection withBorder>
        <SectionHeader eyebrow="FAQ" title="Frequently asked questions" />
        <div className="space-y-10">
          <Reveal>
            <Prose>
              <h3>How long does a WMS implementation take?</h3>
              <p>
                For a mid-market manufacturer with a single warehouse, expect 4
                to 8 months. Multi-site rollouts or complex integrations can
                extend to 12 to 18 months. The biggest variable is data
                readiness and process standardisation, not the software itself.
              </p>
            </Prose>
          </Reveal>
          <Reveal>
            <Prose>
              <h3>What ROI should I expect from a WMS?</h3>
              <p>
                Based on industry benchmarks (WERC, 2024): 25 to 30%
                improvement in inventory accuracy, 15 to 25% increase in
                picking productivity, 10 to 20% reduction in shipping errors,
                and 5 to 15% reduction in labour costs. Most businesses achieve
                payback within 18 to 24 months of go-live.
              </p>
            </Prose>
          </Reveal>
          <Reveal>
            <Prose>
              <h3>Should I implement WMS before or after an ERP upgrade?</h3>
              <p>
                If you are planning an ERP replacement or major upgrade, it
                usually makes sense to implement the ERP first and the WMS
                second. The ERP provides the master data foundation that the WMS
                depends on. Implementing both simultaneously is possible but
                adds significant project risk.
              </p>
            </Prose>
          </Reveal>
        </div>
      </ContentSection>

      <PageCTA
        title="Need independent advice on warehouse management systems?"
        subtitle="COGO helps UK manufacturers evaluate and implement WMS software without vendor bias. We work for you, not the software companies."
        buttonText="Talk to our team"
        buttonHref="/contact/"
      />
    </PageLayout>
  );
}
