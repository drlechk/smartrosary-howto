(() => {
  const labels = {
    de: "Letztes Deployment",
    en: "Last deploy",
    es: "Último despliegue",
    fr: "Dernier déploiement",
    la: "Ultima publicatio",
    pl: "Ostatnie wdrożenie",
    pt: "Último deploy",
  };
  const rawModified = document.lastModified;
  const modified = new Date(rawModified);
  if (Number.isNaN(modified.getTime())) return;

  const footer = document.createElement("footer");
  footer.className = "deploy-footer";

  function getLanguage() {
    const selected = document.getElementById("howto-language-control")?.value;
    const language = selected || document.documentElement.lang || navigator.language || "en";
    return language.toLowerCase().split("-")[0];
  }

  function formatDate(language) {
    try {
      return new Intl.DateTimeFormat(language, {
        year: "numeric",
        month: "short",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
        timeZoneName: "short",
      }).format(modified);
    } catch {
      return modified.toLocaleString();
    }
  }

  function render() {
    const language = getLanguage();
    const label = labels[language] || labels.en;
    footer.title = `${label}: ${modified.toISOString()}`;
    footer.textContent = `${label}: ${formatDate(language)}`;
  }

  render();
  document.body.appendChild(footer);

  document.getElementById("howto-language-control")?.addEventListener("change", render);
  new MutationObserver(render).observe(document.documentElement, {
    attributeFilter: ["lang"],
    attributes: true,
  });
})();
