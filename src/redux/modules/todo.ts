import { createSlice, PayloadAction } from '@reduxjs/toolkit';
let nextTodoId = 0;

export type TodoState = {
  id: number;
  text: string;
  completed: boolean;
}[];

const initialState: TodoState = [];

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<string>) {
      state.push({ id: nextTodoId++, text: action.payload, completed: false });
    },
    toggleTodo(state, action: PayloadAction<number>) {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});

export const { addTodo, toggleTodo } = todoSlice.actions;

export default todoSlice.reducer;
