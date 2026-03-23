import type { Metadata } from "next";
import Link from "next/link";
import PageLayout from "../../../components/PageLayout";
import PageHeader from "../../../components/PageHeader";
import ContentSection from "../../../components/ContentSection";
import Prose from "../../../components/Prose";
import PageCTA from "../../../components/PageCTA";

export const metadata: Metadata = {
  title: "What is an ERP system? | Glossary | COGO",
  description:
    "An ERP system integrates your core business functions - finance, procurement, manufacturing, supply chain, sales, and HR - into a single, unified platform.",
};

export default function ERPSystemPage() {
  return (
    <PageLayout>
      <PageHeader
        eyebrow="Glossary"
        title="ERP system"
        subtitle="A software platform that integrates your core business functions into a single, unified system."
      />

      <ContentSection withBorder>
        <Prose>
          <p>
            An ERP system (enterprise resource planning system) is a software
            platform that integrates your core business functions - finance,
            procurement, manufacturing, supply chain, sales, and human resources
            - into a single, unified system. Rather than running each department
            on its own spreadsheet or standalone application, an ERP gives your
            entire organisation a shared database and a consistent set of
            processes.
          </p>

          <h2>Why ERP systems matter</h2>

          <p>
            Before ERP, most companies ran separate systems for each function.
            Finance had one system, the warehouse had another, and production
            planning lived in a spreadsheet on someone&apos;s desktop. The result
            was duplicated data entry, constant reconciliation, and decisions
            based on information that was days or weeks out of date.
          </p>
          <p>
            A properly implemented ERP system eliminates that fragmentation.
            When a sales order is entered, it automatically triggers demand
            planning, production scheduling, procurement, and financial postings
            - all in real time. That visibility allows you to respond faster,
            carry less inventory, and make better decisions.
          </p>

          <h2>Key things to know</h2>

          <ul>
            <li>
              <strong>Cloud vs on-premise:</strong> Most modern ERP systems are
              cloud-based (SaaS), meaning the vendor hosts the software and
              handles upgrades. On-premise systems still exist but are becoming
              less common.
            </li>
            <li>
              <strong>Major vendors:</strong> SAP, Oracle, Microsoft Dynamics
              365, Infor, and Sage are among the largest ERP providers. The right
              choice depends on your industry, size, and requirements.
            </li>
            <li>
              <strong>Implementation is the hard part.</strong> Buying the
              software is straightforward. Configuring it to match your business
              processes, migrating your data, training your people, and managing
              the change - that is where projects succeed or fail.
            </li>
          </ul>

          <p>
            If you are evaluating ERP systems or preparing for a new
            implementation, our{" "}
            <Link
              href="/services/erp-consulting/"
              className="text-accent underline underline-offset-4 decoration-accent/30 hover:decoration-accent/60 transition-colors"
            >
              ERP consulting
            </Link>{" "}
            team provides independent, client-side advice to help you make the
            right choices.
          </p>
        </Prose>
      </ContentSection>

      <ContentSection withBorder>
        <div className="flex items-center gap-4">
          <Link
            href="/resources/glossary/"
            className="text-[14px] text-accent hover:text-accent/80 transition-colors flex items-center gap-2"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>
            Back to glossary
          </Link>
        </div>
      </ContentSection>

      <PageCTA />
    </PageLayout>
  );
}
