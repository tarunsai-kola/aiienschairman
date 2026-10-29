import React, { useState, useEffect, useRef } from 'react';
import { ArrowDown, Award, ExternalLink, Sparkles, GraduationCap } from 'lucide-react';
import { personalInfo, aiiensBrand } from '../data/portfolioData';

export default function Hero({ onSelectInitiative }) {
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const hasAutoScrolledRef = useRef(false);

  const INTRO_DURATION_MS = 5000;
  const UPDATE_MS = 50;

  // Track if user manually scrolled down already
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        hasAutoScrolledRef.current = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Timer loop: when progress completes, smoothly scroll down to the #about section
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + (UPDATE_MS / INTRO_DURATION_MS) * 100;
        if (next >= 100) {
          clearInterval(timer);
          if (!hasAutoScrolledRef.current && window.scrollY < 200) {
            hasAutoScrolledRef.current = true;
            const el = document.getElementById('about');
            if (el) {
              el.scrollIntoView({ behavior: 'smooth' });
            }
          }
          return 100;
        }
        return next;
      });
    }, UPDATE_MS);

    return () => clearInterval(timer);
  }, [isPaused]);

  const handleScrollToAbout = () => {
    hasAutoScrolledRef.current = true;
    const el = document.getElementById('about');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="hero-wash relative min-h-screen text-white flex flex-col justify-center items-center px-4 sm:px-8 pt-28 pb-16 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-center text-center animate-fadeIn py-4 sm:py-6">
        
        {/* Top Telemetry Pill */}
        <div className="mb-6 inline-flex flex-wrap items-center justify-center gap-2 rounded-full border border-cyan-500/30 bg-slate-950/80 px-4 py-1.5 font-mono text-xs text-cyan-400 backdrop-blur-md shadow-[0_0_20px_rgba(0,240,255,0.15)]">
          <span className="size-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="tracking-widest uppercase font-semibold">CHAIRMAN // AIIENS CAMPUS</span>
          <span className="text-slate-600">•</span>
          <span className="text-slate-300">SENIOR MEMBER IEEE</span>
          <span className="text-slate-600">•</span>
          <span className="text-slate-300">BITS PILANI ALUMNUS</span>
        </div>

        {/* Master Showcase: AIIENS Campus Flagship Card */}
        <div className="relative w-full max-w-4xl group">
          {/* Ambient Royal Navy & Cyan Halo Glow */}
          <div className="pointer-events-none absolute -inset-3 rounded-3xl bg-gradient-to-r from-blue-600/35 via-cyan-500/30 to-blue-600/35 blur-2xl opacity-75 transition-opacity duration-700 group-hover:opacity-100" />

          {/* Pristine Pleated AIIENS Campus Showcase Enclosure */}
          <div className="campus-hero-banner relative overflow-hidden rounded-2xl sm:rounded-3xl border border-white/20 p-5 sm:p-9 md:p-11 text-center transition-transform duration-700 group-hover:scale-[1.008]">
            
            {/* Ambient Lighting Beam */}
            <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-48 bg-cyan-400/20 blur-3xl rounded-full" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />

            {/* Top Brand Identity Bar */}
            <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 mb-5 sm:mb-7 pb-4 border-b border-white/10">
              <a
                href="https://www.aiienscampus.in"
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-2.5 sm:gap-3 group/brand transition-transform hover:scale-[1.02]"
              >
                <div className="size-9 sm:size-11 rounded-xl bg-white p-1.5 shadow-xl border border-white/40 flex items-center justify-center shrink-0">
                  <img
                    src="/images/brand/aiiens-campus.png"
                    alt="AIIENS Campus Logo"
                    className="size-full object-contain"
                  />
                </div>
                <div className="text-left">
                  <span className="block font-display text-base sm:text-xl font-extrabold text-white tracking-tight">
                    Aiiens Campus
                  </span>
                  <span className="block font-mono text-[9px] sm:text-[10px] text-cyan-300 uppercase tracking-widest">
                    aiienscampus.in
                  </span>
                </div>
              </a>

              <div className="flex items-center gap-2 font-mono text-[10px] sm:text-xs text-cyan-300 bg-cyan-500/10 px-3 py-1.5 rounded-full border border-cyan-500/30 backdrop-blur-sm shadow-[0_0_15px_rgba(0,240,255,0.15)]">
                <span className="size-2 rounded-full bg-cyan-400 animate-pulse" />
                <span className="uppercase tracking-wider font-semibold">FLAGSHIP ACADEMIC INITIATIVE</span>
              </div>
            </div>

            {/* Core AIIENS Campus Signature Typography */}
            <div className="relative z-10 space-y-2.5 sm:space-y-3.5 my-3 sm:my-5">
              <p className="font-serif-italic text-2xl sm:text-4xl md:text-5xl text-slate-100 font-normal tracking-tight drop-shadow-md">
                Engineering Education, Upgraded.
              </p>
              
              <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-b from-white via-slate-100 to-cyan-100 bg-clip-text text-transparent drop-shadow-[0_12px_35px_rgba(0,0,0,0.85)]">
                Career Ready.
              </h1>

              <p className="text-xs sm:text-base text-slate-200 max-w-2xl mx-auto leading-relaxed font-normal pt-1 px-2">
                We partner with engineering colleges to build structured, semester-wise industry-readiness programs.
              </p>
            </div>

            {/* Strategic Pillars */}
            <div className="relative z-10 pt-3 pb-5 flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
              {[
                'Project-First Engineering',
                'Outcome-Based Pedagogy',
                'Expert Mentorship Sprints',
                'Autonomous Placement Pathways'
              ].map((pill, i) => (
                <span
                  key={i}
                  className="rounded-lg bg-slate-950/75 border border-white/10 px-2.5 sm:px-3 py-1 sm:py-1.5 text-[10px] sm:text-xs font-mono text-slate-300 backdrop-blur-sm"
                >
                  <span className="text-cyan-400 mr-1.5">•</span>
                  {pill}
                </span>
              ))}
            </div>

            {/* Chairman Governance Footer Ribbon inside card */}
            <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 rounded-xl sm:rounded-2xl bg-slate-950/90 backdrop-blur-md p-3.5 sm:p-4 border border-white/15 shadow-2xl">
              <div className="text-center sm:text-left">
                <p className="font-mono text-[10px] sm:text-xs text-cyan-400 font-bold uppercase tracking-widest">
                  INSTITUTIONAL GOVERNANCE // AIIENS CAMPUS
                </p>
                <h3 className="text-sm sm:text-base font-bold text-white tracking-tight mt-0.5">
                  Prof. Tumati Venkateswara Rao <span className="font-mono text-xs text-slate-400 font-normal">| Chairman</span>
                </h3>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
                <div className="hidden md:flex items-center gap-2 font-mono text-[11px] text-cyan-300 bg-cyan-500/10 px-3 py-1.5 rounded-xl border border-cyan-500/20">
                  <Award className="size-3.5 text-cyan-400" />
                  <span>NBA • NAAC 'A' • AUTONOMOUS LEADER</span>
                </div>
                <a
                  href="https://www.aiienscampus.in"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider text-black hover:bg-white hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all cursor-pointer"
                >
                  <span>Explore AIIENS Campus</span>
                  <ExternalLink className="size-3.5" />
                </a>
              </div>
            </div>

          </div>

          {/* Minimalist Progress Indicator beneath card */}
          <div className="mt-4 mx-auto w-full max-w-md">
            <div className="relative h-1 w-full overflow-hidden rounded-full bg-white/10">
              <div 
                className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-300 transition-all duration-75 ease-linear shadow-[0_0_10px_rgba(0,240,255,0.8)]"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>

        {/* Executive Stats Banner */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-4xl">
          {personalInfo.stats.map((stat, i) => (
            <div
              key={i}
              className="p-3.5 sm:p-4 rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-md transition-all hover:border-cyan-400/40 hover:bg-slate-900/90"
            >
              <div className="text-xl sm:text-2xl font-extrabold font-mono text-cyan-400">{stat.value}</div>
              <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Action Button: Scroll down to About section */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={handleScrollToAbout}
            type="button"
            className="inline-flex items-center gap-2 rounded-xl border border-cyan-400/50 bg-cyan-400 text-black px-7 py-3 text-xs font-mono font-bold uppercase tracking-widest shadow-[0_0_25px_rgba(0,240,255,0.35)] transition-all duration-300 hover:bg-white hover:scale-[1.02] cursor-pointer"
          >
            <span>Explore Academic Leadership</span>
            <ArrowDown className="size-4 animate-bounce" />
          </button>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-slate-900/60 text-slate-300 px-6 py-3 text-xs font-mono font-semibold uppercase tracking-widest hover:text-white hover:border-white/50 transition-all"
          >
            <span>Institutional Advisory</span>
          </a>
        </div>

      </div>
    </section>
  );
}
