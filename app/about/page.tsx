import type { Metadata } from "next";
import Link from "next/link";
import PageLayout from "../components/PageLayout";
import PageHeader from "../components/PageHeader";
import ContentSection, { SectionHeader } from "../components/ContentSection";
import Prose from "../components/Prose";
import Reveal from "../components/Reveal";
import SpotlightCard from "../components/SpotlightCard";
import PageCTA from "../components/PageCTA";
import PageImage from "../components/PageImage";

export const metadata: Metadata = {
  title: "About COGO Consulting | Our Story",
  description:
    "COGO was founded by practitioners who had seen too many businesses burned by conflicted advice. Learn why independent, client-side consulting exists.",
};

export default function AboutPage() {
  return (
    <PageLayout>
      <PageHeader
        eyebrow="About COGO"
        title="Why COGO exists"
        subtitle="We started COGO because we had seen too many businesses burned by conflicted advice."
      />

      <ContentSection withBorder>
        <Prose>
          <p>
            Laurence and Lance spent years inside major organisations - Kerry
            Group, Glanbia - leading technology programmes. They watched vendors
            oversell, system integrators under-deliver, and consultancies send
            junior staff to do senior work. And they kept asking the same
            question: who in this room is actually working for the client?
          </p>
          <p>Too often, the answer was nobody.</p>
          <p>
            COGO exists to fix that. When your business faces a major technology
            decision, you need someone on your side who has no product to sell
            and no implementation revenue to protect. That is us.
          </p>
        </Prose>
      </ContentSection>

      <ContentSection withBorder>
        <SectionHeader
          eyebrow="Our principles"
          title="What we believe"
        />
        <div className="grid md:grid-cols-3 gap-6">
          <Reveal delay={0}>
            <SpotlightCard>
              <div className="p-6">
                <h3 className="text-[17px] font-semibold text-foreground mb-3">
                  Independence is non-negotiable
                </h3>
                <p className="text-[14px] text-muted leading-relaxed">
                  The moment a consultancy earns revenue from selling software,
                  their advice is compromised. Full stop. We will never resell
                  technology or accept vendor commissions.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
          <Reveal delay={0.1}>
            <SpotlightCard>
              <div className="p-6">
                <h3 className="text-[17px] font-semibold text-foreground mb-3">
                  Experience matters more than methodology
                </h3>
                <p className="text-[14px] text-muted leading-relaxed">
                  Frameworks are useful. But there is no substitute for having
                  personally led an ERP programme, dealt with a failing
                  integrator, or managed a go-live in a 24/7 manufacturing
                  environment. Our team has done all of it.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
          <Reveal delay={0.2}>
            <SpotlightCard>
              <div className="p-6">
                <h3 className="text-[17px] font-semibold text-foreground mb-3">
                  Outcomes over deliverables
                </h3>
                <p className="text-[14px] text-muted leading-relaxed">
                  You do not need a 200-page report. You need your project to
                  come in on time, on budget, and actually work. Everything we do
                  is measured against that standard.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
        </div>
      </ContentSection>

      <ContentSection withBorder>
        <SectionHeader
          eyebrow="Our story"
          title="Our history"
        />
        <Prose>
          <p>
            COGO was founded in 2023 by Laurence Phelan and Lance Harcourt. Both
            came from industry, not from consulting. Laurence led business
            deployments at Kerry Group across multiple regions. Lance managed SAP
            S/4HANA projects at Glanbia.
          </p>
          <p>
            They built COGO around a simple principle: give businesses access to
            the kind of senior, independent advice that most consultancies claim
            to offer but don&apos;t.
          </p>
          <p>
            Since then, the team has grown to include partners in the US and
            South Africa, a dedicated CRM practice, and a strategic alliance
            with Westernacher - one of Europe&apos;s most respected SAP
            implementation firms.
          </p>
        </Prose>

        <PageImage
          src="/images/hero-team-tablet.jpg"
          alt="Business team collaborating on technology strategy"
        />
      </ContentSection>

      <ContentSection withBorder>
        <SectionHeader title="Learn more" centered />
        <div className="grid md:grid-cols-3 gap-6">
          <Reveal delay={0}>
            <Link href="/about/team/" className="block group">
              <SpotlightCard>
                <div className="p-6">
                  <h3 className="text-[17px] font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                    Meet the team
                  </h3>
                  <p className="text-[14px] text-muted leading-relaxed">
                    Senior practitioners with direct experience leading ERP
                    programmes from the client side.
                  </p>
                </div>
              </SpotlightCard>
            </Link>
          </Reveal>
          <Reveal delay={0.1}>
            <Link href="/about/why-cogo/" className="block group">
              <SpotlightCard>
                <div className="p-6">
                  <h3 className="text-[17px] font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                    Why choose COGO
                  </h3>
                  <p className="text-[14px] text-muted leading-relaxed">
                    What client-side consulting means and why it matters for your
                    project.
                  </p>
                </div>
              </SpotlightCard>
            </Link>
          </Reveal>
          <Reveal delay={0.2}>
            <Link href="/about/partners/" className="block group">
              <SpotlightCard>
                <div className="p-6">
                  <h3 className="text-[17px] font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                    Our partners
                  </h3>
                  <p className="text-[14px] text-muted leading-relaxed">
                    How our alliance with Westernacher delivers independent
                    advice backed by world-class SAP capability.
                  </p>
                </div>
              </SpotlightCard>
            </Link>
          </Reveal>
        </div>
      </ContentSection>

      <PageCTA
        title="Ready to talk?"
        subtitle="Book a 30-minute call with one of our partners. No pitch, no pressure. Tell us what you are facing and we will tell you honestly if we can help."
      />
    </PageLayout>
  );
}
