import React from 'react';
import { ArrowRight, ArrowUpRight, Mail, Globe, Award, BookOpen } from 'lucide-react';
import { personalInfo, aiiensBrand } from '../data/portfolioData';

// Direct SVG for LinkedIn
function LinkedInIcon({ className = "size-4" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

// Google Scholar Icon
function ScholarIcon({ className = "size-4" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  );
}

// IEEE Icon
function IEEEIcon({ className = "size-4" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      title: "LinkedIn Profile",
      handle: "prof-tumati-venkatewara-rao",
      href: personalInfo.socials.linkedin,
      icon: LinkedInIcon
    },
    {
      title: "Google Scholar",
      handle: "Publications & Citations",
      href: personalInfo.socials.scholar,
      icon: ScholarIcon
    },
    {
      title: "Senior Member IEEE",
      handle: "SMIEEE Member",
      href: personalInfo.socials.ieee,
      icon: IEEEIcon
    },
    {
      title: "Email",
      handle: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      icon: Mail
    }
  ];

  const footerNav = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "AIIENS Campus", href: "#aiiens" },
    { name: "Research & Work", href: "#projects" },
    { name: "Track Record", href: "#experience" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <footer className="px-5 pb-10 sm:px-8 text-white">
      <div className="mx-auto w-full max-w-6xl">
        {/* Upper Call to Action Panel */}
        <div className="surface-panel p-6 sm:p-10 lg:p-12 rounded-3xl border border-white/15 shadow-2xl mb-8">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] items-center">
            <div>
              <p className="label-mono">// INSTITUTIONAL GOVERNANCE</p>
              <h2 className="mt-3 text-2xl font-extrabold sm:text-4xl text-white tracking-tight">
                {personalInfo.tagline}
              </h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-400">
                Championing technical skill acceleration at AIIENS Campus, institutional accreditation standards, and pioneering antenna research for the next generation of engineers.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  className="inline-flex items-center justify-center gap-2 rounded-xl text-xs font-mono uppercase tracking-widest font-bold transition-all duration-300 bg-cyan-400 text-black px-5 py-3 hover:bg-white shadow-[0_0_20px_rgba(0,240,255,0.3)] arrow-nudge"
                  href="#contact"
                >
                  <span>Connect With Chairman</span>
                  <ArrowRight className="size-3.5" />
                </a>
                <a
                  className="inline-flex items-center justify-center gap-2 rounded-xl text-xs font-mono uppercase tracking-widest font-semibold transition-all duration-300 border border-white/20 bg-slate-900/50 text-white px-4 py-3 hover:bg-white hover:text-black arrow-nudge"
                  href="https://www.aiienscampus.in"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <span>Explore AIIENS Campus</span>
                </a>
              </div>
            </div>

            {/* Professional Profiles Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.title}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="group flex items-center gap-3 rounded-xl border border-white/15 bg-slate-900/80 p-3 transition-all duration-300 hover:border-cyan-400/50 hover:bg-slate-900"
                  >
                    <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-slate-950 text-cyan-400 border border-white/10 transition-transform duration-300 group-hover:scale-105 group-hover:bg-cyan-500/10">
                      <Icon className="size-4" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <span className="block truncate text-xs font-bold text-white">
                        {item.title}
                      </span>
                      <span className="block truncate font-mono text-[10px] text-slate-400">
                        {item.handle}
                      </span>
                    </div>
                    <ArrowUpRight className="size-3.5 shrink-0 text-slate-400 group-hover:text-cyan-400 transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Legal / Nav */}
        <div className="flex flex-col gap-5 pt-4 border-t border-white/10 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <nav aria-label="Footer Navigation" className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 font-mono uppercase tracking-wider text-xs font-medium sm:justify-start">
            {footerNav.map((link) => (
              <a
                key={link.name}
                className="hover:text-cyan-400 transition-colors py-0.5"
                href={link.href}
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="flex flex-col items-center gap-1 text-center sm:items-end sm:text-right">
            <p className="font-mono font-medium text-slate-300">
              © {currentYear} {personalInfo.name}. Chairman, {personalInfo.brandName}.
            </p>
            <p className="font-mono text-[11px] text-cyan-400">
              {aiiensBrand.tagline}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
