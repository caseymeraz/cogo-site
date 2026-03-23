import type { Metadata } from "next";
import Link from "next/link";
import PageLayout from "../../../components/PageLayout";
import PageHeader from "../../../components/PageHeader";
import ContentSection from "../../../components/ContentSection";
import Prose from "../../../components/Prose";
import Reveal from "../../../components/Reveal";
import PageCTA from "../../../components/PageCTA";

export const metadata: Metadata = {
  title: "Food Safety Management Systems: HACCP, Technology, and ERP Choices | COGO",
  description:
    "A practical guide to food safety management systems: HACCP principles, technology requirements, ERP vs standalone FSMS, and how to choose the right approach for your business.",
};

export default function FoodSafetyManagementSystemsPage() {
  return (
    <PageLayout>
      <PageHeader
        eyebrow="Blog"
        title="Food safety management systems: what they are, what they need, and how to choose the right technology"
        subtitle="Lance Harcourt - 23 March 2026"
      />

      <ContentSection withBorder>
        <Prose>
          <p>Every food business in the UK and Ireland is legally required to have a food safety management system in place. What catches organisations off guard is the gap between having a system on paper and having one that actually works.</p>
          <p>This guide walks you through what a food safety management system really involves, the HACCP principles at its core, the technology question (ERP vs standalone), and how to make a choice that fits your business rather than a vendor&apos;s sales target.</p>
          <h2>What is a food safety management system?</h2>
          <p>A food safety management system (FSMS) is a structured programme of policies, procedures, and practices designed to prevent food safety hazards from reaching the consumer. At its core, every FSMS includes prerequisite programmes (PRPs), a HACCP plan, and management system elements (document control, training records, internal audits, management review, corrective actions, and continual improvement).</p>
          <p>The legal basis comes from Regulation (EC) 852/2004. Beyond legal compliance, most food manufacturers also certify against a GFSI-benchmarked standard, typically <Link href="/resources/blog/brcgs-compliance-technology/">BRCGS Food Safety</Link> or <Link href="/resources/blog/fssc-22000-systems/">FSSC 22000</Link>.</p>
        </Prose>
      </ContentSection>

      <ContentSection withBorder>
        <Prose>
          <h2>The seven HACCP principles</h2>
          <ol>
            <li><strong>Conduct a hazard analysis.</strong> Identify biological, chemical, and physical hazards at each step of your process.</li>
            <li><strong>Determine critical control points (CCPs).</strong> Identify the points where control is essential to prevent or eliminate a hazard.</li>
            <li><strong>Establish critical limits.</strong> Set measurable boundaries for each CCP.</li>
            <li><strong>Establish monitoring procedures.</strong> Define how, when, and by whom each CCP will be monitored.</li>
            <li><strong>Establish corrective actions.</strong> Specify what happens when monitoring shows a CCP is out of control.</li>
            <li><strong>Establish verification procedures.</strong> Confirm that the HACCP plan is working as intended.</li>
            <li><strong>Establish record-keeping procedures.</strong> Maintain documentation that demonstrates the HACCP system is being followed.</li>
          </ol>
        </Prose>
      </ContentSection>

      <ContentSection withBorder>
        <Prose>
          <h2>ERP vs standalone FSMS: the real trade-offs</h2>
          <h3>Option 1: Standalone food safety / quality management software</h3>
          <p><strong>Pros:</strong> Purpose-built for food safety. Fast to implement. Lower upfront cost.</p>
          <p><strong>Cons:</strong> No integration with production, inventory, or procurement data unless you build interfaces.</p>
          <h3>Option 2: ERP with integrated quality and food safety modules</h3>
          <p><strong>Pros:</strong> Single source of truth. Traceability is built into production and inventory transactions.</p>
          <p><strong>Cons:</strong> Quality modules in general-purpose ERPs can be less sophisticated. Configuration takes time and expertise.</p>
          <h3>Option 3: ERP + integrated best-of-breed quality system</h3>
          <p><strong>Pros:</strong> Deep food safety functionality plus connected operational data.</p>
          <p><strong>Cons:</strong> Integration projects add cost and complexity.</p>
          <p>For more on how ERP choices affect food manufacturers, see <Link href="/industries/food-manufacturing/">our independent guide to ERP for food manufacturers</Link>.</p>
        </Prose>
      </ContentSection>

      <ContentSection withBorder>
        <Prose>
          <h2>Frequently asked questions</h2>
          <h3>What is the difference between HACCP and a food safety management system?</h3>
          <p>HACCP is a methodology for identifying and controlling food safety hazards. A food safety management system is broader: it includes HACCP but also encompasses prerequisite programmes, management system elements, and organisational culture. Think of HACCP as the engine and the FSMS as the whole car.</p>
          <h3>Is a food safety management system a legal requirement?</h3>
          <p>Yes. EU Regulation 852/2004 requires all food business operators to implement food safety procedures based on HACCP principles.</p>
          <h3>How often should a food safety management system be reviewed?</h3>
          <p>At minimum, conduct a formal management review annually. Internal audits should cover the entire system at least once per year, and HACCP plans should be reviewed whenever there are process changes.</p>
        </Prose>
      </ContentSection>

      <ContentSection withBorder>
        <Reveal>
          <p className="text-[15px] text-white/55 leading-relaxed">
            <strong>Need independent help choosing food safety management technology?</strong>{" "}
            <Link href="/contact/" className="text-accent underline underline-offset-4 decoration-accent/30 hover:decoration-accent/60 transition-colors">Talk to COGO</Link>.
          </p>
        </Reveal>
      </ContentSection>

      <PageCTA />
    </PageLayout>
  );
}
