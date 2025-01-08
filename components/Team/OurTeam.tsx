"use client";

import React, { useState } from "react";
import OurTeamCard from "./OurTeamCard";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaTimes,
  FaInstagramSquare,
} from "react-icons/fa";
import { Button } from "../ui/button";

type TeamMember = {
  imgPath: string;
  teamName: string;
  teamTitle: string;
  description: string;
  socialLinks: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    instagram?: string;
  };
};

const teamMembers: TeamMember[] = [
  {
    imgPath: "/team/kevin.jpg",
    teamName: "Kevin Kimani Kahuro",
    teamTitle: "Chief Executive Officer",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ",
    socialLinks: {
      facebook: "https://facebook.com/",
      twitter: "https://twitter.com/",
      linkedin: "https://linkedin.com/in/",
      instagram: "https://instgram.com/",
    },
  },
  {
    imgPath: "/team/shikuku.jpg",
    teamName: "Dr. Emmanuel Shikuku",
    teamTitle: "Head of Research and Training",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    socialLinks: {
      facebook: "https://facebook.com/",
      twitter: "https://twitter.com/",
      linkedin: "https://linkedin.com/in/",
      instagram: "https://instgram.com/",
    },
  },
  {
    imgPath: "/team/faith.jpg",
    teamName: "Faith Mwende",
    teamTitle: "Legal and advocacy",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    socialLinks: {
      facebook: "https://facebook.com/",
      twitter: "https://twitter.com/",
      linkedin: "https://linkedin.com/in/",
      instagram: "https://instgram.com/",
    },
  },
  {
    imgPath: "/team/njoroge.jpg",
    teamName: "Reiner Njoroge",
    teamTitle: "Admin & Research Officer",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    socialLinks: {
      facebook: "https://facebook.com/",
      twitter: "https://twitter.com/",
      linkedin: "https://linkedin.com/in/",
      instagram: "https://instgram.com/",
    },
  },
];

const OurTeam = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const openModal = (member: TeamMember) => {
    setSelectedMember(member);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMember(null);
  };

  return (
    <div className=" py-7 max-w-7xl mx-auto">
      <h2 className="text-4xl text-center mb-3 font-bold">
        Our <span className="text-[#cd2d00]"> Team </span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-center justify-center">
        {teamMembers.map((member, index) => (
          <div key={index} className="mx-4 md:mx-2">
            <OurTeamCard
              imgPath={member.imgPath}
              teamName={member.teamName}
              teamTitle={member.teamTitle}
            />
            <Button
              onClick={() => openModal(member)}
              className="mt-2 mx-auto flex justify-center items-center"
            >
              Show More
            </Button>
          </div>
        ))}

        {isModalOpen && selectedMember && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
            onClick={closeModal}
          >
            <div
              className="bg-white w-11/12 md:w-2/3 lg:w-1/3 p-6 rounded-lg relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-600 hover:text-black"
              >
                <FaTimes size={24} />
              </button>
              <h2 className="text-2xl font-bold mb-4">
                {selectedMember.teamName}
              </h2>
              <h3 className="text-xl text-gray-700 mb-4">
                {selectedMember.teamTitle}
              </h3>
              <p className="text-gray-600 mb-6">{selectedMember.description}</p>
              <div className="flex space-x-4">
                {selectedMember.socialLinks.facebook && (
                  <a
                    href={selectedMember.socialLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700"
                  >
                    <FaFacebook size={24} />
                  </a>
                )}
                {selectedMember.socialLinks.twitter && (
                  <a
                    href={selectedMember.socialLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400"
                  >
                    <FaTwitter size={24} />
                  </a>
                )}
                {selectedMember.socialLinks.linkedin && (
                  <a
                    href={selectedMember.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600"
                  >
                    <FaLinkedin size={24} />
                  </a>
                )}
                {selectedMember.socialLinks.instagram && (
                  <a
                    href={selectedMember.socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-200"
                  >
                    <FaInstagramSquare size={24} />
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OurTeam;
