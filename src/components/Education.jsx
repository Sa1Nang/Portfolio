import { GraduationCap, School } from "lucide-react";
import { education } from "../data/portfolio.js";

export default function Education() {
  return (
    <section id="education" className="section" aria-labelledby="education-heading">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="kicker">
            <School size={14} /> 04 — Schooling
          </span>
          <div>
            <h2 id="education-heading">Where I studied and trained</h2>
            <p className="lede">
              Degree first, then the OJT where I learned to help real users.
            </p>
          </div>
        </div>

        <div className="edu reveal">
          {education.map((e) => (
            <div key={e.degree} className="edu-row">
              <span className="edu-date">
                <GraduationCap size={14} /> {e.date}
              </span>
              <div>
                <h3>{e.degree}</h3>
                <p className="edu-school">{e.school}</p>
                <p className="edu-detail">{e.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
