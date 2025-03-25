"use client";

import React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "../ui/button";
import Image from "next/image";

type Event = {
  title: string;
  description: string;
  image: string;
};

const events: Event[] = [
  {
    title: "Advocacy",
    description:
      "Our programs aim to increase public awareness about the vital role of the creative arts, advocate for supportive policies and funding, foster partnerships and collaborations across various sectors to enhance the growth and development of the creative arts sector.",
    image: "/programs/advocacy.jpg",
  },
  {
    title: "Research",
    description:
      "At CALI, our research program is committed to fostering evidence-based decision-making and deepening the knowledge and understanding of Kenya's dynamic creative arts sector. ",
    image: "/programs/research.jpg",
  },
  {
    title: "Leadership",
    description:
      "CALI's leadership development programs are dedicated to empowering both emerging and established creative arts leaders. Our initiatives are designed to enhance their skills and knowledge, deepen their understanding of the creative arts sector and foster valuable networks and connections with other creative arts professionals.  ",
    image: "/programs/leadership.jpg",
  },
  {
    title: "Mentorship",
    description:
      "CALI's mentorship and coaching programs are designed to support emerging creative arts leaders by pairing them with experienced mentors from the creative arts sector. Through one-on-one guidance and support these programs aim to help emerging leaders develop their skills, build their professional networks and navigate the unique challenges of working in the creative arts sector. ",
    image: "/programs/mentorship.jpg",
  },
  {
    title: "Publications",
    description:
      "At CALI, we are proud to offer a diverse range of publications designed to support the Competency-Based Curriculum (CBC) and promote the creative arts in Kenya. Our extensive collection includes books specifically tailored to the CBC framework providing valuable resources for educators and students alike. ",
    image: "/programs/mentorship.jpg",
  },
  {
    title: "Training",
    description:
      "CALI's training workshops are designed to build essential skills in various critical areas of the creative arts sector. Our programs focus on creative arts management, fundraising, marketing and audience development. We achieve this through a series of hands-on workshops and masterclasses tailored to meet the needs of artists, creative arts managers, and cultural practitioners. ",
    image: "/programs/training.jpg",
  },
];

const CarouselComponent: React.FC = () => {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 4000,
        }),
      ]}
    >
      <CarouselContent>
        {events.map((event, index) => (
          <CarouselItem key={index}>
            <div className="flex flex-col md:flex-row gap-4 items-center p-4">
              <div className="flex-1">
                <div className="p-6 space-y-4">
                  <h2 className="text-4xl text-[#cd2d00] font-bold">
                    {event.title}
                  </h2>
                  <p>{event.description}</p>
                  <Button className="hover:bg-[#cc2c00]">Learn More</Button>
                </div>
              </div>

              <div className="flex-shrink-0">
                <Image
                  src={event.image}
                  alt={event.title}
                  height={500}
                  width={500}
                  className="h-[380px] w-[380px] object-cover rounded"
                />
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default CarouselComponent;
