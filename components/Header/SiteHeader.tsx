"use client";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import Nav from "./Nav";
import { FiMenu, FiX } from "react-icons/fi";

const SiteHeader = () => {
  const [hideHeader, setHideHeader] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setHideHeader(true);
      } else if (currentScrollY < lastScrollY) {
        setHideHeader(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`${
        hideHeader
          ? "-translate-y-full"
          : "translate-y-0 py-6 dark:bg-transparent"
      } fixed top-0 left-0 w-full z-30 transition-transform duration-500 ${
        pathname === "/" ? "bg-[#fef9f5]" : "bg-white shadow-lg dark:bg-accent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <Logo />

          <nav
            className={`${
              menuOpen ? "block" : "hidden"
            } sm:flex absolute  sm:static top-full left-0 w-full sm:w-auto sm:gap-x-8 bg-white sm:bg-transparent shadow-lg sm:shadow-none p-4 sm:p-0`}
          >
            <Nav
              containerStyles="flex flex-col font-[family-name:var(--font-montserrat)] sm:flex-row sm:space-x-7 gap-y-4 sm:gap-y-0"
              linkStyles="relative hover:text-primary transition-all"
              underLineStyles="absolute left-0 top-full h-[2px] bg-primary w-full"
            />
          </nav>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="sm:hidden text-2xl focus:outline-none"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
