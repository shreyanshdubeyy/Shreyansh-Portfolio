import { useEffect, useState } from "react";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import NeuralCanvas from "./NeuralCanvas";
import { Eyebrow } from "./Ui";
import { PROFILE } from "../data/content";

export default function Hero({ scrollTo }) {
  const [typed, setTyped] = useState("");

  useEffect(() => {
    let roleIdx = 0;
    let charIdx = 0;
    let deleting = false;
    let timeout;

    function step() {
      const current = PROFILE.roles[roleIdx];
      if (!deleting) {
        charIdx++;
        setTyped(current.slice(0, charIdx));
        if (charIdx === current.length) {
          deleting = true;
          timeout = setTimeout(step, 1400);
          return;
        }
      } else {
        charIdx--;
        setTyped(current.slice(0, charIdx));
        if (charIdx === 0) {
          deleting = false;
          roleIdx = (roleIdx + 1) % PROFILE.roles.length;
        }
      }
      timeout = setTimeout(step, deleting ? 35 : 65);
    }
    timeout = setTimeout(step, 500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center px-6 overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
  {/* Cyan glow */}
  <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[120px] animate-pulse" />

  {/* Purple glow */}
  <div className="absolute top-1/3 -right-32 w-[550px] h-[550px] rounded-full bg-purple-500/10 blur-[140px] animate-pulse" />

  {/* Bottom glow */}
  <div className="absolute -bottom-48 left-1/3 w-[500px] h-[500px] rounded-full bg-teal-400/5 blur-[120px]" />
</div>

<NeuralCanvas />
      <NeuralCanvas />
      <div className="max-w-4xl mx-auto relative z-10 pt-24">
        <Eyebrow>Portfolio — {PROFILE.location}</Eyebrow>
        <h1 className="text-4xl md:text-6xl font-semibold leading-tight mb-4 font-display">
          {PROFILE.name}
        </h1>
        <div className="text-xl md:text-2xl mb-6 h-8 text-accent2 font-mono">
          {typed}
          <span className="animate-pulse">_</span>
        </div>
        <p className="text-slate-400 max-w-xl mb-10 leading-relaxed">
          {PROFILE.summary}
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <button
            onClick={() => scrollTo("projects")}
            className="px-6 py-3 rounded-lg text-sm font-medium font-mono bg-accent text-[#04342C] transition-transform hover:-translate-y-0.5"
          >
            View projects
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className="px-6 py-3 rounded-lg text-sm font-medium font-mono border border-border text-slate-100 transition-transform hover:-translate-y-0.5"
          >
            Get in touch
          </button>
        </div>
        <div className="flex items-center gap-5 mt-10 text-slate-400">
          <a href={PROFILE.github} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
            <Github size={20} />
          </a>
          <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
            <Linkedin size={20} />
          </a>
          <a href={`mailto:${PROFILE.email}`} className="hover:text-white transition-colors">
            <Mail size={20} />
          </a>
        </div>
      </div>
      <button
        onClick={() => scrollTo("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={22} />
      </button>
    </section>
  );
}
