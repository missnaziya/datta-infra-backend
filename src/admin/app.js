import logo from "./extensions/logo.png";
import favicon from "./extensions/favicon.png";

const config = {
  // Replace the Strapi logo in auth (login) views
  auth: {
    logo,
  },
  // Replace the favicon
  head: {
    favicon : favicon,
  },
  // Replace the Strapi logo in the main navigation
  menu: {
    logo,
  },
  // Extend the translations
  translations: {
    en: {
      "app.components.LeftMenu.navbrand.title": "Datta Infra ",

      "app.components.LeftMenu.navbrand.workplace": "Dashboard",

      "Auth.form.welcome.title": "Welcom to Datta Infra",

      "Auth.form.welcome.subtitle": "Login to your account",

      "Settings.profile.form.section.experience.interfaceLanguageHelp":
        "Preference changes will apply only to you",

        "app.components.LeftMenu.setting.": "...",
    },
  },
  // Disable video tutorials
  tutorials: false,
  // Disable notifications about new Strapi releases
  notifications: { releases: false },
};
const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
