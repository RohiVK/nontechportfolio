"use client";

import { useState } from "react";
import { Mail, FileDown, Check, Copy, Phone, MapPin, AlertCircle } from "lucide-react";

// Inline SVG components to bypass missing lucide-react exports
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

export default function ContactPanel() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const contactData = {
    email: "rohith.vit.2005@gmail.com",
    phone: "+91 9962685162",
    linkedin: "https://linkedin.com/in/v-k-rohith-5a8764326",
    github: "https://github.com/RohiVK",
    location: "Chennai, India",
    resume: "/resume.pdf",
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
      {/* Availability Status widget */}
      <div className="md:col-span-5 flex flex-col justify-between p-5 sm:p-6 glass-panel rounded-2xl border border-zinc-850 shadow-xl relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-emerald/5 opacity-[0.2] rounded-full blur-3xl pointer-events-none" />

        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-emerald opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-emerald"></span>
            </span>
            <span className="text-[10px] text-brand-emerald font-mono uppercase tracking-widest font-semibold">
              STATUS: OPEN_TO_OFFERS
            </span>
          </div>

          <h3 className="text-base sm:text-lg font-bold text-white font-sans leading-tight">
            Open to Technical Product Analyst – 2027 Leadership Development Program
          </h3>

          <p className="text-xs text-zinc-400 leading-relaxed font-sans font-medium">
            Applying engineering capability, database management, and cloud architecture to solve cross-functional product milestones and drive business value.
          </p>

          <div className="p-3 bg-zinc-950/60 border border-zinc-900 rounded-xl space-y-1.5 text-xs font-mono">
            <div className="flex justify-between items-center">
              <span className="text-zinc-550">PROGRAM TARGET</span>
              <span className="text-white font-medium">Q1 2027 (AVAILABLE)</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-zinc-550">UNIVERSITY NODE</span>
              <span className="text-white font-medium">VIT-AP UNIVERSITY</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-zinc-550">DEGREE PROGRAM</span>
              <span className="text-white font-medium">B.TECH CSE (CGPA: 8.00)</span>
            </div>
          </div>
        </div>

        <div className="mt-5 pt-4 border-t border-zinc-900 text-[10px] font-mono text-zinc-650 flex items-center gap-1.5">
          <AlertCircle className="w-3.5 h-3.5 text-zinc-550" />
          <span>SECURITY LEVEL: ENCRYPTED PORTAL</span>
        </div>
      </div>

      {/* Interactive Contact Actions Cards */}
      <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Email Widget */}
        <div className="glass-panel p-5 rounded-2xl border border-zinc-850 hover:border-zinc-700/80 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-brand-indigo/5 opacity-[0.1] rounded-full blur-2xl pointer-events-none" />

          <div>
            <div className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 group-hover:text-white transition-colors duration-300 w-fit mb-4">
              <Mail className="w-4 h-4" />
            </div>
            <h4 className="text-xs font-bold text-zinc-200 group-hover:text-white">EMAIL CHANNEL</h4>
            <p className="text-[10px] text-zinc-555 font-mono mt-0.5 select-all">{contactData.email}</p>
          </div>

          <div className="flex gap-2 mt-5">
            <a
              href={`mailto:${contactData.email}`}
              className="flex-1 text-center py-2 bg-zinc-950 border border-zinc-800 hover:border-zinc-700 text-xs font-mono text-zinc-300 hover:text-white rounded-lg transition-colors duration-200"
            >
              MAIL DIRECT &rarr;
            </a>
            <button
              onClick={handleCopyEmail}
              className="px-3.5 py-2 bg-zinc-900 border border-zinc-850 hover:border-zinc-750 text-zinc-400 hover:text-white rounded-lg transition-colors duration-200 flex items-center justify-center cursor-pointer"
            >
              {copiedEmail ? (
                <Check className="w-3.5 h-3.5 text-brand-emerald" />
              ) : (
                <Copy className="w-3.5 h-3.5" />
              )}
            </button>
          </div>
        </div>

        {/* LinkedIn Widget */}
        <a
          href={contactData.linkedin}
          target="_blank"
          rel="noreferrer"
          className="glass-panel p-5 rounded-2xl border border-zinc-850 hover:border-brand-indigo/30 group transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-24 h-24 bg-brand-indigo/5 opacity-[0.1] rounded-full blur-2xl pointer-events-none" />

          <div>
            <div className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 group-hover:text-white transition-colors duration-300 w-fit mb-4">
              <LinkedinIcon className="w-4 h-4" />
            </div>
            <h4 className="text-xs font-bold text-zinc-200 group-hover:text-white">LINKEDIN CONSOLE</h4>
            <p className="text-[10px] text-zinc-550 font-mono mt-0.5">in/v-k-rohith-5a8764326</p>
          </div>

          <div className="mt-5 pt-3 border-t border-zinc-950 flex justify-between items-center text-[10px] font-mono text-zinc-500">
            <span>LINK_EXTERNAL</span>
            <span className="text-brand-indigo group-hover:translate-x-1 transition-transform duration-300">OPEN &rarr;</span>
          </div>
        </a>

        {/* GitHub Widget */}
        <a
          href={contactData.github}
          target="_blank"
          rel="noreferrer"
          className="glass-panel p-5 rounded-2xl border border-zinc-850 hover:border-zinc-75 group transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-24 h-24 bg-brand-indigo/5 opacity-[0.1] rounded-full blur-2xl pointer-events-none" />

          <div>
            <div className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 group-hover:text-white transition-colors duration-300 w-fit mb-4">
              <GithubIcon className="w-4 h-4" />
            </div>
            <h4 className="text-xs font-bold text-zinc-200 group-hover:text-white">GITHUB PROFILE</h4>
            <p className="text-[10px] text-zinc-500 font-mono mt-0.5">github.com/RohiVK</p>
          </div>

          <div className="mt-5 pt-3 border-t border-zinc-950 flex justify-between items-center text-[10px] font-mono text-zinc-500">
            <span>REPOSITORIES</span>
            <span className="text-brand-indigo group-hover:translate-x-1 transition-transform duration-300">OPEN &rarr;</span>
          </div>
        </a>

        {/* Contact info widget */}
        <div className="glass-panel p-5 rounded-2xl border border-zinc-850 flex flex-col justify-between relative overflow-hidden">
          <div>
            <div className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 w-fit mb-4">
              <MapPin className="w-4 h-4" />
            </div>
            <h4 className="text-xs font-bold text-zinc-200">CONTACT LOCATION</h4>
            <div className="text-[10px] text-zinc-500 font-mono mt-1 space-y-1">
              <div className="flex items-center space-x-1">
                <Phone className="w-3 h-3 text-brand-indigo" />
                <span>{contactData.phone}</span>
              </div>
              <div className="flex items-center space-x-1">
                <MapPin className="w-3 h-3 text-brand-emerald" />
                <span>{contactData.location}</span>
              </div>
            </div>
          </div>

          <div
            onClick={() => window.open("/resume.pdf", "_blank")}
            className="mt-5 pt-3 border-t border-zinc-950 flex justify-between items-center text-[9px] font-mono text-zinc-500 cursor-pointer group hover:text-white transition-colors duration-200"
          >
            <span className="flex items-center space-x-1">
              <FileDown className="w-3 h-3 text-brand-emerald" />
              <span>DOWNLOAD RESUME</span>
            </span>
            <span className="text-brand-emerald group-hover:translate-y-0.5 transition-transform duration-300">&darr;</span>
          </div>
        </div>
      </div>
    </div>
  );
}
