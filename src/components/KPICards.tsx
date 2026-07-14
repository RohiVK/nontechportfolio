"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Users2, Rocket, MessageSquare, Award, Check } from "lucide-react";

interface KPICardsProps {
  isRecruiterMode?: boolean;
}

interface KPIData {
  id: string;
  title: string;
  score: number;
  icon: any;
  color: string;
  strokeColor: string;
  tagline: string;
  desc: string;
  subMetrics: { label: string; val: number }[];
  evidence: string[];
}

export default function KPICards({ isRecruiterMode = false }: KPICardsProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const kpis: KPIData[] = [
    {
      id: "engineering",
      title: "Technical Depth",
      score: 95,
      icon: Code2,
      color: "rgba(99, 102, 241, 0.4)",
      strokeColor: "#6366f1",
      tagline: "Software architecture and system design.",
      desc: "Robust computer science core. Experienced in designing PostgreSQL/MongoDB database models, implementing cloud setups, and programming fast FastAPI/Node APIs.",
      subMetrics: [
        { label: "Systems Architecture", val: 96 },
        { label: "API Design & Integration", val: 95 },
        { label: "Data Modeling & Cloud", val: 94 },
      ],
      evidence: [
        "B.Tech in Computer Science & Engineering (VIT-AP University), CGPA: 8.00.",
        "AWS Certified Cloud Architect & Foundations Architect.",
        "Developed full-stack backends for Examify, ClassTrack, and Connekt.",
      ],
    },
    {
      id: "leadership",
      title: "Chapter Management",
      score: 96,
      icon: Users2,
      color: "rgba(16, 185, 129, 0.4)",
      strokeColor: "#10b981",
      tagline: "Coordinating workflows and chapter operations.",
      desc: "Directed organizational product strategy and roadmaps for CSI chapter on campus, aligning engineering, marketing, and logistics workflows.",
      subMetrics: [
        { label: "Cross-Functional Sprints", val: 97 },
        { label: "Resource & Budgeting", val: 95 },
        { label: "Operations Alignment", val: 94 },
      ],
      evidence: [
        "CSI Chapter Manager, executing workshops and hackathons for 1000+ peers.",
        "Elected Sri Chaitanya School Head Boy, coordinating student council policies.",
        "Acting as a product bridge between technical dev cells and administration.",
      ],
    },
    {
      id: "execution",
      title: "Product Delivery",
      score: 94,
      icon: Award,
      color: "rgba(236, 72, 153, 0.4)",
      strokeColor: "#ec4899",
      tagline: "Slicing bloated features to deliver functional MVPs.",
      desc: "High velocity, shipping functional MVPs. Focuses on user-centric sprint cycles and data-driven prioritizing.",
      subMetrics: [
        { label: "MVP Scoping (RICE/Kano)", val: 95 },
        { label: "Latency Optimization", val: 96 },
        { label: "Deployment Sprints", val: 92 },
      ],
      evidence: [
        "Placed in Top 10 at Great India HackFest '24 among top regional submissions.",
        "Placed in Top 10 at Technov 24-Hour National Hackathon.",
        "IBM Certified Blockchain Developer, designing ledger workflows.",
      ],
    },
    {
      id: "communication",
      title: "Product Synthesis",
      score: 92,
      icon: MessageSquare,
      color: "rgba(6, 182, 212, 0.4)",
      strokeColor: "#06b6d4",
      tagline: "Translating customer feedback into product roadmaps.",
      desc: "Skilled in writing clear specifications, designing user flows, and conducting interviews to identify UI bottlenecks.",
      subMetrics: [
        { label: "Specs & Technical Writing", val: 94 },
        { label: "User Interview Feedback", val: 91 },
        { label: "Presentation & Pitches", val: 92 },
      ],
      evidence: [
        "Conducted feedback loops with student groups to iterate on social forums.",
        "Authored API requirements and structural flows for chapter dashboards.",
        "Presented LSTM domain detection tools live on stage at Great India HackFest '24.",
      ],
    },
    {
      id: "velocity",
      title: "Learning Speed",
      score: 98,
      icon: Rocket,
      color: "rgba(245, 158, 11, 0.4)",
      strokeColor: "#f59e0b",
      tagline: "Ingesting new tech stacks and frameworks in weeks.",
      desc: "Thrives in unfamiliar domains. Swiftly self-learns image recognition, cloud environments, or state managers to contribute immediately.",
      subMetrics: [
        { label: "Tech Adaptability", val: 99 },
        { label: "Self-Directed Coding", val: 98 },
        { label: "Tooling Integration", val: 97 },
      ],
      evidence: [
        "Self-taught OpenCV, MediaPipe, Next.js, and Redux Toolkit inside weeks.",
        "Ingested Deep Learning LSTM network models to classify fraudulent URLs.",
        "Adapted to AWS cloud environments and Postgres schemas independently.",
      ],
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 w-full">
      {kpis.map((kpi) => {
        const Icon = kpi.icon;
        const isExpanded = expandedId === kpi.id;
        const circumference = 2 * Math.PI * 14;

        return (
          <motion.div
            key={kpi.id}
            layout
            onClick={() => setExpandedId(isExpanded ? null : kpi.id)}
            className={`glass-panel rounded-2xl p-5 border cursor-pointer relative overflow-hidden transition-all duration-300 ${
              isExpanded 
                ? "col-span-1 md:col-span-2 lg:col-span-3 border-brand-indigo/50 bg-zinc-900/60" 
                : "border-zinc-900 hover:border-zinc-800"
            }`}
            style={{
              boxShadow: isExpanded ? `0 0 35px -10px ${kpi.color}` : "none"
            }}
            whileHover={{ y: -3 }}
          >
            {/* Header info */}
            <div className="flex justify-between items-center mb-4">
              <div className="p-2 rounded-lg bg-zinc-950 border border-zinc-900 text-zinc-400">
                <Icon className="w-4 h-4" />
              </div>
              
              {/* Circular Gauge */}
              <div className="relative w-10 h-10 flex items-center justify-center">
                <svg className="w-10 h-10 transform -rotate-90 absolute">
                  <circle cx="20" cy="20" r="14" stroke="rgba(255,255,255,0.03)" strokeWidth="2.5" fill="transparent" />
                  <motion.circle 
                    cx="20" 
                    cy="20" 
                    r="14" 
                    stroke={kpi.strokeColor}
                    strokeWidth="2.5" 
                    fill="transparent" 
                    strokeDasharray={circumference}
                    initial={{ strokeDashoffset: circumference }}
                    animate={{ strokeDashoffset: circumference * (1 - kpi.score / 100) }}
                    transition={{ duration: 1, ease: "easeOut" }}
                  />
                </svg>
                <span className="text-[10px] font-mono font-bold text-white relative z-10">{kpi.score}</span>
              </div>
            </div>

            <h3 className="text-xs font-black text-white tracking-tight mb-1 uppercase">
              {kpi.title}
            </h3>
            <p className="text-[11px] text-zinc-450 leading-normal mb-3 font-sans">
              {kpi.tagline}
            </p>

            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4 pt-3 border-t border-zinc-950 mt-2"
                >
                  <p className="text-xs text-zinc-350 leading-relaxed font-sans font-medium">
                    {kpi.desc}
                  </p>

                  {/* Sub metrics progress bar */}
                  <div className="space-y-2">
                    <h4 className="text-[9px] text-zinc-550 font-mono tracking-widest uppercase">
                      SUBCOMPONENTS
                    </h4>
                    {kpi.subMetrics.map((sm, idx) => (
                      <div key={idx} className="space-y-1">
                        <div className="flex justify-between text-[10px] font-mono">
                          <span className="text-zinc-550">{sm.label}</span>
                          <span className="text-white font-bold">{sm.val}%</span>
                        </div>
                        <div className="w-full bg-zinc-950 h-1 rounded-full overflow-hidden border border-zinc-900/60">
                          <div 
                            className="bg-brand-indigo h-full" 
                            style={{ width: `${sm.val}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Evidence bullet points */}
                  <div className="space-y-2">
                    <h4 className="text-[9px] text-zinc-550 font-mono tracking-widest uppercase">
                      EVALUATION EVIDENCE
                    </h4>
                    <ul className="space-y-1.5">
                      {kpi.evidence.map((ev, idx) => (
                        <li key={idx} className="text-xs text-zinc-400 flex items-start space-x-2">
                          <Check className="w-3.5 h-3.5 text-brand-emerald mt-0.5 shrink-0" />
                          <span>{ev}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Click prompt footer */}
            <div className="mt-4 pt-2.5 border-t border-zinc-950 flex justify-between items-center text-[8px] font-mono text-zinc-650 uppercase tracking-wider">
              <span>METRIC_INDEX_LOG</span>
              <span className="text-brand-indigo">{isExpanded ? "COLLAPSE" : "EXPAND DETAILS"}</span>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
