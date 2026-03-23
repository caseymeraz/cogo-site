import type { Metadata } from "next";
import Link from "next/link";
import PageLayout from "../../../components/PageLayout";
import PageHeader from "../../../components/PageHeader";
import ContentSection from "../../../components/ContentSection";
import Prose from "../../../components/Prose";
import Reveal from "../../../components/Reveal";
import PageCTA from "../../../components/PageCTA";

export const metadata: Metadata = {
  title: "Integrated Business Planning (IBP): A Practical Guide | COGO",
  description: "What integrated business planning is, how it differs from S&OP, which technology platforms support it, and how to implement IBP in your organisation.",
};

export default function IntegratedBusinessPlanningPage() {
  return (
    <PageLayout>
      <PageHeader eyebrow="Blog" title="Integrated business planning: what it is, how it works, and the technology behind it" subtitle="Laurence Phelan - 23 March 2026" />
      <ContentSection withBorder><Prose>
        <p>Integrated business planning connects your financial plans, operational plans, and strategic goals into a single, continuous process. According to Gartner&apos;s 2024 Supply Chain Planning survey, only 16% of organisations have achieved mature IBP. The remaining 84% are still running fragmented planning processes.</p>
        <h2>What is integrated business planning?</h2>
        <p>IBP is a management process that aligns strategic, financial, and operational plans on a rolling 24 to 36 month horizon. The process runs monthly with five review steps: product management review, demand review, supply review, integrated reconciliation, and management business review.</p>
        <h2>How IBP differs from S&amp;OP</h2>
        <p>S&amp;OP produces a volume plan. IBP translates that into revenue, margin, cash, and capital expenditure for executive decision-making. IBP has a longer planning horizon (24 to 36 months vs 3 to 18), full financial integration, and executive-level decisions. Oliver Wight&apos;s 2023 benchmarking found 15 to 20% improvement in forecast accuracy and 5 to 7% EBITDA improvement.</p>
      </Prose></ContentSection>
      <ContentSection withBorder><Prose>
        <h2>Technology platforms</h2>
        <p><strong>SAP IBP:</strong> Tight S/4HANA integration, real-time analytics, Excel-based interface. See our <Link href="/services/sap-consulting/">SAP consulting services</Link>.</p>
        <p><strong>Kinaxis RapidResponse:</strong> Strongest &quot;what-if&quot; scenario engine. Leader in Gartner&apos;s 2024 Magic Quadrant for the seventh consecutive year.</p>
        <p><strong>o9 Solutions:</strong> AI-first platform with Enterprise Knowledge Graph approach. Strong in retail and CPG.</p>
        <p><strong>Anaplan:</strong> Connected planning across finance, sales, and operations. Acquired by Thoma Bravo for USD 10.7 billion in 2022.</p>
        <h2>Implementation considerations</h2>
        <p><strong>Start with process, not technology.</strong> Define your planning calendar, roles, and decision rights before selecting software.</p>
        <p><strong>Executive sponsorship is non-negotiable.</strong> IBP only works when the CEO or COO chairs the monthly review.</p>
        <p><strong>Data quality will slow you down.</strong> Budget 30 to 40% of implementation timeline for data readiness.</p>
        <p>For guidance on broader organisational change, see <Link href="/services/business-transformation/">our business transformation approach</Link>.</p>
      </Prose></ContentSection>
      <ContentSection withBorder><Prose>
        <h2>Frequently asked questions</h2>
        <h3>How long does IBP implementation take?</h3>
        <p>12 to 18 months to reach a functional process. Reaching maturity takes 24 to 36 months.</p>
        <h3>What is the typical ROI of IBP?</h3>
        <p>2 to 5% revenue improvement and 5 to 7% EBITDA improvement (Oliver Wight). 20 to 30% inventory reduction while improving service levels (McKinsey).</p>
      </Prose></ContentSection>
      <ContentSection withBorder><Reveal><p className="text-[15px] text-white/55 leading-relaxed"><strong>Want help designing your IBP process and selecting the right technology?</strong>{" "}<Link href="/contact/" className="text-accent underline underline-offset-4 decoration-accent/30 hover:decoration-accent/60 transition-colors">Talk to us</Link>.</p></Reveal></ContentSection>
      <PageCTA />
    </PageLayout>
  );
}
