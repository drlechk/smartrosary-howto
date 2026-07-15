(() => {
  const dictionaries = Object.create(null);
  const defaultLanguage = "pl";

  function normalizeLanguage(language) {
    return String(language ?? "").trim().toLowerCase().split("-")[0];
  }

  function registerLanguage(language, dictionary) {
    const normalizedLanguage = normalizeLanguage(language);

    if (!normalizedLanguage || !dictionary) return;
    dictionaries[normalizedLanguage] = dictionary;
  }

  function getRequestedLanguage() {
    const params = new URLSearchParams(window.location.search);
    const candidates = [
      params.get("lang"),
      document.documentElement.lang,
      navigator.language,
      defaultLanguage,
    ];

    return candidates
      .map(normalizeLanguage)
      .find((language) => dictionaries[language]) ?? defaultLanguage;
  }

  function format(template, values) {
    return template.replace(/\{(\w+)\}/g, (_, key) => String(values[key] ?? ""));
  }

  function getTutorial(id, requestedLanguage = getRequestedLanguage()) {
    const normalizedLanguage = normalizeLanguage(requestedLanguage);
    const language = dictionaries[normalizedLanguage] ? normalizedLanguage : defaultLanguage;
    const fallbackDictionary = dictionaries[defaultLanguage];
    const dictionary = dictionaries[language] ?? fallbackDictionary;

    if (!fallbackDictionary?.tutorials?.[id]) {
      throw new Error(`Missing default translation for tutorial: ${id}`);
    }

    return {
      language,
      common: { ...fallbackDictionary.common, ...dictionary.common },
      tutorial: {
        ...fallbackDictionary.tutorials[id],
        ...dictionary.tutorials?.[id],
      },
    };
  }

  window.SmartRosaryHowtoI18n = {
    dictionaries,
    format,
    getRequestedLanguage,
    getTutorial,
    registerLanguage,
  };
})();
