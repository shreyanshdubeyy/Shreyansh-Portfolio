export const PROFILE = {
  name: "Shreyansh Dubey",
  location: "Jabalpur, Madhya Pradesh",
  email: "dubeyshreyansh20@gmail.com",
  phone: "+91 92441 21403",
  github: "https://github.com/shreyanshdubeyy",
  linkedin: "https://linkedin.com/in/shreyansh-dubey-a553a3370",
  roles: [
    "AI & Robotics Engineer",
    "Machine Learning Enthusiast",
    "Full-Stack Builder",
    "LLM Tinkerer",
  ],
  summary:
    "B.Tech student in Artificial Intelligence & Robotics, building practical systems across machine learning, NLP, computer vision, and autonomous hardware — dedicated to continuous learning and creative, real-world problem solving.",
  about1:
    "I'm a motivated and detail-oriented **Artificial Intelligence & Robotics Engineer with a B.Tech degree from Gyan Ganga Institute of Technology and Science. I enjoy turning research-driven ideas in artificial intelligence, machine learning, generative AI, computer vision, and robotics into practical, real-world solutions",

  about2:
    "Outside of coursework, I build full-stack AI applications, train and fine-tune models, and tinker with robotics hardware. I'm looking for opportunities to apply what I've learned in a professional environment that values innovation and teamwork.",
};

export const SECTIONS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export const PROJECTS = [
  {
    title: "AI Resume Analyzer",
    icon: "FileSearch2",
    tags: ["React.js", "FastAPI", "NLP", "Groq LLM"],
    desc: "An AI-powered resume analysis platform that scores ATS compatibility, extracts skills, and generates personalized improvement suggestions.",
    points: [
      "Integrated Groq LLM API with NLP text processing for resume insights and role-based interview questions.",
      "Built and deployed a full-stack app with React.js, FastAPI, REST APIs, Vercel, and Render.",
    ],
     github: "https://github.com/shreyanshdubeyy/AI-Resume-Analyzer.git",
    live: "https://ai-resume-analyzer-zeta-eight.vercel.app/",
  },
  {
  title: "AI Coding Agent",
  icon: "BrainCircuit",
  tags: ["AI Agents", "Python", "FastAPI", "React.js", "Code Analysis"],
  desc: "An AI-powered coding assistant that analyzes uploaded source code using intelligent agent workflows, automated linting, testing, complexity analysis, and code quality insights.",
  points: [
    "Built a tool-using AI agent capable of analyzing code, detecting programming languages, and executing specialized developer tools.",
    "Integrated automated linting, complexity analysis, code testing, and structured AI reasoning to provide actionable code quality insights.",
  ],
  github: "https://github.com/shreyanshdubeyy/AI-Coding-Agent",
  live: "https://ai-coding-agent-zeta.vercel.app/",
},
  {
    title: "A3 Bujji",
    icon: "Bot",
    tags: ["Arduino", "Robotics", "Sensors"],
    desc: "An Arduino-based smart car prototype with automatic navigation and obstacle detection.",
    points: [
      "Integrated sensors and control systems to improve autonomous movement and safety.",
      "Implemented multiple operational modes: assistance, actuation, and automation.",
    ],
    live: "https://genuine-bunny-b7cc95.netlify.app/",
  },
  {
    title: "Deepfake CRM",
    icon: "ShieldCheck",
    tags: ["Machine Learning", "Salesforce", "CRM"],
    desc: "A machine learning-based deepfake detection system integrated with a CRM platform.",
    points: [
      "Improved media authenticity verification for customer interactions and uploaded content.",
      "Used AI and ML techniques for content validation and fraud prevention.",
    ],
    github: "https://github.com/shreyanshdubeyy/Deepfake.git",
  },
  {
    title: "Hybrid & Intelligent Psyche Intervention System",
    icon: "HeartPulse",
    tags: ["AI", "Healthcare", "Full-stack"],
    desc: "An AI-enabled digital mental health platform built on a hybrid care model.",
    points: [
      "Integrated AI-driven mood tracking, resource recommendations, and expert-led psychiatric support.",
      "Enabled teletherapy, appointment booking, and community engagement features.",
    ],
    live: "https://manascare.netlify.app/",
  },
];

export const SKILL_GROUPS = [
  { label: "Languages", items: ["Python", "C", "C++", "SQL", "JavaScript"] },
  {
    label: "AI / ML & frameworks",
    items: [
      "TensorFlow",
      "PyTorch",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "NLP",
      "Generative AI",
      "LLMs",
    ],
  },
  {
    label: "Tools & technologies",
    items: [
      "React.js",
      "FastAPI",
      "REST APIs",
      "Git",
      "GitHub",
      "VS Code",
      "Jupyter Notebook",
      "Microsoft Excel",
    ],
  },
  {
    label: "Coursework",
    items: [
      "Data Structures & Algorithms",
      "OOPS Concepts",
      "DBMS",
      "Machine Learning",
      "NLP",
      "Computer Vision",
      "Deep Learning",
    ],
  },
];

export const EDUCATION = [
  {
    year: "2022 — 2026",
    title: "B.Tech, Artificial Intelligence & Robotics",
    place: "Gyan Ganga Institute of Technology And Science",
    detail: "CGPA: 7.02",
  },
  {
    year: "2022",
    title: "Class XII, CBSE",
    place: "Ashoka Hall Sr. Sec. School",
    detail: "67%",
  },
  {
    year: "2020",
    title: "Class X, CBSE",
    place: "Ashoka Hall Sr. Sec. School",
    detail: "73%",
  },
];

export const CERTIFICATIONS = [
  "Cybersecurity Essentials — Cisco Networking Academy",
  "Introduction to Cybersecurity — Cisco Networking Academy",
  "Introduction to Packet Tracer — Cisco Networking Academy",
  "CLA: Programming Essentials in C — Cisco Networking Academy",
  "CPA: Programming Essentials in C++ — Cisco Networking Academy",
  "LastMile Program — Salesforce AI Agent Developer Track",
];
