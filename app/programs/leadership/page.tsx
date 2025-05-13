import { PageLayout } from "../page-layout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Creative Arts Leadership Development | CALI Institute",
  description:
    "CALI empowers creative arts leaders in Kenya through skill-building workshops, networking, and professional development programs.",
  openGraph: {
    title: "Leadership Programs for Arts Professionals | CALI Kenya",
    description:
      "Developing visionary leaders for Kenya's creative arts sector through CALI's leadership development initiatives.",
    images: [
      {
        url: "https://www.cali.institute/programs/leadership.jpg",
        width: 1200,
        height: 630,
        alt: "CALI Leadership Program",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Leadership Programs for Arts Professionals | CALI Kenya",
    description:
      "Empowering the next generation of creative arts leaders in Kenya through professional development.",
    images: ["https://www.cali.institute/programs/leadership.jpg"],
  },
};

export default function LeadershipPage() {
  return (
    <PageLayout
      title="Leadership"
      titleSpan="Development "
      imageSrc="/programs/leadership.jpg"
    >
      <div className="space-y-5">
        <p>
          CALI&apos;s leadership development programs are dedicated to
          empowering both emerging and established creative arts leaders. Our
          initiatives are designed to enhance their skills and knowledge, deepen
          their understanding of the creative arts sector and foster valuable
          networks and connections with other creative arts professionals.
          Through a combination of interactive workshops, mentorship
          opportunities, and collaborative projects, we aim to cultivate a new
          generation of visionary leaders who can drive innovation and growth in
          the arts community.
        </p>
        <hr />
        <p>
          Participants in our leadership programs gain access to expert-led
          training sessions that cover a wide range of topics including;
          strategic planning, organizational development and effective
          communication. We also facilitate networking events and peer-learning
          opportunities to encourage the exchange of ideas and experiences among
          creative arts leaders. By creating a supportive and dynamic
          environment CALI helps creative arts professionals to not only excel
          in their current roles but also to become influential advocates for
          the creative arts.
        </p>
        <hr />
        <p>
          Our commitment to leadership development ensures that the creative
          arts sector in Kenya remains vibrant and resilient with leaders who
          are well-equipped to navigate the challenges and opportunities of the
          future. At CALI, we believe that strong leadership is the cornerstone
          of a thriving creative arts community and we are dedicated to
          nurturing the talents and ambitions of those who will shape its
          future.
        </p>
        <hr />
      </div>
    </PageLayout>
  );
}
