import axios, {
  AxiosError,
  Method,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios';
import { BaseQueryFn } from '@reduxjs/toolkit/query/react';

export interface BaseQueryError {
  status?: number;
  data?: any;
}

/**
 * Custom baseQueryFn from RTK
 * Automatically handles authenticating requests to our local api (eventually)
 */
export const honorBaseQuery = (): BaseQueryFn<
    {
      url: string;
      method: Method;
      data?: AxiosRequestConfig['data'];
      params?: AxiosRequestConfig['params'];
      registrationToken?: string;
    },
    unknown,
    BaseQueryError
> => async ({
  url,
  method,
  data,
  params,
  registrationToken,
}) => {
  // NOTE: Auth is automatically attached to requests via session cookies
  try {
    const result: AxiosResponse<any, any> = await axios.request({
      // Strip leading slash for better formatting
      url: `/api/${url.replace(/^\//, '')}`,
      method,
      data,
      params,
      headers: registrationToken ? {
        Authorization: `Bearer ${registrationToken}`,
      } : {},
    });

    return { data: result.data };
  } catch (error) {
    const err = error as AxiosError;

    return {
      error: {
        status: err.response?.status,
        data: err.response?.data,
      },
    };
  }
};
