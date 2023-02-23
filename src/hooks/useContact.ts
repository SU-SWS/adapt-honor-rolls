import { useMemo } from 'react';
import { Contact2, suffixPersonalOptions } from '../services/megaprofile';
import { honorApi } from '../redux/slices/honorApi';

const { useGetContactQuery } = honorApi;

export const useContact = () => {
  const {
    data: contact,
    isLoading,
    error,
    refetch,
  } = useGetContactQuery();

  // Add any needed defaults for null values
  const processedContact: Contact2 = useMemo(() => {
    if (!contact) {
      return undefined;
    }

    const myFriendsCallMe = contact.name.myFriendsCallMe ?? contact.name.fullNameParsed.firstName ?? '';
    const suffixPersonal = suffixPersonalOptions.includes(contact.name.fullNameParsed?.suffixPersonal)
      ? contact.name.fullNameParsed.suffixPersonal
      : null;

    return {
      ...contact,
      name: {
        ...contact.name,
        myFriendsCallMe,
        fullNameParsed: {
          ...contact.name.fullNameParsed,
          suffixPersonal,
        },
      },
    };
  }, [contact]);

  return {
    contact: processedContact,
    isLoading,
    error,
    refetch,
  };
};
