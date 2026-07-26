import { useEffect, useState } from "react";
import Head from "next/head";
import Nav from "../components/Nav";
import CircuitSpine from "../components/CircuitSpine";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Education from "../components/Education";
import Contact from "../components/Contact";
import { SECTIONS, PROFILE } from "../data/content";

export default function Home() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );
    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen w-full relative bg-bg text-slate-100 font-body">
      <Head>
        <title>{PROFILE.name} — Portfolio</title>
        <meta
          name="description"
          content={PROFILE.summary}
        />
      </Head>

      <Nav active={active} scrollTo={scrollTo} />
      <CircuitSpine active={active} scrollTo={scrollTo} />

      <Hero scrollTo={scrollTo} />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />
    </div>
  );
}
