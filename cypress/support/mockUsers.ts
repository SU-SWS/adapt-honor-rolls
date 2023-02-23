// TODO: Replace mock data from mock server with our own static mocks.
export const maxDataUser = {
  encodedSUID: 1234567890,
  contact: {
    name: {
      username: 'maxdatauser',
      fullNameParsed: {
        firstName: 'Max',
        lastName: 'Data',
      },
    },
  },
  emails: {
    id: '21D2DEF98D53401F81B1CFC786495F3CC4E996A6EDFD312EDC5658260046C53B',
    emailAddress: 'example@example.com',
    type: 'Business Email',
  },
};
export const minDataUser = {
  encodedSUID: 1000000000,
  contact: {
    name: {
      username: 'mindatauser',
      fullNameParsed: {
        firstName: 'Min',
        lastName: 'Data',
      },
    },
  },
  emails: {
    id: '21D2DEF98D53401F81B1CFC786495F3CC4E996A6EDFD312EDC5658260046C53B',
    emailAddress: 'example@example.com',
    type: 'Home Email',
  },
};

export const mockData = {
  constituents: {
    minDataUser,
    maxDataUser,
  },
};
