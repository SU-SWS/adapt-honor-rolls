/**
 * Honor custom base styles
 */

module.exports = function () {
  return function ({ addBase }) {
    addBase({
      html: {
        scrollBehavior: 'smooth',
      },
      select: {
        fontSize: '1.6rem',
      },
    });
  };
};
