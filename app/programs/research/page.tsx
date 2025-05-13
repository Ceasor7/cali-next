import { PageLayout } from "../page-layout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Professional Publications | CALI - Creative Arts Leadership Institute",
  description:
    "Access CALI's research publications, case studies, and industry reports on Kenya's creative arts sector for data-driven insights and best practices.",
  openGraph: {
    title: "Research Publications on Kenya's Creative Arts Sector | CALI",
    description:
      "Explore CALI's collection of professional publications including research papers, case studies, and industry reports on creative arts management in Kenya.",
    images: [
      {
        url: "https://www.cali.institute/publications/cover.jpg",
        width: 1200,
        height: 630,
        alt: "CALI Publications Cover",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Research Publications on Kenya's Creative Arts Sector | CALI",
    description:
      "Data-driven insights and analysis on Kenya's creative arts industry through CALI's professional publications.",
    images: ["https://www.cali.institute/publications/cover.jpg"],
  },
};

export default function PublicationsPage() {
  return (
    <PageLayout
      title="Publications"
      titleSpan="Research & Insights"
      imageSrc="/publications/cover.jpg"
    >
      <div className="space-y-4">
        <p>
          CALI produces comprehensive research publications, case studies, and
          industry reports that provide valuable insights into Kenya&apos;s
          creative arts sector. Our publications cover critical aspects of
          creative arts management, policy frameworks, and sector trends.
        </p>
        <p>
          Through rigorous research and analysis, we document best practices,
          challenges, and opportunities within the creative economy. Our
          publications serve as essential resources for artists, policymakers,
          academics, and cultural practitioners seeking data-driven knowledge to
          inform their work.
        </p>
        <p>
          We collaborate with researchers, arts professionals, and academic
          institutions to produce authoritative content that advances
          understanding of Kenya&apos;s creative sector. Our publications are
          designed to stimulate dialogue, influence policy, and support
          evidence-based decision making in the arts.
        </p>
        <p>
          CALI&apos;s publications are available to arts organizations,
          educational institutions, and individual practitioners committed to
          professional development and sector growth. We regularly disseminate
          our findings through workshops, conferences, and digital platforms to
          maximize their impact.
        </p>
      </div>
    </PageLayout>
  );
}
