import React from "react";
import AboutCard from "./AboutCard";

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
    <div>
      <div>
        <h2>About Us</h2>
      </div>
      <div>
        {aboutDescriptions.map((about, index) => (
          <AboutCard
            key={index}
            imgPath={about.imgPath}
            aboutTitle={about.aboutTitle}
            aboutDescription={about.aboutDescription}
          />
        ))}
      </div>
    </div>
  );
};

export default About;
