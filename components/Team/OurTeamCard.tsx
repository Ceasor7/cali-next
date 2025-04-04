import React from "react";
import { Card, CardDescription, CardHeader } from "@/components/ui/card";
import Image from "next/image";

type Props = {
  imgPath: string;
  teamName: string;
  teamTitle: string;
};

const OurTeamCard = ({ imgPath, teamName, teamTitle }: Props) => {
  return (
    <Card>
      <CardHeader className="flex flex-col items-center h-[350px] ">
        <Image
          src={imgPath}
          alt={teamName}
          width={200}
          height={160}
          className=" rounded-md mb-4"
        />
        <h2 className="text-xl text-center font-semibold">{teamName}</h2>
        <CardDescription>{teamTitle}</CardDescription>
      </CardHeader>
    </Card>
  );
};

export default OurTeamCard;
