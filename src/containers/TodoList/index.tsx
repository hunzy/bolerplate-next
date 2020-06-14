import React from 'react';
import { useSelector } from 'react-redux';
import { todoSelector } from 'redux/selectors';
import TodoListComponent from './TodoList';

const TodoList = () => {
  const todo = useSelector(todoSelector);

  return <TodoListComponent todo={todo} />;
};

export default TodoList;
