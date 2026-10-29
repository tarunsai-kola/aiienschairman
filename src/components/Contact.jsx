import React, { useState } from 'react';
import { Mail, Phone, MapPin, Sparkles, Award, ArrowUpRight, Copy, Check, ExternalLink, ShieldCheck, Building2, BookOpen } from 'lucide-react';
import { personalInfo, aiiensBrand } from '../data/portfolioData';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const advisoryScopes = [
    {
      title: "AIIENS Campus Partnerships",
      description: "Institutional partnerships, industry-aligned engineering curriculums, and student incubation sprints.",
      badge: "Institutional"
    },
    {
      title: "Accreditation & Quality Advisory",
      description: "Outcome-Based Education (OBE) design, NBA Tier-1 compliance, NAAC 'A' Grade criteria, and UGC Autonomous roadmap.",
      badge: "Governance"
    },
    {
      title: "Keynote & Research Colloquia",
      description: "Invited academic addresses, IEEE conference sessions, microwave antenna symposiums, and faculty development programs.",
      badge: "Academic"
    }
  ];

  return (
    <section id="contact" className="scroll-mt-28 px-5 py-16 sm:px-8 sm:py-24 pt-0 text-white">
      <div className="mx-auto w-full max-w-6xl">
        
        {/* Header */}
        <div className="mb-10 text-center max-w-3xl mx-auto">
          <p className="label-mono mb-2">// DIRECT ENGAGEMENT & ADVISORY</p>
          <h2 className="text-3xl font-extrabold sm:text-5xl text-white tracking-tight">
            Connect With The Chairman
          </h2>
          <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-400">
            For institutional collaborations with AIIENS Campus, NBA & NAAC accreditation advisory, university guest lectures, or microwave engineering research discussions, connect directly through the official office channels.
          </p>
        </div>

        {/* Executive Direct Contact Surface */}
        <div className="surface-panel p-6 sm:p-10 lg:p-12 border border-white/15 shadow-2xl">
          <div className="grid gap-8 lg:grid-cols-2">
            
            {/* Left Card: Chairman Identity & Official Channels */}
            <div className="flex flex-col justify-between rounded-2xl bg-slate-900/80 border border-white/10 p-6 sm:p-8 space-y-6">
              <div>
                {/* Status Telemetry */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="size-2 rounded-full bg-cyan-400 animate-pulse" />
                    <span className="font-mono text-xs font-bold text-cyan-400 uppercase tracking-widest">
                      CHAIRMAN'S EXECUTIVE OFFICE
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-slate-400 uppercase">
                    ACTIVE TELEMETRY
                  </span>
                </div>

                {/* Name & Credentials */}
                <div className="mt-5">
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {personalInfo.name}
                  </h3>
                  <p className="font-mono text-xs text-cyan-300 mt-1 uppercase tracking-wider">
                    {personalInfo.credentials}
                  </p>
                  <p className="text-xs text-slate-400 font-mono mt-1">
                    {personalInfo.designation} // {personalInfo.brandName}
                  </p>
                </div>

                {/* Channel List */}
                <div className="mt-6 space-y-3.5">
                  
                  {/* Direct Academic Email */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3.5 rounded-xl bg-slate-950/80 border border-white/10 hover:border-cyan-400/40 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="grid size-9 place-items-center rounded-lg bg-cyan-500/10 text-cyan-400 shrink-0 border border-cyan-500/20">
                        <Mail className="size-4" />
                      </div>
                      <div className="min-w-0">
                        <span className="block text-[10px] font-mono text-slate-400 uppercase tracking-wider">Email Address</span>
                        <a href={`mailto:${personalInfo.email}`} className="block truncate font-mono text-xs sm:text-sm font-semibold text-white hover:text-cyan-400 transition-colors">
                          {personalInfo.email}
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 self-end sm:self-auto shrink-0">
                      <button
                        type="button"
                        onClick={handleCopyEmail}
                        title="Copy Email"
                        className="grid size-8 place-items-center rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                      >
                        {copiedEmail ? <Check className="size-3.5 text-emerald-400" /> : <Copy className="size-3.5" />}
                      </button>
                      <a
                        href={`mailto:${personalInfo.email}`}
                        className="inline-flex items-center gap-1 text-xs font-mono font-bold text-black bg-cyan-400 hover:bg-white px-3 py-1.5 rounded-lg transition-colors"
                      >
                        <span>Mail</span>
                        <ArrowUpRight className="size-3" />
                      </a>
                    </div>
                  </div>

                  {/* Direct Phone */}
                  <div className="flex items-center justify-between gap-3 p-3.5 rounded-xl bg-slate-950/80 border border-white/10 hover:border-cyan-400/40 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="grid size-9 place-items-center rounded-lg bg-cyan-500/10 text-cyan-400 shrink-0 border border-cyan-500/20">
                        <Phone className="size-4" />
                      </div>
                      <div className="min-w-0">
                        <span className="block text-[10px] font-mono text-slate-400 uppercase tracking-wider">Office Phone</span>
                        <a href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`} className="block font-mono text-xs sm:text-sm font-semibold text-white hover:text-cyan-400 transition-colors">
                          {personalInfo.phone}
                        </a>
                      </div>
                    </div>
                    <a
                      href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                      className="inline-flex items-center gap-1 text-xs font-mono text-cyan-400 hover:underline"
                    >
                      <span>Call</span>
                      <ArrowUpRight className="size-3" />
                    </a>
                  </div>

                  {/* Location */}
                  <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-950/80 border border-white/10">
                    <div className="grid size-9 place-items-center rounded-lg bg-cyan-500/10 text-cyan-400 shrink-0 border border-cyan-500/20">
                      <MapPin className="size-4" />
                    </div>
                    <div>
                      <span className="block text-[10px] font-mono text-slate-400 uppercase tracking-wider">Executive Location</span>
                      <span className="font-mono text-xs text-slate-300">
                        {personalInfo.location}
                      </span>
                    </div>
                  </div>

                </div>
              </div>

              {/* Bottom Office Assurance */}
              <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-mono text-slate-400">
                <Sparkles className="size-3.5 text-cyan-400 shrink-0" />
                <span>OFFICIAL CHAIRMAN OFFICE COMMUNICATIONS (MON–SAT 09:00–18:00 IST)</span>
              </div>
            </div>

            {/* Right Card: Institutional Advisory & Professional Profiles */}
            <div className="flex flex-col justify-between rounded-2xl bg-slate-900/80 border border-white/10 p-6 sm:p-8 space-y-6">
              <div>
                {/* Header */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="size-4 text-cyan-400" />
                    <span className="font-mono text-xs font-bold text-white uppercase tracking-wider">
                      ADVISORY SCOPE & ALLIANCES
                    </span>
                  </div>
                  <span className="rounded bg-cyan-500/10 px-2 py-0.5 font-mono text-[9px] font-bold text-cyan-400 border border-cyan-500/20">
                    ACCREDITED
                  </span>
                </div>

                {/* Advisory Categories */}
                <div className="mt-5 space-y-3">
                  {advisoryScopes.map((scope, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-slate-950/80 border border-white/10 hover:border-cyan-400/40 transition-colors"
                    >
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <h4 className="text-sm font-bold text-white">
                          {scope.title}
                        </h4>
                        <span className="rounded bg-slate-900 px-2 py-0.5 font-mono text-[9px] text-slate-300 border border-white/10 uppercase tracking-wider">
                          {scope.badge}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {scope.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct Professional Actions */}
              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row gap-3">
                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-4 py-3 text-xs font-mono uppercase tracking-widest font-bold text-black shadow-lg transition-all hover:bg-white hover:shadow-[0_0_20px_rgba(0,240,255,0.4)]"
                >
                  <span>Connect on LinkedIn</span>
                  <ExternalLink className="size-3.5" />
                </a>

                <a
                  href="https://www.aiienscampus.in"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-slate-950 px-4 py-3 text-xs font-mono uppercase tracking-widest font-semibold text-slate-200 transition-all hover:bg-white/10 hover:text-white hover:border-white/40"
                >
                  <span>AIIENS Campus</span>
                  <ExternalLink className="size-3.5" />
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
