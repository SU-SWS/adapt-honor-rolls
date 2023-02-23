/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
/**
 * Tailwind Configuration.
 */
const path = require('path');

// Path to custom Tailwind plugins for Honor
const dir = path.resolve(__dirname, 'src/tailwind/plugins');

module.exports = {
  prefix: 'su-',
  presets: [
    require('decanter'),
  ],
  content: [
    './src/**',
  ],
  theme: {
    // Honor themes extending our Decanter ones
    extend: {
      colors: require(`${dir}/theme/colors.js`)(),
      screens: require(`${dir}/theme/screens.js`)(),
    },
  },
  plugins: [
    require(`${dir}/base/base.js`)(),
    require(`${dir}/base/mui/select.js`)(),
    require(`${dir}/base/mui/autocomplete.js`)(),
    require(`${dir}/components/layout/honor-cc.js`)(),
    require(`${dir}/components/typography/ma-typography.js`)(),
  ],
};
