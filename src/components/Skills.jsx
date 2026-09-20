import { CircleCheck, Wrench } from "lucide-react";
import { skillGroups } from "../data/portfolio.js";

export default function Skills() {
  return (
    <section id="skills" className="section" aria-labelledby="skills-heading">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="kicker">
            <Wrench size={14} /> 02 — Skills
          </span>
          <div>
            <h2 id="skills-heading">What I can do, stated plainly</h2>
            <p className="lede">
              School-tested and OJT-tested. Comfort levels are in words, not
              mystery percentages — <em>ask me to show any of it.</em>
            </p>
          </div>
        </div>

        <div className="ledger reveal">
          <div className="ledger-head" aria-hidden="true">
            <span>Area</span>
            <span>Notes from practice</span>
            <span>Tools</span>
          </div>
          {skillGroups.map((group) => (
            <div key={group.title} className="ledger-row">
              <div className="ledger-area">
                <strong>{group.title}</strong>
                <span className="level">
                  <CircleCheck size={13} /> {group.levelLabel ?? `${group.level}%`}
                </span>
              </div>
              <p className="ledger-note">{group.description}</p>
              <div className="ledger-tags">
                {group.tags.map((t) => (
                  <span key={t.label} className="chip">
                    {t.label}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
