"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RefreshCw, UserCheck, Search, ListTodo, PenTool, Code, BarChart, RotateCcw } from "lucide-react";

interface ProductLifecycleProps {
  isRecruiterMode?: boolean;
}

interface StepData {
  id: string;
  label: string;
  icon: any;
  title: string;
  methodology: string;
  metricsAndTools: string;
  color: string;
}

export default function ProductLifecycle({ isRecruiterMode = false }: ProductLifecycleProps) {
  const [activeStepId, setActiveStepId] = useState("understand");
  const [autoRotate, setAutoRotate] = useState(true);

  const steps: StepData[] = [
    {
      id: "understand",
      label: "Understand",
      icon: UserCheck,
      title: "Identify Customer Pain",
      methodology: "Interview target cohorts directly to extract friction points. Avoid jumping to solutions until the core user problem is fully articulated.",
      metricsAndTools: "Tools: Notion, User Interviews. Evidence: Conducted sessions with 40+ students to isolate ClassTrack UI issues.",
      color: "rgba(99, 102, 241, 1)", // Indigo
    },
    {
      id: "research",
      label: "Research",
      icon: Search,
      title: "Analyze Technical Options",
      methodology: "Evaluate architectural tradeoffs, run performance comparison spikes, and study standard algorithms suitable for server constraints.",
      metricsAndTools: "Tools: Figma, Scikit-Learn. Evidence: Compared PassiveAggressive models vs BERT parameters, validating RAM constraints for FindFake.",
      color: "rgba(6, 182, 212, 1)", // Cyan
    },
    {
      id: "prioritize",
      label: "Prioritize",
      icon: ListTodo,
      title: "Scope the MVP",
      methodology: "Apply product prioritization frameworks (RICE/Kano) to prune secondary features. Ensure the core loop is delivered first.",
      metricsAndTools: "Tools: RICE Matrix, Excel. Evidence: Cut bloated proctoring cameras from early Examify MVP to secure core exam submit pipelines.",
      color: "rgba(16, 185, 129, 1)", // Emerald
    },
    {
      id: "design",
      label: "Design",
      icon: PenTool,
      title: "Draft PRDs & APIs",
      methodology: "Author structured Product Requirement Documents (PRDs). Draw architecture schematics and define API contract layers before writing code.",
      metricsAndTools: "Tools: Eraser.io, Markdown PRDs. Evidence: Documented JWT auth routes and MongoDB schemas for CSI Chapter dashboards.",
      color: "rgba(236, 72, 153, 1)", // Pink
    },
    {
      id: "build",
      label: "Build",
      icon: Code,
      title: "Iterative Coding Sprints",
      methodology: "Develop using modular frameworks. Implement robust unit checks and containerize services to guarantee staging replicability.",
      metricsAndTools: "Tools: Next.js, FastAPI, Docker. Evidence: Programmed 4 complete full-stack web platforms from scratch.",
      color: "rgba(168, 85, 247, 1)", // Purple
    },
    {
      id: "measure",
      label: "Measure",
      icon: BarChart,
      title: "Evaluate Performance",
      methodology: "Review product and database operations under simulated load. Measure check-in accuracy and latency drop-offs.",
      metricsAndTools: "Tools: Postman, Lighthouse, Docker logs. Evidence: Verified -40% grading overhead in Examify and 2.4s check-in bounds in ClassTrack.",
      color: "rgba(245, 158, 11, 1)", // Amber
    },
    {
      id: "iterate",
      label: "Iterate",
      icon: RotateCcw,
      title: "Refine on Feedback",
      methodology: "Analyze post-launch crash reports and user feedback. Release quick incremental updates to resolve core blockers.",
      metricsAndTools: "Tools: Git branches, Redis. Evidence: Implemented memory caching in Examify after users reported quiz load lag.",
      color: "rgba(239, 68, 68, 1)", // Red
    },
  ];

  const currentStepIndex = steps.findIndex((s) => s.id === activeStepId);
  const currentStep = steps[currentStepIndex] || steps[0];

  // Auto-rotate steps every 4 seconds unless clicked
  useEffect(() => {
    if (!autoRotate) return;
    const interval = setInterval(() => {
      const nextIndex = (currentStepIndex + 1) % steps.length;
      setActiveStepId(steps[nextIndex].id);
    }, 4500);
    return () => clearInterval(interval);
  }, [currentStepIndex, autoRotate]);

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
      {/* Circular SVG Loop Column */}
      <div className="lg:col-span-6 flex justify-center items-center p-2 relative min-h-[300px]">
        {/* Dynamic revolving glow in backdrop */}
        <div 
          className="absolute w-52 h-52 rounded-full opacity-[0.03] blur-3xl transition-colors duration-1000"
          style={{ backgroundColor: currentStep.color }}
        />

        <svg width="100%" height="320" viewBox="0 0 100 100" className="max-w-[300px] relative z-10">
          {/* Main Circle Track */}
          <circle cx="50" cy="50" r="32" fill="none" stroke="#1f1f23" strokeWidth="0.8" />

          {/* Connected segment nodes */}
          {steps.map((step, index) => {
            const angle = (index * 2 * Math.PI) / steps.length - Math.PI / 2;
            const x = 50 + 32 * Math.cos(angle);
            const y = 50 + 32 * Math.sin(angle);
            const isActive = step.id === activeStepId;
            const StepIcon = step.icon;

            return (
              <g
                key={step.id}
                className="cursor-pointer"
                onClick={() => {
                  setActiveStepId(step.id);
                  setAutoRotate(false); // Stop auto rotate on user click
                }}
              >
                {/* Node circle */}
                <circle
                  cx={x}
                  cy={y}
                  r="5.5"
                  fill={isActive ? step.color : "#09090b"}
                  stroke={isActive ? "#ffffff" : "#27272a"}
                  strokeWidth={isActive ? 1 : 0.8}
                  className="transition-all duration-300"
                />

                {/* Node index label */}
                <text
                  x={x}
                  y={y + 1}
                  textAnchor="middle"
                  fill={isActive ? "#000000" : "#a1a1aa"}
                  fontSize="3"
                  fontFamily="monospace"
                  fontWeight="bold"
                >
                  {index + 1}
                </text>

                {/* Text tag positioned outwards */}
                <text
                  x={50 + 40 * Math.cos(angle)}
                  y={50 + 40 * Math.sin(angle) + 1}
                  textAnchor="middle"
                  fill={isActive ? "#ffffff" : "#52525b"}
                  fontSize="2"
                  fontFamily="monospace"
                  fontWeight="bold"
                  className="transition-all duration-300"
                >
                  {step.label.toUpperCase()}
                </text>
              </g>
            );
          })}

          {/* Central Hub Core */}
          <circle cx="50" cy="50" r="16" fill="#09090b" stroke="#27272a" strokeWidth="0.8" />
          <g transform="translate(50, 47)">
            <RefreshCw className="w-5 h-5 text-zinc-650 animate-spin mx-auto" style={{ animationDuration: "12s" }} />
          </g>
          <text
            x="50"
            y="57"
            textAnchor="middle"
            fill="#a1a1aa"
            fontSize="2"
            fontFamily="monospace"
            letterSpacing="0.5"
          >
            LIFECYCLE
          </text>
        </svg>
      </div>

      {/* Details explanation Panel Column */}
      <div className="lg:col-span-6 space-y-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="glass-panel p-5 sm:p-6 rounded-2xl border border-zinc-850 space-y-4 shadow-xl"
          >
            {/* Header info */}
            <div className="border-b border-zinc-900 pb-3 flex justify-between items-start">
              <div>
                <span className="text-[9px] font-mono uppercase tracking-widest" style={{ color: currentStep.color }}>
                  PRODUCT PROCESS NODE: 0{steps.indexOf(currentStep) + 1}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-white mt-1 flex items-center gap-2">
                  <currentStep.icon className="w-5 h-5 text-brand-indigo" />
                  {currentStep.title}
                </h3>
              </div>
            </div>

            {/* Methodology description */}
            <div className="space-y-1">
              <h4 className="text-[9.5px] text-zinc-500 font-mono tracking-wider uppercase">
                METHODOLOGY
              </h4>
              <p className="text-xs sm:text-sm text-zinc-350 leading-relaxed font-sans font-medium">
                {currentStep.methodology}
              </p>
            </div>

            {/* Tools & Evidence metrics */}
            <div className="p-3 bg-zinc-950/60 border border-zinc-900 rounded-xl space-y-1">
              <h4 className="text-[9px] text-[#06b6d4] font-mono uppercase tracking-wider">
                EVALUATION METRIC & TOOLS
              </h4>
              <p className="text-xs text-zinc-400 font-mono leading-relaxed">
                {currentStep.metricsAndTools}
              </p>
            </div>

            {/* Recruiter mode extra context */}
            {isRecruiterMode && (
              <div className="p-3 bg-brand-emerald/5 border border-brand-emerald/15 rounded-xl text-[10px] font-mono leading-relaxed text-brand-emerald">
                <span className="font-bold block uppercase tracking-wider mb-0.5">ATS ALIGNMENT STAMP</span>
                Focuses on `Data-driven Prioritization`, `PRD Scoping`, and `Agile Sprint Deployments` to validate execution capabilities.
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Play/Pause indicator */}
        <div className="flex justify-end pr-2">
          <button
            onClick={() => setAutoRotate(!autoRotate)}
            className="text-[10px] font-mono text-zinc-650 hover:text-zinc-400 transition-colors duration-200 cursor-pointer"
          >
            {autoRotate ? "|| PAUSE CYCLING" : "> RESUME AUTO CYCLING"}
          </button>
        </div>
      </div>
    </div>
  );
}
