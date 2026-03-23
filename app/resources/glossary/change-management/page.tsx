import type { Metadata } from "next";
import Link from "next/link";
import PageLayout from "../../../components/PageLayout";
import PageHeader from "../../../components/PageHeader";
import ContentSection from "../../../components/ContentSection";
import Prose from "../../../components/Prose";
import PageCTA from "../../../components/PageCTA";

export const metadata: Metadata = {
  title: "What is change management? | Glossary | COGO",
  description:
    "Change management is the structured approach to preparing, supporting, and helping individuals and teams adopt new ways of working during transformation and ERP projects.",
};

export default function ChangeManagementPage() {
  return (
    <PageLayout>
      <PageHeader
        eyebrow="Glossary"
        title="Change management"
        subtitle="The structured approach to preparing, supporting, and helping individuals and teams adopt new ways of working."
      />

      <ContentSection withBorder>
        <Prose>
          <p>
            Change management is the structured approach to preparing,
            supporting, and helping individuals and teams adopt new ways of
            working. In the context of business transformation and ERP
            implementation, change management is the discipline that bridges the
            gap between building a new system and actually getting people to use
            it effectively.
          </p>

          <h2>Why change management matters</h2>

          <p>
            Most ERP and transformation projects invest heavily in technology and
            process design but treat adoption as an afterthought. The result is
            predictable: a well-configured system that people resist, work
            around, or simply do not use properly. Studies consistently show that
            the single biggest factor in project success or failure is how well
            the organisation manages the human side of the change.
          </p>
          <p>
            Change management is not about sending a few emails and running a
            training session the week before go-live. It is a sustained effort
            that starts at the beginning of the project and continues well
            beyond launch.
          </p>

          <h2>Key elements</h2>

          <p>Effective change management typically includes:</p>

          <ul>
            <li>
              <strong>Leadership alignment:</strong> Making sure the senior team
              is visibly committed and consistent in their messaging.
            </li>
            <li>
              <strong>Impact assessment:</strong> Understanding specifically how
              each role and team will be affected by the change.
            </li>
            <li>
              <strong>Communication:</strong> Honest, regular updates about what
              is changing, why, and what it means for individuals.
            </li>
            <li>
              <strong>Training:</strong> Role-based, practical training that is
              delivered at the right time - close enough to go-live that people
              remember it, early enough that they feel prepared.
            </li>
            <li>
              <strong>Support structures:</strong> Super-users, help desks, and
              feedback channels that help people through the transition.
            </li>
          </ul>

          <p>
            If your organisation is preparing for a major change, our{" "}
            <Link
              href="/services/implementation-support/"
              className="text-accent underline underline-offset-4 decoration-accent/30 hover:decoration-accent/60 transition-colors"
            >
              implementation support
            </Link>{" "}
            team includes change management expertise to help your people make
            the transition successfully.
          </p>
        </Prose>
      </ContentSection>

      <ContentSection withBorder>
        <div className="flex items-center gap-4">
          <Link
            href="/resources/glossary/"
            className="text-[14px] text-accent hover:text-accent/80 transition-colors flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            Back to glossary
          </Link>
        </div>
      </ContentSection>

      <PageCTA />
    </PageLayout>
  );
}
