import React from "react";

type Props = {
  coreTitle: string;
};

const ValuesCard = ({ coreTitle }: Props) => {
  return (
    <div className=" rounded-md shadow-md w-72 md:w-96 mx-auto p-10">
      <p className=" text-center">{coreTitle}</p>
    </div>
  );
};

export default ValuesCard;
