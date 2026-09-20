import { useEffect, useState } from "react";
import { CloudSun, Download, Menu, Moon, Sun, X } from "lucide-react";
import { navLinks, profile, resume } from "../data/portfolio.js";

const THEME_OPTIONS = [
  { id: "paper", label: "Paper", icon: Sun },
  { id: "fog", label: "Fog", icon: CloudSun },
  { id: "ink", label: "Ink", icon: Moon },
];

function ThemeSwitcher({ theme, onChange }) {
  return (
    <div className="theme-switch" role="group" aria-label="Color theme">
      {THEME_OPTIONS.map(({ id, label, icon: Icon }) => (
        <button
          key={id}
          type="button"
          className={`theme-btn${theme === id ? " active" : ""}`}
          aria-pressed={theme === id}
          title={`${label} theme`}
          onClick={() => onChange(id)}
        >
          <Icon size={15} />
          <span>{label}</span>
        </button>
      ))}
    </div>
  );
}

export default function Navbar({ theme, onThemeChange }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="utility" aria-hidden="true">
        <div className="wrap utility-inner">
          <span>
            <span className="dot" />
            Folio — {profile.shortName} · Class of 2026
          </span>
          <span>Ifugao, PH · PHT (UTC+8)</span>
        </div>
      </div>
      <header className={`nav${scrolled ? " scrolled" : ""}`}>
        <div className="wrap nav-inner">
          <a href="#home" className="brand" aria-label="Back to top">
            <span className="brand-mark" aria-hidden="true">{profile.initials}</span>
            <span className="brand-text">
              <strong>{profile.shortName}</strong>
              <span>BSIT · IFSU</span>
            </span>
          </a>
          <nav aria-label="Primary">
            <button
              type="button"
              className="menu-btn"
              aria-expanded={open}
              aria-controls="primary-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
            <ul id="primary-menu" className={`nav-links${open ? " open" : ""}`}>
              {navLinks.map((l, i) => (
                <li key={l.href}>
                  <a href={l.href} onClick={() => setOpen(false)}>
                    <span className="n" aria-hidden="true">
                      0{i + 1}
                    </span>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="nav-cta">
            <ThemeSwitcher theme={theme} onChange={onThemeChange} />
            <a
              className="btn btn-primary btn-sm"
              href={resume.downloadUrl}
              target="_blank"
              rel="noreferrer"
            >
              <Download size={15} /> Résumé
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
