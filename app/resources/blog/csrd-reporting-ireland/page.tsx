import type { Metadata } from "next";
import Link from "next/link";
import PageLayout from "../../../components/PageLayout";
import PageHeader from "../../../components/PageHeader";
import ContentSection from "../../../components/ContentSection";
import Prose from "../../../components/Prose";
import Reveal from "../../../components/Reveal";
import PageCTA from "../../../components/PageCTA";
import PageImage from "../../../components/PageImage";

export const metadata: Metadata = {
  title: "CSRD Reporting Ireland: System Requirements | COGO",
  description:
    "CSRD is coming for Irish businesses. Here is what it means for your ERP, reporting systems, and data collection - and what to do about it now.",
};

export default function CsrdReportingIrelandPage() {
  return (
    <PageLayout>
      <PageHeader
        eyebrow="Blog"
        title="CSRD reporting: what Irish companies need from their systems"
        subtitle="Laurence Phelan - 23 March 2026"
      />

      <ContentSection withBorder>
        <Prose>
          <p>
            The Corporate Sustainability Reporting Directive (CSRD) is not a distant regulatory abstraction. For many Irish companies, CSRD reporting obligations have already begun or will begin within the next 12 months. And here is the part that nobody seems to be talking about: meeting these obligations is not primarily an accounting exercise or a sustainability team project. It is a systems and data problem.
          </p>
          <p>
            Your ERP, your reporting tools, your data collection processes - these are the infrastructure that will either make CSRD compliance manageable or turn it into an annual ordeal of manual data gathering, spreadsheet reconciliation, and last-minute scrambles. If you are still thinking about CSRD as "something sustainability will handle," you are already behind.
          </p>
        </Prose>
      </ContentSection>

      <PageImage
        src="/images/hero-data-analytics.jpg"
        alt="CSRD compliance data analytics and sustainability reporting"
      />

      <ContentSection withBorder>
        <Prose>
          <h2>What is CSRD?</h2>
          <p>
            The Corporate Sustainability Reporting Directive is an EU regulation that requires companies to report detailed information about their environmental, social, and governance (ESG) performance. It replaces the older Non-Financial Reporting Directive (NFRD) and massively expands both the scope of companies affected and the depth of reporting required.
          </p>
          <p>Under CSRD, companies must report according to the European Sustainability Reporting Standards (ESRS), which cover:</p>
          <ul>
            <li><strong>Environmental:</strong> Climate change, pollution, water and marine resources, biodiversity, resource use and circular economy</li>
            <li><strong>Social:</strong> Own workforce, workers in the value chain, affected communities, consumers and end-users</li>
            <li><strong>Governance:</strong> Business conduct, including anti-corruption, lobbying, and payment practices</li>
          </ul>
          <p>
            The reports must be included in the company's annual management report and are subject to third-party assurance - initially limited assurance, moving to reasonable assurance over time. This is not a voluntary disclosure exercise. It carries the same legal weight as your financial statements.
          </p>
          <p>
            According to the European Commission, approximately 50,000 companies across the EU will be subject to CSRD, up from roughly 11,700 under the NFRD. In Ireland specifically, the Irish Auditing and Accounting Supervisory Authority (IAASA) estimates that around 1,500 Irish companies will fall within scope.
          </p>
        </Prose>
      </ContentSection>

      <ContentSection withBorder>
        <Prose>
          <h2>CSRD timeline: who it affects and when</h2>
          <p>The phased rollout means different companies face different deadlines:</p>
          <p>
            <strong>Already reporting (financial year 2024, reports due 2025):</strong> Large public-interest entities already subject to NFRD - those with more than 500 employees that are listed on an EU-regulated market. These companies should already have CSRD-compliant reporting in progress.
          </p>
          <p>
            <strong>Phase 2 (financial year 2025, reports due 2026):</strong> Other large companies meeting at least two of three criteria: more than 250 employees, more than EUR 50 million in net turnover, or more than EUR 25 million in total assets. This is the wave that captures most large Irish businesses.
          </p>
          <p>
            <strong>Phase 3 (financial year 2026, reports due 2027):</strong> Listed SMEs, small and non-complex credit institutions, and captive insurance undertakings. Listed SMEs have the option to delay until financial year 2028.
          </p>
          <p>
            <strong>Non-EU companies (financial year 2028, reports due 2029):</strong> Non-EU parent companies with significant EU activity (more than EUR 150 million EU net turnover) and at least one EU subsidiary or branch meeting size thresholds.
          </p>
          <p>
            If your company meets the Phase 2 criteria, your first CSRD report covers the financial year starting 1 January 2025. That means you need to be collecting data <em>now</em>, not planning to start next year.
          </p>
        </Prose>
      </ContentSection>

      <ContentSection withBorder>
        <Prose>
          <h2>How CSRD affects your ERP and reporting systems</h2>
          <p>
            This is where the conversation shifts from regulatory compliance to practical systems work. CSRD does not just ask you to write a sustainability report. It requires you to collect, validate, aggregate, and disclose specific quantitative data points - many of which your current systems were never designed to capture.
          </p>
          <p>Here are the concrete system implications:</p>

          <h3>Your ERP needs to capture data it was not built for</h3>
          <p>Most ERP systems are built around financial transactions: orders, invoices, payments, inventory movements, production costs. CSRD requires data that sits outside the traditional ERP perimeter:</p>
          <ul>
            <li><strong>Scope 1 and 2 greenhouse gas emissions.</strong> This requires energy consumption data (electricity, gas, fuel) linked to specific facilities, tracked over time, and converted using emission factors. Your ERP may hold some energy cost data in accounts payable, but it almost certainly does not store consumption volumes or emission calculations.</li>
            <li><strong>Water consumption and waste generation.</strong> Again, your ERP probably tracks the cost of waste disposal but not the volume or composition of waste streams.</li>
            <li><strong>Workforce data beyond payroll.</strong> CSRD requires reporting on training hours, gender pay gap, health and safety incidents, employee turnover by category, and the percentage of workforce covered by collective bargaining agreements. Your HR system may hold some of this, but integrating it with your ESG reporting framework is a separate challenge.</li>
            <li><strong>Value chain data.</strong> CSRD requires information about your suppliers' and customers' sustainability performance. This goes well beyond anything your procurement or CRM system currently captures.</li>
          </ul>

          <h3>Your reporting layer needs to handle double materiality</h3>
          <p>
            CSRD introduces the concept of "double materiality" - you must report on sustainability issues that affect your financial performance (financial materiality) <em>and</em> on your company's impact on people and the environment (impact materiality). Your reporting tools need to support both perspectives, cross-referencing sustainability data with financial data in ways that most BI and reporting platforms are not configured to do out of the box.
          </p>

          <h3>Your data needs to be auditable</h3>
          <p>
            Because CSRD reports are subject to third-party assurance, your sustainability data must meet the same standards of accuracy, completeness, and traceability as your financial data. That means audit trails, data lineage, access controls, and documented data collection methodologies. If your current approach is "someone emails a spreadsheet to sustainability every quarter," that will not survive an assurance engagement.
          </p>
        </Prose>
      </ContentSection>

      <ContentSection withBorder>
        <Prose>
          <h2>System changes you may need</h2>
          <p>Based on our work with Irish businesses preparing for CSRD, here are the most common system changes:</p>

          <h3>1. An ESG data management platform</h3>
          <p>
            For most companies, the practical answer is a dedicated ESG data management tool that sits alongside your ERP and consolidates sustainability data from multiple sources. Products like Sphera, Persefoni, Watershed, IBM Envizi, or Workiva provide structured data collection, emission calculations, ESRS-aligned reporting templates, and audit trail functionality.
          </p>
          <p>
            These platforms do not replace your ERP - they complement it. Your ERP remains the system of record for financial and operational data. The ESG platform aggregates the non-financial data that your ERP does not capture.
          </p>

          <h3>2. New data integrations</h3>
          <p>Your ESG platform needs to pull data from multiple systems:</p>
          <ul>
            <li><strong>ERP:</strong> Financial data, energy costs, procurement spend, production volumes</li>
            <li><strong>HR system:</strong> Headcount, training, diversity data, health and safety</li>
            <li><strong>Facilities management:</strong> Energy consumption, water usage, waste volumes</li>
            <li><strong>Supply chain systems:</strong> Supplier assessments, transport emissions, raw material sourcing</li>
            <li><strong>Utility providers:</strong> Direct energy and water consumption feeds</li>
          </ul>
          <p>
            Building these integrations is a systems project. It requires API connections, data mapping, validation rules, and ongoing maintenance. If you are planning an ERP implementation or upgrade, building CSRD data requirements into the scope now is far cheaper than retrofitting later.
          </p>

          <h3>3. Enhanced master data</h3>
          <p>CSRD reporting requires data at a level of granularity that your current master data may not support. For example:</p>
          <ul>
            <li>Tracking energy consumption by site, building, or production line (not just by cost centre)</li>
            <li>Classifying waste by type and disposal method (not just "waste disposal cost")</li>
            <li>Categorising workforce data by gender, age group, employment type, and location</li>
            <li>Tagging suppliers with sustainability risk ratings and emission data</li>
          </ul>
          <p>
            If your master data is not structured to support this granularity, you need to extend it - which means changes to your ERP configuration, your data governance processes, and your data entry procedures.
          </p>

          <h3>4. Updated financial reporting</h3>
          <p>CSRD interacts with your financial statements in ways that many finance teams have not yet anticipated. The directive requires disclosure of how sustainability risks and opportunities affect your financial position and performance. This means your financial reporting process needs to incorporate:</p>
          <ul>
            <li>Provisions for environmental liabilities</li>
            <li>Asset impairment assessments related to climate risk</li>
            <li>Capital expenditure tagged as sustainability-related (taxonomy alignment)</li>
            <li>Revenue breakdown by sustainability-related products and services</li>
          </ul>
          <p>
            Your ERP's chart of accounts and cost centre structure may need updating to support this tagging and categorisation.
          </p>
        </Prose>
      </ContentSection>

      <ContentSection withBorder>
        <Prose>
          <h2>Data collection requirements: getting practical</h2>
          <p>
            The ESRS standards specify hundreds of individual data points across the environmental, social, and governance pillars. You do not need to report on all of them - CSRD's materiality assessment determines which topics are relevant to your business. But for the topics that are material, the data requirements are specific and demanding.
          </p>
          <p>Here is what a typical Irish manufacturer's data collection requirement looks like:</p>
          <p><strong>Environmental data (collected monthly or quarterly):</strong></p>
          <ul>
            <li>Electricity consumption in kWh by site</li>
            <li>Natural gas consumption in kWh or cubic metres by site</li>
            <li>Transport fuel consumption in litres by vehicle type</li>
            <li>Refrigerant losses in kg by gas type</li>
            <li>Water consumption in cubic metres by site</li>
            <li>Waste generated in tonnes by type (hazardous, non-hazardous) and disposal method</li>
            <li>Raw material consumption in tonnes by material type</li>
            <li>Packaging materials used and recycled</li>
          </ul>
          <p><strong>Social data (collected annually or semi-annually):</strong></p>
          <ul>
            <li>Total headcount by gender, age group, employment type, and location</li>
            <li>Gender pay gap data</li>
            <li>Training hours per employee by category</li>
            <li>Health and safety incidents (lost-time injury frequency rate)</li>
            <li>Employee turnover rates by category</li>
            <li>Workers in the value chain - number and nature of supply chain workforce assessments</li>
          </ul>
          <p><strong>Governance data (collected annually):</strong></p>
          <ul>
            <li>Board diversity and sustainability competence</li>
            <li>Anti-corruption training completion rates</li>
            <li>Political engagement and lobbying expenditure</li>
            <li>Payment practices (average payment terms, percentage paid on time)</li>
          </ul>
          <p>
            For each data point, you need: a clear data source, a documented collection methodology, a responsible data owner, a validation process, and an audit trail. If this list feels overwhelming, that is because it is. But the work is manageable if you start with a proper data gap assessment and build the collection infrastructure systematically.
          </p>
          <p>
            If you are considering a systems project to support CSRD compliance, explore the funding options through <Link href="/resources/blog/enterprise-ireland-grants/">Enterprise Ireland grants for digital transformation</Link>.
          </p>
        </Prose>
      </ContentSection>

      <ContentSection withBorder>
        <Prose>
          <h2>What to do now</h2>
          <p>If your company falls within CSRD scope (Phase 2 or later), here is a practical action plan:</p>
          <ol>
            <li><strong>Conduct a double materiality assessment</strong> to determine which ESRS topics are relevant to your business. This narrows the data collection requirement significantly.</li>
            <li><strong>Run a data gap assessment</strong> against the material topics. For each required data point, identify: do you have the data? Where does it live? How accurate is it? What is missing?</li>
            <li><strong>Evaluate your systems landscape.</strong> Map your current ERP, HR, facilities, and supply chain systems against the data requirements. Identify the gaps between what your systems capture and what CSRD requires.</li>
            <li><strong>Build a roadmap.</strong> Prioritise the system changes and data integrations based on your reporting timeline. If your first report is due in 2027, you need data collection infrastructure in place by early 2026 at the latest.</li>
            <li><strong>Engage your ERP partner.</strong> If you are mid-implementation or planning an ERP project, brief your implementation partner on CSRD requirements now. Adding ESG data fields and reporting capabilities during an implementation is a fraction of the cost of retrofitting them later.</li>
            <li><strong>Get independent advice</strong> on how your systems strategy aligns with your compliance obligations. <Link href="/services/business-transformation/">Business transformation consulting</Link> that connects regulatory requirements to systems architecture is exactly the kind of work that prevents expensive rework down the line.</li>
          </ol>
        </Prose>
      </ContentSection>

      <ContentSection withBorder>
        <Prose>
          <h2>Frequently asked questions</h2>

          <h3>Does my ERP system need to be CSRD-compliant?</h3>
          <p>
            There is no such thing as a "CSRD-compliant ERP" in the way there is a GDPR-compliant data processor. CSRD compliance is about your reporting outputs, not your system configuration. However, your ERP is a critical data source for CSRD reporting, and it may need modifications to capture additional data points (energy consumption, sustainability-tagged expenditure, workforce categorisation) that CSRD requires. Most companies will need a dedicated ESG data management platform alongside their ERP rather than trying to do everything within the ERP itself.
          </p>

          <h3>How much does CSRD compliance cost?</h3>
          <p>
            Costs vary enormously depending on your size, complexity, and starting point. For a mid-sized Irish company (250-1,000 employees), expect to invest EUR 100,000-500,000 in the first year for materiality assessment, data gap analysis, system changes, process development, and external assurance. Ongoing annual costs are typically EUR 50,000-200,000 for data collection, reporting, and assurance. Companies that integrate CSRD requirements into a planned ERP project can share costs across both initiatives and typically spend 20-30% less than those who treat CSRD as a standalone compliance programme.
          </p>

          <h3>When do I need to start collecting data?</h3>
          <p>
            If your first CSRD report covers the financial year 2025 (Phase 2 companies), you should have been collecting data from 1 January 2025. CSRD requires comparative data for some metrics, which means you ideally need baseline data from the year before your first reporting period. If you have not started, begin now - even imperfect data collection that starts today is better than no data collection. Focus on the data points related to your material topics first.
          </p>

          <h3>Can I use spreadsheets for CSRD reporting?</h3>
          <p>
            Technically, yes. Practically, not for long. Spreadsheets may work for your first reporting cycle if your data requirements are limited, but they will not scale, they create audit trail problems, and they introduce unacceptable error risk for data that carries the same legal weight as your financial statements. Most companies move to dedicated ESG data management platforms within two reporting cycles. If you are already planning a systems investment, build CSRD data collection into that project from the start rather than implementing a spreadsheet-based workaround that you will replace within 18 months. For <Link href="/services/erp-consulting/">independent ERP consulting services</Link> that account for regulatory requirements like CSRD, talk to us before you finalise your systems scope.
          </p>
        </Prose>
      </ContentSection>

      <ContentSection withBorder>
        <Reveal>
          <p className="text-[15px] text-muted leading-relaxed italic">
            Laurence Phelan is a director at COGO Consulting, advising Irish businesses on{" "}
            <Link href="/services/business-transformation/" className="text-accent underline underline-offset-4 decoration-accent/30 hover:decoration-accent/60 transition-colors">
              business transformation consulting
            </Link>{" "}
            that connects systems strategy to regulatory and operational requirements.
          </p>
        </Reveal>
      </ContentSection>

      <PageCTA />
    </PageLayout>
  );
}
