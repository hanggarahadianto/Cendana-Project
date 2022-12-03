import logo from "./extensions/cendana.png";

export default {
  config: {
    auth: {
      logo: logo,
    },
    head: {
      favicon: logo,
    },
    translations: {
      en: {
        "app.components.LeftMenu.navbrand.title": "Cendana Home",
        "app.components.LeftMenu.navbrand.workplace": "Cendana Admin Panel",
        "Auth.form.welcome.subtitle": "Please Log in to proceed",
        "Auth.form.username.placeholder": "e.g. Kai_Doe",
        "Auth.form.email.placeholder": "e.g. admin@mail.com",
        "Auth.form.welcome.title": "Cendana Admin Panel",
      },
    },
  },
  bootstrap() {},
};
