/**
 * MUI Autocomplete style overrides for Honor
 */
module.exports = function () {
  return function ({ addBase, config }) {
    addBase({
      '.su-location-search': {
        '.MuiTouchRipple-root': {
          display: 'none',
        },
      },
      '.su-autocomplete-field .MuiAutocomplete-endAdornment': {
        top: '1.5rem',
      },
      // This is the individual list items within the dropdown menu
      '.MuiAutocomplete-popper .MuiAutocomplete-listbox .MuiAutocomplete-option': {
        '&.Mui-focused': {
          backgroundColor: config('theme.colors.lagunita.20'),
          textDecoration: 'underline',

          '&.Mui-focusedVisible': {
            backgroundColor: config('theme.colors.lagunita.20'),
            textDecoration: 'underline',
          },
        },
      },
    });
  };
};
