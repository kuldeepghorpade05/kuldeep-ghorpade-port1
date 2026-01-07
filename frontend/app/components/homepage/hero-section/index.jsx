"use client";
// @flow strict

import React from 'react';

import { personalData } from "@/utils/data/personal-data";
import { skillsData } from "@/utils/data/skills";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebook, FaTwitterSquare } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { SiLeetcode, SiHashnode, SiLinktree } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import Typewriter from 'typewriter-effect';

import { useState, useEffect } from "react";

function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-between py-4 lg:py-12">
      <Image
        src="/hero.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute -top-[98px] -z-10"
      />

      <div className="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-12 gap-y-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 lg:order-1 flex flex-col items-start justify-center p-2 pb-20 md:pb-10 lg:pt-10"
        >
          <h1 className="text-3xl font-bold leading-10 text-white md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
            Kuldeep Ghorpade - Backend & Cloud Engineer
          </h1>
          <p className="text-xl mt-4 text-gray-300">
            Python & Java Developer | AWS Cloud Specialist | DevOps Engineer
          </p>

          <div className="my-12 flex items-center gap-5">
            {personalData.github && (
              <Link
                href={personalData.github}
                target='_blank'
                className="transition-all text-pink-500 hover:scale-125 duration-300"
              >
                <BsGithub size={30} />
              </Link>
            )}
            {personalData.linkedIn && (
              <Link
                href={personalData.linkedIn}
                target='_blank'
                className="transition-all text-pink-500 hover:scale-125 duration-300"
              >
                <BsLinkedin size={30} />
              </Link>
            )}
            {personalData.facebook && (
              <Link
                href={personalData.facebook}
                target='_blank'
                className="transition-all text-pink-500 hover:scale-125 duration-300"
              >
                <FaFacebook size={30} />
              </Link>
            )}
            {personalData.leetcode && (
              <Link
                href={personalData.leetcode}
                target='_blank'
                className="transition-all text-pink-500 hover:scale-125 duration-300"
              >
                <SiLeetcode size={30} />
              </Link>
            )}
            {personalData.twitter && (
              <Link
                href={personalData.twitter}
                target='_blank'
                className="transition-all text-pink-500 hover:scale-125 duration-300"
              >
                <FaTwitterSquare size={30} />
              </Link>
            )}
            {personalData.hashnode && (
              <Link
                href={personalData.hashnode}
                target='_blank'
                className="transition-all text-pink-500 hover:scale-125 duration-300"
              >
                <SiHashnode size={30} />
              </Link>
            )}
            {personalData.instagram && (
              <Link
                href={personalData.instagram}
                target='_blank'
                className="transition-all text-pink-500 hover:scale-125 duration-300"
              >
                <FaInstagram size={30} />
              </Link>
            )}
            {personalData.linktree && (
              <Link
                href={personalData.linktree}
                target='_blank'
                className="transition-all text-pink-500 hover:scale-125 duration-300"
              >
                <SiLinktree size={30} />
              </Link>
            )}
          </div>

          <div className="flex items-center gap-3">
            <Link href="#contact" className="relative group">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="absolute -inset-0.5 bg-gradient-to-r from-violet-600 to-pink-500 rounded-full blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"
              ></motion.div>
              <button className="relative px-3 text-xs md:px-8 py-3 md:py-4 bg-[#0d1224] rounded-full border border-violet-500/50 text-center md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out md:font-semibold flex items-center gap-1 hover:gap-3 overflow-hidden">
                <span className="relative z-10">Contact me</span>
                <RiContactsFill size={16} className="relative z-10" />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-violet-600 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </button>
            </Link>

            <Link
              target="_blank"
              href={personalData.resume}
              className="relative group"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 p-[1px] transition-all duration-300"
              >
                <div className="flex items-center gap-1 hover:gap-3 rounded-full bg-[#0d1224] px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out group-hover:bg-transparent md:font-semibold">
                  <span>Get Resume</span>
                  <MdDownload size={16} />
                </div>
              </motion.div>
            </Link>
          </div>

        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          className="order-1 lg:order-2 border-[#333333] relative rounded-lg border bg-[#242424]"
        >
          <div className="flex flex-row">
            <div className="h-[1px] w-full bg-[#333333]"></div>
            <div className="h-[1px] w-full bg-[#333333]"></div>
          </div>
          <div className="px-4 lg:px-8 py-5">
            <div className="flex flex-row space-x-2">
              <div className="h-3 w-3 rounded-full bg-red-400"></div>
              <div className="h-3 w-3 rounded-full bg-orange-400"></div>
              <div className="h-3 w-3 rounded-full bg-green-200"></div>
            </div>
          </div>
          <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
            {mounted ? (
              <motion.code
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.1,
                    },
                  },
                }}
                className="font-mono text-xs md:text-sm lg:text-base"
              >
                <motion.div
                  variants={{
                    hidden: { opacity: 0, x: -10 },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: { duration: 0.5 }
                    },
                    shimmer: {
                      opacity: [1, 0.7, 1],
                      transition: {
                        repeat: Infinity,
                        duration: 3,
                        ease: "easeInOut",
                        delay: 0
                      }
                    }
                  }}
                  animate={["visible", "shimmer"]}
                  className="blink"
                >
                  <span className="mr-2 text-pink-500">const</span>
                  <span className="mr-2 text-white">coder</span>
                  <span className="mr-2 text-pink-500">=</span>
                  <span className="text-gray-400">{'{'}</span>
                </motion.div>
                <motion.div
                  variants={{
                    hidden: { opacity: 0, x: -10 },
                    visible: { opacity: 1, x: 0 },
                    shimmer: {
                      opacity: [1, 0.8, 1],
                      transition: {
                        repeat: Infinity,
                        duration: 4,
                        ease: "easeInOut",
                        delay: 0.2
                      }
                    }
                  }}
                  animate={["visible", "shimmer"]}
                >
                  <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
                  <span className="text-gray-400">{`'`}</span>
                  <span className="text-amber-300">{personalData.name}</span>
                  <span className="text-gray-400">{`',`}</span>
                </motion.div>
                <motion.div
                  variants={{
                    hidden: { opacity: 0, x: -10 },
                    visible: { opacity: 1, x: 0 },
                    shimmer: {
                      opacity: [1, 0.8, 1],
                      transition: {
                        repeat: Infinity,
                        duration: 4,
                        ease: "easeInOut",
                        delay: 0.4
                      }
                    }
                  }}
                  animate={["visible", "shimmer"]}
                  className="ml-4 lg:ml-8 mr-2"
                >
                  <span className=" text-white">skills:</span>
                  <span className="text-gray-400">{`['`}</span>
                  {
                    skillsData.map((skill, i) => (
                      <React.Fragment key={i}>
                        <span className="text-amber-300">{skill}</span>
                        {
                          i !== skillsData.length - 1 &&
                          <span className="text-gray-400">{"', '"}</span>
                        }
                      </React.Fragment>
                    ))
                  }
                  <span className="text-gray-400">{"'],"}</span>
                </motion.div>
                <motion.div
                  variants={{
                    hidden: { opacity: 0, x: -10 },
                    visible: { opacity: 1, x: 0 },
                    shimmer: {
                      opacity: [1, 0.8, 1],
                      transition: {
                        repeat: Infinity,
                        duration: 4,
                        ease: "easeInOut",
                        delay: 0.6
                      }
                    }
                  }}
                  animate={["visible", "shimmer"]}
                >
                  <span className="ml-4 lg:ml-8 mr-2 text-white">hardWorker:</span>
                  <span className="text-orange-400">true</span>
                  <span className="text-gray-400">,</span>
                </motion.div>
                <motion.div
                  variants={{
                    hidden: { opacity: 0, x: -10 },
                    visible: { opacity: 1, x: 0 },
                    shimmer: {
                      opacity: [1, 0.8, 1],
                      transition: {
                        repeat: Infinity,
                        duration: 4,
                        ease: "easeInOut",
                        delay: 0.8
                      }
                    }
                  }}
                  animate={["visible", "shimmer"]}
                >
                  <span className="ml-4 lg:ml-8 mr-2 text-white">quickLearner:</span>
                  <span className="text-orange-400">true</span>
                  <span className="text-gray-400">,</span>
                </motion.div>
                <motion.div
                  variants={{
                    hidden: { opacity: 0, x: -10 },
                    visible: { opacity: 1, x: 0 },
                    shimmer: {
                      opacity: [1, 0.8, 1],
                      transition: {
                        repeat: Infinity,
                        duration: 4,
                        ease: "easeInOut",
                        delay: 1.0
                      }
                    }
                  }}
                  animate={["visible", "shimmer"]}
                >
                  <span className="ml-4 lg:ml-8 mr-2 text-white">problemSolver:</span>
                  <span className="text-orange-400">true</span>
                  <span className="text-gray-400">,</span>
                </motion.div>
                <motion.div
                  variants={{
                    hidden: { opacity: 0, x: -10 },
                    visible: { opacity: 1, x: 0 },
                    shimmer: {
                      opacity: [1, 0.8, 1],
                      transition: {
                        repeat: Infinity,
                        duration: 4,
                        ease: "easeInOut",
                        delay: 1.2
                      }
                    }
                  }}
                  animate={["visible", "shimmer"]}
                >
                  <span className="ml-4 lg:ml-8 mr-2 text-green-400">hireable:</span>
                  <span className="text-orange-400">function</span>
                  <span className="text-gray-400">{'() {'}</span>
                </motion.div>
                <motion.div
                  variants={{
                    hidden: { opacity: 0, x: -10 },
                    visible: { opacity: 1, x: 0 },
                    shimmer: {
                      opacity: [1, 0.8, 1],
                      transition: {
                        repeat: Infinity,
                        duration: 4,
                        ease: "easeInOut",
                        delay: 1.4
                      }
                    }
                  }}
                  animate={["visible", "shimmer"]}
                >
                  <span className="ml-8 lg:ml-16 mr-2 text-orange-400">return</span>
                  <span className="text-gray-400">{`(`}</span>
                </motion.div>
                <motion.div
                  variants={{
                    hidden: { opacity: 0, x: -10 },
                    visible: { opacity: 1, x: 0 },
                    shimmer: {
                      opacity: [1, 0.8, 1],
                      transition: {
                        repeat: Infinity,
                        duration: 4,
                        ease: "easeInOut",
                        delay: 1.6
                      }
                    }
                  }}
                  animate={["visible", "shimmer"]}
                >
                  <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                  <span className="mr-2 text-white">hardWorker</span>
                  <span className="text-amber-300">&amp;&amp;</span>
                </motion.div>
                <motion.div
                  variants={{
                    hidden: { opacity: 0, x: -10 },
                    visible: { opacity: 1, x: 0 },
                    shimmer: {
                      opacity: [1, 0.8, 1],
                      transition: {
                        repeat: Infinity,
                        duration: 4,
                        ease: "easeInOut",
                        delay: 1.8
                      }
                    }
                  }}
                  animate={["visible", "shimmer"]}
                >
                  <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                  <span className="mr-2 text-white">problemSolver</span>
                  <span className="text-amber-300">&amp;&amp;</span>
                </motion.div>
                <motion.div
                  variants={{
                    hidden: { opacity: 0, x: -10 },
                    visible: { opacity: 1, x: 0 },
                    shimmer: {
                      opacity: [1, 0.8, 1],
                      transition: {
                        repeat: Infinity,
                        duration: 4,
                        ease: "easeInOut",
                        delay: 2.0
                      }
                    }
                  }}
                  animate={["visible", "shimmer"]}
                >
                  <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                  <span className="mr-2 text-white">skills.length</span>
                  <span className="mr-2 text-amber-300">&gt;=</span>
                  <span className="text-orange-400">5</span>
                </motion.div>
                <motion.div variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }} animate="visible"><span className="ml-8 lg:ml-16 mr-2 text-gray-400">{`);`}</span></motion.div>
                <motion.div variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }} animate="visible"><span className="ml-4 lg:ml-8 text-gray-400">{`};`}</span></motion.div>
                <motion.div variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }} animate="visible"><span className="text-gray-400">{`};`}</span></motion.div>
              </motion.code>
            ) : (
              <code className="font-mono text-xs md:text-sm lg:text-base">
                <div className="blink">
                  <span className="mr-2 text-pink-500">const</span>
                  <span className="mr-2 text-white">coder</span>
                  <span className="mr-2 text-pink-500">=</span>
                  <span className="text-gray-400">{'{'}</span>
                </div>
                <div>
                  <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
                  <span className="text-gray-400">{`'`}</span>
                  <span className="text-amber-300">{personalData.name}</span>
                  <span className="text-gray-400">{`',`}</span>
                </div>
                <div className="ml-4 lg:ml-8 mr-2">
                  <span className=" text-white">skills:</span>
                  <span className="text-gray-400">{`['`}</span>
                  {
                    skillsData.map((skill, i) => (
                      <React.Fragment key={i}>
                        <span className="text-amber-300">{skill}</span>
                        {
                          i !== skillsData.length - 1 &&
                          <span className="text-gray-400">{"', '"}</span>
                        }
                      </React.Fragment>
                    ))
                  }
                  <span className="text-gray-400">{"'],"}</span>
                </div>
                <div>
                  <span className="ml-4 lg:ml-8 mr-2 text-white">hardWorker:</span>
                  <span className="text-orange-400">true</span>
                  <span className="text-gray-400">,</span>
                </div>
                <div>
                  <span className="ml-4 lg:ml-8 mr-2 text-white">quickLearner:</span>
                  <span className="text-orange-400">true</span>
                  <span className="text-gray-400">,</span>
                </div>
                <div>
                  <span className="ml-4 lg:ml-8 mr-2 text-white">problemSolver:</span>
                  <span className="text-orange-400">true</span>
                  <span className="text-gray-400">,</span>
                </div>
                <div>
                  <span className="ml-4 lg:ml-8 mr-2 text-green-400">hireable:</span>
                  <span className="text-orange-400">function</span>
                  <span className="text-gray-400">{'() {'}</span>
                </div>
                <div>
                  <span className="ml-8 lg:ml-16 mr-2 text-orange-400">return</span>
                  <span className="text-gray-400">{`(`}</span>
                </div>
                <div>
                  <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                  <span className="mr-2 text-white">hardWorker</span>
                  <span className="text-amber-300">&amp;&amp;</span>
                </div>
                <div>
                  <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                  <span className="mr-2 text-white">problemSolver</span>
                  <span className="text-amber-300">&amp;&amp;</span>
                </div>
                <div>
                  <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                  <span className="mr-2 text-white">skills.length</span>
                  <span className="mr-2 text-amber-300">&gt;=</span>
                  <span className="text-orange-400">5</span>
                </div>
                <div><span className="ml-8 lg:ml-16 mr-2 text-gray-400">{`);`}</span></div>
                <div><span className="ml-4 lg:ml-8 text-gray-400">{`};`}</span></div>
                <div><span className="text-gray-400">{`};`}</span></div>
              </code>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;