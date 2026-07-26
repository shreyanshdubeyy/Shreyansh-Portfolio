import { SECTIONS } from "../data/content";

export default function CircuitSpine({ active, scrollTo }) {
  return (
    <div className="hidden lg:flex flex-col items-center fixed left-8 top-1/2 -translate-y-1/2 z-40">
      {SECTIONS.map((s, i) => (
        <div key={s.id} className="flex flex-col items-center">
          <button
            onClick={() => scrollTo(s.id)}
            aria-label={s.label}
            className="w-2.5 h-2.5 rounded-full border transition-all"
            style={{
              borderColor: active === s.id ? "#4FD8C4" : "#2A3348",
              background: active === s.id ? "#4FD8C4" : "transparent",
              boxShadow:
                active === s.id ? "0 0 10px 2px rgba(79,216,196,0.6)" : "none",
            }}
          />
          {i < SECTIONS.length - 1 && <div className="w-px h-10 bg-border" />}
        </div>
      ))}
    </div>
  );
}
