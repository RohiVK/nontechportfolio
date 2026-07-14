"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GitBranch, AlertCircle, TrendingUp, Lightbulb } from "lucide-react";

interface ProjectData {
  id: string;
  name: string;
  tagline: string;
  logoText: string;
  techStack: string[];
  metrics: string;
  problem: string;
  tradeoffs: string;
  lessons: string;
  githubUrl: string;
}

export default function ProductPortfolio() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const projects: ProjectData[] = [
    {
      id: "examify",
      name: "Examify",
      tagline: "Secure Automated Proctoring Platform",
      logoText: "EX",
      techStack: ["Python", "FastAPI", "OpenCV", "MediaPipe"],
      metrics: "Devised real-time biometric mapping to compute student trust diagnostics",
      problem: "Online testing environments require robust integrity checks without violating lightweight server runtime guidelines.",
      tradeoffs: "Integrated lightweight Face Mesh models using MediaPipe over deep neural face networks on client, achieving 30 FPS facial mapping directly in browsers.",
      lessons: "Calibrated MediaPipe coordinates boundaries defensively to prevent false proctor flags on natural user movement.",
      githubUrl: "https://github.com/RohiVK",
    },
    {
      id: "classtrack",
      name: "ClassTrack",
      tagline: "Data-Driven Schedule & Attendance Tracker",
      logoText: "CT",
      techStack: ["React.js", "Node.js", "MongoDB", "Redux Toolkit"],
      metrics: "Reduced client-to-server data synchronization latency by 35%",
      problem: "University schedule updates frequently lag, causing class check-in delays and academic planning friction.",
      tradeoffs: "Leveraged Redux Toolkit for centralized client-side global state management, avoiding heavy socket connections while maintaining high sync consistency.",
      lessons: "Learnt to structure document schemas in MongoDB dynamically to support shifting timetable rows without table rebuilds.",
      githubUrl: "https://github.com/RohiVK",
    },
    {
      id: "connekt",
      name: "Connekt",
      tagline: "Campus Community Social Hub",
      logoText: "CO",
      techStack: ["React.js", "Express.js", "Node.js", "MongoDB", "Material UI"],
      metrics: "Configured Cloudinary assets to support media loads for campus forums",
      problem: "Student cohorts struggle to share resources and exchange queries in real-time on unified, moderated channels.",
      tradeoffs: "Partnered with designers to apply pre-built Material UI templates, focusing development bandwidth on backend moderation filters and anonymous portal routing.",
      lessons: "Configured Cloudinary image folders dynamically to auto-scale user-uploaded attachments, maintaining page load budgets.",
      githubUrl: "https://github.com/RohiVK",
    },
    {
      id: "findfake",
      name: "FindFake",
      tagline: "LSTM Phishing Domain Detector",
      logoText: "FF",
      techStack: ["Python", "LSTM Networks", "FastAPI", "Deep Learning"],
      metrics: "Showcased live on stage to innovation juries at Great India HackFest '24",
      problem: "Phishing URLs spread rapidly; legacy signature detection methods fail against dynamically generated risky domains.",
      tradeoffs: "Selected Deep Learning LSTM (Long Short-Term Memory) networks to evaluate character structures of input URLs, capturing unseen phishing signatures dynamically.",
      lessons: "Preprocessing text strings is critical. Tokenizing URL components correctly was responsible for a significant accuracy bump.",
      githubUrl: "https://github.com/RohiVK",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
      {projects.map((project) => {
        const isExpanded = expandedId === project.id;
        return (
          <motion.div
            key={project.id}
            layout
            onClick={() => setExpandedId(isExpanded ? null : project.id)}
            className={`glass-panel rounded-2xl p-5 sm:p-6 border cursor-pointer relative overflow-hidden transition-all duration-300 ${
              isExpanded 
                ? "col-span-1 md:col-span-2 border-brand-indigo/50 bg-zinc-900/60" 
                : "border-zinc-900 hover:border-zinc-800"
            }`}
            whileHover={{ scale: isExpanded ? 1 : 1.01 }}
          >
            {/* Header info */}
            <div className="flex justify-between items-start gap-4 mb-4 border-b border-zinc-950 pb-3">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-lg bg-zinc-950 border border-zinc-900 flex items-center justify-center font-mono text-xs font-bold text-brand-indigo">
                  {project.logoText}
                </div>
                <div>
                  <h3 className="text-sm font-extrabold text-white uppercase tracking-tight">{project.name}</h3>
                  <p className="text-[10px] text-zinc-550 font-mono mt-0.5">{project.tagline}</p>
                </div>
              </div>
              <span className="text-[9px] px-2 py-0.5 rounded bg-brand-emerald/10 border border-brand-emerald/20 text-brand-emerald font-mono shrink-0">
                ACTIVE_BUILD
              </span>
            </div>

            {/* Core impact statement */}
            <div className="space-y-1 mb-4">
              <span className="text-[8px] text-zinc-500 font-mono tracking-widest uppercase block">TECHNICAL IMPACT</span>
              <p className="text-xs text-white font-medium font-sans">
                {project.metrics}
              </p>
            </div>

            {/* Tech stack pills */}
            <div className="flex flex-wrap gap-1.5 mb-2">
              {project.techStack.map((tech) => (
                <span key={tech} className="text-[9px] px-2 py-0.5 rounded bg-zinc-950 border border-zinc-900 text-zinc-400 font-mono">
                  {tech}
                </span>
              ))}
            </div>

            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-4 pt-4 border-t border-zinc-950 mt-4"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <h4 className="text-[9px] text-zinc-550 font-mono tracking-widest uppercase flex items-center gap-1.5">
                        <AlertCircle className="w-3.5 h-3.5 text-brand-indigo" />
                        PROBLEM STATEMENT
                      </h4>
                      <p className="text-xs text-zinc-305 leading-relaxed">
                        {project.problem}
                      </p>
                    </div>

                    <div className="space-y-1">
                      <h4 className="text-[9px] text-zinc-550 font-mono tracking-widest uppercase flex items-center gap-1.5">
                        <TrendingUp className="w-3.5 h-3.5 text-[#06b6d4]" />
                        PRODUCT DECISION & TRADE-OFF
                      </h4>
                      <p className="text-xs text-zinc-305 leading-relaxed">
                        {project.tradeoffs}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <h4 className="text-[9px] text-zinc-550 font-mono tracking-widest uppercase flex items-center gap-1.5">
                      <Lightbulb className="w-3.5 h-3.5 text-brand-emerald" />
                      LESSONS LEARNED
                    </h4>
                    <p className="text-xs text-zinc-400 leading-relaxed font-sans font-medium">
                      {project.lessons}
                    </p>
                  </div>

                  {/* GitHub Link */}
                  <div className="pt-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="px-3.5 py-1.5 bg-zinc-950 border border-zinc-900 hover:border-zinc-800 text-[10px] font-mono text-zinc-300 hover:text-white rounded-lg transition-all duration-200 inline-flex items-center space-x-2"
                    >
                      <GitBranch className="w-3.5 h-3.5" />
                      <span>GITHUB REPOSITORY</span>
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="mt-4 pt-2.5 border-t border-zinc-950 flex justify-between items-center text-[8px] font-mono text-zinc-650 uppercase tracking-wider">
              <span>PROJECT_SPEC_SHEET</span>
              <span className="text-brand-indigo">{isExpanded ? "COLLAPSE" : "EXPAND SPEC"}</span>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
