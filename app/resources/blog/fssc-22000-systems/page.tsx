import type { Metadata } from "next";
import Link from "next/link";
import PageLayout from "../../../components/PageLayout";
import PageHeader from "../../../components/PageHeader";
import ContentSection from "../../../components/ContentSection";
import Prose from "../../../components/Prose";
import Reveal from "../../../components/Reveal";
import PageCTA from "../../../components/PageCTA";

export const metadata: Metadata = {
  title: "FSSC 22000 Certification: System Requirements and ERP Features | COGO",
  description:
    "What FSSC 22000 demands from your food safety systems, how it differs from BRCGS, and the ERP features that make certification manageable. Independent advice from COGO.",
};

export default function Fssc22000SystemsPage() {
  return (
    <PageLayout>
      <PageHeader
        eyebrow="Blog"
        title="FSSC 22000: what your food business actually needs to get certified"
        subtitle="Lance Harcourt - 23 March 2026"
      />

      <ContentSection withBorder>
        <Prose>
          <p>If your food manufacturing business is weighing up FSSC 22000 certification, you are not alone. The scheme now covers more than 33,000 certified organisations across 176 countries (FSSC 22000, 2024 Annual Report), making it one of the two dominant GFSI benchmarked standards alongside BRCGS.</p>
          <p>This guide gives you a plain-spoken breakdown of the standard, where it overlaps with and diverges from BRCGS, and the ERP features that will make your life easier when the auditor arrives.</p>
          <h2>What is FSSC 22000?</h2>
          <p>FSSC 22000 is a GFSI-recognised food safety management system certification scheme built on three pillars: ISO 22000 (the international standard for food safety management systems), sector-specific prerequisite programmes (ISO/TS 22002-1 for food manufacturing), and FSSC 22000 additional requirements (currently Version 6, released in 2023).</p>
          <h2>FSSC 22000 vs BRCGS: what actually differs?</h2>
          <p>Both standards are GFSI benchmarked. The key differences: FSSC 22000 has a pass/fail model with three-year certification (annual surveillance), while BRCGS uses graded results with annual recertification. FSSC 22000 gives you more freedom to design your own food safety management system, while BRCGS is more prescriptive.</p>
          <p>For a deeper look at the BRCGS side, read our article on <Link href="/resources/blog/brcgs-compliance-technology/">how ERP systems support BRCGS certification</Link>.</p>
        </Prose>
      </ContentSection>

      <ContentSection withBorder>
        <Prose>
          <h2>System requirements for FSSC 22000 certification</h2>
          <h3>1. Document and record control</h3>
          <p>Every procedure, work instruction, and record must be versioned, approved, and retrievable.</p>
          <h3>2. Hazard analysis and critical control points (HACCP)</h3>
          <p>Your HACCP plan must be fully documented, validated, and verified at defined intervals.</p>
          <h3>3. Traceability</h3>
          <p>ISO 22000 Clause 8.3 requires you to trace ingredients, packaging materials, and finished products one step forward and one step back as a minimum. FSSC 22000 additional requirements now also call for mass balance testing during traceability exercises.</p>
          <h3>4. Prerequisite programmes (PRPs)</h3>
          <p>ISO/TS 22002-1 sets out detailed requirements for building layout, utilities, waste management, equipment maintenance, pest control, personnel hygiene, cleaning, allergen management, and more.</p>
          <h3>5. Management review and continual improvement</h3>
          <p>Senior management must conduct formal reviews of the food safety management system at planned intervals.</p>
          <h3>6. Emergency preparedness and food defence</h3>
          <p>FSSC 22000 Version 6 strengthened requirements around food defence, food fraud vulnerability assessment, and product authenticity.</p>
        </Prose>
      </ContentSection>

      <ContentSection withBorder>
        <Prose>
          <h2>ERP features that support FSSC 22000</h2>
          <ul>
            <li><strong>Lot traceability and recall management:</strong> Track every raw material lot through receipt, storage, production, and dispatch. A 2023 survey by the Food Industry Association found that 42% of food manufacturers still struggle to complete mock recalls within their target time.</li>
            <li><strong>Quality management and non-conformance handling:</strong> Record inspections, in-process checks, finished product testing, and non-conformances, all linked to the relevant production order.</li>
            <li><strong>Supplier management:</strong> Hold supplier approval status, certificates of analysis, audit results, and performance metrics.</li>
            <li><strong>Allergen management:</strong> Track allergen status at ingredient, recipe, and finished product level.</li>
            <li><strong>Document control integration:</strong> Version-controlled documents linked to your processes.</li>
            <li><strong>Audit and inspection management:</strong> Schedule, record, and track internal audits and inspection results.</li>
          </ul>
          <p>If you are evaluating ERP systems with food safety in mind, our guide to <Link href="/industries/food-manufacturing/">ERP for food manufacturing companies</Link> covers the broader picture.</p>
        </Prose>
      </ContentSection>

      <ContentSection withBorder>
        <Prose>
          <h2>Frequently asked questions</h2>
          <h3>How long does FSSC 22000 certification take?</h3>
          <p>For a food manufacturer with a reasonable ISO 22000 or HACCP-based system already in place, expect 6 to 12 months of preparation before your Stage 1 audit. If you are starting from scratch, 12 to 18 months is more realistic.</p>
          <h3>Is FSSC 22000 more expensive than BRCGS?</h3>
          <p>Audit fees are broadly comparable, but FSSC 22000 has a three-year certification cycle versus BRCGS&apos;s annual recertification. Over three years, FSSC 22000 audit costs can be 15-20% lower.</p>
          <h3>Do I need a specific ERP system for FSSC 22000?</h3>
          <p>No. What matters is that your systems can produce the evidence the auditor needs. That said, an ERP with strong lot traceability, quality management, and supplier management features will make compliance significantly easier to maintain.</p>
        </Prose>
      </ContentSection>

      <ContentSection withBorder>
        <Reveal>
          <p className="text-[15px] text-muted leading-relaxed">
            <strong>Ready to assess whether your systems are fit for FSSC 22000?</strong>{" "}
            <Link href="/contact/" className="text-accent underline underline-offset-4 decoration-accent/30 hover:decoration-accent/60 transition-colors">Get in touch with COGO</Link>{" "}
            for an independent review.
          </p>
        </Reveal>
      </ContentSection>

      <PageCTA />
    </PageLayout>
  );
}
