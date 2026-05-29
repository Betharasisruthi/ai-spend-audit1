export function saveAudit(audit: any) {
  const id = Date.now().toString();

  const existing = JSON.parse(localStorage.getItem("audits") || "{}");

  existing[id] = audit;

  localStorage.setItem("audits", JSON.stringify(existing));

  return id;
}

export function getAudit(id: string) {
  const all = JSON.parse(localStorage.getItem("audits") || "{}");
  return all[id] || null;
}