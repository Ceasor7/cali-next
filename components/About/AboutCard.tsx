import Image from "next/image";
import React from "react";

type Props = {
  imgPath: string;
  aboutTitle: string;
  aboutDescription: string;
};

const AboutCard = ({ imgPath, aboutDescription, aboutTitle }: Props) => {
  return (
    <div className=" rounded-lg shadow-lg p-10">
      <div className="w-12 h-12 flex justify-center items-center outline outline-2 outline-white rounded-full">
        <Image src={imgPath} alt={aboutTitle} height={30} width={30} />
      </div>
      <div className=" flex flex-col">
        <h2 className="mt-5 font-palanquin text-2xl leading-normal font-bold text-black">
          {aboutTitle}
        </h2>
        <p className="mt-3 break-words font-montserrat text-base leading-normal">
          {aboutDescription}
        </p>
      </div>
    </div>
  );
};

export default AboutCard;
