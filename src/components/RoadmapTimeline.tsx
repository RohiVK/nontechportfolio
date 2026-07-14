"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Circle, Hourglass, Calendar, MapPin, Milestone } from "lucide-react";

interface MilestoneData {
  id: string;
  title: string;
  stage: "Discovery" | "Growth" | "Execution" | "Future";
  lane: "Academic & Tech" | "Leadership & Operations" | "Product Launch";
  timeline: string;
  status: "SHIPPED" | "ACTIVE" | "ROADMAP";
  location: string;
  summary: string;
  points: string[];
  metrics: string;
  skills: string[];
}

export default function RoadmapTimeline() {
  const [activeStage, setActiveStage] = useState<"All" | "Discovery" | "Growth" | "Execution" | "Future">("All");
  const [selectedMilestone, setSelectedMilestone] = useState<MilestoneData | null>(null);

  const milestones: MilestoneData[] = [
    {
      id: "school-head-boy",
      title: "School Head Boy Elective",
      stage: "Discovery",
      lane: "Leadership & Operations",
      timeline: "2017 – 2018 & 2019 – 2020",
      status: "SHIPPED",
      location: "Sri Chaitanya School, Chennai",
      summary: "Elected to represent a student body of 1,000+ peers, serving as the strategic primary liaison to senior school administration.",
      points: [
        "Served as strategic liaison between 1000+ student body and senior administration.",
        "Chaired steering committees to plan inter-school competitions, risk frameworks, and student policies.",
        "Coordinated cohort logistics and administrative assemblies.",
      ],
      metrics: "Liaised for 1000+ student body, coordinated 3 major inter-school events",
      skills: ["Stakeholder Management", "Conflict Resolution", "Strategic Planning"],
    },
    {
      id: "college-12th",
      title: "12th Grade (PCM & CS)",
      stage: "Discovery",
      lane: "Academic & Tech",
      timeline: "Passed: Mar. 2023",
      status: "SHIPPED",
      location: "Sri Chaitanya College, Chennai",
      summary: "Completed intermediate education in Physics, Chemistry, Mathematics, and Computer Science.",
      points: [
        "Graduated with an aggregate score of 80.6%.",
        "Focused on foundation mathematics, algorithm structures, and computer science concepts.",
      ],
      metrics: "Aggregate score: 80.6% in intermediate board exams",
      skills: ["Mathematics", "Computer Science", "Algorithms Base"],
    },
    {
      id: "vit-cse",
      title: "B.Tech Computer Science & Engineering",
      stage: "Growth",
      lane: "Academic & Tech",
      timeline: "Aug. 2023 – Apr. 2027",
      status: "ACTIVE",
      location: "VIT-AP University, Amaravati",
      summary: "Acquiring core engineering skills with focus on software architecture, database management, and system design.",
      points: [
        "Maintaining a consistent 8.00 / 10.00 CGPA.",
        "Exploring database management systems, data structures, and cloud architecting.",
        "Self-studying frameworks (Next.js, FastAPI, Docker) to support rapid MVP construction.",
      ],
      metrics: "CGPA 8.00/10.00 across computer science engineering curriculum",
      skills: ["Software Architecture", "Database Management", "System Design", "Algorithms"],
    },
    {
      id: "csi-manager",
      title: "CSI Chapter Manager",
      stage: "Execution",
      lane: "Leadership & Operations",
      timeline: "Academic Year 2025 – 2026",
      status: "SHIPPED",
      location: "VIT-AP CSI Chapter",
      summary: "Directed organizational product strategy, cross-functional roadmaps, and lifecycle operations for the largest student tech chapter on campus.",
      points: [
        "Managed resource budgeting and timelines for 1000+ active symposium participants.",
        "Led cross-functional cells aligning engineering, marketing, and logistics workflows.",
        "Translated complex technical constraints into actionable project milestones for dev teams.",
      ],
      metrics: "Managed operations for 1000+ event participants and 40+ executive committee members",
      skills: ["Agile Roadmaps", "Stakeholder Communication", "Resource Budgeting", "Cross-functional Leadership"],
    },
    {
      id: "hackathons",
      title: "HackFest & Technov Top 10 Finishes",
      stage: "Execution",
      lane: "Product Launch",
      timeline: "2024",
      status: "SHIPPED",
      location: "VIT-AP Hackathons",
      summary: "Delivering functional MVPs under high-pressure, short-turnaround environments.",
      points: [
        "Placed Top 10 at Great India HackFest '24 (ranked among top submissions out of competitive regional entries).",
        "Placed Top 10 at Technov 24-Hour National Hackathon.",
        "Led product definition, MVP scoping, and on-stage pitches to innovation panels.",
      ],
      metrics: "Double Top 10 placements in national/regional hackathons",
      skills: ["MVP Scoping", "On-stage Pitching", "Rapid Prototyping"],
    },
    {
      id: "tpa-ldp",
      title: "Technical Product Analyst - 2027 LDP",
      stage: "Future",
      lane: "Leadership & Operations",
      timeline: "2027+",
      status: "ROADMAP",
      location: "Target Program",
      summary: "Leveraging engineering background, cloud architecture certifications, and CSI operations management to coordinate cross-functional product teams.",
      points: [
        "Manage project backlogs, write technical specifications, and prioritize features using RICE grids.",
        "Align multi-functional teams to execute high-impact software roadmaps.",
        "Run user research loops to translate consumer pain into system requirements.",
      ],
      metrics: "Targeting 100% schedule alignment in product and engineering operations",
      skills: ["Product Strategy", "Data-Driven Decisions", "Backlog Sprints", "Agile Sprints"],
    },
  ];

  const filteredMilestones = activeStage === "All" 
    ? milestones 
    : milestones.filter(m => m.stage === activeStage);

  const getStatusIcon = (status: "SHIPPED" | "ACTIVE" | "ROADMAP") => {
    switch (status) {
      case "SHIPPED":
        return <CheckCircle2 className="w-4 h-4 text-brand-emerald" />;
      case "ACTIVE":
        return <Circle className="w-4 h-4 text-[#06b6d4] animate-pulse" />;
      case "ROADMAP":
        return <Hourglass className="w-4 h-4 text-zinc-500" />;
    }
  };

  const getStatusBadge = (status: "SHIPPED" | "ACTIVE" | "ROADMAP") => {
    switch (status) {
      case "SHIPPED":
        return "bg-brand-emerald/10 border-brand-emerald/20 text-brand-emerald";
      case "ACTIVE":
        return "bg-cyan-500/10 border-cyan-500/20 text-[#06b6d4]";
      case "ROADMAP":
        return "bg-zinc-800 border-zinc-700 text-zinc-400";
    }
  };

  const stages = ["All", "Discovery", "Growth", "Execution", "Future"];

  return (
    <div className="w-full relative space-y-6">
      {/* Filters */}
      <div className="flex flex-wrap items-center gap-1.5 border-b border-zinc-900 pb-3">
        {stages.map((stage) => (
          <button
            key={stage}
            onClick={() => setActiveStage(stage as any)}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono border transition-all duration-200 cursor-pointer ${
              activeStage === stage
                ? "bg-zinc-900 border-zinc-700 text-white shadow-inner"
                : "border-transparent text-zinc-550 hover:text-zinc-300"
            }`}
          >
            {stage.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Grid Roadmap Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Lane 1: Academic & Tech */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2 border-b border-zinc-900 pb-2 mb-2">
            <span className="text-[10px] text-zinc-550 font-mono tracking-widest uppercase">ACADEMIC & TECHNOLOGY</span>
          </div>
          <div className="space-y-4">
            {filteredMilestones
              .filter((m) => m.lane === "Academic & Tech")
              .map((m) => (
                <MilestoneCard
                  key={m.id}
                  milestone={m}
                  getStatusIcon={getStatusIcon}
                  getStatusBadge={getStatusBadge}
                  onClick={() => setSelectedMilestone(m)}
                />
              ))}
          </div>
        </div>

        {/* Lane 2: Leadership & Operations */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2 border-b border-zinc-900 pb-2 mb-2">
            <span className="text-[10px] text-zinc-550 font-mono tracking-widest uppercase">LEADERSHIP & OPERATIONS</span>
          </div>
          <div className="space-y-4">
            {filteredMilestones
              .filter((m) => m.lane === "Leadership & Operations")
              .map((m) => (
                <MilestoneCard
                  key={m.id}
                  milestone={m}
                  getStatusIcon={getStatusIcon}
                  getStatusBadge={getStatusBadge}
                  onClick={() => setSelectedMilestone(m)}
                />
              ))}
          </div>
        </div>

        {/* Lane 3: Product Launch */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2 border-b border-zinc-900 pb-2 mb-2">
            <span className="text-[10px] text-zinc-550 font-mono tracking-widest uppercase">PRODUCT LAUNCH</span>
          </div>
          <div className="space-y-4">
            {filteredMilestones
              .filter((m) => m.lane === "Product Launch")
              .map((m) => (
                <MilestoneCard
                  key={m.id}
                  milestone={m}
                  getStatusIcon={getStatusIcon}
                  getStatusBadge={getStatusBadge}
                  onClick={() => setSelectedMilestone(m)}
                />
              ))}
          </div>
        </div>
      </div>

      {/* Modal Detail Overlay */}
      <AnimatePresence>
        {selectedMilestone && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMilestone(null)}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-x-4 bottom-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 z-50 w-full max-w-xl glass-panel p-6 sm:p-8 rounded-xl border border-zinc-800 shadow-2xl overflow-y-auto max-h-[85vh]"
            >
              {/* Header */}
              <div className="flex justify-between items-start border-b border-zinc-800 pb-4 mb-4">
                <div>
                  <div className="flex items-center space-x-2 mb-1.5">
                    <span className={`text-[9px] px-2 py-0.5 rounded-full border uppercase font-mono ${getStatusBadge(selectedMilestone.status)}`}>
                      {selectedMilestone.status}
                    </span>
                    <span className="text-[9px] text-zinc-550 font-mono">
                      {selectedMilestone.stage.toUpperCase()} STAGE
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white leading-tight">
                    {selectedMilestone.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedMilestone(null)}
                  className="p-1 rounded bg-zinc-900 border border-zinc-800 text-zinc-550 hover:text-white cursor-pointer"
                >
                  <Hourglass className="w-3.5 h-3.5 rotate-45" />
                </button>
              </div>

              {/* Sub-header details */}
              <div className="grid grid-cols-2 gap-4 text-xs font-mono text-zinc-400 mb-5 bg-zinc-950/60 p-3 rounded-lg border border-zinc-900">
                <div className="flex items-center space-x-1.5">
                  <Calendar className="w-3.5 h-3.5 text-brand-indigo" />
                  <span>{selectedMilestone.timeline}</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#06b6d4]" />
                  <span>{selectedMilestone.location}</span>
                </div>
              </div>

              {/* Summary */}
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-4 font-sans font-medium">
                {selectedMilestone.summary}
              </p>

              {/* Bullet points */}
              <div className="space-y-3 mb-5">
                <h4 className="text-[10px] text-zinc-550 font-mono tracking-wider uppercase">KEY WORK ITEMS</h4>
                <ul className="space-y-2">
                  {selectedMilestone.points.map((p, i) => (
                    <li key={i} className="text-xs text-zinc-400 flex items-start space-x-2">
                      <span className="text-brand-indigo font-bold mt-0.5">•</span>
                      <span className="font-sans leading-relaxed">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Impact / Metric */}
              <div className="mb-5 p-3 rounded-lg bg-brand-indigo/5 border border-brand-indigo/10 flex items-start space-x-3">
                <Milestone className="w-4 h-4 text-brand-indigo mt-0.5 shrink-0" />
                <div>
                  <h4 className="text-[9px] text-zinc-550 font-mono uppercase tracking-wider">BUSINESS / PERFORMANCE METRIC</h4>
                  <p className="text-xs text-zinc-200 font-medium font-sans">
                    {selectedMilestone.metrics}
                  </p>
                </div>
              </div>

              {/* Skills tags */}
              <div>
                <h4 className="text-[10px] text-zinc-550 font-mono tracking-wider uppercase mb-2">SKILLS INGESTED</h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedMilestone.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="text-[9px] px-2 py-0.5 rounded font-mono border bg-zinc-900 border-zinc-800 text-zinc-400"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

interface MilestoneCardProps {
  milestone: MilestoneData;
  getStatusIcon: any;
  getStatusBadge: any;
  onClick: () => void;
}

function MilestoneCard({ milestone, getStatusIcon, getStatusBadge, onClick }: MilestoneCardProps) {
  return (
    <motion.div
      onClick={onClick}
      className="glass-panel p-4 rounded-xl border border-zinc-900 hover:border-zinc-800 cursor-pointer group transition-all duration-300 relative"
      whileHover={{ scale: 1.01 }}
    >
      <div className="flex justify-between items-start mb-2">
        <div className="flex items-center space-x-1.5">
          {getStatusIcon(milestone.status)}
          <span className="text-[10px] text-zinc-550 font-mono tracking-tight">{milestone.timeline.split(" – ")[0]}</span>
        </div>
        <span className={`text-[8px] px-1.5 py-0.5 rounded uppercase font-mono border ${getStatusBadge(milestone.status)}`}>
          {milestone.status}
        </span>
      </div>

      <h4 className="text-xs font-semibold text-zinc-200 group-hover:text-white leading-tight mb-2 transition-colors duration-300">
        {milestone.title}
      </h4>

      <p className="text-[11px] text-zinc-450 leading-normal line-clamp-2 mb-3">
        {milestone.summary}
      </p>

      <div className="flex justify-between items-center text-[9px] text-zinc-600 font-mono pt-2.5 border-t border-zinc-950">
        <span>{milestone.stage.toUpperCase()}_STAGE</span>
        <span className="text-brand-indigo group-hover:underline">VIEW SPEC &rarr;</span>
      </div>
    </motion.div>
  );
}
