import {
  FileSearch2,
  BrainCircuit,
  Bot,
  ShieldCheck,
  HeartPulse,
  ExternalLink,
} from "lucide-react";
import { Reveal, SectionHeading, Chip } from "./Ui";
import { PROJECTS } from "../data/content";

const ICONS = {
  FileSearch2,
  BrainCircuit,
  Bot,
  ShieldCheck,
  HeartPulse,
};

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-28 max-w-6xl mx-auto">
      <SectionHeading eyebrow="03 / Projects" title="Things I've built" />
      <div className="grid md:grid-cols-2 gap-6">
        {PROJECTS.map((p, i) => {
          const Icon = ICONS[p.icon];
          return (
            <Reveal key={p.title} delay={(i % 2) * 100}>
              <div className="rounded-xl p-6 border border-border bg-surface h-full group transition-all hover:-translate-y-1">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-accent/10">
                    <Icon size={18} className="text-accent" />
                  </div>
                  <div className="flex items-center gap-3">
  {p.github && (
    <a
      href={p.github}
      target="_blank"
      rel="noopener noreferrer"
      className="text-xs text-slate-400 hover:text-accent transition-colors"
    >
      GitHub
    </a>
  )}

  {p.live && (
    <a
      href={p.live}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-1 text-xs text-slate-400 hover:text-accent transition-colors"
    >
      Live Demo
      <ExternalLink size={14} />
    </a>
  )}
</div>
                </div>
                <h3 className="text-lg font-semibold text-slate-100 mb-2 font-display">
                  {p.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  {p.desc}
                </p>
                <ul className="space-y-2 mb-5">
                  {p.points.map((pt) => (
                    <li key={pt} className="text-slate-500 text-sm flex gap-2">
                      <span className="text-accent2">▹</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <Chip key={t}>{t}</Chip>
                  ))}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
