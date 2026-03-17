"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
    const quotes = [
        "Freedom is the right of all sentient beings.",
        "Autobots, roll out!",
        "There is a thin line between being a hero and being a memory.",
        "Sometimes even the wisest of men and machines can be in error.",
        "We must have courage; we cannot ignore the danger. We must conquer it.",
        "Till all are one.",
        "Fate rarely calls upon us at a moment of our choosing.",
        "There is more to them than meets the eye.",
        "We are here. We are waiting.",
        "Hang on your dreams, Chip. The future is built on dreams. Hang on."
    ];

    const [quote, setQuote] = useState(quotes[0]);

    const getNewQuote = () => {
        const random = quotes[Math.floor(Math.random() * quotes.length)];
        setQuote(random);
    };

    return (
        <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white p-6">
            <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl w-full">
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex-shrink-0"
                >
                    <Image
                        src="/optimus.png"
                        alt="Optimus Prime"
                        width={350}
                        height={600}
                        className="bg-white rounded-lg"
                    />
                </motion.div>

                <div className="flex flex-col items-center md:items-start text-center md:text-left w-full">
                    <motion.h1
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-bold mb-8"
                    >
                        Optimus Prime Quote Generator
                    </motion.h1>

                    <motion.div
                        key={quote}
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.4 }}
                        className="bg-gray-800/70 border border-blue-500 shadow-xl rounded-2xl p-8 w-full max-w-xl"
                    >
                        <p className="text-xl md:text-2xl font-medium italic">
                            "{quote}"
                        </p>
                        <p className="mt-4 text-sm uppercase text-blue-400 tracking-wider">
                            – Optimus Prime
                        </p>
                    </motion.div>

                    <button
                        onClick={getNewQuote}
                        className="mt-10 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold rounded-xl shadow-lg transition-transform hover:scale-105"
                    >
                        New Quote
                    </button>
                </div>
            </div>
        </main>
    );
}
