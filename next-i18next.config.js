/**
 * @type {import('next-i18next').UserConfig}
 */

const config = {
  i18n: {
    defaultLocale: 'en',
    locales: ['ko', 'en', 'ru', 'ja'],
  },
  reloadOnPrerender: true,
}

module.exports = config
