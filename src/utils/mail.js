export function isMobileMailDevice() {
  if (typeof navigator === "undefined") return false;
  const ua = navigator.userAgent || navigator.vendor || "";
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|Tablet/i.test(ua)) {
    return true;
  }
  if (typeof window !== "undefined" && navigator.maxTouchPoints > 1 && window.innerWidth < 1024) {
    return true;
  }
  return false;
}

export function gmailComposeUrl(to, subject = "", body = "") {
  const params = new URLSearchParams({ view: "cm", fs: "1", to });
  if (subject) params.set("su", subject);
  if (body) params.set("body", body);
  return `https://mail.google.com/mail/?${params.toString()}`;
}

export function mailtoUrl(to, subject = "", body = "") {
  const params = new URLSearchParams();
  if (subject) params.set("subject", subject);
  if (body) params.set("body", body);
  const query = params.toString();
  return `mailto:${to}${query ? `?${query}` : ""}`;
}

// Desktop/website -> Gmail / Workspace compose (new tab).
// Phones/tablets -> native mail app via mailto:.
export function openMail({ to, subject = "", body = "" }) {
  if (isMobileMailDevice()) {
    window.location.href = mailtoUrl(to, subject, body);
  } else {
    window.open(gmailComposeUrl(to, subject, body), "_blank", "noopener");
  }
}

export function getMailHref(to, subject = "", body = "") {
  return isMobileMailDevice() ? mailtoUrl(to, subject, body) : gmailComposeUrl(to, subject, body);
}

export function getMailTarget() {
  return isMobileMailDevice() ? undefined : "_blank";
}
