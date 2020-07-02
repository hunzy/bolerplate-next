import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { TodoState } from '../modules/todo';

export const todoSelector = createSelector<RootState, TodoState, TodoState>(
  (state) => state.todo,
  (todo) => todo,
);
