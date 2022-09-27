import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { changeInput, addTodo, deleteTodo, fetchTodo } from '../../redux/modules/todo';
import { todoSelector } from '../../redux/selectors';
import { useAppDispatch } from '../../redux/store';
import { TodoComponent } from './Todo';

export const Todo = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTodo());
  }, []);

  const todo = useSelector(todoSelector);

  const handleChangeInput = (value: string) => dispatch(changeInput(value));
  const handleAddTodo = async () => await dispatch(addTodo(todo.input.value));
  const handleDeleteTodo = async (id: number) => await dispatch(deleteTodo(id));

  return (
    <TodoComponent todo={todo} changeInput={handleChangeInput} addTodo={handleAddTodo} deleteTodo={handleDeleteTodo} />
  );
};
