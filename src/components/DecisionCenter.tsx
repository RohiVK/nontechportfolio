"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Target, ShieldCheck, Flame, GitFork } from "lucide-react";

interface DilemmaCase {
  id: string;
  topic: string;
  challenge: string;
  context: string;
  approach: string;
  solution: string;
  metric: string;
  project: string;
}

export default function DecisionCenter() {
  const [expandedId, setExpandedId] = useState<string | null>("mvp");

  const dilemmas: DilemmaCase[] = [
    {
      id: "mvp",
      topic: "MVP Scope Creep",
      challenge: "Prioritizing feature launch under tight timeframes.",
      context: "Instructors and administrators wanted biometric tracking and multiple custom exam modules built into Examify's initial release, which threatened the core testing schedule.",
      approach: "Conducted interviews with teaching assistants, mapped requirements using a RICE matrix, and cut secondary proctoring systems to focus 100% on high-integrity test submission and immediate grade caching.",
      solution: "Implemented server-side timestamp validation for exam timelines and simple MongoDB schemas to handle dynamic test queries, bypassing expensive database changes.",
      metric: "Pruned 3 secondary features to deliver MVP on time, reducing administrative grading by 40%.",
      project: "Examify",
    },
    {
      id: "proxy",
      topic: "Proxy Check-in Abuse",
      challenge: "Securing geo-checkins against remote VPN code shares.",
      context: "University attendance systems are routinely bypassed by students sharing QR photos or using VPN coordinate overrides. ClassTrack needed absolute verification without expensive sensors.",
      approach: "Identified that location markers alone are easily spoofed. Designed a dual-factor integrity loop combining a rotating client TOTP code displayed in-class with location accuracy bounds checking.",
      solution: "Programmed location-tolerance radius algorithms in FastAPI, matching coordinates against rotating screen tokens. Dockerized the stack to deploy on local university nodes.",
      metric: "Achieved 98% accuracy in spoof detection across classroom testing with 120+ concurrent users.",
      project: "ClassTrack",
    },
    {
      id: "latency",
      topic: "Real-time Sync Latency",
      challenge: "Scalable message sync across parallel API servers.",
      context: "Connekt WebSocket connections suffered from latency spikes and broken socket channels when scaling message broadcasts to multiple active server groups.",
      approach: "Investigated socket persistence patterns. Shifted from standard in-memory socket maps to a stateless subscription broker model, decoupling connection states from core message distribution.",
      solution: "Structured a Redis Pub/Sub adapter layer as the central event hub, syncing messaging threads instantly. Partitioned PostgreSQL archives to hold query times under 30ms.",
      metric: "Decoupled message persistence, maintaining sync latency under 60ms for 50+ concurrent rooms.",
      project: "Connekt",
    },
  ];

  return (
    <div className="w-full space-y-3">
      <div className="flex justify-between items-center border-b border-zinc-900 pb-2 mb-3">
        <span className="text-[10px] text-zinc-550 font-mono tracking-widest uppercase">
          OPERATIONAL_DILEMMAS
        </span>
        <span className="text-[10px] text-zinc-650 font-mono hidden sm:block">
          interactive analytical case studies
        </span>
      </div>

      <div className="space-y-3">
        {dilemmas.map((item) => {
          const isExpanded = expandedId === item.id;
          return (
            <div
              key={item.id}
              onClick={() => setExpandedId(isExpanded ? null : item.id)}
              className={`glass-panel rounded-2xl border cursor-pointer transition-all duration-300 relative overflow-hidden ${
                isExpanded ? "border-brand-indigo/50 bg-zinc-900/50" : "border-zinc-900 hover:border-zinc-800"
              }`}
            >
              {/* Card Header row */}
              <div className="p-4 sm:p-5 flex justify-between items-center">
                <div className="flex items-center space-x-3.5">
                  <div className={`p-2 rounded-lg bg-zinc-950 border border-zinc-900 transition-colors duration-300 ${
                    isExpanded ? "text-brand-indigo" : "text-zinc-600"
                  }`}>
                    <GitFork className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[9px] text-[#06b6d4] font-mono uppercase tracking-wider block">
                      DILEMMA CASE: {item.project.toUpperCase()}
                    </span>
                    <h4 className="text-xs sm:text-sm font-extrabold text-white uppercase tracking-tight mt-0.5">
                      {item.topic} &mdash; {item.challenge}
                    </h4>
                  </div>
                </div>

                <motion.div
                  animate={{ rotate: isExpanded ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-zinc-500 hover:text-white shrink-0 p-1"
                >
                  <ChevronDown className="w-4 h-4" />
                </motion.div>
              </div>

              {/* Accordion content */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.25 }}
                    className="px-4 sm:px-5 pb-5 border-t border-zinc-950 pt-4 space-y-4"
                  >
                    {/* Grid details */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-3.5 bg-zinc-950/80 border border-zinc-900 rounded-xl space-y-1">
                        <span className="text-[8px] text-zinc-550 font-mono tracking-widest uppercase block">THE CONTEXT PROBLEM</span>
                        <p className="text-xs text-zinc-350 leading-relaxed font-sans font-medium">
                          {item.context}
                        </p>
                      </div>

                      <div className="p-3.5 bg-zinc-950/80 border border-zinc-900 rounded-xl space-y-1">
                        <span className="text-[8px] text-brand-indigo font-mono tracking-widest uppercase block">ROHITH'S ANALYTICAL RESPONSE</span>
                        <p className="text-xs text-zinc-350 leading-relaxed font-sans font-medium">
                          {item.approach}
                        </p>
                      </div>
                    </div>

                    {/* Code execution */}
                    <div className="p-3.5 bg-zinc-950/80 border border-zinc-900 rounded-xl space-y-1">
                      <span className="text-[8px] text-[#06b6d4] font-mono tracking-widest uppercase block">SYSTEM RESOLUTION</span>
                      <p className="text-xs text-zinc-300 leading-relaxed">
                        {item.solution}
                      </p>
                    </div>

                    {/* Measured Business Outcome */}
                    <div className="p-3.5 bg-brand-emerald/5 border border-brand-emerald/15 rounded-xl flex items-start space-x-3">
                      <ShieldCheck className="w-4 h-4 text-brand-emerald mt-0.5 shrink-0" />
                      <div>
                        <span className="text-[8px] text-brand-emerald font-mono tracking-wider uppercase block mb-0.5">OUTCOME & MEASURED IMPACT</span>
                        <p className="text-xs text-zinc-200 font-sans font-medium">
                          {item.metric}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}
