import React from "react";

type Props = {
  coreTitle: string;
};

const ValuesCard = ({ coreTitle }: Props) => {
  return (
    <div className=" rounded-md shadow-md">
      <p>{coreTitle}</p>
    </div>
  );
};

export default ValuesCard;
