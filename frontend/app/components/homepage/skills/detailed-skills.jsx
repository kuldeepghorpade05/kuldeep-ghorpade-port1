// @flow strict
import { detailedSkills } from "@/utils/data/detailed-skills";

function DetailedSkills() {
    return (
        <div className="py-8">
            <div className="flex justify-center my-5 lg:py-8">
                <div className="flex  items-center">
                    <span className="w-24 h-[2px] bg-[#1a1443]"></span>
                    <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
                        Detailed Skills
                    </span>
                    <span className="w-24 h-[2px] bg-[#1a1443]"></span>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                {detailedSkills.map((category, index) => (
                    <div key={index} className="w-full h-full from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37] overflow-hidden shadow-xl group hover:border-violet-500 transition-all duration-500">
                        <div className="flex flex-row bg-[#1b2c68a0] px-4 py-2 items-center justify-between">
                            <div className="flex flex-row space-x-2">
                                <div className="h-2 w-2 rounded-full bg-red-400"></div>
                                <div className="h-2 w-2 rounded-full bg-orange-400"></div>
                                <div className="h-2 w-2 rounded-full bg-green-200"></div>
                            </div>
                            <div className="text-[10px] text-gray-400 font-mono">{category.category.toLowerCase()}.json</div>
                        </div>
                        <div className="p-6 font-mono">
                            <div className="flex flex-row mb-4 text-xs">
                                <span className="text-green-400 mr-2">kuldeep@portfolio:~$</span>
                                <span className="text-white">cat {category.category.toLowerCase().replace(/\s+/g, '_')}.json</span>
                            </div>
                            <div className="flex flex-col gap-2">
                                {category.skills.map((skill, i) => (
                                    <p key={i} className="text-gray-200 text-sm flex items-start gap-2 group-hover:text-white transition-colors duration-300">
                                        <span className="text-[#16f2b3]">▹</span>
                                        {skill}
                                    </p>
                                ))}
                                <div className="flex items-center mt-2">
                                    <span className="inline-block w-2 h-4 bg-[#16f2b3] animate-pulse"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DetailedSkills;
