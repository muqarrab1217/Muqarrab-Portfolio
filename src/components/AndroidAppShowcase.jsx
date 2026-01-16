import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const AndroidAppShowcase = () => {
    const [navOpen, setNavOpen] = useState(false);
    const lastActiveLink = useRef();
    const activeBox = useRef();

    const initActiveBox = () => {
        if (activeBox.current && lastActiveLink.current) {
            activeBox.current.style.top = lastActiveLink.current.offsetTop + 'px';
            activeBox.current.style.left = lastActiveLink.current.offsetLeft + 'px';
            activeBox.current.style.width = lastActiveLink.current.offsetWidth + 'px';
            activeBox.current.style.height = lastActiveLink.current.offsetHeight + 'px';
        }
    }

    useEffect(initActiveBox, []);
    window.addEventListener('resize', initActiveBox);

    return (
        <div className="min-h-screen w-full bg-zinc-900 text-zinc-50 overflow-x-hidden relative">
            {/* Header */}
            <header className="fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0">
                <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6">
                    <h1>
                        <Link
                            to="/"
                            className="logo"
                        >
                            <img
                                src="../images/logo.svg"
                                width={40}
                                height={40}
                                alt="Muqarrab Ahmed"
                            />
                        </Link>
                    </h1>

                    <div className="relative">
                        <button
                            className="menu-btn md:hidden"
                            onClick={() => setNavOpen((prev) => !prev)}
                        >
                            <span className="material-symbols-rounded">
                                {navOpen ? 'close' : 'menu'}
                            </span>
                        </button>

                        <nav className={'navbar !min-w-fit ' + (navOpen ? 'active' : '')}>
                            <Link
                                to="/"
                                className="nav-link active"
                                ref={lastActiveLink}
                            >
                                Portfolio
                            </Link>
                            <div className="active-box" ref={activeBox}></div>
                        </nav>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <div className="flex items-center justify-center p-6 md:p-12 pt-28 lg:pt-36 min-h-screen">
                <div className="max-w-7xl w-full flex flex-col gap-6 lg:grid lg:grid-cols-2 lg:gap-12 items-center">

                    {/* Left Content Wrapper */}
                    <div className="contents lg:block lg:space-y-6">
                        <motion.h1
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="headline-1 text-center lg:text-left bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-500 order-1 mb-6"
                        >
                            NutriLens
                        </motion.h1>

                        <motion.p
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="text-zinc-400 text-lg md:text-xl max-w-lg mx-auto lg:mx-0 text-center lg:text-left order-3"
                        >
                            A modern Android application featuring AI-powered food classification, real-time nutrition tracking, and personalized diet plans.
                        </motion.p>

                        <motion.div
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="flex flex-wrap gap-3 pt-4 justify-center lg:justify-start order-4"
                        >
                            {['Android', 'Flutter', 'TensorFlow', 'Firebase', 'Food-101'].map((tech, index) => (
                                <span key={index} className="px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-700 hover:border-sky-400/50 hover:bg-zinc-800 transition-colors text-sm font-medium text-zinc-300 shadow-sm">
                                    {tech}
                                </span>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right Content - Phone Mockup */}
                    <div className="flex justify-center lg:justify-end relative order-2 lg:order-none">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.3 }}
                            className="relative"
                        >
                            {/* Floating Animation Wrapper */}
                            <motion.div
                                animate={{ y: [0, -20, 0] }}
                                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                                className="relative z-10"
                            >
                                {/* Phone Frame */}
                                <div className="w-[300px] h-[600px] bg-zinc-950 rounded-[40px] shadow-2xl border-4 border-zinc-800 relative overflow-hidden ring-1 ring-white/10">
                                    {/* Status Bar Mock */}
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-6 bg-black rounded-b-xl z-20"></div>

                                    {/* Screen Content */}
                                    <div className="w-full h-full bg-zinc-900 flex items-center justify-center overflow-hidden">
                                        <img
                                            src="/Muqarrab-Portfolio/images/NutriLens-home.png"
                                            alt="NutriLens App Screen"
                                            className="w-full h-full object-fill opacity-90"
                                        />
                                    </div>
                                </div>

                                {/* Shadow/Glow behind phone */}
                                <div className="absolute -inset-4 bg-sky-500/20 blur-3xl -z-10 rounded-full opacity-50"></div>
                            </motion.div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AndroidAppShowcase;
