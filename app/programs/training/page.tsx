import { PageLayout } from "../page-layout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Training Workshops | CALI - Creative Arts Leadership Institute",
  description:
    "CALI's professional training workshops in creative arts management, fundraising, and marketing to enhance your skills in Kenya's arts sector.",
  openGraph: {
    title: "CALI Training Workshops for Creative Arts Professionals",
    description:
      "Join CALI's hands-on workshops and masterclasses to build essential skills in arts management, fundraising, marketing, and audience development in Kenya's creative sector.",
    images: [
      {
        url: "https://www.cali.institute/programs/training.jpg",
        width: 1200,
        height: 630,
        alt: "CALI Training Workshop",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CALI Training Workshops for Creative Arts Professionals",
    description:
      "Enhance your creative arts management skills with CALI's professional training workshops in Kenya.",
    images: ["https://www.cali.institute/programs/training.jpg"],
  },
};

export default function TrainingPage() {
  return (
    <PageLayout
      title="Training"
      titleSpan="Workshops"
      imageSrc="/programs/training.jpg"
    >
      <div className="space-y-4">
        <p>
          CALI&apos;s training workshops are designed to build essential skills
          in various critical areas of the creative arts sector. Our programs
          focus on creative arts management, fundraising, marketing and audience
          development. We achieve this through a series of hands-on workshops
          and masterclasses tailored to meet the needs of artists, creative arts
          managers, and cultural practitioners.
        </p>
        <p>
          Our workshops provide participants with practical knowledge and tools
          to enhance their professional capabilities and ensure the
          sustainability of their creative endeavors. By engaging with industry
          experts and experienced trainers participants gain insights into best
          practices and innovative strategies. Whether it&apos;s mastering the
          art of fundraising, developing effective marketing campaigns or
          crafting comprehensive strategic plans, our training programs are
          designed to empower the arts community with the skills needed for
          success.
        </p>
        <p>
          At CALI, we are committed to nurturing talent and fostering a thriving
          creative arts ecosystem in Kenya. Through our workshops and
          masterclasses, we aim to equip individuals and organizations with the
          expertise to navigate the complexities of the creative arts industry
          and achieve their goals.
        </p>
      </div>
    </PageLayout>
  );
}
