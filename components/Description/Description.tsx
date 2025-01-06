import Image from "next/image";
import React from "react";

const Description = () => {
  return (
    <div className=" justify-center items-center">
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-3 max-w-5xl mx-auto">
        <div className=" flex justify-center items-center">
          <Image
            src="/programs/mentorship.jpg"
            alt="About CALI"
            height={250}
            width={300}
          />
        </div>
        <div className=" text-center px-3">
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
  );
};

export default Description;
