"use client";
import { projectsData } from '@/utils/data/projects-data';
import ProjectCard from './project-card';
import { motion } from "framer-motion";

const Projects = () => {

  return (
    <div id='projects' className="relative z-50  my-12 lg:my-24">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="sticky top-10">
          <div className="flex items-center justify-start relative">
            <span className="bg-[#1a1443] absolute left-0  w-fit text-white px-5 py-3 text-xl rounded-md">
              PROJECTS
            </span>
            <span className="w-full h-[2px] bg-[#1a1443]"></span>
          </div>
        </div>

        <div className="pt-24">
          <div className="flex flex-col gap-6">
            {projectsData.slice(0, 5).map((project, index) => (
              <div
                id={`sticky-card-${index + 1}`}
                key={index}
                className="sticky-card w-full mx-auto max-w-2xl sticky"
              >
                <div className="box-border flex items-center justify-center rounded shadow-[0_0_30px_0_rgba(0,0,0,0.3)] transition-all duration-[0.5s]">
                  <ProjectCard project={project} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;