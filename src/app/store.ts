import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import catsReducer from '../features/cats/catsSlice';

export const store = configureStore({
  reducer: {
    cats: catsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
