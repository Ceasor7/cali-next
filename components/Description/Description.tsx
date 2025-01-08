import Image from "next/image";
import React from "react";

const Description = () => {
  return (
    <div className=" py-5">
      <div>
        <h2 className="text-4xl text-center font-bold pb-6">
          About <span className="text-[#cd2d00]"> Us </span>
        </h2>
      </div>
      <div className=" justify-center items-center">
        <div className=" flex flex-col md:flex-row max-w-7xl mx-auto">
          <div className=" flex justify-center md:w-1/2 items-center">
            <Image
              src="/programs/mentorship.jpg"
              alt="About CALI"
              height={300}
              width={350}
            />
          </div>
          <div className=" px-3 md:w-1/2">
            <p>
              CALI is a non-profit organization that focuses on promoting arts
              management in the country. It provides research, training,
              education, and resources to empower individuals and organizations
              working in the arts sector. Their aim is to create a more vibrant
              and sustainable arts sector in Kenya by undertaking research and
              increasing access to resources, funding, and growth opportunities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
