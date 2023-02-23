/**
 * My Account/honor specific typography styles
 */
module.exports = function () {
  return function ({ addComponents, theme }) {
    const components = {
      '.ma-body': {
        fontSize: '1.8rem',
        lineHeight: '1.3',
      },
      '.ma-card': {
        fontSize: '1.6rem',
        lineHeight: '1.3',
      },
      '.ma-intro, .honor-card': {
        fontSize: '1.8rem',
        lineHeight: '1.3',
        '@screen md': {
          fontSize: '2.1rem',
        },
      },
      '.honor-subheading': {
        fontSize: '2rem',
        lineHeight: '1.2',
        '@screen md': {
          fontSize: '2.5rem',
        },
      },
      '.ma-big': {
        fontSize: '2.3rem',
        lineHeight: '1.3',
      },
      '.ma-level-1': {
        fontSize: '1.8rem',
        lineHeight: '1.2',
        fontWeight: '600',
        '@screen md': {
          fontSize: '2.1rem',
        },
      },
      '.honor-level-2': {
        fontSize: '2rem',
        lineHeight: '1.2',
        fontWeight: '700',
        '@screen md': {
          fontSize: '2.4rem',
        },
      },
      '.honor-level-3': {
        fontSize: '2.4rem',
        lineHeight: '1.2',
        fontWeight: '700',
        '@screen md': {
          fontSize: '2.8rem',
        },
      },
    };

    addComponents(components);
  };
};
