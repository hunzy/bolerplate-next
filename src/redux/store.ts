import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import todoReducer from './modules/todo';

export const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
// export const store = configureStore<RootState>({ reducer: rootReducer });
