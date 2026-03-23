import type { Metadata } from "next";
import Link from "next/link";
import PageLayout from "../../../components/PageLayout";
import PageHeader from "../../../components/PageHeader";
import ContentSection from "../../../components/ContentSection";
import Prose from "../../../components/Prose";
import Reveal from "../../../components/Reveal";
import PageCTA from "../../../components/PageCTA";

export const metadata: Metadata = {
  title: "Computer System Validation in Pharma: ERP, GAMP 5, and Compliance | COGO",
  description:
    "Computer system validation is non-negotiable in pharma. Learn how CSV applies to ERP systems, what regulators expect, and how GAMP 5 structures the work.",
};

export default function ComputerSystemValidationPharmaPage() {
  return (
    <PageLayout>
      <PageHeader
        eyebrow="Blog"
        title="Computer system validation: what pharma manufacturers need to know before touching their ERP"
        subtitle="Laurence Phelan - 23 March 2026"
      />

      <ContentSection withBorder>
        <Prose>
          <p>If you work in pharmaceutical manufacturing in Ireland, computer system validation is not optional. It is a regulatory requirement that directly affects your ability to manufacture, release product, and maintain your authorisation. The HPRA, the EMA, and the FDA all expect that any computerised system affecting GxP processes has been validated to a level proportionate to its risk.</p>
          <p>And yet, computer system validation remains one of the most misunderstood areas when pharma companies select, implement, or upgrade ERP systems. Too many businesses treat it as a documentation exercise to be tackled at the end of an IT project. That approach is expensive, slow, and likely to produce gaps that a regulator will find.</p>
          <p>This post covers what CSV actually is, what the regulators require, how it applies specifically to ERP systems, and how to use the GAMP 5 framework to structure the work properly.</p>
        </Prose>
      </ContentSection>

      <ContentSection withBorder>
        <Prose>
          <h2>What is computer system validation?</h2>
          <p>Computer system validation (CSV) is the documented process of proving that a computerised system does what it is supposed to do, consistently, accurately, and in compliance with regulatory requirements. It covers the full lifecycle of the system, from requirements definition through design, build, testing, go-live, and ongoing operation.</p>
          <p>The key word is &quot;documented.&quot; It is not enough that your system works correctly. You must have evidence, written, approved, traceable evidence, that it was designed to meet specific requirements, that those requirements were tested, and that the system continues to operate within its validated state.</p>
          <p>CSV applies to any computerised system that supports GxP activities. In a pharma manufacturing environment, that includes your ERP (if it handles batch records, inventory, quality, or purchasing), your LIMS, your MES, your document management system, and increasingly your cloud-based platforms.</p>
        </Prose>
      </ContentSection>

      <ContentSection withBorder>
        <Prose>
          <h2>The regulatory framework</h2>
          <p>Three sets of regulatory requirements are most relevant for pharma companies operating in Ireland and the UK:</p>
          <h3>EU Annex 11: Computerised systems</h3>
          <p>Annex 11 to the EU GMP Guide is the primary regulatory reference for computerised systems in pharmaceutical manufacturing across the EU, including Ireland. It covers risk management applied to the computerised system lifecycle, validation requirements, data integrity principles (ALCOA+), requirements for electronic records and signatures, change control, periodic review, and system retirement.</p>
          <h3>21 CFR Part 11: Electronic records and signatures (US FDA)</h3>
          <p>If you export to the United States, and most Irish pharma sites do given that Ireland accounts for over 50% of all FDA-approved new medicines manufactured outside the US (IDA Ireland, 2023), you need to comply with 21 CFR Part 11. This regulation governs electronic records and electronic signatures and requires system validation, audit trails, system access controls, and personnel training.</p>
          <h3>MHRA Data Integrity Guidance</h3>
          <p>Since Brexit, the MHRA has issued its own data integrity guidance for UK-regulated sites. If you supply the UK market, the MHRA expects compliance with data integrity principles that align closely with Annex 11.</p>
        </Prose>
      </ContentSection>

      <ContentSection withBorder>
        <Prose>
          <h2>How CSV applies to ERP systems in pharma</h2>
          <p>Your ERP system is not just a financial tool in a pharma environment. Depending on your configuration, it may handle:</p>
          <ul>
            <li><strong>Batch record management:</strong> Creating, tracking, and closing production batch records</li>
            <li><strong>Material management:</strong> Receipt, quarantine, sampling, release, and rejection of raw materials and intermediates</li>
            <li><strong>Inventory control:</strong> Managing stock status and enforcing status-based movement rules</li>
            <li><strong>Quality management:</strong> Handling deviations, CAPAs, change controls, and quality events</li>
            <li><strong>Purchasing:</strong> Ensuring only approved suppliers and approved materials are purchased</li>
            <li><strong>Production planning and scheduling:</strong> Generating production orders based on demand and capacity</li>
          </ul>
          <p>Each of these areas involves GxP data and GxP decisions. That means your ERP is in scope for CSV.</p>
        </Prose>
      </ContentSection>

      <ContentSection withBorder>
        <Prose>
          <h2>The GAMP 5 framework</h2>
          <p>GAMP 5 (Good Automated Manufacturing Practice, 2nd Edition, published by ISPE in 2022) is the globally accepted framework for managing computerised systems in regulated industries. It classifies software into categories:</p>
          <ul>
            <li><strong>Category 1: Infrastructure software.</strong> Operating systems, database engines, network infrastructure.</li>
            <li><strong>Category 3: Non-configured products.</strong> Commercial off-the-shelf software used as-is.</li>
            <li><strong>Category 4: Configured products.</strong> This is where most ERP systems fall. The software is a commercial product, but you configure it to meet your specific business processes.</li>
            <li><strong>Category 5: Custom applications.</strong> Bespoke software or custom code. Requires the most rigorous validation.</li>
          </ul>
          <h3>The V-model in practice</h3>
          <p>GAMP 5 uses a V-model approach that maps each stage of specification to a corresponding stage of testing:</p>
          <ol>
            <li>You document what the system must do from a user and regulatory perspective (URS)</li>
            <li>You specify how the ERP will be configured to deliver those requirements (FS and DS)</li>
            <li>You verify that the system is installed correctly in your environment (IQ)</li>
            <li>You test that each function works as configured (OQ)</li>
            <li>You test end-to-end business processes in conditions that mirror live operation (PQ)</li>
          </ol>
          <p>Each stage produces documented evidence. Each test is traceable back to a specific requirement. This traceability matrix is the backbone of your validation package.</p>
        </Prose>
      </ContentSection>

      <ContentSection withBorder>
        <Prose>
          <h2>Common mistakes in pharma ERP validation</h2>
          <p><strong>Starting validation too late.</strong> CSV is not something you do after the ERP is configured. Your URS should be written before you select a vendor. Retrofitting validation onto a completed build is always more expensive and produces weaker evidence.</p>
          <p><strong>Treating it as an IT project.</strong> CSV is a quality activity, not an IT activity. Your quality assurance team should own the validation plan and approve the deliverables.</p>
          <p><strong>Over-validating.</strong> GAMP 5 explicitly calls for a risk-based approach. Not every function in your ERP needs the same level of testing. A financial posting to the general ledger is not GxP-critical. A batch status change from &quot;quarantine&quot; to &quot;released&quot; is.</p>
          <p><strong>Ignoring ongoing validation.</strong> Going live is not the end. Annex 11 and GAMP 5 both require periodic review of validated systems, change control for any modifications, and revalidation when significant changes are made.</p>
        </Prose>
      </ContentSection>

      <ContentSection withBorder>
        <Prose>
          <h2>ERP selection and CSV readiness</h2>
          <p>If you are selecting a new ERP, CSV readiness should be part of your evaluation criteria. When looking at <Link href="/industries/pharmaceutical/">ERP systems for pharmaceutical manufacturing</Link>, ask your shortlisted vendors:</p>
          <ul>
            <li>Can you provide a supplier assessment questionnaire and audit your development processes?</li>
            <li>Do you have a software development lifecycle that aligns with GAMP 5?</li>
            <li>Can you provide a functional risk assessment for your system?</li>
            <li>Do you have reference customers in pharma who have validated the system?</li>
            <li>How do you manage patches, updates, and upgrades in a validated environment?</li>
            <li>What audit trail capabilities does the system provide natively?</li>
          </ul>
          <p>If you need support evaluating ERP systems with CSV in mind, <Link href="/services/erp-consulting/">our ERP consulting and advisory practice</Link> works with pharma manufacturers across Ireland and the UK to run vendor-neutral selection processes that build in regulatory compliance from day one.</p>
        </Prose>
      </ContentSection>

      <ContentSection withBorder>
        <Prose>
          <h2>Frequently asked questions</h2>
          <h3>Is computer system validation required for cloud-based ERP?</h3>
          <p>Yes. The deployment model does not change the regulatory requirement. Whether your ERP is on-premise, hosted, or SaaS, if it supports GxP processes, it must be validated. The EMA&apos;s 2020 Q&amp;A on Annex 11 explicitly addresses cloud and SaaS systems.</p>
          <h3>How long does ERP validation take in pharma?</h3>
          <p>For a full ERP implementation in a pharma manufacturing site, expect the CSV workstream to run in parallel with the implementation, typically 9 to 18 months depending on scope and complexity. The validation effort typically adds 20% to 30% to the overall project cost and timeline.</p>
          <h3>Can we use agile methods for CSV?</h3>
          <p>GAMP 5 Second Edition (2022) explicitly supports agile and iterative approaches, provided that the fundamental principles are maintained: documented requirements, risk-based testing, traceability, and formal review and approval.</p>
          <h3>What happens if a regulator finds our ERP is not validated?</h3>
          <p>The consequences range from observations to warning letters, import alerts, or in severe cases, suspension of your manufacturing authorisation. According to FDA inspection data, computerised system and data integrity findings have been among the top ten most cited GMP deficiencies globally since 2018.</p>
        </Prose>
      </ContentSection>

      <ContentSection withBorder>
        <Reveal>
          <p className="text-[15px] text-white/55 leading-relaxed">
            <strong>Planning an ERP project in a regulated pharma environment?</strong>{" "}
            <Link href="/contact/" className="text-accent underline underline-offset-4 decoration-accent/30 hover:decoration-accent/60 transition-colors">Get in touch</Link>{" "}
            for independent advice on building CSV into your programme from day one.
          </p>
        </Reveal>
      </ContentSection>

      <PageCTA />
    </PageLayout>
  );
}
