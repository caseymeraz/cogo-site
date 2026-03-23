import type { Metadata } from "next";
import Link from "next/link";
import PageLayout from "../../components/PageLayout";
import PageHeader from "../../components/PageHeader";
import ContentSection, { SectionHeader } from "../../components/ContentSection";
import Prose from "../../components/Prose";
import Reveal from "../../components/Reveal";
import SpotlightCard from "../../components/SpotlightCard";
import PageCTA from "../../components/PageCTA";
import PageImage from "../../components/PageImage";
import SvgSection from "../../components/SvgSection";
import NetworkNodes from "../../components/svg/NetworkNodes";

export const metadata: Metadata = {
  title: "COGO + Westernacher | SAP Gold Partner Alliance",
  description:
    "COGO's partnership with Westernacher Consulting, an SAP Gold Partner, gives you independent client-side advice backed by world-class SAP delivery capability.",
};

const credentials = [
  {
    label: "SAP Gold Partner",
    description:
      "One of a select group of firms recognised by SAP for sustained excellence in delivery",
  },
  {
    label: "Founded in 1969",
    description: "Over 50 years of enterprise technology consulting",
  },
  {
    label: "1,200+ consultants",
    description: "Across 18+ countries worldwide",
  },
  {
    label: "Deep specialisation",
    description:
      "SAP S/4HANA, SAP BTP, SAP Signavio, SAP IBP, and SAP EWM",
  },
];

const capabilities = [
  {
    title: "SAP S/4HANA readiness assessments",
    description:
      "A structured review of your current landscape, business case, and migration options",
  },
  {
    title: "Executive briefings",
    description:
      "Half-day sessions for leadership teams exploring what S/4HANA means for their business",
  },
  {
    title: "Industry roundtables",
    description:
      "Peer discussions with other organisations at similar stages of their SAP programmes",
  },
  {
    title: "Technical deep dives",
    description:
      "Focused sessions on specific SAP modules and capabilities, including IBP, EWM, Signavio, and BTP",
  },
];

