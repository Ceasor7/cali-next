import { ArrowUpIcon } from "lucide-react";
import Image from "next/image";
import React from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#232323] py-10">
      <div className=" flex flex-col max-w-5xl mx-auto">
        <div className=" flex flex-col md:flex-row justify-between">
          <div className=" flex justify-center items-center">
            <Image
              src="/icons/WhiteLogo.png"
              alt="CALI logo"
              width={90}
              height={90}
            />
          </div>
          <div>
            <p className=" text-white">
              Thank you for considering CALI as your partner in creative arts
              leadership development. We look forward to working with you to
              help you achieve your leadership goals and make a positive impact
              on the world.
            </p>
          </div>
          <div className=" flex flex-row gap-2">
            <FaFacebookSquare color="red" size={40} />
            <FaInstagramSquare color="red" size={40} />
            <FaSquareXTwitter color="red" size={40} />
            <FaLinkedin color="red" size={40} />
          </div>
        </div>
        <div className=" flex flex-row gap-2 text-center justify-center items-center py-5">
          <p className=" text-white">Design by Creative Age</p>
          <ArrowUpIcon color="white" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
