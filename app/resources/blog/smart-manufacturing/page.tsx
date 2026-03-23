import type { Metadata } from "next";
import Link from "next/link";
import PageLayout from "../../../components/PageLayout";
import PageHeader from "../../../components/PageHeader";
import ContentSection from "../../../components/ContentSection";
import Prose from "../../../components/Prose";
import Reveal from "../../../components/Reveal";
import PageCTA from "../../../components/PageCTA";

export const metadata: Metadata = {
  title: "Smart Manufacturing: A Practical Technology Roadmap | COGO",
  description: "What smart manufacturing is, the core technologies involved, a maturity model for getting started, and how ERP serves as the backbone of a smart factory.",
};

export default function SmartManufacturingPage() {
  return (
    <PageLayout>
      <PageHeader eyebrow="Blog" title="Smart manufacturing: how to build your technology roadmap" subtitle="Lance Harcourt - 23 March 2026" />
      <ContentSection withBorder><Prose>
        <p>Smart manufacturing means using real-time data, connected systems, and advanced analytics to make better decisions on the factory floor. The global smart manufacturing market was valued at USD 277.81 billion in 2023, projected to reach USD 658.41 billion by 2030 (Grand View Research).</p>
        <h2>Core technologies</h2>
        <p><strong>Industrial IoT (IIoT):</strong> The sensor and connectivity layer. McKinsey estimates IIoT applications could generate USD 1.2 to 3.7 trillion in value annually by 2030.</p>
        <p><strong>Advanced analytics and AI:</strong> Predict equipment failure with 85 to 95% accuracy. Identify root causes by correlating hundreds of variables.</p>
        <p><strong>Digital twins:</strong> Virtual replicas for process design, predictive quality modelling, and capacity planning.</p>
        <p><strong>Edge computing:</strong> Processing data at the source for millisecond decision-making.</p>
      </Prose></ContentSection>
      <ContentSection withBorder><Prose>
        <h2>Maturity model</h2>
        <h3>Level 1: Connected (GBP 20,000 to 100,000 per line, 3 to 6 months)</h3>
        <p>Install IoT sensors on critical equipment, establish industrial network, implement basic data historian.</p>
        <h3>Level 2: Visible (GBP 50,000 to 200,000, 3 to 6 months)</h3>
        <p>Deploy OEE dashboards, implement energy monitoring, create automated shift reports, build quality trend reports.</p>
        <h3>Level 3: Predictive (GBP 150,000 to 500,000, 6 to 12 months)</h3>
        <p>Implement predictive maintenance, deploy predictive quality models, use demand sensing, build digital twins.</p>
        <h3>Level 4: Adaptive (GBP 500,000 to 2,000,000+, 12 to 24 months)</h3>
        <p>Closed-loop process control using AI, autonomous scheduling, self-optimising energy management.</p>
        <p>Most manufacturers should target Level 2 as their first milestone.</p>
        <h2>ERP as the backbone</h2>
        <p>Your ERP connects shop-floor data to business decisions at every maturity level. Modern ERP platforms (SAP S/4HANA, Microsoft Dynamics 365, Oracle Cloud Manufacturing) include IoT integration capabilities designed for this purpose.</p>
      </Prose></ContentSection>
      <ContentSection withBorder><Prose>
        <h2>Building your roadmap</h2>
        <ol>
          <li><strong>Define your business drivers:</strong> Reducing unplanned downtime, improving OEE, reducing quality costs, meeting regulatory requirements, or reducing energy consumption</li>
          <li><strong>Assess your current state:</strong> Most manufacturers overestimate their position</li>
          <li><strong>Identify quick wins:</strong> OEE dashboards, predictive maintenance on your most failure-prone asset, automated shift reporting</li>
          <li><strong>Sequence your investments:</strong> Each level builds on the previous one</li>
          <li><strong>Plan for people:</strong> 57% of underperforming projects fail due to insufficient change management (Deloitte, 2024)</li>
        </ol>
        <p>See also <Link href="/resources/blog/industry-4-0-ireland/">Industry 4.0 for Irish manufacturers</Link>.</p>
      </Prose></ContentSection>
      <ContentSection withBorder><Prose>
        <h2>Frequently asked questions</h2>
        <h3>How long does it take to become a &quot;smart factory&quot;?</h3>
        <p>Level 2 (Visible): 6 to 12 months. Level 3 (Predictive): 18 to 30 months. Level 4 (Adaptive): 3 to 5 years.</p>
        <h3>What is the ROI?</h3>
        <p>12% improvement in labour productivity, 11% in factory utilisation, and 10% in manufacturing output (Deloitte, 2024).</p>
        <h3>Do we need to replace our equipment?</h3>
        <p>No. Retrofit IoT sensors and edge computing devices can connect virtually any equipment.</p>
      </Prose></ContentSection>
      <ContentSection withBorder><Reveal><p className="text-[15px] text-white/55 leading-relaxed"><strong>Want help building your smart manufacturing roadmap?</strong>{" "}<Link href="/contact/" className="text-accent underline underline-offset-4 decoration-accent/30 hover:decoration-accent/60 transition-colors">Get in touch</Link>.</p></Reveal></ContentSection>
      <PageCTA />
    </PageLayout>
  );
}
