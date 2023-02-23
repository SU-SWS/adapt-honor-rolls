import { GetContactSuccessResponseDTO } from '../services/megaprofile';

export type Contact = GetContactSuccessResponseDTO['contact'];

type GenerateDigitalNameProps = {
  firstName?: string;
  lastName?: string;
  myFriendsCallMe?: string;
};

/**
 * contact digitalName from needed parts
 */
export const generateDigitalName = ({
  firstName,
  lastName,
  myFriendsCallMe,
}: GenerateDigitalNameProps) => {
  if (myFriendsCallMe) return `${myFriendsCallMe} ${lastName}`;
  if (firstName) return `${firstName} ${lastName}`;
  return lastName;
};

/**
 * contact defaultDigitalName
 */
export const defaultDigitalName = (contact: Contact) => {
  const { firstName, lastName } = contact.name.fullNameParsed;
  const { myFriendsCallMe } = contact.name;

  return generateDigitalName({ firstName, lastName, myFriendsCallMe });
};

/**
 * Resolved contact digitalName
 */
export const contactDigitalName = (contact: Contact) => contact?.name?.digitalName || defaultDigitalName(contact);
