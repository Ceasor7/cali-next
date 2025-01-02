import React from "react";
import ValuesCard from "./ValuesCard";

type CoreDescription = {
  coreTitle: string;
};

const coreDescriptions: CoreDescription[] = [
  {
    coreTitle: "Excellence",
  },
  {
    coreTitle: "Creativity",
  },
  {
    coreTitle: "Inclusivity",
  },
  {
    coreTitle: "Collaboration",
  },
  {
    coreTitle: "Accountability",
  },
  {
    coreTitle: "Sustainability",
  },
];

const Values = () => {
  return (
    <div className=" py-14">
      <h2 className="text-4xl text-center font-bold">
        Core <span className="text-[#cd2d00]"> Values </span>
      </h2>
      <div className=" max-w-5xl pt-3 container mx-auto">
        <div className=" grid grid-cols-1 sm:grid-cols-2 gap-5">
          {coreDescriptions.map((core, index) => (
            <ValuesCard key={index} coreTitle={core.coreTitle} />
          ))}
        </div>
        <div>
          <p className=" pt-5 container mx-auto px-4 text-wrap">
            We strive for excellence in all aspects of our work, encouraging and
            supporting creative thinking and innovation. We promote diversity,
            equity, and inclusion in the arts, creating a welcoming and
            inclusive environment for all participants in our programs and
            initiatives. CALI believes in the power of collaboration and
            partnership to achieve common goals, taking responsibility for their
            actions and decisions and working transparently and accountability.
            Finally, we recognize the importance of sustainability in the arts
            sector and promote practices that ensure the long-term viability and
            resilience of the arts in Kenya.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Values;
