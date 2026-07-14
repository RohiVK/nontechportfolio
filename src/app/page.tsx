"use client";

import { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import NetworkGraph from "@/components/NetworkGraph";

// Custom SVG Icons
const MailIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const PhoneIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const MapPinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const FileTextIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
    <path d="M14 2v4a2 2 0 0 0 2 2h4" />
    <path d="M10 9H8" />
    <path d="M16 13H8" />
    <path d="M16 17H8" />
  </svg>
);

const ExternalLinkIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 3h6v6" />
    <path d="M10 14 21 3" />
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
  </svg>
);

// High-fidelity SVG Doodles matching the Nia s. reference image
const PaintPaletteDoodle = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
    <path d="M80 35C80 20 60 10 40 10S10 25 10 50s20 40 45 40 35-15 35-30c0-5-5-8-10-8s-8 3-8 8c0 10-10 15-22 15s-25-10-25-25S48 25 65 25c8 0 15 5 15 10z" fill="rgba(255,255,255,0.05)" strokeLinecap="round"/>
    <circle cx="30" cy="35" r="5" fill="#facc15" />
    <circle cx="50" cy="30" r="5" fill="#ef4444" />
    <circle cx="35" cy="55" r="5" fill="#3b82f6" />
    <circle cx="55" cy="65" r="5" fill="#10b981" />
  </svg>
);

const ThreadSpoolsDoodle = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
    <rect x="25" y="30" width="30" height="40" rx="3" fill="rgba(255,255,255,0.05)" />
    <path d="M25 38h30M25 46h30M25 54h30M25 62h30" stroke="#f472b6" strokeWidth="3" />
    <line x1="40" y1="20" x2="40" y2="80" stroke="currentColor" strokeWidth="4" />
  </svg>
);

const CameraDoodle = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.5" {...props}>
    <rect x="15" y="30" width="70" height="45" rx="5" fill="rgba(255,255,255,0.05)" />
    <path d="M35 30V22h30v8" />
    <circle cx="50" cy="52" r="16" stroke="currentColor" fill="rgba(0,0,0,0.2)" />
    <circle cx="50" cy="52" r="8" fill="#06b6d4" />
  </svg>
);

const DraftingRulerDoodle = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
    <path d="M10 90 L90 90 L10 10 Z" fill="rgba(255,255,255,0.05)" />
    <path d="M25 80 L70 80 L25 35 Z" fill="rgba(0,0,0,0.1)" />
  </svg>
);

const ColoredPencilsDoodle = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
    <rect x="20" y="40" width="60" height="50" rx="3" fill="rgba(255,255,255,0.05)" />
    <path d="M30 40 L30 15 L35 25 Z" fill="#ef4444" stroke="currentColor" />
    <path d="M45 40 L45 10 L50 20 Z" fill="#3b82f6" stroke="currentColor" />
    <path d="M60 40 L60 15 L65 25 Z" fill="#facc15" stroke="currentColor" />
  </svg>
);

const ArchitecturalModelDoodle = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
    <path d="M20 80 L50 30 L80 80 Z" fill="rgba(255,255,255,0.05)" />
    <path d="M35 80 L50 55 L65 80 Z" fill="rgba(0,0,0,0.15)" />
    <line x1="10" y1="80" x2="90" y2="80" stroke="currentColor" strokeWidth="3" />
  </svg>
);

const HandDrawnStar = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <path d="M12 2 L15 9 L22 10 L17 15 L18 22 L12 18 L6 22 L7 15 L2 10 L9 9 Z" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const HandDrawnSwirl = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <path d="M3 12 C 8 2, 16 2, 21 12 C 16 22, 8 22, 3 12" strokeLinecap="round" />
  </svg>
);

