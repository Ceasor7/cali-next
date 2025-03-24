"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

type Props = {
  containerStyles: string;
  linkStyles: string;
  underLineStyles: string;
};

const links = [
  { path: "/#home", name: "home" },
  { path: "/#programs", name: "programs" },
  { path: "/#team", name: "our team" },
  { path: "/contact", name: "contact us" },
];

const Nav = ({ containerStyles, linkStyles, underLineStyles }: Props) => {
  const path = usePathname();
  return (
    <nav className={`${containerStyles} flex space-x-6 sm:space-x-10`}>
      {links.map((link, index) => (
        <Link
          href={link.path}
          key={index}
          className={`relative capitalize ${linkStyles} hover:text-primary transition-all`}
        >
          {link.path === `#${path}` && (
            <motion.span
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              transition={{ type: "tween" }}
              layoutId="underLine"
              className={underLineStyles}
            />
          )}
          {link.name}
          <span className="absolute left-0 top-full w-0 h-[2px] bg-primary transition-all duration-300 hover:w-full" />
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
