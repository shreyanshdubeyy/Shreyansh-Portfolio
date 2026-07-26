import { Award } from "lucide-react";
import { Reveal, SectionHeading } from "./Ui";
import { EDUCATION, CERTIFICATIONS } from "../data/content";

export default function Education() {
  return (
    <section id="education" className="px-6 py-28 bg-[#0D1220]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-14">
        <div className="md:col-span-3">
          <SectionHeading eyebrow="04 / Education" title="Academic timeline" />
          <div className="relative pl-8">
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border" />
            {EDUCATION.map((e, i) => (
              <Reveal
                key={e.title}
                delay={i * 100}
                className="relative mb-10 last:mb-0"
              >
                <div className="absolute -left-8 top-1 w-3.5 h-3.5 rounded-full border-2 border-accent bg-[#0D1220]" />
                <span className="text-xs text-accent font-mono">{e.year}</span>
                <h3 className="text-slate-100 font-medium mt-1">{e.title}</h3>
                <p className="text-slate-500 text-sm">{e.place}</p>
                <p className="text-slate-600 text-sm">{e.detail}</p>
              </Reveal>
            ))}
          </div>
        </div>
        <div className="md:col-span-2">
          <Reveal>
            <div className="flex items-center gap-2 mb-6 text-accent2">
              <Award size={18} />
              <span className="text-sm font-mono">
                Certifications &amp; training
              </span>
            </div>
            <ul className="space-y-3">
              {CERTIFICATIONS.map((c) => (
                <li
                  key={c}
                  className="text-slate-400 text-sm border-b border-border pb-3"
                >
                  {c}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
