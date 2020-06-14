import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { axiosAddTodo, axiosFetchTodo, axiosDeleteTodo } from 'services/todo';

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

type TodoWithoutId = Omit<Todo, 'id'>;

export type TodoState = Todo[];

const initialState: TodoState = [];

export const fetchTodo = createAsyncThunk<TodoState>('todo/fetch', async () => {
  const response = await axiosFetchTodo();
  return response.data;
});

export const addTodo = createAsyncThunk<Todo, TodoWithoutId>('todo/add', async (todo) => {
  const response = await axiosAddTodo(todo);
  return response.data as Todo;
});

export const deleteTodo = createAsyncThunk<number, number>('todo/delete', async (id) => {
  await axiosDeleteTodo(id);
  return id;
});

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    toggleTodo(state, action: PayloadAction<number>) {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTodo.fulfilled, (state, { payload }) => {
      return payload;
    });
    builder.addCase(addTodo.fulfilled, (state, { payload }) => {
      state.push(payload);
    });
    builder.addCase(deleteTodo.fulfilled, (state, { payload }) => {
      return state.filter((todo) => todo.id !== payload);
    });
  },
});

export const { toggleTodo } = todoSlice.actions;

export default todoSlice.reducer;
