import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { axiosAddTodo, axiosFetchTodo } from 'services/todo';
let nextTodoId = 0;

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

export type TodoState = Todo[];

const initialState: TodoState = [];

export const fetchTodo = createAsyncThunk<TodoState>('todo/fetch', async () => {
  const response = await axiosFetchTodo();
  return response.data;
});

export const saveTodo = createAsyncThunk<void, { text: string; completed: boolean }>('todo/save', async (todo) => {
  await axiosAddTodo(todo);
});

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<string>) {
      state.push({ id: ++nextTodoId, text: action.payload, completed: false });
    },
    toggleTodo(state, action: PayloadAction<number>) {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTodo.fulfilled, (state, { payload }) => {
      const todos = payload;
      nextTodoId = todos[todos.length - 1].id;
      return todos;
    });
    builder.addCase(saveTodo.fulfilled, (state, { payload }) => {
      console.log('--- extraReducers ---');
      console.log(payload);
    });
  },
});

export const { addTodo, toggleTodo } = todoSlice.actions;

export default todoSlice.reducer;
