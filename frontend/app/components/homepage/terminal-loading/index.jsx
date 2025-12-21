"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const TerminalLoading = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [currentLine, setCurrentLine] = useState(0);
    const [displayedLines, setDisplayedLines] = useState([]);

    const lines = [
        "Initializing system...",
        "Loading kernel modules...",
        "Establishing secure connection...",
        "Fetching profile data...",
        "Optimizing UI components...",
        "System ready.",
        "Welcome, Kuldeep Ghorpade."
    ];

    useEffect(() => {
        if (currentLine < lines.length) {
            const timer = setTimeout(() => {
                setDisplayedLines((prev) => [...prev, lines[currentLine]]);
                setCurrentLine((prev) => prev + 1);
            }, 400); // Speed of lines appearing
            return () => clearTimeout(timer);
        } else {
            const timer = setTimeout(() => {
                setIsVisible(false);
            }, 1000); // Wait before disappearing
            return () => clearTimeout(timer);
        }
    }, [currentLine]);

    const containerVariants = {
        exit: {
            opacity: 0,
            transition: {
                duration: 0.8,
                ease: "easeInOut",
            },
        },
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    key="terminal-loading"
                    variants={containerVariants}
                    initial="initial"
                    exit="exit"
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0d1224] text-[#00ff00] font-mono overflow-hidden p-4"
                >
                    <div className="w-full max-w-2xl bg-black/80 rounded-lg border border-gray-800 p-6 shadow-2xl">
                        <div className="flex items-center gap-2 mb-4 border-b border-gray-800 pb-2">
                            <div className="w-3 h-3 rounded-full bg-red-500" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500" />
                            <div className="w-3 h-3 rounded-full bg-green-500" />
                            <span className="text-gray-500 text-xs ml-2">terminal — bash</span>
                        </div>
                        <div className="space-y-2">
                            {displayedLines.map((line, index) => (
                                <div key={index} className="flex">
                                    <span className="text-blue-400 mr-2">$</span>
                                    <span>{line}</span>
                                </div>
                            ))}
                            {currentLine < lines.length && (
                                <div className="flex">
                                    <span className="text-blue-400 mr-2">$</span>
                                    <motion.span
                                        animate={{ opacity: [1, 0] }}
                                        transition={{ duration: 0.8, repeat: Infinity }}
                                        className="w-2 h-5 bg-[#00ff00]"
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default TerminalLoading;
