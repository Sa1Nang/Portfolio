import { useEffect, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Education from "./components/Education.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import useReveal from "./hooks/useReveal.js";

const THEMES = ["paper", "fog", "ink"];
const THEME_META = { paper: "#f5f1e8", fog: "#eceeeb", ink: "#14110d" };

function getInitialTheme() {
  if (typeof window === "undefined") return "ink";
  try {
    const stored = window.localStorage.getItem("jn-folio-theme");
    if (THEMES.includes(stored)) return stored;
  } catch {
    /* storage unavailable — fall through to default */
  }
  return "ink";
}

export default function App() {
  const [theme, setTheme] = useState(getInitialTheme);
  useReveal();

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      window.localStorage.setItem("jn-folio-theme", theme);
    } catch {
      /* storage unavailable — theme still applies for this visit */
    }
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", THEME_META[theme]);
  }, [theme]);

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Navbar theme={theme} onThemeChange={setTheme} />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
