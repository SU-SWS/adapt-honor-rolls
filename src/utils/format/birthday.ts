import { format, parse, isValid } from 'date-fns';

/**
 * Utility for formatting birthday
 */

export const formatBirthday = (birthDate: string) => {
  if (birthDate) {
    const parsedBday = parse(birthDate, 'MMMM-dd', new Date());

    // We have some bad data in the database eg, "November-0", so we need to check if the date is valid
    if (isValid(parsedBday)) {
      return format(parsedBday, 'MMMM d');
    }
  }
  return null;
};
