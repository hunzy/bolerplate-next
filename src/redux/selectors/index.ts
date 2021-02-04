import { createSelector } from '@reduxjs/toolkit';
import { TodoState } from '../modules/todo';
import { RootState } from '../store';

export const todoSelector = createSelector<RootState, TodoState, TodoState>(
  (state) => state.todo,
  (todo) => todo,
);
