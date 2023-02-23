import { createApi } from '@reduxjs/toolkit/query/react';
import { honorBaseQuery } from './honorBaseQuery';
import { GetAssetPayload } from '../../../pages/api/assets';
import { GetContactResponse } from '../../../pages/api/contact';
import { GetAffiliationsResponse } from '../../../pages/api/affiliations';

export interface getCoveoTokenResponse {
  token: string;
}

export const honorApi = createApi({
  reducerPath: 'honorApi',
  baseQuery: honorBaseQuery(),
  tagTypes: [
    'Affiliations',
    'Contact',
    'Profile',
    'CoveoToken',
    'Location',
  ],
  endpoints: (builder) => ({
    /**
     * Private Assets
     */
    getAsset: builder.query<GetAssetPayload, string>({
      query: (filename) => ({ method: 'GET', url: '/assets', params: { filename } }),
    }),
    getAffiliations: builder.query<GetAffiliationsResponse, void>({
      query: () => ({ method: 'GET', url: '/affiliations' }),
      providesTags: ['Affiliations'],
    }),
    getContact: builder.query<GetContactResponse, void>({
      query: () => ({ method: 'GET', url: '/contact' }),
      providesTags: ['Contact'],
    }),
  }),
});
