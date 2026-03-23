import type { Metadata } from "next";
import Link from "next/link";
import PageLayout from "../../../components/PageLayout";
import PageHeader from "../../../components/PageHeader";
import ContentSection from "../../../components/ContentSection";
import Prose from "../../../components/Prose";
import PageCTA from "../../../components/PageCTA";

export const metadata: Metadata = {
  title: "ERP Testing Guide | Types, Timeline, and Common Failures | COGO",
  description:
    "A practical ERP testing guide covering unit, integration, UAT, regression, performance, and cutover rehearsal testing - with timelines, resources, and the mistakes that sink go-live.",
};

export default function ErpTestingGuidePage() {
  return (
    <PageLayout>
      <PageHeader eyebrow="Blog" title="ERP testing guide: how to test your ERP system properly" subtitle="Lance Harcourt - 23 March 2026" />
      <ContentSection withBorder><Prose>
        <p>ERP testing is where the truth about your implementation project comes out. According to a 2023 Panorama Consulting survey, 37% of organisations reported that their ERP system did not meet expectations at go-live. Poor testing is the single biggest contributor to that statistic.</p>
        <h2>Types of ERP testing</h2>
        <p><strong>Unit testing:</strong> Testing individual components in isolation. Done by the implementation partner during and after the build phase.</p>
        <p><strong>Integration testing:</strong> Testing end-to-end business processes across modules. This is where interface failures appear.</p>
        <p><strong>User acceptance testing (UAT):</strong> Your business users testing real-world scenarios. UAT is the phase most often compressed when projects run late. Protect UAT time ruthlessly.</p>
        <p><strong>Regression testing:</strong> Re-testing previously passed scenarios after defect fixes.</p>
        <p><strong>Performance testing:</strong> Testing the system under realistic load conditions.</p>
        <p><strong>Cutover rehearsal:</strong> A full dry run of your go-live activities. Run at least two rehearsals if possible.</p>
      </Prose></ContentSection>
      <ContentSection withBorder><Prose>
        <h2>ERP testing timeline and resources</h2>
        <p>A realistic testing timeline: unit testing (3 to 4 weeks), integration testing (2 to 4 weeks), UAT (4 to 6 weeks), performance testing (2 to 3 weeks), regression testing (ongoing), and cutover rehearsal (1 to 2 weeks, times two). Total: 10 to 16 weeks.</p>
        <p>Organisations that allocated dedicated UAT resources were 2.3x more likely to go live on time (Deloitte, 2022).</p>
        <h2>Common ERP testing failures</h2>
        <ul>
          <li><strong>No test strategy document.</strong> You need scope, approach, entry/exit criteria, and defect management processes.</li>
          <li><strong>Incomplete test scripts.</strong> &quot;Test that purchase orders work&quot; is not a test script.</li>
          <li><strong>Testing in an unstable environment.</strong> Your testers waste time reporting defects that have already been fixed.</li>
          <li><strong>No defect triage process.</strong> Critical issues get lost alongside cosmetic niggles.</li>
          <li><strong>Skipping negative testing.</strong> What happens when a user enters an invalid date?</li>
        </ul>
        <p>An independent adviser can help with test strategy, defect prioritisation, and go/no-go recommendations. Explore our <Link href="/services/implementation-support/">ERP implementation support</Link> services.</p>
      </Prose></ContentSection>
      <ContentSection withBorder><Prose>
        <h2>Frequently asked questions</h2>
        <h3>How long should ERP testing take?</h3>
        <p>Plan for 10 to 16 weeks of dedicated testing. UAT alone should be 4 to 6 weeks.</p>
        <h3>Who should be responsible for UAT?</h3>
        <p>Your business users, not the implementation partner.</p>
        <h3>What is a cutover rehearsal and do we really need one?</h3>
        <p>A full simulation of your go-live weekend. Yes, you really need one. Ideally two.</p>
      </Prose></ContentSection>
      <PageCTA />
    </PageLayout>
  );
}
