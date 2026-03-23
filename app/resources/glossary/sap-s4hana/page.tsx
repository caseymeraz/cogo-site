import type { Metadata } from "next";
import Link from "next/link";
import PageLayout from "../../../components/PageLayout";
import PageHeader from "../../../components/PageHeader";
import ContentSection from "../../../components/ContentSection";
import Prose from "../../../components/Prose";
import PageCTA from "../../../components/PageCTA";

export const metadata: Metadata = {
  title: "What is SAP S/4HANA? | Glossary | COGO",
  description:
    "SAP S/4HANA is SAP's current-generation ERP suite, built on the SAP HANA in-memory database. It replaces SAP ECC with a new architecture and user experience.",
};

export default function SAPS4HANAPage() {
  return (
    <PageLayout>
      <PageHeader
        eyebrow="Glossary"
        title="SAP S/4HANA"
        subtitle="SAP's current-generation ERP suite, built on the SAP HANA in-memory database."
      />

      <ContentSection withBorder>
        <Prose>
          <p>
            SAP S/4HANA is SAP&apos;s current-generation ERP suite, built on the
            SAP HANA in-memory database. It replaces the previous SAP Business
            Suite (commonly known as SAP ECC) and represents a fundamental change
            in architecture, data model, and user experience.
          </p>

          <h2>What changed from ECC to S/4HANA</h2>

          <p>
            The most significant technical change is the move to an in-memory
            database. Traditional ERP systems stored data on disk and used
            aggregate tables to speed up reporting. S/4HANA eliminates many of
            those aggregate tables, storing data in memory for real-time
            processing. In practical terms, this means faster reporting,
            simplified data structures, and the ability to run analytics directly
            on transactional data.
          </p>
          <p>
            The user interface has also changed substantially. S/4HANA uses SAP
            Fiori - a browser-based, role-specific interface that replaces the
            older SAP GUI. Fiori is designed around common tasks and workflows,
            making the system more accessible to occasional users.
          </p>

          <h2>Deployment options</h2>

          <p>S/4HANA is available in three main deployment models:</p>

          <ul>
            <li>
              <strong>Public cloud:</strong> A multi-tenant SaaS offering with
              standardised processes and regular updates managed by SAP.
            </li>
            <li>
              <strong>Private cloud:</strong> A single-tenant hosted option that
              allows more configuration flexibility.
            </li>
            <li>
              <strong>On-premise:</strong> A traditional deployment where the
              customer manages the infrastructure.
            </li>
          </ul>

          <h2>Migration approaches</h2>

          <p>
            Moving from ECC to S/4HANA can follow a greenfield approach
            (starting fresh), a brownfield approach (converting your existing
            system), or a selective data transition (a hybrid of both). Each has
            trade-offs in terms of cost, risk, timeline, and the opportunity to
            simplify.
          </p>
          <p>
            For independent advice on planning your S/4HANA move, visit our{" "}
            <Link
              href="/services/sap-consulting/s4hana-migration/"
              className="text-accent underline underline-offset-4 decoration-accent/30 hover:decoration-accent/60 transition-colors"
            >
              S/4HANA migration
            </Link>{" "}
            page.
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
