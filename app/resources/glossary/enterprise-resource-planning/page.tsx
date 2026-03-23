import type { Metadata } from "next";
import Link from "next/link";
import PageLayout from "../../../components/PageLayout";
import PageHeader from "../../../components/PageHeader";
import ContentSection from "../../../components/ContentSection";
import Prose from "../../../components/Prose";
import PageCTA from "../../../components/PageCTA";

export const metadata: Metadata = {
  title: "What is enterprise resource planning? | Glossary | COGO",
  description:
    "Enterprise resource planning (ERP) is both a category of business software and a management approach that connects all key functions through integrated processes and shared data.",
};

export default function EnterpriseResourcePlanningPage() {
  return (
    <PageLayout>
      <PageHeader
        eyebrow="Glossary"
        title="Enterprise resource planning"
        subtitle="Both a category of business software and a management approach for connecting all key functions through integrated processes and shared data."
      />

      <ContentSection withBorder>
        <Prose>
          <p>
            Enterprise resource planning (ERP) is both a category of business
            software and a management approach. At its core, ERP is about
            connecting all the key functions of an organisation - finance,
            operations, supply chain, manufacturing, HR, and customer management
            - through integrated processes and shared data.
          </p>

          <h2>A brief history</h2>

          <p>
            The term &quot;enterprise resource planning&quot; was coined in the
            early 1990s by Gartner, but the concept evolved from earlier
            manufacturing systems. MRP (material requirements planning) emerged
            in the 1960s to help factories plan raw material purchases. MRP II
            expanded that to cover the full production process. ERP took the next
            step by integrating those manufacturing capabilities with finance,
            HR, and other business functions.
          </p>
          <p>
            Today, ERP has moved well beyond manufacturing. Service companies,
            retailers, distributors, healthcare organisations, and public sector
            bodies all use ERP systems to manage their operations.
          </p>

          <h2>What enterprise resource planning involves</h2>

          <p>
            Implementing ERP is not just a technology project. It requires you to
            examine and often redesign your business processes, clean up your
            master data, train your people, and manage a significant
            organisational change. The technology is the enabler, but the real
            work is in the process design and adoption.
          </p>
          <p>
            The most common mistake organisations make is focusing on software
            features while neglecting the process and people dimensions. A
            well-chosen ERP platform that is poorly implemented will deliver
            worse results than a less impressive platform that is implemented
            well.
          </p>
          <p>
            For independent guidance on your ERP programme, talk to our{" "}
            <Link
              href="/services/erp-consulting/"
              className="text-accent underline underline-offset-4 decoration-accent/30 hover:decoration-accent/60 transition-colors"
            >
              ERP consulting
            </Link>{" "}
            team.
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