export default function Home() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleDeskMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: x * 10, y: y * 10 });
  };

  const handleDeskMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("rohith.vit.2005@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Upgraded viewport scroll animation settings
  const scrollRevealSetting = {
    initial: { opacity: 0, y: 25 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.6, ease: "easeOut" as const }
  };

  return (
    <div className="min-h-screen text-slate-100 bg-gradient-to-b from-[#2a66e4] via-[#1a4dc4] to-[#0f3299] selection:bg-white/30 selection:text-white font-sans relative overflow-x-hidden pb-24">
      
      {/* Constellation Particle overlay canvas */}
      <NetworkGraph />

      {/* Floating Illustrated Background Objects (Doodles) */}
      {/* Paint Palette */}
      <div className="absolute top-20 left-[5%] w-16 h-16 sm:w-20 sm:h-20 text-white/50 hover:text-white hover:scale-115 transition-all duration-300 cursor-pointer animate-float-slow z-20 group">
        <PaintPaletteDoodle className="w-full h-full filter drop-shadow-[0_0_8px_rgba(255,255,255,0.1)]" />
        <span className="absolute top-22 left-1/2 -translate-x-1/2 text-[9px] font-mono tracking-wider opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap bg-black/45 px-2 py-0.5 rounded">PM CORE</span>
      </div>

      {/* Thread Spools */}
      <div className="absolute top-24 right-[8%] w-14 h-14 sm:w-16 sm:h-16 text-white/50 hover:text-white hover:scale-115 transition-all duration-300 cursor-pointer animate-float-medium z-20 group">
        <ThreadSpoolsDoodle className="w-full h-full filter drop-shadow-[0_0_8px_rgba(255,255,255,0.1)]" />
        <span className="absolute top-18 left-1/2 -translate-x-1/2 text-[9px] font-mono tracking-wider opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap bg-black/45 px-2 py-0.5 rounded">CHAPTER OPS</span>
      </div>

      {/* Colored Pencils */}
      <div className="absolute top-[45%] left-[4%] w-14 h-14 sm:w-16 sm:h-16 text-white/50 hover:text-white hover:scale-115 transition-all duration-300 cursor-pointer animate-float-fast z-20 group">
        <ColoredPencilsDoodle className="w-full h-full filter drop-shadow-[0_0_8px_rgba(255,255,255,0.1)]" />
        <span className="absolute top-18 left-1/2 -translate-x-1/2 text-[9px] font-mono tracking-wider opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap bg-black/45 px-2 py-0.5 rounded">TECH STACK</span>
      </div>

      {/* Camera */}
      <div className="absolute top-[38%] right-[5%] w-16 h-16 sm:w-20 sm:h-20 text-white/50 hover:text-white hover:scale-115 transition-all duration-300 cursor-pointer animate-float-slow z-20 group">
        <CameraDoodle className="w-full h-full filter drop-shadow-[0_0_8px_rgba(255,255,255,0.1)]" />
        <span className="absolute top-22 left-1/2 -translate-x-1/2 text-[9px] font-mono tracking-wider opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap bg-black/45 px-2 py-0.5 rounded">DOCUMENTATION</span>
      </div>

      {/* Architecture Model */}
      <div className="absolute bottom-[35%] left-[8%] w-14 h-14 sm:w-16 sm:h-16 text-white/50 hover:text-white hover:scale-115 transition-all duration-300 font-bold cursor-pointer animate-float-medium z-20 group">
        <ArchitecturalModelDoodle className="w-full h-full filter drop-shadow-[0_0_8px_rgba(255,255,255,0.1)]" />
        <span className="absolute top-18 left-1/2 -translate-x-1/2 text-[9px] font-mono tracking-wider opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap bg-black/45 px-2 py-0.5 rounded">SYSTEMS</span>
      </div>

      {/* Ruler */}
      <div className="absolute bottom-[38%] right-[10%] w-14 h-14 sm:w-16 sm:h-16 text-white/50 hover:text-white hover:scale-115 transition-all duration-300 cursor-pointer animate-float-fast z-20 group">
        <DraftingRulerDoodle className="w-full h-full filter drop-shadow-[0_0_8px_rgba(255,255,255,0.1)]" />
        <span className="absolute top-18 left-1/2 -translate-x-1/2 text-[9px] font-mono tracking-wider opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap bg-black/45 px-2 py-0.5 rounded">METRICS</span>
      </div>

      {/* Glowing Star and Swirl accents */}
      <HandDrawnStar className="absolute top-10 left-1/3 w-6 h-6 text-white/20 rotate-[12deg]" />
      <HandDrawnStar className="absolute bottom-20 right-1/4 w-8 h-8 text-white/20 rotate-[-25deg]" />
      <HandDrawnSwirl className="absolute top-[28%] left-[25%] w-12 h-12 text-white/10" />

      {/* Floating glass navigation header */}
      <header className="sticky top-0 left-0 right-0 z-40 bg-[#2a66e4]/45 backdrop-blur-md px-6 py-4 max-w-5xl mx-auto w-full flex justify-between items-center rounded-b-2xl border-b border-white/10 shadow-lg">
        <div className="flex items-center space-x-1.5 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <span className="text-xl font-cursive text-white tracking-wider drop-shadow-md">vk.rohith.</span>
        </div>

        <nav className="hidden sm:flex space-x-6 text-[10px] font-mono tracking-widest text-white/80 uppercase">
          <button onClick={() => scrollToSection("experience")} className="hover:text-yellow-355 transition-colors cursor-pointer">EXPERIENCE</button>
          <button onClick={() => scrollToSection("projects")} className="hover:text-yellow-355 transition-colors cursor-pointer">PROJECTS</button>
          <button onClick={() => scrollToSection("skills")} className="hover:text-yellow-355 transition-colors cursor-pointer">SKILLS</button>
          <button onClick={() => scrollToSection("contact")} className="hover:text-yellow-355 transition-colors cursor-pointer">CONTACT</button>
        </nav>

        <a 
          href="/resume.pdf"
          target="_blank"
          className="px-4 py-2 bg-white text-[#2a66e4] font-mono rounded-full text-[10px] tracking-widest transition-all duration-200 cursor-pointer flex items-center space-x-1.5 font-bold shadow-md hover:bg-slate-100 hover:scale-105"
        >
          <FileTextIcon className="w-3.5 h-3.5" />
          <span>RESUME.PDF</span>
        </a>
      </header>

      {/* Main layout */}
      <main className="max-w-4xl mx-auto px-6 pt-16 space-y-24 relative z-10">
        
        {/* Hero Section */}
        <section className="flex flex-col items-center text-center space-y-6 max-w-2xl mx-auto">
          
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-rounded font-extrabold text-white tracking-tight leading-none drop-shadow">
              Hi, I'm Rohith!
            </h1>
            
            <p className="text-base sm:text-lg text-white leading-relaxed font-sans font-medium px-4">
              A final-year Computer Science student at VIT-AP University. I build systems and manage operations, bridging{" "}
              <span className="underline decoration-white decoration-2 underline-offset-4 font-bold">technical execution</span>
              {" "}with{" "}
              <span className="underline decoration-yellow-300 decoration-2 underline-offset-4 font-bold">product business strategy</span>
              . I enjoy building tools that make life easier!
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-1.5 pt-2 text-[10px] font-mono text-white/60">
            <span>CHENNAI, INDIA</span>
            <span>&bull;</span>
            <span>+91 9962685162</span>
            <span>&bull;</span>
            <span onClick={handleCopyEmail} className="cursor-pointer hover:text-white transition-colors duration-200">
              {copiedEmail ? "COPIED!" : "rohith.vit.2005@gmail.com"}
            </span>
          </div>

          {/* Central Illustration: Seated Person at Desk with organic fluid splashes */}
          <div className="w-full pt-10 flex flex-col items-center relative select-none overflow-visible">
            
            {/* Organic Fluid Radiating Splashes */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
              <div className="w-72 h-72 sm:w-80 sm:h-80 bg-yellow-400/35 rounded-full blur-3xl absolute -translate-y-4 translate-x-4 animate-pulse" />
              <div className="w-[300px] h-[300px] sm:w-[360px] sm:h-[360px] bg-emerald-400/25 rounded-full blur-3xl absolute translate-y-8 -translate-x-12" />
              <div className="w-[260px] h-[260px] sm:w-[300px] sm:h-[300px] bg-cyan-400/25 rounded-full blur-3xl absolute -translate-y-12 -translate-x-6" />
              <div className="w-[320px] h-[320px] sm:w-[380px] sm:h-[380px] bg-pink-400/15 rounded-full blur-3xl absolute translate-y-4 translate-x-16" />
            </div>

            {/* Interactive Desk Wrapper with 3D Parallax Tilt & Mobile Scale */}
            <div 
              onMouseMove={handleDeskMouseMove}
              onMouseLeave={handleDeskMouseLeave}
              className="w-full max-w-lg aspect-[4/3] bg-[#2250bd]/40 border-2 border-white/20 rounded-3xl p-4 sm:p-6 shadow-2xl flex items-center justify-center relative overflow-hidden group transition-all duration-200 z-10 scale-[0.88] xs:scale-[0.93] sm:scale-100 origin-center"
              style={
                isMobile 
                  ? undefined 
                  : {
                      transform: `perspective(1000px) rotateY(${tilt.x}deg) rotateX(${-tilt.y}deg)`,
                      transformStyle: "preserve-3d",
                    }
              }
            >
              {/* Glass table top backdrop */}
              <div className="absolute inset-0 bg-[#163fa1]/50 backdrop-blur-md pointer-events-none" />

              {/* Seated Designer Person drawing in center (Upgraded to high-fidelity SVG) */}
              <div 
                className="absolute bottom-0 flex flex-col items-center translate-y-10 sm:translate-y-6 pointer-events-none z-20 transition-transform duration-200"
                style={isMobile ? { transform: "scale(0.85) translateY(12px)" } : undefined}
              >
                <svg className="w-44 h-28 sm:w-48 sm:h-32 text-[#f5c396] overflow-visible" viewBox="0 0 200 130" fill="none">
                  <defs>
                    <linearGradient id="hoodieGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#0d9488" />
                      <stop offset="100%" stopColor="#0b7a70" />
                    </linearGradient>
                    <linearGradient id="hairGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#523d2f" />
                      <stop offset="100%" stopColor="#2c1e16" />
                    </linearGradient>
                    <filter id="dropShadow" x="-10%" y="-10%" width="120%" height="120%">
                      <feDropShadow dx="0" dy="3" stdDeviation="3" floodOpacity="0.25" />
                    </filter>
                  </defs>

                  {/* TORSO & HOODIE */}
                  <path d="M20 130 C 20 90, 60 70, 100 70 C 140 70, 180 90, 180 130 Z" fill="url(#hoodieGrad)" filter="url(#dropShadow)" />
                  
                  {/* Hood folds */}
                  <path d="M70 73 C 80 65, 120 65, 130 73 C 120 85, 80 85, 70 73 Z" fill="#095f57" />
                  <path d="M85 75 C 95 72, 105 72, 115 75" stroke="#115e59" strokeWidth="2" strokeLinecap="round" />
                  
                  {/* ARMS & HANDS */}
                  {/* Left sleeve & hand resting */}
                  <path d="M30 130 Q 55 90 75 95" stroke="url(#hoodieGrad)" strokeWidth="16" strokeLinecap="round" />
                  <circle cx="78" cy="95" r="9" fill="#f5c396" />
                  <path d="M78 95 C 72 95, 68 100, 72 104" stroke="#e0ac82" strokeWidth="1.5" strokeLinecap="round" />

                  {/* Right sleeve & drawing hand */}
                  <path d="M170 130 Q 145 92 125 90" stroke="url(#hoodieGrad)" strokeWidth="16" strokeLinecap="round" />
                  <circle cx="123" cy="88" r="9" fill="#f5c396" />
                  <path d="M123 88 C 125 80, 115 80, 113 85" stroke="#e0ac82" strokeWidth="1.5" strokeLinecap="round" />
                  
                  {/* Yellow Stylus Drawing Pencil */}
                  <line x1="123" y1="88" x2="108" y2="72" stroke="#eab308" strokeWidth="3" strokeLinecap="round" />
                  <path d="M109 73 L108 72 L111 75 Z" fill="#1e293b" />
                  
                  {/* Neck */}
                  <path d="M86 70 C 86 58, 114 58, 114 70 Z" fill="#e0ac82" />

                  {/* Gaze Rotated Head group */}
                  <g 
                    id="headGroup"
                    style={
                      isMobile 
                        ? undefined 
                        : {
                            transform: `rotate(${tilt.x * 2.5}deg) translate(${tilt.x * 0.7}px, ${tilt.y * 0.7}px)`,
                            transformOrigin: "100px 48px",
                            transition: "transform 100ms ease-out"
                          }
                    }
                  >
                    {/* Head Skin circle */}
                    <circle cx="100" cy="48" r="28" fill="#f5c396" filter="url(#dropShadow)" />
                    
                    {/* Detailed wavy Hair locks */}
                    <path d="M72 48 C 72 30, 85 18, 100 18 C 115 18, 128 30, 128 48 C 128 55, 122 62, 118 64 C 112 60, 108 62, 100 62 C 92 62, 88 60, 82 64 C 78 62, 72 55, 72 48 Z" fill="url(#hairGrad)" />
                    <path d="M78 40 C 85 28, 100 24, 115 28 C 122 34, 125 42, 124 48" stroke="#6b4c35" strokeWidth="2.5" strokeLinecap="round" />
                    <path d="M82 45 C 90 35, 100 35, 110 40" stroke="#6b4c35" strokeWidth="2" strokeLinecap="round" />
                    <path d="M90 28 C 95 24, 105 24, 110 28" stroke="#3d2a1f" strokeWidth="2" strokeLinecap="round" />

                    {/* High-Fidelity Programmer Headset */}
                    <path d="M74 38 C 80 25, 120 25, 126 38" stroke="#27272a" strokeWidth="4" fill="none" strokeLinecap="round" />
                    <path d="M74 38 C 80 25, 120 25, 126 38" stroke="#3f3f46" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                    {/* Left Cup & Cyan status light */}
                    <rect x="68" y="38" width="6" height="18" rx="3" fill="#27272a" stroke="#3f3f46" strokeWidth="1" />
                    <circle cx="71" cy="47" r="1.5" fill="#06b6d4" />
                    {/* Right Cup */}
                    <rect x="126" y="38" width="6" height="18" rx="3" fill="#27272a" stroke="#3f3f46" strokeWidth="1" />
                  </g>
                </svg>
              </div>

              {/* Steaming Coffee Cup (Top Left) */}
              <div 
                onClick={() => scrollToSection("contact")}
                className="absolute top-4 sm:top-6 left-4 sm:left-8 cursor-pointer group/coffee transition-transform hover:scale-110 z-30"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/30 border border-white/20 flex items-center justify-center shadow-lg group-hover/coffee:border-white/50 transition-all duration-300">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#1b3fa1] border border-white/20 flex items-center justify-center">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#3c2212] flex items-center justify-center">
                      <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#2a170c]" />
                    </div>
                  </div>
                  <div className="absolute -top-3 flex space-x-0.5 opacity-40 group-hover/coffee:opacity-100 transition-opacity">
                    <div className="w-0.5 h-2.5 sm:h-3 bg-white rounded-full animate-pulse" />
                    <div className="w-0.5 h-3.5 sm:h-4.5 bg-white rounded-full animate-pulse [animation-delay:0.2s]" />
                    <div className="w-0.5 h-2.5 sm:h-3 bg-white rounded-full animate-pulse [animation-delay:0.4s]" />
                  </div>
                </div>
                <span className="absolute top-12 sm:top-14 left-1/2 -translate-x-1/2 text-[7px] sm:text-[8px] font-mono text-white/80 uppercase tracking-widest opacity-0 group-hover/coffee:opacity-100 transition-opacity whitespace-nowrap bg-black/50 px-1.5 py-0.5 rounded">
                  CONTACT
                </span>
              </div>

              {/* Tablet (Left Side) */}
              <div 
                onClick={() => scrollToSection("skills")}
                className="absolute left-3 sm:left-6 top-[32%] sm:top-[35%] w-16 sm:w-20 h-24 sm:h-28 bg-[#1e293b] border-2 border-white/20 rounded-lg p-1 sm:p-1.5 cursor-pointer group/tablet transition-all duration-300 hover:scale-105 hover:border-white/50 shadow-xl z-30"
              >
                <div className="w-full h-full border border-white/5 rounded bg-black/45 p-1 flex flex-col justify-between font-mono text-[5px] sm:text-[5.5px] text-white/70">
                  <div className="text-[5.5px] sm:text-[6px] text-yellow-300 font-bold">// SKILLS</div>
                  <div className="space-y-1">
                    <div className="h-0.5 sm:h-1 bg-white/10 rounded" />
                    <div className="h-0.5 sm:h-1 bg-white/10 rounded w-2/3" />
                  </div>
                  <span className="text-[4px] sm:text-[4.5px] text-right text-white/40">TECH_PORTAL</span>
                </div>
                <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[7px] font-mono text-white/80 uppercase tracking-widest opacity-0 group-hover/tablet:opacity-100 transition-opacity whitespace-nowrap bg-black/50 px-1.5 py-0.5 rounded">
                  SKILLS
                </span>
              </div>

              {/* central drawing sketchbook */}
              <div className="w-28 sm:w-36 h-36 sm:h-48 bg-white border border-slate-300 rounded shadow-2xl p-2 sm:p-3 absolute top-6 sm:top-10 flex flex-col justify-between font-mono text-[6px] sm:text-[7px] text-slate-800 z-10 select-none">
                <div className="flex justify-between items-center border-b border-slate-100 pb-1">
                  <span className="font-bold text-[#2a66e4]">ROHITH // CSE</span>
                  <span className="text-[4.5px] sm:text-[5.5px] text-slate-400">PAGE_01</span>
                </div>
                
                <div className="flex-1 flex flex-col justify-center items-center py-1 sm:py-2 space-y-1 sm:space-y-1.5">
                  <div className="w-12 sm:w-16 h-0.5 sm:h-1 bg-[#2a66e4] rounded-full" />
                  <div className="w-16 sm:w-20 h-0.5 sm:h-1 bg-slate-300 rounded-full" />
                  <div className="w-10 sm:w-12 h-0.5 sm:h-1 bg-slate-350 rounded-full" />
                  <div className="w-20 sm:w-24 h-0.5 sm:h-1 bg-slate-300 rounded-full" />
                  <div className="border border-dashed border-slate-400 p-0.5 sm:p-1 w-20 sm:w-24 text-center text-[4px] sm:text-[5px] text-slate-550 rounded my-0.5 sm:my-1">
                    [INTEGRATING TECH + BIZ]
                  </div>
                </div>

                <span className="text-[4.5px] sm:text-[5px] text-slate-400 text-right">VIT-AP UNIVERSITY</span>
              </div>

              {/* CSI Notebook Binder (Right Side) */}
              <div 
                onClick={() => scrollToSection("experience")}
                className="absolute right-3 sm:right-6 top-[15%] sm:top-[20%] w-20 sm:w-24 h-26 sm:h-32 bg-[#1e1e38] border border-white/20 rounded-lg p-1.5 cursor-pointer group/notebook hover:scale-105 hover:border-white/50 transition-all duration-300 shadow-xl z-30"
              >
                <div className="absolute left-[-2px] inset-y-3 sm:inset-y-4 flex flex-col justify-between w-0.5 text-yellow-400 text-[6px] sm:text-[8px] leading-none select-none">
                  <span>o</span><span>o</span><span>o</span><span>o</span><span>o</span>
                </div>

                <div className="w-full h-full border border-dashed border-white/5 rounded p-1 sm:p-1.5 flex flex-col justify-between font-mono text-[4.5px] sm:text-[5.5px] text-white/80">
                  <div>
                    <span className="text-yellow-300 font-bold block mb-0.5 sm:mb-1 text-[5px] sm:text-[6px]">CSI MGR</span>
                    <span className="block text-white/50 text-[4px] sm:text-[5px]">Organized Symposia</span>
                  </div>
                  <span className="text-[3.5px] sm:text-[4px] text-right text-white/30">EXPERIENCE</span>
                </div>
                <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[7px] font-mono text-white/80 uppercase tracking-widest opacity-0 group-hover/notebook:opacity-100 transition-opacity whitespace-nowrap bg-black/50 px-1.5 py-0.5 rounded">
                  EXPERIENCE
                </span>
              </div>

              {/* AWS Credentials Folder (Bottom Right) */}
              <div 
                onClick={() => scrollToSection("credentials")}
                className="absolute bottom-3 sm:bottom-4 right-4 sm:right-8 w-16 sm:w-20 h-12 sm:h-16 bg-[#16254a] border border-white/20 rounded-lg p-1 sm:p-1.5 cursor-pointer group/folder hover:scale-105 hover:border-white/50 transition-all duration-300 shadow-xl z-30"
              >
                <div className="w-full h-full border border-white/5 rounded bg-black/30 flex flex-col justify-between items-center p-0.5 sm:p-1 font-mono text-[4.5px] sm:text-[5.5px] text-white/70">
                  <div className="px-0.5 sm:px-1 bg-yellow-300/10 border border-yellow-300/30 text-yellow-300 font-bold rounded text-[4.5px] sm:text-[5px]">
                    AWS
                  </div>
                  <span className="text-[3.5px] sm:text-[4px]">CERTIFIED</span>
                </div>
                <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[7px] font-mono text-white/80 uppercase tracking-widest opacity-0 group-hover/folder:opacity-100 transition-opacity whitespace-nowrap bg-black/50 px-1.5 py-0.5 rounded">
                  CERTIFICATES
                </span>
              </div>

            </div>
          </div>
        </section>

        {/* Section 1: Experience */}
        <section id="experience" className="space-y-8 pt-8 scroll-mt-24">
          <div className="space-y-2">
            <span className="text-xs font-mono text-white/60 uppercase tracking-widest block">01 / OPERATIONS & TIMELINE</span>
            <h2 className="text-2xl font-rounded font-extrabold text-white uppercase drop-shadow-sm">Experience & Leadership</h2>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {/* CSI */}
            <motion.div 
              {...scrollRevealSetting}
              className="p-6 sm:p-8 bg-white/5 border border-white/10 rounded-3xl relative overflow-hidden group hover:bg-white/8 hover:border-white/20 transition-all duration-300 shadow-xl backdrop-blur-md"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 border-b border-white/10 pb-4 mb-4">
                <div>
                  <h3 className="text-base sm:text-lg font-rounded font-bold text-white uppercase">Computer Society of India (CSI) Chapter</h3>
                  <span className="text-[10px] text-yellow-300 font-mono uppercase tracking-widest block mt-0.5">ROLE: CHAPTER MANAGER &bull; VIT-AP</span>
                </div>
                <span className="text-[9px] font-mono text-white/60 bg-black/35 px-2.5 py-1 rounded-lg border border-white/10 shrink-0">
                  Academic Year 2025 – 2026
                </span>
              </div>

              <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-sans mb-4 font-medium">
                Directed organizational product strategy, cross-functional roadmaps, and lifecycle operations for the largest student tech chapter on campus, aligning engineering, marketing, and logistics workflows.
              </p>

              <ul className="list-disc pl-4 text-xs text-white/60 space-y-2 font-sans leading-relaxed">
                <li>Spearheaded product-led end-to-end execution of high-visibility technical symposiums, coding bootcamps, and hackathons; effectively managed project timelines and resource budgeting for 1,000+ active participants.</li>
                <li>Acted as a crucial product bridge between technical development teams and campus administration, translating complex constraints into actionable project milestones.</li>
              </ul>
            </motion.div>

            {/* Head Boy */}
            <motion.div 
              {...scrollRevealSetting}
              className="p-6 sm:p-8 bg-white/5 border border-white/10 rounded-3xl relative overflow-hidden group hover:bg-white/8 hover:border-white/20 transition-all duration-300 shadow-xl backdrop-blur-md"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 border-b border-white/10 pb-4 mb-4">
                <div>
                  <h3 className="text-base sm:text-lg font-rounded font-bold text-white uppercase">Sri Chaitanya School</h3>
                  <span className="text-[10px] text-yellow-300 font-mono uppercase tracking-widest block mt-0.5">ROLE: SCHOOL HEAD BOY</span>
                </div>
                <span className="text-[9px] font-mono text-white/60 bg-black/35 px-2.5 py-1 rounded-lg border border-white/10 shrink-0">
                  Terms: 2017 – 2018 & 2019 – 2020
                </span>
              </div>

              <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-sans mb-4 font-medium">
                Elected to represent a student body of 1,000+ peers, serving as the strategic primary liaison to senior school administration to launch user-centric student council initiatives.
              </p>

              <ul className="list-disc pl-4 text-xs text-white/60 space-y-2 font-sans leading-relaxed">
                <li>Chaired steering committees to coordinate major regional inter-school competitions, risk planning frameworks, and operational school workflow policies.</li>
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Section 2: Projects */}
        <section id="projects" className="space-y-8 pt-8 scroll-mt-24">
          <div className="space-y-2">
            <span className="text-xs font-mono text-white/60 uppercase tracking-widest block">02 / PRODUCT PORTFOLIO</span>
            <h2 className="text-2xl font-rounded font-extrabold text-white uppercase drop-shadow-sm">Selected Projects & Delivery</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {[
              {
                name: "Examify",
                tag: "Secure Automated Proctoring Platform",
                desc: "Managed the full product scoping and technical development of an intelligent, automated proctoring application using Python, OpenCV, MediaPipe, and FastAPI designed to optimize integrity metrics.",
                tech: ["Python", "FastAPI", "OpenCV", "MediaPipe"],
                challenge: "Biometric mapping on browser client must be extremely lightweight to support low-end systems.",
                solution: "Integrated real-time biometric mapping via Face Mesh coordinates, implementing data analytics to generate user credibility scores.",
                outcome: "Secured live testing diagnostics using lightweight browser mapping.",
                github: "https://github.com/RohiVK",
              },
              {
                name: "ClassTrack",
                tag: "Data-Driven Schedule & Attendance Tracker",
                desc: "Engineered the end-to-end delivery of an enterprise-grade schedule tracking tool utilizing React.js, Node.js, and MongoDB to resolve core user pain points in student timetable management.",
                tech: ["React.js", "Node.js", "MongoDB", "Redux Toolkit"],
                challenge: "Timetable lag compromised database query integrity and caused synchronization delay.",
                solution: "Optimized client-side global state architecture using Redux Toolkit, avoiding redundant backend API loops.",
                outcome: "Reduced client-to-server data synchronization latency by 35%.",
                github: "https://github.com/RohiVK",
                annotation: "// 35% latency cut!",
              },
              {
                name: "Connekt",
                tag: "Campus Community Social Platform",
                desc: "Designed features and product maps for a campus platform built on the MERN stack, incorporating continuous customer feedback loops to deploy targeted discussion forums.",
                tech: ["React.js", "Express.js", "Node.js", "MongoDB", "Material UI"],
                challenge: "Unoptimized resource sharing and asset loading caused community engagement dropoffs.",
                solution: "Configured Cloudinary asset folders dynamically to scale user attachments and deployed anonymous boards.",
                outcome: "Optimized UI/UX performance and drove overall platform engagement.",
                github: "https://github.com/RohiVK",
              },
              {
                name: "FindFake",
                tag: "LSTM Phishing Domain Detector",
                desc: "Served as technical project owner for a deep learning security tool that leverages LSTM networks to evaluate and classify risky, fraudulent URLs in real-time.",
                tech: ["Python", "LSTM Networks", "FastAPI", "Deep Learning"],
                challenge: "Obfuscated URLs easily bypass static signature databases and blacklists.",
                solution: "Engineered character-level LSTM networks to map sequences and detect threat markers.",
                outcome: "Selected to showcase live on stage at the premier Great India HackFest '24.",
                github: "https://github.com/RohiVK",
                annotation: "// presented live here!",
              },
            ].map((proj) => (
              <motion.div 
                key={proj.name}
                {...scrollRevealSetting}
                className="p-6 sm:p-8 bg-white/5 border border-white/10 rounded-3xl flex flex-col justify-between hover:bg-white/8 hover:border-white/20 transition-all duration-300 group relative shadow-xl backdrop-blur-md"
              >
                {/* Hand-drawn cursive annotation overlays */}
                <div className="absolute top-2 right-12 font-cursive text-yellow-300 text-sm rotate-[8deg] select-none">
                  {proj.annotation}
                </div>

                <div>
                  <div className="flex justify-between items-start gap-4 border-b border-white/10 pb-3 mb-4">
                    <div>
                      <h3 className="text-base font-rounded font-bold text-white uppercase tracking-tight">{proj.name}</h3>
                      <span className="text-[10px] text-white/50 font-mono">{proj.tag}</span>
                    </div>
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-white/60 hover:text-white p-1 hover:bg-black/30 rounded-xl transition-colors duration-200"
                    >
                      <ExternalLinkIcon className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-sans mb-4 font-medium">
                    {proj.desc}
                  </p>

                  {/* Wireframe Mockup Sketchpad inside cards */}
                  <div className="bg-black/35 p-3 rounded-xl border border-white/5 text-[10px] leading-relaxed mb-4 font-sans text-white/60">
                    <div className="mb-2">
                      <span className="font-mono text-[8px] text-[#ef4444]/80 uppercase block font-bold">THE PROBLEM</span>
                      <p className="font-medium text-white/70">{proj.challenge}</p>
                    </div>
                    <div>
                      <span className="font-mono text-[8px] text-[#facc15]/80 uppercase block font-bold">THE STRATEGY</span>
                      <p className="font-medium text-white/70">{proj.solution}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1">
                    {proj.tech.map((s) => (
                      <span key={s} className="text-[9px] px-2 py-0.5 bg-black/40 border border-white/10 text-white/60 font-mono rounded">
                        {s}
                      </span>
                    ))}
                  </div>

                  {/* Outcome Panel */}
                  <div className="p-2.5 bg-yellow-300/10 border border-yellow-300/20 text-[10px] text-yellow-350 font-mono rounded-lg flex items-center space-x-2">
                    <span className="font-bold">OUTCOME:</span>
                    <span className="text-white font-sans font-semibold leading-normal">{proj.outcome}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Section 3: Skills */}
        <section id="skills" className="space-y-8 pt-8 scroll-mt-24">
          <div className="space-y-2">
            <span className="text-xs font-mono text-white/60 uppercase tracking-widest block">03 / TECHNICAL TOOLKIT</span>
            <h2 className="text-2xl font-rounded font-extrabold text-white uppercase drop-shadow-sm">Product & Dev Skills</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            {[
              {
                title: "Product Management",
                skills: ["Sprint & Task Planning", "Product Strategy", "Milestone Mapping", "Team Alignment", "UI/UX Wireframing", "Feature Scoping & Docs"],
                color: "text-yellow-300",
              },
              {
                title: "Data & Cloud Systems",
                skills: ["Amazon Web Services (AWS)", "IBM Blockchain Cloud", "MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase", "SQL"],
                color: "text-cyan-300",
              },
              {
                title: "Languages & Development",
                skills: ["Python", "Java", "JavaScript", "TypeScript", "C/C++", "HTML/CSS"],
                color: "text-pink-300",
              },
              {
                title: "Frameworks & Developer Tools",
                skills: ["React.js", "Next.js", "Node.js", "Express.js", "FastAPI", "Git / GitHub", "Docker", "Postman", "Redux Toolkit", "OpenCV", "MediaPipe"],
                color: "text-emerald-300",
              },
            ].map((cat, idx) => (
              <motion.div 
                key={idx} 
                {...scrollRevealSetting}
                className="p-6 bg-white/5 border border-white/10 rounded-3xl space-y-4 hover:bg-white/8 hover:border-white/20 transition-all duration-200 shadow-xl backdrop-blur-md"
              >
                <div className="border-b border-white/10 pb-2.5 flex justify-between items-center">
                  <span className={`text-[8px] font-mono uppercase tracking-widest ${cat.color}`}>DOMAIN</span>
                  <h4 className="text-sm font-rounded font-bold text-white uppercase tracking-tight">{cat.title}</h4>
                </div>
                
                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map((s) => (
                    <span 
                      key={s} 
                      className="text-[10px] px-2.5 py-1 bg-black/25 border border-white/10 text-white/70 hover:text-white hover:border-yellow-300/40 transition-all duration-200 font-mono rounded-lg"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Section 4: Credentials */}
        <section id="credentials" className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8 w-full scroll-mt-24">
          
          {/* Certifications */}
          <motion.div 
            {...scrollRevealSetting}
            className="p-6 bg-white/5 border border-white/10 rounded-3xl space-y-4 relative shadow-xl backdrop-blur-md"
          >
            <div className="absolute top-2 right-8 font-cursive text-yellow-300 text-lg rotate-[8deg] select-none">
              // verified
            </div>

            <div className="border-b border-white/10 pb-3">
              <span className="text-[8px] text-white/50 font-mono tracking-widest uppercase block">COMPONENTS</span>
              <h3 className="text-base font-rounded font-bold text-white uppercase tracking-tight mt-0.5">Certifications</h3>
            </div>
            
            <ul className="space-y-4">
              {[
                { title: "AWS Certified Cloud Architecting", issuer: "Amazon Web Services" },
                { title: "AWS Certified Cloud Foundations", issuer: "Amazon Web Services" },
                { title: "IBM Certified Blockchain Developer", issuer: "IBM Cloud Profile" },
              ].map((c, i) => (
                <li key={i} className="flex items-start space-x-2.5 text-xs text-white/80 leading-normal font-sans font-medium">
                  <span className="text-yellow-300 font-bold mt-0.5">•</span>
                  <div>
                    <span className="text-white block uppercase tracking-tight font-bold text-[11px]">{c.title}</span>
                    <span className="text-[9px] text-white/40 font-mono block mt-0.5">{c.issuer}</span>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Awards */}
          <motion.div 
            {...scrollRevealSetting}
            className="p-6 bg-white/5 border border-white/10 rounded-3xl space-y-4 relative shadow-xl backdrop-blur-md"
          >
            <div className="absolute top-2 right-8 font-cursive text-yellow-300 text-lg rotate-[-8deg] select-none">
              // double finalist!
            </div>

            <div className="border-b border-white/10 pb-3">
              <span className="text-[8px] text-white/50 font-mono tracking-widest uppercase block">ACHIEVEMENTS</span>
              <h3 className="text-base font-rounded font-bold text-white uppercase tracking-tight mt-0.5">Honours & Awards</h3>
            </div>

            <ul className="space-y-4">
              {[
                { title: "Top 10 Finalist", event: "Great India HackFest '24", detail: "Ranked among top submissions out of competitive regional entries" },
                { title: "Top 10 Finalist", event: "Technov 24-Hour National Hackathon", detail: "NextGenCloud innovation tracks, VIT-AP" },
              ].map((a, i) => (
                <li key={i} className="flex items-start space-x-2.5 text-xs text-white/80 leading-normal font-sans font-medium">
                  <span className="text-cyan-300 font-bold mt-0.5">•</span>
                  <div>
                    <span className="text-white block uppercase tracking-tight font-bold text-[11px]">{a.title} &mdash; {a.event}</span>
                    <span className="text-[9px] text-white/40 font-sans block mt-0.5 leading-relaxed">{a.detail}</span>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </section>

        {/* Section 5: Contact */}
        <motion.section 
          id="contact"
          {...scrollRevealSetting}
          className="p-6 sm:p-8 bg-white/5 border border-white/20 rounded-3xl space-y-6 relative overflow-hidden shadow-xl backdrop-blur-md"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl pointer-events-none" />

          <div className="border-b border-white/10 pb-4">
            <span className="text-[9px] text-white/60 font-mono uppercase tracking-widest block">COLLABORATIVE PORTAL</span>
            <h2 className="text-xl font-rounded font-extrabold text-white uppercase tracking-tight mt-0.5">Connect & Collaborate</h2>
          </div>

          <p className="text-xs sm:text-sm text-white/85 leading-relaxed font-sans font-medium">
            Open to Technical Product Analyst roles and leadership tracks. Copy email channels directly or inspect verified online handles.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            
            {/* Email copying widget */}
            <div className="p-4 bg-black/25 border border-white/10 rounded-2xl flex items-center justify-between gap-4 group">
              <div>
                <span className="text-[8px] text-white/40 font-mono block">EMAIL</span>
                <span className="text-[11px] text-white/80 font-mono block mt-0.5">rohith.vit.2005@gmail.com</span>
              </div>
              <button 
                onClick={handleCopyEmail}
                className="px-3.5 py-1.5 bg-white text-[#2a66e4] hover:bg-slate-100 text-[10px] font-mono rounded-full font-bold transition-all duration-200 cursor-pointer shadow"
              >
                {copiedEmail ? "COPIED" : "COPY"}
              </button>
            </div>

            {/* Phone line */}
            <div className="p-4 bg-black/25 border border-white/10 rounded-2xl flex items-center justify-between gap-4">
              <div>
                <span className="text-[8px] text-white/40 font-mono block">PHONE</span>
                <span className="text-[11px] text-white/80 font-mono block mt-0.5">+91 9962685162</span>
              </div>
              <span className="text-[9px] px-2 py-0.5 bg-emerald-500/10 border border-emerald-500/30 text-emerald-350 font-mono rounded">
                ACTIVE
              </span>
            </div>

            {/* LinkedIn */}
            <a 
              href="https://linkedin.com/in/v-k-rohith-5a8764326"
              target="_blank"
              rel="noreferrer"
              className="p-4 bg-black/25 border border-white/10 hover:border-white/30 rounded-2xl flex items-center justify-between gap-4 group transition-colors duration-250 shadow"
            >
              <div>
                <span className="text-[8px] text-white/40 font-mono block">LINKEDIN</span>
                <span className="text-[11px] text-white/80 font-mono block mt-0.5">in/v-k-rohith-5a8764326</span>
              </div>
              <LinkedinIcon className="w-4 h-4 text-white/50 group-hover:text-white transition-colors duration-200" />
            </a>

            {/* GitHub */}
            <a 
              href="https://github.com/RohiVK"
              target="_blank"
              rel="noreferrer"
              className="p-4 bg-black/25 border border-white/10 hover:border-white/30 rounded-2xl flex items-center justify-between gap-4 group transition-colors duration-250 shadow"
            >
              <div>
                <span className="text-[8px] text-white/40 font-mono block">GITHUB</span>
                <span className="text-[11px] text-white/80 font-mono block mt-0.5">github.com/RohiVK</span>
              </div>
              <GithubIcon className="w-4 h-4 text-white/50 group-hover:text-white transition-colors duration-200" />
            </a>

          </div>
        </motion.section>

        {/* Global Footer */}
        <footer className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center text-[9px] font-mono text-white/40 gap-3">
          <span>PORTAL_DESIGN: V.K. ROHITH &bull; 2026</span>
          <span className="flex items-center space-x-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
            <span>PORTAL VERIFIED SAFE</span>
          </span>
        </footer>

      </main>
    </div>
  );
}
