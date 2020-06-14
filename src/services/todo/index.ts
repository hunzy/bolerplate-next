import axios from 'axios';
import { TodoState } from 'redux/modules/todo';

const axiosInstance = axios.create({
  baseURL: `http://localhost:8080/todo`,
  timeout: 3000,
});

export function axiosFetchTodo() {
  return axiosInstance.get<TodoState>('');
}

export function axiosAddTodo(todo: { text: string; completed: boolean }) {
  return axiosInstance.post('', todo);
}
