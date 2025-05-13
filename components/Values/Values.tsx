"use client";
import React from "react";
import ValuesCard from "./ValuesCard";
import { motion } from "framer-motion";

type CoreDescription = {
  coreTitle: string;
};

const coreDescriptions: CoreDescription[] = [
  { coreTitle: "Excellence" },
  { coreTitle: "Creativity" },
  { coreTitle: "Inclusivity" },
  { coreTitle: "Collaboration" },
  { coreTitle: "Accountability" },
  { coreTitle: "Sustainability" },
];

const Values = () => {
  return (
    <div className=" py-32">
      <h2 className="text-4xl text-center font-bold">
        Core <span className="text-[#cd2d00]"> Values </span>
      </h2>
      <div className="max-w-5xl pt-3 container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {coreDescriptions.map((core, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <ValuesCard coreTitle={core.coreTitle} />
            </motion.div>
          ))}
        </div>
        <div>
          <p className=" pt-16 container mx-auto px-4 text-center">
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
