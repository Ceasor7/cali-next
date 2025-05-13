import { ProgramBreadcrumb } from "@/components/program-breadcrumb";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

interface PageLayoutProps {
  title: string;
  titleSpan: string;
  imageSrc: string;
  children: React.ReactNode;
}

export function PageLayout({
  title,
  titleSpan,
  imageSrc,
  children,
}: PageLayoutProps) {
  return (
    <div className="font-[family-name:var(--font-montserrat)] max-w-5xl mx-auto px-4 py-8">
      <div className="py-24">
        <ProgramBreadcrumb />
        <h2 className="text-4xl text-center font-bold py-16">
          {title} <span className="text-[#cd2d00]">{titleSpan}</span>
        </h2>

        <div className="flex flex-col gap-8 items-center mb-12">
          <div className="w-full py-8">
            <Image
              src={imageSrc}
              alt={title}
              width={800}
              height={450}
              className="rounded-lg shadow-lg w-full h-auto object-cover"
              priority
            />
          </div>
          <div className="w-full space-y-4">{children}</div>
        </div>
        <Button className=" w-full p-8 text-lg">
          <a href="/contact">Reach us</a>
        </Button>
      </div>
    </div>
  );
}
