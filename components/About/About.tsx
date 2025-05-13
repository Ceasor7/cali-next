"use client";
import React from "react";
import AboutCard from "./AboutCard";
import { motion } from "framer-motion";

type AboutDescription = {
  imgPath: string;
  aboutTitle: string;
  aboutDescription: string;
};

const aboutDescriptions: AboutDescription[] = [
  {
    imgPath: "/icons/rocket.png",
    aboutTitle: "Mission",
    aboutDescription:
      "CALI's mission is to support and empower individuals and organizations working in the arts sector by providing research, training, education, and resources to help build their capacity and effectiveness. We believe that a vibrant and sustainable arts sector is essential to Kenya's social and economic development, and we are committed to helping the sector thrive.",
  },
  {
    imgPath: "/icons/bullseye.png",
    aboutTitle: "Vision",
    aboutDescription:
      "CALI's vision is to create a dynamic and inclusive arts sector that promotes creativity, cultural diversity, and social and economic development. We envision a future in which the arts are valued and supported as a vital component of Kenyan society, and in which individuals and organizations working in the arts sector have the skills, resources, and support they need to achieve their full potential.",
  },
];

const About = () => {
  return (
    <div className="bg-[#cd7e01] py-32">
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl gap-5 mx-auto">
        {aboutDescriptions.map((about, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <AboutCard
              imgPath={about.imgPath}
              aboutTitle={about.aboutTitle}
              aboutDescription={about.aboutDescription}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default About;
