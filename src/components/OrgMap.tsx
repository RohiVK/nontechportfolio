"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users2, Calendar, Award, Check, Network } from "lucide-react";

interface LeadershipNode {
  id: string;
  label: string;
  role: string;
  icon: any;
  summary: string;
  metrics: string;
  details: string[];
}

export default function OrgMap() {
  const [selectedNodeId, setSelectedNodeId] = useState("csi");

  const nodes: LeadershipNode[] = [
    {
      id: "csi",
      label: "CSI Chapter",
      role: "Chapter Manager",
      icon: Users2,
      summary: "Directed the executive committee and coordinated technical operations.",
      metrics: "Coordinated a team of 40+ core members across code, design, and marketing cells.",
      details: [
        "Managed chapter operations for 1000+ registered student members.",
        "Streamlined chapter tasks using structured backlog lists and Slack sprints.",
        "Facilitated approvals and administrative interfaces with university directors.",
      ],
    },
    {
      id: "events",
      label: "Events & Talks",
      role: "Logistics Lead",
      icon: Calendar,
      summary: "Spearheaded planning and resource acquisition for campus symposiums.",
      metrics: "Directed 5+ national workshops and seminars with average 200+ attendees.",
      details: [
        "Coordinated guest speaker logistics, calendar schedules, and budget allocations.",
        "Drafted outreach playbooks to optimize event attendance and post-event certificate sync.",
        "Secured sponsors and university facilities clearances for student cohorts.",
      ],
    },
    {
      id: "hackathons",
      label: "Hackathons",
      role: "Team Captain",
      icon: Award,
      summary: "Led product definition and sprint pacing under high-pressure scenarios.",
      metrics: "Led 3 hackathon cohorts to Top-10 positions at Great India HackFest and Technov.",
      details: [
        "Drafted initial MVP requirement sheets to guide programmers and designers.",
        "Paced MVP coding sprints under 36-hour timelines to deliver complete features.",
        "Presented slides, tech briefs, and architectures to hackathon juries.",
      ],
    },
  ];

  const currentNode = nodes.find((n) => n.id === selectedNodeId) || nodes[0];

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
      {/* Horizontal Flowchart Diagram */}
      <div className="lg:col-span-5 p-4 bg-zinc-950/60 border border-zinc-900 rounded-2xl flex flex-col justify-center items-center relative overflow-hidden min-h-[220px]">
        {/* Background grid */}
        <div className="absolute inset-0 cyber-grid opacity-[0.1] pointer-events-none" />

        {/* Custom Keyframe animation for flowing paths */}
        <style>{`
          @keyframes pathFlow {
            to {
              stroke-dashoffset: -20;
            }
          }
          .animated-flow-path {
            stroke-dasharray: 6, 4;
            animation: pathFlow 3s linear infinite;
          }
        `}</style>

        <span className="text-[8px] text-zinc-600 font-mono tracking-widest uppercase mb-4 z-10 flex items-center gap-1">
          <Network className="w-3 h-3 text-brand-indigo" />
          // INTERACTIVE SCHEMATIC
        </span>

        <svg width="100%" height="110" viewBox="0 0 340 110" className="max-w-[340px] relative z-10">
          {/* Main central node */}
          <g>
            <rect x="125" y="10" width="90" height="30" rx="8" fill="#09090b" stroke="#6366f1" strokeWidth="1.2" />
            <text x="170" y="28" textAnchor="middle" fill="#ffffff" fontSize="8" fontFamily="monospace" fontWeight="bold">
              V.K. ROHITH
            </text>
          </g>

          {/* Paths connecting down to branches with animated dashes */}
          {/* Left Branch */}
          <path d="M170 40 L170 55 L65 55 L65 70" fill="none" stroke="rgba(99, 102, 241, 0.4)" strokeWidth="1" className="animated-flow-path" />
          {/* Center Branch */}
          <path d="M170 40 L170 70" fill="none" stroke="rgba(99, 102, 241, 0.4)" strokeWidth="1" className="animated-flow-path" />
          {/* Right Branch */}
          <path d="M170 40 L170 55 L275 55 L275 70" fill="none" stroke="rgba(99, 102, 241, 0.4)" strokeWidth="1" className="animated-flow-path" />

          {/* Surrounding Nodes */}
          {nodes.map((n, idx) => {
            const isSelected = selectedNodeId === n.id;
            const xPos = idx === 0 ? 20 : idx === 1 ? 125 : 230;
            return (
              <g key={n.id} className="cursor-pointer" onClick={() => setSelectedNodeId(n.id)}>
                <rect
                  x={xPos}
                  y="70"
                  width="90"
                  height="30"
                  rx="6"
                  fill={isSelected ? "rgba(99, 102, 241, 0.08)" : "#09090b"}
                  stroke={isSelected ? "#6366f1" : "#27272a"}
                  strokeWidth={isSelected ? 1.2 : 0.8}
                  className="transition-all duration-300"
                />
                <circle cx={xPos + 45} cy="70" r="1.5" fill={isSelected ? "#6366f1" : "#27272a"} />
                <text
                  x={xPos + 45}
                  y="88"
                  textAnchor="middle"
                  fill={isSelected ? "#ffffff" : "#a1a1aa"}
                  fontSize="7.5"
                  fontFamily="monospace"
                  fontWeight="bold"
                >
                  {n.label.toUpperCase()}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Details Box */}
      <div className="lg:col-span-7">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentNode.id}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.2 }}
            className="glass-panel p-5 sm:p-6 rounded-2xl border border-zinc-900 space-y-4 shadow-xl h-full flex flex-col justify-between"
          >
            <div>
              {/* Header */}
              <div className="border-b border-zinc-950 pb-3 flex justify-between items-start">
                <div>
                  <span className="text-[9px] text-[#06b6d4] font-mono uppercase tracking-widest block mb-0.5">
                    LEADERSHIP NODE SPECIFICATION
                  </span>
                  <h4 className="text-sm font-extrabold text-white uppercase flex items-center gap-2">
                    <currentNode.icon className="w-4 h-4 text-brand-indigo" />
                    {currentNode.label}
                  </h4>
                  <p className="text-[10px] text-zinc-500 font-mono mt-0.5 uppercase">
                    ROLE: {currentNode.role}
                  </p>
                </div>
              </div>

              <p className="text-xs text-zinc-350 italic font-sans mt-3.5">
                &ldquo;{currentNode.summary}&rdquo;
              </p>

              {/* Details list */}
              <div className="space-y-2 mt-4">
                <h5 className="text-[9px] text-zinc-550 font-mono tracking-widest uppercase">KEY DELIVERABLES</h5>
                <ul className="space-y-1.5">
                  {currentNode.details.map((det, index) => (
                    <li key={index} className="text-xs text-zinc-400 flex items-start space-x-2">
                      <Check className="w-3.5 h-3.5 text-brand-emerald mt-0.5 shrink-0" />
                      <span className="leading-normal">{det}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Performance metric */}
            <div className="p-3 bg-zinc-950/80 border border-zinc-900 rounded-xl space-y-1 mt-4">
              <span className="text-[8px] text-brand-indigo font-mono tracking-widest uppercase block">NODE PERFORMANCE INDEX</span>
              <p className="text-xs text-zinc-300 font-sans font-medium">
                {currentNode.metrics}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
