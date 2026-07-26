# Shreyansh Dubey — Portfolio

A modern, animated portfolio built with Next.js, Tailwind CSS, and Framer Motion.
Theme: dark "circuit + neural network" identity — a nod to AI & Robotics.

## Folder structure

```
components/
  Nav.jsx            navigation bar with scroll-spy
  CircuitSpine.jsx    left-side section indicator (signature element)
  Hero.jsx            landing section with typing animation + neural canvas
  NeuralCanvas.jsx     animated node/connection background
  About.jsx
  Skills.jsx
  Projects.jsx
  Education.jsx
  Contact.jsx
  Ui.jsx              shared Reveal / Eyebrow / SectionHeading / Chip
data/
  content.js          all resume content lives here — edit this file to update text
pages/
  _app.jsx
  index.jsx
styles/
  globals.css
```

## Getting started

1. Make sure **Node.js** (18+) and **npm** are installed.
2. Install dependencies:
   ```
   npm install
   ```
3. Run the dev server:
   ```
   npm run dev
   ```
4. Open http://localhost:3000

## Customizing content

Everything text-based (name, bio, projects, skills, education, certifications,
contact links) lives in `data/content.js`. Update the `github` and `linkedin`
URLs there — they're currently placeholders.

## Deploy

Easiest path is [Vercel](https://vercel.com/new): import this project and it
will detect Next.js automatically. Netlify also works with the Next.js
runtime plugin enabled.
