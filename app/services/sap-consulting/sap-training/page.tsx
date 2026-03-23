import type { Metadata } from "next";
import PageLayout from "../../../components/PageLayout";
import PageHeader from "../../../components/PageHeader";
import ContentSection, { SectionHeader } from "../../../components/ContentSection";
import Prose from "../../../components/Prose";
import Reveal from "../../../components/Reveal";
import SpotlightCard from "../../../components/SpotlightCard";
import PageCTA from "../../../components/PageCTA";
import PageImage from "../../../components/PageImage";
import SvgSection from "../../../components/SvgSection";
import ProcessFlow from "../../../components/svg/ProcessFlow";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SAP Training Ireland | End User & Admin | COGO",
  description:
    "Role-based SAP training in Ireland that people actually remember. End user, super user, and admin courses using SAP Enable Now and WalkMe. COGO Consulting.",
};

export default function SAPTrainingPage() {
  return (
    <PageLayout>
      <PageHeader
        eyebrow="SAP Training"
        title="SAP training that people actually remember"
        subtitle="Role-based, organisation-specific SAP training in Ireland and the UK. Not generic slide decks. Not a compliance exercise. Training built around your actual processes, your actual data, and your people's actual jobs."
      />

      {/* Intro */}
      <ContentSection withBorder>
        <Prose>
          <p>
            Most SAP training in Ireland follows the same tired formula: put 20 people in a room, click through a slide deck, show a few transactions in a sandbox system, and hand out a certificate. Two weeks later, nobody remembers anything. They go back to asking the person who sits next to them -- or they build a workaround in Excel.
          </p>
          <p>
            That is not training. That is a compliance exercise.
          </p>
          <p>
            COGO takes a fundamentally different approach. Your people need to learn SAP in the context of their actual job, using your actual data, following your actual processes. Generic SAP courseware does not achieve this. Role-based, organisation-specific training does.
          </p>
          <p>
            Whether you are rolling out SAP for the first time as part of an{" "}
            <Link href="/services/implementation-support/">ERP implementation programme</Link>, recovering from poor adoption through our{" "}
            <Link href="/services/sap-consulting/sap-reboot/">SAP Reboot programme</Link>, or simply upskilling your team, training is the single biggest determinant of whether your SAP investment pays off. According to Panorama Consulting's 2024 ERP Report, 67% of organisations that exceeded their ERP budget cited inadequate training and change management as a contributing factor.
          </p>
          <p>
            For a broader view of how training fits into our services, visit{" "}
            <Link href="/services/sap-consulting/">our SAP consulting practice</Link>.
          </p>
        </Prose>
      </ContentSection>

      <PageImage src="/images/hero-sap-training.jpg" alt="SAP Enable Now and WalkMe training delivery" />

      <SvgSection caption="Training delivery approach">
        <ProcessFlow />
      </SvgSection>

      {/* Our approach */}
      <ContentSection withBorder withGrain>
        <SectionHeader
          eyebrow="Our Approach"
          title="Three principles: relevance, reinforcement, measurement"
        />
        <div className="grid md:grid-cols-3 gap-6">
          <Reveal delay={0}>
            <SpotlightCard>
              <div className="p-7">
                <h3 className="text-[18px] font-semibold text-foreground mb-3">
                  Relevance
                </h3>
                <p className="text-[14px] text-muted leading-relaxed">
                  Every training module is tailored to a specific role and the transactions that role performs daily. Your warehouse operator does not need to understand cost centre accounting. We map your business processes to SAP transactions and build content that follows the flow of real work -- not SAP's menu structure.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
          <Reveal delay={0.1}>
            <SpotlightCard>
              <div className="p-7">
                <h3 className="text-[18px] font-semibold text-foreground mb-3">
                  Reinforcement
                </h3>
                <p className="text-[14px] text-muted leading-relaxed">
                  Classroom training fades. Research by the Ebbinghaus forgetting curve shows people forget roughly 70% of new information within 24 hours unless it is reinforced. COGO uses SAP Enable Now and WalkMe to provide in-application guidance exactly when and where your user needs it.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
          <Reveal delay={0.2}>
            <SpotlightCard>
              <div className="p-7">
                <h3 className="text-[18px] font-semibold text-foreground mb-3">
                  Measurement
                </h3>
                <p className="text-[14px] text-muted leading-relaxed">
                  Training is not complete when the course is delivered. It is complete when your people are competent and confident. We build in pre- and post-assessments, system usage analytics, 30/60/90-day feedback surveys, and adoption dashboards for leadership visibility.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
        </div>
      </ContentSection>

      {/* Types of training */}
      <ContentSection withBorder>
        <SectionHeader
          eyebrow="Training Types"
          title="Types of SAP training we deliver"
        />
        <div className="grid md:grid-cols-2 gap-6">
          <Reveal delay={0}>
            <SpotlightCard>
              <div className="p-7">
                <h3 className="text-[18px] font-semibold text-foreground mb-3">
                  End user training
                </h3>
                <p className="text-[14px] text-muted leading-relaxed">
                  For the people who use SAP daily -- processing purchase orders, posting invoices, managing inventory, running reports. Delivered in small groups (8-12 people) organised by role, using your live SAP configuration in a training client. Hands-on exercises based on your real business scenarios.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
          <Reveal delay={0.1}>
            <SpotlightCard>
              <div className="p-7">
                <h3 className="text-[18px] font-semibold text-foreground mb-3">
                  Super user training
                </h3>
                <p className="text-[14px] text-muted leading-relaxed">
                  Super users bridge the gap between end users and your SAP support team. Training covers end-to-end process flows, basic troubleshooting and error resolution, and how to raise effective support tickets. Typically two to three days per module area.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
          <Reveal delay={0.2}>
            <SpotlightCard>
              <div className="p-7">
                <h3 className="text-[18px] font-semibold text-foreground mb-3">
                  Admin and technical training
                </h3>
                <p className="text-[14px] text-muted leading-relaxed">
                  For your IT team or internal SAP Centre of Excellence. Covers system administration, transport management, user and role administration, batch job scheduling, and basic performance monitoring. Tailored to your specific SAP landscape.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
          <Reveal delay={0.3}>
            <SpotlightCard>
              <div className="p-7">
                <h3 className="text-[18px] font-semibold text-foreground mb-3">
                  Process-specific training
                </h3>
                <p className="text-[14px] text-muted leading-relaxed">
                  Targeted workshops for specific processes: month-end closing in SAP Finance, MRP for production planners, warehouse management for logistics teams, or reporting and analytics for management. Standalone or part of a broader programme.
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
        </div>
      </ContentSection>

      <PageImage src="/images/methodology-training-roadmap.jpg" alt="SAP training roadmap methodology" />

      {/* Training during implementation */}
      <ContentSection withBorder withGrain>
        <SectionHeader
          eyebrow="Implementation"
          title="Training as part of implementation"
          subtitle="If you are implementing SAP or migrating to S/4HANA, training is not a workstream you can bolt on at the end."
        />
        <Prose>
          <p>
            The data makes this clear: Prosci's research across 6,000+ change management projects found that projects with excellent change management (including training) were six times more likely to meet objectives than those with poor change management. Panorama Consulting's 2024 ERP Report found that organisations spending less than 5% of their ERP budget on training were three times more likely to report poor user adoption.
          </p>
          <p>
            Training should start during the design phase -- not after go-live. Here is COGO's recommended timeline:
          </p>
          <ol>
            <li><strong>Design phase:</strong> Identify roles, map processes to transactions, develop training strategy and content plan.</li>
            <li><strong>Build phase:</strong> Create training materials, configure SAP Enable Now or WalkMe, develop exercises using your configuration.</li>
            <li><strong>Test phase:</strong> Pilot training with super users during user acceptance testing. Their feedback improves both the training content and the system configuration.</li>
            <li><strong>Go-live preparation (4-6 weeks before):</strong> Deliver end user training in waves, organised by role and go-live priority.</li>
            <li><strong>Post-go-live (first 90 days):</strong> Floor support, drop-in clinics, reinforcement training for areas where adoption is low.</li>
            <li><strong>Ongoing:</strong> Maintain and update training content as processes evolve. New starter onboarding using SAP Enable Now.</li>
          </ol>
          <p>
            COGO integrates training into our{" "}
            <Link href="/services/implementation-support/">ERP implementation support</Link> engagements as standard. If your SI treats training as an afterthought, that should concern you.
          </p>
        </Prose>
      </ContentSection>

      {/* FAQ */}
      <ContentSection withBorder>
        <SectionHeader
          eyebrow="FAQ"
          title="Frequently asked questions"
        />
        <div className="space-y-12">
          <Reveal>
            <div>
              <h3 className="text-[18px] font-semibold text-foreground mb-3">How much does SAP training cost in Ireland?</h3>
              <p className="text-[15px] text-muted leading-relaxed">
                SAP training costs vary based on scope, number of users, and delivery method. A focused end user training programme for a single module (such as Finance or Procurement) typically costs EUR 15,000 to EUR 40,000, covering content development, delivery, and SAP Enable Now or WalkMe configuration. A comprehensive training programme for a full S/4HANA implementation across multiple modules ranges from EUR 80,000 to EUR 200,000. COGO provides detailed quotes based on your specific requirements.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div>
              <h3 className="text-[18px] font-semibold text-foreground mb-3">Can you train our team on SAP Enable Now so we can maintain content ourselves?</h3>
              <p className="text-[15px] text-muted leading-relaxed">
                Yes, and COGO recommends this approach for long-term sustainability. We deliver "train the trainer" sessions that teach your internal team how to create and maintain SAP Enable Now content. This typically takes three to five days, depending on the complexity of your SAP landscape and the technical confidence of your team.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div>
              <h3 className="text-[18px] font-semibold text-foreground mb-3">Do you deliver SAP training remotely?</h3>
              <p className="text-[15px] text-muted leading-relaxed">
                COGO delivers SAP training both on-site and remotely across Ireland and the UK. For end user training, on-site delivery tends to be more effective. For super user and admin training, remote delivery works well provided participants have access to the training system. We use a blended approach for most engagements: on-site kickoff and initial sessions, with follow-up reinforcement delivered remotely.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div>
              <h3 className="text-[18px] font-semibold text-foreground mb-3">How do you handle training for a multi-site rollout?</h3>
              <p className="text-[15px] text-muted leading-relaxed">
                For organisations with multiple locations, COGO uses a "train the trainer" model combined with standardised content. We train super users at each site, who then deliver end user training locally with COGO's support. SAP Enable Now content is centralised and accessible from any location, ensuring consistency. For multi-language deployments, we develop content in English and coordinate translation with local teams.
              </p>
            </div>
          </Reveal>
        </div>
      </ContentSection>

      {/* Author */}
      <ContentSection withBorder withGrain>
        <Reveal>
          <p className="text-[13px] text-muted/70 italic leading-relaxed">
            Written by Lance Harcourt, COGO Consulting. Lance works with organisations across Ireland and the UK on SAP training, change management, and user adoption programmes.
          </p>
        </Reveal>
      </ContentSection>

      <PageCTA
        title="Your SAP system is only as good as the people using it"
        subtitle="Talk to COGO about SAP training in Ireland -- practical, role-based training that sticks. Whether you are mid-implementation or trying to fix poor adoption years after go-live, we can help."
        buttonText="Discuss SAP training"
        buttonHref="/contact/"
      />
    </PageLayout>
  );
}
