"use client";

import { motion } from "framer-motion";
import { Code2, Database, Cloud, Settings, Terminal } from "lucide-react";

interface CapabilityMatrixProps {
  isRecruiterMode?: boolean;
}

interface Skill {
  name: string;
  projectUsed: string;
  level: "Expert" | "Advanced" | "Intermediate";
}

export default function CapabilityMatrix({ isRecruiterMode = false }: CapabilityMatrixProps) {
  const skillCategories: {
    title: string;
    icon: any;
    skills: Skill[];
  }[] = [
    {
      title: "Frontend Development",
      icon: Code2,
      skills: [
        { name: "React.js", projectUsed: "ClassTrack, Connekt, FindFake UI", level: "Expert" },
        { name: "TypeScript", projectUsed: "CSI Admin Tools", level: "Expert" },
        { name: "Redux Toolkit", projectUsed: "ClassTrack state manager", level: "Expert" },
        { name: "Next.js", projectUsed: "Executive Dashboard console", level: "Advanced" },
        { name: "JavaScript", projectUsed: "All web apps", level: "Advanced" },
        { name: "HTML/CSS", projectUsed: "All interfaces", level: "Advanced" },
      ],
    },
    {
      title: "Backend Services",
      icon: Terminal,
      skills: [
        { name: "FastAPI", projectUsed: "Examify core, FindFake scraper", level: "Expert" },
        { name: "Node.js", projectUsed: "ClassTrack, Connekt, Examify", level: "Expert" },
        { name: "Express.js", projectUsed: "Connekt social hub", level: "Expert" },
        { name: "Python", projectUsed: "Examify, FindFake ML algorithms", level: "Advanced" },
        { name: "Java", projectUsed: "Academic algorithms", level: "Advanced" },
        { name: "C/C++", projectUsed: "Embedded systems & classes", level: "Intermediate" },
      ],
    },
    {
      title: "Data & Cloud",
      icon: Database,
      skills: [
        { name: "MongoDB", projectUsed: "ClassTrack, Connekt records", level: "Expert" },
        { name: "PostgreSQL", projectUsed: "CSI event registrations", level: "Advanced" },
        { name: "MySQL", projectUsed: "Academic database queries", level: "Advanced" },
        { name: "SQL", projectUsed: "Database querying labs", level: "Advanced" },
        { name: "Redis", projectUsed: "Connekt chat synchronization", level: "Intermediate" },
        { name: "Amazon Web Services (AWS)", projectUsed: "Cloud architect certifications", level: "Intermediate" },
        { name: "IBM Blockchain Cloud", projectUsed: "Blockchain developer profiles", level: "Intermediate" },
      ],
    },
    {
      title: "DevOps & Tools",
      icon: Settings,
      skills: [
        { name: "Git / GitHub", projectUsed: "Version controllers for all", level: "Advanced" },
        { name: "Docker", projectUsed: "ClassTrack deployments", level: "Intermediate" },
        { name: "Postman", projectUsed: "API testing routines", level: "Advanced" },
        { name: "OpenCV", projectUsed: "Examify face proctoring", level: "Intermediate" },
        { name: "MediaPipe", projectUsed: "Examify biometric face tracking", level: "Intermediate" },
      ],
    },
  ];

  return (
    <div className="w-full space-y-4">
      <div className="flex justify-between items-center border-b border-zinc-900 pb-2">
        <span className="text-[10px] text-zinc-550 font-mono tracking-widest uppercase">
          CAPABILITY_INDEX
        </span>
        <span className="text-[10px] text-zinc-650 font-mono hidden sm:block">
          skills structured by domain
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {skillCategories.map((cat, idx) => {
          const Icon = cat.icon;
          return (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.08 }}
              className="glass-panel p-5 rounded-2xl border border-zinc-900 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center space-x-2 border-b border-zinc-950 pb-2.5 mb-3.5 text-zinc-400">
                  <Icon className="w-4 h-4 text-brand-indigo" />
                  <h4 className="text-xs font-bold text-white uppercase tracking-tight">{cat.title}</h4>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="px-2.5 py-1.5 rounded-lg bg-zinc-950 border border-zinc-900 font-mono text-[10px] text-zinc-355 select-none cursor-help relative group hover:border-brand-indigo/35 hover:text-white transition-all duration-200"
                    >
                      <span>{skill.name}</span>
                      <span className={`w-1 h-1 rounded-full inline-block ml-1.5 align-middle ${
                        skill.level === "Expert" 
                          ? "bg-brand-indigo" 
                          : skill.level === "Advanced" 
                          ? "bg-cyan-400" 
                          : "bg-purple-400"
                      }`} />

                      {/* Tooltip */}
                      <div className="absolute z-20 bottom-full left-1/2 -translate-x-1/2 mb-2 w-40 p-2 bg-zinc-950 border border-zinc-800 text-[9px] text-zinc-450 rounded-md opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200 shadow-xl leading-normal font-sans">
                        <span className="font-bold text-white block uppercase tracking-wider font-mono text-[8px] mb-0.5">
                          {skill.name} ({skill.level})
                        </span>
                        {skill.projectUsed}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 pt-2 border-t border-zinc-950 flex justify-between items-center text-[8px] font-mono text-zinc-650 uppercase">
                <span>SKILL_PILLS</span>
                <span>{cat.title.split(" ")[0]}</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
