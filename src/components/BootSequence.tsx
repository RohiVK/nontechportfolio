"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";

interface BootSequenceProps {
  onComplete: () => void;
}

export default function BootSequence({ onComplete }: BootSequenceProps) {
  const [progress, setProgress] = useState(0);
  const [activeStepIdx, setActiveStepIdx] = useState(0);
  const [bootReady, setBootReady] = useState(false);
  const [fadeAll, setFadeAll] = useState(false);

  const loadingSteps = [
    "01/ Establishing secure interface core...",
    "02/ Compiling product portfolio indices...",
    "03/ Verifying academic and technical metrics...",
    "04/ Loading decision and operational maps...",
    "05/ Portal initialized. Ready for review."
  ];

  useEffect(() => {
    // Increment progress slowly from 0 to 100
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 1;
      });
    }, 35);

    return () => clearInterval(progressInterval);
  }, []);

  useEffect(() => {
    // Map progress to active loading steps
    if (progress < 25) {
      setActiveStepIdx(0);
    } else if (progress < 50) {
      setActiveStepIdx(1);
    } else if (progress < 75) {
      setActiveStepIdx(2);
    } else if (progress < 95) {
      setActiveStepIdx(3);
    } else {
      setActiveStepIdx(4);
      setTimeout(() => {
        setBootReady(true);
      }, 500);
    }
  }, [progress]);

  const handleEnter = () => {
    setFadeAll(true);
    setTimeout(() => {
      onComplete();
    }, 850);
  };

  return (
    <AnimatePresence>
      {!fadeAll && (
        <motion.div
          className="fixed inset-0 z-50 bg-[#020203] text-zinc-355 flex flex-col items-center justify-between p-6 sm:p-12 select-none overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Top minimal header */}
          <div className="w-full max-w-5xl flex justify-between items-center text-[10px] font-mono tracking-widest text-zinc-600 border-b border-zinc-950 pb-4">
            <span>VK_ROHITH // PORTAL_v2027</span>
            <span>SYSTEMS_OPTIMAL</span>
          </div>

          {/* Central Mindblowing Apple Loader */}
          <div className="flex flex-col items-center justify-center space-y-8">
            <div className="relative w-36 h-36 flex items-center justify-center">
              {/* Spinning gradient outer ring */}
              <motion.div 
                className="absolute inset-0 rounded-full border border-zinc-900"
                style={{
                  background: "radial-gradient(circle, transparent 60%, rgba(99, 102, 241, 0.05) 100%)"
                }}
              />
              <motion.div 
                className="absolute inset-0 rounded-full border-t border-r border-brand-indigo/60 border-l-transparent border-b-transparent"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
              />

              {/* Glowing inner orb */}
              <div 
                className="absolute w-24 h-24 rounded-full bg-brand-indigo/5 blur-xl animate-pulse"
                style={{ animationDuration: "3s" }}
              />

              {/* Progress counter text */}
              <div className="z-10 flex flex-col items-center">
                <span className="text-2xl font-mono font-bold tracking-tight text-white">{progress}</span>
                <span className="text-[9px] font-mono text-zinc-650 tracking-wider">PERCENT</span>
              </div>
            </div>

            {/* Stepper info text */}
            <div className="h-6 flex items-center">
              <AnimatePresence mode="wait">
                <motion.p
                  key={activeStepIdx}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.25 }}
                  className="text-xs font-mono text-zinc-400 tracking-wide text-center"
                >
                  {loadingSteps[activeStepIdx]}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>

          {/* Bottom trigger button / prompt */}
          <div className="w-full max-w-md h-16 flex items-center justify-center">
            <AnimatePresence mode="wait">
              {!bootReady ? (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-[9px] font-mono text-zinc-600 tracking-widest uppercase flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-600 animate-ping" />
                  <span>INITIALIZING DASHBOARD CHANNELS</span>
                </motion.div>
              ) : (
                <motion.button
                  key="enter-btn"
                  onClick={handleEnter}
                  initial={{ opacity: 0, y: 10, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3.5 px-6 bg-white text-black font-extrabold text-xs tracking-wider uppercase rounded-xl shadow-[0_0_30px_rgba(255,255,255,0.08)] hover:shadow-[0_0_40px_rgba(99,102,241,0.25)] border border-white/20 transition-all duration-300 flex items-center justify-center space-x-2.5 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-brand-indigo animate-pulse" />
                  <span>ENTER EXECUTIVE PORTAL</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
