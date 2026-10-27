import React from 'react';
import { ExternalLink, Globe, Award, ShieldCheck, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { aiiensBrand } from '../data/portfolioData';

export default function AiiensBrand() {
  const campus = aiiensBrand.initiatives[0];

  return (
    <section id="aiiens" className="scroll-mt-28 px-5 py-16 sm:px-8 sm:py-24 pt-0 text-white">
      <div className="mx-auto w-full max-w-6xl">
        
        {/* Section Header */}
        <div className="mb-10">
          <p className="label-mono">// CHAIRMAN-LED FLAGSHIP INITIATIVE</p>
          <div className="mt-2 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <h2 className="text-3xl font-extrabold sm:text-5xl text-white tracking-tight">
                {aiiensBrand.name}
              </h2>
              <p className="mt-2 text-sm text-slate-400 max-w-2xl">
                {aiiensBrand.chairmanRole}
              </p>
            </div>
            <a
              href={aiiensBrand.website}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-xl border border-cyan-500/30 bg-cyan-500/10 px-4 py-2.5 text-xs font-mono font-semibold uppercase tracking-wider text-cyan-300 hover:bg-cyan-400 hover:text-black hover:border-cyan-400 transition-all self-start sm:self-auto shrink-0 shadow-[0_0_15px_rgba(0,240,255,0.15)]"
            >
              <Globe className="size-3.5" />
              <span>{aiiensBrand.domain}</span>
              <ExternalLink className="size-3" />
            </a>
          </div>
        </div>

        {/* Master Showcase: AIIENS Campus Flagship Panel */}
        <div className="surface-panel p-6 sm:p-10 lg:p-12 border border-white/15 shadow-2xl">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] items-center">
            
            {/* Left Column: Brand Emblem & Chairman Leadership Profile */}
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-6">
              
              {/* Telemetry Badge */}
              <div className="flex items-center gap-2">
                <span className="rounded-md px-2.5 py-1 font-mono text-[10px] font-semibold border bg-blue-500/10 text-cyan-400 border-cyan-500/30 uppercase tracking-wider">
                  {campus.category}
                </span>
                <span className="rounded-md px-2 py-0.5 font-mono text-[9px] font-bold bg-cyan-400 text-black uppercase tracking-wider">
                  {campus.chairmanStatus}
                </span>
              </div>

              {/* High-Resolution Brand Logo Enclosure */}
              <div className="w-full aspect-square max-w-[280px] sm:max-w-[320px] overflow-hidden rounded-2xl bg-white p-5 shadow-2xl border border-white/20 flex items-center justify-center transition-transform duration-500 hover:scale-[1.02]">
                <img
                  src={campus.logo}
                  alt={campus.name}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Narrative */}
              <p className="text-sm leading-relaxed text-slate-300 font-medium">
                {campus.description}
              </p>

              {/* Target Audience Pill */}
              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-white/10 w-full">
                <span className="block text-[10px] font-mono text-cyan-400 uppercase tracking-wider font-bold mb-1">
                  Target Community
                </span>
                <p className="text-xs text-slate-300">
                  {campus.targetAudience}
                </p>
              </div>

              {/* Action Trigger */}
              <a
                href={campus.url}
                target="_blank"
                rel="noreferrer noopener"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-6 py-3 text-xs font-mono uppercase tracking-widest font-bold text-black shadow-lg transition-all duration-300 hover:bg-white hover:shadow-[0_0_20px_rgba(0,240,255,0.4)]"
              >
                <span>{campus.ctaText}</span>
                <ExternalLink className="size-3.5" />
              </a>
            </div>

            {/* Right Column: 4 Core Pillars of AIIENS Campus */}
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-2">
                <span className="font-mono text-xs text-cyan-400 uppercase tracking-widest font-bold">
                  // STRATEGIC ACADEMIC PILLARS
                </span>
                <span className="font-mono text-[10px] text-slate-400">
                  GOVERNED BY DR. T. VENKATESWARA RAO
                </span>
              </div>

              {campus.pillars && campus.pillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="surface-card p-5 sm:p-6 border border-white/10 transition-all hover:border-cyan-400/40 hover:bg-slate-900/90"
                >
                  <div className="flex items-start gap-3">
                    <div className="grid size-8 place-items-center rounded-lg bg-cyan-500/10 text-cyan-400 shrink-0 border border-cyan-500/20 mt-0.5">
                      <CheckCircle2 className="size-4" />
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base font-bold text-white tracking-tight">
                        {pillar.title}
                      </h4>
                      <p className="mt-1 text-xs text-slate-400 leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Additional Focus Highlights */}
              <div className="pt-4 grid sm:grid-cols-2 gap-2.5">
                {campus.focus.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs font-mono text-slate-300 bg-slate-900/50 p-2.5 rounded-lg border border-white/5">
                    <span className="size-1.5 rounded-full bg-cyan-400" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
