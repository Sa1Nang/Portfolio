import {
  ArrowRight,
  ArrowUpRight,
  Clock,
  Download,
  GraduationCap,
  MapPin,
  Send,
} from "lucide-react";
import { profile, resume } from "../data/portfolio.js";
import { getMailHref, getMailTarget } from "../utils/mail.js";
import profilePhoto from "../assets/Profile.jpg";

export default function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-heading">
      <div className="wrap">
        <p className="hero-folio reveal">
          <span>
            File <strong>JN-2026</strong>
          </span>
          <span>BSIT · Ifugao State University</span>
          <span>Rev. Feb 2026</span>
        </p>
        <div className="hero-grid">
          <div className="hero-main reveal">
            <h1 id="hero-heading">
              Websites made the <span className="wash">simple way.</span>
            </h1>
            <p className="hero-standfirst">
              BSIT graduate, Ifugao State University — interested in front-end
              work and IT support done carefully.
            </p>
            <p className="hero-body">
              My capstone, Fun Connect, teaches network cabling through short
              lessons and game-style review. Before that I spent OJT at
              Foundever Baguio supporting end-users, troubleshooting issues,
              and writing things down so the next person wouldn&apos;t get stuck.
            </p>
            <div className="hero-facts" aria-label="Key facts">
              <div>
                <span className="fl">
                  <MapPin size={13} /> Based
                </span>
                <span className="fv">{profile.location}</span>
              </div>
              <div>
                <span className="fl">
                  <GraduationCap size={13} /> School
                </span>
                <span className="fv">IFSU, BSIT &apos;26</span>
              </div>
              <div>
                <span className="fl">
                  <Clock size={13} /> Now
                </span>
                <span className="fv">{profile.availability}</span>
              </div>
            </div>
            <div className="cta-row">
              <a href="#projects" className="btn btn-primary">
                See the school work <ArrowRight size={16} />
              </a>
              <a
                href={resume.downloadUrl}
                className="btn btn-line"
                target="_blank"
                rel="noreferrer"
              >
                <Download size={16} /> Download résumé
              </a>
              <a href="#contact" className="btn btn-line">
                <Send size={16} /> Write to me
              </a>
            </div>
            <div className="ext-links">
              <a href={profile.github} target="_blank" rel="noreferrer">
                GitHub <ArrowUpRight size={15} />
              </a>
              {profile.linkedin ? (
                <a href={profile.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn <ArrowUpRight size={15} />
                </a>
              ) : null}
              <a
                href={getMailHref(profile.email)}
                target={getMailTarget()}
                rel="noreferrer"
              >
                {profile.email} <ArrowUpRight size={15} />
              </a>
            </div>
          </div>

          <aside className="record reveal" aria-label="Record summary">
            <div className="record-top">
              <span>Record — {profile.initials}/2026</span>
              <span>1 of 1</span>
            </div>
            <div className="record-body">
              <div className="record-id">
                <img
                  className="record-photo"
                  src={profilePhoto}
                  alt="Formal portrait of Josh G. Nangpuhan"
                />
                <div>
                  <strong>{profile.name}</strong>
                  <span>BSIT · front-end &amp; support</span>
                </div>
              </div>
              <span className="stamp">Open to work</span>
              <dl>
                <div>
                  <dt>Last post</dt>
                  <dd>
                    <strong>IT Support Intern</strong>, Foundever Baguio —
                    end-user support
                  </dd>
                </div>
                <div>
                  <dt>Capstone</dt>
                  <dd>
                    <strong>Fun Connect</strong> — gamified network cabling
                    lessons
                  </dd>
                </div>
                <div>
                  <dt>Tools</dt>
                  <dd>HTML · CSS · JavaScript · PHP · MySQL · Git</dd>
                </div>
                <div>
                  <dt>Looking for</dt>
                  <dd>Internship or junior web / IT support role</dd>
                </div>
              </dl>
            </div>
            <div className="record-foot">
              <Clock size={14} /> Replies mornings PHT, usually within a day
            </div>
          </aside>
        </div>

        <div className="toolstrip reveal" aria-label="Tools used">
          <span className="tl">Filed under</span>
          {["HTML", "CSS", "JavaScript", "React", "PHP", "MySQL", "Git"].map(
            (t) => (
              <span key={t} className="chip">
                {t}
              </span>
            )
          )}
        </div>
      </div>
    </section>
  );
}
