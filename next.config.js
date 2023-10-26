module.exports = {
  async redirects() {
    return [
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
    ];
  },
  reactStrictMode: true,
  i18n: {
    locales: ["en-US", "pt-BR"],
    defaultLocale: "en-US",
  },
};
