"use client";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaDiscord,
  FaGithub,
} from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-[#f8fafc] text-[#727986] py-8">
      <div className="container mx-auto px-16 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        {/* Left Section */}
        <div className="text-sm text-[#727986] text-center md:text-left">
          Located at Monash University Clayton Campus
        </div>

        {/* Middle Section: Social Icons */}
        <div className="flex space-x-4">
          <a
            href="mailto:japanese@monashclubs.org"
            className="hover:text-red-500 transition-colors"
          >
            <MdOutlineEmail className="h-5 w-5" />
          </a>
          <a
            href="https://www.facebook.com/MonashJapanese"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-500 transition-colors"
          >
            <FaFacebookF className="h-5 w-5" />
          </a>
          <a
            href="https://www.instagram.com/monashjapaneseclub/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-500 transition-colors"
          >
            <FaInstagram className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/company/monash-japanese-club/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-500 transition-colors"
          >
            <FaLinkedin className="h-5 w-5" />
          </a>
          <a
            href="https://discord.gg/7t6jyMgz3c"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-500 transition-colors"
          >
            <FaDiscord className="h-5 w-5" />
          </a>
          <a
            href="https://github.com/matthew-yau/mjc-website"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-500 transition-colors"
          >
            <FaGithub className="h-5 w-5" />
          </a>
        </div>

        {/* Right Section: Copyright */}
        <div className="text-sm text-[#727986] text-center md:text-right">
          © {new Date().getFullYear()} Monash Japanese Club. All Rights
          Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
