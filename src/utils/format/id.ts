/**
 * Format a string to be used as an ID
 */

export const validId = (str: string) => str
  ?.toLowerCase()
  ?.replace(/[^a-z0-9]/g, '-')
  ?.replace(/-+/g, '-')
  ?.replace(/^-|-$/g, '');