export default function PartnersPage() {
  return (
    <PageLayout>
      <PageHeader
        eyebrow="Our partners"
        title="COGO + Westernacher: independent advice, world-class delivery"
        subtitle="Most SAP projects force you into a difficult choice: hire a large implementation firm and hope their advice is unbiased, or hire an independent advisor and find your own implementer. Our partnership with Westernacher Consulting eliminates that trade-off."
      />

      <ContentSection withBorder>
        <Prose>
          <p>
            Here is how it works: COGO acts as your client-side advisor. We help
            you define requirements, evaluate options, build the business case,
            and manage the programme. Westernacher delivers the SAP
            implementation - the configuration, development, testing, and
            technical go-live.
          </p>
          <p>
            Two separate firms. Two separate commercial relationships. One
            shared goal: your project succeeds.
          </p>
          <p>
            You get independent advice from people who have no financial stake in
            the implementation scope. And you get SAP delivery from one of
            Europe&apos;s most experienced specialist firms. Neither side is
            compromised.
          </p>
        </Prose>
      </ContentSection>

      <PageImage
        src="/images/partnership-diagram.jpg"
        alt="COGO and Westernacher partnership model showing strategy and delivery roles"
      />

      <SvgSection caption="Global delivery network">
        <NetworkNodes />
      </SvgSection>

      <ContentSection withBorder>
        <SectionHeader
          eyebrow="The model"
          title="Why this model is different"
          subtitle="In a traditional engagement, your advisory firm and your implementation firm are the same company - or the advisory firm earns a referral fee for recommending the implementer. Either way, the advice is coloured by commercial interest."
        />
        <Reveal>
          <p className="text-[15px] text-muted leading-relaxed mb-10">
            The COGO-Westernacher model is structurally different:
          </p>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-6">
          <Reveal delay={0}>
            <SpotlightCard spotlightColor="rgba(0, 194, 255, 0.18)">
              <div className="p-6">
                <p className="text-[11px] uppercase tracking-[0.15em] text-accent mb-3 font-medium">
                  COGO&apos;s role
                </p>
                <h3 className="text-[17px] font-semibold text-foreground mb-3">
                  Protect your interests
                </h3>
                <p className="text-[14px] text-muted leading-relaxed">
                  We define what success looks like, challenge assumptions, and
                  hold the project to account. We earn nothing from
                  Westernacher&apos;s implementation fees.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
          <Reveal delay={0.1}>
            <SpotlightCard>
              <div className="p-6">
                <p className="text-[11px] uppercase tracking-[0.15em] text-muted/70 mb-3 font-medium">
                  Westernacher&apos;s role
                </p>
                <h3 className="text-[17px] font-semibold text-foreground mb-3">
                  Deliver the implementation
                </h3>
                <p className="text-[14px] text-muted leading-relaxed">
                  They bring deep SAP technical expertise and a proven
                  methodology. They know that an independent advisor is watching
                  - and that keeps everyone sharp.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
        </div>
        <Reveal delay={0.2}>
          <p className="text-[15px] text-muted leading-relaxed mt-10">
            This is not theory. It is how the best-run programmes in the world
            operate: independent oversight alongside specialist delivery. Your
            finance team would never let the same firm audit and advise. Your
            technology investment deserves the same rigour.
          </p>
        </Reveal>
      </ContentSection>

      <ContentSection withBorder>
        <SectionHeader
          eyebrow="Credentials"
          title="Westernacher Consulting: the credentials"
          subtitle="Westernacher is not a startup or a boutique. They are one of the most established SAP consulting firms in the world."
        />
        <div className="grid md:grid-cols-2 gap-6">
          {credentials.map((item, i) => (
            <Reveal key={item.label} delay={i * 0.08}>
              <SpotlightCard>
                <div className="p-6">
                  <h3 className="text-[17px] font-semibold text-foreground mb-2">
                    {item.label}
                  </h3>
                  <p className="text-[14px] text-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.4}>
          <div className="mt-10">
            <Prose>
              <p>
                Westernacher has a proven track record in manufacturing, life
                sciences, consumer products, and public sector - the same
                industries COGO serves.
              </p>
              <p>
                When your project needs an SAP implementation partner,
                Westernacher brings the scale, depth, and global reach that your
                programme demands. And because COGO manages the client
                relationship independently, you never have to wonder whose
                interests are being served.
              </p>
              <p>
                For organisations{" "}
                <Link href="/services/sap-consulting/s4hana-migration/">
                  planning your move to S/4HANA
                </Link>
                , the COGO-Westernacher model offers a clear advantage: you get a
                firm that has migrated hundreds of SAP environments, guided by an
                advisor whose only job is to make sure the migration works for
                your business.
              </p>
            </Prose>
          </div>
        </Reveal>
      </ContentSection>

      <ContentSection withBorder>
        <SectionHeader
          eyebrow="Events"
          title="Joint events and capabilities"
          subtitle="COGO and Westernacher regularly collaborate on events, workshops, and thought leadership for organisations considering SAP transformation."
        />
        <div className="grid md:grid-cols-2 gap-6">
          {capabilities.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <SpotlightCard>
                <div className="p-6">
                  <h3 className="text-[17px] font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[14px] text-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.4}>
          <div className="mt-10">
            <Prose>
              <p>
                If you are exploring SAP for your organisation, our{" "}
                <Link href="/services/sap-consulting/">
                  SAP consulting services for Ireland and the UK
                </Link>{" "}
                are a good starting point. And if you want to understand how
                independent advice and specialist delivery work together in
                practice, get in touch - we will walk you through it.
              </p>
            </Prose>
          </div>
        </Reveal>
      </ContentSection>

      <PageCTA
        title="Talk to us about your SAP project"
        subtitle="Whether you are evaluating SAP for the first time or managing an existing programme, we can show you how independent advice and specialist delivery work together."
        buttonText="Book a call"
      />
    </PageLayout>
  );
}
