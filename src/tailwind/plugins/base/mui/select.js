/**
 * MUI Select field overrides for My Account
 */
module.exports = function () {
  return function ({ addBase, config }) {
    addBase({
      '.su-select-field': {
        '.MuiOutlinedInput-notchedOutline': {
          borderColor: config('theme.colors.black.20'),
        },
        '.MuiOutlinedInput-root.Mui-disabled': {
          backgroundColor: config('theme.colors.black.10'),
        },
        '.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
          borderColor: config('theme.colors.lagunita.light'),
          borderRadius: config('theme.borderRadius.DEFAULT'),
        },
        '.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
          borderWidth: '1px',
          borderColor: config('theme.colors.lagunita.light'),
          borderBottomColor: config('theme.colors.lagunita.DEFAULT'),
          boxShadow: `${config('theme.colors.lagunita.light')} 0 0 0 2px`,
        },
      },
    });
  };
};
