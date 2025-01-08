"use client";
import React from "react";
import OurProgramsCard from "./OurProgramsCard";
import { motion } from "framer-motion";

type ProgramDescription = {
  imgPath: string;
  programTitle: string;
  programDescription: string;
};

const programDescriptions: ProgramDescription[] = [
  {
    imgPath: "/programs/advocacy.jpg",
    programTitle: "Advocacy",
    programDescription:
      "CALI's advocacy and awareness-raising initiatives aim to raise public awareness of the importance of the arts and culture in Kenya, advocate for policies and funding that support the arts, and build partnerships and collaborations across sectors to support the growth and development of the arts sector.",
  },
  {
    imgPath: "/programs/training.jpg",
    programTitle: "Training Workshops",
    programDescription:
      "CALI provides training workshops for artists and cultural practitioners to enhance their skills, knowledge, and capacity to succeed in the arts sector.",
  },
  {
    imgPath: "/programs/leadership.jpg",
    programTitle: "Leadership Development",
    programDescription:
      "CALI’s leadership programs aim to nurture and empower future leaders in the arts sector through mentorship, coaching, and networking opportunities.",
  },
  {
    imgPath: "/programs/research.jpg",
    programTitle: "Research",
    programDescription:
      "Our research program aims to gather and analyze data on the arts sector in Kenya, providing insights and information to inform policies and practices.",
  },
  {
    imgPath: "/programs/mentorship.jpg",
    programTitle: "Mentorship & Coaching",
    programDescription:
      "CALI offers mentorship and coaching to support artists in achieving their goals, addressing challenges, and growing their careers.",
  },
  {
    imgPath: "/programs/mentorship.jpg",
    programTitle: "Publications",
    programDescription:
      "At CALI, we are proud to offer a diverse range of publications designed to support the Competency-Based Curriculum (CBC) and promote the creative arts in Kenya. ",
  },
];

const OurPrograms = () => {
  return (
    <div className="px-4 bg-[#1e1e1e] py-8">
      <div>
        <h2 className="text-4xl text-white text-center font-bold">
          Our Programs
        </h2>
        <p className="py-5 text-center text-white xl:max-w-[500px] mx-auto">
          CALI offers several programs to support the development of the arts
          sector in Kenya. These programs include training workshops, leadership
          development programs, mentorship and coaching, advocacy and
          awareness-raising initiatives, and a research program.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-center justify-center max-w-7xl mx-auto">
        {programDescriptions.map((program, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.2,
              ease: "easeOut",
            }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <OurProgramsCard
              imgPath={program.imgPath}
              programTitle={program.programTitle}
              programDescription={program.programDescription}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default OurPrograms;
