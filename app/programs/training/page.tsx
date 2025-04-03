import { PageLayout } from "../page-layout";

export default function PublicationPage() {
  return (
    <PageLayout
      title="Training"
      titleSpan="Workshops"
      imageSrc="/programs/training.jpg"
    >
      <div className="space-y-5">
        <p>
          CALI&apos;s training workshops are designed to build essential skills
          in various critical areas of the creative arts sector. Our programs
          focus on creative arts management, fundraising, marketing and audience
          development. We achieve this through a series of hands-on workshops
          and masterclasses tailored to meet the needs of artists, creative arts
          managers, and cultural practitioners.
        </p>
        <hr />
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
        <hr />
        <p>
          At CALI, we are committed to nurturing talent and fostering a thriving
          creative arts ecosystem in Kenya. Through our workshops and
          masterclasses, we aim to equip individuals and organizations with the
          expertise to navigate the complexities of the creative arts industry
          and achieve their goals.
        </p>
        <hr />
      </div>
    </PageLayout>
  );
}
