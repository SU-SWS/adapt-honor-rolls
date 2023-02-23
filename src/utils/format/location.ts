/**
 * Utility for format home location on PersonCard and Profile page
 */

export const formatLocation = (location: string) => {
  const locationArray = location.split(',');
  const city = locationArray[0].trimEnd();
  const stateOrCountry = locationArray[1].trimStart();
  return `${city}, ${stateOrCountry}`;
};
