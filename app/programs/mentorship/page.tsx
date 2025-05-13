import { PageLayout } from "../page-layout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Arts Mentorship Programs | CALI - Creative Arts Leadership Institute",
  description:
    "CALI's mentorship and coaching programs connect emerging creative arts leaders with experienced professionals in Kenya's arts sector.",
  openGraph: {
    title: "Creative Arts Mentorship Programs | CALI Kenya",
    description:
      "One-on-one guidance and professional development for emerging arts leaders through CALI's mentorship initiatives.",
    images: [
      {
        url: "https://www.cali.institute/programs/mentorship.jpg",
        width: 1200,
        height: 630,
        alt: "CALI Mentorship Program",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Creative Arts Mentorship Programs | CALI Kenya",
    description:
      "Developing Kenya's next generation of creative arts leaders through personalized mentorship.",
    images: ["https://www.cali.institute/programs/mentorship.jpg"],
  },
};

export default function MentorshipPage() {
  return (
    <PageLayout
      title="Mentorship and"
      titleSpan="Coaching programs "
      imageSrc="/programs/mentorship.jpg"
    >
      <div className="space-y-4">
        <p>
          CALI&apos;s mentorship and coaching programs are designed to support
          emerging creative arts leaders by pairing them with experienced
          mentors from the creative arts sector. Through one-on-one guidance and
          support these programs aim to help emerging leaders develop their
          skills, build their professional networks and navigate the unique
          challenges of working in the creative arts sector.
        </p>
        <p>
          Our mentorship program offers personalized coaching sessions where
          mentors share their expertise, insights and industry knowledge with
          mentees. This relationship fosters professional growth and provides
          mentees with practical advice on career development, project
          management and strategic planning. By connecting emerging leaders with
          seasoned professionals, we create opportunities for meaningful
          exchanges and long-lasting professional relationships.
        </p>
        <p>
          In addition to skill development, our mentorship programs emphasize
          the importance of networking within the creative arts community.
          Mentees are introduced to key industry contacts and are encouraged to
          participate in various networking events and collaborative projects.
          This exposure helps them to broaden their horizons, gain new
          perspectives and strengthen their professional connections.
        </p>
        <p>
          At CALI, we believe that mentorship is a vital component of career
          development in the creative arts. Our commitment to nurturing the next
          generation of creative arts leaders ensures that they are
          well-prepared to contribute to the growth and sustainability of the
          creative arts sector in Kenya. Through our mentorship and coaching
          programs, we strive to build a supportive and thriving creative arts
          community that benefits from shared knowledge and collaborative
          growth.
        </p>
      </div>
    </PageLayout>
  );
}
