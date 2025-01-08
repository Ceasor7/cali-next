import React from "react";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook, FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

const page = () => {
  return (
    <div className="h-screen flex m-auto flex-col items-center overflow-x-hidden">
      <h3 className="font-palanquin text-center mt-14 text-4xl font-bold">
        Contact
        <span className="text-[#cd2d00]"> Us </span>
      </h3>
      <div>
        <p className="text-center mx-4 my-14 md:mx-40 text-wrap font-semibold font-montserrat">
          Reach out to CALI using any of our channels below. Please remember to
          state your name, contact information, and a clear description of how
          we can be of assistance. We will be glad to engage.
        </p>
      </div>
      <div>
        <FaFacebook />
        <FaInstagramSquare />
        <FaLinkedin />
        <FaSquareXTwitter />
        <IoMdMail />
      </div>
    </div>
  );
};

export default page;
