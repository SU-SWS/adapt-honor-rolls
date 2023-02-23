import { Contact } from '../../pages/api/contact';

/**
 * Contact model formatters
 */

export const firstInitial = (contact: Contact) => {
  const name = contact?.name?.digitalName || contact?.name?.myFriendsCallMe || contact?.name?.fullNameParsed?.firstName || '?';
  return name.trim()[0].toUpperCase();
};
