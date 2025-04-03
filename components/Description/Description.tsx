import Image from "next/image";
import React from "react";

const Description = () => {
  return (
    <div className=" py-24">
      <h2 className="text-4xl text-center font-bold pb-3">
        About <span className="text-[#cd2d00]">Us</span>
      </h2>
      <div className=" flex items-center justify-center">
        <div className="max-w-5xl shadow-2xl p-12 rounded-lg flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2">
            <Image
              src="/degree14.svg"
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </div>

          <div className="w-full md:w-1/2 text-center md:text-left">
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
