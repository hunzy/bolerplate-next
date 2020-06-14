import axios from 'axios';
import { Todo } from 'redux/modules/todo';

const axiosInstance = axios.create({
  baseURL: `http://localhost:8080/todo`,
  timeout: 3000,
});

export function axiosFetchTodo() {
  return axiosInstance.get<Todo[]>('');
}

export function axiosAddTodo(todo: { text: string; completed: boolean }) {
  return axiosInstance.post('', todo);
}

export function axiosDeleteTodo(id: number) {
  return axiosInstance.delete(`/${id}`);
}
