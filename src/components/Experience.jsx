import React from 'react';
import { GraduationCap, Briefcase, Award, CheckCircle2, ShieldCheck, BookOpen } from 'lucide-react';
import { experienceData, achievementsData, educationData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-28 px-5 py-16 sm:px-8 sm:py-24 pt-0 text-white">
      <div className="mx-auto w-full max-w-6xl">
        <div className="surface-panel p-8 sm:p-12">
          
          {/* Header */}
          <div className="max-w-xl mb-10">
            <p className="label-mono mb-2">// TRACK RECORD & CREDENTIALS</p>
            <h2 className="text-3xl font-extrabold sm:text-4xl text-white tracking-tight">
              Academic Track Record & Leadership
            </h2>
            <p className="mt-2 text-sm text-slate-400 leading-relaxed">
              Distinguished legacy across doctoral research, BITS Pilani software systems, college principalship, ECE department leadership, and chairmanship of AIIENS Campus.
            </p>
          </div>

          {/* Education Section Timeline (Vertical Timeline Theme) */}
          <div className="mb-14">
            <h3 className="text-base font-bold text-white mb-6 font-mono uppercase tracking-wider flex items-center gap-2">
              <GraduationCap className="size-4 text-cyan-400" />
              <span>// ACADEMIC EDUCATION & DEGREES</span>
            </h3>

            <ol className="grid gap-8">
              {educationData.map((edu, index) => (
                <li
                  key={index}
                  style={{ '--reveal-delay': `${index * 80}ms` }}
                  className="reveal relative grid gap-2 border-l-2 border-white/15 pl-6 transition-all duration-300 hover:border-cyan-400 group"
                  data-visible="true"
                >
                  {/* Timeline Bullet Node */}
                  <div className="absolute -left-[7px] top-1.5 size-3 rounded-full border-2 border-slate-950 bg-slate-600 group-hover:bg-cyan-400 group-hover:scale-125 transition-all" />

                  <div className="flex flex-wrap items-center gap-2">
                    <p className="label-mono text-xs">{edu.period}</p>
                    <span className="rounded-full bg-slate-900 px-2.5 py-0.5 font-mono text-[10px] text-cyan-300 border border-cyan-500/30 uppercase tracking-wider font-semibold">
                      {edu.badge}
                    </span>
                    <span className="text-xs font-mono text-slate-400">// {edu.location}</span>
                    <span className="sm:ml-auto font-mono text-xs text-cyan-400 font-bold bg-cyan-500/10 px-2.5 py-0.5 rounded border border-cyan-500/20">
                      STATUS: {edu.score}
                    </span>
                  </div>

                  <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {edu.institution}
                  </h4>

                  <p className="max-w-3xl text-xs sm:text-sm font-semibold text-slate-200">
                    {edu.qualification}
                  </p>

                  {edu.description && (
                    <p className="max-w-3xl text-xs text-slate-400 leading-relaxed">
                      {edu.description}
                    </p>
                  )}
                </li>
              ))}
            </ol>
          </div>

          {/* Academic & Professional Leadership Timeline */}
          <div className="border-t border-white/10 pt-12 mb-14">
            <h3 className="text-base font-bold text-white mb-6 font-mono uppercase tracking-wider flex items-center gap-2">
              <Briefcase className="size-4 text-cyan-400" />
              <span>// LEADERSHIP & ADMINISTRATIVE POSITIONS</span>
            </h3>

            <ol className="grid gap-8">
              {experienceData.map((exp, index) => (
                <li
                  key={index}
                  style={{ '--reveal-delay': `${index * 80}ms` }}
                  className="reveal relative grid gap-2 border-l-2 border-white/15 pl-6 transition-all duration-300 hover:border-cyan-400 group"
                  data-visible="true"
                >
                  {/* Timeline Bullet */}
                  <div className="absolute -left-[7px] top-1.5 size-3 rounded-full border-2 border-slate-950 bg-slate-600 group-hover:bg-cyan-400 group-hover:scale-125 transition-all" />

                  <div className="flex flex-wrap items-center gap-2">
                    <p className="label-mono text-xs">{exp.period}</p>
                    <span className="rounded-full bg-slate-900 px-2.5 py-0.5 font-mono text-[10px] text-slate-300 border border-white/10 uppercase tracking-wider font-semibold">
                      {exp.type}
                    </span>
                    <span className="text-xs font-mono text-slate-400">// {exp.location}</span>
                  </div>

                  <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {exp.role} <span className="text-slate-500 font-normal">//</span> <span className="text-cyan-300">{exp.organization}</span>
                  </h4>

                  <p className="max-w-3xl text-xs sm:text-sm leading-relaxed text-slate-300">
                    {exp.description}
                  </p>

                  {/* Bullet points */}
                  {exp.bullets && exp.bullets.length > 0 && (
                    <ul className="mt-2 space-y-1.5 max-w-3xl">
                      {exp.bullets.map((b, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-slate-400">
                          <CheckCircle2 className="size-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ol>
          </div>

          {/* Key Accolades & Accreditations Grid */}
          <div className="border-t border-white/10 pt-12">
            <h3 className="text-base font-bold text-white mb-6 font-mono uppercase tracking-wider flex items-center gap-2">
              <ShieldCheck className="size-4 text-cyan-400" />
              <span>// KEY HONORS & ACCREDITATION MILESTONES</span>
            </h3>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {achievementsData.map((item, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl border border-white/10 bg-slate-900/60 transition-all hover:border-cyan-400/40 hover:bg-slate-900/90"
                >
                  <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-bold uppercase tracking-wider mb-2">
                    <Award className="size-3.5 shrink-0" />
                    <span>{item.title}</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
