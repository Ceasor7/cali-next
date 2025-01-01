import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
    <div>
      <Card>
        <CardHeader>
          <Image src={imgPath} alt={programTitle} width={280} height={160} />
          <CardTitle>{programTitle}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{programDescription}</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default OurProgramsCard;
