import React from "react";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

const page = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center text-center px-6">
      <h3 className="font-palanquin text-4xl font-bold mb-6">
        Contact <span className="text-[#cd2d00]">Us</span>
      </h3>
      <p className="max-w-2xl text-lg font-semibold font-montserrat mb-8">
        Reach out to CALI using any of our channels below. Please remember to
        state your name, contact information, and a clear description of how we
        can be of assistance. We will be glad to engage.
      </p>
      <div className="flex items-center justify-center gap-6">
        <a
          href="https://www.facebook.com/profile.php?id=61552732195123"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookSquare color="#cd2d00" size={40} />
        </a>
        <a
          href="https://instagram.com/cali.institute?igshid=MzRlODBiNWFlZA=="
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagramSquare color="#cd2d00" size={40} />
        </a>
        <a
          href="https://x.com/Caliinstitute?t=oMH14klkkCMT8iKhHaxYCw&s=08"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaSquareXTwitter color="#cd2d00" size={40} />
        </a>
        <a
          href="https://www.linkedin.com/in/creative-arts-management-institute-cali-58b93a297/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin color="#cd2d00" size={40} />
        </a>
        <a href="mailto:contact@cali.institute">
          <IoMdMail color="#cd2d00" size={40} />
        </a>
      </div>
    </div>
  );
};

export default page;
