import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <div className=" cursor-pointer">
      <Link href="/">
        <Image src="/logoff.svg" alt="CALI logo" width={220} height={190} />
      </Link>
    </div>
  );
};

export default Logo;
