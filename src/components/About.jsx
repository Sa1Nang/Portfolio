import { ArrowRight, Briefcase, CircleCheck, UserRound } from "lucide-react";
import { aboutPoints, profile, resume } from "../data/portfolio.js";

export default function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-heading">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="kicker">
            <UserRound size={14} /> 01 — About
          </span>
          <div>
            <h2 id="about-heading">A short account, in my own words</h2>
            <p className="lede">
              No agency speak. Just where I studied, what I&apos;ve actually
              done, and the kind of work I want next.
            </p>
          </div>
        </div>

        <div className="qa reveal">
          <div className="qa-row">
            <span className="qa-q">
              <UserRound size={15} /> Where I&apos;m coming from
            </span>
            <div className="qa-a">
              <p>
                I finished a <strong>BS in Information Technology</strong> at{" "}
                <strong>Ifugao State University</strong>. I like the practical
                side of the web: pages that load, forms that don&apos;t lose
                data, layouts that hold up on a small phone screen.
              </p>
            </div>
          </div>
          <div className="qa-row">
            <span className="qa-q">
              <CircleCheck size={15} /> What I&apos;ve actually done
            </span>
            <div className="qa-a">
              <ul className="tick-list">
                {aboutPoints.map((point) => (
                  <li key={point}>
                    <CircleCheck size={15} />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="qa-row">
            <span className="qa-q">
              <Briefcase size={15} /> What I want next
            </span>
            <div className="qa-a">
              <p>
                An <strong>internship or junior role</strong> in web development
                or IT support — in the Cordillera, Baguio, or remote within the
                Philippines — where I can take on small tasks, document what I
                did, and get better each week.
              </p>
              <p>
                <a className="proj-link" href="#contact">
                  Tell me about your opening <ArrowRight size={15} />
                </a>{" "}
                <span aria-hidden="true">·</span>{" "}
                <a
                  className="proj-link"
                  href={resume.downloadUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Read the one-page résumé
                </a>
              </p>
              <p className="form-note">{profile.email} — fastest way to reach me.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
