import { useState } from "react";
import {
  AtSign,
  Clock,
  FolderGit2,
  Mail,
  MapPin,
  Send,
} from "lucide-react";
import { profile } from "../data/portfolio.js";
import { getMailHref, getMailTarget, openMail } from "../utils/mail.js";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  const update = (key) => (e) => {
    setForm((f) => ({ ...f, [key]: e.target.value }));
    if (sent) setSent(false);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError("Please fill in your name, email, and message.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    openMail({
      to: profile.email,
      subject: `Portfolio inquiry from ${form.name}`,
      body: `${form.message}\n\n— ${form.name} (${form.email})`,
    });
    setSent(true);
  };

  return (
    <section id="contact" className="section" aria-labelledby="contact-heading">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="kicker">
            <Mail size={14} /> 05 — Contact
          </span>
          <div>
            <h2 id="contact-heading">Write to me about work</h2>
            <p className="lede">
              Internships, junior web roles, IT support openings, or feedback
              on Fun Connect — <em>I read everything myself.</em>
            </p>
          </div>
        </div>

        <div className="contact-grid">
          <aside className="channels reveal" aria-label="Direct channels">
            <h3>Direct channels</h3>
            <p className="sub">No forms-to-nowhere. These all reach me.</p>
            <div className="channel-row">
              <Mail size={17} />
              <div>
                <span className="cl">Email</span>
                <a
                  href={getMailHref(profile.email)}
                  target={getMailTarget()}
                  rel="noreferrer"
                >
                  {profile.email}
                </a>
              </div>
            </div>
            <div className="channel-row">
              <FolderGit2 size={17} />
              <div>
                <span className="cl">Code</span>
                <a href={profile.github} target="_blank" rel="noreferrer">
                  github.com/Sa1Nang
                </a>
              </div>
            </div>
            {profile.linkedin ? (
              <div className="channel-row">
                <AtSign size={17} />
                <div>
                  <span className="cl">Elsewhere</span>
                  <a href={profile.linkedin} target="_blank" rel="noreferrer">
                    LinkedIn — Josh Nangpuhan
                  </a>
                </div>
              </div>
            ) : null}
            <div className="channel-row">
              <MapPin size={17} />
              <div>
                <span className="cl">Where</span>
                <span>{profile.location} · open to Baguio / remote PH</span>
              </div>
            </div>
            <p className="reply-note">
              <Clock size={15} />
              <span>
                I check email in the mornings (PHT). Expect a reply within a
                day — with a straight answer either way.
              </span>
            </p>
          </aside>

          <form className="letter reveal" onSubmit={onSubmit} noValidate>
            <h3>A short note is enough</h3>
            <div className="field">
              <label>
                Your name
                <input
                  type="text"
                  name="name"
                  autoComplete="name"
                  placeholder="e.g. Maria Santos, HR Assistant"
                  value={form.name}
                  onChange={update("name")}
                  required
                />
              </label>
            </div>
            <div className="field">
              <label>
                Email
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="you@company.com"
                  value={form.email}
                  onChange={update("email")}
                  required
                />
              </label>
            </div>
            <div className="field">
              <label>
                What&apos;s this about?
                <textarea
                  name="message"
                  placeholder="Hi Josh — we have a 3-month internship starting…"
                  value={form.message}
                  onChange={update("message")}
                  required
                />
              </label>
            </div>
            <p className="form-error" role="alert">
              {error}
              {!error && sent
                ? "Draft opened in your mail app — press send there to finish."
                : ""}
            </p>
            <div>
              <button type="submit" className="btn btn-primary">
                <Send size={16} /> Open email draft
              </button>
            </div>
            <p className="form-note">
              This opens a pre-addressed draft to {profile.email} — nothing is
              stored on this site.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
