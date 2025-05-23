import { PageLayout } from "../page-layout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Educational Publications | CALI - Creative Arts Leadership Institute",
  description:
    "CALI offers CBC-aligned books, magazines, and resources for Kenya's creative arts education, supporting educators and students with quality materials.",
  openGraph: {
    title: "Creative Arts Publications for CBC | CALI Kenya",
    description:
      "Discover CALI's collection of CBC-aligned books, magazines, and educational resources for Kenya's creative arts sector.",
    images: [
      {
        url: "https://www.cali.institute/programs/leadership.jpg",
        width: 1200,
        height: 630,
        alt: "CALI Publications",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Creative Arts Publications for CBC | CALI Kenya",
    description:
      "Educational resources and publications supporting Kenya's Competency-Based Curriculum in creative arts.",
    images: ["https://www.cali.institute/programs/leadership.jpg"],
  },
};

export default function PublicationPage() {
  return (
    <PageLayout
      title="Publications"
      titleSpan=""
      imageSrc="/programs/leadership.jpg"
    >
      <div className="space-y-5">
        <p>
          At CALI, we are proud to offer a diverse range of publications
          designed to support the Competency-Based Curriculum (CBC) and promote
          the creative arts in Kenya. Our extensive collection includes books
          specifically tailored to the CBC framework providing valuable
          resources for educators and students alike. These materials are
          crafted to enhance learning and foster creativity ensuring that
          students receive a well-rounded education in the creative arts.
        </p>
        <hr />
        <p>
          In addition to our CBC-focused books, we publish a variety of other
          materials to serve the creative arts community. Our publications
          include magazines and newsletters that feature insightful articles,
          industry news and profiles of prominent artists. These publications
          are intended to keep our audience informed and inspired offering a
          platform for sharing knowledge and celebrating the achievements of the
          creative arts sector.
        </p>
        <hr />
        <p>
          Our resource materials cover a wide range of topics within the
          creative arts providing practical guidance and support for artists and
          arts managers. From instructional guides to in-depth analyses, our
          publications are designed to meet the needs of the creative arts
          community and contribute to its growth and development.
        </p>
        <hr />
        <p>
          At CALI, we are dedicated to advancing the creative arts through
          education and information. Our commitment to high-quality publications
          ensures that we continue to be a trusted source of knowledge and
          inspiration for the creative arts sector in Kenya.
        </p>
        <hr />
      </div>
    </PageLayout>
  );
}
