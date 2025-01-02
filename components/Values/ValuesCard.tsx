import React from "react";

type Props = {
  coreTitle: string;
};

const ValuesCard = ({ coreTitle }: Props) => {
  return (
    <div className=" rounded-md shadow-md max-w-60 mx-auto p-10">
      <p className=" text-center">{coreTitle}</p>
    </div>
  );
};

export default ValuesCard;
