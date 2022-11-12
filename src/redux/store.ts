import { configureStore } from '@reduxjs/toolkit';
import { portfolioReducer } from './slices/portfolioSlice';
import { clientReducer } from './slices/clientSlice';
import { useDispatch } from 'react-redux';
export const store = configureStore({
  reducer: {
    portfolioReducer,
    clientReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
