import { createSelector } from 'reselect';
import { RootState } from '../store';

export const todoSelector = createSelector(
  (state: RootState) => state.todo,
  (todo) => todo,
);
