import { GraduationCap, MapPin } from "lucide-react";
import { Reveal, SectionHeading } from "./Ui";
import { PROFILE, EDUCATION } from "../data/content";

export default function About() {
  const current = EDUCATION[0];
  return (
    <section id="about" className="px-6 py-28 max-w-6xl mx-auto">
      <SectionHeading eyebrow="01 / About" title="Who I am" />
      <div className="grid md:grid-cols-5 gap-12 items-start">
        <Reveal className="md:col-span-3">
          <p className="text-slate-300 leading-relaxed text-lg mb-5">
            {PROFILE.about1}
          </p>
          <p className="text-slate-400 leading-relaxed">{PROFILE.about2}</p>
        </Reveal>
        <Reveal className="md:col-span-2" delay={120}>
          <div className="rounded-xl p-6 border border-border bg-surface">
            <div className="flex items-center gap-2 mb-4 text-accent">
              <GraduationCap size={18} />
              <span className="text-sm font-mono">Currently</span>
            </div>
            <p className="text-slate-200 font-medium mb-1">
              {current.title}
            </p>
            <p className="text-slate-500 text-sm mb-4">
              {current.place} · {current.year}
            </p>
            <div className="h-px w-full mb-4 bg-border" />
            <p className="text-slate-500 text-sm flex items-center gap-2">
              <MapPin size={14} /> {PROFILE.location}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
