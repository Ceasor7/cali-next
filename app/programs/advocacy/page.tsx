import { PageLayout } from "../page-layout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Creative Arts Advocacy | CALI Institute Kenya",
  description:
    "CALI champions Kenya's creative arts sector through policy advocacy, public awareness campaigns, and cross-sector partnerships.",
  openGraph: {
    title: "Advocacy for Kenya's Creative Arts Sector | CALI",
    description:
      "CALI's initiatives to promote policy changes, funding, and public support for Kenya's creative arts community.",
    images: [
      {
        url: "https://www.cali.institute/programs/advocacy.jpg",
        width: 1200,
        height: 630,
        alt: "CALI Advocacy Program",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Advocacy for Kenya's Creative Arts Sector | CALI",
    description:
      "Promoting policy changes and public support for Kenya's vibrant creative arts community.",
    images: ["https://www.cali.institute/programs/advocacy.jpg"],
  },
};

export default function AdvocacyPage() {
  return (
    <PageLayout
      title="Advocacy and awareness"
      titleSpan="- raising initiatives  "
      imageSrc="/programs/advocacy.jpg"
    >
      <div className="space-y-5">
        <p>
          CALI&apos;s advocacy and awareness-raising initiatives are dedicated
          to elevating the importance of creative arts and culture in Kenya. Our
          programs aim to increase public awareness about the vital role of the
          creative arts, advocate for supportive policies and funding, foster
          partnerships and collaborations across various sectors to enhance the
          growth and development of the creative arts sector.
        </p>
        <hr />
        <p>
          We actively engage in campaigns that highlight the cultural, social
          and economic benefits of the creative arts, emphasizing how a vibrant
          arts community can enrich society and contribute to national
          development. By organizing events, public forums and media campaigns,
          we strive to educate the public and policymakers about the value of
          investing in the creative arts sector.
        </p>
        <hr />
        <p>
          Our advocacy efforts include working closely with government bodies,
          non-profit organizations and private sector partners to influence
          policy changes that support the creative arts. We advocate for
          increased funding, better infrastructure and more opportunities for
          artists and cultural practitioners. By presenting well-researched data
          and compelling arguments, we aim to shape a favorable environment for
          the creative arts to thrive.
        </p>
        <hr />
        <p>
          Building partnerships is a cornerstone of our advocacy strategy. We
          collaborate with educational institutions, businesses and
          international organizations to create a broad network of support for
          the creative arts. These partnerships enable us to launch joint
          initiatives, share resources and amplify our impact.
        </p>
        <hr />
        <p>
          At CALI, we are committed to ensuring that the creative arts receive
          the recognition and support they deserve. Through our advocacy and
          awareness-raising initiatives, we aim to create a sustainable and
          dynamic creative arts ecosystem in Kenya that benefits all members of
          society.
        </p>
        <hr />
      </div>
    </PageLayout>
  );
}
