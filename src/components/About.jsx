import React from 'react';
import { ArrowRight, MapPin, GraduationCap, Briefcase, Award, ShieldCheck, BookOpen } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="scroll-mt-28 px-5 py-16 sm:px-8 sm:py-24 pt-0 text-white">
      <div className="mx-auto w-full max-w-6xl">
        <div className="surface-panel grid gap-10 p-8 sm:p-12 lg:grid-cols-[0.85fr_1.15fr] items-center">
          
          {/* Portrait Photo with Authentic Desk Nameplate */}
          <div className="relative aspect-4/5 w-full overflow-hidden rounded-3xl border border-white/15 shadow-2xl bg-slate-950 group">
            <img
              alt="Prof. Tumati Venkateswara Rao at his executive desk"
              loading="lazy"
              className="object-cover object-center w-full h-full transition-transform duration-700 group-hover:scale-102"
              src={personalInfo.profileImage}
            />
          </div>

          {/* Narrative & Details */}
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <p className="label-mono">// ACADEMIC PROFILE & GOVERNANCE</p>
            </div>
            <h2 className="mt-3 text-2xl font-extrabold sm:text-4xl text-white tracking-tight">
              About Prof. Tumati Venkateswara Rao
            </h2>
            
            <p className="mt-5 text-base sm:text-lg leading-relaxed text-slate-300 font-medium">
              {personalInfo.aboutDescription}
            </p>

            {/* Leadership Philosophy Quote */}
            <div className="mt-5 p-4 rounded-2xl bg-cyan-500/10 border-l-4 border-cyan-400 border-white/10 text-xs sm:text-sm font-mono text-slate-200 italic leading-relaxed">
              "{personalInfo.leadershipPhilosophy}"
            </div>

            {/* Credentials 4-Card Grid */}
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="flex items-start gap-3 rounded-xl bg-slate-900/60 p-3.5 border border-white/10">
                <Briefcase className="size-4 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-mono text-slate-400 uppercase tracking-wider">Current Role</p>
                  <p className="text-sm font-semibold text-white">{personalInfo.designation} // {personalInfo.brandName}</p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-xl bg-slate-900/60 p-3.5 border border-white/10">
                <GraduationCap className="size-4 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-mono text-slate-400 uppercase tracking-wider">Higher Education</p>
                  <p className="text-sm font-semibold text-white">Dual PhDs & BITS Pilani M.S.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-xl bg-slate-900/60 p-3.5 border border-white/10">
                <ShieldCheck className="size-4 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-mono text-slate-400 uppercase tracking-wider">Accreditations Led</p>
                  <p className="text-sm font-semibold text-white">NBA, NAAC 'A', UGC Autonomous</p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-xl bg-slate-900/60 p-3.5 border border-white/10">
                <Award className="size-4 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-mono text-slate-400 uppercase tracking-wider">Honor & Fellowship</p>
                  <p className="text-sm font-semibold text-white">Senior Member IEEE (SMIEEE)</p>
                </div>
              </div>
            </div>

            {/* Focus Areas & Specializations */}
            <div className="mt-6">
              <p className="label-mono text-xs mb-2.5">// CORE SPECIALIZATIONS & EXPERTISE</p>
              <div className="flex flex-wrap gap-2">
                {personalInfo.interests.map((interest) => (
                  <span
                    key={interest}
                    className="rounded-lg border border-white/15 bg-slate-900/80 px-3 py-1 font-mono text-xs font-medium text-slate-300 hover:border-cyan-400 hover:text-cyan-400 transition-colors"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                className="inline-flex items-center justify-center gap-2 rounded-xl text-xs font-mono uppercase tracking-widest font-bold transition-all duration-300 bg-cyan-400 text-black px-5 py-3 hover:bg-white hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] arrow-nudge"
                href="#projects"
              >
                <span>View Research & Projects</span>
                <ArrowRight className="size-3.5" />
              </a>

              <a
                className="inline-flex items-center justify-center gap-2 rounded-xl text-xs font-mono uppercase tracking-widest font-semibold transition-all duration-300 border border-white/20 bg-slate-900/50 text-slate-300 px-4 py-3 hover:text-white hover:border-white/50 arrow-nudge"
                href="#contact"
              >
                <span>Institutional Advisory</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
