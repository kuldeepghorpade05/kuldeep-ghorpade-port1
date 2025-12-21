"use client";
// @flow strict
import { personalData } from '@/utils/data/personal-data';
import Link from 'next/link';
import { BiLogoLinkedin } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebook, FaStackOverflow, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { SiHashnode, SiLinktree, SiLeetcode } from "react-icons/si";
import { IoLogoGithub, IoMdCall } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import ContactForm from './contact-form';
import { motion } from "framer-motion";

function ContactSection() {
  return (
    <div id="contact" className="my-12 lg:my-16 relative mt-24 text-white">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="hidden lg:flex flex-col items-center absolute top-24 -right-8">
          <span className="bg-[#333333] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
            CONTACT
          </span>
          <span className="h-36 w-[2px] bg-[#333333]"></span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          <ContactForm />
          <div className="lg:w-full">
            <div className="border-[#333333] relative rounded-lg border bg-[#242424] overflow-hidden shadow-2xl">
              <div className="flex flex-row bg-[#333333] px-4 py-2 items-center justify-between">
                <div className="flex flex-row space-x-2">
                  <div className="h-3 w-3 rounded-full bg-red-400"></div>
                  <div className="h-3 w-3 rounded-full bg-orange-400"></div>
                  <div className="h-3 w-3 rounded-full bg-green-200"></div>
                </div>
                <div className="text-xs text-gray-400 font-mono">bash — 80x24</div>
              </div>
              <div className="p-4 lg:p-8 font-mono">
                <div className="flex flex-row mb-8">
                  <span className="text-green-400 mr-2">kuldeep@portfolio:~$</span>
                  <span className="text-white">finger kuldeep</span>
                </div>
                <div className="flex flex-col gap-5 lg:gap-9">
                  <p className="text-sm md:text-lg flex items-center gap-3 group">
                    <MdAlternateEmail
                      className="bg-[#8b98a5] p-2 rounded-full group-hover:bg-[#16f2b3] group-hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                      size={36}
                    />
                    <span className="text-gray-200 group-hover:text-white transition-colors">{personalData.email}</span>
                  </p>
                  <p className="text-sm md:text-lg flex items-center gap-3 group">
                    <IoMdCall
                      className="bg-[#8b98a5] p-2 rounded-full group-hover:bg-[#16f2b3] group-hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                      size={36}
                    />
                    <span className="text-gray-200 group-hover:text-white transition-colors">
                      {personalData.phone}
                    </span>
                  </p>
                  <p className="text-sm md:text-lg flex items-center gap-3 group">
                    <CiLocationOn
                      className="bg-[#8b98a5] p-2 rounded-full group-hover:bg-[#16f2b3] group-hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                      size={36}
                    />
                    <span className="text-gray-200 group-hover:text-white transition-colors">
                      {personalData.address}
                    </span>
                  </p>
                </div>
                <div className="mt-8 lg:mt-16 flex items-center gap-5 lg:gap-10">
                  {personalData.github && (
                    <Link target="_blank" href={personalData.github}>
                      <IoLogoGithub
                        className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                        size={48}
                      />
                    </Link>
                  )}
                  {personalData.linkedIn && (
                    <Link target="_blank" href={personalData.linkedIn}>
                      <BiLogoLinkedin
                        className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                        size={48}
                      />
                    </Link>
                  )}
                  {personalData.twitter && (
                    <Link target="_blank" href={personalData.twitter}>
                      <FaXTwitter
                        className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                        size={48}
                      />
                    </Link>
                  )}
                  {personalData.leetcode && (
                    <Link target="_blank" href={personalData.leetcode}>
                      <SiLeetcode
                        className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                        size={48}
                      />
                    </Link>
                  )}
                  {personalData.hashnode && (
                    <Link target="_blank" href={personalData.hashnode}>
                      <SiHashnode
                        className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                        size={48}
                      />
                    </Link>
                  )}
                  {personalData.instagram && (
                    <Link target="_blank" href={personalData.instagram}>
                      <FaInstagram
                        className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                        size={48}
                      />
                    </Link>
                  )}
                  {personalData.linktree && (
                    <Link target="_blank" href={personalData.linktree}>
                      <SiLinktree
                        className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                        size={48}
                      />
                    </Link>
                  )}
                </div>
                <div className="flex items-center mt-8">
                  <span className="inline-block w-2 h-5 bg-[#16f2b3] animate-pulse"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactSection;