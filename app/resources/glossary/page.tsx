import type { Metadata } from "next";
import Link from "next/link";
import PageLayout from "../../components/PageLayout";
import PageHeader from "../../components/PageHeader";
import ContentSection from "../../components/ContentSection";
import Reveal from "../../components/Reveal";
import SpotlightCard from "../../components/SpotlightCard";
import PageCTA from "../../components/PageCTA";

export const metadata: Metadata = {
  title: "Glossary | ERP & Business Transformation Terms | COGO",
  description:
    "Clear, practical definitions of key terms in ERP, SAP, business transformation, and operational excellence. No jargon, no fluff.",
};

const glossaryTerms = [
  {
    letter: "B",
    terms: [
      {
        title: "BPMN",
        href: "/resources/glossary/bpmn/",
        description:
          "Business Process Model and Notation - a standardised graphical notation for documenting business processes.",
      },
      {
        title: "Business process transformation",
        href: "/resources/glossary/business-process-transformation/",
        description:
          "The fundamental redesign of how work gets done within an organisation to achieve a step change in performance.",
      },
    ],
  },
  {
    letter: "C",
    terms: [
      {
        title: "Change management",
        href: "/resources/glossary/change-management/",
        description:
          "The structured approach to preparing, supporting, and helping individuals and teams adopt new ways of working.",
      },
    ],
  },
  {
    letter: "D",
    terms: [
      {
        title: "Digital transformation",
        href: "/resources/glossary/digital-transformation/",
        description:
          "The use of digital technology to fundamentally change how an organisation operates, delivers value, and competes.",
      },
    ],
  },
  {
    letter: "E",
    terms: [
      {
        title: "Enterprise resource planning",
        href: "/resources/glossary/enterprise-resource-planning/",
        description:
          "Both a category of business software and a management approach that connects all key functions through integrated processes and shared data.",
      },
      {
        title: "ERP system",
        href: "/resources/glossary/erp-system/",
        description:
          "A software platform that integrates your core business functions - finance, procurement, manufacturing, supply chain, sales, and HR - into a single, unified system.",
      },
    ],
  },
  {
    letter: "O",
    terms: [
      {
        title: "Operational excellence",
        href: "/resources/glossary/operational-excellence/",
        description:
          "A management philosophy focused on continuously improving the way an organisation operates through eliminating waste and reducing variation.",
      },
    ],
  },
  {
    letter: "S",
    terms: [
      {
        title: "SAP S/4HANA",
        href: "/resources/glossary/sap-s4hana/",
        description:
          "SAP's current-generation ERP suite, built on the SAP HANA in-memory database, replacing the previous SAP ECC system.",
      },
    ],
  },
];

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const activeLetters = glossaryTerms.map((g) => g.letter);

export default function GlossaryPage() {
  return (
    <PageLayout>
      <PageHeader
        eyebrow="Glossary"
        title="ERP and business transformation glossary"
        subtitle="Clear, practical definitions of the terms you will encounter during ERP selection, implementation, and business transformation programmes."
      />

      <ContentSection withBorder>
        <Reveal>
          <nav className="flex flex-wrap gap-2 mb-14">
            {letters.map((letter) => {
              const isActive = activeLetters.includes(letter);
              return isActive ? (
                <a
                  key={letter}
                  href={`#${letter}`}
                  className="w-9 h-9 flex items-center justify-center rounded-lg text-[13px] font-medium text-accent bg-accent/10 hover:bg-accent/20 transition-colors"
                >
                  {letter}
                </a>
              ) : (
                <span
                  key={letter}
                  className="w-9 h-9 flex items-center justify-center rounded-lg text-[13px] font-medium text-muted/70"
                >
                  {letter}
                </span>
              );
            })}
          </nav>
        </Reveal>

        {glossaryTerms.map((group) => (
          <div key={group.letter} id={group.letter} className="mb-12">
            <Reveal>
              <h2 className="text-[24px] font-semibold text-foreground mb-6 tracking-[-0.02em]">
                {group.letter}
              </h2>
            </Reveal>
            <div className="grid gap-4">
              {group.terms.map((term) => (
                <Reveal key={term.href}>
                  <Link href={term.href}>
                    <SpotlightCard className="p-6 hover:border-white/10 transition-colors">
                      <h3 className="text-[17px] font-medium text-foreground mb-2">
                        {term.title}
                      </h3>
                      <p className="text-[14px] text-muted leading-relaxed">
                        {term.description}
                      </p>
                    </SpotlightCard>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        ))}
      </ContentSection>

      <PageCTA />
    </PageLayout>
  );
}
