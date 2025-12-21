"use client";
// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";


import { motion } from "framer-motion";

function AboutSection() {
  return (
    <div id="about" className="my-12 lg:my-16 relative">
      <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          ABOUT ME
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center"
      >
        <div className="order-2 lg:order-1">
          <div className="from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37] overflow-hidden shadow-2xl">
            <div className="flex flex-row bg-[#1b2c68a0] px-4 py-2 items-center justify-between">
              <div className="flex flex-row space-x-2">
                <div className="h-3 w-3 rounded-full bg-red-400"></div>
                <div className="h-3 w-3 rounded-full bg-orange-400"></div>
                <div className="h-3 w-3 rounded-full bg-green-200"></div>
              </div>
              <div className="text-xs text-gray-400 font-mono">bash — 80x24</div>
            </div>
            <div className="p-4 lg:p-8 font-mono text-sm lg:text-base">
              <div className="flex flex-row mb-4">
                <span className="text-green-400 mr-2">kuldeep@portfolio:~$</span>
                <span className="text-white">cat whoami.txt</span>
              </div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.01,
                    },
                  },
                }}
                className="text-gray-200 leading-relaxed"
              >
                {personalData.description.split("").map((char, index) => (
                  <motion.span
                    key={index}
                    variants={{
                      hidden: { opacity: 0 },
                      visible: { opacity: 1 },
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ repeat: Infinity, duration: 0.8 }}
                  className="inline-block w-2 h-5 bg-[#16f2b3] ml-1 align-middle"
                ></motion.span>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="flex justify-center order-1 lg:order-2 relative">
          {/* Glow Effect */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute w-64 h-64 bg-violet-500 rounded-full blur-[80px] -z-10"
          />

          <motion.div
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative"
          >
            <Image
              src={personalData.profile}
              width={350}
              height={350}
              alt="Kuldeep Ghorpade"
              className="transition-all duration-1000 grayscale hover:grayscale-0 cursor-pointer shadow-2xl border-4 border-[#1b2c68a0]"
              style={{
                borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
              }}
            />

            {/* Decorative Border/Ring */}
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -inset-4 border-2 border-dashed border-violet-500/30 rounded-full -z-10"
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutSection;