export const profile = {
  name: "Josh G. Nangpuhan",
  shortName: "Josh Nangpuhan",
  initials: "JN",
  title: "BSIT Graduate — Aspiring Web Developer",
  tagline:
    "Fresh BSIT graduate from Ifugao State University passionate about building clean, responsive web experiences.",
  location: "Ifugao, Philippines",
  availability: "Open to internships & junior roles",
  email: "joshnangpuhan@gmail.com",
  github: "https://github.com/Sa1Nang",
  linkedin: "https://www.linkedin.com/in/josh-nangpuhan-557a90421/",
};

export const resume = {
  viewUrl:
    "https://drive.google.com/file/d/1fNj7lDgsykEJdu8fLq15Pom-RLcJZwBp/view?usp=drive_link",
  downloadUrl:
    "https://drive.google.com/uc?export=download&id=1fNj7lDgsykEJdu8fLq15Pom-RLcJZwBp",
};

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export const aboutPoints = [
  "BS in Information Technology, Ifugao State University",
  "Interested in front-end development, databases & IT support",
  "Hands-on school projects with HTML, CSS, JavaScript, PHP & MySQL",
  "Eager to learn modern workflows: Git, responsive UI, APIs",
];

export const skillGroups = [
  {
    title: "Front-End",
    level: 80,
    levelLabel: "Comfortable — my main focus",
    description:
      "Semantic HTML, responsive CSS, and small JavaScript interactions. I test on a phone first and keep layouts readable on slow connections.",
    tags: [
      { label: "HTML5", tone: "" },
      { label: "CSS3", tone: "" },
      { label: "JavaScript", tone: "" },
      { label: "React (basics)", tone: "" },
    ],
  },
  {
    title: "Back-End & Data",
    level: 70,
    levelLabel: "Working knowledge",
    description:
      "Simple CRUD apps in school: forms, server-side checks, and relational tables. Enough to wire a small site end to end.",
    tags: [
      { label: "PHP", tone: "" },
      { label: "MySQL", tone: "" },
    ],
  },
  {
    title: "Support & Workflow",
    level: 75,
    levelLabel: "Daily use during OJT",
    description:
      "Troubleshooting notes, end-user support, and version control from my IT support internship at Foundever Baguio.",
    tags: [
      { label: "Git & GitHub", tone: "" },
      { label: "VS Code", tone: "" },
      { label: "MS Office", tone: "" },
    ],
  },
];

export const projects = [
  {
    title: "Fun Connect — Gamified Computer Network Cabling",
    description:
      "Capstone website for learning the fundamentals of networking through gamified computer network cabling lessons and interactive activities.",
    tech: ["HTML", "CSS", "JavaScript", "PHP"],
    year: "2025 – 2026",
    kind: "Capstone",
    role: "Design · front-end · PHP wiring",
    points: [
      "Short lessons on cabling basics with quizzes after each topic",
      "Simple game-style activities to keep review sessions moving",
      "PHP + MySQL behind logins, scores, and lesson progress",
    ],
  },
  {
    title: "Personal Portfolio (This Site)",
    description:
      "Single-page portfolio in React + Vite. Rebuilt as a warm paper folio — ruled sections, one green ink, no template look.",
    tech: ["React", "Vite", "CSS"],
    year: "2026",
    kind: "Personal",
    role: "Everything",
    points: [
      "Left-aligned editorial layout with numbered sections",
      "Ledger-style skills and project entries instead of cards",
      "Contact form that opens a pre-addressed email draft",
    ],
  },
];

export const education = [
  {
    date: "2022 — 2026",
    school: "Ifugao State University",
    degree: "Bachelor of Science in Information Technology (BSIT)",
    detail:
      "Relevant coursework: Web Development, Database Management, Programming, Networking, Systems Analysis. Capstone: Fun Connect — Gamified Computer Network Cabling.",
  },
  {
    date: "OJT / Internship",
    school: "Foundever Baguio",
    degree: "IT Support Intern",
    detail:
      "Completed OJT at Foundever Baguio handling IT support tasks — troubleshooting, assisting end-users, and working with a ticketing system for support requests and documentation.",
  },
];
