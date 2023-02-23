import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';
import axios from 'axios';
import { AuthUser } from 'adapt-auth-sdk';
import { ThunkConfig } from '../../store';
import { honorApi } from '../honorApi';

export interface AuthState {
  authenticating: boolean;
  initialized: boolean;
  user?: AuthUser;
  error?: any;
}
class UserDataRetrievalError extends Error {
  constructor(message = '') {
    super(message);
    this.name = 'UserDataRetrievalError';
  }
}

/**
 * initialize auth session thunk
 */
export const initialize = createAsyncThunk<AuthUser, void, ThunkConfig>('auth/initialize', async (_, { dispatch, getState }): Promise<AuthUser> => {
  const { auth } = getState();

  // Check for auth session cookie
  const hasSession: (string | undefined) = Cookies.get(`${process.env.ADAPT_AUTH_SESSION_NAME}-session`);

  if (hasSession) {
    // Fetch user auth session
    try {
      const { data: user } = await axios.get<AuthUser>('/api/auth/session');

      // Preload other user data
      const results = await Promise.all([
        dispatch(honorApi.endpoints.getContact.initiate()),
        dispatch(honorApi.endpoints.getAffiliations.initiate()),
      ]);
      const error = results.find((result) => result.error);

      // Rethrow error from initial data fetch for auth error
      if (error) {
        if (error.error && 'data' in error.error && error.error.data === 'NOT FOUND') {
          throw new UserDataRetrievalError('Failed to retrieve user data');
        } else {
          throw new Error('Unknown authentication error');
        }
      }

      return user;
    } catch (error: any) {
      // Don't throw an error if request is aborted. (e.g. due to page navigation.)
      if (error.code !== 'ECONNABORTED') {
        throw new Error(error);
      }
    }
  }

  return auth.user;
}, {
  // Only fire this once
  condition: (_, { getState }) => {
    const { auth } = getState();
    return !auth.authenticating && !auth.initialized;
  },
});

export const initialState: AuthState = {
  authenticating: false,
  initialized: false,
};

export const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(initialize.pending, (state) => {
        state.authenticating = true;
      })
      .addCase(initialize.fulfilled, (state, action) => {
        state.authenticating = false;
        state.initialized = true;
        state.user = action.payload;
      })
      .addCase(initialize.rejected, (state, action) => {
        state.authenticating = false;
        state.initialized = true;
        state.error = action.error;
      });
  },
});
