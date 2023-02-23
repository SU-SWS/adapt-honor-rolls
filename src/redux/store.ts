import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import { auth } from './slices/auth';
import { honorApi } from './slices/honorApi';

export const store = configureStore({
  reducer: {
    [auth.name]: auth.reducer,
    [honorApi.reducerPath]: honorApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(honorApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export interface ThunkConfig {
  state: RootState;
  dispatch: AppDispatch;
}
