"use client";
// @flow strict
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import BlogCard from './blog-card';
import { motion } from "framer-motion";

function Blog({ blogs }) {

  return (
    <div id='blogs' className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
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
            <span className="w-24 h-[2px] bg-[#333333]"></span>
            <span className="bg-[#333333] w-fit text-white p-2 px-5 text-xl rounded-md">
              Blogs
            </span>
            <span className="w-24 h-[2px] bg-[#333333]"></span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 lg:gap-8 xl:gap-10">
          {
            blogs.slice(0, 6).map((blog, i) => (
              blog?.cover_image &&
              <BlogCard blog={blog} key={i} />
            ))
          }
        </div>

        <div className="flex justify-center  mt-5 lg:mt-12">
          <Link
            className="flex items-center gap-1 hover:gap-3 rounded-full bg-[#444444] px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
            role="button"
            href="/blog"
          >
            <span>View More</span>
            <FaArrowRight size={16} />
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Blog;