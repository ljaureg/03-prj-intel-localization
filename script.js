(() => {
  const rtlLanguages = new Set([
    "ar",
    "arc",
    "ckb",
    "dv",
    "fa",
    "he",
    "ku",
    "ps",
    "sd",
    "syr",
    "ug",
    "ur",
    "yi"
  ]);

  function updateTextDirection() {
    const htmlElement = document.documentElement;
    const language = (htmlElement.lang || "en")
      .trim()
      .toLowerCase()
      .split(/[-_]/)[0];
    const direction = rtlLanguages.has(language) ? "rtl" : "ltr";

    htmlElement.dir = direction;
  }

  updateTextDirection();

  const languageObserver = new MutationObserver((mutations) => {
    if (mutations.some((mutation) => mutation.attributeName === "lang")) {
      updateTextDirection();
    }
  });

  languageObserver.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["lang"]
  });
})();
