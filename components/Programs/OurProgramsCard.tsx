import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type Props = {
  imgPath: string;
  programTitle: string;
  programDescription: string;
  href: string;
};

const OurProgramsCard = ({
  imgPath,
  programTitle,
  programDescription,
  href,
}: Props) => {
  return (
    <Card className="md:h-[480px] bg-[#1e1e1e] outline-none flex flex-col group">
      <Link href={href} passHref legacyBehavior>
        <a className="flex flex-col flex-grow">
          <CardHeader className="flex flex-col items-center p-4">
            <Image
              src={imgPath}
              alt={programTitle}
              width={340}
              height={220}
              className="rounded-md shadow-md"
            />
            <h2 className="text-xl font-semibold pt-3 text-white uppercase">
              {programTitle}
            </h2>
          </CardHeader>
          <CardContent className="flex-grow">
            <p className="text-white text-center">{programDescription}</p>
          </CardContent>
        </a>
      </Link>
      <CardFooter className="justify-center pb-6">
        <Link href={href} passHref legacyBehavior>
          <Button className="hover:bg-[#cc2c00]" asChild>
            <a>Learn More</a>
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default OurProgramsCard;
