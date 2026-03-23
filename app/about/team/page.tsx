import type { Metadata } from "next";
import PageLayout from "../../components/PageLayout";
import PageHeader from "../../components/PageHeader";
import ContentSection from "../../components/ContentSection";
import Reveal from "../../components/Reveal";
import SpotlightCard from "../../components/SpotlightCard";
import PageCTA from "../../components/PageCTA";

export const metadata: Metadata = {
  title: "Our Team | COGO Consulting",
  description:
    "Meet the COGO team. Senior practitioners with direct experience leading ERP programmes, SAP migrations, and business transformation from the client side.",
};

const team = [
  {
    name: "Laurence Phelan",
    role: "Director",
    bio: "Laurence spent over 15 years in supply chain and operations before founding COGO. As Business Deployment Lead at Kerry Group, he led multi-site SAP rollouts across Europe and the Americas, managing the intersection of process change, technology, and people. His background gives him a rare ability to see an ERP programme from the factory floor, not just the boardroom.",
  },
  {
    name: "Lance Harcourt",
    role: "Director",
    bio: "Lance brings deep project management experience in SAP S/4HANA, earned during large-scale transformation programmes at Glanbia. His career spans manufacturing and pharmaceutical environments, where he learned firsthand what it takes to deliver complex technology projects under real operational constraints. He co-founded COGO to bring that practitioner's perspective to every client engagement.",
  },
  {
    name: "Tom Stack",
    role: "Partner, Americas",
    bio: "Tom is based in the US and focuses on enterprise transformation for North American and multinational clients. His experience spans large-scale programme delivery and organisational change, giving COGO the reach to support clients with operations on both sides of the Atlantic.",
  },
  {
    name: "Karl Llewellyn",
    role: "CRM Partner",
    bio: "Karl leads COGO's CRM practice, advising clients on CRM strategy, platform selection, and implementation oversight. His focus is on making sure your CRM investment delivers measurable commercial results - not just another database your sales team ignores.",
  },
  {
    name: "George Hanhardt",
    role: "Partner, South Africa",
    bio: "George extends COGO's delivery capability into Southern Africa and supports global programmes that require on-the-ground presence across multiple time zones. His experience in enterprise transformation gives the team additional depth for large, geographically distributed projects.",
  },
];

export default function TeamPage() {
  return (
    <PageLayout>
      <PageHeader
        eyebrow="Our team"
        title="The people behind the advice"
        subtitle="COGO is deliberately small. Every person on our team has led major programmes from the inside. When you work with us, you work with the people who were in the room when it mattered - not their juniors."
      />

      <ContentSection withBorder>
        <div className="space-y-8">
          {team.map((member, i) => (
            <Reveal key={member.name} delay={i * 0.08}>
              <SpotlightCard>
                <div className="p-8 md:p-10">
                  <div className="flex flex-col md:flex-row md:items-start md:gap-8">
                    <div className="mb-4 md:mb-0 md:min-w-[200px]">
                      <h3 className="text-[20px] font-semibold tracking-[-0.01em] text-white/90">
                        {member.name}
                      </h3>
                      <p className="text-[13px] uppercase tracking-[0.1em] text-accent mt-1 font-medium">
                        {member.role}
                      </p>
                    </div>
                    <p className="text-[15px] text-white/50 leading-[1.8]">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </ContentSection>

      <PageCTA
        title="Work with our team"
        subtitle="Book a 30-minute call with one of our partners. No pitch, no pressure. Tell us what you are facing and we will tell you honestly if we can help."
      />
    </PageLayout>
  );
}
