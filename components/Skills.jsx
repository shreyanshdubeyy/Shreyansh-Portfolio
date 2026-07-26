import { Cpu } from "lucide-react";
import { Reveal, SectionHeading, Chip } from "./Ui";
import { SKILL_GROUPS } from "../data/content";

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-28 bg-[#0D1220]">
      <div className="max-w-6xl mx-auto">
        <SectionHeading eyebrow="02 / Skills" title="What I work with" />
        <div className="grid md:grid-cols-2 gap-8">
          {SKILL_GROUPS.map((group, gi) => (
            <Reveal key={group.label} delay={gi * 90}>
              <div className="rounded-xl p-6 border border-border bg-surface h-full">
                <div className="flex items-center gap-2 mb-4">
                  <Cpu size={16} className="text-accent2" />
                  <h3 className="text-slate-200 font-medium">{group.label}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Chip key={item}>{item}</Chip>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
