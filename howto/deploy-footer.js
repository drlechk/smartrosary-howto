(() => {
  const rawModified = document.lastModified;
  const modified = new Date(rawModified);
  if (Number.isNaN(modified.getTime())) return;

  const footer = document.createElement("footer");
  footer.className = "deploy-footer";
  footer.title = `GitHub Pages deploy datetime: ${modified.toISOString()}`;

  const formatted = new Intl.DateTimeFormat(navigator.language || undefined, {
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZoneName: "short",
  }).format(modified);

  footer.textContent = `GitHub Pages deploy: ${formatted}`;
  document.body.appendChild(footer);
})();
