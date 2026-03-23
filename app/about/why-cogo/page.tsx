import type { Metadata } from "next";
import Link from "next/link";
import PageLayout from "../../components/PageLayout";
import PageHeader from "../../components/PageHeader";
import ContentSection, { SectionHeader } from "../../components/ContentSection";
import Prose from "../../components/Prose";
import Reveal from "../../components/Reveal";
import SpotlightCard from "../../components/SpotlightCard";
import PageCTA from "../../components/PageCTA";

export const metadata: Metadata = {
  title: "Why COGO | Client-Side Consulting Explained",
  description:
    "What is client-side consulting, and why does it matter for your ERP project? Learn how independent advice protects your investment and keeps vendors honest.",
};

export default function WhyCogoPage() {
  return (
    <PageLayout>
      <PageHeader
        eyebrow="Why COGO"
        title="The problem with how consulting usually works"
        subtitle="Here is how most large technology projects begin: you hire a consulting firm to help you select and implement a new system. That firm earns a percentage of the implementation fee, or has a preferred vendor relationship, or both. Their advice is shaped - consciously or not - by what generates revenue for them."
      />

      <ContentSection withBorder>
        <div className="grid md:grid-cols-3 gap-6">
          <Reveal delay={0}>
            <SpotlightCard>
              <div className="p-6">
                <h3 className="text-[17px] font-semibold text-white/90 mb-3">
                  Vendor bias is baked into the model
                </h3>
                <p className="text-[14px] text-white/50 leading-relaxed">
                  When a consultancy resells software or earns referral
                  commissions, they have a financial incentive to recommend the
                  product that pays them the most. Your requirements come second.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
          <Reveal delay={0.1}>
            <SpotlightCard>
              <div className="p-6">
                <h3 className="text-[17px] font-semibold text-white/90 mb-3">
                  SI conflicts are just as real
                </h3>
                <p className="text-[14px] text-white/50 leading-relaxed">
                  If the same firm that advises you on what to buy also earns
                  revenue from implementing it, they benefit from complexity. A
                  longer project means more billable hours. An expanded scope
                  means a bigger contract.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
          <Reveal delay={0.2}>
            <SpotlightCard>
              <div className="p-6">
                <h3 className="text-[17px] font-semibold text-white/90 mb-3">
                  Big Four firms sell seniority, deliver juniors
                </h3>
                <p className="text-[14px] text-white/50 leading-relaxed">
                  A partner presents at the pitch. A senior manager runs the
                  first workshop. By month two, your project is staffed with
                  analysts who have never led a programme. You are paying top
                  rates for on-the-job training.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
        </div>
        <Reveal delay={0.3}>
          <p className="text-[15px] text-white/45 leading-relaxed mt-10">
            None of this is news to anyone who has been through it. But somehow,
            most businesses keep walking into the same trap.
          </p>
        </Reveal>
      </ContentSection>

      <ContentSection withBorder>
        <SectionHeader
          eyebrow="Client-side consulting"
          title="What client-side consulting actually means"
          subtitle="Client-side consulting is exactly what it sounds like: your consultant works exclusively for you."
        />
        <Prose>
          <p>
            Think of it like hiring a surveyor before buying a house. The estate
            agent works for the seller. The surveyor works for you. You need
            someone in the room whose only job is to protect your interests.
          </p>
          <p>In a technology project, the picture looks like this:</p>
        </Prose>
        <div className="grid md:grid-cols-2 gap-6 mt-10">
          <Reveal delay={0}>
            <SpotlightCard>
              <div className="p-6">
                <p className="text-[11px] uppercase tracking-[0.15em] text-white/30 mb-3 font-medium">
                  On one side
                </p>
                <p className="text-[15px] text-white/55 leading-relaxed">
                  The software vendor and the system integrator. They want to
                  sell you their product and bill as many hours as possible. That
                  is not malice - it is their business model.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
          <Reveal delay={0.1}>
            <SpotlightCard spotlightColor="rgba(0, 194, 255, 0.18)">
              <div className="p-6">
                <p className="text-[11px] uppercase tracking-[0.15em] text-accent mb-3 font-medium">
                  On your side
                </p>
                <p className="text-[15px] text-white/55 leading-relaxed">
                  Your internal team and COGO. We help you define what you
                  actually need, evaluate options without bias, negotiate from a
                  position of knowledge, and hold your implementation partner
                  accountable once the project starts.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
        </div>
        <Reveal delay={0.2}>
          <p className="text-[15px] text-white/45 leading-relaxed mt-10">
            We do not compete with vendors or system integrators. We make sure
            they do what they promised.
          </p>
        </Reveal>
      </ContentSection>

      <ContentSection withBorder>
        <SectionHeader
          eyebrow="Independence"
          title="Why independence matters"
        />
        <Prose>
          <p>
            Independence is not a marketing claim for us. It is a structural
            decision. COGO does not resell software. We do not accept referral
            fees. We do not earn revenue from implementation work.
          </p>
          <p>
            That means when we recommend a platform, it is because it fits your
            business - not because it pays us a commission. When we tell you a
            vendor&apos;s proposal is overpriced, it is because it is. When we
            advise you to delay a project, it is because you are not ready -
            even if that means less work for us.
          </p>
          <p>
            Here is a practical example: a mid-sized manufacturer was advised by
            their SI to implement a full SAP S/4HANA suite across all business
            units simultaneously. The SI quoted a two-year timeline and a
            seven-figure budget. An independent review showed that a phased
            approach - starting with finance and procurement - would reduce risk,
            cost 40% less upfront, and deliver value faster. The SI&apos;s
            recommendation was not wrong in theory. But it served their
            commercial interest more than the client&apos;s operational reality.
          </p>
          <p>
            That kind of honest, uncomfortable advice is what you get from{" "}
            <Link href="/services/erp-consulting/">
              independent ERP consulting services
            </Link>
            .
          </p>
        </Prose>
      </ContentSection>

      <ContentSection withBorder>
        <SectionHeader
          eyebrow="SI vs. consultant"
          title="The difference between a system integrator and a consultant"
        />
        <Prose>
          <p>
            A system integrator builds and configures your system. They write the
            code, run the testing, manage the data migration, and (hopefully) go
            live on time. You need one, and a good SI is worth every cent.
          </p>
          <p>
            A consultant - a real one - advises you. They help you work out what
            you need before the SI gets involved. They review the SI&apos;s
            proposals, challenge their estimates, and monitor delivery against
            what was agreed.
          </p>
          <p>
            The problem comes when the same firm tries to do both. If your
            advisor is also your implementer, who reviews their work? Who
            challenges their change orders? Who tells you that the
            &quot;essential&quot; scope expansion is actually optional?
          </p>
          <p>
            When you bring in COGO for{" "}
            <Link href="/services/software-selection/">
              vendor-neutral software evaluation and selection
            </Link>
            , you get advice that is genuinely separate from delivery. That
            separation is what keeps your project honest.
          </p>
        </Prose>
      </ContentSection>

      <ContentSection withBorder>
        <SectionHeader
          eyebrow="Selection and implementation"
          title="Should you use the same company to select and implement your ERP?"
        />
        <Prose>
          <p>
            <strong>Short answer: no.</strong>
          </p>
          <p>
            Longer answer: there are situations where it can work, but the
            conflicts of interest are significant enough that you should think
            very carefully before going down that road.
          </p>
          <p>
            If the same firm selects your software, they have an incentive to
            recommend the platform they are best equipped to implement. If they
            also implement it, they have an incentive to define a scope of work
            that maximises their revenue. And if something goes wrong during
            delivery, they have every reason to blame the software rather than
            their own work.
          </p>
          <p>
            The smarter approach is to separate advice from implementation. Use
            an independent firm like COGO to define your requirements, run the
            selection process, and negotiate the contract. Then bring in a
            specialist SI to deliver. And consider{" "}
            <Link href="/services/implementation-support/">
              holding your SI accountable through independent project oversight
            </Link>{" "}
            throughout the build to make sure they deliver what they promised.
          </p>
          <p>It costs more upfront. It saves significantly more in the long run.</p>
        </Prose>
      </ContentSection>

      <PageCTA
        title="Let's talk before you sign anything"
        subtitle="The best time to bring in independent advice is before you have committed to a vendor, a system integrator, or a timeline. The second best time is now."
        buttonText="Book a confidential conversation"
      />
    </PageLayout>
  );
}
