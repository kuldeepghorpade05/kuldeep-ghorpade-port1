"use client";
// @flow strict

import { skillsData } from "@/utils/data/skills";
import { skillsImage } from "@/utils/skill-image";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import DetailedSkills from "./detailed-skills";
import { motion } from "framer-motion";

function Skills() {
  return (
    <div id="skills" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="flex justify-center -translate-y-[1px]">
          <div className="w-3/4">
            <div className="h-[1px] bg-[#25213b] w-full" />
          </div>
        </div>
        <div className="flex justify-center my-5 lg:py-8">
          <div className="flex  items-center">
            <span className="w-24 h-[2px] bg-[#1a1443]"></span>
            <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
              Skills
            </span>
            <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          </div>
        </div>

        <div className="w-full my-12">
          <div className="border-[#333333] relative rounded-lg border bg-[#242424] overflow-hidden shadow-2xl">
            <div className="flex flex-row bg-[#333333] px-4 py-2 items-center justify-between">
              <div className="flex flex-row space-x-2">
                <div className="h-3 w-3 rounded-full bg-red-400"></div>
                <div className="h-3 w-3 rounded-full bg-orange-400"></div>
                <div className="h-3 w-3 rounded-full bg-green-200"></div>
              </div>
              <div className="text-xs text-gray-400 font-mono">bash — 80x24</div>
            </div>
            <div className="p-4 lg:p-6 font-mono">
              <div className="flex flex-row mb-6">
                <span className="text-green-400 mr-2">kuldeep@portfolio:~$</span>
                <span className="text-white">ls -la skills/</span>
              </div>
              <Marquee
                gradient={false}
                speed={80}
                pauseOnHover={true}
                pauseOnClick={true}
                delay={0}
                play={true}
                direction="left"
              >
                {skillsData.map((skill, id) => (
                  <div className="w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer"
                    key={id}>
                    <div className="h-full w-full rounded-lg border border-[#1f223c] bg-[#11152c]/50 backdrop-blur-sm shadow-none group-hover:border-violet-500 transition-all duration-500">
                      <div className="flex flex-col items-center justify-center gap-3 p-6">
                        <div className="h-8 sm:h-10">
                          {skillsImage(skill)?.src && (
                            <Image
                              src={skillsImage(skill)?.src}
                              alt={skill}
                              width={40}
                              height={40}
                              className="h-full w-auto rounded-lg"
                            />
                          )}
                        </div>
                        <p className="text-white text-sm sm:text-lg font-mono">
                          {skill}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </Marquee>
            </div>
          </div>
        </div>

        <DetailedSkills />
      </motion.div>
    </div>
  );
};

export default Skills;