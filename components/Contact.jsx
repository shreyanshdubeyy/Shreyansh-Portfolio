import { Mail, Phone, Github, Linkedin } from "lucide-react";
import { Reveal, Eyebrow } from "./Ui";
import { PROFILE } from "../data/content";

export default function Contact() {
  return (
    <>
      <section id="contact" className="px-6 py-28 max-w-4xl mx-auto text-center">
        <Reveal>
          <Eyebrow>05 / Contact</Eyebrow>
          <h2 className="text-3xl md:text-5xl font-semibold mb-6 font-display">
            Let&apos;s build something.
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto mb-10">
            Open to internships, collaborations, and full-time roles in AI,
            ML, and software engineering. Reach out below.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <a
              href={`mailto:${PROFILE.email}`}
              className="flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium font-mono bg-accent text-[#04342C]"
            >
              <Mail size={16} /> {PROFILE.email}
            </a>
            <a
              href={`tel:${PROFILE.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-2 px-6 py-3 rounded-lg text-sm border border-border font-mono"
            >
              <Phone size={16} /> {PROFILE.phone}
            </a>
          </div>
          <div className="flex items-center justify-center gap-6 text-slate-400">
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white flex items-center gap-2 text-sm"
            >
              <Github size={18} /> GitHub
            </a>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white flex items-center gap-2 text-sm"
            >
              <Linkedin size={18} /> LinkedIn
            </a>
          </div>
        </Reveal>
      </section>
      <footer className="text-center text-xs text-slate-600 py-8 border-t border-border font-mono">
        Designed &amp; built by {PROFILE.name} · {PROFILE.location}
      </footer>
    </>
  );
}
