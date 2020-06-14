import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { axiosAddTodo, axiosFetchTodo, axiosDeleteTodo } from 'services/todo';

export type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

export type TodoState = {
  todos: Todo[];
  input: {
    value: string;
    valid: boolean; // trueの場合、バリデーションが通っている
  };
};

const initialState: TodoState = {
  todos: [],
  input: {
    value: '',
    valid: true,
  },
};

export const fetchTodo = createAsyncThunk('todo/fetch', async () => {
  const response = await axiosFetchTodo();
  return response.data as Todo[];
});

export const addTodo = createAsyncThunk('todo/add', async (todoText: string) => {
  const response = await axiosAddTodo({ text: todoText, completed: false });
  return response.data as Todo;
});

export const deleteTodo = createAsyncThunk('todo/delete', async (id: number) => {
  await axiosDeleteTodo(id);
  return id;
});

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    changeInput(state, action: PayloadAction<string>) {
      state.input.value = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTodo.fulfilled, (state, { payload }) => {
      state.todos = payload;
    });
    builder.addCase(addTodo.fulfilled, (state, { payload }) => {
      state.todos.push(payload);
      state.input.value = '';
    });
    builder.addCase(deleteTodo.fulfilled, (state, { payload }) => {
      state.todos = state.todos.filter((todo) => todo.id !== payload);
    });
  },
});

export const { changeInput } = todoSlice.actions;

export default todoSlice.reducer;
