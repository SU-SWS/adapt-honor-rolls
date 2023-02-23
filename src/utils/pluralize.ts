/**
 * Simple pluralizer
 */
export const pluralize = (count: number, word: string, suffix: string = 's'): string => `${word}${count === 1 ? '' : suffix}`;
