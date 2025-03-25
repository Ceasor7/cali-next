import React from "react";

type Props = {
  coreTitle: string;
};

const ValuesCard = ({ coreTitle }: Props) => {
  return (
    <div className=" rounded-xl shadow-2xl justify-items-center items-center w-72 md:w-96 mx-auto p-10">
      <p className=" text-center font-bold">{coreTitle}</p>
    </div>
  );
};

export default ValuesCard;
