import { motion } from "framer-motion";

export function Reveal({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, delay: delay / 1000, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function Eyebrow({ children }) {
  return (
    <div className="inline-flex items-center gap-2 text-xs tracking-widest uppercase mb-4 font-mono text-accent">
      <span className="inline-block w-6 h-px bg-accent" />
      {children}
    </div>
  );
}

export function SectionHeading({ eyebrow, title }) {
  return (
    <Reveal className="mb-14">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="text-3xl md:text-4xl font-semibold text-slate-100 font-display">
        {title}
      </h2>
    </Reveal>
  );
}

export function Chip({ children }) {
  return (
    <span className="px-3 py-1.5 rounded-full text-xs border border-accent/35 text-[#BEEFE4] bg-accent/[0.06] font-mono">
      {children}
    </span>
  );
}
