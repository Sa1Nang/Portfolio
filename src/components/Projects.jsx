import { ArrowUpRight, CircleCheck, FolderGit2 } from "lucide-react";
import { profile, projects } from "../data/portfolio.js";

export default function Projects() {
  return (
    <section id="projects" className="section" aria-labelledby="projects-heading">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="kicker">
            <FolderGit2 size={14} /> 03 — Projects
          </span>
          <div>
            <h2 id="projects-heading">Two builds, explained fully</h2>
            <p className="lede">
              School work by {profile.shortName} — what each one is for, what I
              handled, and what it runs on. <em>Small list on purpose.</em>
            </p>
          </div>
        </div>

        <div className="proj-list">
          {projects.map((p, i) => (
            <article key={p.title} className="proj reveal">
              <span className="proj-num" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <p className="proj-meta">
                  <span className="k">{p.kind ?? "School work"}</span>
                  <span>{p.year ?? "2026"}</span>
                </p>
                <h3>{p.title}</h3>
                <p className="proj-desc">{p.description}</p>
                {p.points ? (
                  <ul className="proj-points">
                    {p.points.map((pt) => (
                      <li key={pt}>
                        <CircleCheck size={14} />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
                <div className="proj-tags">
                  {p.tech.map((t) => (
                    <span key={t} className="chip chip-solid">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="proj-side">
                <div>
                  <span className="row-t">My part</span>
                  <p className="row-v">{p.role ?? "Design & build"}</p>
                </div>
                <div>
                  <span className="row-t">Code</span>
                  <p>
                    <a
                      className="proj-link"
                      href={profile.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub <ArrowUpRight size={14} />
                    </a>
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
