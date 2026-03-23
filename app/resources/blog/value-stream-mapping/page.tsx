import type { Metadata } from "next";
import Link from "next/link";
import PageLayout from "../../../components/PageLayout";
import PageHeader from "../../../components/PageHeader";
import ContentSection from "../../../components/ContentSection";
import Prose from "../../../components/Prose";
import Reveal from "../../../components/Reveal";
import PageCTA from "../../../components/PageCTA";

export const metadata: Metadata = {
  title: "Value Stream Mapping for Digital Transformation and ERP Selection | COGO",
  description:
    "Value stream mapping shows you where time and money are being wasted before you invest in new technology. Learn how VSM fits into transformation and ERP selection.",
};

export default function ValueStreamMappingPage() {
  return (
    <PageLayout>
      <PageHeader
        eyebrow="Blog"
        title="Value stream mapping: the step most businesses skip before spending millions on technology"
        subtitle="Laurence Phelan - 23 March 2026"
      />

      <ContentSection withBorder>
        <Prose>
          <p>Here is a pattern we see regularly. A business decides it needs a new ERP system, or a new set of operational tools, or a &quot;transformation programme.&quot; They jump straight into vendor demos, feature comparisons, and RFP processes. Twelve months and several hundred thousand euro later, they have a shiny new system that automates the same inefficient processes they had before.</p>
          <p>Value stream mapping is the antidote to that pattern. It forces you to see how your business actually works, not how you think it works, before you make technology decisions. And in our experience, it is the single most underused tool in the transformation toolkit.</p>
        </Prose>
      </ContentSection>

      <ContentSection withBorder>
        <Prose>
          <h2>What is value stream mapping?</h2>
          <p>Value stream mapping (VSM) is a lean management method for analysing the flow of materials and information required to bring a product or service to a customer. A value stream map shows process steps, cycle times, wait times, inventory/WIP, information flow, and value-add vs non-value-add activities.</p>
          <p>The power of VSM is in making waste visible. Research by the Lean Enterprise Institute suggests that in many manufacturing and service processes, only 5% to 10% of total lead time is spent on value-adding activity.</p>
          <h2>Current state vs future state mapping</h2>
          <h3>Current state map</h3>
          <p>This is an honest picture of how things work today. It typically reveals bottlenecks, handoff delays, rework loops, information gaps, redundant steps, and system disconnects.</p>
          <h3>Future state map</h3>
          <p>This is the target: an achievable redesign based on eliminating the waste and constraints you identified. It defines which steps to eliminate, combine, or simplify, where to reduce batch sizes, what information needs to be available, what technology is needed, and what organisational changes are required.</p>
          <p>The gap between current state and future state is your transformation backlog. This is why VSM should come before ERP selection, not after.</p>
        </Prose>
      </ContentSection>

      <ContentSection withBorder>
        <Prose>
          <h2>How value stream mapping fits into business transformation</h2>
          <p>At COGO, <Link href="/services/business-transformation/">our business transformation approach</Link> starts with understanding the business before recommending technology. VSM answers three questions that technology alone cannot:</p>
          <p><strong>1. Where is the waste?</strong> Until you map the current state, you are guessing.</p>
          <p><strong>2. What does the future process look like?</strong> You cannot write meaningful ERP requirements without knowing how you want your processes to work.</p>
          <p><strong>3. What is the value of change?</strong> The gap between current and future state, quantified in time, cost, and quality, is your business case for transformation.</p>
        </Prose>
      </ContentSection>

      <ContentSection withBorder>
        <Prose>
          <h2>Getting started with value stream mapping</h2>
          <ol>
            <li><strong>Choose a value stream.</strong> Start with a single end-to-end process. Do not try to map everything at once.</li>
            <li><strong>Assemble the right team.</strong> You need people who actually do the work, not just managers.</li>
            <li><strong>Walk the process.</strong> Go to where the work happens. Observe. Ask questions. Measure actual times.</li>
            <li><strong>Map the current state.</strong> Use the standard VSM notation.</li>
            <li><strong>Identify waste.</strong> Categorise using the lean framework.</li>
            <li><strong>Design the future state.</strong> Eliminate waste, simplify flow, define information needs.</li>
            <li><strong>Build your transformation plan.</strong> The gap between current and future state becomes your project backlog.</li>
          </ol>
        </Prose>
      </ContentSection>

      <ContentSection withBorder>
        <Prose>
          <h2>Frequently asked questions</h2>
          <h3>How long does a value stream mapping exercise take?</h3>
          <p>A focused VSM exercise for a single value stream typically takes two to three days of workshop time, plus preparation and documentation. For a complex, multi-site value stream, allow four to five days of workshop time.</p>
          <h3>Do we need an external facilitator for VSM?</h3>
          <p>Not strictly, but it helps significantly. An external facilitator brings objectivity, experience, and discipline.</p>
          <h3>Can we do value stream mapping for service processes, not just manufacturing?</h3>
          <p>Absolutely. VSM applies equally well to service and administrative processes. Order processing, claims handling, customer onboarding, procurement, HR processes can all be mapped and improved using VSM.</p>
          <h3>How does VSM relate to process mining?</h3>
          <p>Process mining uses data from your existing systems to automatically generate process maps based on actual system transactions. It is a complement to VSM, not a replacement. Used together, they give you a complete picture.</p>
        </Prose>
      </ContentSection>

      <ContentSection withBorder>
        <Reveal>
          <p className="text-[15px] text-muted leading-relaxed">
            <strong>Want to map your processes before making technology decisions?</strong>{" "}
            <Link href="/contact/" className="text-accent underline underline-offset-4 decoration-accent/30 hover:decoration-accent/60 transition-colors">Talk to us</Link>{" "}
            about <Link href="/services/business-transformation/" className="text-accent underline underline-offset-4 decoration-accent/30 hover:decoration-accent/60 transition-colors">our business transformation approach</Link>.
          </p>
        </Reveal>
      </ContentSection>

      <PageCTA />
    </PageLayout>
  );
}
