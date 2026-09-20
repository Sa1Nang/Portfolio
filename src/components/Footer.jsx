import { ArrowUp } from "lucide-react";
import { profile } from "../data/portfolio.js";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <p className="ft">Folio</p>
            <p>
              © {year} {profile.name} — BSIT, Ifugao State University. Written
              and built by hand.
            </p>
          </div>
          <div>
            <p className="ft">Set in</p>
            <p>Fraunces for headlines, Inter for body, JetBrains Mono for labels.</p>
          </div>
          <div>
            <p className="ft">Method</p>
            <p>
              Three inks — Paper, Fog, Ink. Switch up top. No templates, no
              stock photos, no gradients.
            </p>
          </div>
          <div>
            <a href="#home" className="to-top" aria-label="Back to top">
              <ArrowUp size={15} /> Top
            </a>
          </div>
        </div>
        <div className="foot-base">
          <span>
            Ifugao, Philippines · {profile.email}
          </span>
          <span>React + Vite · Rev. Feb 2026</span>
        </div>
      </div>
    </footer>
  );
}
