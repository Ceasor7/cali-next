"use client";
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
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#232323] py-10">
      <div className="flex flex-col max-w-5xl mx-auto space-y-10">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 md:space-x-10">
          <div className="flex justify-center items-center">
            <Image
              src="/icons/WhiteLogo.png"
              alt="CALI logo"
              width={90}
              height={90}
            />
          </div>
          <div className="max-w-lg text-center">
            <p className="text-white px-4 py-2">
              Thank you for considering CALI as your partner in creative arts
              leadership development. We look forward to working with you to
              help you achieve your leadership goals and make a positive impact
              on the world.
            </p>
          </div>
          <div className="flex items-center justify-center gap-6">
            <a
              href="https://www.facebook.com/profile.php?id=61552732195123"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookSquare color="#cd2d00" size={30} />
            </a>
            <a
              href="https://instagram.com/cali.institute?igshid=MzRlODBiNWFlZA=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagramSquare color="#cd2d00" size={30} />
            </a>
            <a
              href="https://x.com/Caliinstitute?t=oMH14klkkCMT8iKhHaxYCw&s=08"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSquareXTwitter color="#cd2d00" size={30} />
            </a>
            <a
              href="https://www.linkedin.com/in/creative-arts-management-institute-cali-58b93a297/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin color="#cd2d00" size={30} />
            </a>
          </div>
        </div>
        <div className="flex flex-row gap-2 text-center justify-center items-center py-5 cursor-pointer">
          <p className="text-white">Design by Creative Age</p>
          <ArrowUpIcon color="white" onClick={scrollToTop} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
