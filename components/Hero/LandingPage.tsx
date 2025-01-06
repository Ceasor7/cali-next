import React from "react";
import CarouselComponent from "./CarouselComponent";

const LandingPage = () => {
  return (
    <div className=" max-w-5xl mx-auto pt-28">
      <h2 className=" text-xl font-bold pl-9 md:pl-0">
        Building a sustainable future for the arts
      </h2>
      <CarouselComponent />
    </div>
  );
};

export default LandingPage;
