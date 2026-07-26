import { useState } from "react";
import { Menu, X } from "lucide-react";
import { SECTIONS } from "../data/content";

export default function Nav({ active, scrollTo }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = (id) => {
    setMenuOpen(false);
    scrollTo(id);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-white/5">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4 bg-bg/70">
        <button
          onClick={() => handleClick("home")}
          className="text-lg font-semibold tracking-tight font-display"
        >
          SD<span className="text-accent">.</span>
        </button>
        <nav className="hidden md:flex items-center gap-8">
          {SECTIONS.map((s) => (
            <button
              key={s.id}
              onClick={() => handleClick(s.id)}
              className={`text-sm font-mono transition-colors ${
                active === s.id ? "text-accent" : "text-muted"
              }`}
            >
              {s.label}
            </button>
          ))}
        </nav>
        <button
          className="md:hidden text-slate-300"
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden flex flex-col px-6 pb-4 gap-3 bg-bg/95 border-b border-white/5">
          {SECTIONS.map((s) => (
            <button
              key={s.id}
              onClick={() => handleClick(s.id)}
              className={`text-sm text-left py-1 font-mono ${
                active === s.id ? "text-accent" : "text-muted"
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
