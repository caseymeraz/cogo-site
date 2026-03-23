import type { Metadata } from "next";
import Link from "next/link";
import PageLayout from "../../../components/PageLayout";
import PageHeader from "../../../components/PageHeader";
import ContentSection from "../../../components/ContentSection";
import Prose from "../../../components/Prose";
import Reveal from "../../../components/Reveal";
import PageCTA from "../../../components/PageCTA";

export const metadata: Metadata = {
  title: "ERP Data Migration Guide: Strategy, Pitfalls, and How to Get It Right | COGO",
  description:
    "A practical guide to ERP data migration: types of data, migration strategies, data cleansing, testing, and the common mistakes that derail projects.",
};

export default function ErpDataMigrationPage() {
  return (
    <PageLayout>
      <PageHeader eyebrow="Blog" title="ERP data migration: the part of your project most likely to go wrong" subtitle="Lance Harcourt - 23 March 2026" />
      <ContentSection withBorder><Prose>
        <p>Ask anyone who has been through an ERP implementation what they would do differently, and data migration comes up almost every time. A 2023 Panorama Consulting survey found that 56% of ERP implementations experience significant budget overruns, and data migration is consistently cited as one of the top three contributors.</p>
        <h2>Why data migration is where most projects go wrong</h2>
        <p><strong>Nobody owns it.</strong> Data migration sits between IT and the business. Without a clear owner with authority over both, things fall between the cracks.</p>
        <p><strong>The legacy data is worse than anyone admits.</strong> Duplicate customer records, inconsistent units of measure, orphaned transactions, incomplete material masters. These issues only become visible when you try to move data into a system with stricter validation rules.</p>
        <p><strong>It starts too late.</strong> Data migration should begin during the design phase. In practice, it often does not get serious attention until user acceptance testing.</p>
        <p><strong>Testing is inadequate.</strong> You need at least three full dry runs, ideally four or five.</p>
      </Prose></ContentSection>
      <ContentSection withBorder><Prose>
        <h2>Types of data to migrate</h2>
        <h3>Master data</h3>
        <p>Customer master records, vendor/supplier records, material/item master records, bills of material and recipes, routings/work centres, chart of accounts, and employee/HR master data.</p>
        <h3>Transactional data</h3>
        <p>Open sales orders and purchase orders, open accounts receivable and accounts payable, general ledger balances, inventory balances, fixed asset registers, and work in progress.</p>
        <h3>Historical data</h3>
        <p>The honest answer for most organisations is: migrate less than you think. Migrate open transactions and opening balances. Keep the legacy system accessible in read-only mode for historical reporting.</p>
        <h2>Data cleansing</h2>
        <p>Data cleansing involves deduplication, standardisation, enrichment, validation, and archiving. According to Gartner, the average organisation has a 10-25% duplication rate in its customer master data. Data cleansing is a business activity, not an IT activity. Start it as early as possible.</p>
      </Prose></ContentSection>
      <ContentSection withBorder><Prose>
        <h2>Testing your migration</h2>
        <p>At minimum, three full migration dry runs:</p>
        <ol>
          <li><strong>First dry run:</strong> Identifies major data quality issues and technical problems.</li>
          <li><strong>Second dry run:</strong> Validates fixes from the first run.</li>
          <li><strong>Third dry run (dress rehearsal):</strong> Executed exactly as the production migration will be. This must be clean.</li>
        </ol>
        <h2>Common pitfalls</h2>
        <ul>
          <li><strong>Underestimating effort:</strong> Data migration typically consumes 15-20% of total ERP implementation effort.</li>
          <li><strong>No data governance:</strong> Without clear ownership, your cleansed data will degrade within months of go-live.</li>
          <li><strong>Ignoring the &quot;long tail&quot;:</strong> The last 20% of your data takes disproportionately long.</li>
          <li><strong>No cutover rehearsal:</strong> If you have not rehearsed the full cutover end to end, something will go wrong under pressure.</li>
        </ul>
        <p>For more context, read our guide on <Link href="/resources/blog/erp-implementation-plan/">how to build a realistic ERP implementation plan</Link>.</p>
      </Prose></ContentSection>
      <ContentSection withBorder><Prose>
        <h2>Frequently asked questions</h2>
        <h3>How long does ERP data migration take?</h3>
        <p>The migration itself typically takes 24 to 72 hours. However, the overall data migration workstream runs for 6 to 12 months within the broader ERP implementation timeline.</p>
        <h3>Should I migrate all my historical data?</h3>
        <p>Almost certainly not. Migrate open transactions and opening balances. Keep your legacy system accessible for historical reporting.</p>
        <h3>Who is responsible for data migration?</h3>
        <p>You need a dedicated data migration lead with authority over both IT and business teams.</p>
      </Prose></ContentSection>
      <ContentSection withBorder><Reveal><p className="text-[15px] text-muted leading-relaxed"><strong>Planning an ERP migration?</strong>{" "}<Link href="/contact/" className="text-accent underline underline-offset-4 decoration-accent/30 hover:decoration-accent/60 transition-colors">Talk to COGO</Link> about <Link href="/services/implementation-support/" className="text-accent underline underline-offset-4 decoration-accent/30 hover:decoration-accent/60 transition-colors">ERP implementation support</Link>.</p></Reveal></ContentSection>
      <PageCTA />
    </PageLayout>
  );
}
