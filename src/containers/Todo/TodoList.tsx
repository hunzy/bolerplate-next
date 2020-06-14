import React, { FC } from 'react';
import { TodoState } from 'redux/modules/todo';

interface Props {
  todo: TodoState;
}

const TodoList: FC<Props> = ({ todo }) => {
  const todoList = todo.map((t) => <li key={t.id}>{t.text}</li>);
  return <ul>{todoList}</ul>;
};

export default TodoList;
