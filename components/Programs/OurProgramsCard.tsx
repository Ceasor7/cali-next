import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";

type Props = {
  imgPath: string;
  programTitle: string;
  programDescription: string;
};

const OurProgramsCard = ({
  imgPath,
  programTitle,
  programDescription,
}: Props) => {
  return (
    <Card className=" md:h-[450px] bg-[#1e1e1e] outline-none">
      <CardHeader className="flex flex-col items-center p-4 ">
        <Image
          src={imgPath}
          alt={programTitle}
          width={340}
          height={220}
          className=" rounded-md shadow-md "
        />
        <h2 className="text-xl font-semibold text-white uppercase">
          {programTitle}
        </h2>
      </CardHeader>
      <CardContent>
        <p className=" text-white text-center">{programDescription}</p>
      </CardContent>
    </Card>
  );
};

export default OurProgramsCard;
