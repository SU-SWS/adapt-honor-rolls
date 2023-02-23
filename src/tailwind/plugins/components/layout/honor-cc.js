/**
 * Modified center container for some sections in Honor, e.g., masthead, search results, etc.
 */
module.exports = function () {
  return function ({ addComponents, theme }) {
    // Find and set the padding based on the screen margins
    const screens = theme('screens');
    const padding = {};

    // Create padding for each screen size which equals to the screen margin setting.
    const keys = Object.keys(screens);
    keys.forEach((key) => {
      padding[`@screen ${key}`] = {
        paddingLeft: theme(`decanter.screenMargins.${key}`),
        paddingRight: theme(`decanter.screenMargins.${key}`),
      };
    });

    const components = {
      // Center an element horizontally.
      '.honor-cc': {
        paddingLeft: theme('decanter.screenMargins.xs'),
        paddingRight: theme('decanter.screenMargins.xs'),
        marginLeft: 'auto',
        marginRight: 'auto',
        ...padding,
        '@media only screen and (min-width: 2000px)': {
          paddingLeft: 'calc((100% - 1800px)/2)',
          paddingRight: 'calc((100% - 1800px)/2)',
        },
      },
    };

    addComponents(components);
  };
};
