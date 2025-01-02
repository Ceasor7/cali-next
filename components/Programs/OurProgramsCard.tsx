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
    <Card>
      <CardHeader className="flex flex-col items-center p-4 ">
        <Image
          src={imgPath}
          alt={programTitle}
          width={280}
          height={160}
          className=" rounded-md shadow-md "
        />
        <h2 className="text-xl font-semibold">{programTitle}</h2>
      </CardHeader>
      <CardContent>
        <p>{programDescription}</p>
      </CardContent>
    </Card>
  );
};

export default OurProgramsCard;
