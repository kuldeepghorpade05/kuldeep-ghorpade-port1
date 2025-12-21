"use client";
import { GitHubCalendar } from 'react-github-calendar';
import { personalData } from "@/utils/data/personal-data";
import { motion } from "framer-motion";

const ContributionGraph = () => {
    return (
        <div id="contributions" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <div className="flex justify-center -translate-y-[1px]">
                    <div className="w-3/4">
                        <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
                    </div>
                </div>

                <div className="flex justify-center my-5 lg:py-8">
                    <div className="flex items-center">
                        <span className="w-24 h-[2px] bg-[#1a1443]"></span>
                        <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
                            GitHub Contributions
                        </span>
                        <span className="w-24 h-[2px] bg-[#1a1443]"></span>
                    </div>
                </div>

                <div className="w-full flex justify-center py-12 px-4">
                    <div className="from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37] p-4 lg:p-8 shadow-2xl overflow-hidden">
                        <GitHubCalendar
                            username={personalData.github.split('/').pop()}
                            blockSize={15}
                            blockMargin={5}
                            fontSize={16}
                            theme={{
                                light: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
                                dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
                            }}
                            style={{
                                color: '#fff',
                                margin: 'auto',
                            }}
                        />
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default ContributionGraph;
