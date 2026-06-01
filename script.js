const translations = {
  zh: {
    "nav.education": "教育经历",
    "nav.publications": "论文",
    "hero.eyebrow": "个人学术主页",
    "hero.name": "Coming soon",
    "hero.subtitle": "Coming soon",
    "profile.schoolLabel": "学校",
    "profile.school": "Coming soon",
    "profile.roleLabel": "身份",
    "profile.role": "Coming soon",
    "profile.locationLabel": "地点",
    "profile.location": "Coming soon",
    "education.eyebrow": "Education",
    "education.title": "学校经历",
    "education.comingSoon": "Coming soon",
    "publications.eyebrow": "Publications",
    "publications.title": "论文",
    "publications.comingSoon": "Coming soon",
    "footer.updated": "最近更新",
    "footer.note": "Built for GitHub Pages."
  },
  en: {
    "nav.education": "Education",
    "nav.publications": "Publications",
    "hero.eyebrow": "Personal Academic Homepage",
    "hero.name": "Coming soon",
    "hero.subtitle": "Coming soon",
    "profile.schoolLabel": "School",
    "profile.school": "Coming soon",
    "profile.roleLabel": "Role",
    "profile.role": "Coming soon",
    "profile.locationLabel": "Location",
    "profile.location": "Coming soon",
    "education.eyebrow": "Education",
    "education.title": "Education",
    "education.comingSoon": "Coming soon",
    "publications.eyebrow": "Publications",
    "publications.title": "Publications",
    "publications.comingSoon": "Coming soon",
    "footer.updated": "Last updated",
    "footer.note": "Built for GitHub Pages."
  }
};

const root = document.documentElement;
const languageToggle = document.querySelector("#language-toggle");
const themeToggle = document.querySelector("#theme-toggle");
const themeIcon = document.querySelector(".theme-icon");

const getPreferredTheme = () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) return savedTheme;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

const setLanguage = (language) => {
  document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    element.textContent = translations[language][key] || element.textContent;
  });
  localStorage.setItem("language", language);
  languageToggle.setAttribute(
    "aria-label",
    language === "zh" ? "Switch language to English" : "切换语言为中文"
  );
};

const setTheme = (theme) => {
  root.dataset.theme = theme;
  themeIcon.textContent = theme === "dark" ? "☀" : "☾";
  localStorage.setItem("theme", theme);
  themeToggle.setAttribute(
    "aria-label",
    theme === "dark" ? "Switch to light theme" : "Switch to dark theme"
  );
};

const initialLanguage = localStorage.getItem("language") || "zh";
setLanguage(initialLanguage);
setTheme(getPreferredTheme());

languageToggle.addEventListener("click", () => {
  const nextLanguage = localStorage.getItem("language") === "zh" ? "en" : "zh";
  setLanguage(nextLanguage);
});

themeToggle.addEventListener("click", () => {
  const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
  setTheme(nextTheme);
});
