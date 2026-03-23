import type { Metadata } from "next";
import Link from "next/link";
import PageLayout from "../../../components/PageLayout";
import PageHeader from "../../../components/PageHeader";
import ContentSection from "../../../components/ContentSection";
import Prose from "../../../components/Prose";
import PageCTA from "../../../components/PageCTA";

export const metadata: Metadata = {
  title: "Digital Supply Chain Transformation | Practical Guide | COGO",
  description: "A practical guide to digital supply chain transformation - the technologies, business case, stages, and visibility gains that Irish and UK organisations need to understand.",
};

export default function SupplyChainDigitalTransformationPage() {
  return (
    <PageLayout>
      <PageHeader eyebrow="Blog" title="Digital supply chain transformation: a practical guide for Irish and UK businesses" subtitle="Laurence Phelan - 23 March 2026" />
      <ContentSection withBorder><Prose>
        <p>Digital supply chain transformation is the process of replacing manual, disconnected, and paper-based supply chain processes with integrated, data-driven systems. McKinsey&apos;s 2023 research found that companies with digitised supply chains experience 50% fewer lost sales due to stockouts and carry 30% less inventory.</p>
        <h2>Key technologies</h2>
        <p><strong>ERP:</strong> The backbone. If you are considering an upgrade, <Link href="/services/sap-consulting/">our SAP consulting practice</Link> can help. <strong>WMS:</strong> Manages detailed warehouse operations. <strong>TMS:</strong> Handles freight planning and optimisation (typically 5 to 15% freight reduction). <strong>Demand planning and forecasting:</strong> Uses historical data and ML to predict future demand. <strong>IoT and real-time tracking:</strong> Provides real-time visibility into the location and condition of goods. <strong>Advanced analytics and AI:</strong> Moves from descriptive to predictive to prescriptive.</p>
        <h2>Stages of supply chain transformation</h2>
        <p><strong>Stage 1: Foundation (6 to 12 months)</strong> - Stable ERP, accurate master data, standardised processes.</p>
        <p><strong>Stage 2: Visibility (6 to 12 months)</strong> - Real-time dashboards, supplier performance, KPI reporting.</p>
        <p><strong>Stage 3: Optimisation (6 to 18 months)</strong> - Demand forecasting, warehouse and transport optimisation, automated replenishment.</p>
        <p><strong>Stage 4: Advanced capability (12 to 24 months)</strong> - Predictive analytics, IoT integration, supply chain control tower.</p>
        <p>For broader transformation, see our <Link href="/services/business-transformation/">business transformation consulting</Link> services.</p>
      </Prose></ContentSection>
      <ContentSection withBorder><Prose>
        <h2>Frequently asked questions</h2>
        <h3>Where should we start?</h3>
        <p>Start with your data and your ERP foundation. You cannot optimise what you cannot see.</p>
        <h3>How much does it cost?</h3>
        <p>A focused WMS implementation might cost GBP 100,000 to 300,000. A full programme could run to GBP 2 to 10 million.</p>
        <h3>Do we need to replace our ERP?</h3>
        <p>Not necessarily. If your current ERP is stable and supports modern integrations, you may be able to build on it.</p>
      </Prose></ContentSection>
      <PageCTA />
    </PageLayout>
  );
}
